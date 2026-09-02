import { useTranslation } from 'react-i18next'
import { markets } from '../content/markets'

/** Scrolling live-market tape — decorative motion strip. */
export function TickerTape() {
  const { t } = useTranslation()
  // Duplicate the list once so the -50% marquee loop is seamless
  const tape = [...markets, ...markets]

  return (
    <div className="overflow-hidden border-b border-border bg-deep py-3">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {tape.map((m, i) => (
          <span
            key={`${m.symbol}-${i}`}
            className="flex shrink-0 items-center gap-2.5 font-mono text-xs"
          >
            <span className="font-bold text-ink">{m.symbol}</span>
            <span className="text-ink-soft">{m.price}</span>
            <span
              className={`font-bold ${
                m.change >= 0 ? 'text-success' : 'text-danger'
              }`}
            >
              {m.change >= 0 ? '▲' : '▼'} {Math.abs(m.change).toFixed(2)}%
            </span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase ${
                m.label === 'Live'
                  ? 'bg-success/10 text-success'
                  : 'bg-warning/10 text-warning'
              }`}
            >
              {t(m.label)}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
