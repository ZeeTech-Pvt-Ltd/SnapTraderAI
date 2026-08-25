import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'

interface LeadFormProps {
  submitLabel: string
  successTitle: (firstName: string) => ReactNode
  successMessage: (firstName: string, email: string) => ReactNode
  retryLabel?: string
  /** Optional heading rendered above the fields */
  formHeading?: ReactNode
}

/** Shared lead-capture form (Get Started + Contact pages). */
export function LeadForm({
  submitLabel,
  successTitle,
  successMessage,
  retryLabel = 'Fill the form again',
  formHeading,
}: LeadFormProps) {
  const [sent, setSent] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(true)
  const phoneRef = useRef<HTMLInputElement>(null)

  // International phone input — same widget as the reference site
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

  if (sent) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15">
          <CheckCircle2 className="h-7 w-7 text-success" />
        </span>
        <h2 className="mb-2 text-xl font-extrabold text-ink">
          {successTitle(firstName)}
        </h2>
        <div className="max-w-sm text-sm leading-relaxed text-muted-dark">
          {successMessage(firstName, email)}
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 cursor-pointer text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {retryLabel}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      {formHeading && (
        <h2 className="mb-1 text-xl font-extrabold text-ink md:text-2xl">
          {formHeading}
        </h2>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-first" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
            First Name <span className="text-danger">*</span>
          </label>
          <input
            id="lead-first"
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
          <label htmlFor="lead-last" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
            Last Name <span className="text-danger">*</span>
          </label>
          <input
            id="lead-last"
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
        <label htmlFor="lead-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
          Email Address <span className="text-danger">*</span>
        </label>
        <input
          id="lead-email"
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
        <label htmlFor="lead-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
          Phone Number <span className="text-danger">*</span>
        </label>
        <input
          id="lead-phone"
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
          I have read and agree to the{' '}
          <Link
            to="/privacy-policy"
            className="font-semibold text-accent hover:underline"
          >
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link
            to="/terms-conditions"
            className="font-semibold text-accent hover:underline"
          >
            Terms &amp; Conditions
          </Link>
          .
        </span>
      </label>

      <button type="submit" className="btn btn-primary btn-lg group w-full cursor-pointer">
        {submitLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
