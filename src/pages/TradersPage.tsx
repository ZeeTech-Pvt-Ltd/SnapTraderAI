import { useEffect, useId, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  traderMarkets,
  traders,
  traderSeries,
  traderStats,
  type Trader,
} from '../content/traders'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { FilterSelect } from '../components/ui/FilterSelect'

type Tab = 'Trending' | 'New' | 'Low Risk' | 'High Growth'
const TABS: Tab[] = ['Trending', 'New', 'Low Risk', 'High Growth']

/** Area + line sparkline, 118×62 like the reference page. */
function TraderSparkline({
  series,
  positive,
}: {
  series: number[]
  positive: boolean
}) {
  const gradientId = useId()
  const w = 118
  const h = 62
  const pad = 4
  const min = Math.min(...series)
  const max = Math.max(...series)
  const span = max - min || 1
  const pts = series.map((v, i) => [
    (i / (series.length - 1)) * w,
    h - pad - ((v - min) / span) * (h - 2 * pad),
  ])
  const line = pts.map((p) => p.join(',')).join(' ')
  const color = positive ? '#16a34a' : '#dc2626'

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${line} ${w},${h}`} fill={`url(#${gradientId})`} />
      <polyline
        points={line}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function StatCell({ label, value, valueClass }: { label: string; value: string; valueClass: string }) {
  return (
    <div className="bg-navy p-2.5">
      <p className="text-[9px] text-ink-soft">{label}</p>
      <p className={`mt-0.5 font-mono text-[11px] font-bold ${valueClass}`}>{value}</p>
    </div>
  )
}

function TraderCard({ trader, index }: { trader: Trader; index: number }) {
  const s = traderStats(trader)
  const series = useMemo(() => traderSeries(trader), [trader])
  const positive = s.totalReturn >= 0
  const navigate = useNavigate()

  return (
    <Reveal delay={(index % 3) * 80}>
      {/* Whole card opens the trader's page */}
      <article
        onClick={() => navigate(`/traders/${trader.id}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') navigate(`/traders/${trader.id}`)
        }}
        tabIndex={0}
        role="link"
        aria-label={`View ${trader.id} details`}
        className="flex h-full cursor-pointer flex-col rounded-[10px] border border-border bg-navy p-4 shadow-card outline-none transition-all duration-200 hover:-translate-y-[3px] hover:border-accent/30 hover:shadow-card-lg focus-visible:border-accent"
      >
        {/* Header: avatar + name + days chip */}
        <div className="mb-[22px] flex items-start justify-between gap-[14px]">
          <div className="flex min-w-0 items-center gap-[11px]">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent/15 font-mono text-lg font-black text-accent">
              {trader.id.charAt(0).toUpperCase()}
            </span>
            <div className="min-w-0">
              <h2 className="m-0 truncate whitespace-nowrap font-mono text-[15px] font-bold">
                <Link
                  to={`/traders/${trader.id}`}
                  className="text-ink transition-colors hover:text-accent hover:underline"
                >
                  {trader.id}
                </Link>
              </h2>
              <p className="m-0 truncate whitespace-nowrap text-[9px] text-ink-soft">
                {trader.model} • {trader.market}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-md bg-accent/10 px-2 py-[6px] font-mono text-[9px] font-bold text-accent">
            {s.daysActive} days
          </span>
        </div>

        {/* Total return + graph */}
        <div className="mb-[15px] flex items-center justify-between gap-[14px]">
          <div className="shrink-0">
            <p className="text-[11px] text-ink-soft">Total Return</p>
            <p
              className={`font-mono text-[15px] font-black ${
                positive ? 'text-success' : 'text-danger'
              }`}
            >
              {positive ? '+' : ''}
              {s.totalReturn.toFixed(2)}%
            </p>
          </div>
          <div className="h-[62px] min-w-0 flex-1">
            <TraderSparkline series={series} positive={positive} />
          </div>
        </div>

        {/* Bordered 2×2 stat grid */}
        <div className="mb-[13px] grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
          <StatCell
            label="Total Profit"
            value={`${s.totalProfit >= 0 ? '+' : ''}${s.totalProfit.toLocaleString('en-US')}`}
            valueClass={s.totalProfit >= 0 ? 'text-success' : 'text-danger'}
          />
          <StatCell
            label="Floating PNL"
            value={`${s.floatingPnl >= 0 ? '+' : ''}${s.floatingPnl.toFixed(2)}`}
            valueClass={s.floatingPnl >= 0 ? 'text-success' : 'text-danger'}
          />
          <StatCell
            label="Max Drawdown"
            value={`${s.maxDrawdown.toFixed(2)}%`}
            valueClass="text-danger"
          />
          <StatCell
            label="Win Rate"
            value={`${s.winRate.toFixed(2)}%`}
            valueClass="text-ink"
          />
        </div>

        {/* Follow → sign-up funnel (stops card navigation) */}
        <Link
          to="/get-started"
          onClick={(e) => e.stopPropagation()}
          className="block w-full rounded-md border-0 py-[10px] text-center font-mono text-[10px] font-bold tracking-wide gradient-brand text-[#04212b] transition-all duration-200 hover:brightness-110 hover:shadow-glow"
        >
          + FOLLOW
        </Link>
      </article>
    </Reveal>
  )
}

export function TradersPage() {
  const [tab, setTab] = useState<Tab | null>('Trending')
  const [market, setMarket] = useState('All Markets')
  const [strategy, setStrategy] = useState('All Strategies')
  const [model, setModel] = useState('All Models')

  useEffect(() => {
    document.title = 'AI Traders | SnapTrader AI'
  }, [])

  const strategies = useMemo(
    () => ['All Strategies', ...new Set(traders.map((t) => t.strategy))],
    [],
  )
  const models = useMemo(
    () => ['All Models', ...new Set(traders.map((t) => t.model))],
    [],
  )

  const visible = useMemo(() => {
    let list = traders.filter(
      (t) =>
        (market === 'All Markets' || t.market === market) &&
        (strategy === 'All Strategies' || t.strategy === strategy) &&
        (model === 'All Models' || t.model === model),
    )

    // Roster sequence is the default order: falcon-01 → warden-18
    list = [...list].sort(
      (a, b) => Number(a.id.split('-')[1]) - Number(b.id.split('-')[1]),
    )

    switch (tab) {
      case 'Trending':
        // Trending shows the roster sequence (already sorted above)
        break
      case 'New':
        list = [...list].sort(
          (a, b) => traderStats(a).daysActive - traderStats(b).daysActive,
        )
        break
      case 'Low Risk':
        list = list.filter((t) => traderStats(t).maxDrawdown >= -15)
        break
      case 'High Growth':
        list = list.filter((t) => traderStats(t).totalReturn >= 8)
        break
    }
    return list
  }, [tab, market, strategy, model])

  return (
    <div className="bg-deep pt-[72px]">
      {/* Page header */}
      <section className="relative overflow-hidden bg-deep pb-10 pt-14 md:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[400px] w-[400px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <h1 className="mb-5 max-w-[600px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              AI <span className="text-gradient-brand">Traders</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-dark md:text-lg">
              Browse and discover AI trader agents. Compare performance across
              markets, strategies, and AI models.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            {/* Segmented tabs */}
            <div className="mb-4 flex max-w-xl flex-wrap gap-0 overflow-hidden rounded-lg border border-border bg-navy p-1 shadow-card">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(tab === t ? null : t)}
                  className={`min-w-[100px] flex-1 cursor-pointer border-0 px-4 py-[10px] font-mono text-xs font-bold transition-all duration-200 sm:min-w-[110px] ${
                    tab === t
                      ? 'gradient-brand rounded-md text-[#04212b] shadow-glow'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Dropdown filters */}
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-wider text-ink-soft">
                Filters:
              </span>
              <FilterSelect
                label="Filter by market"
                value={market}
                options={['All Markets', ...traderMarkets]}
                onChange={setMarket}
              />
              <FilterSelect
                label="Filter by strategy"
                value={strategy}
                options={strategies}
                onChange={setStrategy}
              />
              <FilterSelect
                label="Filter by AI model"
                value={model}
                options={models}
                onChange={setModel}
              />
            </div>
          </Reveal>

          {/* Card grid */}
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((t, i) => (
                <TraderCard key={t.id} trader={t} index={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-navy p-12 text-center shadow-card">
              <p className="font-mono text-sm text-ink-soft">
                No agents match this combination of filters.
              </p>
            </div>
          )}

          <Reveal>
            <p className="mt-6 text-center font-mono text-[11px] text-ink-soft/70">
              Performance figures are illustrative demo data — the roster
              (agents, markets, strategies and models) comes from Agents.xlsx.
              No agent guarantees trading results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-deep py-16">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="mb-4 text-2xl font-extrabold text-ink md:text-3xl">
              See the Agents{' '}
              <span className="text-gradient-brand">Analyse Your Charts</span>
            </h2>
            <p className="mb-6 text-muted-dark">
              Upload a chart and let the right agent for your market do the heavy
              lifting — signals with confidence scores, always labelled.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/leaderboard" size="lg" className="group">
                View Leaderboard
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button to="/" variant="outline" size="lg">
                Back to Homepage
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
