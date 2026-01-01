import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import PDFTrimmer from "@/components/PDFTrimmer";

export default function Home() {
  return (
    <>
      <JsonLd />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">PDF Book Page Trimmer</h1>
              <nav className="flex gap-6 text-sm">
                <Link href="/guides" className="hover:underline">Guides</Link>
                <Link href="/blog" className="hover:underline">Blog</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Rich Content Section - Above the Fold */}
          <article className="prose prose-lg max-w-none mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              PDF Book Page Trimmer — Professional Crop Tool for Scanned Books & Documents
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Transform your scanned book PDFs into clean, professional-quality images with our free 
              online trimming tool. Unlike basic PDF editors that apply uniform crops across entire 
              documents, our specialized tool recognizes that book scans need intelligent handling—each 
              two-page spread requires different crop settings for left and right pages due to binding 
              gutters, varying margins, and page asymmetry.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Whether you're digitizing a personal library, creating eBooks for Kindle or other e-readers, 
              preparing manuscripts for professional printing, or archiving historical documents, this tool 
              gives you precise control over every page. Preview each crop with color-coded visual guides, 
              batch-apply settings across multiple pages, and export in your choice of format (JPG, PNG, 
              TIFF, or WebP) at resolutions from 72 to 600 DPI.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Traditional PDF Croppers Fall Short</h2>
            <p className="text-gray-700 mb-4">
              Most PDF editing tools treat cropping as a one-size-fits-all operation, applying identical 
              margins to every page. This approach fails spectacularly with scanned books because:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Binding gutters vary:</strong> The center area between left and right pages often 
                  contains shadows, curves, or distortions from book spines that need more aggressive trimming.</li>
              <li><strong>Asymmetric margins:</strong> Left pages typically have more white space on the left 
                  edge, while right pages have more on the right—applying the same crop to both wastes content 
                  or leaves ugly margins.</li>
              <li><strong>Page-specific needs:</strong> Title pages, chapter openings, and covers often need 
                  completely different crop settings than body text pages.</li>
              <li><strong>Variable scanning quality:</strong> Different sections of a book may have been scanned 
                  at different angles or with different border widths, requiring per-page adjustments.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Our Tool Solves These Problems</h2>
            <p className="text-gray-700 mb-4">
              PDF Book Page Trimmer was designed from the ground up for book digitization professionals, 
              librarians, students, and enthusiasts. Here's what makes it different:
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-600 p-6 mb-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Independent Left/Right Cropping</h3>
              <p className="text-gray-700 mb-3">
                Set different crop percentages for left and right pages. For example, you might trim 5% from 
                the outer edge of left pages but 50% from the center to remove the binding gutter, while doing 
                the opposite for right pages. This ensures both pages in a spread are cropped optimally.
              </p>
              <p className="text-gray-700">
                <strong>Visual feedback:</strong> Red dashed lines show where left page crops will occur, 
                blue dashed lines show right page crops—you see exactly what you'll get before processing.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-600 p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Per-Page Customization</h3>
              <p className="text-gray-700 mb-3">
                Every page in your PDF can have unique crop settings. Navigate through your document, adjust 
                crops for special pages like covers or title pages, then use batch operations ("Copy to All" 
                or "Copy to Remaining") to apply common settings across body text pages.
              </p>
              <p className="text-gray-700">
                <strong>Single Page Mode:</strong> Toggle this for pages that aren't two-page spreads—perfect 
                for front/back covers, title pages, or documents that were scanned one page at a time.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step-by-Step Usage Guide</h2>
            <p className="text-gray-700 mb-4">
              Follow this workflow to achieve professional results every time:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-purple-600 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1: Upload Your PDF</h3>
                <p className="text-gray-700 mb-2">
                  Click "Choose File" and select a PDF from your computer (maximum 100MB). The tool supports 
                  PDFs of any version and any number of pages. Common sources include:
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                  <li>Flatbed scanner output (two pages per scan)</li>
                  <li>Book scanning services like ScanSnap or Plustek</li>
                  <li>Camera-captured book pages assembled into PDF</li>
                  <li>Downloaded public domain books from Internet Archive</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2: Configure Initial Crop Settings</h3>
                <p className="text-gray-700 mb-2">
                  Start with the first page and set your baseline crops:
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                  <li><strong>Left Page settings:</strong> Typically 5-10% from outer edge, 45-55% from center 
                      (to remove binding), 3-5% top/bottom</li>
                  <li><strong>Right Page settings:</strong> Mirror of left (45-55% from left/center, 5-10% from 
                      outer right edge)</li>
                  <li><strong>Watch the preview:</strong> Colored lines update in real-time as you adjust sliders</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3: Apply Settings Across Pages</h3>
                <p className="text-gray-700 mb-2">
                  Once you're happy with page 1's crops, use batch operations:
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                  <li><strong>"Copy to All Pages":</strong> Apply current settings to every page (use this if 
                      all pages are similar)</li>
                  <li><strong>"Copy to Remaining":</strong> Apply to all pages after the current one (useful 
                      when front matter needs different crops than body text)</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 4: Fine-Tune Special Pages</h3>
                <p className="text-gray-700 mb-2">
                  Navigate through your PDF using Previous/Next buttons and adjust pages that need special treatment:
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                  <li><strong>Title pages:</strong> Often need less aggressive crops or Single Page Mode</li>
                  <li><strong>Chapter openings:</strong> May have decorative elements requiring custom margins</li>
                  <li><strong>Covers:</strong> Enable Single Page Mode and adjust crops to preserve design elements</li>
                  <li><strong>Index/appendix:</strong> Smaller text may need tighter crops to maximize readability</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 5: Select Pages for Export</h3>
                <p className="text-gray-700 mb-2">
                  In the "Pages to Export" section, choose which pages to include:
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                  <li>Uncheck blank pages or advertising inserts you don't want</li>
                  <li>Deselect pages with scanning artifacts or errors</li>
                  <li>Export only specific chapters by selecting a page range</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 6: Choose Export Format & Quality</h3>
                <p className="text-gray-700 mb-3">
                  Select the best format for your use case:
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900">JPG (Recommended for most books)</p>
                    <p className="text-sm text-gray-700">Quality 85-95, 300 DPI for Kindle/iPad</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900">PNG (For text-heavy documents)</p>
                    <p className="text-sm text-gray-700">Lossless, 150-300 DPI for sharp text</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900">TIFF (For professional printing)</p>
                    <p className="text-sm text-gray-700">LZW compression, 300-600 DPI</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold text-gray-900">WebP (For web galleries)</p>
                    <p className="text-sm text-gray-700">Quality 90, 150 DPI, smallest file size</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 7: Process & Download</h3>
                <p className="text-gray-700 mb-2">
                  Click "Process PDF" and wait for server-side processing (usually 30 seconds to 3 minutes 
                  depending on page count and DPI). You'll receive a ZIP file containing numbered image files 
                  (001.jpg, 002.jpg, etc.) ready for import into eBook creation tools, photo organizers, or 
                  printing services.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Use Cases & Real-World Examples</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  📚 Digitizing a Personal Book Collection
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Scenario:</strong> You have 200 vintage paperbacks you want to preserve digitally 
                  before they deteriorate. You've scanned them two pages at a time using a flatbed scanner.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Solution:</strong> Upload each book's PDF, set left page crops to 7% left / 48% right 
                  (to remove the binding shadow) and right page crops to 48% left / 7% right. Copy to all pages, 
                  then go back to manually adjust the cover page with Single Page Mode enabled. Export as JPG 
                  at quality 92, 300 DPI for excellent quality with manageable file sizes. Each book takes 
                  about 3-5 minutes to process.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  📖 Creating Kindle eBooks from Scanned Textbooks
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Scenario:</strong> You need to create eBook versions of academic textbooks for 
                  students who prefer digital reading on Kindle or tablet devices.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Solution:</strong> After scanning, use aggressive crops on the center binding area 
                  (50-55%) to remove all gutter shadows and ensure clean page splits. For textbooks with wide 
                  margins, crop 8-10% from outer edges. Export as JPG quality 88, 150 DPI—this balances sharp 
                  text with file sizes that won't slow down e-readers. Import the numbered images into Calibre 
                  or Kindle Create to assemble your final eBook.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  🏛️ Archiving Historical Documents
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Scenario:</strong> A library is digitizing rare 19th-century books for a public 
                  archive. Quality and longevity are paramount.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Solution:</strong> Use conservative crops to preserve all content including margin 
                  notes and printing marks (3-5% on all edges). Export as TIFF at 600 DPI for archival-grade 
                  images suitable for long-term preservation. The lossless format ensures no quality 
                  degradation over time, and high DPI allows future researchers to zoom in on fine details 
                  like old typography or handwritten annotations.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  ✏️ Preparing Manuscript Pages for Professional Printing
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Scenario:</strong> An author has a manuscript that was scanned in two-page spreads 
                  and needs individual page images for submission to a print-on-demand service.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Solution:</strong> Set precise crops to maintain correct page dimensions for the 
                  target book size (e.g., 6"x9"). Use Single Page Mode for cover artwork. Export as PNG at 
                  300 DPI for crisp text with no compression artifacts. The lossless PNG format ensures that 
                  text remains sharp through the printing process, and the high DPI meets professional printing 
                  standards.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pro Tips for Best Results</h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border rounded-lg p-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">💡</span>
                  <div>
                    <strong>Start conservative, then tighten:</strong> Begin with smaller crop percentages 
                    (3-5%) and gradually increase until you've removed all unwanted margins. It's easier to 
                    crop more than to recover accidentally trimmed content.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">💡</span>
                  <div>
                    <strong>Use preview navigation extensively:</strong> Check at least 5-10 pages throughout 
                    your document before processing. Books often have varying margins in different sections 
                    (front matter, body text, index).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">💡</span>
                  <div>
                    <strong>Match DPI to your final use:</strong> Don't waste processing time on 600 DPI if 
                    you're just reading on a tablet (150 DPI is plenty). Reserve high DPI for professional 
                    printing or archival purposes.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">💡</span>
                  <div>
                    <strong>JPG quality sweet spot:</strong> For most books, quality 88-92 is indistinguishable 
                    from maximum quality but produces significantly smaller files. Only use 95-100 for photos 
                    or illustrations with subtle color gradations.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-2">💡</span>
                  <div>
                    <strong>Deselect blank pages early:</strong> Many scanned books have blank pages between 
                    chapters. Uncheck these in the export selection to avoid wasting processing time and 
                    creating unnecessary files.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding Crop Percentages</h2>
            <p className="text-gray-700 mb-4">
              Crop percentages work from each edge inward. Here's how to interpret them:
            </p>
            <div className="bg-gray-50 border rounded-lg p-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Left 10%:</strong> Remove 10% of the page width from the left edge</li>
                <li><strong>Right 50%:</strong> Remove 50% of the page width from the right edge (this removes 
                    the entire right page in a two-page spread)</li>
                <li><strong>Top 5%:</strong> Remove 5% of page height from the top</li>
                <li><strong>Bottom 5%:</strong> Remove 5% of page height from the bottom</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Example for left page in a book spread:</strong> If you set Left=5%, Right=50%, Top=3%, 
                Bottom=3%, the tool will keep the left 45% of the page width (trimming 5% off the outer left edge 
                and 50% off the center/right where the binding and right page are) and keep 94% of the height 
                (trimming 3% from top and bottom margins).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  🎯 Independent Left/Right Crops
                </h3>
                <p className="text-gray-700">
                  Apply different crop settings to left and right pages to handle book bindings, 
                  margins, and page gutters perfectly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  👁️ Visual Preview System
                </h3>
                <p className="text-gray-700">
                  See crop lines overlaid on your pages in red (left) and blue (right) so you 
                  know exactly what you're getting.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  📄 Single Page Mode
                </h3>
                <p className="text-gray-700">
                  Enable single page mode for book covers, title pages, or PDFs that don't have 
                  two-page spreads.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  🖼️ Multiple Export Formats
                </h3>
                <p className="text-gray-700">
                  Export as JPG (best for photos), PNG (lossless), TIFF (professional printing), 
                  or WebP (modern web format).
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Privacy & Data Security</h2>
            <p className="text-gray-700 mb-4">
              We take your privacy seriously. When you upload a PDF to our server for processing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Files are processed immediately and deleted from our servers after export</li>
              <li>We do not store, share, or analyze your uploaded documents</li>
              <li>All processing happens on secure servers with encrypted connections (HTTPS)</li>
              <li>No account registration required—completely anonymous usage</li>
              <li>Files are automatically purged from temporary storage within 1 hour</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example Use Cases</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Scenario: Digitizing a Children's Book
              </h3>
              <p className="text-gray-700 mb-3">
                You've scanned a vintage children's book that has wide margins and visible binding 
                gutters in the center of each spread. The left pages have more margin on the left 
                side, and right pages have more on the right.
              </p>
              <p className="text-gray-700">
                <strong>Solution:</strong> Use our tool to set different left/right crop settings. 
                Set left page trim to remove more from the left edge (e.g., 10%) and center 
                (e.g., 50%), then set right page trim to remove more from the right edge and 
                center. Copy these settings to all pages, preview the results, then export as 
                high-quality JPGs at 300 DPI for a clean digital version.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technical Specifications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Maximum file size:</strong> 100MB per PDF</li>
              <li><strong>Supported input:</strong> PDF files (any version)</li>
              <li><strong>Output formats:</strong> JPG, PNG, TIFF, WebP</li>
              <li><strong>DPI range:</strong> 72-600 DPI (dots per inch)</li>
              <li><strong>Quality control:</strong> Adjustable quality (1-100) for JPG and WebP</li>
              <li><strong>Processing:</strong> Server-side with PyMuPDF for accurate rendering</li>
              <li><strong>Page limit:</strong> Unlimited pages per PDF</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: Are my files uploaded to your server?
                </h3>
                <p className="text-gray-700">
                  Yes, files are temporarily uploaded to our secure server for processing using 
                  PyMuPDF. However, they are immediately deleted after export and never stored 
                  permanently. See our <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link> for details.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: Can I crop left and right pages differently?
                </h3>
                <p className="text-gray-700">
                  Absolutely! That's the main feature of this tool. Use the Left/Right page selector 
                  to switch between settings and adjust each side independently.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: What if my PDF has single pages instead of spreads?
                </h3>
                <p className="text-gray-700">
                  Enable "Single Page Mode" at the top of the crop settings. This treats each PDF 
                  page as a full page and only uses the left page crop settings across the full width.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Important Notes</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Copyright compliance:</strong> This tool is for lawful personal use only. 
                  Ensure you have the right to process and export content from any PDFs you upload. 
                  Respect copyright laws for books and documents.
                </li>
                <li>
                  <strong>Processing time:</strong> Large PDFs or high DPI settings may take longer 
                  to process depending on your selected pages and file complexity.
                </li>
                <li>
                  <strong>Original preservation:</strong> We do not modify your original PDF file. 
                  All exports are new image files created from your crop specifications.
                </li>
                <li>
                  <strong>Browser compatibility:</strong> This tool works best in modern browsers 
                  (Chrome, Firefox, Safari, Edge). JavaScript must be enabled.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ready to Start Trimming?</h2>
            <p className="text-gray-700 mb-6">
              Upload your PDF below to begin. No registration, no watermarks, no hidden fees. 
              Just straightforward PDF page trimming with professional results. Perfect for creating 
              eBooks, preparing print files, or cleaning up scanned documents.
            </p>
          </article>

          {/* PDF Trimmer Tool - Above the fold */}
          <div className="mt-8 bg-white rounded-lg shadow-lg border p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Upload and Trim Your PDF
            </h2>
            <PDFTrimmer />
          </div>

          {/* Additional Content */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our PDF Trimmer?</h2>
            <p className="text-gray-700 mb-6">
              Unlike basic PDF editors that only let you crop entire documents uniformly, our tool 
              recognizes that book scans need intelligent handling. Each two-page spread has 
              different requirements for left and right pages due to binding, margins, and gutters. 
              Our per-page crop controls give you the precision needed for professional results 
              whether you're digitizing a library, preparing manuscripts, or creating eBook content.
            </p>
            
            <p className="text-gray-700 mb-6">
              The visual preview system with colored crop lines means you never have to guess—you 
              see exactly what you're getting before processing. Combined with batch operations 
              like "Copy to All" and selective page export, you can process entire books in minutes 
              instead of hours of manual editing.
            </p>

            {/* Single Ad Below Tool and Additional Content - AdSense Compliance */}
            <div className="my-12 flex justify-center not-prose">
              <div className="w-full max-w-4xl">
                <AdSlot />
              </div>
            </div>

            <div className="text-center mt-8 mb-8">
              <Link
                href="/faq"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 font-semibold text-lg"
              >
                Read Full FAQ
              </Link>
            </div>
          </div>
        </main>

        {/* Comprehensive Resource Links Section */}
        <section className="bg-gradient-to-b from-white to-gray-100 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Explore Our Complete PDF Digitization Resources
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Everything you need to master book scanning and PDF trimming
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-600 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href="/guides" className="hover:text-purple-700">Complete Guides & Tutorials</Link>
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  In-depth tutorials covering scanner selection, optimal settings, advanced trimming
                  techniques, export format selection, and troubleshooting common problems.
                </p>
                <Link href="/guides" className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
                  Read Guides →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href="/blog" className="hover:text-blue-700">Expert Articles & Tips</Link>
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Learn from detailed articles on book digitization workflows, creating Kindle eBooks,
                  understanding DPI and quality, copyright considerations, and scanner reviews.
                </p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Browse Blog →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href="/comparison" className="hover:text-green-700">Tool Comparison Guide</Link>
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Honest comparison of our tool vs. Adobe Acrobat, PDF-XChange Editor, and other solutions.
                  Learn which tool is best for your specific use case and budget.
                </p>
                <Link href="/comparison" className="text-green-600 hover:text-green-800 font-semibold text-sm">
                  Compare Tools →
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Popular Topics</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/guides#scanning-settings" className="text-purple-700 hover:underline">
                      → Optimal Scanner Settings for Books
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides#crop-techniques" className="text-purple-700 hover:underline">
                      → Understanding Crop Percentages
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides#export-formats" className="text-purple-700 hover:underline">
                      → Choosing Export Formats (JPG/PNG/TIFF)
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides#troubleshooting" className="text-purple-700 hover:underline">
                      → Fixing Binding Shadows & Distortion
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-purple-700 hover:underline">
                      → Creating Kindle eBooks from PDFs
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/faq" className="text-orange-700 hover:underline">
                      → Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-orange-700 hover:underline">
                      → About Our Tool & Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-orange-700 hover:underline">
                      → Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-orange-700 hover:underline">
                      → Privacy Policy & Data Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-orange-700 hover:underline">
                      → Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-3">PDF Book Page Trimmer</h3>
                <p className="text-sm">
                  Professional PDF page trimming with independent left/right crop controls.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/guides" className="hover:text-white">Guides & Tutorials</Link></li>
                  <li><Link href="/blog" className="hover:text-white">Blog Articles</Link></li>
                  <li><Link href="/comparison" className="hover:text-white">Tool Comparison</Link></li>
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} PDF Book Page Trimmer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

