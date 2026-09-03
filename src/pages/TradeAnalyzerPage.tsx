import { ArrowRight, ClipboardCheck, Cpu, Upload } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const ANALYSIS_FEATURES = [
  {
    title: 'Setup Grade, A+ to F',
    description: 'Scored on the same rules every single time',
  },
  {
    title: 'Entry Zone, Structural Stop, and Multi-Level Targets',
    description: 'a full plan, not a vague “buy” signal',
  },
  {
    title: 'Risk-to-Reward, Calculated',
    description: 'Anything under 1:1.5 gets flagged',
  },
  {
    title: 'Pattern and Level Read',
    description:
      'Triangles, flags, head & shoulders, candlestick signals, support/resistance',
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Drop your chart.',
    description:
      'Screenshot from TradingView, MT5, cTrader, or any platform. Stocks, forex, gold, crypto, futures — all supported.',
  },
  {
    step: '02',
    title: 'The AI reads it.',
    description:
      'Trend direction, volume behaviour, indicator alignment, pattern quality, and structure.',
  },
  {
    step: '03',
    title: 'You get a verdict.',
    description:
      'Complete trade plan plus a straight answer: take it, or wait for a cleaner chart.',
  },
]

const SECOND_OPINION_POINTS = [
  'Catches confirmation bias before it empties your account',
  'Same checklist on every trade, so your results become comparable',
  'Calls out sloppy patterns instead of agreeing with you',
  'Works the same at 9 AM as it does after three red candles',
]

const WHY_TRADERS = [
  'No emotions, no revenge trading, no “this time it’s different”',
  'Learn as you go — every grade explains why it scored that way',
  'Build a history of graded setups and spot your own repeating mistakes',
]

