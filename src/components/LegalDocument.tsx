import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from './ui/Reveal'

export interface LegalSection {
  title: string
  paragraphs?: string[]
  /** Bulleted list rendered below the paragraphs */
  list?: string[]
}

interface LegalDocumentProps {
  /** Page <title> suffix */
  title: string
  heading: ReactNode
  intro: string
  effectiveDate?: string
  /** Label shown before the date, e.g. "Effective date" or "Last updated" */
  dateLabel?: string
  sections: LegalSection[]
  /** Rendered inside the final "Contact Us" section */
  contactContent?: ReactNode
  /** Rendered in the note box at the bottom */
  note?: string
}

/** Shared layout for policy-style documents (Privacy Policy, Terms, etc.). */
export function LegalDocument({
  title,
  heading,
  intro,
  effectiveDate,
  dateLabel = 'Effective date',
  sections,
  contactContent,
  note,
}: LegalDocumentProps) {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = `${title} | SnapTrader AI`
    window.scrollTo(0, 0)
  }, [title])

  return (
    <div className="bg-deep pt-[72px]">
      {/* Page header */}
      <section className="relative overflow-hidden bg-deep pb-10 pt-14 md:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[400px] w-[400px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('Back to Homepage')}
            </Link>
            <h1 className="mb-5 max-w-[600px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              {heading}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-muted-dark">
              {intro}
            </p>
            {effectiveDate && (
              <p className="mt-4 font-mono text-xs text-ink-soft">
                {t(dateLabel)}: {t(effectiveDate)}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Document body — full-width white card */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <article className="rounded-2xl border border-border bg-navy p-6 shadow-card md:p-10">
              {sections.map((section, i) => (
                <div
                  key={section.title}
                  className={i === 0 ? '' : 'mt-10 border-t border-border pt-10'}
                >
                  <h2 className="mb-4 text-xl font-extrabold text-ink md:text-2xl">
                    {i + 1}. {t(section.title)}
                  </h2>
                  {section.paragraphs?.map((p) => (
                    <p key={p.slice(0, 40)} className="mb-4 text-sm leading-relaxed text-muted-dark md:text-base">
                      {t(p)}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mb-4 space-y-2.5">
                      {section.list.map((item) => (
                        <li
                          key={item.slice(0, 40)}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted-dark md:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-brand" />
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {contactContent && (
                <div className="mt-10 border-t border-border pt-10">
                  <h2 className="mb-4 text-xl font-extrabold text-ink md:text-2xl">
                    {sections.length + 1}. {t('Contact Us')}
                  </h2>
                  {contactContent}
                </div>
              )}

              {note && (
                <p className="mt-10 rounded-lg border border-border bg-deep p-4 text-xs leading-relaxed text-ink-soft">
                  {t(note)}
                </p>
              )}
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
