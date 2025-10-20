export function JsonLd() {
  const base = process.env.NEXT_PUBLIC_BASE_URL!
  const app = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PDF Book Page Trimmer',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    description:
      'Trim margins on left/right pages of scanned book PDFs and export as images. Free and runs server-side with privacy protection.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: base,
  }
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How are my files processed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Files are uploaded to our secure server, processed immediately, and deleted after export. We do not store or share your files.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I crop left and right pages differently?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Use Left/Right page mode and copy settings to remaining pages for consistent cropping.',
        },
      },
      {
        '@type': 'Question',
        name: 'What export options are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JPG, PNG, TIFF, or WebP with adjustable quality (1-100) and DPI (72-600).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a file size limit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Free tier supports PDFs up to 100MB. Large files may take longer to process.',
        },
      },
    ],
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
