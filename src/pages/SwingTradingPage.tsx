import {
  ArrowRight,
  Bitcoin,
  Building2,
  CalendarClock,
  CandlestickChart,
  Coins,
  LineChart,
  Moon,
  ScrollText,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { marketBadge } from '../content/traders'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const WHAT_AI_DOES = [
  'Scans hundreds of markets for trend shifts, structure breaks, and clean entry zones',
  'Fixes entry, invalidation, and target levels before the position goes live',
  'Holds the trade across sessions — overnight financing and weekend gaps included',
  'Trails the stop as the swing matures instead of leaving it parked',
  'Closes the trade the moment the original thesis is invalid',
]

const WHY_SWITCH = [
  { icon: Moon, title: 'No panic exit on day-two chop' },
  { icon: ShieldCheck, title: 'No holding a loser hoping it comes back' },
  { icon: ScrollText, title: 'Position size stays consistent on every single setup' },
  { icon: Moon, title: 'Same rules at 3 a.m. as at the open' },
  { icon: CalendarClock, title: 'Weekly reports show which setups are paying and which are not' },
]

const MARKETS = [
  { icon: CandlestickChart, label: 'Forex majors and crosses', market: 'Forex' },
  { icon: Bitcoin, label: 'Crypto (BTC, ETH, large caps)', market: 'Crypto' },
  { icon: LineChart, label: 'Global indices', market: 'Indices' },
  { icon: Coins, label: 'Gold and commodities', market: 'Gold & Commodities' },
  { icon: Building2, label: 'US equities', market: 'Stocks' },
]

/** Position timeline nodes: done → active */
const TIMELINE = [
  { label: 'ENTRY', day: 'D1', done: true, active: false },
  { label: 'HOLD', day: 'D2–D4', done: true, active: false },
  { label: 'TRAIL', day: 'D5', done: true, active: false },
  { label: 'TARGET', day: 'D6', done: false, active: true },
]

export function SwingTradingPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of each headline in every language.
  const [heroHead, heroTail] = splitStyledTail(
    t('Multi-Day Setups, Managed by AI'),
    2,
  )
  const [ctaHead, ctaTail] = splitStyledTail(t('Start With the AI on Your Side'), 1)

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
              <h1 className="mb-5 max-w-[600px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
                {heroHead} <span className="text-gradient-brand">{heroTail}</span>
              </h1>
              <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-muted-dark">
                {t('Trades that run for days, not seconds. Our AI reads the higher timeframes, builds the plan, and stays with the position until the setup plays out — or breaks.')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/get-started" size="lg" className="group">
                  {t('Start Swing Trading')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>

            {/* Position timeline mockup */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 200 172 / 0.14) 0%, transparent 70%)' }}
                />
                <TerminalFrame
                  title={t('Snap Trader AI · Swing Manager')}
                  titleExtra={
                    <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 font-mono text-[9px] font-bold text-success">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                      </span>
                      {t('MANAGING · DAY 6')}
                    </span>
                  }
                >
                  <div className="p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="font-mono text-sm font-extrabold text-ink">GBP/USD · 1D</p>
                        <p className="font-mono text-[9px] text-ink-soft">
                          {t('SWING LONG · THESIS INTACT')}
                        </p>
                      </div>
                      <p className="font-mono text-sm font-black text-success">+2.1R</p>
                    </div>

                    {/* Timeline */}
                    <div className="mb-5">
                      <div className="mb-2 flex items-start">
                        {TIMELINE.map((node, i) => (
                          <div key={node.label} className="flex flex-1 items-start">
                            <div className="flex w-full flex-col items-center">
                              <span
                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 font-mono text-[9px] font-black ${
                                  node.done
                                    ? 'border-success bg-success/10 text-success'
                                    : node.active
                                      ? 'border-accent bg-accent/10 text-accent'
                                      : 'border-border text-ink-soft'
                                }`}
                              >
                                {i + 1}
                              </span>
                              <p
                                className={`mt-2 font-mono text-[9px] font-bold ${
                                  node.active ? 'text-accent' : node.done ? 'text-success' : 'text-ink-soft'
                                }`}
                              >
                                {t(node.label)}
                              </p>
                              <p className="font-mono text-[8px] text-ink-soft/70">{node.day}</p>
                            </div>
                            {i < TIMELINE.length - 1 && (
                              <span
                                className={`mt-4 h-[2px] flex-1 ${
                                  node.done ? 'gradient-brand' : 'bg-[#E3E9F2]'
                                }`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Position stats */}
                    <div className="mb-4 grid grid-cols-3 gap-2">
                      {[
                        { k: t('ENTRY'), v: '1.2410', c: 'text-accent' },
                        { k: t('INVALIDATION'), v: '1.2310', c: 'text-danger' },
                        { k: t('TARGET'), v: '1.2640', c: 'text-success' },
                      ].map((r) => (
                        <div key={r.k} className="rounded-md border border-border bg-[#F4F8FC] p-2.5">
                          <p className="text-[7px] font-bold uppercase tracking-wider text-ink-soft/70">
                            {r.k}
                          </p>
                          <p className={`mt-1 font-mono text-[11px] font-bold ${r.c}`}>{r.v}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-success/30 bg-success/5 p-3">
                      <p className="font-mono text-[10px] font-bold text-success">
                        {t('STOP TRAILED TO 1.2580 · TARGET IN VIEW')}
                      </p>
                      <p className="font-mono text-[9px] text-ink-soft/60">R:R 1 : 2.8</p>
                    </div>
                  </div>
                </TerminalFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Is AI Swing Trading? */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <SectionHeader
              title={t('What Is AI Swing Trading?')}
              description={t('AI swing trading means using machine learning to scan 4-hour and daily charts, rank multi-day setups, and manage risk while the trade is still open.')}
            />
            <p className="text-lg font-semibold leading-relaxed text-ink md:text-xl">
              {t('The goal is not more trades. It is fewer, cleaner ones.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What the AI Actually Does — pipeline */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('What the AI Actually Does')} />
          </Reveal>
          <div className="mx-auto max-w-3xl">
            {WHAT_AI_DOES.map((step, i) => (
              <Reveal key={step} delay={i * 80}>
                <div className="relative flex items-start gap-6 pb-10">
                  {/* Connector line — runs from circle bottom to next circle top */}
                  {i < WHAT_AI_DOES.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[19px] top-10 h-[calc(100%-5rem)] w-[2px] bg-border"
                    />
                  )}
                  <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 bg-navy font-mono text-xs font-black text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-2.5 text-sm leading-relaxed text-muted-dark md:text-base">
                    {t(step)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Swing Traders Switch to AI */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-0"
                title={t('Why Swing Traders Switch to AI')}
              />
              <p className="mt-6 text-base leading-relaxed text-muted-dark md:text-lg">
                {t('Most swing trades are not lost on the chart. They are lost in the wait.')}
              </p>
            </Reveal>

            <div className="space-y-3">
              {WHY_SWITCH.map((point, i) => (
                <Reveal key={point.title} delay={i * 70}>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-deep p-4 shadow-card transition-colors hover:border-accent/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <point.icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold leading-relaxed text-muted-dark">
                      {t(point.title)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built for a Slower Clock */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <SectionHeader title={t('Built for a Slower Clock')} />
            <p className="text-lg leading-relaxed text-muted-dark">
              {t('Day-trading models are tuned for minutes. Swing setups develop over days, so the AI weights daily structure, higher-timeframe momentum, and volatility cycles instead of tick noise.')}
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              {['4H', '1D', '1W'].map((tf, i) => (
                <span
                  key={tf}
                  className={`rounded-full border px-4 py-1.5 font-mono text-sm font-black ${
                    i === 1
                      ? 'gradient-brand border-transparent text-[#04212b] shadow-glow'
                      : 'border-border bg-navy text-ink-soft'
                  }`}
                >
                  {tf}
                </span>
              ))}
              <p className="ml-2 text-sm font-semibold text-ink-soft">
                {t('Different problem, different model.')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Markets Covered */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Markets Covered')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {MARKETS.map((m, i) => (
              <Reveal key={m.label} delay={i * 70}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-deep p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-lg">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70"
                  />
                  <m.icon
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-5 -right-4 h-24 w-24 text-ink/5 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent/10"
                  />
                  <span
                    className={`mb-4 w-fit rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${marketBadge[m.market]}`}
                  >
                    {t(m.market)}
                  </span>
                  <p className="relative text-sm font-bold leading-snug text-ink">
                    {t(m.label)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Start With the AI on Your Side */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="mb-4 text-2xl font-extrabold text-ink md:text-3xl">
              {ctaHead} <span className="text-gradient-brand">{ctaTail}</span>
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-muted-dark">
              {t('Create an account, pick your risk level, and let the AI handle the swing setups while you keep your day job. Track every position live from your dashboard.')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/get-started" size="lg" className="group">
                {t('Start Swing Trading')}
                <Target className="h-4 w-4" />
              </Button>
              <Button to="/ai-scalp-analyzer" variant="outline" size="lg">
                {t('Try the Scalp Analyzer')}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
