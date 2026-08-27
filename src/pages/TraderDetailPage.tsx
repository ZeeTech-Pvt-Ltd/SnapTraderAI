import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BadgeCheck, Brain, ShieldCheck } from 'lucide-react'
import {
  marketBadge,
  riskBadge,
  traderClosedTrades,
  traderMonthly,
  traderRisk,
  traderSeries,
  traderStats,
  traders,
} from '../content/traders'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function TraderDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const trader = traders.find((t) => t.id === slug)

  useEffect(() => {
    document.title = trader ? `${trader.id} | SnapTrader AI` : 'Trader | SnapTrader AI'
    window.scrollTo(0, 0)
  }, [trader])

  const s = useMemo(() => (trader ? traderStats(trader) : null), [trader])
  const monthly = useMemo(() => (trader ? traderMonthly(trader) : []), [trader])
  const closed = useMemo(() => (trader ? traderClosedTrades(trader) : []), [trader])

  if (!trader || !s) {
    return (
      <div className="bg-deep pt-[72px]">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center md:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-ink">Trader Not Found</h1>
          <p className="mb-8 text-muted-dark">This agent doesn&apos;t exist on the roster.</p>
          <Button to="/traders" size="lg">
            Back to Traders
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  const riskLevel = traderRisk(trader)
  const series = traderSeries(trader)
  const wins = Math.round(23 * (s.winRate / 100))
  const losses = 23 - wins
  const profitFactor = Number(Math.max(1.1, s.winRate / (100 - s.winRate)).toFixed(2))
  const maxMonthly = Math.max(...monthly.map((m) => m.value))
  // Scale bars against the largest absolute move so negative-heavy months stay in bounds
  const maxAbs = Math.max(...monthly.map((m) => Math.abs(m.value)), 1)

  return (
    <div className="bg-deep pt-[72px]">
      {/* Header */}
      <section className="relative overflow-hidden bg-deep pb-10 pt-14 md:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[400px] w-[400px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <Link
              to="/traders"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Traders
            </Link>

            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex min-w-0 items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/15 font-mono text-2xl font-black text-accent">
                  {trader.id.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <h1 className="text-3xl font-black tracking-tight text-ink md:text-4xl">
                    {trader.id}
                  </h1>
                  <p className="mt-1 font-mono text-xs text-ink-soft">
                    {s.daysActive} days running
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-dark md:text-base">
                    An AI trading agent focused on {trader.market.toLowerCase()}{' '}
                    markets, running a {trader.shortStrategy.toLowerCase()}{' '}
                    strategy and powered by {trader.model} for signal
                    generation and risk-aware sizing.
                  </p>
                </div>
              </div>
              <Button to="/get-started" className="shrink-0">
                + FOLLOW
              </Button>
            </div>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className={`rounded-full border px-3 py-1 text-[10px] font-bold ${marketBadge[trader.market]}`}>
                {trader.market}
              </span>
              <span className="rounded-full border border-border bg-navy px-3 py-1 text-[10px] font-bold text-ink-soft">
                {trader.shortStrategy}
              </span>
              <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[10px] font-bold text-accent">
                {trader.model}
              </span>
              <span className={`rounded-full border px-3 py-1 text-[10px] font-bold ${riskBadge[riskLevel]}`}>
                {riskLevel} Risk
              </span>
            </div>

            {/* Key stats */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {[
                { k: 'Total Return', v: `${s.totalReturn >= 0 ? '+' : ''}${s.totalReturn.toFixed(2)}%`, c: s.totalReturn >= 0 ? 'text-success' : 'text-danger' },
                { k: 'Total Profit', v: `${s.totalProfit >= 0 ? '+' : ''}$${Math.abs(s.totalProfit).toLocaleString('en-US')}`, c: s.totalProfit >= 0 ? 'text-success' : 'text-danger' },
                { k: 'Max Drawdown', v: `${s.maxDrawdown.toFixed(2)}%`, c: 'text-danger' },
                { k: 'Win Rate', v: `${s.winRate.toFixed(2)}%`, c: 'text-ink' },
                { k: 'Risk Level', v: riskLevel, c: riskLevel === 'High' ? 'text-danger' : riskLevel === 'Medium' ? 'text-warning' : 'text-success' },
              ].map((r) => (
                <div key={r.k} className="rounded-xl border border-border bg-navy p-4 text-center shadow-card">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-ink-soft">{r.k}</p>
                  <p className={`mt-1.5 font-mono text-lg font-black ${r.c}`}>{r.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Performance + Equity */}
      <section className="border-t border-border bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Equity curve */}
            <Reveal>
              <h2 className="mb-4 text-lg font-extrabold text-ink">Equity Curve</h2>
              <div className="rounded-2xl border border-border bg-deep p-5 shadow-card">
                <svg viewBox="0 0 400 160" className="w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="td-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor={s.totalReturn >= 0 ? '#16a34a' : '#dc2626'} stopOpacity="0.3" />
                      <stop offset="1" stopColor={s.totalReturn >= 0 ? '#16a34a' : '#dc2626'} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[40, 80, 120].map((y) => (
                    <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#E3E9F2" strokeWidth="0.5" strokeDasharray="3 4" />
                  ))}
                  {(() => {
                    const min = Math.min(...series)
                    const max = Math.max(...series)
                    const span = max - min || 1
                    const pts = series.map((v, i) => [
                      (i / (series.length - 1)) * 400,
                      150 - ((v - min) / span) * 130,
                    ])
                    const line = pts.map((p) => p.join(',')).join(' ')
                    const color = s.totalReturn >= 0 ? '#16a34a' : '#dc2626'
                    return (
                      <>
                        <polygon points={`0,160 ${line} 400,160`} fill="url(#td-fill)" />
                        <polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                      </>
                    )
                  })()}
                </svg>
                <p className="mt-2 text-center font-mono text-[10px] text-ink-soft">
                  Cumulative equity · seeded demo data
                </p>
              </div>
            </Reveal>

            {/* Monthly returns */}
            <Reveal delay={120}>
              <h2 className="mb-4 text-lg font-extrabold text-ink">Monthly Returns</h2>
              <div className="rounded-2xl border border-border bg-deep p-5 shadow-card">
                <div className="flex h-[160px] items-end gap-1.5">
                  {monthly.map((m, i) => (
                    <div key={m.month} className="flex flex-1 flex-col items-center gap-1.5">
                      <span className="font-mono text-[8px] text-ink-soft">
                        {m.value >= 0 ? '+' : ''}
                        {m.value.toFixed(1)}%
                      </span>
                      <div
                        className={`w-full rounded-t ${m.value >= 0 ? 'bg-success/70' : 'bg-danger/70'}`}
                        style={{ height: `${Math.max(6, (Math.abs(m.value) / maxAbs) * 110)}px` }}
                      />
                      <span className="font-mono text-[8px] text-ink-soft/70">
                        {MONTHS[(8 + i) % 12]}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-center font-mono text-[10px] text-ink-soft">
                  Best month: {monthly.reduce((best, m) => (m.value > best.value ? m : best)).month} (+{maxMonthly.toFixed(2)}%)
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trade analysis */}
      <section className="border-t border-border bg-deep py-16 lg:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <h2 className="mb-6 text-lg font-extrabold text-ink">Trade Analysis</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: 'Trades', v: '23' },
                { k: 'Wins', v: `${wins} (${Math.round((wins / 23) * 100)}%)` },
                { k: 'Losses', v: `${losses} (${Math.round((losses / 23) * 100)}%)` },
                { k: 'Profit Factor', v: profitFactor.toFixed(2) },
              ].map((r) => (
                <div key={r.k} className="rounded-xl border border-border bg-navy p-4 text-center shadow-card">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-ink-soft">{r.k}</p>
                  <p className="mt-1.5 font-mono text-lg font-black text-ink">{r.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Recent trades */}
          <Reveal>
            <h2 className="mb-4 mt-10 text-lg font-extrabold text-ink">
              Recent Trades (Closed)
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border bg-navy shadow-card">
              <div className="min-w-[560px]">
                <div className="grid grid-cols-[150px_90px_70px_100px_100px_90px] gap-2 border-b border-border bg-medium-navy/50 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                  <span>Date</span>
                  <span>Symbol</span>
                  <span>Action</span>
                  <span className="text-right">Entry</span>
                  <span className="text-right">Exit</span>
                  <span className="text-right">P&L</span>
                </div>
                {closed.map((t) => (
                  <div
                    key={t.date}
                    className="grid grid-cols-[150px_90px_70px_100px_100px_90px] items-center gap-2 border-b border-border px-5 py-2.5 font-mono text-[11px] last:border-0"
                  >
                    <span className="text-ink-soft">{t.date}</span>
                    <span className="font-bold text-ink">{t.symbol}</span>
                    <span className={t.action === 'BUY' ? 'text-success' : 'text-danger'}>{t.action}</span>
                    <span className="text-right text-ink-soft">{t.entry.toFixed(4)}</span>
                    <span className="text-right text-ink-soft">{t.exit.toFixed(4)}</span>
                    <span className={`text-right font-bold ${t.pnl >= 0 ? 'text-success' : 'text-danger'}`}>
                      {t.pnl >= 0 ? '+' : ''}
                      {t.pnl.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[10px] text-ink-soft/70">
              Demo trade history — seeded deterministically per agent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Model transparency */}
      <section className="border-t border-border bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <h2 className="mb-6 text-lg font-extrabold text-ink">Model Transparency</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-deep p-6 shadow-card">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Brain className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold text-ink">Reasoning Model</h3>
                </div>
                <p className="font-mono text-sm font-bold text-accent">{trader.model}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-dark">
                  The agent is powered by a structured market-input workflow:
                  price action, volume and volatility are read together, and
                  every signal is generated with a confidence score.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-deep p-6 shadow-card">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold text-ink">Risk Controls</h3>
                </div>
                <p className="font-mono text-sm font-bold text-success">Active</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-dark">
                  Every position is checked against exposure, drawdown and
                  volatility limits before it is accepted. Risk level:{' '}
                  {riskLevel} ({s.maxDrawdown.toFixed(1)}% max drawdown).
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 text-center">
              <h2 className="mb-4 text-xl font-extrabold text-ink md:text-2xl">
                Follow {trader.id} and see every{' '}
                <span className="text-gradient-brand">trade as it happens.</span>
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button to="/get-started" size="lg" className="group">
                  + Follow {trader.id}
                  <BadgeCheck className="h-4 w-4" />
                </Button>
                <Button to="/leaderboard" variant="outline" size="lg">
                  View Leaderboard
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
