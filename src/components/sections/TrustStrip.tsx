import { useTranslation } from 'react-i18next'
import { trustStrip } from '../../content/trust'
import { Reveal } from '../ui/Reveal'

export function TrustStrip() {
  const { t } = useTranslation()

  return (
    <section className="border-b border-border bg-navy py-6 md:py-8">
      <div className="mx-auto max-w-container px-4 md:px-6">
        {/* 1 col on phones, 3 equal columns from tablet up — one per item */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
          {trustStrip.map((item, i) => (
            <Reveal key={t(item.title)} delay={i * 80}>
              <div className="flex h-full items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug text-ink">
                    {t(item.title)}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                    {t(item.description)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
