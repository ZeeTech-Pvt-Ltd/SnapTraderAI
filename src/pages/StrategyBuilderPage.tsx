import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCheck,
  GitFork,
  NotebookPen,
  PlayCircle,
  ShieldCheck,
  TriangleAlert,
  UserRound,
} from 'lucide-react'
import { marketBadge } from '../content/traders'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const BUILDER_STRUCTURE = [
  'Entry, exit and filters kept separate',
  'Every rule stays readable — no hidden logic',
  'Vague words like “strong trend” converted into exact numbers',
  'If a rule can’t be measured, it tells you upfront',
]

const FORGOTTEN_PARTS = [
  {
    icon: ShieldCheck,
    title: 'Position size and risk-per-trade set by default',
  },
  {
    icon: TriangleAlert,
    title: 'Stop loss and invalidation level attached to every rule',
  },
  {
    icon: CheckCheck,
    title: 'Warnings when two conditions overlap or contradict',
  },
  {
    icon: GitFork,
    title: 'Every edit saved as a version you can compare',
  },
]

const APPROVAL_STEPS = [
  'Change any parameter by hand',
  'Fork a working strategy and build variations',
  'Run it in paper mode first',
  'Check historical results before going live (full detail on the Strategy Backtester page)',
]

const MARKETS = ['Forex', 'Crypto', 'Indices', 'Stocks', 'Gold & Commodities']

const WHO_ITS_FOR = [
  {
    icon: UserRound,
    title: 'New traders',
    description: 'learning to follow rules instead of feelings',
  },
  {
    icon: NotebookPen,
    title: 'Experienced traders',
    description: 'with ideas but no time to code',
  },
  {
    icon: PlayCircle,
    title: 'Systematic traders',
    description: 'who want everything in one place',
  },
]

const GENERATED_RULES = [
  { k: 'ENTRY', v: 'PRICE > 20-DAY HIGH' },
  { k: 'FILTER', v: 'VOLUME > 20-DAY AVERAGE' },
  { k: 'EXIT', v: 'OPPOSITE SIGNAL' },
  { k: 'STOP', v: 'BELOW ENTRY STRUCTURE' },
  { k: 'RISK', v: '1% PER TRADE' },
]

export function StrategyBuilderPage() {
  useEffect(() => {
    document.title = 'AI Strategy Builder | SnapTrader AI'
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
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h1 className="mb-5 max-w-[620px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.9rem]">
                Say the Rule, Get the <span className="text-gradient-brand">System</span>
              </h1>
              <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-muted-dark">
                Every trader has an idea. The problem is that the idea never
                turns into written rules. That&apos;s exactly what this AI
                strategy builder does — no code, no spreadsheets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/get-started" size="lg" className="group">
                  Write Your First Rule
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>

            {/* Rule-generation mockup */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 180 230 / 0.14) 0%, transparent 70%)' }}
                />
                <TerminalFrame
                  title="Snap Trader AI · Strategy Builder"
                  titleExtra={
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[9px] font-bold text-accent">
                      GENERATED IN 8s
                    </span>
                  }
                >
                  <div className="p-5">
                    {/* Input */}
                    <div className="mb-4 rounded-md border border-accent/25 bg-accent/5 p-3.5">
                      <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-wider text-accent">
                        You said
                      </p>
                      <p className="text-sm font-medium leading-relaxed text-ink">
                        “Buy gold when price breaks the 20-day high and volume
                        is above average.”
                      </p>
                    </div>

                    {/* Generated rules */}
                    <div className="mb-4 overflow-hidden rounded-md border border-border">
                      <div className="border-b border-border bg-[#F4F8FC] px-3.5 py-2">
                        <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                          Strategy v1 · readable rules
                        </p>
                      </div>
                      {GENERATED_RULES.map((r, i) => (
                        <div
                          key={r.k}
                          className={`flex items-center justify-between bg-[#F8FAFD] px-3.5 py-2.5 ${
                            i > 0 ? 'border-t border-border' : ''
                          }`}
                        >
                          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                            {r.k}
                          </span>
                          <span className="font-mono text-[11px] font-bold text-ink">
                            {r.v}
                          </span>
                          <span className="rounded-full bg-success/10 px-1.5 py-0.5 font-mono text-[8px] font-bold text-success">
                            MEASURED ✓
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Approve / fork */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-md border border-success/30 bg-success/5 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wider text-success">
                        ✓ Approve &amp; Paper Test
                      </span>
                      <span className="rounded-md border border-border bg-[#F4F8FC] px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                        ⟲ Fork
                      </span>
                    </div>
                  </div>
                </TerminalFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Say It Like You'd Say It to a Friend */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-0"
                title="Say It Like You’d Say It to a Friend"
                description="Describe the whole setup in one line: “Buy gold when price breaks the 20-day high and volume is above average.”"
              />
              <p className="mt-4 text-sm font-semibold text-ink">
                The builder turns that into a clean structure:
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-border bg-deep shadow-card">
                {BUILDER_STRUCTURE.map((point, i) => (
                  <div
                    key={point}
                    className={`flex items-start gap-4 p-6 transition-colors hover:bg-medium-navy/40 ${
                      i > 0 ? 'border-t border-border' : ''
                    }`}
                  >
                    <span className="mt-0.5 shrink-0 rounded-md border border-accent/20 bg-accent/10 px-2 py-1 font-mono text-xs font-bold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-dark md:text-base">
                      {point}
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-border bg-medium-navy/30 px-6 py-3.5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-success">
                    4/4 structure checks
                  </p>
                  <p className="font-mono text-[9px] text-ink-soft/60">SNAP-STRUCT</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Parts Traders Usually Forget */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader
              title="The Parts Traders Usually Forget"
              description="The real value of an AI strategy builder isn't the entry signal. It's everything built around it."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FORGOTTEN_PARTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="flex h-full items-center gap-4 rounded-xl border border-border bg-navy p-6 shadow-card transition-colors hover:border-accent/30">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-muted-dark">
                    {point.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nothing Runs Until You Approve It */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title="Nothing Runs Until You Approve It" />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {APPROVAL_STEPS.map((step, i) => (
              <Reveal key={step} delay={i * 80}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-deep p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70"
                  />
                  <span className="pointer-events-none absolute right-4 top-3 font-mono text-4xl font-black text-ink/5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-muted-dark">
                    {i === APPROVAL_STEPS.length - 1 ? (
                      <>
                        Check historical results before going live (full detail
                        on the{' '}
                        <Link
                          to="/strategy-backtesting"
                          className="font-semibold text-accent hover:underline"
                        >
                          Strategy Backtester page
                        </Link>
                        )
                      </>
                    ) : (
                      step
                    )}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* One Builder, Every Market */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <SectionHeader title="One Builder, Every Market" />
            <p className="text-lg leading-relaxed text-muted-dark">
              Forex, crypto, indices, stocks or commodities — the logic stays
              the same, only the instrument changes. One AI strategy builder
              lets you spin up market-specific versions without starting from
              scratch each time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {MARKETS.map((m) => (
                <span
                  key={m}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-bold ${marketBadge[m]}`}
                >
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who It's For */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title="Who It's For" />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHO_ITS_FOR.map((person, i) => (
              <Reveal key={person.title} delay={i * 100}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-deep p-6 shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <person.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-ink">{person.title}</h2>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-dark">
                      {person.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 text-center">
              <p className="mb-6 text-lg font-semibold text-ink md:text-xl">
                Write your first rule — get a working strategy in under 60
                seconds.
              </p>
              <Button to="/get-started" size="lg" className="group">
                Start Free Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
