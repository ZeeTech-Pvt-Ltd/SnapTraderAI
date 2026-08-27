import { useEffect } from 'react'
import {
  ArrowRight,
  CandlestickChart,
  Flag,
  PenLine,
  Radar,
  Shapes,
  ShieldCheck,
  Triangle,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const PATTERNS = [
  {
    icon: Shapes,
    name: 'Classic formations',
    description: 'head and shoulders, double tops and bottoms, cup and handle',
  },
  {
    icon: Triangle,
    name: 'Consolidation shapes',
    description: 'ascending, descending and symmetrical triangles, rectangles, wedges',
  },
  {
    icon: Flag,
    name: 'Continuation signals',
    description: 'flags and pennants, measured from the pole that created them',
  },
  {
    icon: CandlestickChart,
    name: 'Candlestick clusters',
    description: 'engulfing bars, dojis, hammers, inside-bar compressions',
  },
  {
    icon: PenLine,
    name: 'Your own patterns',
    description: 'sketch a setup you personally trade and the engine hunts for matches',
  },
]

const HOW_IT_WORKS = [
  {
    title: 'Continuous scanning',
    description: 'price, volume and volatility read tick by tick, not once a day',
  },
  {
    title: 'Shape matching',
    description:
      'each candidate scored against the geometry of a valid formation, so half-formed shapes don’t create noise',
  },
  {
    title: 'Confidence scoring',
    description:
      'every match carries a probability based on how the same pattern behaved on that instrument and timeframe before',
  },
  {
    title: 'Instant alerts',
    description: 'you get the ticker, the pattern, the breakout level and an invalidation point',
  },
]

const CONFIRMATION = [
  'Volume expansion on the break, not just a price poke',
  'Multiple closes or an ATR-based buffer beyond the boundary',
  'Trend context pulled from higher timeframes',
  'Automatic downgrade when a pattern drifts toward its apex and loses momentum',
]

const ALERTS = [
  { ticker: 'XAU/USD', pattern: 'TRIANGLE', level: '2,415.00', invalid: '2,388.00', conf: 82, state: 'QUALIFIED' },
  { ticker: 'EUR/USD', pattern: 'HEAD & SHOULDERS', level: '1.0778', invalid: '1.0841', conf: 71, state: 'QUALIFIED' },
  { ticker: 'BTC/USD', pattern: 'FLAG', level: '72,410', invalid: '69,880', conf: 64, state: 'QUALIFIED' },
  { ticker: 'NAS100', pattern: 'WEDGE', level: '21,930', invalid: '22,140', conf: 43, state: 'DOWNGRADED' },
]

export function PatternDetectionPage() {
  useEffect(() => {
    document.title = 'AI Pattern Detection | SnapTrader AI'
  }, [])

  return (
    <div className="bg-deep pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep pb-24 pt-24 md:pb-32 md:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h1 className="mb-5 max-w-[620px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
                AI Pattern <span className="text-gradient-brand">Detection</span>
              </h1>
              <p className="mb-3 text-lg font-semibold leading-relaxed text-ink">
                Every chart tells a story before it moves. The problem is timing
                — by the time a breakout looks obvious on screen, the best entry
                has usually gone.
              </p>
              <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-muted-dark">
                Our pattern detection engine watches the charts so you don&apos;t
                have to. It scans price and volume across every market and
                timeframe you follow, flags formations the moment they qualify,
                and shows how that setup has resolved historically.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/get-started" size="lg" className="group">
                  Open Your Free Account
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>

            {/* Live pattern feed mockup */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 180 230 / 0.14) 0%, transparent 70%)' }}
                />
                <TerminalFrame
                  title="Snap Trader AI · Pattern Engine"
                  titleExtra={
                    <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 font-mono text-[9px] font-bold text-success">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                      </span>
                      LIVE SCAN
                    </span>
                  }
                >
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                        <Radar className="h-3.5 w-3.5 text-accent" />
                        Scanning tick by tick
                      </p>
                      <p className="font-mono text-[9px] text-ink-soft/60">4 ALERTS</p>
                    </div>

                    <div className="space-y-2">
                      {ALERTS.map((a) => {
                        const downgraded = a.state === 'DOWNGRADED'
                        return (
                          <div
                            key={a.ticker}
                            className={`rounded-md border p-3 ${
                              downgraded
                                ? 'border-warning/30 bg-warning/5'
                                : 'border-border bg-[#F8FAFD]'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex min-w-0 items-center gap-2">
                                <p className="shrink-0 font-mono text-[11px] font-bold text-ink">
                                  {a.ticker}
                                </p>
                                <p className="truncate font-mono text-[10px] font-bold text-accent">
                                  {a.pattern}
                                </p>
                                <span
                                  className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[8px] font-bold ${
                                    downgraded
                                      ? 'bg-warning/10 text-warning'
                                      : 'bg-success/10 text-success'
                                  }`}
                                >
                                  {a.state}
                                </span>
                              </div>
                              <p className="shrink-0 font-mono text-[10px] font-black text-success">
                                {a.conf}%
                              </p>
                            </div>
                            <div className="mt-2 flex items-center gap-4 font-mono text-[9px]">
                              <span className="text-ink-soft">
                                BREAKOUT <span className="font-bold text-ink">{a.level}</span>
                              </span>
                              <span className="text-ink-soft">
                                INVALIDATION{' '}
                                <span className="font-bold text-danger">{a.invalid}</span>
                              </span>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <p className="mt-3 text-center font-mono text-[9px] text-ink-soft/60">
                      TICK BY TICK · EVERY MARKET · EVERY TIMEFRAME
                    </p>
                  </div>
                </TerminalFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Patterns We Track */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title="Patterns We Track" />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PATTERNS.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-deep p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-lg">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70"
                  />
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mb-1.5 text-sm font-bold text-ink">{p.name}</h2>
                  <p className="text-xs leading-relaxed text-muted-dark">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — horizontal timeline */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title="How It Works" />
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="relative h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 bg-navy font-mono text-xs font-black text-accent">
                      {i + 1}
                    </span>
                    {i < HOW_IT_WORKS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-[2px] flex-1 gradient-brand md:block"
                      />
                    )}
                  </div>
                  <h2 className="mb-1.5 text-base font-bold text-ink">{step.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-dark">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Filter Out False Breakouts */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-0"
                title="Built to Filter Out False Breakouts"
                description="Whipsaws drain more accounts than missed trades ever do. Nothing is called until it clears confirmation:"
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-border bg-deep shadow-card">
                {CONFIRMATION.map((point, i) => (
                  <div
                    key={point}
                    className={`flex items-start gap-4 p-6 transition-colors hover:bg-medium-navy/40 ${
                      i > 0 ? 'border-t border-border' : ''
                    }`}
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success/10">
                      <ShieldCheck className="h-4 w-4 text-success" />
                    </span>
                    <p className="text-sm leading-relaxed text-muted-dark md:text-base">
                      {point}
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-border bg-medium-navy/30 px-6 py-3.5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-success">
                    4/4 confirmations required
                  </p>
                  <p className="font-mono text-[9px] text-ink-soft/60">SNAP-CONFIRM</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trade the Setup, Not the Guesswork */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <SectionHeader
              title="Trade the Setup, Not the Guesswork"
              description="Pattern detection doesn’t remove risk — it removes the hours spent hunting for setups and the bias that creeps in when you want a trade to work. You control position size and risk. The engine decides what’s worth your attention."
            />
            <p className="mb-8 text-lg font-semibold text-ink md:text-xl">
              Open your free account and see what today’s charts are shaping
              up to do.
            </p>
            <Button to="/get-started" size="lg" className="group">
              Open Your Free Account
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
