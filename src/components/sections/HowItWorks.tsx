import { useState } from 'react'
import { CheckCircle2, Circle } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import { TerminalFrame } from '../ui/TerminalFrame'

const STEPS = [
  {
    title: 'Upload Your Chart',
    description: 'Screenshot any chart or pick a market — stocks, forex, crypto, indices and more.',
  },
  {
    title: 'AI Detects Patterns',
    description: '26 indicators scan trend, momentum, support and resistance across 4 timeframes.',
  },
  {
    title: 'Review the Signal',
    description: 'Get entry, exit and stop-loss levels with confidence scoring and risk-to-reward.',
  },
  {
    title: 'You Stay in Control',
    description: 'Execution happens via your own broker — the platform never touches your funds.',
  },
]

export function HowItWorks() {
  const [active, setActive] = useState(0)

  return (
    <section id="how-it-works" className="border-y border-border bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title="See It in Action — Four Steps, Full Transparency"
            description="From chart to signal in seconds. Follow the pipeline and watch the data labels every step of the way."
          />
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Steps */}
          <div className="order-2 lg:order-1">
            <ol className="space-y-3">
              {STEPS.map((step, i) => {
                const isActive = i === active
                const isDone = i < active
                return (
                  <li key={step.title}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className={`flex w-full cursor-pointer items-start gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? 'border-accent/40 bg-accent/5'
                          : 'border-transparent hover:border-border hover:bg-medium-navy/40'
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ${
                          isActive
                            ? 'border-accent bg-accent text-[#04212b]'
                            : isDone
                              ? 'border-success bg-success text-[#04211b]'
                              : 'border-border text-ink-soft'
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                      </span>
                      <span>
                        <span
                          className={`block text-sm font-bold transition-colors ${
                            isActive ? 'text-white' : 'text-ink'
                          }`}
                        >
                          {step.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                          {step.description}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* Mockup */}
          <div className="order-1 lg:order-2">
            <Reveal delay={120}>
              <TerminalFrame
                title="Snap Trader AI · Analysis Pipeline"
                titleExtra={
                  <span className="font-mono text-[9px] font-bold text-accent">
                    STEP {active + 1}/4
                  </span>
                }
              >
                <div className="space-y-2.5 p-4">
                  {/* Step 1: upload */}
                  <div
                    className={`flex items-center gap-3 rounded-lg border p-3 transition-all duration-300 ${
                      active === 0
                        ? 'border-accent/40 bg-accent/5'
                        : 'border-border bg-[#080E18] opacity-60'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        active === 0 ? 'bg-accent/20 text-accent' : 'bg-medium-navy text-ink-soft'
                      }`}
                    >
                      {active > 0 ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] font-bold text-white">
                        CHART UPLOADED — EUR/USD · 1H
                      </p>
                      <p className="font-mono text-[9px] text-ink-soft">
                        Screenshot received · 3840×2160 · PNG
                      </p>
                    </div>
                    <span className="ml-auto shrink-0 rounded-full bg-success/10 px-2 py-0.5 font-mono text-[8px] font-bold text-success">
                      OK
                    </span>
                  </div>

                  {/* Step 2: scan */}
                  <div
                    className={`flex items-center gap-3 rounded-lg border p-3 transition-all duration-300 ${
                      active === 1
                        ? 'border-accent/40 bg-accent/5'
                        : 'border-border bg-[#080E18] opacity-60'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        active === 1 ? 'bg-accent/20 text-accent' : 'bg-medium-navy text-ink-soft'
                      }`}
                    >
                      {active > 1 ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] font-bold text-white">
                        SCANNING 26 INDICATORS · 4 TIMEFRAMES
                      </p>
                      {active >= 1 ? (
                        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-[#1A2A3D]">
                          <div
                            className="h-full rounded-full gradient-brand transition-all duration-700"
                            style={{ width: active === 1 ? '68%' : '100%' }}
                          />
                        </div>
                      ) : (
                        <p className="font-mono text-[9px] text-ink-soft">Waiting for chart…</p>
                      )}
                    </div>
                  </div>

                  {/* Step 3: signal */}
                  <div
                    className={`rounded-lg border p-3 transition-all duration-300 ${
                      active === 2
                        ? 'border-success/40 bg-success/5'
                        : 'border-border bg-[#080E18] opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          active === 2 ? 'bg-success/20 text-success' : 'bg-medium-navy text-ink-soft'
                        }`}
                      >
                        {active > 2 ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[10px] font-bold text-white">
                          SIGNAL READY — BUY · 87% CONFIDENCE
                        </p>
                        <p className="font-mono text-[9px] text-ink-soft">
                          Entry 1.0842 · Exit 1.0918 · Stop 1.0804 · R:R 1:2.1
                        </p>
                      </div>
                      {active >= 2 && (
                        <span className="shrink-0 rounded-full bg-success/15 px-2 py-0.5 font-mono text-[8px] font-bold text-success">
                          VERIFY
                        </span>
                      )}
                    </div>
                    {active >= 2 && (
                      <p className="mt-2 rounded-md bg-success/10 px-2.5 py-1.5 font-mono text-[8px] text-success/80">
                        Signal is an observation — not financial advice. Verify before acting.
                      </p>
                    )}
                  </div>

                  {/* Step 4: broker */}
                  <div
                    className={`flex items-center gap-3 rounded-lg border p-3 transition-all duration-300 ${
                      active === 3
                        ? 'border-accent/40 bg-accent/5'
                        : 'border-border bg-[#080E18] opacity-60'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        active === 3 ? 'bg-accent/20 text-accent' : 'bg-medium-navy text-ink-soft'
                      }`}
                    >
                      <Circle className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] font-bold text-white">
                        EXECUTION — VIA YOUR BROKER
                      </p>
                      <p className="font-mono text-[9px] text-ink-soft">
                        Execution: manual (your control) · Snap Trader AI never holds funds
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[8px] font-bold text-accent">
                      CONNECTED
                    </span>
                  </div>
                </div>
              </TerminalFrame>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
