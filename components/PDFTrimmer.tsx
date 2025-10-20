'use client';

import { useState, useEffect, useRef } from 'react';
import { uploadPDF, getPreview, processPDF, getDownloadURL, PageSettings } from '@/lib/api';

export default function PDFTrimmer() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [filename, setFilename] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [previewImage, setPreviewImage] = useState('');
  const [previewSize, setPreviewSize] = useState({ width: 0, height: 0 });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState<'info' | 'success' | 'error'>('info');
  
  const [singlePageMode, setSinglePageMode] = useState(false);
  const [selectedSide, setSelectedSide] = useState<'left' | 'right'>('left');
  
  const [pageSettings, setPageSettings] = useState<Record<number, PageSettings>>({});
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [pageExportSettings, setPageExportSettings] = useState<Record<number, { left: boolean; right: boolean }>>({});
  
  const [format, setFormat] = useState<'JPG' | 'PNG' | 'TIFF' | 'WebP'>('JPG');
  const [quality, setQuality] = useState(95);
  const [dpi, setDpi] = useState(300);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  
  const currentSettings = pageSettings[currentPage] || {
    left: { left: 5, right: 50, top: 5, bottom: 5 },
    right: { left: 50, right: 5, top: 5, bottom: 5 },
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPdfFile(file);
    setLoading(true);
    setStatus('Uploading PDF...');
    setStatusType('info');

    try {
      const result = await uploadPDF(file);
      
      if (result.error) {
        setStatus(`Error: ${result.error}`);
        setStatusType('error');
        return;
      }

      setFilename(result.filename);
      setTotalPages(result.total_pages);
      setCurrentPage(0);
      
      // Initialize settings for all pages
      const settings: Record<number, PageSettings> = {};
      const pages = new Set<number>();
      const exportSettings: Record<number, { left: boolean; right: boolean }> = {};
      for (let i = 0; i < result.total_pages; i++) {
        settings[i] = {
          left: { left: 5, right: 50, top: 5, bottom: 5 },
          right: { left: 50, right: 5, top: 5, bottom: 5 },
        };
        pages.add(i);
        exportSettings[i] = { left: true, right: true };
      }
      setPageSettings(settings);
      setSelectedPages(pages);
      setPageExportSettings(exportSettings);
      
      setStatus('PDF loaded successfully!');
      setStatusType('success');
      
      // Load first page preview
      await loadPreview(result.filename, 0, settings[0]);
    } catch (error) {
      setStatus(`Error: ${error instanceof Error ? error.message : 'Upload failed'}`);
      setStatusType('error');
    } finally {
      setLoading(false);
    }
  };

  const loadPreview = async (fname: string, pageNum: number, settings: PageSettings) => {
    try {
      // fname is actually the blob URL - fetch it and render client-side
      const pdfjs = await import('pdfjs-dist');
      
      // Use the bundled worker from node_modules
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      
      const loadingTask = pdfjs.getDocument(fname);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(pageNum + 1); // PDF.js uses 1-based
      
      const viewport = page.getViewport({ scale: 150 / 72 }); // 150 DPI
      
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const context = canvas.getContext('2d');
      if (!context) return;
      
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      
      await page.render({
        canvasContext: context,
        viewport: viewport,
        canvas: canvas,
      }).promise;
      
      // Convert canvas to image for display
      const imageData = canvas.toDataURL('image/png');
      setPreviewImage(imageData);
      setPreviewSize({ width: viewport.width, height: viewport.height });
    } catch (error) {
      console.error('Error loading preview:', error);
    }
  };

  const updateSettings = (side: 'left' | 'right', key: keyof PageSettings['left'], value: number) => {
    const newSettings = {
      ...pageSettings,
      [currentPage]: {
        ...currentSettings,
        [side]: {
          ...currentSettings[side],
          [key]: value,
        },
      },
    };
    setPageSettings(newSettings);
    
    // Don't call loadPreview here - the useEffect will redraw the crop lines automatically
  };

  const copyToAll = () => {
    const current = currentSettings;
    const newSettings: Record<number, PageSettings> = {};
    for (let i = 0; i < totalPages; i++) {
      newSettings[i] = JSON.parse(JSON.stringify(current));
    }
    setPageSettings(newSettings);
    setStatus('Settings copied to all pages');
    setStatusType('success');
  };

  const copyToRemaining = () => {
    const current = currentSettings;
    const newSettings = { ...pageSettings };
    for (let i = currentPage + 1; i < totalPages; i++) {
      newSettings[i] = JSON.parse(JSON.stringify(current));
    }
    setPageSettings(newSettings);
    setStatus('Settings copied to remaining pages');
    setStatusType('success');
  };

  const changePage = (delta: number) => {
    const newPage = currentPage + delta;
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
      if (filename) {
        loadPreview(filename, newPage, pageSettings[newPage]);
      }
    }
  };

  const togglePage = (pageNum: number) => {
    const newSelected = new Set(selectedPages);
    if (newSelected.has(pageNum)) {
      newSelected.delete(pageNum);
    } else {
      newSelected.add(pageNum);
    }
    setSelectedPages(newSelected);
  };

  const togglePageSide = (pageNum: number, side: 'left' | 'right') => {
    const newExportSettings = { ...pageExportSettings };
    if (!newExportSettings[pageNum]) {
      newExportSettings[pageNum] = { left: true, right: true };
    }
    newExportSettings[pageNum][side] = !newExportSettings[pageNum][side];
    setPageExportSettings(newExportSettings);
  };

  const selectAll = () => {
    const all = new Set<number>();
    for (let i = 0; i < totalPages; i++) all.add(i);
    setSelectedPages(all);
  };

  const selectNone = () => {
    setSelectedPages(new Set());
  };

  const handleProcess = async () => {
    if (selectedPages.size === 0) {
      setStatus('Please select at least one page');
      setStatusType('error');
      return;
    }

    setLoading(true);
    setStatus('Processing pages... This may take a moment');
    setStatusType('info');

    try {
      // Process PDF client-side using pdfjs-dist and canvas
      const pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      
      // Import jpeg-js for better JPEG encoding control (Kindle compatibility)
      const jpeg = format === 'JPG' ? await import('jpeg-js') : null;
      
      const loadingTask = pdfjs.getDocument(filename);
      const pdf = await loadingTask.promise;
      
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      
      const selectedPagesArray = Array.from(selectedPages).sort((a, b) => a - b);
      let sequentialNumber = 1;
      
      for (const pageNum of selectedPagesArray) {
        setStatus(`Processing page ${pageNum + 1} of ${totalPages}...`);
        
        const page = await pdf.getPage(pageNum + 1);
        const viewport = page.getViewport({ scale: dpi / 72 });
        
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext('2d');
        
        if (!context) continue;
        
        await page.render({
          canvasContext: context,
          viewport: viewport,
          canvas: canvas,
        }).promise;
        
        const settings = pageSettings[pageNum] || currentSettings;
        const exportSides = pageExportSettings[pageNum] || { left: true, right: true };
        const width = canvas.width;
        const height = canvas.height;
        
        // Export left half (only if enabled for this page)
        if (exportSides.left && (!singlePageMode || selectedSide === 'left')) {
          const leftSettings = settings.left;
          const leftCanvas = document.createElement('canvas');
          const leftX = Math.floor((width * leftSettings.left) / 100);
          const leftY = Math.floor((height * leftSettings.top) / 100);
          const leftW = Math.floor(width * (100 - leftSettings.left - leftSettings.right) / 100);
          const leftH = Math.floor(height * (100 - leftSettings.top - leftSettings.bottom) / 100);
          
          leftCanvas.width = leftW;
          leftCanvas.height = leftH;
          const leftCtx = leftCanvas.getContext('2d');
          if (leftCtx) {
            leftCtx.drawImage(canvas, leftX, leftY, leftW, leftH, 0, 0, leftW, leftH);
            
            // Create blob with Kindle-compatible JPEG encoding
            let blob: Blob;
            if (format === 'JPG' && jpeg) {
              // Use jpeg-js for strict Kindle JPEG compliance
              const imageData = leftCtx.getImageData(0, 0, leftW, leftH);
              const jpegData = jpeg.encode({
                data: imageData.data,
                width: leftW,
                height: leftH,
              }, quality);
              // Convert Buffer to Uint8Array for Blob
              const uint8Array = new Uint8Array(jpegData.data);
              blob = new Blob([uint8Array], { type: 'image/jpeg' });
            } else {
              // Use standard encoding for PNG/TIFF/WebP
              const mimeType = `image/${format.toLowerCase()}`;
              blob = await new Promise<Blob>((resolve) => {
                leftCanvas.toBlob((b) => resolve(b!), mimeType, quality / 100);
              });
            }
            
            const fileExt = format === 'JPG' ? 'jpg' : format.toLowerCase();
            const filename = `${String(sequentialNumber).padStart(3, '0')}.${fileExt}`;
            zip.file(filename, blob);
            sequentialNumber++;
          }
        }
        
        // Export right half (only if enabled for this page)
        if (exportSides.right && !singlePageMode) {
          const rightSettings = settings.right;
          const rightCanvas = document.createElement('canvas');
          const rightX = Math.floor((width * rightSettings.left) / 100);
          const rightY = Math.floor((height * rightSettings.top) / 100);
          const rightW = Math.floor(width * (100 - rightSettings.left - rightSettings.right) / 100);
          const rightH = Math.floor(height * (100 - rightSettings.top - rightSettings.bottom) / 100);
          
          rightCanvas.width = rightW;
          rightCanvas.height = rightH;
          const rightCtx = rightCanvas.getContext('2d');
          if (rightCtx) {
            rightCtx.drawImage(canvas, rightX, rightY, rightW, rightH, 0, 0, rightW, rightH);
            
            // Create blob with Kindle-compatible JPEG encoding
            let blob: Blob;
            if (format === 'JPG' && jpeg) {
              // Use jpeg-js for strict Kindle JPEG compliance
              const imageData = rightCtx.getImageData(0, 0, rightW, rightH);
              const jpegData = jpeg.encode({
                data: imageData.data,
                width: rightW,
                height: rightH,
              }, quality);
              // Convert Buffer to Uint8Array for Blob
              const uint8Array = new Uint8Array(jpegData.data);
              blob = new Blob([uint8Array], { type: 'image/jpeg' });
            } else {
              // Use standard encoding for PNG/TIFF/WebP
              const mimeType = `image/${format.toLowerCase()}`;
              blob = await new Promise<Blob>((resolve) => {
                rightCanvas.toBlob((b) => resolve(b!), mimeType, quality / 100);
              });
            }
            
            const fileExt = format === 'JPG' ? 'jpg' : format.toLowerCase();
            const filename = `${String(sequentialNumber).padStart(3, '0')}.${fileExt}`;
            zip.file(filename, blob);
            sequentialNumber++;
          }
        }
      }
      
      setStatus('Creating ZIP file...');
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      
      // Download the ZIP
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'trimmed-pages.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setStatus('Processing complete! Download started.');
      setStatusType('success');
      setStatus('Processing complete! Download starting...');
      setStatusType('success');
    } catch (error) {
      setStatus(`Error: ${error instanceof Error ? error.message : 'Processing failed'}`);
      setStatusType('error');
    } finally {
      setLoading(false);
    }
  };

  // Draw crop lines on canvas
  useEffect(() => {
    if (!previewImage || !overlayCanvasRef.current) return;

    const canvas = overlayCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      const w = canvas.width;
      const h = canvas.height;
      const settings = currentSettings;

      ctx.clearRect(0, 0, w, h);

      // Calculate line positions
      const leftLeft = (w * settings.left.left) / 100;
      const leftRight = w * (1 - settings.left.right / 100);
      const leftTop = (h * settings.left.top) / 100;
      const leftBottom = h * (1 - settings.left.bottom / 100);

      const rightLeft = (w * settings.right.left) / 100;
      const rightRight = w * (1 - settings.right.right / 100);
      const rightTop = (h * settings.right.top) / 100;
      const rightBottom = h * (1 - settings.right.bottom / 100);

      ctx.strokeStyle = '#dc3545';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);

      // Left page lines (RED)
      ctx.beginPath();
      ctx.moveTo(leftLeft, 0);
      ctx.lineTo(leftLeft, h);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(leftRight, 0);
      ctx.lineTo(leftRight, h);
      ctx.stroke();

      if (singlePageMode) {
        ctx.beginPath();
        ctx.moveTo(0, leftTop);
        ctx.lineTo(w, leftTop);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, leftBottom);
        ctx.lineTo(w, leftBottom);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(0, leftTop);
        ctx.lineTo(leftRight, leftTop);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, leftBottom);
        ctx.lineTo(leftRight, leftBottom);
        ctx.stroke();

        // Right page lines (BLUE)
        ctx.strokeStyle = '#007bff';

        ctx.beginPath();
        ctx.moveTo(rightLeft, 0);
        ctx.lineTo(rightLeft, h);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(rightRight, 0);
        ctx.lineTo(rightRight, h);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(rightLeft, rightTop);
        ctx.lineTo(w, rightTop);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(rightLeft, rightBottom);
        ctx.lineTo(w, rightBottom);
        ctx.stroke();
      }

      ctx.setLineDash([]);
    };
    img.src = previewImage;
  }, [previewImage, currentSettings, singlePageMode]);

  const currentSideSettings = selectedSide === 'left' ? currentSettings.left : currentSettings.right;

  if (!pdfFile) {
    return (
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
          id="pdf-input"
        />
        <label
          htmlFor="pdf-input"
          className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Select PDF File
        </label>
        <p className="mt-4 text-gray-600">Upload your scanned book PDF to begin</p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-6">
      {/* Preview Panel */}
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="text-center font-semibold mb-3">
            Page {currentPage + 1} of {totalPages}
          </div>
          
          <div className="relative bg-gray-100 border-2 border-gray-300 rounded overflow-hidden" style={{ minHeight: 400 }}>
            {/* Hidden canvas for PDF rendering */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            
            {previewImage ? (
              <div className="relative inline-block w-full">
                <img src={previewImage} alt="Preview" className="max-w-full h-auto mx-auto" />
                <canvas 
                  ref={overlayCanvasRef} 
                  className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none max-w-full h-auto"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-96">
                <p className="text-gray-500">Loading preview...</p>
              </div>
            )}
          </div>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => changePage(-1)}
              disabled={currentPage === 0}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded hover:from-purple-700 hover:to-purple-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <button
              onClick={() => changePage(1)}
              disabled={currentPage === totalPages - 1}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded hover:from-purple-700 hover:to-purple-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      <div className="space-y-4">
        {/* Crop Settings */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h3 className="font-semibold text-lg mb-3 border-b-2 border-purple-600 pb-2">
            Crop Settings (% to trim)
          </h3>

          <div className="space-y-3">
            <label className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded">
              <input
                type="checkbox"
                checked={singlePageMode}
                onChange={(e) => setSinglePageMode(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-blue-700">
                Single Page Mode (for covers, single pages)
              </span>
            </label>

            {!singlePageMode && (
              <div className="flex gap-3 justify-center">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="page-side"
                    value="left"
                    checked={selectedSide === 'left'}
                    onChange={(e) => setSelectedSide('left')}
                  />
                  <span className="font-semibold text-red-600">Left Page</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="page-side"
                    value="right"
                    checked={selectedSide === 'right'}
                    onChange={(e) => setSelectedSide('right')}
                  />
                  <span className="font-semibold text-blue-600">Right Page</span>
                </label>
              </div>
            )}

            {/* Sliders */}
            <div className="space-y-2">
              {(['left', 'right', 'top', 'bottom'] as const).map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <label className="w-16 text-sm text-gray-600 capitalize">{key}:</label>
                  <input
                    type="range"
                    min="0"
                    max={key === 'left' || key === 'right' ? 100 : 50}
                    step="0.5"
                    value={currentSideSettings[key]}
                    onChange={(e) => updateSettings(selectedSide, key, parseFloat(e.target.value))}
                    className="flex-1"
                  />
                  <span className="w-12 text-right text-sm">{currentSideSettings[key]}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={copyToAll}
                className="px-3 py-1.5 text-sm bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded hover:from-purple-700 hover:to-purple-900"
              >
                Copy to All
              </button>
              <button
                onClick={copyToRemaining}
                className="px-3 py-1.5 text-sm bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded hover:from-purple-700 hover:to-purple-900"
              >
                Copy to Remaining
              </button>
            </div>
          </div>
        </div>

        {/* Export Settings */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h3 className="font-semibold text-lg mb-3 border-b-2 border-purple-600 pb-2">
            Export Settings
          </h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Format:</label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              >
                <option value="JPG">JPG</option>
                <option value="PNG">PNG</option>
                <option value="TIFF">TIFF</option>
                <option value="WebP">WebP</option>
              </select>
            </div>

            {(format === 'JPG' || format === 'WebP') && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">Quality: {quality}</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            <div>
              <label className="block text-sm text-gray-600 mb-1">DPI:</label>
              <input
                type="number"
                min="72"
                max="600"
                value={dpi}
                onChange={(e) => setDpi(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Page Selection */}
        <div className="bg-white rounded-lg shadow-sm border p-4 max-h-96 overflow-y-auto">
          <h3 className="font-semibold text-lg mb-3 border-b-2 border-purple-600 pb-2">
            Pages to Export
          </h3>
          
          <div className="flex gap-2 mb-3">
            <button onClick={selectAll} className="flex-1 px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300">
              Select All
            </button>
            <button onClick={selectNone} className="flex-1 px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300">
              Select None
            </button>
          </div>

          <div className="space-y-1">
            {Array.from({ length: totalPages }, (_, i) => {
              const exportSettings = pageExportSettings[i] || { left: true, right: true };
              return (
                <div key={i} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                  <input
                    type="checkbox"
                    checked={selectedPages.has(i)}
                    onChange={() => togglePage(i)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium min-w-[60px]">Page {i + 1}:</span>
                  {!singlePageMode && (
                    <div className="flex gap-3">
                      <label className="flex items-center gap-1 text-sm">
                        <input
                          type="checkbox"
                          checked={exportSettings.left}
                          onChange={() => togglePageSide(i, 'left')}
                          disabled={!selectedPages.has(i)}
                          className="w-3 h-3"
                        />
                        <span className={!selectedPages.has(i) ? 'text-gray-400' : ''}>Left</span>
                      </label>
                      <label className="flex items-center gap-1 text-sm">
                        <input
                          type="checkbox"
                          checked={exportSettings.right}
                          onChange={() => togglePageSide(i, 'right')}
                          disabled={!selectedPages.has(i)}
                          className="w-3 h-3"
                        />
                        <span className={!selectedPages.has(i) ? 'text-gray-400' : ''}>Right</span>
                      </label>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Button */}
        <button
          onClick={handleProcess}
          disabled={loading}
          className="w-full py-4 text-lg font-bold bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Process PDF'}
        </button>

        {/* Status */}
        {status && (
          <div
            className={`p-3 rounded text-center text-sm ${
              statusType === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : statusType === 'error'
                ? 'bg-red-100 text-red-800 border border-red-300'
                : 'bg-blue-100 text-blue-800 border border-blue-300'
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
