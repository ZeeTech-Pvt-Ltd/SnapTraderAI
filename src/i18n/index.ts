import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import it from './locales/it.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import es from './locales/es.json'

export const SUPPORTED_LANGS = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'it', short: 'IT', label: 'Italiano' },
  { code: 'de', short: 'DE', label: 'Deutsch' },
  { code: 'fr', short: 'FR', label: 'Français' },
  { code: 'es', short: 'ES', label: 'Español' },
] as const

const STORAGE_KEY = 'snaptrader-lang'

/** English is the default; persisted choice wins. */
export function getInitialLang(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && SUPPORTED_LANGS.some((l) => l.code === saved)) return saved
  } catch {
    // localStorage unavailable — keep English
  }
  return 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    en,
    it,
    de,
    fr,
    es,
  },
  lng: getInitialLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnEmptyString: false,
  // Keys are full English sentences — dots and colons are part of the text,
  // never namespace/key separators ("Apple Inc.", "R : R", …).
  keySeparator: false,
  nsSeparator: false,
})

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // ignore persistence errors
  }
})

// Apply the persisted/initial language to the <html> tag immediately
document.documentElement.lang = i18n.language

/** Splits a translated sentence into [head, tail] so the tail can carry
    special styling (gradient / accent). Handles French-style spaces before
    punctuation ("Pro ?" keeps the "?" with the word). */
export function splitStyledTail(sentence: string, tailWords = 1): [string, string] {
  const words = sentence.split(' ')
  const tail = words.splice(words.length - tailWords, tailWords)
  if (
    tail.length &&
    words.length &&
    /^[\s\p{P}\p{S}]+$/u.test(tail[tail.length - 1])
  ) {
    tail.unshift(words.pop()!)
  }
  return [words.join(' '), tail.join(' ')]
}

/** Localised URL slug for the given English slug; falls back to the slug
    itself when no translation exists (e.g. for English). */
export function localizedSlug(slug: string): string {
  const key = `slug:${slug}`
  return i18n.exists(key) ? i18n.t(key) : slug
}

/** Resolves a URL slug — written in any supported language — back to its
    English slug, so /blog/<slug> links keep working across languages. */
export function resolveLocalizedSlug(englishSlugs: string[], urlSlug: string): string | undefined {
  return englishSlugs.find((candidate) => {
    if (candidate === urlSlug) return true
    return SUPPORTED_LANGS.some((lang) => i18n.t(`slug:${candidate}`, { lng: lang.code }) === urlSlug)
  })
}

export default i18n
