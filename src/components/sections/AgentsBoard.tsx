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
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import { Sparkline } from '../ui/Sparkline'

const GRID = 'grid-cols-[56px_1.3fr_100px_130px_160px_70px_120px_90px_90px]'

const initials = (id: string) => id.split('-')[0].slice(0, 2).toUpperCase()

/** Follow → sign-up funnel (same as the Leaderboard page) */
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

export function AgentsBoard() {
  const { t } = useTranslation()
  // First 7 rows of the leaderboard — same default order (Roster Order)
  const top = useMemo(
    () =>
      [...traders]
        .sort((a, b) => Number(a.id.split('-')[1]) - Number(b.id.split('-')[1]))
        .slice(0, 7),
    [],
  )

  return (
    <section id="agents" className="bg-navy pb-16 pt-20 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title={t('Compare Agents by Performance, Transparency and Risk')}
            description={t("The top 7 agents right now — full rankings on the leaderboard, with every agent's data source and risk profile shown.")}
          />
        </Reveal>

        <Reveal>
          {/* Same table as the Leaderboard page — first 7 rows */}
          <div className="hidden overflow-hidden rounded-2xl border border-border bg-navy shadow-card lg:block">
            <div
              className={`grid ${GRID} items-center gap-2 border-b border-border bg-medium-navy/60 px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft`}
            >
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
            {top.map((trader, i) => {
              const s = traderStats(trader)
              const positive = s.totalReturn >= 0
              const riskLevel = traderRisk(trader)
              return (
                <div
                  key={trader.id}
                  className={`grid ${GRID} items-center gap-2 border-b border-border px-5 py-3 transition-colors last:border-0 hover:bg-medium-navy/40`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="font-mono text-xs font-bold text-ink-soft">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex h-6 w-7 items-center justify-center rounded-md bg-accent/15 font-mono text-[9px] font-bold text-accent">
                      {initials(trader.id)}
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
          </div>

          {/* Mobile cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {top.map((trader, i) => {
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
                        {initials(trader.id)}
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
                    <span className="truncate text-xs text-muted-dark">{t(trader.shortStrategy)}</span>
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
          </div>

          <div className="mt-6 text-center">
            <Button to="/leaderboard" className="group">
              {t('View Full Leaderboard')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
