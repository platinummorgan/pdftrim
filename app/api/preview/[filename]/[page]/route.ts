import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(
  request: Request,
  segmentData: { params: Promise<{ filename: string; page: string }> }
) {
  try {
    const params = await segmentData.params;
    const body = await request.json();
    const { left_crop, right_crop } = body;
    
    // The filename is actually the blob URL
    const blobUrl = decodeURIComponent(params.filename);
    const pageNum = parseInt(params.page);

    console.log('Preview request:', { blobUrl, pageNum });

    // For now, we'll download the PDF from blob and use pdf-lib to render
    // Note: pdf-lib doesn't have built-in rendering, so we need a different approach
    
    // Download PDF from blob
    const pdfResponse = await fetch(blobUrl);
    if (!pdfResponse.ok) {
      throw new Error(`Failed to download PDF: ${pdfResponse.statusText}`);
    }

    const pdfBuffer = await pdfResponse.arrayBuffer();
    
    // We need to use a library that can render PDFs to images
    // For now, return a placeholder that we'll implement with canvas on client side
    // OR we use pdfjs-dist on the server
    
    const { getDocument, GlobalWorkerOptions } = await import('pdfjs-dist');
    
    // We need to set the worker - but for serverless, we'll use the legacy build
    GlobalWorkerOptions.workerSrc = '';
    
    const loadingTask = getDocument({ data: pdfBuffer });
    const pdfDoc = await loadingTask.promise;
    const page = await pdfDoc.getPage(pageNum + 1); // PDF.js uses 1-based indexing
    
    const viewport = await page.getViewport({ scale: 150 / 72 }); // 150 DPI for preview
    
    // Create canvas using node-canvas
    const { createCanvas } = await import('canvas');
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');
    
    await page.render({
      canvasContext: context as any,
      viewport: viewport,
      canvas: canvas as any,
    }).promise;
    
    // Convert canvas to base64
    const imageData = canvas.toDataURL('image/png');
    
    return NextResponse.json({
      success: true,
      image: imageData,
      width: viewport.width,
      height: viewport.height,
    });
  } catch (error) {
    console.error('Preview error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Preview failed' },
      { status: 500 }
    );
  }
}
