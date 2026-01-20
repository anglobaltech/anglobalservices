import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const baseUrl = 'https://anglobalservices.com'
  const appDir = path.join(process.cwd(), 'app')

  function getRoutes(dir, basePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    let routes = []

    for (const entry of entries) {
      if (
        entry.name.startsWith('_') ||
        entry.name === 'api' ||
        entry.name === 'sitemap.xml'
      ) continue

      const fullPath = path.join(dir, entry.name)
      const routePath = `${basePath}/${entry.name}`

      if (entry.isDirectory()) {
        const pageFile = path.join(fullPath, 'page.js')
        if (fs.existsSync(pageFile)) {
          routes.push(routePath)
        }
        routes.push(...getRoutes(fullPath, routePath))
      }
    }
    return routes
  }

  const pages = getRoutes(appDir)

  const urls = pages.map(
    (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
  ).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <priority>1.0</priority>
    </url>
    ${urls}
  </urlset>`

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
