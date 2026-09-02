import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Generates /sitemap.xml from the route list at build time. */
function generateSitemap(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    async closeBundle() {
      const { SITE_ROUTES, SITE_URL } = await import('./src/content/sitemap.ts')
      const { writeFileSync } = await import('fs')
      const urls = SITE_ROUTES.map(
        (route) =>
          `  <url><loc>${SITE_URL}${route}</loc><changefreq>weekly</changefreq><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`,
      ).join('\n')
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      writeFileSync('dist/sitemap.xml', sitemap)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), generateSitemap()],
})
