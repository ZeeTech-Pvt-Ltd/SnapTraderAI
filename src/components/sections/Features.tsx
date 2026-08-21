import { Check } from 'lucide-react'
import { features } from '../../content/features'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

const CHECKLIST = [
  'No registration fees, hidden charges or commissions',
  'Beginner-friendly — start small while you learn',
  'Built for any device with a stable connection',
]

export function Features() {
  return (
    <section id="why-snap" className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title="Built for Traders Who Want an Edge — Without the Hype"
            description="Advanced chart analysis, risk controls and education in one place. Here's what sets the platform apart."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 90}>
              <article className="group h-full rounded-2xl border border-border bg-navy p-7 shadow-card transition-shadow duration-300 hover:shadow-card-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-ink">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-dark">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Enhanced performance band */}
        <Reveal>
          <div className="mt-14 grid items-center gap-10 rounded-2xl border border-border bg-navy p-8 shadow-card md:p-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="mb-4 text-2xl font-extrabold leading-tight text-ink md:text-3xl">
                Enhanced Performance,
                <br />
                <span className="text-gradient-brand">Modifiable Settings</span>
              </h3>
              <p className="mb-6 text-base leading-relaxed text-muted-dark md:text-lg">
                Automated features with adjustable settings let you trade according
                to your style and preferences — scalp the minutes or swing the weeks.
              </p>
              <ul className="space-y-3">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-dark">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </span>
                    {item}
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
                Portfolio Simulation · 12 months
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
                  <span className="h-2 w-2 rounded-sm gradient-brand" /> Diversified portfolio
                </p>
                <p className="flex items-center gap-1.5 font-mono text-[10px] text-ink-soft">
                  <span className="h-2 w-2 rounded-sm bg-ink-soft/50" /> Single market
                </p>
              </div>
              <p className="mt-2 font-mono text-[8px] text-ink-soft/50">
                Illustrative — not actual performance.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
