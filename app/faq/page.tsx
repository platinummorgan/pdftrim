import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — PDF Book Page Trimmer',
  description: 'Frequently asked questions about using our PDF book page trimming tool.',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:opacity-90">
              PDF Book Page Trimmer
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/faq" className="hover:underline font-semibold">FAQ</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>

          <div className="space-y-8">
            {/* File Handling */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">File Handling & Privacy</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Are my files uploaded to your server?
                  </h3>
                  <p className="text-gray-700">
                    Yes, PDF files are temporarily uploaded to our secure server for processing. We use PyMuPDF
                    (a powerful PDF library) running on our backend to render pages and apply crop settings.
                    However, files are automatically deleted within 1 hour and we never permanently store or
                    analyze your content. See our <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link> for details.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How long are my files stored?
                  </h3>
                  <p className="text-gray-700">
                    Uploaded PDFs and generated image files are automatically deleted from our servers within
                    1 hour of upload. We do not create backups or archives of user files. Once you download
                    your processed images and close the browser, all traces of your file are removed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you read the content of my PDFs?
                  </h3>
                  <p className="text-gray-700">
                    No. We only process the visual content of PDF pages to apply crop settings and generate
                    images. We do not extract, read, or analyze text, metadata, or other content from your
                    files. Your documents remain private.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's the maximum file size I can upload?
                  </h3>
                  <p className="text-gray-700">
                    The maximum PDF file size is 100MB. Large files may take longer to upload and process.
                    For best performance, we recommend compressing very large PDFs before upload if possible,
                    though this is not required.
                  </p>
                </div>
              </div>
            </section>

            {/* Features & Usage */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Features & Usage</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I crop left and right pages differently?
                  </h3>
                  <p className="text-gray-700">
                    Yes! This is the main feature of our tool. Use the Left Page / Right Page radio buttons
                    to switch between settings. You can set different trim percentages for each side to handle
                    book bindings, varying margins, and page gutters. Red lines show left page crops, blue
                    lines show right page crops.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What is Single Page Mode?
                  </h3>
                  <p className="text-gray-700">
                    Single Page Mode is designed for PDFs where each page is a complete image (not a two-page
                    spread). Enable this for:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Book covers (front/back covers)</li>
                    <li>Title pages</li>
                    <li>Single-page documents</li>
                    <li>Any PDF without left/right splits</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    When enabled, only the left page settings are used and red crop lines extend across the
                    full width of the page.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What do the colored lines mean?
                  </h3>
                  <p className="text-gray-700">
                    The colored lines show where your crops will be applied:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li><strong className="text-red-600">Red lines:</strong> Left page crop boundaries</li>
                    <li><strong className="text-blue-600">Blue lines:</strong> Right page crop boundaries</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    These lines appear as dashed overlays on your preview image, showing exactly where the
                    trim will occur.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do I apply the same crop to all pages?
                  </h3>
                  <p className="text-gray-700">
                    Once you've adjusted crop settings for a page, use these buttons:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li><strong>"Copy to All Pages":</strong> Applies current settings to every page in the PDF</li>
                    <li><strong>"Copy to Remaining":</strong> Applies current settings to all pages after the current one</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    This is useful when most pages have similar margins but a few (like covers) need different settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I preview changes before processing?
                  </h3>
                  <p className="text-gray-700">
                    Yes! The preview area shows your PDF page with crop lines overlaid in real-time. As you
                    adjust sliders, the lines update immediately. Use the "Previous" and "Next" buttons to
                    navigate through pages and verify crops before processing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I select which pages to export?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely! In the "Pages to Export" section, you can:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Check/uncheck individual pages</li>
                    <li>Use "Select All" to include all pages</li>
                    <li>Use "Select None" to deselect everything, then manually choose pages</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    This is useful for skipping blank pages, removing unwanted content, or exporting only specific sections.
                  </p>
                </div>
              </div>
            </section>

            {/* Export Options */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Export Options</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What export formats are available?
                  </h3>
                  <p className="text-gray-700 mb-2">
                    You can export in four formats:
                  </p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                    <li><strong>JPG:</strong> Best for photographs and color images. Supports quality adjustment (1-100).
                        Smaller file sizes with slight compression.</li>
                    <li><strong>PNG:</strong> Lossless format, perfect for text-heavy pages or when you need perfect quality.
                        Larger file sizes but no quality loss.</li>
                    <li><strong>TIFF:</strong> Professional printing format with LZW compression. Used for archival and
                        high-quality printing workflows.</li>
                    <li><strong>WebP:</strong> Modern web format with excellent compression. Smaller than JPG with similar
                        quality. Supports quality adjustment.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What DPI should I use?
                  </h3>
                  <p className="text-gray-700 mb-2">
                    DPI (dots per inch) determines the resolution of exported images. Common settings:
                  </p>
                  <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                    <li><strong>72 DPI:</strong> Web/screen viewing only. Small file sizes but low quality for printing.</li>
                    <li><strong>150 DPI:</strong> Good balance for digital reading on tablets/phones.</li>
                    <li><strong>300 DPI:</strong> Standard for professional printing. Recommended for most use cases.</li>
                    <li><strong>600 DPI:</strong> Very high quality for large format printing or archival purposes. Large file sizes.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What does the Quality slider do?
                  </h3>
                  <p className="text-gray-700">
                    The Quality slider (1-100) appears for JPG and WebP formats. It controls compression:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li><strong>85-100:</strong> Very high quality, minimal compression artifacts, larger files</li>
                    <li><strong>70-84:</strong> Good quality for most uses, balanced file size</li>
                    <li><strong>Below 70:</strong> More compression, smaller files, may show visible quality loss</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    We recommend 90-95 for most purposes. PNG and TIFF don't use this setting as they're lossless.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How are exported files named?
                  </h3>
                  <p className="text-gray-700">
                    Exported files are numbered sequentially (001, 002, 003, etc.) and include the file extension
                    you chose (.jpg, .png, etc.). For example: 001.jpg, 002.jpg, 003.jpg. This ensures proper
                    ordering when importing into eBook readers or other applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What format is the download?
                  </h3>
                  <p className="text-gray-700">
                    All exported images are packaged into a single ZIP file for easy download. Extract the ZIP
                    on your computer to access individual image files.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Questions */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Technical Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Why does processing take so long?
                  </h3>
                  <p className="text-gray-700">
                    Processing time depends on:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>PDF file size and number of pages</li>
                    <li>DPI setting (higher DPI = longer processing time)</li>
                    <li>Number of selected pages to export</li>
                    <li>Current server load</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    Large PDFs at 600 DPI may take several minutes. For faster processing, use 150-300 DPI
                    and only export pages you need.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What browsers are supported?
                  </h3>
                  <p className="text-gray-700">
                    This tool works in all modern browsers:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Google Chrome (recommended)</li>
                    <li>Microsoft Edge</li>
                    <li>Mozilla Firefox</li>
                    <li>Apple Safari</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    JavaScript must be enabled. Internet Explorer is not supported.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Does this work on mobile devices?
                  </h3>
                  <p className="text-gray-700">
                    Yes, the tool is responsive and works on tablets and phones. However, for best experience
                    with large PDFs, we recommend using a desktop or laptop computer. Mobile connections may
                    take longer to upload large files.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Why does my upload fail?
                  </h3>
                  <p className="text-gray-700">
                    Common reasons for upload failures:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>File is larger than 100MB (compress or split the PDF first)</li>
                    <li>File is corrupted or password-protected</li>
                    <li>Poor internet connection</li>
                    <li>File is not a valid PDF</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    If problems persist, try a different file or <Link href="/contact" className="text-purple-600 hover:underline">contact us</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I use this for commercial purposes?
                  </h3>
                  <p className="text-gray-700">
                    You may use the tool for commercial purposes as long as you comply with our{' '}
                    <Link href="/terms" className="text-purple-600 hover:underline">Terms of Service</Link> and
                    you have the rights to the content you're processing. The tool itself is free to use, but
                    you are responsible for ensuring you have permission to process and export any copyrighted
                    material.
                  </p>
                </div>
              </div>
            </section>

            {/* Copyright & Legal */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Copyright & Legal</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I process copyrighted books?
                  </h3>
                  <p className="text-gray-700">
                    You should only process PDFs that you own the copyright to or have permission to modify.
                    This includes:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Books you authored</li>
                    <li>Public domain books (copyright expired)</li>
                    <li>Content you've licensed with modification rights</li>
                    <li>Personal scans you're legally allowed to digitize</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    <strong>Do not</strong> process copyrighted books you don't have rights to, even for personal use.
                    Respect copyright laws in your jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Who owns the exported images?
                  </h3>
                  <p className="text-gray-700">
                    You retain all rights to the images you export, subject to you having the right to process
                    the source PDF. We claim no ownership over your exports. See our{' '}
                    <Link href="/terms" className="text-purple-600 hover:underline">Terms of Service</Link> for details.
                  </p>
                </div>
              </div>
            </section>

            {/* Support */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Support</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-gray-700">
                    If you didn't find your answer here, please <Link href="/contact" className="text-purple-600 hover:underline">contact us</Link>.
                    We're happy to help with any issues or questions about using the PDF Book Page Trimmer.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is there a limit to how many PDFs I can process?
                  </h3>
                  <p className="text-gray-700">
                    There is no hard limit on the number of PDFs you can process. However, we may implement
                    rate limiting if we detect excessive or automated usage to ensure fair access for all users.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do I need to create an account?
                  </h3>
                  <p className="text-gray-700">
                    No! This tool requires no registration, login, or account creation. Simply visit the homepage,
                    upload your PDF, and start trimming. Completely anonymous usage.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center space-x-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 font-semibold"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  )
}
