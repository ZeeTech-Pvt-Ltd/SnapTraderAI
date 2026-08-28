import { useEffect, useRef, useState } from 'react'
import { markets } from '../content/markets'

/** Scrolling live-market tape — decorative motion strip.
    Pauses automatically when scrolled off-screen to save CPU/battery. */
export function TickerTape() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Duplicate the list once so the -50% marquee loop is seamless
  const tape = [...markets, ...markets]

  return (
    <div ref={ref} className="overflow-hidden border-b border-border bg-deep py-3">
      <div
        className="animate-marquee flex w-max items-center gap-10 pr-10"
        style={visible ? undefined : { animationPlayState: 'paused' }}
      >
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
              {m.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
