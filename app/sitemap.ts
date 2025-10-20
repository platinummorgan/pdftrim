import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const b = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdftrim.app'
  const now = new Date().toISOString()
  return [
    { url: `${b}/`, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${b}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${b}/terms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${b}/faq`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${b}/contact`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${b}/about`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 },
  ]
}
