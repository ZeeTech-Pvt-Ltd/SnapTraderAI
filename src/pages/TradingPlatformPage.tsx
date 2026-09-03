import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  MonitorSmartphone,
  PlayCircle,
  ShieldCheck,
  X,
  Zap,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { Button } from '../components/ui/Button'
import { CountUp } from '../components/ui/CountUp'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const WATCHLIST = [
  { s: 'BTC/USD', c: '+2.4%', up: true },
  { s: 'ETH/USD', c: '+1.1%', up: true },
  { s: 'EUR/USD', c: '-0.3%', up: false },
  { s: 'AAPL', c: '+0.8%', up: true },
  { s: 'GOLD', c: '+0.5%', up: true },
  { s: 'S&P 500', c: '-0.2%', up: false },
]

const MARKETS = [
  { name: 'Stocks', sub: 'NYSE • NASDAQ' },
  { name: 'Crypto', sub: 'BTC • ETH • 100+' },
  { name: 'Forex', sub: '50+ currency pairs' },
  { name: 'Commodities', sub: 'Gold • Oil • Silver' },
  { name: 'Indices', sub: 'S&P 500 • FTSE • DAX' },
  { name: 'ETFs', sub: 'Diversified funds' },
  { name: 'CFDs', sub: 'Contract for difference' },
]

const CAPABILITIES = [
  {
    icon: Zap,
    title: 'Real-Time Market Scans',
    description:
      'Live feeds from every connected market are scanned continuously, so emerging patterns and momentum shifts reach you the moment they form — no delay, no guessing.',
  },
  {
    icon: PlayCircle,
    title: 'Automated Strategy Execution',
    description:
      'Set your rules once and let the platform follow them across all your markets, day and night. The system works your hours — you just define the approach.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Limits on Every Position',
    description:
      'Stop-losses, per-trade risk caps and drawdown guards are attached to every position by default. Your capital stays with your broker — the platform never touches it.',
  },
  {
    icon: BarChart3,
    title: 'Test Before You Trade',
    description:
      'Replay any strategy against years of historical data before committing real money. Refine it, compare versions, and only go live once the numbers hold up.',
  },
]

const STEPS = [
  {
    title: 'Open Your Free Account',
    description:
      'Signup takes minutes and costs nothing — there is no subscription fee to access the platform.',
  },
  {
    title: 'Fund Your Broker Account',
    description:
      'Live trading starts with at least £250 of your own capital, held with your broker. It’s your money — not a fee to us.',
  },
  {
    title: 'Link Your Broker',
    description:
      'Connect Snap Trader AI to your existing broker or exchange. Nothing moves — your funds stay exactly where they are.',
  },
  {
    title: 'Switch the AI On',
    description:
      'Choose your strategy, set your risk limits, and let the platform scan, signal and execute on your behalf.',
  },
]

const AI_VS_MANUAL = [
  {
    title: 'With Snap Trader AI — A partner that never clocks off.',
    points: [
      'Watches every connected market continuously — no fatigue, no distraction',
      'Applies your rules identically on every signal — no emotional exceptions',
      'Tracks dozens of markets at once, in real time',
      'Tests every idea on historical data before it touches live capital',
      'Enforces stop-losses and risk caps automatically',
      'Follows you to web, iOS and Android — your dashboard everywhere',
    ],
    ai: true,
  },
  {
    title: 'Going it alone — Good instincts, limited hours.',
    points: [
      'Only sees the markets open while you are at your screen',
      'Decisions can drift when fear or excitement take over',
      'Hard to monitor several positions at the same time',
      'Ideas usually get tested on live money, not history',
      'Risk rules are only as strong as your willpower in the moment',
      'Setups slip past during sleep, work or weekends',
    ],
    ai: false,
  },
]

const FAQS = [
  {
    q: 'What does it cost to join?',
    answer:
      'Creating an account is free and there is no platform subscription fee. Your trading capital belongs to you and stays with your broker.',
  },
  {
    q: 'Who holds my money?',
    answer:
      'Your broker or exchange. Snap Trader AI connects to your account but never takes custody of your funds.',
  },
  {
    q: 'Which markets can I trade?',
    answer:
      'Stocks, crypto, forex, commodities, indices, ETFs and CFDs are all supported from one dashboard.',
  },
  {
    q: 'Can I use it on my phone?',
    answer:
      'Yes — the web, iOS and Android versions stay in sync, so your positions and alerts travel with you.',
  },
]

