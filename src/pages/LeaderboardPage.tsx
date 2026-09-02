import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  marketBadge,
  riskBadge,
  traderMarkets,
  traderRisk,
  traderSeries,
  traderStats,
  traders,
  type RiskLevel,
  type Trader,
} from '../content/traders'
import { splitStyledTail } from '../i18n'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { FilterSelect } from '../components/ui/FilterSelect'
import { Sparkline } from '../components/ui/Sparkline'

const SORT_OPTIONS = ['Roster Order', 'Return ↓', 'Return ↑', 'Win Rate ↓', 'Drawdown ↓']

function LiveBadge() {
  const { t } = useTranslation()
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[10px] font-bold text-success">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
      </span>
      {t('LIVE')}
    </span>
  )
}

/** Follow → sign-up funnel */
function FollowButton() {
  const { t } = useTranslation()
  return (
    <Link
      to="/get-started"
      className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 font-mono text-[10px] font-bold gradient-brand text-[#04212b] transition-all duration-200 hover:brightness-110"
    >
      {t('Follow')}
    </Link>
  )
}

function rankInitials(t: Trader) {
  const name = t.id.split('-')[0]
  return name.slice(0, 2).toUpperCase()
}

export function LeaderboardPage() {
  const { t } = useTranslation()
  const [market, setMarket] = useState('All Markets')
  const [strategy, setStrategy] = useState('All Strategies')
  const [risk, setRisk] = useState<'All Risk' | RiskLevel>('All Risk')
  const [sort, setSort] = useState('Roster Order')

  const strategies = useMemo(
    () => ['All Strategies', ...new Set(traders.map((t) => t.shortStrategy))],
    [],
  )

  const topReturn = useMemo(
    () => Math.max(...traders.map((t) => traderStats(t).totalReturn)),
    [],
  )

  const modelCount = useMemo(() => new Set(traders.map((t) => t.model)).size, [])

  // Gradient covers the tail of the CTA heading in every language.
  const [ctaHead, ctaTail] = splitStyledTail(
    t('Browse Every Agent on the Traders Page'),
    2,
  )

  const visible = useMemo(() => {
    let list = traders.filter(
      (t) =>
        (market === 'All Markets' || t.market === market) &&
        (strategy === 'All Strategies' || t.shortStrategy === strategy) &&
        (risk === 'All Risk' || traderRisk(t) === risk),
    )
    switch (sort) {
      case 'Roster Order':
        list = [...list].sort(
          (a, b) => Number(a.id.split('-')[1]) - Number(b.id.split('-')[1]),
        )
        break
      case 'Return ↓':
        list = [...list].sort(
          (a, b) => traderStats(b).totalReturn - traderStats(a).totalReturn,
        )
        break
      case 'Return ↑':
        list = [...list].sort(
          (a, b) => traderStats(a).totalReturn - traderStats(b).totalReturn,
        )
        break
      case 'Win Rate ↓':
        list = [...list].sort(
          (a, b) => traderStats(b).winRate - traderStats(a).winRate,
        )
        break
      case 'Drawdown ↓':
        list = [...list].sort(
          (a, b) => traderStats(b).maxDrawdown - traderStats(a).maxDrawdown,
        )
        break
    }
    return list
  }, [market, strategy, risk, sort])

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
              <span className="text-gradient-brand">{t('Leaderboard')}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-dark md:text-lg">
              {t('Compare Snap Trader AI agents by performance, model transparency, and risk across global markets.')}
            </p>
          </Reveal>

          {/* Stat strip */}
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { k: `${traders.length}`, v: 'Total Agents' },
                { k: `+${topReturn.toFixed(2)}%`, v: 'Top Return' },
                { k: `${traderMarkets.length}`, v: 'Asset Classes' },
                { k: `${modelCount}`, v: 'AI Models' },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-border bg-navy px-5 py-3 shadow-card"
                >
                  <p className="font-mono text-xl font-black text-gradient-brand">{s.k}</p>
                  <p className="text-xs font-semibold text-ink-soft">{t(s.v)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            {/* Filters */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
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
                label="Filter by risk"
                value={risk}
                options={['All Risk', 'Low', 'Medium', 'High']}
                onChange={(v) => setRisk(v as 'All Risk' | RiskLevel)}
              />
              <FilterSelect
                label="Sort agents"
                value={sort}
                options={SORT_OPTIONS}
                onChange={setSort}
              />
              <div className="ml-auto">
                <LiveBadge />
              </div>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-2xl border border-border bg-navy shadow-card lg:block">
              <div className="grid grid-cols-[56px_1.3fr_100px_130px_160px_70px_120px_90px_90px] items-center gap-2 border-b border-border bg-medium-navy/60 px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
                <span>{t('Rank')}</span>
                <span>{t('Trader')}</span>
                <span>{t('Trend')}</span>
                <span>{t('Market')}</span>
                <span>{t('Strategy')}</span>
                <span>{t('Risk')}</span>
                <span>{t('Model')}</span>
                <span className="text-right">{t('Return')}</span>
                <span className="text-right">{t('Action')}</span>
              </div>
              {visible.map((trader, i) => {
                const s = traderStats(trader)
                const positive = s.totalReturn >= 0
                const riskLevel = traderRisk(trader)
                return (
                  <div
                    key={trader.id}
                    className="grid grid-cols-[56px_1.3fr_100px_130px_160px_70px_120px_90px_90px] items-center gap-2 border-b border-border px-5 py-3 transition-colors last:border-0 hover:bg-medium-navy/40"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-bold text-ink-soft">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex h-6 w-7 items-center justify-center rounded-md bg-accent/15 font-mono text-[9px] font-bold text-accent">
                        {rankInitials(trader)}
                      </span>
                    </span>
                    <p className="truncate font-mono text-sm font-bold text-ink">{trader.id}</p>
                    <Sparkline series={traderSeries(trader)} positive={positive} width={90} height={24} />
                    <span
                      className={`w-fit rounded-full border px-2 py-0.5 text-[10px] font-bold ${marketBadge[trader.market]}`}
                    >
                      {t(trader.market)}
                    </span>
                    <p className="truncate text-xs text-muted-dark">{t(trader.shortStrategy)}</p>
                    <span
                      className={`w-fit rounded-full border px-2 py-0.5 text-[10px] font-bold ${riskBadge[riskLevel]}`}
                    >
                      {t(riskLevel)}
                    </span>
                    <p className="truncate font-mono text-[11px] text-ink-soft">{trader.model}</p>
                    <p
                      className={`text-right font-mono text-sm font-bold ${
                        positive ? 'text-success' : 'text-danger'
                      }`}
                    >
                      {positive ? '+' : ''}
                      {s.totalReturn.toFixed(2)}%
                    </p>
                    <span className="flex justify-end">
                      <FollowButton />
                    </span>
                  </div>
                )
              })}
              {visible.length === 0 && (
                <div className="p-12 text-center font-mono text-sm text-ink-soft">
                  {t('No agents match this combination of filters.')}
                </div>
              )}
            </div>

            {/* Mobile cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
              {visible.map((trader, i) => {
                const s = traderStats(trader)
                const positive = s.totalReturn >= 0
                const riskLevel = traderRisk(trader)
                return (
                  <div
                    key={trader.id}
                    className="rounded-xl border border-border bg-navy p-4 shadow-card"
                  >
                    <div className="mb-2.5 flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-ink-soft">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex h-7 w-8 shrink-0 items-center justify-center rounded-md bg-accent/15 font-mono text-[10px] font-bold text-accent">
                          {rankInitials(trader)}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate font-mono text-sm font-bold text-ink">{trader.id}</p>
                          <p className="truncate text-[10px] text-ink-soft">
                            {trader.model} • {t(trader.market)}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`shrink-0 font-mono text-sm font-bold ${
                          positive ? 'text-success' : 'text-danger'
                        }`}
                      >
                        {positive ? '+' : ''}
                        {s.totalReturn.toFixed(2)}%
                      </p>
                    </div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="min-w-0 truncate text-xs text-muted-dark">{t(trader.shortStrategy)}</span>
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${riskBadge[riskLevel]}`}
                      >
                        {t(riskLevel)}
                      </span>
                    </div>
                    <FollowButton />
                  </div>
                )
              })}
              {visible.length === 0 && (
                <div className="rounded-xl border border-border bg-navy p-10 text-center font-mono text-sm text-ink-soft sm:col-span-2">
                  {t('No agents match this combination of filters.')}
                </div>
              )}
            </div>

            <p className="mt-6 text-center font-mono text-[11px] text-ink-soft/70">
              {t('Performance figures are illustrative demo data — the roster comes from Agents.xlsx. Rankings change with live data. No agent guarantees trading results.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-deep py-16">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="mb-4 text-2xl font-extrabold text-ink md:text-3xl">
              {ctaHead} <span className="text-gradient-brand">{ctaTail}</span>
            </h2>
            <p className="mb-6 text-muted-dark">
              {t('See the full roster with strategy details and performance graphs — or head back home to see the analysis in action.')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/traders" size="lg" className="group">
                {t('Browse Traders')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button to="/" variant="outline" size="lg">
                {t('Back to Homepage')}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
