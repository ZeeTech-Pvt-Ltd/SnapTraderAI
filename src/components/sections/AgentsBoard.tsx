import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  marketBadge,
  riskBadge,
  traderRisk,
  traderSeries,
  traderStats,
  traders,
} from '../../content/traders'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import { Sparkline } from '../ui/Sparkline'

const GRID = 'grid-cols-[56px_1.3fr_100px_130px_160px_70px_120px_90px_90px]'

const initials = (id: string) => id.split('-')[0].slice(0, 2).toUpperCase()

/** Follow → sign-up funnel (same as the Leaderboard page) */
function FollowButton() {
  return (
    <Link
      to="/get-started"
      className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 font-mono text-[10px] font-bold gradient-brand text-[#04212b] transition-all duration-200 hover:brightness-110"
    >
      Follow
    </Link>
  )
}

export function AgentsBoard() {
  // First 7 rows of the leaderboard — same default order (Return ↓)
  const top = useMemo(
    () =>
      [...traders]
        .sort((a, b) => traderStats(b).totalReturn - traderStats(a).totalReturn)
        .slice(0, 7),
    [],
  )

  return (
    <section id="agents" className="bg-navy pb-16 pt-20 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title="Compare Agents by Performance, Transparency and Risk"
            description="The top 7 agents right now — full rankings on the leaderboard, with every agent's data source and risk profile shown."
          />
        </Reveal>

        <Reveal>
          {/* Same table as the Leaderboard page — first 7 rows */}
          <div className="hidden overflow-hidden rounded-2xl border border-border bg-navy shadow-card lg:block">
            <div
              className={`grid ${GRID} items-center gap-2 border-b border-border bg-medium-navy/60 px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft`}
            >
              <span>Rank</span>
              <span>Trader</span>
              <span>Trend</span>
              <span>Market</span>
              <span>Strategy</span>
              <span>Risk</span>
              <span>Model</span>
              <span className="text-right">Return</span>
              <span className="text-right">Action</span>
            </div>
            {top.map((t, i) => {
              const s = traderStats(t)
              const positive = s.totalReturn >= 0
              const riskLevel = traderRisk(t)
              return (
                <div
                  key={t.id}
                  className={`grid ${GRID} items-center gap-2 border-b border-border px-5 py-3 transition-colors last:border-0 hover:bg-medium-navy/40`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="font-mono text-xs font-bold text-ink-soft">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex h-6 w-7 items-center justify-center rounded-md bg-accent/15 font-mono text-[9px] font-bold text-accent">
                      {initials(t.id)}
                    </span>
                  </span>
                  <p className="truncate font-mono text-sm font-bold text-ink">{t.id}</p>
                  <Sparkline series={traderSeries(t)} positive={positive} width={90} height={24} />
                  <span
                    className={`w-fit rounded-full border px-2 py-0.5 text-[10px] font-bold ${marketBadge[t.market]}`}
                  >
                    {t.market}
                  </span>
                  <p className="truncate text-xs text-muted-dark">{t.shortStrategy}</p>
                  <span
                    className={`w-fit rounded-full border px-2 py-0.5 text-[10px] font-bold ${riskBadge[riskLevel]}`}
                  >
                    {riskLevel}
                  </span>
                  <p className="truncate font-mono text-[11px] text-ink-soft">{t.model}</p>
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
          </div>

          {/* Mobile cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {top.map((t, i) => {
              const s = traderStats(t)
              const positive = s.totalReturn >= 0
              const riskLevel = traderRisk(t)
              return (
                <div
                  key={t.id}
                  className="rounded-xl border border-border bg-navy p-4 shadow-card"
                >
                  <div className="mb-2.5 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-ink-soft">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex h-7 w-8 shrink-0 items-center justify-center rounded-md bg-accent/15 font-mono text-[10px] font-bold text-accent">
                        {initials(t.id)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-mono text-sm font-bold text-ink">{t.id}</p>
                        <p className="truncate text-[10px] text-ink-soft">
                          {t.model} • {t.market}
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
                    <span className="truncate text-xs text-muted-dark">{t.shortStrategy}</span>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${riskBadge[riskLevel]}`}
                    >
                      {riskLevel}
                    </span>
                  </div>
                  <FollowButton />
                </div>
              )
            })}
          </div>

          <div className="mt-6 text-center">
            <Button to="/leaderboard" className="group">
              View Full Leaderboard
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
