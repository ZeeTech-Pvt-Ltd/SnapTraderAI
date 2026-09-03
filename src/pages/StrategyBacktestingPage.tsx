import {
  ArrowRight,
  BarChart3,
  Cpu,
  FlaskConical,
  Globe2,
  Percent,
  ShieldCheck,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const ENGINE_DOES = [
  {
    icon: BarChart3,
    title: 'Runs your rules bar-by-bar, or tick-by-tick',
    description: 'across multiple years and instruments',
  },
  {
    icon: Cpu,
    title: 'Simulates market, limit, stop and OCO orders',
    description: 'the way a broker would actually fill them',
  },
  {
    icon: Percent,
    title: 'Applies spread, commission, slippage and position sizing',
    description: 'to every simulated trade',
  },
  {
    icon: Globe2,
    title: 'Covers forex, crypto, indices and commodities',
    description: 'converted into your account’s base currency',
  },
]

const NUMBERS = [
  { title: 'Win rate and average R-multiple', sub: 'broken down by setup' },
  { title: 'Profit factor and expectancy per trade', sub: null },
  { title: 'Maximum drawdown and longest losing streak', sub: null },
  { title: 'Full equity curve, trade log and month-by-month return table', sub: null },
]

const HONESTY = [
  'Out-of-sample split — build on one period, validate on data you never touched',
  'Walk-forward testing to check the edge survives changing market conditions',
  'Monte Carlo runs that reshuffle trade order and stress the equity curve',
  'Look-ahead protection, so no bar ever uses information it could not have had',
]

const STEPS = [
  {
    step: '01',
    title: 'Define the rules.',
    description: 'No vague conditions, no “I’d probably exit around here.”',
  },
  {
    step: '02',
    title: 'Run and read the results.',
    description: '100 trades is a minimum; 200 or more gives real confidence.',
  },
  {
    step: '03',
    title: 'Deploy small.',
    description:
      'Go live at reduced size and compare live metrics against the test.',
  },
]

const MONTHS = [
  { m: 'JAN', v: '+4.2%', up: true },
  { m: 'FEB', v: '-1.8%', up: false },
  { m: 'MAR', v: '+6.5%', up: true },
  { m: 'APR', v: '+2.1%', up: true },
  { m: 'MAY', v: '-3.4%', up: false },
  { m: 'JUN', v: '+5.9%', up: true },
]

export function StrategyBacktestingPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of the heading in every language.
  const [head, tail] = splitStyledTail(
    t('Strategy Backtesting: Test Before You Risk Capital'),
    2,
  )

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
                {head} <span className="text-gradient-brand">{tail}</span>
              </h1>
              <p className="mb-3 text-lg font-semibold leading-relaxed text-ink">
                {t('Test your rules against real market history — before your capital is on the line.')}
              </p>
              <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-muted-dark">
                {t('A strategy is only an opinion until the data agrees with it. Strategy backtesting replays your exact entry, exit and risk rules across years of historical price action, so you can see how the system would have behaved through rallies, chop and crashes — without paying for the lesson in real money.')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/get-started" size="lg" className="group">
                  {t('Test Your Strategy')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>

            {/* Backtest report mockup */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 180 230 / 0.14) 0%, transparent 70%)' }}
                />
                <TerminalFrame
                  title={t('Snap Trader AI · Backtest Report')}
                  titleExtra={
                    <span className="rounded-full bg-success/10 px-2.5 py-1 font-mono text-[9px] font-bold text-success">
                      {t('PASSED · 212 TRADES')}
                    </span>
                  }
                >
                  <div className="p-5">
                    {/* Equity curve */}
                    <div className="mb-4 rounded-md border border-border bg-[#F8FAFD] p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                          {t('Equity Curve · 24 Months')}
                        </p>
                        <p className="font-mono text-[10px] font-bold text-success">
                          +38.6%
                        </p>
                      </div>
                      <svg viewBox="0 0 400 120" className="w-full" aria-hidden="true">
                        <defs>
                          <linearGradient id="bt-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#16a34a" stopOpacity="0.3" />
                            <stop offset="1" stopColor="#16a34a" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {[30, 60, 90].map((y) => (
                          <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#E3E9F2" strokeWidth="0.5" strokeDasharray="3 4" />
                        ))}
                        <path
                          d="M0,100 C30,95 50,88 80,90 C110,92 130,70 160,72 C190,74 210,55 240,58 C270,61 290,35 320,40 C350,45 370,20 400,24 L400,120 L0,120 Z"
                          fill="url(#bt-fill)"
                        />
                        <path
                          d="M0,100 C30,95 50,88 80,90 C110,92 130,70 160,72 C190,74 210,55 240,58 C270,61 290,35 320,40 C350,45 370,20 400,24"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {/* drawdown shade */}
                        <rect x="120" y="60" width="70" height="14" rx="3" fill="#dc2626" opacity="0.12" />
                      </svg>
                    </div>

                    {/* KPI grid */}
                    <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {[
                        { k: t('WIN RATE'), v: '46.2%', c: 'text-ink' },
                        { k: t('PROFIT FACTOR'), v: '1.84', c: 'text-success' },
                        { k: t('MAX DRAWDOWN'), v: '-9.8%', c: 'text-danger' },
                        { k: t('EXPECTANCY'), v: '+0.31R', c: 'text-success' },
                      ].map((r) => (
                        <div key={r.k} className="rounded-md border border-border bg-[#F8FAFD] p-2.5">
                          <p className="text-[7px] font-bold uppercase tracking-wider text-ink-soft/70">
                            {r.k}
                          </p>
                          <p className={`mt-1 font-mono text-[11px] font-bold ${r.c}`}>{r.v}</p>
                        </div>
                      ))}
                    </div>

                    {/* Monthly returns */}
                    <div className="mb-4 rounded-md border border-border bg-[#F8FAFD] p-3">
                      <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                        {t('Month-by-month')}
                      </p>
                      <div className="grid grid-cols-6 gap-1.5">
                        {MONTHS.map((m) => (
                          <div key={m.m} className="rounded border border-border bg-navy p-1.5 text-center">
                            <p className="font-mono text-[7px] text-ink-soft/70">{t(m.m)}</p>
                            <p className={`font-mono text-[9px] font-bold ${m.up ? 'text-success' : 'text-danger'}`}>
                              {m.v}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-success/30 bg-success/5 p-3">
                      <p className="font-mono text-[10px] font-bold text-success">
                        {t('EDGE CONFIRMED · DEPLOY AT REDUCED SIZE')}
                      </p>
                      <p className="font-mono text-[9px] text-ink-soft/60">SNAP-BT-212</p>
                    </div>
                  </div>
                </TerminalFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What the engine does */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('What the engine does')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ENGINE_DOES.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="flex h-full items-center gap-4 rounded-xl border border-border bg-deep p-6 shadow-card transition-colors hover:border-accent/30">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-relaxed text-ink">
                      {t(point.title)}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-dark">
                      {t(point.description)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The numbers you get back */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('The numbers you get back')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {NUMBERS.map((n, i) => (
              <Reveal key={n.title} delay={i * 80}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-navy p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70"
                  />
                  <p className="text-base font-bold leading-snug text-ink">{t(n.title)}</p>
                  {n.sub && (
                    <p className="mt-1 text-sm leading-relaxed text-muted-dark">{t(n.sub)}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built to be honest, not flattering */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-0"
                title={t('Built to be honest, not flattering')}
                description={t('Most backtests fail live because they were too kind in testing. Ours are designed to expose weakness early.')}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {['Out-of-sample', 'Walk-forward', 'Monte Carlo', 'No look-ahead'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent"
                  >
                    {t(chip)}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-border bg-deep shadow-card">
                {HONESTY.map((point, i) => (
                  <div
                    key={point}
                    className={`flex items-start gap-4 p-6 transition-colors hover:bg-medium-navy/40 ${
                      i > 0 ? 'border-t border-border' : ''
                    }`}
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <FlaskConical className="h-4 w-4 text-accent" />
                    </span>
                    <p className="text-sm leading-relaxed text-muted-dark md:text-base">
                      {t(point)}
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-border bg-medium-navy/30 px-6 py-3.5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-success">
                    {t('4/4 honesty checks active')}
                  </p>
                  <p className="font-mono text-[9px] text-ink-soft/60">SNAP-HONEST</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* From backtest to live in three steps */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('From backtest to live in three steps')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-navy p-7 shadow-card">
                  <span className="pointer-events-none absolute right-4 top-2 font-mono text-5xl font-black text-ink/5">
                    {s.step}
                  </span>
                  <h2 className="mb-2 text-base font-bold text-ink">{t(s.title)}</h2>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(s.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A reality check worth keeping */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <SectionHeader
              title={t('A reality check worth keeping')}
              description={t('Backtesting does not predict the future. What it does is remove the strategies that never worked in the first place, and hand you a benchmark to measure live performance against.')}
            />
            <p className="mb-8 text-lg font-semibold leading-relaxed text-ink md:text-xl">
              {t('Expect a little slippage between test and live results — a system that stays close to its backtested numbers is one you can scale with confidence.')}
            </p>
            <Button to="/get-started" size="lg" className="group">
              {t('Test Your Strategy Free')}
              <ShieldCheck className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