export function TradingPlatformPage() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Gradient covers the tail of each headline in every language.
  const [heroHead, heroTail] = splitStyledTail(
    t('One Platform for Every Market You Trade.'),
    2,
  )
  const [ctaHead, ctaTail] = splitStyledTail(t('Your Next Trade Starts With a Plan.'), 2)

  return (
    <div className="bg-deep pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep pb-20 pt-20 md:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h1 className="mb-5 max-w-[620px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
                {heroHead} <span className="text-gradient-brand">{heroTail}</span>
              </h1>
              <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-muted-dark">
                {t('Snap Trader AI brings chart analysis, pattern detection, strategy testing and risk management into a single dashboard — so you can research, test and trade with discipline across stocks, crypto, forex, commodities, indices, ETFs and CFDs.')}
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <Button to="/get-started" size="lg" className="group">
                  {t('Start Free — No Platform Fee')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button to="#steps" variant="outline" size="lg">
                  {t('See How It Works')}
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { k: '10,000+', v: 'Traders worldwide' },
                  { k: '50+', v: 'Countries supported' },
                ].map((s) => (
                  <div key={s.v}>
                    <p className="font-mono text-lg font-black text-gradient-brand">{s.k}</p>
                    <p className="text-xs text-ink-soft">{t(s.v)}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Command center mockup */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 180 230 / 0.14) 0%, transparent 70%)' }}
                />
                <TerminalFrame
                  title={t('Snap Trader AI — Command Center')}
                  titleExtra={
                    <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 font-mono text-[9px] font-bold text-success">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                      </span>
                      {t('LIVE')}
                    </span>
                  }
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Watchlist */}
                    <aside className="border-b border-border bg-[#F4F8FC] sm:w-[150px] sm:border-b-0 sm:border-r">
                      <p className="px-3 pt-3 pb-1 font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-ink-soft/60">
                        {t('Watchlist')}
                      </p>
                      {WATCHLIST.map((m) => (
                        <div key={m.s} className="flex items-center justify-between px-3 py-1.5">
                          <span className="font-mono text-[10px] font-bold text-ink">{m.s}</span>
                          <span className={`font-mono text-[9px] font-bold ${m.up ? 'text-success' : 'text-danger'}`}>
                            {m.c}
                          </span>
                        </div>
                      ))}
                    </aside>

                    {/* Main */}
                    <div className="flex-1 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <p className="font-mono text-sm font-extrabold text-ink">BTC / USD</p>
                          <p className="font-mono text-[9px] text-ink-soft">
                            {t('Bitcoin — 1H chart · $67,420 · +2.41% today')}
                          </p>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="rounded-md border border-border bg-[#F4F8FC] p-1.5 text-center">
                            <p className="font-mono text-[10px] font-black text-accent">82%</p>
                            <p className="text-[7px] font-bold uppercase text-ink-soft/70">{t('CONFIDENCE')}</p>
                          </div>
                          <div className="rounded-md border border-border bg-[#F4F8FC] p-1.5 text-center">
                            <p className="font-mono text-[10px] font-black text-ink">41%</p>
                            <p className="text-[7px] font-bold uppercase text-ink-soft/70">{t('Market Vol.')}</p>
                          </div>
                        </div>
                      </div>

                      {/* Mini chart */}
                      <div className="mb-3 overflow-hidden rounded-md border border-border bg-[#F8FAFD] p-2">
                        <svg viewBox="0 0 320 90" className="w-full" aria-hidden="true">
                          <defs>
                            <linearGradient id="cc-fill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#16a34a" stopOpacity="0.3" />
                              <stop offset="1" stopColor="#16a34a" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {[22, 44, 66].map((y) => (
                            <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#E3E9F2" strokeWidth="0.5" strokeDasharray="3 4" />
                          ))}
                          <path
                            d="M0,70 C25,66 45,58 70,60 C95,62 115,48 145,50 C175,52 195,38 225,42 C255,46 275,22 320,26 L320,90 L0,90 Z"
                            fill="url(#cc-fill)"
                          />
                          <path
                            d="M0,70 C25,66 45,58 70,60 C95,62 115,48 145,50 C175,52 195,38 225,42 C255,46 275,22 320,26"
                            fill="none"
                            stroke="#16a34a"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <circle cx="275" cy="22" r="3" fill="#16a34a" />
                        </svg>
                      </div>

                      {/* AI signal */}
                      <div className="mb-3 rounded-md border border-success/30 bg-success/5 p-3.5">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="font-mono text-[10px] font-bold text-success">
                            {t('⚡ AI SIGNAL: BUY · 82% CONF.')}
                          </p>
                          <p className="font-mono text-[8px] text-ink-soft/60">SNAP-3412</p>
                        </div>
                        <p className="mb-2 text-[10px] text-muted-dark">
                          {t('Breakout above key resistance with rising volume')}
                        </p>
                        <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[9px]">
                          <span className="text-ink-soft">
                            {t('Stop Loss:')} <span className="font-bold text-danger">{t('Active')}</span>
                          </span>
                          <span className="text-ink-soft">
                            {t('Take Profit:')} <span className="font-bold text-success">$69,800</span>
                          </span>
                          <span className="text-ink-soft">
                            {t('Risk per trade:')} <span className="font-bold text-ink">2%</span>
                          </span>
                          <span className="text-ink-soft">
                            {t('Positions open:')} <span className="font-bold text-ink">3 / 10</span>
                          </span>
                        </div>
                      </div>

                      <p className="text-center font-mono text-[9px] text-ink-soft/60">
                        {t('WATCHLIST · SIGNALS · RISK — ONE DASHBOARD')}
                      </p>
                    </div>
                  </div>
                </TerminalFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Markets ticker */}
      <section className="overflow-hidden border-y border-border bg-navy py-4">
        <div className="animate-marquee-25 flex w-max items-center gap-3 pr-3">
          {[...MARKETS, ...MARKETS, ...MARKETS, ...MARKETS].map((m, i) => (
            <div
              key={`${m.name}-${i}`}
              className="flex shrink-0 items-baseline gap-2 rounded-xl border border-border bg-deep px-4 py-2.5 shadow-card"
            >
              <span className="text-sm font-bold text-ink">{t(m.name)}</span>
              <span className="font-mono text-[10px] text-ink-soft">{t(m.sub)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Platform capabilities */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader
              title={t('A Toolkit for Serious Traders')}
              description={t('Four capabilities, one dashboard — built to work together.')}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-navy p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-lg">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70" />
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 hover:scale-110">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-4xl font-black text-ink/5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mb-2 text-base font-bold text-ink">{t(c.title)}</h2>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(c.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section id="steps" className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader
              title={t('From Signup to Your First Live Trade')}
              description={t('Four short steps — most traders finish in under a day.')}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 bg-navy font-mono text-xs font-black text-accent shadow-glow">
                      {i + 1}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-[2px] flex-1 gradient-brand md:block"
                      />
                    )}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-ink">{t(s.title)}</h3>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(s.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs manual */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('AI Assistance vs. Going It Alone')} />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {AI_VS_MANUAL.map((col, i) => (
              <Reveal key={col.title} delay={i * 100}>
                <div
                  className={`h-full rounded-2xl border p-7 md:p-8 ${
                    col.ai
                      ? 'border-success/30 bg-success/[0.03]'
                      : 'border-border bg-navy'
                  }`}
                >
                  <h3 className={`mb-5 text-lg font-bold ${col.ai ? 'text-success' : 'text-ink'}`}>
                    {t(col.title)}
                  </h3>
                  <ul className="space-y-3.5">
                    {col.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-dark">
                        {col.ai ? (
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15">
                            <Check className="h-3 w-3 text-success" />
                          </span>
                        ) : (
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-soft/15">
                            <X className="h-3 w-3 text-ink-soft" />
                          </span>
                        )}
                        {t(point)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border bg-navy py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { target: 2.4, decimals: 1, prefix: '$', suffix: 'B+', label: 'Notional volume analysed monthly' },
              { target: 140, suffix: 'ms', label: 'Average signal latency' },
              { target: 99.95, decimals: 2, suffix: '%', label: 'Platform uptime' },
              { target: 4.7, decimals: 1, suffix: 'M+', label: 'Backtests run to date' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="text-center">
                  <p className="mb-1 font-mono text-3xl font-black text-gradient-brand">
                    <CountUp target={s.target} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-ink-soft">{t(s.label)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-platform */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-0"
                title={t('Every Device. One Dashboard.')}
                description={t('Your portfolio, signals and strategies sync across web, iOS and Android — check in from anywhere, adjust anything in seconds.')}
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-3">
                {[
                  'iOS App — available on the App Store',
                  'Android App — available on Google Play',
                  'Web platform — full-featured browser access',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl border border-border bg-navy p-5 shadow-card"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MonitorSmartphone className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold text-muted-dark">{t(item)}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Frequently Asked Questions')} />
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-lg border bg-medium-navy/40 transition-colors ${
                    isOpen ? 'border-accent/40' : 'border-border'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm font-semibold ${isOpen ? 'text-accent' : 'text-ink'}`}>
                      {t(faq.q)}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-4 text-sm leading-relaxed text-muted-dark">
                        {t(faq.answer)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-border bg-deep py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              'radial-gradient(circle, rgb(0 180 230 / 0.3) 0%, rgb(0 200 172 / 0.2) 50%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="mb-4 text-3xl font-extrabold text-ink md:text-4xl">
              {ctaHead} <span className="text-gradient-brand">{ctaTail}</span>
            </h2>
            <p className="mb-8 text-muted-dark">
              {t('Create your account free — no platform fees, no pressure.')}
            </p>
            <Button to="/get-started" size="lg" className="group">
              {t('Start Free — No Platform Fee')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
