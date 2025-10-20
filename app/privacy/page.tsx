import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — PDF Book Page Trimmer',
  description: 'Learn how we handle your data and protect your privacy when using our PDF trimming service.',
}

export default function PrivacyPage() {
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
              <Link href="/privacy" className="hover:underline font-semibold">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At PDF Book Page Trimmer, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, and protect your information when you use our PDF trimming service.
            </p>

            <h2>Information We Collect</h2>
            
            <h3>Files You Upload</h3>
            <p>
              When you upload a PDF file to our service, the file is temporarily stored on our secure servers for
              processing purposes only. We process your PDF to generate cropped page images as requested.
            </p>
            <ul>
              <li><strong>Temporary storage:</strong> Uploaded PDFs are stored in temporary server storage during processing</li>
              <li><strong>Automatic deletion:</strong> All uploaded files and generated outputs are automatically deleted from our servers within 1 hour of upload</li>
              <li><strong>No permanent storage:</strong> We do not retain, archive, or create backups of your uploaded files</li>
              <li><strong>No content analysis:</strong> We do not read, analyze, or extract text or metadata from your PDFs beyond what is necessary for cropping operations</li>
            </ul>

            <h3>Usage Data</h3>
            <p>
              We may collect non-personally identifiable information about how you use our service, including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and features used</li>
              <li>Time and date of visits</li>
              <li>Referral source</li>
            </ul>

            <h3>Cookies and Tracking</h3>
            <p>
              We use cookies and similar tracking technologies for the following purposes:
            </p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our service (Google Analytics)</li>
              <li><strong>Advertising cookies:</strong> Used by Google AdSense to display relevant advertisements</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul>
              <li><strong>Service delivery:</strong> To process your PDFs and provide trimmed page images</li>
              <li><strong>Service improvement:</strong> To understand usage patterns and improve our tool</li>
              <li><strong>Technical support:</strong> To diagnose and fix technical issues</li>
              <li><strong>Legal compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <h2>Third-Party Services</h2>
            
            <h3>Google AdSense</h3>
            <p>
              We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads
              based on your prior visits to our website or other websites. You can opt out of personalized advertising
              by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener" className="text-purple-600 hover:underline">Google Ads Settings</a>.
            </p>

            <h3>Google Funding Choices (Consent Management)</h3>
            <p>
              For users in the European Economic Area (EEA), United Kingdom, and Switzerland, we use Google Funding
              Choices to obtain consent for cookies and data processing as required by GDPR and ePrivacy regulations.
              You can manage your consent preferences through the consent dialog that appears on your first visit.
            </p>

            <h3>Analytics</h3>
            <p>
              We may use analytics services to collect and analyze usage data. These services help us understand how
              users interact with our service and identify areas for improvement.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data:
            </p>
            <ul>
              <li><strong>HTTPS encryption:</strong> All data transmitted between your browser and our servers is encrypted using SSL/TLS</li>
              <li><strong>Secure servers:</strong> Our servers are hosted on secure infrastructure with industry-standard security measures</li>
              <li><strong>Access controls:</strong> Limited access to systems handling user data</li>
              <li><strong>Automatic deletion:</strong> Files are automatically purged from storage to minimize data exposure</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain different types of data for different periods:
            </p>
            <ul>
              <li><strong>Uploaded PDFs:</strong> Deleted within 1 hour of upload</li>
              <li><strong>Generated images:</strong> Deleted within 1 hour of generation</li>
              <li><strong>Usage logs:</strong> Retained for up to 30 days for technical troubleshooting</li>
              <li><strong>Analytics data:</strong> Retained according to Google Analytics' retention policies</li>
            </ul>

            <h2>Your Rights (GDPR)</h2>
            <p>
              If you are located in the European Economic Area, you have the following rights regarding your personal data:
            </p>
            <ul>
              <li><strong>Right to access:</strong> Request information about personal data we hold about you</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your data (note: files are automatically deleted)</li>
              <li><strong>Right to restrict processing:</strong> Request limitation of how we use your data</li>
              <li><strong>Right to data portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Right to object:</strong> Object to certain types of data processing</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw consent for cookie usage at any time</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our service is not directed at children under the age of 13. We do not knowingly collect personal
              information from children. If you believe we have collected information from a child, please contact us
              immediately.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your data may be processed on servers located outside your country of residence. We ensure appropriate
              safeguards are in place for such transfers in compliance with applicable data protection laws.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by
              posting a notice on our website. Your continued use of the service after such modifications constitutes
              acceptance of the updated policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:admin@ripstuff.net" className="text-purple-600 hover:underline">admin@ripstuff.net</a></li>
              <li>Contact Form: <Link href="/contact" className="text-purple-600 hover:underline">Contact Page</Link></li>
            </ul>

            <h2>Compliance</h2>
            <p>
              We are committed to complying with applicable privacy laws and regulations, including:
            </p>
            <ul>
              <li>General Data Protection Regulation (GDPR) - European Union</li>
              <li>ePrivacy Directive - European Union</li>
              <li>California Consumer Privacy Act (CCPA) - United States</li>
            </ul>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
