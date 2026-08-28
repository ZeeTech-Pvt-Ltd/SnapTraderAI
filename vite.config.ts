import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Injects <link rel="modulepreload"> and CSS preload hints for the entry
    assets so the browser discovers them before parsing the HTML. */
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
      const preloads = [
        `<link rel="modulepreload" href="/${js}" />`,
        `<link rel="preload" as="style" href="/${css}" />`,
      ].join('\n    ')
      return html.replace('</head>', `    ${preloads}\n  </head>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadEntryAssets()],
})
