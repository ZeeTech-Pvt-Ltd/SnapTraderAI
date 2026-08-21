import { stats } from '../../content/stats'
import { CountUp } from '../ui/CountUp'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Stats() {
  return (
    <section className="border-y border-border bg-navy py-20 lg:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title="Context Matters"
            description="Key platform figures — for context, not promises."
          />
        </Reveal>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="group h-full rounded-lg border border-border bg-medium-navy/40 p-6 text-center transition-colors hover:border-accent/40">
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
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs italic text-ink-soft">
            Statistics are for context only. They describe the platform — not a
            promise of trading results. Past data, backtests and industry
            statistics do not guarantee future performance.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
