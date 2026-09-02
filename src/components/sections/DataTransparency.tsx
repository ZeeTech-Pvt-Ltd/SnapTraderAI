import { Lock, Scale, ShieldCheck } from 'lucide-react'
import { dataLabels } from '../../content/trust'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

const TRUST_PILLARS = [
  {
    icon: Lock,
    title: 'Security First',
    description:
      'Encryption at rest and in transit. Access controls, regular security audits and strict data handling policies.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy Guaranteed',
    description:
      "We don't sell your data. Period. Your personal information and trading activity remain private. Request deletion anytime.",
  },
  {
    icon: Scale,
    title: 'Regulatory Alignment',
    description:
      'Built with FCA principles in mind. Snap Trader AI is a research platform — not a regulated financial services firm.',
  },
]

export function DataTransparency() {
  const { t } = useTranslation()

  return (
    <section className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title={t('Every Number Tells You Its Source')}
            description={t("We label every data point so you know exactly what you're looking at. If something isn't labelled, treat it as illustrative.")}
          />
        </Reveal>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dataLabels.map((item, i) => (
            <Reveal key={t(item.label)} delay={i * 80}>
              <div
                className={`flex h-full flex-col gap-3 rounded-xl border border-t-2 border-border bg-navy p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-lg ${item.topBorderClass}`}
              >
                <span
                  className={`w-fit rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider ${item.dotClass}`}
                >
                  {t(item.dot)}
                </span>
                <h3 className="font-semibold text-ink">{t(item.label)}</h3>
                <p className="text-sm leading-relaxed text-muted-dark">{t(item.description)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center text-sm text-ink-soft">
            {t('If a result is not labelled, treat it as illustrative.')}{' '}
            <a href="#faq" className="font-semibold text-accent underline underline-offset-2 transition-colors hover:text-accent-hover">
              {t('Read the full methodology →')}
            </a>
          </p>
        </Reveal>

        {/* Trust pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TRUST_PILLARS.map((pillar, i) => (
            <Reveal key={t(pillar.title)} delay={i * 90}>
              <div className="h-full rounded-xl border border-border bg-navy p-6 shadow-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-ink">{t(pillar.title)}</h3>
                <p className="text-sm leading-relaxed text-muted-dark">{t(pillar.description)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
