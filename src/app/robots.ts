import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://depden.it'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/_next/',       
        '/api/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}