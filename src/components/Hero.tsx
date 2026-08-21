import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react'
import { Button } from './ui/Button'
import { HeroTerminal } from './HeroTerminal'

const HERO_BULLETS = [
  'Paper trading first',
  'Data labels on everything',
  'No profit guarantees — ever',
  'Start free — snap trade smarter',
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-deep pb-16 pt-[calc(72px+5rem)] md:pb-24"
    >
      {/* Ambient brand glows */}
      <div
        aria-hidden="true"
        className="glow-drift pointer-events-none absolute -right-[15%] -top-[30%] h-[500px] w-[500px]"
        style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="glow-drift pointer-events-none absolute -bottom-[20%] -left-[10%] h-[420px] w-[420px]"
        style={{ background: 'radial-gradient(circle, rgb(0 190 165 / 0.12) 0%, transparent 70%)', animationDelay: '-7s' }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(0 130 180 / 0.35) 1px, transparent 1px), linear-gradient(90deg, rgb(0 130 180 / 0.35) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div className="pt-6 md:pt-10">
            <h1 className="mb-6 max-w-[600px] text-4xl font-black leading-[1.08] tracking-tight md:text-5xl lg:text-[3.4rem]">
              Read the Charts.
              <br />
              Spot the Signals.
              <br />
              <span className="text-gradient-brand">Trade with Confidence.</span>
            </h1>
            <p className="mb-9 max-w-[540px] text-lg leading-relaxed text-muted-dark">
              SnapTrader AI — the Snap Trader platform — turns raw market data
              into clear, actionable chart insights: entry and exit levels,
              bullish and bearish patterns, and risk warnings across stocks,
              forex, crypto, indices and more.
            </p>
            <div className="mb-8 flex flex-wrap gap-4">
              <Button href="#get-started" size="lg" className="group">
                Start Analyzing Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="#how-it-works" variant="outline" size="lg">
                <PlayCircle className="h-5 w-5 text-accent" />
                See How It Works
              </Button>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-ink-soft">
              {HERO_BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                  <span className="font-semibold">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal mockup */}
          <div className="relative mx-auto w-full max-w-[560px] pb-10 lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
              style={{ background: 'radial-gradient(ellipse, rgb(0 180 230 / 0.16) 0%, transparent 70%)' }}
            />
            <HeroTerminal />
            <p className="mt-4 text-center text-xs text-ink-soft">
              The real platform shows live data, confidence labels and risk
              warnings at every step — <span className="font-semibold text-accent">always.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
