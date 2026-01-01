import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDF Trimming Guides & Tutorials — Professional Book Scanning Tips',
  description: 'Comprehensive guides for scanning, digitizing, and trimming book PDFs. Learn best practices for creating professional-quality digital books.',
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:opacity-90">
              PDF Book Page Trimmer
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/guides" className="hover:underline font-semibold">Guides</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            PDF Book Trimming Guides & Tutorials
          </h1>
          
          <p className="text-xl text-gray-700 mb-10">
            Master the art of book digitization with our comprehensive guides. Whether you're scanning
            your first book or optimizing workflows for large projects, these tutorials will help you
            achieve professional results.
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Guide 1: Complete Beginner's Guide */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-200 pb-2">
                Complete Beginner's Guide to Book Scanning
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 mb-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  Step 1: Choosing the Right Scanner
                </h3>
                <p className="text-gray-700 mb-4">
                  The quality of your digital books starts with your scanner. Here's what to look for:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Flatbed Scanners (Best for Most Books):</strong> Models like the Epson V600,
                    Canon LiDE 400, or Fujitsu ScanSnap offer excellent quality. Look for:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Minimum 600 DPI optical resolution</li>
                      <li>• Large scanning bed (11x17" ideal for books)</li>
                      <li>• Good edge-to-edge coverage</li>
                      <li>• Fast scanning speeds (10-15 seconds per page)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Book Scanners (For Bound Books):</strong> Specialized scanners like CZUR or
                    BookEye preserve book bindings by scanning from above. Features:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• No need to flatten books completely</li>
                      <li>• Automatic page detection</li>
                      <li>• Higher price point ($300-$3000)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Document Feeders (For Loose Pages):</strong> If you're willing to remove
                    bindings, sheet-fed scanners offer the fastest scanning.
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-600 p-6 mb-6">
                <h3 className="text-2xl font-semibold text-green-900 mb-3">
                  Step 2: Scanning Settings for Optimal Quality
                </h3>
                <p className="text-gray-700 mb-4">
                  Proper scanner settings are crucial. Here's a detailed breakdown:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Resolution (DPI)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>300 DPI:</strong> Standard for most books, excellent quality, manageable file sizes</li>
                      <li>• <strong>400-600 DPI:</strong> For books with small text or detailed illustrations</li>
                      <li>• <strong>150-200 DPI:</strong> Acceptable for casual reading on tablets/e-readers</li>
                      <li>• <strong>⚠ Avoid below 150 DPI:</strong> Text becomes fuzzy and hard to read</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Color Mode</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Color (24-bit):</strong> Books with photos, illustrations, or colored text</li>
                      <li>• <strong>Grayscale (8-bit):</strong> Most textbooks, novels—reduces file size by 65%</li>
                      <li>• <strong>Black & White (1-bit):</strong> Only for pure text documents, smallest files</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">File Format</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>PDF (Recommended):</strong> Standard format, combines all pages into one file</li>
                      <li>• <strong>TIFF:</strong> For archival projects requiring lossless quality</li>
                      <li>• <strong>JPEG:</strong> Smaller files but lossy compression—not recommended for text</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-6 mb-6">
                <h3 className="text-2xl font-semibold text-orange-900 mb-3">
                  Step 3: Scanning Workflow
                </h3>
                <p className="text-gray-700 mb-4">
                  Follow this efficient workflow to scan books quickly without sacrificing quality:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    <strong>Prepare your workspace:</strong> Clean scanner glass, good lighting, stable surface
                  </li>
                  <li>
                    <strong>Position the book:</strong> Open flat on scanner, press gently to flatten pages
                    without damaging binding
                  </li>
                  <li>
                    <strong>Scan two pages at once:</strong> Position both left and right pages on scanner bed
                    for maximum efficiency
                  </li>
                  <li>
                    <strong>Create consistent borders:</strong> Try to keep the book edges aligned with scanner
                    guides for easier cropping later
                  </li>
                  <li>
                    <strong>Check preview before scanning:</strong> Ensure no shadows, skewing, or missing content
                  </li>
                  <li>
                    <strong>Save as single PDF:</strong> Use your scanner software to combine all pages into
                    one PDF file
                  </li>
                  <li>
                    <strong>Verify page order:</strong> Before trimming, open the PDF and confirm pages are
                    in correct sequence
                  </li>
                </ol>
              </div>
            </section>

            {/* Guide 2: Advanced Trimming Techniques */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-200 pb-2">
                Advanced PDF Trimming Techniques
              </h2>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-6">
                <h3 className="text-2xl font-semibold text-purple-900 mb-3">
                  Understanding Crop Percentages
                </h3>
                <p className="text-gray-700 mb-4">
                  Mastering crop percentages is the key to perfect results. Here's a deep dive:
                </p>
                
                <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-3">How Percentages Work</h4>
                  <p className="text-gray-700 mb-3">
                    Each crop value represents the percentage of the page to <strong>remove</strong> from
                    that edge. If a page is 1000 pixels wide:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 font-mono bg-gray-50 p-3 rounded">
                    <li>Left: 10% = Remove 100 pixels from left edge</li>
                    <li>Right: 50% = Remove 500 pixels from right edge</li>
                    <li>Remaining width: 1000 - 100 - 500 = 400 pixels (40% of original)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 mb-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Left Page Strategy</h4>
                  <p className="text-gray-700 mb-2">
                    For a typical left page in a two-page spread:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Left edge:</strong> 5-10% (remove outer margin and scanning artifacts)</li>
                    <li>• <strong>Right edge/center:</strong> 45-52% (remove binding gutter + entire right page)</li>
                    <li>• <strong>Top:</strong> 3-5% (remove header margins)</li>
                    <li>• <strong>Bottom:</strong> 3-5% (remove footer margins)</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    💡 Tip: If the binding shadow is significant, increase the right crop to 52-55%
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Right Page Strategy</h4>
                  <p className="text-gray-700 mb-2">
                    For a typical right page (mirror of left):
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Left edge/center:</strong> 45-52% (remove binding gutter + entire left page)</li>
                    <li>• <strong>Right edge:</strong> 5-10% (remove outer margin)</li>
                    <li>• <strong>Top & Bottom:</strong> Same as left page (3-5% each)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  Handling Special Page Types
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">📄 Cover Pages</h4>
                    <p className="text-gray-700 mb-2">
                      Book covers usually need special treatment:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Enable <strong>Single Page Mode</strong></li>
                      <li>• Use minimal crops: 2-3% on all edges</li>
                      <li>• Preserve cover artwork and spine text</li>
                      <li>• Consider higher DPI (400-600) for cover details</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">📜 Title Pages & Front Matter</h4>
                    <p className="text-gray-700 mb-2">
                      Title pages, copyright pages, dedications often have centered text:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• If single page: Enable Single Page Mode, use 8-10% symmetric crops</li>
                      <li>• If two-page spread: Use normal left/right settings but reduce center crops to 42-45%</li>
                      <li>• Watch for decorative elements at edges—adjust crops to preserve them</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">📖 Chapter Openings</h4>
                    <p className="text-gray-700 mb-2">
                      Chapter starts often have decorative elements:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Reduce top crop if chapter title extends to the top edge</li>
                      <li>• Watch for drop caps or decorative initials at page edges</li>
                      <li>• If one page is blank, still use two-page settings for consistency</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">🔢 Index & Reference Pages</h4>
                    <p className="text-gray-700 mb-2">
                      Dense text sections need careful handling:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Small text requires tight crops—remove as much margin as possible</li>
                      <li>• Use 7-12% outer edge crops to maximize readable area</li>
                      <li>• Consider reducing top/bottom crops to 2-3% for multi-column indexes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Guide 3: Optimization Guide */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-200 pb-2">
                Export Format & Quality Optimization
              </h2>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-600 p-6 mb-6">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-3">
                  Choosing the Right Export Format
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 border-2 border-yellow-300">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">📁 JPG (JPEG) — Best for Most Use Cases</h4>
                    <p className="text-gray-700 mb-3">
                      <strong>Ideal for:</strong> Photo-heavy books, novels, textbooks, digital reading on
                      e-readers and tablets
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="font-semibold text-green-700 mb-1">✓ Advantages:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Excellent compression (70-90% smaller than PNG)</li>
                          <li>• Universal compatibility</li>
                          <li>• Good quality at 85-95% setting</li>
                          <li>• Fast processing</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-red-700 mb-1">✗ Disadvantages:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Lossy compression (some quality loss)</li>
                          <li>• Not ideal for pure text</li>
                          <li>• Can create artifacts around text edges at low quality</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded mt-3">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Recommended Settings:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Quality:</strong> 88-92 for text, 92-95 for photos</li>
                        <li>• <strong>DPI:</strong> 300 for e-readers, 150 for tablets, 600 for printing</li>
                        <li>• <strong>File size:</strong> ~200-400KB per page at quality 90, 300 DPI</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">📁 PNG — Lossless Quality</h4>
                    <p className="text-gray-700 mb-3">
                      <strong>Ideal for:</strong> Pure text documents, technical manuals, sheet music,
                      architectural diagrams
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="font-semibold text-green-700 mb-1">✓ Advantages:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Lossless (no quality loss)</li>
                          <li>• Perfect for text and line art</li>
                          <li>• Sharp edges, no artifacts</li>
                          <li>• Supports transparency (not used here)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-red-700 mb-1">✗ Disadvantages:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Large file sizes (2-3x JPG)</li>
                          <li>• Slower processing</li>
                          <li>• Not ideal for photos (JPG is better)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded mt-3">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Recommended Settings:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>DPI:</strong> 150-300 for reading, 600 for archival</li>
                        <li>• <strong>File size:</strong> ~800KB-1.5MB per page at 300 DPI</li>
                        <li>• <strong>Use when:</strong> Text sharpness is more important than file size</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">📁 TIFF — Professional Archival</h4>
                    <p className="text-gray-700 mb-3">
                      <strong>Ideal for:</strong> Libraries, museums, long-term archival, professional printing,
                      preservation projects
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="font-semibold text-green-700 mb-1">✓ Advantages:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Industry standard for archival</li>
                          <li>• Lossless compression (LZW)</li>
                          <li>• Supports high bit depths</li>
                          <li>• Future-proof format</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-red-700 mb-1">✗ Disadvantages:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Largest file sizes</li>
                          <li>• Not widely supported on mobile devices</li>
                          <li>• Overkill for casual reading</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded mt-3">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Recommended Settings:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>DPI:</strong> 400-600 for archival, 300-400 for printing</li>
                        <li>• <strong>Compression:</strong> LZW (automatic)</li>
                        <li>• <strong>File size:</strong> ~1-3MB per page at 600 DPI</li>
                        <li>• <strong>Use when:</strong> Quality and longevity are paramount</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">📁 WebP — Modern Web Format</h4>
                    <p className="text-gray-700 mb-3">
                      <strong>Ideal for:</strong> Online galleries, web publishing, blog posts, digital portfolios
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="font-semibold text-green-700 mb-1">✓ Advantages:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Smaller than JPG (25-35% reduction)</li>
                          <li>• Better quality at same file size</li>
                          <li>• Modern compression algorithm</li>
                          <li>• Fast web loading</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-red-700 mb-1">✗ Disadvantages:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Limited support on older devices</li>
                          <li>• Not ideal for printing</li>
                          <li>• Some e-readers don't support it</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded mt-3">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Recommended Settings:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Quality:</strong> 85-95</li>
                        <li>• <strong>DPI:</strong> 150 for web, 300 for high-quality viewing</li>
                        <li>• <strong>File size:</strong> ~150-300KB per page at quality 90, 150 DPI</li>
                        <li>• <strong>Use when:</strong> Publishing online or file size is critical</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-600 p-6 mb-6">
                <h3 className="text-2xl font-semibold text-pink-900 mb-3">
                  DPI Selection Guide
                </h3>
                <p className="text-gray-700 mb-4">
                  Choosing the right DPI balances quality and file size:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-pink-200 rounded-lg">
                    <thead className="bg-pink-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">DPI</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Use Case</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Quality</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">File Size</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                      <tr className="border-t border-pink-200">
                        <td className="px-4 py-3 font-semibold">72-100</td>
                        <td className="px-4 py-3">Web viewing only, email attachments</td>
                        <td className="px-4 py-3">Low—pixelated when zoomed</td>
                        <td className="px-4 py-3 text-green-600">Smallest</td>
                      </tr>
                      <tr className="border-t border-pink-200 bg-pink-50">
                        <td className="px-4 py-3 font-semibold">150</td>
                        <td className="px-4 py-3">Tablet reading, casual digital books</td>
                        <td className="px-4 py-3">Good—readable, minimal pixelation</td>
                        <td className="px-4 py-3 text-green-600">Small</td>
                      </tr>
                      <tr className="border-t border-pink-200">
                        <td className="px-4 py-3 font-semibold">200-250</td>
                        <td className="px-4 py-3">E-readers (Kindle, Kobo), digital reading</td>
                        <td className="px-4 py-3">Very Good—sharp text</td>
                        <td className="px-4 py-3 text-yellow-600">Medium</td>
                      </tr>
                      <tr className="border-t border-pink-200 bg-pink-50">
                        <td className="px-4 py-3 font-semibold text-purple-700">300 ⭐</td>
                        <td className="px-4 py-3">Standard for print, professional quality</td>
                        <td className="px-4 py-3 text-purple-700">Excellent—print quality</td>
                        <td className="px-4 py-3 text-yellow-600">Medium-Large</td>
                      </tr>
                      <tr className="border-t border-pink-200">
                        <td className="px-4 py-3 font-semibold">400-450</td>
                        <td className="px-4 py-3">High-quality printing, photo books</td>
                        <td className="px-4 py-3">Superb—detailed</td>
                        <td className="px-4 py-3 text-orange-600">Large</td>
                      </tr>
                      <tr className="border-t border-pink-200 bg-pink-50">
                        <td className="px-4 py-3 font-semibold">600</td>
                        <td className="px-4 py-3">Archival, professional printing, museums</td>
                        <td className="px-4 py-3">Maximum—archival quality</td>
                        <td className="px-4 py-3 text-red-600">Very Large</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-sm text-gray-600 mt-4 italic">
                  ⭐ 300 DPI is the "sweet spot" for most projects—excellent quality with manageable file sizes
                </p>
              </div>
            </section>

            {/* Guide 4: Troubleshooting */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-200 pb-2">
                Common Problems & Solutions
              </h2>

              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-600 p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">
                    ⚠️ Problem: Binding Shadows Still Visible
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Dark shadows or curves appear at the center of pages after cropping.
                  </p>
                  <p className="text-gray-900 font-semibold mb-2">Solutions:</p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• Increase center crop percentage to 52-55% (from default 48-50%)</li>
                    <li>• Check that you're using different settings for left/right pages</li>
                    <li>• When scanning, press book flatter or use weights to minimize shadows</li>
                    <li>• Consider scanning in grayscale mode—shadows are less visible</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-2">
                    ⚠️ Problem: Text Being Cut Off
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Important text at page edges is being removed by cropping.
                  </p>
                  <p className="text-gray-900 font-semibold mb-2">Solutions:</p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• Reduce outer edge crops from 10% to 5% or even 3%</li>
                    <li>• Use the visual preview to check all edges before processing</li>
                    <li>• Navigate through multiple pages to verify consistent content preservation</li>
                    <li>• For books with text extending to edges, use minimal crops (2-3% maximum)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                    ⚠️ Problem: Inconsistent Page Sizes in Export
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Exported images have different dimensions, causing issues in e-book creation.
                  </p>
                  <p className="text-gray-900 font-semibold mb-2">Solutions:</p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• Use "Copy to All Pages" to apply identical crop settings throughout</li>
                    <li>• Ensure Single Page Mode is consistent (all on or all off for body pages)</li>
                    <li>• Check that your source PDF pages are all the same size</li>
                    <li>• If needed, manually adjust special pages to match body text dimensions</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    ⚠️ Problem: Export Quality Is Blurry
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Final images look fuzzy or pixelated compared to the original PDF.
                  </p>
                  <p className="text-gray-900 font-semibold mb-2">Solutions:</p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• Increase DPI from 150 to 300 or 400</li>
                    <li>• If using JPG, increase quality setting to 92-95</li>
                    <li>• Switch to PNG format for text-heavy pages (lossless)</li>
                    <li>• Verify your original PDF scan was at sufficient resolution (300+ DPI)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    ⚠️ Problem: File Sizes Too Large
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Export ZIP file is too large to email or upload.
                  </p>
                  <p className="text-gray-900 font-semibold mb-2">Solutions:</p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• Reduce DPI to 150-200 for digital reading (still readable)</li>
                    <li>• Use WebP format instead of PNG (30% smaller with similar quality)</li>
                    <li>• Lower JPG quality to 85-88 (often imperceptible difference)</li>
                    <li>• Export in batches (e.g., first 50 pages, then next 50)</li>
                    <li>• Consider grayscale instead of color if book doesn't need color</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Quick Reference */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-purple-200 pb-2">
                Quick Reference: Best Settings by Use Case
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 border-2 border-purple-300 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">📱 Tablet/iPad Reading</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Format:</strong> JPG</li>
                    <li><strong>Quality:</strong> 88-92</li>
                    <li><strong>DPI:</strong> 150-200</li>
                    <li><strong>Crops:</strong> Aggressive (remove all margins)</li>
                    <li><strong>File size:</strong> ~150-250KB/page</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">📖 Kindle/E-Reader</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Format:</strong> JPG or PNG</li>
                    <li><strong>Quality:</strong> 90 (JPG)</li>
                    <li><strong>DPI:</strong> 300</li>
                    <li><strong>Crops:</strong> Tight margins for max text</li>
                    <li><strong>File size:</strong> ~250-400KB/page</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-300 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">🖨️ Professional Printing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Format:</strong> TIFF or PNG</li>
                    <li><strong>Quality:</strong> Lossless</li>
                    <li><strong>DPI:</strong> 300-400</li>
                    <li><strong>Crops:</strong> Conservative (preserve content)</li>
                    <li><strong>File size:</strong> ~1-2MB/page</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-300 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">🏛️ Archival/Museum</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Format:</strong> TIFF</li>
                    <li><strong>Quality:</strong> LZW compression</li>
                    <li><strong>DPI:</strong> 600</li>
                    <li><strong>Crops:</strong> Minimal (2-3% for scanning artifacts only)</li>
                    <li><strong>File size:</strong> ~2-4MB/page</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-l-4 border-purple-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-3">Ready to Apply These Techniques?</h3>
              <p className="text-gray-700 mb-4">
                Now that you understand the complete workflow, try our tool with your next book scanning
                project. Start with conservative settings and adjust based on your preview results.
              </p>
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 font-semibold"
              >
                Start Trimming PDFs
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
