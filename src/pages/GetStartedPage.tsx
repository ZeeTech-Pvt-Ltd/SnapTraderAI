import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'
import { Reveal } from '../components/ui/Reveal'

const TRUST_POINTS = [
  'Paper trading first',
  'Data labels on everything',
  'No profit guarantees — ever',
]

export function GetStartedPage() {
  const [sent, setSent] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(true)
  const phoneRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.title = 'Get Started — Free | SnapTrader AI'
  }, [])

  // International phone input — same widget as the reference page
  useEffect(() => {
    const input = phoneRef.current
    if (!input) return
    const iti = intlTelInput(input, {
      separateDialCode: true,
      initialCountry: 'us',
      // Popular countries first, then the rest A–Z (like the reference page)
      countryOrder: ['us', 'gb', 'ca', 'au', 'de', 'fr', 'es', 'it'],
      autoPlaceholder: 'off',
    })
    input.placeholder = '201-555-0123'
    return () => iti.destroy()
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-deep pt-[72px]">
      {/* Page header */}
      <section className="relative overflow-hidden bg-deep pb-8 pt-14 md:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[400px] w-[400px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <h1 className="mb-5 text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              Start Analysing — <span className="text-gradient-brand">Free</span>
            </h1>
            <p className="text-base leading-relaxed text-muted-dark md:text-lg">
              No credit card. No deposit required.
            </p>
            {/* Trust points live above the form so the phone-country
                dropdown never overlaps them */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-success" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-navy p-6 shadow-card-lg md:p-8">
              {sent ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15">
                    <CheckCircle2 className="h-7 w-7 text-success" />
                  </span>
                  <h2 className="mb-2 text-xl font-extrabold text-ink">
                    You're In, {firstName.trim() || 'Trader'}!
                  </h2>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-dark">
                    We've sent your access details to{' '}
                    <span className="font-semibold text-ink">
                      {email || 'your email'}
                    </span>
                    . Start with paper trading — no real capital required.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 cursor-pointer text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    Fill the form again
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="gs-first" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="gs-first"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className="w-full rounded-lg border border-border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent/60"
                      />
                    </div>
                    <div>
                      <label htmlFor="gs-last" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="gs-last"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full rounded-lg border border-border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="gs-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      id="gs-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent/60"
                    />
                  </div>

                  <div>
                    <label htmlFor="gs-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      id="gs-phone"
                      type="tel"
                      required
                      ref={phoneRef}
                      autoComplete="tel"
                      className="gs-phone w-full rounded-lg border border-border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent/60"
                    />
                  </div>

                  {/* Honeypot — hidden from humans, catches bots */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#0090c8]"
                    />
                    <span className="text-xs leading-relaxed text-muted-dark">
                      I agree to the{' '}
                      <span className="font-semibold text-accent">Privacy Policy</span>{' '}
                      and understand that Snap Trader AI provides analysis, not
                      financial advice.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg group w-full cursor-pointer"
                  >
                    Start Free Access
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  )
}
