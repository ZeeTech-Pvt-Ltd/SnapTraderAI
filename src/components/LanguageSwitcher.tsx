import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { SUPPORTED_LANGS } from '../i18n'

/** Inline SVG country flags — Windows/Chrome don't render flag emojis. */
function Flag({ code }: { code: string }) {
  const common = {
    width: 20,
    height: 14,
    className: 'shrink-0 rounded-[2px] shadow-sm',
    'aria-hidden': true,
  } as const

  switch (code) {
    case 'en':
      return (
        <svg viewBox="0 0 20 14" {...common}>
          <rect width="20" height="14" fill="#012169" />
          <path d="M0,0 L20,14 M20,0 L0,14" stroke="#fff" strokeWidth="2.6" />
          <path d="M0,0 L20,14 M20,0 L0,14" stroke="#C8102E" strokeWidth="1.3" />
          <path d="M10,0 V14 M0,7 H20" stroke="#fff" strokeWidth="4.4" />
          <path d="M10,0 V14 M0,7 H20" stroke="#C8102E" strokeWidth="2.6" />
        </svg>
      )
    case 'it':
      return (
        <svg viewBox="0 0 20 14" {...common}>
          <rect width="20" height="14" fill="#009246" />
          <rect x="6.7" width="6.6" height="14" fill="#fff" />
          <rect x="13.3" width="6.7" height="14" fill="#ce2b37" />
        </svg>
      )
    case 'de':
      return (
        <svg viewBox="0 0 20 14" {...common}>
          <rect width="20" height="14" fill="#000" />
          <rect y="4.7" width="20" height="4.6" fill="#DD0000" />
          <rect y="9.3" width="20" height="4.7" fill="#FFCE00" />
        </svg>
      )
    case 'fr':
      return (
        <svg viewBox="0 0 20 14" {...common}>
          <rect width="20" height="14" fill="#0055A4" />
          <rect x="6.7" width="6.6" height="14" fill="#fff" />
          <rect x="13.3" width="6.7" height="14" fill="#EF4135" />
        </svg>
      )
    case 'es':
      return (
        <svg viewBox="0 0 20 14" {...common}>
          <rect width="20" height="14" fill="#AA151B" />
          <rect y="3.5" width="20" height="7" fill="#F1BF00" />
        </svg>
      )
    default:
      return null
  }
}

/** Flag + country short code dropdown in the header. */
export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current =
    SUPPORTED_LANGS.find((l) => l.code === i18n.language) ?? SUPPORTED_LANGS[0]

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Language: ${current.label}`}
        className="flex h-10 cursor-pointer items-center gap-1.5 rounded-md border border-border bg-navy px-2.5 text-ink transition-colors hover:bg-medium-navy"
      >
        <Flag code={current.code} />
        <span className="font-mono text-xs font-bold">{current.short}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-ink-soft transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Choose language"
          className="absolute right-0 top-full z-[70] mt-2 w-28 rounded-lg border border-border bg-navy p-1.5 shadow-card-lg"
        >
          {SUPPORTED_LANGS.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={lang.code === i18n.language}
              aria-label={lang.label}
              onClick={() => {
                i18n.changeLanguage(lang.code)
                setOpen(false)
              }}
              className={`flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors ${
                lang.code === i18n.language
                  ? 'bg-accent/10 text-accent'
                  : 'text-ink/80 hover:bg-medium-navy hover:text-ink'
              }`}
            >
              <Flag code={lang.code} />
              <span className="font-mono text-xs font-bold">{lang.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
