import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/'
  },
  sitemap: 'https://kamilo.dev/sitemap.xml'
})

export default robots