export function TradeAnalyzerPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of each headline in every language.
  const [riskHead, riskTail] = splitStyledTail(t('Before You Risk a Rupee'), 1)
  const [ctaHead, ctaTail] = splitStyledTail(
    t('Grade Your Next Setup Before You Risk It'),
    3,
  )

  return (
    <div className="bg-deep pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep pb-14 pt-14 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h1 className="mb-5 max-w-[600px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
                {t('AI Trade Analyzer — Grade Your Setup')}
                <br />
                {riskHead} <span className="text-gradient-brand">{riskTail}</span>
              </h1>
              <p className="mb-3 text-lg font-semibold leading-relaxed text-ink">
                {t("Most losing trades don't fail at the exit. They fail at the entry.")}
              </p>
              <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-muted-dark">
                {t('Our AI trade analyzer reads your chart in seconds and tells you whether the setup actually earned your money — or whether you just talked yourself into it.')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/get-started" size="lg" className="group">
                  {t('Try the Analyzer Free')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>

            {/* Grade report mockup */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 180 230 / 0.14) 0%, transparent 70%)' }}
                />
                <TerminalFrame
                  title={t('Snap Trader AI · Trade Analyzer')}
                  titleExtra={
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[9px] font-bold text-accent">
                      {t('~7s ANALYSIS')}
                    </span>
                  }
                >
                  <div className="p-5">
                    {/* Report header */}
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-sm font-extrabold text-ink">EUR/USD · 1H</p>
                        <p className="font-mono text-[9px] text-ink-soft">
                          {t('CHART RECEIVED · TREND + VOLUME + STRUCTURE')}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-success/40 bg-success/10 font-mono text-xl font-black text-success">
                          A-
                        </span>
                        <div className="text-right">
                          <p className="text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                            {t('Grade')}
                          </p>
                          <p className="font-mono text-[10px] font-bold text-success">
                            {t('WORTH TAKING')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Plan grid */}
                    <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {[
                        { k: t('ENTRY ZONE'), v: '1.0842–1.0860', c: 'text-accent' },
                        { k: t('STOP'), v: '1.0804', c: 'text-danger' },
                        { k: t('TARGETS'), v: '1.0918 · 1.0964', c: 'text-success' },
                        { k: t('R : R'), v: '1 : 2.1', c: 'text-success' },
                      ].map((r) => (
                        <div
                          key={r.k}
                          className="rounded-md border border-border bg-[#F4F8FC] p-2.5"
                        >
                          <p className="text-[7px] font-bold uppercase tracking-wider text-ink-soft/70">
                            {r.k}
                          </p>
                          <p className={`mt-1 font-mono text-[11px] font-bold ${r.c}`}>{r.v}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bear case */}
                    <div className="mb-4 rounded-md border border-warning/30 bg-warning/5 p-3.5">
                      <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-wider text-warning">
                        {t('The Bear Case')}
                      </p>
                      <p className="text-[11px] leading-relaxed text-muted-dark">
                        {t('Momentum divergence on RSI (30m) suggests the breakout may fade. If price closes below 1.0804, the setup is invalid — walk away.')}
                      </p>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-success/30 bg-success/5 p-3">
                      <p className="font-mono text-[10px] font-bold text-success">
                        {t('VERDICT · TAKE IT — RISK CAPPED AT 1%')}
                      </p>
                      <p className="font-mono text-[9px] text-ink-soft/60">SNAP-7741</p>
                    </div>
                  </div>
                </TerminalFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Every Analysis Gives You — checklist report */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            {/* Left: title + framing */}
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-0"
                title={t('What Every Analysis Gives You')}
                description={t('Every chart gets the same full report — four checks, every single time. No partial reports, no vague hunches.')}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {['Same rubric', 'Same structure', 'No vibes'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent"
                  >
                    {t(chip)}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Right: numbered checklist panel */}
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-border bg-deep shadow-card">
                {ANALYSIS_FEATURES.map((f, i) => (
                  <div
                    key={f.title}
                    className={`flex items-start gap-4 p-6 transition-colors hover:bg-medium-navy/40 ${
                      i > 0 ? 'border-t border-border' : ''
                    }`}
                  >
                    <span className="mt-0.5 shrink-0 rounded-md border border-accent/20 bg-accent/10 px-2 py-1 font-mono text-xs font-bold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 className="text-base font-bold text-ink">{t(f.title)}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted-dark">
                        {t(f.description)}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-border bg-medium-navy/30 px-6 py-3.5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-success">
                    {t('4/4 checks delivered with every analysis')}
                  </p>
                  <p className="font-mono text-[9px] text-ink-soft/60">SNAP-CHECK</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('How It Works')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-navy p-7 shadow-card">
                  <span className="pointer-events-none absolute right-4 top-2 font-mono text-5xl font-black text-ink/5">
                    {s.step}
                  </span>
                  <h3 className="mb-2 text-base font-bold text-ink">{t(s.title)}</h3>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(s.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-center font-mono text-sm font-bold text-accent">
              {t('Average time: under 10 seconds.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Not a Scanner. A Second Opinion. */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader
              title={t('Not a Scanner. A Second Opinion.')}
              description={t("Scanners hand you a list of tickers. That's a different job. This AI trade analyzer looks at the one chart already open in front of you and answers the only question that matters at that moment: is this worth the risk?")}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SECOND_OPINION_POINTS.map((point, i) => (
              <Reveal key={point} delay={i * 80}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-deep p-5 shadow-card">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full gradient-brand" />
                  <p className="text-sm leading-relaxed text-muted-dark">{t(point)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Traders Keep Coming Back + CTA */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Why Traders Keep Coming Back')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHY_TRADERS.map((point, i) => (
              <Reveal key={point} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-navy p-7 shadow-card">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent"
                  >
                    {i === 0 ? (
                      <Cpu className="h-6 w-6" />
                    ) : i === 1 ? (
                      <ClipboardCheck className="h-6 w-6" />
                    ) : (
                      <Upload className="h-6 w-6" />
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(point)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 text-center">
              <h2 className="mb-4 text-2xl font-extrabold text-ink md:text-3xl">
                {ctaHead} <span className="text-gradient-brand">{ctaTail}</span>
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-muted-dark">
                {t('Free to start. Drop in a chart and get your first grade in under ten seconds.')}
              </p>
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
