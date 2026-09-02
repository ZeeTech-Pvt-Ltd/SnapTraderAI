import { Check, Monitor, Smartphone, TabletSmartphone } from 'lucide-react'
import { features } from '../../content/features'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

const CHECKLIST = [
  'No registration fees, hidden charges or commissions',
  'Beginner-friendly — start small while you learn',
  'Built for any device with a stable connection',
]

export function Features() {
  const { t } = useTranslation()
  return (
    <section id="why-snap" className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title={t('Built for Traders Who Want an Edge — Without the Hype')}
            description={t("Advanced chart analysis, risk controls and education in one place. Here's what sets the platform apart.")}
          />
        </Reveal>

        {/* Bento grid — varied spans to break the uniform card rhythm */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const isWide = i === 0
            const isFull = i === features.length - 1
            return (
              <Reveal
                key={t(feature.title)}
                delay={(i % 3) * 90}
                className={
                  isFull
                    ? 'sm:col-span-2 lg:col-span-3'
                    : isWide
                      ? 'sm:col-span-2 lg:col-span-2'
                      : ''
                }
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-navy p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-lg ${
                    isFull
                      ? 'lg:flex-row lg:items-center lg:gap-8 lg:p-8'
                      : ''
                  } ${isWide ? 'md:p-8' : ''}`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'rgb(0 180 230 / 0.12)' }}
                  />
                  <div
                    className={`mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow ${
                      isFull ? 'lg:mb-0' : ''
                    }`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`mb-2 font-semibold text-ink ${
                        isWide ? 'text-lg md:text-xl' : 'text-base'
                      }`}
                    >
                      {t(feature.title)}
                    </h3>
                    <p
                      className={`leading-relaxed text-muted-dark ${
                        isWide ? 'text-base' : 'text-sm'
                      }`}
                    >
                      {t(feature.description)}
                    </p>
                    {isWide && (
                      <div className="mt-5 flex items-center gap-4 text-ink-soft">
                        <Monitor className="h-7 w-7" aria-hidden="true" />
                        <span className="font-mono text-xs text-ink-soft/60">/</span>
                        <TabletSmartphone className="h-7 w-7" aria-hidden="true" />
                        <span className="font-mono text-xs text-ink-soft/60">/</span>
                        <Smartphone className="h-6 w-6" aria-hidden="true" />
                        <span className="ml-1 text-xs font-medium">
                          {t('Desktop · Tablet · Mobile')}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Enhanced performance band */}
        <Reveal>
          <div className="mt-14 grid items-center gap-10 rounded-2xl border border-border bg-navy p-8 shadow-card md:p-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="mb-4 text-2xl font-extrabold leading-tight text-ink md:text-3xl">
                {t('Enhanced Performance,')}
                <br />
                <span className="text-gradient-brand">{t('Modifiable Settings')}</span>
              </h3>
              <p className="mb-6 text-base leading-relaxed text-muted-dark md:text-lg">
                {t('Automated features with adjustable settings let you trade according to your style and preferences — scalp the minutes or swing the weeks.')}
              </p>
              <ul className="space-y-3">
                {CHECKLIST.map((item) => (
                  <li key={t(item)} className="flex items-center gap-3 text-sm text-muted-dark">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </span>
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
            {/* Abstract performance visual */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-[#F8FAFD] p-6">
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-40 w-40 rounded-full blur-3xl"
                style={{ background: 'rgb(0 180 230 / 0.12)' }}
              />
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink-soft">
                {t('Portfolio Simulation · 12 months')}
              </p>
              <svg viewBox="0 0 400 160" className="w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="perf-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#00B4E6" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#00C8AC" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="perf-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#00B4E6" />
                    <stop offset="1" stopColor="#00C8AC" />
                  </linearGradient>
                </defs>
                {[32, 64, 96, 128].map((y) => (
                  <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#E3E9F2" strokeWidth="0.5" strokeDasharray="3 4" />
                ))}
                {/* diversified portfolio curve */}
                <path
                  d="M0,140 C40,132 60,138 90,122 C120,106 140,112 170,96 C200,80 220,88 250,70 C280,52 300,58 330,40 C360,24 380,30 400,18 L400,160 L0,160 Z"
                  fill="url(#perf-fill)"
                />
                <path
                  d="M0,140 C40,132 60,138 90,122 C120,106 140,112 170,96 C200,80 220,88 250,70 C280,52 300,58 330,40 C360,24 380,30 400,18"
                  fill="none"
                  stroke="url(#perf-line)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* single-market comparison */}
                <path
                  d="M0,140 C60,136 80,130 120,128 C170,126 200,138 240,130 C290,120 340,132 400,120"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  opacity="0.5"
                />
              </svg>
              <div className="mt-4 flex items-center justify-between">
                <p className="flex items-center gap-1.5 font-mono text-[10px] text-ink-soft">
                  <span className="h-2 w-2 rounded-sm gradient-brand" /> {t('Diversified portfolio')}
                </p>
                <p className="flex items-center gap-1.5 font-mono text-[10px] text-ink-soft">
                  <span className="h-2 w-2 rounded-sm bg-ink-soft/50" /> {t('Single market')}
                </p>
              </div>
              <p className="mt-2 font-mono text-[8px] text-ink-soft/50">
                {t('Illustrative — not actual performance.')}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
