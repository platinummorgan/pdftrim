import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* 404 Graphic */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text">
              404
            </div>
            <div className="text-3xl font-semibold text-gray-800 mt-4">
              Page Not Found
            </div>
          </div>

          {/* Message */}
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved,
            deleted, or the URL might be incorrect.
          </p>

          {/* Suggestions */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-purple-900 mb-3">Here's what you can try:</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Check the URL for typos or errors</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Use the navigation below to browse our pages</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Visit our FAQ for common questions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Contact us if you think this is a mistake</span>
              </li>
            </ul>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 font-semibold transition-all transform hover:scale-105"
            >
              Go to Homepage
            </Link>
            <Link
              href="/faq"
              className="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 font-semibold transition-all"
            >
              View FAQ
            </Link>
          </div>

          {/* Additional Links */}
          <div className="border-t pt-6 mt-6">
            <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/about" className="text-purple-600 hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-purple-600 hover:underline">
                Contact
              </Link>
              <Link href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-600 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-6">
          Need help? Email us at{' '}
          <a
            href="mailto:admin@ripstuff.net"
            className="text-purple-600 hover:underline font-semibold"
          >
            admin@ripstuff.net
          </a>
        </p>
      </div>
    </div>
  )
}
