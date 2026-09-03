import { useMemo, useState } from 'react'
import { ArrowRight, Calculator, ChevronDown, TriangleAlert, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const THREE_NUMBERS = [
  {
    title: 'Capital at risk',
    description: 'The fixed slice of your balance you accept losing on this one idea.',
  },
  {
    title: 'Distance to invalidation',
    description: 'The gap between entry and the level that kills the trade.',
  },
  {
    title: 'Position size',
    description: 'The only variable you actually control once the first two are set.',
  },
]

const FOUR_MOVES = [
  'Fix the loss you can accept in cash or as a percentage of your balance.',
  'Mark entry and the invalidation level from the chart, not from wishful thinking.',
  'Let the tool return the lot, share or contract size that matches both.',
  'Check the reward on offer. If it does not clear your minimum, skip the setup.',
]

const RECOVERY = [
  { drop: 'Drop 10%', need: 'you need 11% back' },
  { drop: 'Drop 25%', need: 'you need 33%' },
  { drop: 'Drop 50%', need: 'you need to double your account just to reach the starting line' },
]

const BAD_HABITS = [
  'Doubling up after a loss to win it back in one trade',
  'Using the same lot size on a 10-pip stop and a 100-pip stop',
  'Sizing off account leverage instead of stop distance',
  'Adding to a loser without recalculating total exposure',
  'Holding several correlated positions and calling it one risk',
]

const FAQS = [
  {
    q: 'How many consecutive losses does it take to blow an account?',
    answer:
      'It depends on how much you risk per trade. Risking 1% per trade means you would need about 100 consecutive losses to completely blow the account. Risking 4% means about 25 consecutive losses. Risking 10% means just 10 straight losses. The more you risk, the fewer losses it takes to wipe you out.',
  },
  {
    q: 'What percentage should I risk per trade?',
    answer:
      'Most professional traders risk 0.5%–4% of their account per trade. A conservative approach is 1% or less. Moderate risk is 2–4%. Risking more than 4% per trade is considered aggressive and significantly increases your probability of ruin.',
  },
  {
    q: 'What is risk of ruin in trading?',
    answer:
      'Risk of ruin is the probability that a run of losing trades drains your account before a recovery can happen. It grows sharply with position size — the calculator above shows your exposure for each risk level, so you can keep it in the conservative zone.',
  },
]

const WIN_RATES = [40, 50, 60, 70]

function riskGuide(pct: number) {
  if (pct <= 4) return { label: 'Conservative', cls: 'bg-success/15 text-success border-success/25' }
  if (pct <= 8) return { label: 'Moderate', cls: 'bg-warning/15 text-warning border-warning/25' }
  if (pct <= 12) return { label: 'Aggressive', cls: 'bg-danger/15 text-danger border-danger/25' }
  return { label: 'Extreme', cls: 'bg-danger/20 text-danger border-danger/30' }
}

export function RiskCalculatorPage() {
  const { t } = useTranslation()
  const [account, setAccount] = useState(10000)
  const [riskPct, setRiskPct] = useState(4)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Gradient covers the tail of each headline in every language.
  const [heroHead, heroTail] = splitStyledTail(
    t('Risk Calculator: Position Size, Risk and Reward in One Click'),
    2,
  )
  const [ctaHead, ctaTail] = splitStyledTail(
    t('Trade with discipline. Protect your capital.'),
    2,
  )

  const riskDollars = (account * riskPct) / 100
  const lossesToBlow = Math.floor(100 / riskPct)

  const ruinProbs = useMemo(
    () =>
      WIN_RATES.map((win) => {
        const q = 1 - win / 100
        const runP = Math.pow(q, lossesToBlow)
        return {
          win,
          prob: 1 - Math.pow(1 - runP, 100 - lossesToBlow + 1),
        }
      }),
    [lossesToBlow],
  )

  const guide = riskGuide(riskPct)

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
          <Reveal>
            <h1 className="mb-5 max-w-[720px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              {heroHead} <span className="text-gradient-brand">{heroTail}</span>
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-muted-dark">
              {t('Markets punish guesswork on size faster than they punish a bad opinion. Use this risk calculator to fix the numbers first, then let the chart do whatever it wants.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Calculator */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <TerminalFrame
              title={t('Snap Trader AI · Risk Calculator')}
              titleExtra={
                <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[9px] font-bold text-accent">
                  <Calculator className="h-3 w-3" />
                  LIVE
                </span>
              }
            >
              <div className="grid gap-6 p-5 md:grid-cols-2 md:gap-8 md:p-7">
                {/* Inputs */}
                <div className="space-y-5">
                  <div>
                    <label htmlFor="rc-account" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                      {t('Account size / max drawdown')}
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm font-bold text-ink-soft">
                        $
                      </span>
                      <input
                        id="rc-account"
                        type="number"
                        min={100}
                        step={100}
                        value={account}
                        onChange={(e) => setAccount(Math.max(100, Number(e.target.value) || 0))}
                        className="w-full rounded-lg border border-border bg-deep py-3 pl-8 pr-4 font-mono text-sm font-bold text-ink outline-none transition-colors focus:border-accent/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rc-pct" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                      {t('Risk per trade ({{pct}}%)', { pct: riskPct })}
                    </label>
                    <input
                      id="rc-pct"
                      type="range"
                      min={0.5}
                      max={20}
                      step={0.5}
                      value={riskPct}
                      onChange={(e) => setRiskPct(Number(e.target.value))}
                      className="w-full cursor-pointer accent-[#0090c8]"
                    />
                    <div className="mt-1 flex justify-between font-mono text-[10px] text-ink-soft">
                      <span>0.5%</span>
                      <span className={`rounded-full border px-2 py-0.5 font-bold ${guide.cls}`}>
                        {riskPct}% — {t(guide.label).toLowerCase()}
                      </span>
                      <span>20%</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rc-dollars" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                      {t('Risk per trade ($)')}
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm font-bold text-ink-soft">
                        $
                      </span>
                      <input
                        id="rc-dollars"
                        type="number"
                        min={1}
                        step={10}
                        value={Math.round(riskDollars * 100) / 100}
                        onChange={(e) => {
                          const v = Number(e.target.value) || 0
                          if (account > 0) {
                            const pct = (v / account) * 100
                            setRiskPct(Math.min(20, Math.max(0.5, pct)))
                          }
                        }}
                        className="w-full rounded-lg border border-accent/25 bg-accent/5 py-3 pl-8 pr-4 font-mono text-lg font-black text-accent outline-none transition-colors focus:border-accent/60"
                      />
                    </div>
                    <p className="mt-1 font-mono text-[10px] text-ink-soft">
                      {t('Typing here adjusts the risk % above — they stay in sync.')}
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-[#F4F8FC] p-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                      {t('Risk-per-trade guide')}
                    </p>
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <p className="text-success">{t('≤4% — conservative')}</p>
                      <p className="text-warning">{t('4–8% — moderate')}</p>
                      <p className="text-danger">{t('8–12% — aggressive')}</p>
                      <p className="font-bold text-danger">{t('>12% — extreme')}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border bg-[#F4F8FC] p-4 text-center">
                      <p className="font-mono text-2xl font-black text-danger">{lossesToBlow}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                        {t('Consecutive losses until blown account')}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-[#F4F8FC] p-4 text-center">
                      <p className="font-mono text-2xl font-black text-accent">
                        ${riskDollars.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                        {t('Recommended risk per trade ({{pct}}%)', { pct: riskPct })}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-[#F4F8FC] p-4">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                      {t('Probability of ruin — chance of {{n}} straight losses within 100 trades', { n: lossesToBlow })}
                    </p>
                    <div className="space-y-2">
                      {ruinProbs.map((r) => (
                        <div key={r.win} className="flex items-center justify-between font-mono text-[11px]">
                          <span className="text-ink-soft">{t('{{win}}% win rate', { win: r.win })}</span>
                          <span className="font-bold text-ink">{Math.round(r.prob * 100)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg border border-warning/30 bg-warning/5 p-4">
                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                    <p className="text-xs leading-relaxed text-muted-dark">
                      {t('While risking {{pct}}% of your account per trade, you need a high enough win rate to survive a {{n}} trade losing streak. Smaller size keeps you in the game longer.', { pct: riskPct, n: lossesToBlow })}
                    </p>
                  </div>
                </div>
              </div>
            </TerminalFrame>
          </Reveal>
        </div>
      </section>

      {/* Three numbers decide the outcome */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Three numbers decide the outcome')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {THREE_NUMBERS.map((n, i) => (
              <Reveal key={n.title} delay={i * 90}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-navy p-7 shadow-card">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70" />
                  <span className="pointer-events-none absolute right-4 top-3 font-mono text-4xl font-black text-ink/5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mb-2 text-base font-bold text-ink">{t(n.title)}</h2>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(n.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-center text-base leading-relaxed text-muted-dark md:text-lg">
              {t('Change one and the other two move with it. The calculator handles that trade-off instantly so you are not doing arithmetic while price is running.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Build the trade in four moves */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Build the trade in four moves')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FOUR_MOVES.map((step, i) => (
              <Reveal key={step} delay={i * 90}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-deep p-6 shadow-card">
                  <span className="pointer-events-none absolute right-4 top-2 font-mono text-5xl font-black text-ink/5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(step)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The recovery problem */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader
              title={t('The recovery problem nobody plans for')}
              description={t('Losses and gains are not symmetrical. Small, consistent sizing keeps you in the shallow end of that curve, where a normal winning streak is enough to repair the damage.')}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {RECOVERY.map((r, i) => (
              <Reveal key={r.drop} delay={i * 90}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-navy p-7 text-center shadow-card">
                  <p className="font-mono text-2xl font-black text-danger">{t(r.drop)}</p>
                  <div aria-hidden="true" className="my-3 h-[2px] w-10 gradient-brand" />
                  <p className="text-sm font-semibold leading-relaxed text-muted-dark">
                    {t(r.need)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing habits worth breaking */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Sizing habits worth breaking')} />
          </Reveal>
          <div className="mx-auto max-w-3xl space-y-3">
            {BAD_HABITS.map((habit, i) => (
              <Reveal key={habit} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-deep p-4 shadow-card">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-danger/10">
                    <X className="h-4 w-4 text-danger" />
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-muted-dark">
                    {t(habit)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Risk Calculator questions')} />
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

      {/* CTA */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="mb-4 text-3xl font-extrabold text-ink md:text-4xl">
              {ctaHead} <span className="text-gradient-brand">{ctaTail}</span>
            </h2>
            <div className="mt-6">
              <Button to="/get-started" size="lg" className="group">
                {t('Start Free Access')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
