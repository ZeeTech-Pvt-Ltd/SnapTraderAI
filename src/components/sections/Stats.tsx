import { stats } from '../../content/stats'
import { CountUp } from '../ui/CountUp'
import { Reveal } from '../ui/Reveal'

export function Stats() {
  return (
    <section className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          {/* Soft brand-tinted panel — same card language as the rest of the site */}
          <div
            className="relative overflow-hidden rounded-3xl border border-border px-6 py-14 shadow-card md:px-12"
            style={{
              background:
                'linear-gradient(135deg, #EDF7FC 0%, #F4FAFD 45%, #EBF8F3 100%)',
            }}
          >
            {/* Gentle white highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: 'rgb(255 255 255 / 0.55)' }}
            />

            <div className="relative z-10 mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-ink md:text-4xl">
                Context Matters
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mb-5 h-1 w-16 rounded-full gradient-brand"
              />
              <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                Key platform figures — for context, not promises.
              </p>
            </div>

            <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-navy p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-lg"
                >
                  <p className="mb-2 font-mono text-3xl font-black tracking-tight text-gradient-brand">
                    <CountUp
                      target={stat.value}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mb-3 text-sm font-semibold text-ink">{stat.label}</p>
                  <p className="text-xs italic text-ink-soft">{stat.note}</p>
                </div>
              ))}
            </div>

            <p className="relative z-10 mx-auto mt-10 max-w-2xl text-center text-xs italic text-ink-soft">
              Statistics are for context only. They describe the platform — not a
              promise of trading results. Past data, backtests and industry
              statistics do not guarantee future performance.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
