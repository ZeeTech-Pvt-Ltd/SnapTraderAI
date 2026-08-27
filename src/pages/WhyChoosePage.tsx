import { useEffect } from 'react'
import {
  ArrowRight,
  Brain,
  Eye,
  Headset,
  ShieldCheck,
  Sparkles,
  Wallet,
  Zap,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'

interface FeatureBlock {
  icon: typeof Zap
  title: string
  points: string[]
}

const FEATURES: FeatureBlock[] = [
  {
    icon: Zap,
    title: 'Decisions in Milliseconds',
    points: [
      'Live scanning across forex, crypto, indices, and commodities',
      'Signals fire the moment conditions line up — no lag, no hesitation',
      'Automated entries and exits, so setups don’t slip away while you sleep',
    ],
  },
  {
    icon: Brain,
    title: 'AI That Learns, Not Guesses',
    points: [
      'Models trained on years of price action, volume, and volatility data',
      'Strategies adapt as markets shift from trending to choppy',
      'Every closed trade feeds back into the engine and sharpens the next one',
    ],
  },
  {
    icon: Eye,
    title: 'Full Transparency, Nothing Hidden',
    points: [
      'Public performance history — the wins and the losses',
      'See the reason behind every trade: the signal, the logic, the risk taken',
      'No black boxes, no surprise fees, no lock-in contracts',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Risk Control Comes First',
    points: [
      'Position size calculated per trade, never guessed',
      'Stop-loss and take-profit attached to every single position',
      'Daily drawdown limits that pause trading before a bad day turns into a bad month',
      'You set the ceiling. The AI respects it.',
    ],
  },
  {
    icon: Wallet,
    title: 'Your Money Stays Yours',
    points: [
      'Funds remain in your own brokerage account — we never hold them',
      'Withdraw whenever you want, no waiting periods',
      'Bank-grade encryption and two-factor authentication as standard',
      'One-click kill switch to stop all activity instantly',
    ],
  },
  {
    icon: Headset,
    title: 'Support That Actually Responds',
    points: [
      'Real humans available 24/7, not bots reading scripts',
      'Guided onboarding call for every new account',
      'Free Academy library: tutorials, strategy breakdowns, and market briefings',
    ],
  },
]

const TIME_TABLE = [
  { what: '24/7 market monitoring', means: 'No more staring at charts at 3 AM' },
  { what: 'Emotion-free execution', means: 'No revenge trades, no panic exits' },
  { what: 'Data-backed strategy', means: 'Decisions from evidence, not gut feeling' },
  { what: 'Instant scalability', means: 'Add markets and strategies without adding hours' },
]

export function WhyChoosePage() {
  useEffect(() => {
    document.title = 'Why Choose SnapTrader AI | SnapTrader AI'
  }, [])

  return (
    <div className="bg-deep pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep pb-20 pt-20 md:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <h1 className="mb-5 text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              Why Choose <span className="text-gradient-brand">SnapTrader AI</span>
            </h1>
            <p className="mb-3 text-lg font-semibold leading-relaxed text-ink">
              Markets move in seconds. Most traders react in minutes.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-dark">
              SnapTrader AI closes that gap — scanning, deciding, and executing
              while the opportunity is still on the table. Here&apos;s what
              makes it different.
            </p>
            <Button to="/get-started" size="lg" className="group">
              Start on Your Terms
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Feature blocks — alternating split rows */}
      {FEATURES.map((feature, i) => (
        <section
          key={feature.title}
          className={i % 2 === 0 ? 'border-y border-border bg-navy' : 'bg-deep'}
        >
          <div className="mx-auto max-w-container px-4 py-16 md:px-6 lg:py-20">
            <div
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <div className="flex items-center gap-5">
                  <span className="gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-glow md:h-14 md:w-14 md:rounded-2xl 2xl:h-16 2xl:w-16">
                    <feature.icon className="h-5 w-5 text-[#04212b] md:h-7 md:w-7 2xl:h-8 2xl:w-8" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-extrabold text-ink md:text-3xl">
                      {feature.title}
                    </h2>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ul className="space-y-3.5 pl-5 lg:pl-0">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-muted-dark">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full gradient-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Simple for Beginners, Deep for Pros */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title="Simple for Beginners, Deep for Pros" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-deep p-8 shadow-card">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-ink">New to trading?</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'Three-step setup — connect, choose a risk level, activate',
                    'Preset strategies ready to run out of the box',
                    'Plain-English dashboard with zero jargon',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-dark md:text-base">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full gradient-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-border bg-deep p-8 shadow-card">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Brain className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-ink">Been at this for years?</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'Custom parameters, indicators, and entry rules',
                    'Backtest any strategy against historical data before risking real capital',
                    'Run multiple AI agents side by side and compare results',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-dark md:text-base">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full gradient-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Built for Traders Who Value Their Time — table */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title="Built for Traders Who Value Their Time" />
          </Reveal>
          <Reveal>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-navy shadow-card">
              <div className="grid grid-cols-2 border-b border-border bg-medium-navy/50 px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
                <span>What you get</span>
                <span>What it means for you</span>
              </div>
              {TIME_TABLE.map((row, i) => (
                <div
                  key={row.what}
                  className={`grid grid-cols-2 gap-4 px-6 py-4 transition-colors hover:bg-medium-navy/30 ${
                    i > 0 ? 'border-t border-border' : ''
                  }`}
                >
                  <p className="text-sm font-bold text-ink md:text-base">{row.what}</p>
                  <p className="text-sm leading-relaxed text-muted-dark md:text-base">{row.means}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Start on Your Terms + closing */}
      <section className="relative overflow-hidden border-t border-border bg-deep py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              'radial-gradient(circle, rgb(0 180 230 / 0.3) 0%, rgb(0 200 172 / 0.2) 50%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <SectionHeader title="Start on Your Terms" />
            <ul className="mx-auto mb-10 max-w-xl space-y-3 pl-5 text-left lg:pl-0">
              {[
                'Free demo mode — test everything with zero capital at risk',
                'Upgrade, downgrade, or cancel whenever you like',
                'Clear, flat pricing with no hidden performance cuts',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-muted-dark">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full gradient-brand" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mb-4 text-lg font-semibold leading-relaxed text-ink md:text-xl">
              Trading is a game of speed, discipline, and data. SnapTrader AI
              gives you all three — in one platform.
            </p>
            <p className="mb-8 text-muted-dark">
              Create your free account and see your first AI-generated signal
              in under five minutes.
            </p>
            <Button to="/get-started" size="lg" className="group">
              Create Your Free Account
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
