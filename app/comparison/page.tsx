import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When to Use Our Tool vs. Other PDF Editors — Comparison Guide',
  description: 'Compare PDF trimming solutions and learn when to use specialized book trimming tools vs. general PDF editors like Adobe Acrobat.',
}

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:opacity-90">
              PDF Book Page Trimmer
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Comparing PDF Cropping Solutions
          </h1>
          
          <p className="text-xl text-gray-700 mb-10">
            Not all PDF tools are created equal. Learn which solution is best for your specific needs
            and why traditional PDF editors struggle with scanned book pages.
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Main Comparison Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Comparison Matrix</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-r">Feature</th>
                      <th className="px-4 py-3 text-center font-semibold text-purple-900 bg-purple-50 border-r">PDF Book Page Trimmer</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-900 border-r">Adobe Acrobat Pro</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-900 border-r">PDF-XChange Editor</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-900">Briss</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Cost</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-semibold">Free</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">$239.88/year</td>
                      <td className="px-4 py-3 text-center border-r">$54.50 (one-time)</td>
                      <td className="px-4 py-3 text-center">Free</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Independent Left/Right Crops</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">✓</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-red-700">✗</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-orange-600">Limited</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-green-700">✓</span>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Visual Preview with Crop Lines</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">✓ Color-coded</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-orange-600">Basic</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-orange-600">Basic</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-orange-600">Static</span>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Per-Page Custom Crops</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">✓</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-green-700">✓</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-green-700">✓</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-red-700">✗</span>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Export to Images</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">✓ JPG/PNG/TIFF/WebP</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-green-700">✓ JPG/PNG/TIFF</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-green-700">✓ Various</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-red-700">✗ PDF only</span>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">DPI Control</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">✓ 72-600</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-orange-600">Limited</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-green-700">✓</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-red-700">N/A</span>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Quality Control</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">✓ 1-100</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-orange-600">Limited</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-green-700">✓</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-red-700">N/A</span>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Installation Required</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">No (Web-based)</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-red-700">Yes (Large)</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">
                        <span className="text-orange-600">Yes (Medium)</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-orange-600">Yes (Java)</span>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Ease of Use</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">⭐⭐⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">⭐⭐⭐</td>
                      <td className="px-4 py-3 text-center border-r">⭐⭐⭐</td>
                      <td className="px-4 py-3 text-center">⭐⭐</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold border-r bg-gray-50">Learning Curve</td>
                      <td className="px-4 py-3 text-center border-r bg-purple-50">
                        <span className="text-green-700 font-bold">5 minutes</span>
                      </td>
                      <td className="px-4 py-3 text-center border-r">1-2 hours</td>
                      <td className="px-4 py-3 text-center border-r">30-60 min</td>
                      <td className="px-4 py-3 text-center">20-30 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Detailed Comparisons */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Tool Analysis</h2>

              <div className="space-y-8">
                {/* Adobe Acrobat */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-2xl font-semibold text-red-900 mb-3">
                    Adobe Acrobat Pro DC — The Industry Standard
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✓ Best For:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Professional PDF editing beyond just cropping</li>
                        <li>• Combining multiple PDF operations</li>
                        <li>• Form creation and digital signatures</li>
                        <li>• Document comparison and redaction</li>
                        <li>• Enterprise environments with Adobe licenses</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-2">✗ Limitations for Book Scanning:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Can't apply different crops to left/right pages</li>
                        <li>• Expensive subscription model ($19.99/month)</li>
                        <li>• Requires installation and updates</li>
                        <li>• Overkill if you only need cropping</li>
                        <li>• Complex interface with steep learning curve</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded p-4 border border-red-200">
                    <p className="text-sm text-gray-700">
                      <strong>Verdict:</strong> Choose Acrobat if you need comprehensive PDF editing tools
                      beyond cropping, or if you already have a subscription. For dedicated book scanning
                      projects, our specialized tool will save you time and money.
                    </p>
                  </div>
                </div>

                {/* PDF-XChange Editor */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                    PDF-XChange Editor — Affordable Alternative
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✓ Best For:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Budget-conscious users ($54.50 one-time)</li>
                        <li>• General PDF editing and annotation</li>
                        <li>• OCR and text recognition</li>
                        <li>• Users who prefer desktop software</li>
                        <li>• Windows-only environments</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-2">✗ Limitations for Book Scanning:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Limited left/right page differentiation</li>
                        <li>• Less intuitive crop interface</li>
                        <li>• Requires manual page-by-page adjustments</li>
                        <li>• No visual preview during crop setup</li>
                        <li>• Windows only (no Mac/Linux)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded p-4 border border-blue-200">
                    <p className="text-sm text-gray-700">
                      <strong>Verdict:</strong> Good value for general PDF work, but lacks the specialized
                      features needed for efficient book scanning. Consider it if you need all-around PDF
                      editing capabilities beyond just cropping scanned books.
                    </p>
                  </div>
                </div>

                {/* Briss */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <h3 className="text-2xl font-semibold text-green-900 mb-3">
                    Briss — Open Source Cropping Tool
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✓ Best For:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Open-source enthusiasts</li>
                        <li>• Batch cropping with uniform settings</li>
                        <li>• Cross-platform use (Java-based)</li>
                        <li>• Users comfortable with technical tools</li>
                        <li>• Staying within PDF format</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 mb-2">✗ Limitations for Book Scanning:</p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Outdated interface from 2012</li>
                        <li>• Requires Java installation</li>
                        <li>• No image export (PDF only)</li>
                        <li>• Can't customize individual pages</li>
                        <li>• Limited DPI and quality control</li>
                        <li>• No active development or support</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded p-4 border border-green-200">
                    <p className="text-sm text-gray-700">
                      <strong>Verdict:</strong> A capable free tool for basic PDF cropping, but hasn't been
                      updated in years and lacks modern features like image export and quality control.
                      Good if you need to stay in PDF format, but our tool offers more flexibility for
                      e-book creation workflows.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Case Recommendations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose the Right Tool for Your Project</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Use Our Tool When:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Scanning books as two-page spreads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Creating e-books for Kindle, iPad, or e-readers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Exporting to image formats (JPG, PNG, TIFF, WebP)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Need precise DPI and quality control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Want visual preview before processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>No installation or subscription preferred</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Digitizing personal library or archives</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">Use Acrobat/Other Tools When:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">→</span>
                      <span>Need comprehensive PDF editing (forms, signatures, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">→</span>
                      <span>Working with single-page PDFs or standard documents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">→</span>
                      <span>Must stay in PDF format (no image export needed)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">→</span>
                      <span>Already have an Adobe subscription</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">→</span>
                      <span>Enterprise environment with existing licenses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">→</span>
                      <span>Need OCR, redaction, or document comparison</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">→</span>
                      <span>Working with legal or official documents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Real Cost Analysis */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">True Cost Comparison Over Time</h2>
              
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  Let's look at the real costs of different solutions over 1-3 years of typical use:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-yellow-200 rounded-lg text-sm">
                    <thead className="bg-yellow-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Tool</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-900">Year 1</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-900">Year 2</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-900">Year 3</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-900">3-Year Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-t bg-purple-50">
                        <td className="px-4 py-3 font-semibold">PDF Book Page Trimmer</td>
                        <td className="px-4 py-3 text-center text-green-700 font-semibold">$0</td>
                        <td className="px-4 py-3 text-center text-green-700 font-semibold">$0</td>
                        <td className="px-4 py-3 text-center text-green-700 font-semibold">$0</td>
                        <td className="px-4 py-3 text-center text-green-700 font-bold text-lg">$0</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Adobe Acrobat Pro</td>
                        <td className="px-4 py-3 text-center">$239.88</td>
                        <td className="px-4 py-3 text-center">$239.88</td>
                        <td className="px-4 py-3 text-center">$239.88</td>
                        <td className="px-4 py-3 text-center text-red-700 font-bold text-lg">$719.64</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">PDF-XChange Editor</td>
                        <td className="px-4 py-3 text-center">$54.50</td>
                        <td className="px-4 py-3 text-center">$0</td>
                        <td className="px-4 py-3 text-center">$0</td>
                        <td className="px-4 py-3 text-center font-bold text-lg">$54.50</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Briss (Free)</td>
                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                        <td className="px-4 py-3 text-center text-green-700 font-bold text-lg">$0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-sm text-gray-600 mt-4 italic">
                  💰 Over 3 years, choosing our free tool over Adobe Acrobat Pro saves $719.64
                </p>
              </div>
            </section>

            {/* FAQ Style Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Questions About Tool Selection</h2>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Q: Can I use free tools like Preview (Mac) or Photos app for PDF cropping?
                  </h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> These built-in tools can crop PDFs, but they're extremely limited.
                    You can't apply different crops to left and right pages, there's no batch processing,
                    and you have no control over export quality or DPI. They're okay for quick one-off
                    crops of single-page documents, but inefficient for book digitization projects.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Q: What about online PDF editors like Smallpdf or PDF24?
                  </h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> General-purpose online PDF editors offer basic cropping, but lack
                    the specialized features needed for scanned books (independent left/right crops, visual
                    preview, DPI control, quality settings). They're good for simple tasks like rotating
                    or merging PDFs, but not optimized for book digitization workflows. Most also have file
                    size limits and require paid upgrades for bulk operations.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Q: Should I invest in professional book scanning hardware/software?
                  </h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> If you're digitizing hundreds of books or running a commercial
                    operation, specialized book scanners ($1,000-$10,000) with bundled software can be
                    worth it. But for personal projects, hobby archiving, or occasional digitization,
                    the combination of a good flatbed scanner ($100-300) plus our free trimming tool
                    delivers excellent results at a fraction of the cost.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-orange-600 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Q: Can I combine multiple tools in my workflow?
                  </h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> Absolutely! Many users scan with their scanner's software, use
                    our tool for precise cropping and image export, then import images into Calibre for
                    e-book creation or Adobe InDesign for print layout. Each tool serves a specific
                    purpose. Our trimmer excels at the crop-and-export stage between scanning and final
                    document assembly.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Recommendation */}
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-400 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">Our Honest Recommendation</h2>
              <p className="text-gray-700 mb-4">
                <strong>For dedicated book scanning and digitization projects,</strong> our tool is
                specifically designed for your needs and will save you significant time and money compared
                to general PDF editors.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>If you need comprehensive PDF editing beyond cropping</strong> (forms, signatures,
                redaction, etc.), consider PDF-XChange Editor for the best value or Adobe Acrobat if you
                need enterprise features.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>For most users digitizing personal book collections,</strong> start with our free
                tool. If you later find you need additional PDF capabilities, you can always add other
                software to your workflow.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 font-semibold"
                >
                  Try Our Tool Free
                </Link>
                <Link
                  href="/guides"
                  className="inline-block px-8 py-3 bg-white text-purple-700 border-2 border-purple-600 rounded-lg hover:bg-purple-50 font-semibold"
                >
                  Read Our Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
