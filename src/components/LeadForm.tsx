import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'

interface LeadFormProps {
  submitLabel: string
  /** Optional heading rendered above the fields */
  formHeading?: ReactNode
}

/** Backend that receives the lead (user-provided mail handler). */
const LEAD_ENDPOINT = 'https://quantryxtech.com/homeMailAction.php'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FieldErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  agreed?: string
}

const inputBase =
  'w-full rounded-lg border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent/60'
const inputOk = 'border-border'
const inputBad = 'border-danger'

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="form-error mt-1.5 text-xs font-semibold text-danger" role="alert">
      {message}
    </p>
  )
}

/** Shared lead-capture form (Get Started + Contact pages).
    Validation mirrors the reference form: inline field errors, no native bubbles. */
export function LeadForm({ submitLabel, formHeading }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(true)
  const [website, setWebsite] = useState('') // honeypot
  const [errors, setErrors] = useState<FieldErrors>({})
  const [backendError, setBackendError] = useState('')
  const phoneRef = useRef<HTMLInputElement>(null)
  const itiRef = useRef<ReturnType<typeof intlTelInput> | null>(null)
  const navigate = useNavigate()

  // International phone input — same widget as the reference site.
  // Defaults to UK, then refines the country from the visitor's IP.
  useEffect(() => {
    const input = phoneRef.current
    if (!input) return
    const iti = intlTelInput(input, {
      separateDialCode: true,
      initialCountry: 'gb',
      // Popular countries first, then the rest A–Z (like the reference page)
      countryOrder: ['gb', 'us', 'ca', 'au', 'de', 'fr', 'es', 'it'],
      autoPlaceholder: 'off',
    })
    itiRef.current = iti
    input.placeholder = '07123 456789'

    let destroyed = false
    fetch('https://ipwho.is/')
      .then((res) => res.json())
      .then((data) => {
        if (!destroyed && data?.country_code) {
          iti.setCountry(data.country_code.toLowerCase())
        }
      })
      .catch(() => {
        // Offline or blocked — keep the UK default
      })

    return () => {
      destroyed = true
      itiRef.current = null
      iti.destroy()
    }
  }, [])

  const clearError = (key: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const validate = (): FieldErrors => {
    const errs: FieldErrors = {}
    if (firstName.trim() === '') errs.firstName = 'Please enter your first name.'
    if (lastName.trim() === '') errs.lastName = 'Please enter your last name.'
    if (!EMAIL_RE.test(email.trim())) errs.email = 'Please enter a valid email address.'
    const phoneDigits = (phoneRef.current?.value ?? '').replace(/\D/g, '')
    // Valid only with exactly 10 digits — anything shorter or longer is rejected
    if (phoneDigits.length !== 10) errs.phone = 'Please enter a valid phone number.'
    if (!agreed) errs.agreed = 'Please accept the Privacy Policy to continue.'
    return errs
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

    const errs = validate()
    // Always replace the whole set — this also clears stale errors
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      return
    }

    // Honeypot filled → bot. Pretend success without posting.
    if (website.trim() !== '') {
      navigate('/thank-you', { state: { firstName, email } })
      return
    }

    setStatus('sending')
    try {
      const countryData = itiRef.current?.getSelectedCountryData() as
        | { dialCode?: string; name?: string }
        | undefined
      const payload = new URLSearchParams({
        name: `${firstName} ${lastName}`.trim(),
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phoneRef.current?.value ?? '',
        dial_code: countryData?.dialCode ?? '',
        country: countryData?.name ?? '',
        source_page: window.location.pathname,
        form_name: 'homepage_lead',
        website,
      })
      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      })

      // The endpoint answers with JSON even on failure (e.g. rate limits),
      // so treat { status: "error" } as a failed submission.
      let ok = res.ok
      let backendMessage = ''
      if (ok) {
        const text = await res.text()
        try {
          const json = JSON.parse(text) as { status?: string; message?: string }
          if (json && json.status === 'error') {
            ok = false
            backendMessage = json.message ?? ''
          }
        } catch {
          // Not JSON — assume the submission was accepted
        }
      }
      if (!ok) {
        setBackendError(backendMessage || `The server rejected the request (HTTP ${res.status}).`)
        setStatus('error')
        return
      }

      navigate('/thank-you', { state: { firstName, email } })
    } catch {
      setBackendError('')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
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
            onChange={(e) => {
              setFirstName(e.target.value)
              clearError('firstName')
            }}
            aria-invalid={!!errors.firstName}
            placeholder="John"
            className={`${inputBase} ${errors.firstName ? inputBad : inputOk}`}
          />
          <FieldError message={errors.firstName} />
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
            onChange={(e) => {
              setLastName(e.target.value)
              clearError('lastName')
            }}
            aria-invalid={!!errors.lastName}
            placeholder="Doe"
            className={`${inputBase} ${errors.lastName ? inputBad : inputOk}`}
          />
          <FieldError message={errors.lastName} />
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
          onChange={(e) => {
            setEmail(e.target.value)
            clearError('email')
          }}
          aria-invalid={!!errors.email}
          placeholder="you@example.com"
          className={`${inputBase} ${errors.email ? inputBad : inputOk}`}
        />
        <FieldError message={errors.email} />
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
          onChange={() => clearError('phone')}
          aria-invalid={!!errors.phone}
          className={`gs-phone ${inputBase} ${errors.phone ? inputBad : inputOk}`}
        />
        <FieldError message={errors.phone} />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
      />

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked)
              clearError('agreed')
            }}
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
        <FieldError message={errors.agreed} />
      </div>

      {status === 'error' && (
        <p className="rounded-lg border border-danger/30 bg-danger/5 p-3.5 text-sm leading-relaxed text-muted-dark" role="alert">
          {backendError
            ? `${backendError} Please try again, or email us directly at `
            : 'Something went wrong while sending your details. Please try again, or email us directly at '}
          <a
            href="mailto:support@snap-traderai.com"
            className="font-semibold text-accent hover:underline"
          >
            support@snap-traderai.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary btn-lg group w-full cursor-pointer disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : submitLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
