import { ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { LeadForm } from '../components/LeadForm'
import { Reveal } from '../components/ui/Reveal'

const TRUST_POINTS = [
  'Paper trading first',
  'Data labels on everything',
  'No profit guarantees — ever',
]

export function GetStartedPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of the heading in every language.
  const [headingHead, headingTail] = splitStyledTail(t('Start Analysing — Free'))

  return (
    <div className="bg-deep pt-[72px]">
      {/* Page header */}
      <section className="relative overflow-hidden bg-deep pb-8 pt-14 md:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[400px] w-[400px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <h1 className="mb-5 text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              {headingHead} <span className="text-gradient-brand">{headingTail}</span>
            </h1>
            <p className="text-base leading-relaxed text-muted-dark md:text-lg">
              {t('No credit card. No deposit required.')}
            </p>
            {/* Trust points live above the form so the phone-country
                dropdown never overlaps them */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-success" />
                  {t(point)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-navy p-6 shadow-card-lg md:p-8">
              <LeadForm
                formHeading={t('Explore Trading Opportunities')}
                submitLabel={t('Start Free Access')}
                formName="homepage_lead"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
