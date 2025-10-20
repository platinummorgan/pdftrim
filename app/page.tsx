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
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
                <Link href="/privacy" className="hover:underline">Privacy</Link>
                <Link href="/terms" className="hover:underline">Terms</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Rich Content Section - Above the Fold */}
          <article className="prose prose-lg max-w-none mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              PDF Book Page Trimmer — Crop Left/Right Pages & Export
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              This free online tool helps you remove unwanted margins from scanned book PDFs by 
              applying separate crop settings for left and right pages. Perfect for digitizing 
              your book collection, creating eBooks for Kindle, or preparing scanned documents 
              for professional printing. You can preview each page with visual crop lines, copy 
              settings across multiple pages, and export selected pages to JPG, PNG, TIFF, or 
              WebP at your chosen resolution.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How It Works</h2>
            <p className="text-gray-700 mb-4">
              Our PDF trimming tool uses advanced server-side processing with PyMuPDF to deliver 
              professional-quality results. Here's how to use it:
            </p>
            
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
              <li className="pl-2">
                <strong>Upload your PDF:</strong> Select a scanned book PDF from your computer. 
                We support files up to 100MB in size.
              </li>
              <li className="pl-2">
                <strong>Adjust crop settings:</strong> Choose between Left Page or Right Page mode 
                and use the intuitive sliders to set trim percentages for each side (left, right, 
                top, bottom). Red lines show left page crops, blue lines show right page crops.
              </li>
              <li className="pl-2">
                <strong>Preview in real-time:</strong> Navigate through your PDF pages and see 
                exactly how the crop will look with visual overlay lines on each page.
              </li>
              <li className="pl-2">
                <strong>Copy settings efficiently:</strong> Use "Copy to All Pages" or "Copy to 
                Remaining" buttons to apply your current page's crop settings to multiple pages at once.
              </li>
              <li className="pl-2">
                <strong>Select pages to export:</strong> Choose which pages you want to include 
                in your final output—useful for skipping blank pages or unwanted content.
              </li>
              <li className="pl-2">
                <strong>Configure export options:</strong> Select your preferred image format 
                (JPG, PNG, TIFF, or WebP), adjust quality settings (1-100), and set DPI 
                (72-600) for print or screen use.
              </li>
              <li className="pl-2">
                <strong>Process and download:</strong> Click "Process PDF" and receive a ZIP 
                file containing all your cropped pages with sequential numbering.
              </li>
            </ol>

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

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-3">PDF Book Page Trimmer</h3>
                <p className="text-sm">
                  Professional PDF page trimming with independent left/right crop controls.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Help</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
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

