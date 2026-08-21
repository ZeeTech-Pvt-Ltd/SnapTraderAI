import { useState } from 'react'
import { markets, type DataLabel } from '../../content/markets'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

const FILTERS: ('All' | DataLabel)[] = ['All', 'Live', 'Delayed']

export function MarketTicker() {
  const [filter, setFilter] = useState<'All' | DataLabel>('All')
  const filtered = markets.filter((m) => filter === 'All' || m.label === filter)

  return (
    <section id="markets" className="border-y border-border bg-navy py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              align="left"
              className="mb-0"
              title="Multi-Market Coverage, One Dashboard"
              description="Every market shows its data label — live or delayed — right next to the price."
            />
            <div className="flex items-center gap-1.5 pb-1">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                    filter === f
                      ? 'bg-accent/15 text-accent'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((m) => (
              <div
                key={m.symbol}
                className="group cursor-pointer rounded-lg border border-border bg-medium-navy/40 px-4 py-3.5 transition-colors hover:border-accent/40 hover:bg-medium-navy"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-mono text-xs font-bold text-ink">{m.symbol}</p>
                  <span
                    className={`shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase ${
                      m.label === 'Live'
                        ? 'bg-success/10 text-success'
                        : 'bg-warning/10 text-warning'
                    }`}
                  >
                    {m.label}
                  </span>
                </div>
                <p className="mt-1 truncate text-[10px] text-ink-soft">{m.name}</p>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <p className="font-mono text-sm font-bold text-ink">{m.price}</p>
                  <p
                    className={`font-mono text-xs font-semibold ${
                      m.change >= 0 ? 'text-success' : 'text-danger'
                    }`}
                  >
                    {m.change >= 0 ? '▲' : '▼'} {Math.abs(m.change).toFixed(2)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-5 text-center text-xs text-ink-soft">
            Prices shown for illustration — real platform labels every feed with its
            source and delay period.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
