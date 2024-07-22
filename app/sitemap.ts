import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => ([
  {
    url: 'https://kamilo.dev',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1
  }
])

export default sitemap
