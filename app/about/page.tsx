import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — PDF Book Page Trimmer',
  description: 'Learn about the PDF Book Page Trimmer tool, our mission, and technology.',
}

export default function AboutPage() {
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
              <Link href="/about" className="hover:underline font-semibold">About</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About PDF Book Page Trimmer</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              PDF Book Page Trimmer is a free, web-based tool designed to help you remove unwanted margins
              and borders from scanned book PDFs, creating cleaner, more readable digital documents.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We believe that digitizing books and documents should be accessible to everyone. Whether you're
              a student, librarian, researcher, or book enthusiast, PDF Book Page Trimmer empowers you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Preserve personal book collections</li>
              <li>Clean up scanned documents for better readability</li>
              <li>Prepare materials for e-readers and tablets</li>
              <li>Archive public domain works</li>
              <li>Optimize PDFs for digital distribution</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How It Started</h2>
            <p className="text-gray-700 mb-6">
              The idea for PDF Book Page Trimmer came from personal frustration with scanned books that had
              excessive margins, shadows from book bindings, and inconsistent page edges. Existing tools were
              either expensive, complicated, or required installation. We wanted to create a solution that was:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">✓ Free to Use</h3>
                <p className="text-sm text-gray-700">No subscriptions, no hidden fees</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">✓ Web-Based</h3>
                <p className="text-sm text-gray-700">Works in any modern browser</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">✓ Privacy-Focused</h3>
                <p className="text-sm text-gray-700">Files deleted after 1 hour</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">✓ Easy to Use</h3>
                <p className="text-sm text-gray-700">Visual preview, simple controls</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technology Stack</h2>
            <p className="text-gray-700 mb-4">
              PDF Book Page Trimmer is built with modern, reliable technologies:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-700">
                <strong className="text-gray-900">Frontend:</strong> Next.js 14 with TypeScript and Tailwind CSS
                for a fast, responsive user interface
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Backend:</strong> Flask API with PyMuPDF (fitz) for
                high-quality PDF processing and image generation
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Hosting:</strong> Vercel for reliable, global content delivery
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Privacy:</strong> Automatic file cleanup and HTTPS encryption
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Features Overview</h2>
            <p className="text-gray-700 mb-4">
              Our tool offers professional-grade features without the complexity:
            </p>
            <div className="bg-gray-50 border rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>📄 <strong>Visual Preview:</strong> See exactly what you're cropping before export</li>
                <li>📏 <strong>Independent Crop Lines:</strong> Different settings for left and right pages</li>
                <li>🔄 <strong>Single-Page Mode:</strong> Toggle between facing pages and single-page view</li>
                <li>📋 <strong>Batch Operations:</strong> Copy settings to all or remaining pages</li>
                <li>🎨 <strong>Multiple Formats:</strong> Export as JPG, PNG, TIFF, or WebP</li>
                <li>⚙️ <strong>Quality Control:</strong> Adjust DPI (72-600) and compression quality</li>
                <li>✅ <strong>Selective Export:</strong> Choose which pages to include in final output</li>
                <li>📦 <strong>ZIP Download:</strong> Get all processed pages in one convenient file</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Who Uses PDF Book Page Trimmer?</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📚 Students & Educators</h3>
                <p className="text-sm text-gray-700">
                  Clean up scanned textbooks, lecture notes, and study materials for better readability
                  on tablets and e-readers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏛️ Libraries & Archives</h3>
                <p className="text-sm text-gray-700">
                  Digitize public domain books and historical documents with professional-quality
                  crop settings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🔬 Researchers</h3>
                <p className="text-sm text-gray-700">
                  Prepare academic papers, journal articles, and research documents for citation
                  and digital archives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📖 Book Collectors</h3>
                <p className="text-sm text-gray-700">
                  Preserve personal book collections by creating clean digital backups without
                  scanning artifacts.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Commitment to Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy matters. We don't store your PDFs permanently. All uploaded files are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Processed on secure servers with HTTPS encryption</li>
              <li>Automatically deleted after 1 hour</li>
              <li>Never shared with third parties</li>
              <li>Not used for training or analysis</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Read our full <Link href="/privacy" className="text-purple-600 hover:underline font-semibold">Privacy Policy</Link> for details.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Future Development</h2>
            <p className="text-gray-700 mb-4">
              We're constantly improving PDF Book Page Trimmer. Planned features include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Auto-detection of crop boundaries</li>
              <li>Preset templates for common book sizes</li>
              <li>Batch processing of multiple PDFs</li>
              <li>Cloud storage integration</li>
              <li>Advanced filtering (deskew, brightness, contrast)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Have a feature request? <Link href="/contact" className="text-purple-600 hover:underline font-semibold">Contact us</Link> —we'd
              love to hear your ideas!
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Copyright & Legal</h2>
            <p className="text-gray-700 mb-6">
              PDF Book Page Trimmer is a tool for personal use and digitization of content you have the
              right to modify. Please respect copyright laws and only process:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Public domain works</li>
              <li>Books and documents you own</li>
              <li>Materials for personal research (fair use)</li>
              <li>Content with proper licensing</li>
            </ul>
            <p className="text-gray-700 mb-6">
              See our <Link href="/terms" className="text-purple-600 hover:underline font-semibold">Terms of Service</Link> for usage guidelines.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-600 p-6 mt-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Open to Feedback</h3>
              <p className="text-gray-700">
                PDF Book Page Trimmer is built by users, for users. Your feedback shapes the tool's
                development. Thank you for being part of our community!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 font-semibold"
          >
            Try the Tool
          </Link>
        </div>
      </main>
    </div>
  )
}
