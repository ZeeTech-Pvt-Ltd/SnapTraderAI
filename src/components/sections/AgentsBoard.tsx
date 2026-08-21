import { agents, type RiskLevel } from '../../content/agents'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import { Sparkline } from '../ui/Sparkline'

const RISK_BADGE: Record<RiskLevel, string> = {
  Low: 'bg-success/10 text-success border-success/20',
  Medium: 'bg-warning/10 text-warning border-warning/20',
  High: 'bg-danger/10 text-danger border-danger/20',
}

const CONFIDENCE = [87, 84, 89, 82, 86, 78, 74]

export function AgentsBoard() {
  return (
    <section id="agents" className="bg-deep pb-16 pt-20 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title="Compare Agents by Performance, Transparency and Risk"
            description="Every analysis engine runs with a published risk profile and clear data labels — so you know exactly what you're working with."
          />
        </Reveal>

        {/* Desktop table */}
        <Reveal>
          <div className="hidden overflow-hidden rounded-xl border border-border bg-navy shadow-card lg:block">
            <div className="grid grid-cols-[64px_1.2fr_100px_120px_110px_120px] items-center gap-1 border-b border-border bg-medium-navy/50 px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
              <span>Agent</span>
              <span>Strategy</span>
              <span>Risk</span>
              <span className="text-right">Total Return*</span>
              <span className="text-right">Confidence</span>
              <span className="text-right">Track</span>
            </div>
            {agents.slice(0, 7).map((agent, i) => {
              const positive = agent.totalReturn >= 0
              return (
                <div
                  key={agent.id}
                  className="grid grid-cols-[64px_1.2fr_100px_120px_110px_120px] items-center gap-1 border-b border-border px-5 py-3 transition-colors last:border-0 hover:bg-medium-navy/50"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 font-mono text-xs font-bold text-accent">
                    {agent.id}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-mono text-sm font-medium leading-tight text-ink">
                      {agent.name}
                    </p>
                    <p className="truncate font-mono text-[10px] leading-tight text-ink-soft">
                      {agent.strategy}
                    </p>
                  </div>
                  <span
                    className={`inline-flex w-fit rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] ${RISK_BADGE[agent.risk]}`}
                  >
                    {agent.risk}
                  </span>
                  <span
                    className={`text-right font-mono text-sm font-bold ${
                      positive ? 'text-success' : 'text-danger'
                    }`}
                  >
                    {agent.totalReturn > 0 ? '+' : ''}
                    {agent.totalReturn.toFixed(1)}%
                  </span>
                  <span className="text-right font-mono text-sm font-bold text-ink-soft">
                    {CONFIDENCE[i]}%
                  </span>
                  <span className="flex justify-end">
                    <Sparkline series={agent.series} positive={positive} width={100} height={26} />
                  </span>
                </div>
              )
            })}
          </div>

          {/* Mobile cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:hidden">
            {agents.slice(0, 6).map((agent, i) => {
              const positive = agent.totalReturn >= 0
              return (
                <div key={agent.id} className="rounded-xl border border-border bg-navy p-4 shadow-card">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/15 font-mono text-xs font-bold text-accent">
                        {agent.id}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-mono text-sm font-bold text-ink">
                          {agent.name}
                        </p>
                        <p className="truncate font-mono text-[10px] text-ink-soft">
                          {agent.strategy}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${RISK_BADGE[agent.risk]}`}
                    >
                      {agent.risk}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-sm font-bold ${
                        positive ? 'text-success' : 'text-danger'
                      }`}
                    >
                      {agent.totalReturn > 0 ? '+' : ''}
                      {agent.totalReturn.toFixed(1)}% · {CONFIDENCE[i]}% conf.
                    </span>
                    <Sparkline series={agent.series} positive={positive} width={110} height={28} />
                  </div>
                </div>
              )
            })}
          </div>

          <p className="mt-4 text-center font-mono text-[11px] text-ink-soft/70">
            * Illustrative backtest performance. Past results do not guarantee
            future performance.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
