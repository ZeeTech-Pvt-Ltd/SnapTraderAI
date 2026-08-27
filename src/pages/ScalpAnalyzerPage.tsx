import { useEffect } from 'react'
import {
  ArrowRight,
  Clock,
  Globe2,
  Quote,
  RefreshCw,
  Timer,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const WHAT_YOU_GET = [
  {
    title: 'Setup Score',
    description: 'how clean the pattern really is, not just what it looks like',
  },
  {
    title: 'Entry Zone',
    description: 'with a structural stop, not a random pip distance',
  },
  {
    title: 'Two Targets',
    description: 'plus the honest risk-to-reward number',
  },
  {
    title: 'Momentum Check',
    description: 'across VWAP, EMA slope, and relative volume',
  },
  {
    title: 'Chase Warning',
    description: 'when price is already extended and the easy money is gone',
  },
]

const BARCODE_BARS = [12, 18, 8, 16, 10, 20, 14, 9, 17, 11, 19, 13, 15, 8, 18]

const FAST_TIMEFRAMES = [
  {
    icon: Timer,
    title: '1M, 3M, and 5M charts as the default workspace',
  },
  {
    icon: Globe2,
    title: 'Forex, gold, crypto, and index scalps',
  },
  {
    icon: Clock,
    title: 'Works during the open, the London–New York overlap, and news spikes',
  },
  {
    icon: RefreshCw,
    title: 'Re-run the same pair after a pullback to see if the setup improved',
  },
]

const WHY_TRADERS = [
  'Removes the “maybe it’ll run” trades from your day',
  'Keeps your criteria identical on trade #1 and trade #14',
  'Flags conflicting signals before you size in',
  'Turns a gut feeling into a written plan you can review later',
]

export function ScalpAnalyzerPage() {
  useEffect(() => {
    document.title = 'AI Scalp Analyzer | SnapTrader AI'
  }, [])

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
                AI Scalp Analyzer — Read 1M &amp; 5M Setups in{' '}
                <span className="text-gradient-brand">Seconds</span>
              </h1>
              <p className="mb-3 text-lg font-semibold leading-relaxed text-ink">
                Scalping punishes hesitation. By the time you finish drawing
                levels on a 1-minute chart, the candle you wanted is already
                closed.
              </p>
              <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-muted-dark">
                The AI Scalp Analyzer compresses that work into seconds. It
                reads the structure on your fast timeframes, checks whether
                momentum and volume actually agree, and hands you a plan you can
                act on — or skip.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/get-started" size="lg" className="group">
                  Try the Scalp Analyzer Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Reveal>

            {/* Scalp ticket mockup */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 200 172 / 0.14) 0%, transparent 70%)' }}
                />
                <TerminalFrame
                  title="Snap Trader AI · Scalp Analyzer"
                  titleExtra={
                    <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 font-mono text-[9px] font-bold text-success">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                      </span>
                      T+00:05
                    </span>
                  }
                >
                  <div className="p-5">
                    {/* Pair + timeframe tabs */}
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <p className="font-mono text-sm font-extrabold text-ink">EUR/USD</p>
                      <div className="flex items-center gap-1 rounded-lg border border-border bg-[#F4F8FC] p-1">
                        {['1M', '3M', '5M'].map((tf, i) => (
                          <span
                            key={tf}
                            className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-bold ${
                              i === 0
                                ? 'gradient-brand text-[#04212b]'
                                : 'text-ink-soft'
                            }`}
                          >
                            {tf}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Setup score meter */}
                    <div className="mb-4 rounded-md border border-border bg-[#F4F8FC] p-3.5">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                          Setup Score
                        </p>
                        <p className="font-mono text-sm font-black text-accent">8.4 / 10</p>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E3E9F2]">
                        <div className="h-full w-[84%] rounded-full gradient-brand" />
                      </div>
                    </div>

                    {/* Plan grid */}
                    <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                      {[
                        { k: 'ENTRY', v: '1.0851–59', c: 'text-accent' },
                        { k: 'STOP', v: '1.0838', c: 'text-danger' },
                        { k: 'TARGET 1', v: '1.0878', c: 'text-success' },
                        { k: 'TARGET 2', v: '1.0896', c: 'text-success' },
                        { k: 'R : R', v: '1 : 2.2', c: 'text-success' },
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

                    {/* Momentum chips + chase warning */}
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      {[
                        { t: 'VWAP', ok: true },
                        { t: 'EMA SLOPE', ok: true },
                        { t: 'REL VOLUME', ok: false },
                      ].map((m) => (
                        <span
                          key={m.t}
                          className={`rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold ${
                            m.ok
                              ? 'border-success/25 bg-success/10 text-success'
                              : 'border-danger/25 bg-danger/10 text-danger'
                          }`}
                        >
                          {m.ok ? '✓' : '✗'} {m.t}
                        </span>
                      ))}
                      <span className="rounded-full border border-warning/25 bg-warning/10 px-2.5 py-1 font-mono text-[9px] font-bold text-warning">
                        ⚠ CHASE WARNING · +0.4 ATR FROM VWAP
                      </span>
                    </div>

                    {/* Verdict stamp */}
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[10px] text-ink-soft">
                        The easy money may already be gone — consider waiting
                        for the pullback.
                      </p>
                      <span className="shrink-0 -rotate-3 rounded-md border-2 border-success/50 px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-widest text-success">
                        Act or Skip
                      </span>
                    </div>
                  </div>
                </TerminalFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What You Get Back — report receipt */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-0"
                title="What You Get Back"
                description="Every read returns the same fields, so setups stay comparable across the session:"
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {['Same fields', 'Every read', 'Comparable'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-border bg-deep shadow-card-lg">
                {/* Receipt header */}
                <div className="flex items-center justify-between border-b border-dashed border-border bg-medium-navy/40 px-6 py-4">
                  <p className="font-mono text-xs font-bold text-ink">SNAP SCALP REPORT</p>
                  <p className="font-mono text-[10px] text-ink-soft">FIELD LIST · 5 ITEMS</p>
                </div>
                {/* Receipt rows */}
                {WHAT_YOU_GET.map((f, i) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-4 border-b border-dashed border-border px-6 py-4 last:border-0"
                  >
                    <span className="w-7 shrink-0 font-mono text-xs font-bold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 className="font-mono text-sm font-bold uppercase tracking-wide text-ink">
                        {f.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted-dark">
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
                {/* Barcode footer */}
                <div className="flex items-center justify-between gap-4 bg-medium-navy/40 px-6 py-4">
                  <div className="flex items-end gap-[3px]" aria-hidden="true">
                    {BARCODE_BARS.map((h, i) => (
                      <span
                        key={i}
                        className="w-[2px] gradient-brand"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                  <p className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-wider text-success">
                    5/5 fields delivered
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Built For Fast Timeframes — split visual */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Timeframe visual */}
            <Reveal>
              <div className="rounded-2xl border border-border bg-navy p-8 shadow-card">
                <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink-soft">
                  Default Workspace
                </p>
                <div className="flex items-end gap-3">
                  {[
                    { tf: '1M', active: true, h: 'h-28' },
                    { tf: '3M', active: false, h: 'h-20' },
                    { tf: '5M', active: false, h: 'h-14' },
                  ].map((t) => (
                    <div key={t.tf} className="flex flex-1 flex-col items-center gap-3">
                      <span
                        className={`flex w-full items-center justify-center rounded-xl border font-mono text-xl font-black transition-all ${
                          t.active
                            ? 'gradient-brand border-transparent text-[#04212b] shadow-glow'
                            : 'border-border bg-deep text-ink-soft'
                        } ${t.h}`}
                      >
                        {t.tf}
                      </span>
                      <span
                        className={`font-mono text-[9px] font-bold uppercase tracking-wider ${
                          t.active ? 'text-accent' : 'text-ink-soft/60'
                        }`}
                      >
                        {t.active ? 'ACTIVE' : 'READY'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['OPEN', 'LDN–NY OVERLAP', 'NEWS SPIKES'].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-deep px-2.5 py-1 font-mono text-[9px] font-bold text-ink-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Points */}
            <div>
              <Reveal>
                <SectionHeader
                  align="left"
                  className="mb-8"
                  title="Built For Fast Timeframes"
                  description="Most chart tools are tuned for swing setups and then squeezed onto scalping. This one starts from the other end."
                />
              </Reveal>
              <div className="space-y-3">
                {FAST_TIMEFRAMES.map((point, i) => (
                  <Reveal key={point.title} delay={i * 80}>
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-navy p-4 shadow-card transition-colors hover:border-accent/30">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <point.icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm leading-relaxed text-muted-dark">
                        {point.title}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Traders Use It — numbered cards */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader
              title="Why Traders Use It"
              description="Scalping losses rarely come from bad analysis. They come from entering a setup that was never good enough to begin with."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {WHY_TRADERS.map((point, i) => (
              <Reveal key={point} delay={i * 80}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-deep p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-lg">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70"
                  />
                  <span className="pointer-events-none absolute right-4 top-3 font-mono text-5xl font-black text-ink/5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-dark md:text-base">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use It As A Filter, Not A Signal — pull quote */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <Quote
              aria-hidden="true"
              className="mx-auto mb-4 h-10 w-10 text-accent/30"
            />
            <SectionHeader
              title="Use It As A Filter, Not A Signal"
              description="The AI Scalp Analyzer is a pre-entry checkpoint. It tells you whether a setup meets your standard — you still decide, size, and manage the trade."
            />
            <p className="border-x-2 border-accent/30 px-6 text-lg font-semibold leading-relaxed text-ink md:text-xl">
              Traders who improve fastest use it to say no more often, not to
              click buy more often.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Start Analyzing */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <div className="rounded-2xl border border-dashed border-border bg-deep p-8 text-center md:p-10">
              <h2 className="mb-4 text-2xl font-extrabold text-ink md:text-3xl">
                Start <span className="text-gradient-brand">Analyzing</span>
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-muted-dark">
                Upload a clean chart with price axis, time axis, and volume
                visible. The AI Scalp Analyzer returns a full read before your
                next candle closes.
              </p>
              <Button to="/get-started" size="lg" className="group">
                Start Free Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
