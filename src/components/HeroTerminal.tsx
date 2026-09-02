import { Activity, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { TerminalFrame } from './ui/TerminalFrame'

/** Deterministic candle series for the mockup chart: [open, high, low, close] */
const CANDLES: [number, number, number, number][] = [
  [40, 45, 36, 44], [44, 48, 42, 47], [47, 46, 43, 44], [44, 50, 42, 49],
  [49, 53, 47, 52], [52, 51, 45, 46], [46, 52, 44, 51], [51, 56, 49, 55],
  [55, 54, 50, 52], [52, 58, 50, 57], [57, 61, 55, 60], [60, 59, 53, 54],
  [54, 60, 52, 58], [58, 64, 56, 63], [63, 62, 57, 59], [59, 66, 58, 65],
  [65, 69, 63, 68], [68, 67, 61, 63], [63, 70, 61, 69], [69, 74, 67, 73],
]

const WATCHLIST = [
  { symbol: 'EUR/USD', change: '+0.31%', up: true },
  { symbol: 'BTC/USD', change: '+2.14%', up: true },
  { symbol: 'XAU/USD', change: '-0.28%', up: false },
  { symbol: 'SPX', change: '+0.42%', up: true },
]

function CandleChart() {
  const { t } = useTranslation()
  const w = 320
  const h = 150
  const step = w / CANDLES.length
  const maxH = Math.max(...CANDLES.map((c) => c[1]))
  const minL = Math.min(...CANDLES.map((c) => c[2]))
  const scale = (v: number) => h - ((v - minL) / (maxH - minL)) * (h - 16) - 8

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" aria-hidden="true">
      {/* grid */}
      {[0.2, 0.4, 0.6, 0.8].map((f) => (
        <line
          key={f}
          x1="0"
          x2={w}
          y1={h * f}
          y2={h * f}
          stroke="#E3E9F2"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
      ))}
      {CANDLES.map(([o, hi, lo, c], i) => {
        const x = i * step + step / 2
        const up = c >= o
        const color = up ? '#16a34a' : '#dc2626'
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={scale(hi)} y2={scale(lo)} stroke={color} strokeWidth="1.2" />
            <rect
              x={x - step * 0.28}
              y={scale(Math.max(o, c))}
              width={step * 0.56}
              height={Math.max(Math.abs(scale(o) - scale(c)), 1.5)}
              fill={up ? color : '#ffffff'}
              stroke={color}
              strokeWidth="1"
              rx="1"
            />
          </g>
        )
      })}
      {/* support / resistance hints */}
      <line x1="0" x2={w} y1={scale(64)} y2={scale(64)} stroke="#00C8AC" strokeWidth="1" strokeDasharray="5 4" opacity="0.85" />
      <text x={w - 4} y={scale(64) - 4} textAnchor="end" fontSize="8" fill="#00C8AC" fontFamily="JetBrains Mono, monospace">
        {t('RESISTANCE')} 64.00
      </text>
      <line x1="0" x2={w} y1={scale(46)} y2={scale(46)} stroke="#00B4E6" strokeWidth="1" strokeDasharray="5 4" opacity="0.85" />
      <text x={w - 4} y={scale(46) - 4} textAnchor="end" fontSize="8" fill="#00B4E6" fontFamily="JetBrains Mono, monospace">
        {t('SUPPORT')} 46.00
      </text>
    </svg>
  )
}

export function HeroTerminal() {
  const { t } = useTranslation()
  return (
    <TerminalFrame
      title={t('Snap Trader AI · Research Terminal')}
      titleExtra={
        <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[9px] font-bold text-success">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          {t('AI ONLINE')}
        </span>
      }
    >
      <div className="flex">
        {/* {t('Watchlist')} — desktop only to keep the hero airy on small screens */}
        <aside className="hidden w-[130px] shrink-0 flex-col border-r border-border bg-[#F4F8FC] sm:flex">
          <p className="mb-1 px-3 pt-3 text-[8px] font-bold uppercase tracking-[0.15em] text-ink-soft/60">
            {t('Watchlist')}
          </p>
          {WATCHLIST.map((m) => (
            <div
              key={m.symbol}
              className="flex cursor-pointer items-center justify-between px-3 py-1.5 transition-colors hover:bg-medium-navy/60"
            >
              <span className="font-mono text-[10px] font-bold text-ink">{m.symbol}</span>
              <span
                className={`font-mono text-[9px] font-bold ${
                  m.up ? 'text-success' : 'text-danger'
                }`}
              >
                {m.change}
              </span>
            </div>
          ))}
          <div className="mx-3 my-2 rounded-md border border-accent/20 bg-accent/5 px-2 py-1.5">
            <p className="text-[8px] font-bold uppercase tracking-wider text-accent">{t('Scanning')}</p>
            <p className="font-mono text-[9px] text-ink-soft">{t('26 indicators')}</p>
          </div>
        </aside>

        {/* Main analysis area */}
        <div className="flex-1 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-sm font-extrabold text-ink">EUR/USD</p>
              <p className="font-mono text-[9px] text-ink-soft">{t('1H · LIVE DATA')}</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 font-mono text-[10px] font-bold text-success">
              <TrendingUp className="h-3 w-3" />
              {t('BULLISH')}
            </div>
          </div>

          <div className="mb-4 overflow-hidden rounded-md border border-border bg-[#F8FAFD] p-2">
            <CandleChart />
          </div>

          {/* AI reading */}
          <div className="mb-4 rounded-md border border-accent/20 bg-accent/5 px-3 py-2 font-mono text-[10px] text-ink-soft">
            <span className="font-bold text-accent">AI ▸</span> {t('Analysing 26 indicators across 4 timeframes...')}
            <span className="cursor-blink ml-0.5 inline-block h-2.5 w-[3px] bg-accent align-middle" />
          </div>

          {/* Results grid — four key levels, roomier cells */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { k: t('TREND'), v: t('Bullish'), c: 'text-success' },
              { k: t('ENTRY'), v: '1.0842', c: 'text-accent' },
              { k: t('STOP'), v: '1.0804', c: 'text-danger' },
              { k: t('R : R'), v: '1 : 2.1', c: 'text-success' },
            ].map((r) => (
              <div
                key={r.k}
                className="rounded-md border border-border bg-[#F4F8FC] p-2.5 text-center"
              >
                <p className="text-[7px] font-bold uppercase tracking-wider text-ink-soft/60">
                  {r.k}
                </p>
                <p className={`mt-1 font-mono text-[11px] font-bold ${r.c}`}>{r.v}</p>
              </div>
            ))}
          </div>

          {/* Signal card */}
          <div className="mt-4 flex items-center justify-between rounded-md border border-success/30 bg-success/5 p-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/15">
                <Activity className="h-4 w-4 text-success" />
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold text-success">
                  {t('SIGNAL · BUY · 87% CONFIDENCE')}
                </p>
                <p className="mt-0.5 text-[9px] text-ink-soft">
                  {t('EXIT')} 1.0918 · {t('Via your broker · you stay in control')}
                </p>
              </div>
            </div>
            <p className="font-mono text-[8px] text-ink-soft/50">SNAP-2847</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-border bg-[#F4F8FC] px-4 py-1.5 font-mono text-[8px] text-ink-soft/60">
        <span>{t('DATA LABEL: LIVE · SOURCE: VERIFIED FEED')}</span>
        <span className="hidden sm:inline">{t('Analysis is an observation — not financial advice')}</span>
      </div>
    </TerminalFrame>
  )
}
