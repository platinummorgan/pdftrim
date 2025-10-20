import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — PDF Book Page Trimmer',
  description: 'Get in touch with our support team for questions about PDF trimming.',
}

export default function ContactPage() {
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
              <Link href="/contact" className="hover:underline font-semibold">Contact</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              We're here to help! If you have questions, feedback, or need assistance with PDF Book Page Trimmer,
              please reach out to us.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
              <h2 className="text-2xl font-semibold text-purple-900 mb-3">Email Support</h2>
              <p className="text-gray-700 mb-2">
                For technical support, feature requests, or general inquiries:
              </p>
              <p className="text-xl">
                <a
                  href="mailto:admin@ripstuff.net"
                  className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  admin@ripstuff.net
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Before You Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Please check our <Link href="/faq" className="text-purple-600 hover:underline font-semibold">Frequently Asked Questions (FAQ)</Link> page
              first—your question might already be answered there!
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What to Include in Your Message</h2>
            <p className="text-gray-700 mb-3">To help us assist you quickly, please include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Subject line:</strong> Brief description of your issue or question</li>
              <li><strong>Browser and OS:</strong> What browser and operating system you're using</li>
              <li><strong>File details:</strong> PDF file size, number of pages (don't send the actual PDF unless we request it)</li>
              <li><strong>Error messages:</strong> Any error messages you received</li>
              <li><strong>Steps to reproduce:</strong> What you were doing when the issue occurred</li>
              <li><strong>Screenshots:</strong> Visual aids are helpful (if applicable)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Response Time</h2>
            <p className="text-gray-700 mb-6">
              We aim to respond to all inquiries within 24-48 hours during business days. Please note that
              response times may be longer on weekends and holidays.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Reasons to Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Issues</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Upload errors</li>
                  <li>Processing failures</li>
                  <li>Browser compatibility</li>
                  <li>Download problems</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-semibold text-gray-900 mb-2">Feature Requests</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>New export formats</li>
                  <li>Additional crop options</li>
                  <li>Batch processing</li>
                  <li>UI improvements</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-semibold text-gray-900 mb-2">Usage Questions</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>How to use specific features</li>
                  <li>Best practices</li>
                  <li>Format recommendations</li>
                  <li>DPI and quality settings</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-semibold text-gray-900 mb-2">Legal & Privacy</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Data handling questions</li>
                  <li>GDPR requests</li>
                  <li>Copyright clarifications</li>
                  <li>Terms of service</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Privacy Note</h2>
            <p className="text-gray-700 mb-6">
              When contacting us, please <strong>do not</strong> send sensitive or confidential documents
              unless we specifically request them. If you need to share a problematic PDF for troubleshooting,
              we'll provide secure upload instructions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Feedback Welcome</h2>
            <p className="text-gray-700 mb-4">
              We love hearing from our users! Whether you have suggestions for improvement, found a bug, or
              just want to share your experience, we appreciate your feedback. Your input helps us make
              PDF Book Page Trimmer better for everyone.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Commercial Inquiries</h3>
              <p className="text-gray-700">
                For partnership opportunities, API access, or custom development, please email with
                "Commercial Inquiry" in the subject line.
              </p>
            </div>
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
            href="/faq"
            className="inline-block px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 font-semibold"
          >
            View FAQ
          </Link>
        </div>
      </main>
    </div>
  )
}
