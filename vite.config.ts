import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Generates /sitemap.xml from the route list at build time, including every
    language's localised path variant. */
function generateSitemap(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    async closeBundle() {
      const { SITE_ROUTES, SITE_URL } = await import('./src/content/sitemap.ts')
      const { readFileSync, writeFileSync } = await import('fs')
      const path = await import('path')

      // English path segment → { langCode → localised segment }, read straight
      // from the locale files so there is a single source of truth.
      const segmentKeys: Record<string, Record<string, string>> = {}
      for (const code of ['en', 'it', 'de', 'fr', 'es']) {
        const json = JSON.parse(
          readFileSync(path.resolve(__dirname, 'src/i18n/locales', `${code}.json`), 'utf8'),
        )
        for (const [key, value] of Object.entries(json.translation) as [string, string][]) {
          if (key.startsWith('path:')) {
            const english = key.slice('path:'.length)
            segmentKeys[english] ??= {}
            segmentKeys[english][code] = value
          }
        }
      }
      const localize = (route: string, lang: string) =>
        route
          .split('/')
          .map((seg) => (seg ? (segmentKeys[seg]?.[lang] ?? seg) : seg))
          .join('/')

      const urls = new Set<string>()
      for (const route of SITE_ROUTES) {
        for (const lang of ['en', 'it', 'de', 'fr', 'es']) {
          urls.add(`${SITE_URL}${localize(route, lang)}`)
        }
      }

      const entries = [...urls].map(
        (url) =>
          `  <url><loc>${url}</loc><changefreq>weekly</changefreq><priority>${url.replace(/\/+$/, '') === SITE_URL ? '1.0' : '0.8'}</priority></url>`,
      )
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`
      writeFileSync('dist/sitemap.xml', sitemap)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), generateSitemap()],
})
