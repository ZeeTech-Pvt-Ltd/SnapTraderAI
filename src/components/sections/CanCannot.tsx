import { Check, X } from 'lucide-react'
import { canCannot } from '../../content/trust'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function CanCannot() {
  const { t } = useTranslation()

  return (
    <section className="border-y border-border bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title={t('What Snap Trader AI Can Help With — And What It Cannot Do')}
            description={t("Honest expectations build better traders. Here's the reality, in plain language.")}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-deep p-7 md:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                style={{ background: 'rgb(22 163 74 / 0.14)' }}
              />
              <Check
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 text-success/10"
                strokeWidth={1}
              />
              <h3 className="relative mb-6 flex items-center gap-2 text-lg font-bold text-success">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success/15">
                  <Check className="h-4 w-4" />
                </span>
                {t('Snap Trader AI Helps With')}
              </h3>
              <ul className="relative space-y-3.5">
                {canCannot.can.map((item) => (
                  <li key={t(item)} className="flex items-start gap-3 text-sm leading-relaxed text-muted-dark">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-deep p-7 md:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                style={{ background: 'rgb(220 38 38 / 0.12)' }}
              />
              <X
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 text-danger/10"
                strokeWidth={1}
              />
              <h3 className="relative mb-6 flex items-center gap-2 text-lg font-bold text-danger">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-danger/15">
                  <X className="h-4 w-4" />
                </span>
                {t('Snap Trader AI Does NOT')}
              </h3>
              <ul className="relative space-y-3.5">
                {canCannot.cannot.map((item) => (
                  <li key={t(item)} className="flex items-start gap-3 text-sm leading-relaxed text-muted-dark">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
