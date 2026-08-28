import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Injects <link rel="modulepreload"> and CSS preload hints for the entry
    assets so the browser discovers them before parsing the HTML. Also inlines
    the minimal critical CSS and defers the full stylesheet (non-blocking). */
function preloadEntryAssets(): Plugin {
  return {
    name: 'preload-entry-assets',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml(html, ctx) {
      const files = Object.keys(ctx.bundle ?? {})
      const js = files.find((f) => /^assets\/index-.*\.js$/.test(f))
      const css = files.find((f) => /^assets\/index-.*\.css$/.test(f))
      if (!js || !css) return html

      const critical = loadCriticalCss()
      const preloads = [
        critical ? `<style>${critical}</style>` : '',
        `<link rel="modulepreload" href="/${js}" />`,
        `<link rel="preload" as="style" href="/${css}" />`,
      ]
        .filter(Boolean)
        .join('\n    ')

      // Defer the full stylesheet so it never blocks first paint
      html = html.replace(
        `<link rel="stylesheet" crossorigin href="/${css}">`,
        `<link rel="stylesheet" href="/${css}" media="print" onload="this.media='all'">`,
      )
      return html.replace('</head>', `    ${preloads}\n  </head>`)
    },
  }
}

function loadCriticalCss(): string {
  try {
    const { readFileSync } = require('fs')
    return readFileSync('src/critical.css', 'utf8')
  } catch {
    return ''
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadEntryAssets()],
})
