import { useEffect, useState, type FormEvent } from 'react'
import { CheckCircle2, Clock, Mail, MessageSquare, Send } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'

const CONTACT_INFO = [
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['support@snap-traderai.com', 'We reply within 24 hours'],
  },
  {
    icon: Clock,
    title: 'Support Hours',
    lines: ['Monday – Friday', '09:00 – 18:00 (GMT)'],
  },
  {
    icon: MessageSquare,
    title: 'Quick Answers',
    lines: ['Check the FAQ first', 'Most questions are answered there'],
  },
]

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('General question')
  const [message, setMessage] = useState('')

  useEffect(() => {
    document.title = 'Contact | SnapTrader AI'
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-deep pt-[72px]">
      {/* Page header */}
      <section className="relative overflow-hidden bg-deep pb-10 pt-14 md:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[400px] w-[400px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <h1 className="mb-5 max-w-[600px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              Get in <span className="text-gradient-brand">Touch</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-dark md:text-lg">
              Questions about the platform, your account, or our AI trading
              agents? We're here to help — reach out any time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact body */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-navy p-6 shadow-card">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="mb-1.5 text-base font-bold text-ink">{item.title}</h2>
                      <p className="text-sm font-semibold text-muted-dark">{item.lines[0]}</p>
                      <p className="text-xs text-ink-soft">{item.lines[1]}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={270}>
                <div className="rounded-2xl border border-border bg-navy p-6 shadow-card">
                  <p className="text-sm leading-relaxed text-muted-dark">
                    <span className="font-bold text-ink">Note:</span> Snap Trader
                    AI is a research platform — not a broker. We do not accept
                    deposits, hold funds or provide financial advice.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-border bg-navy p-6 shadow-card md:p-8">
                {sent ? (
                  <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                    <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15">
                      <CheckCircle2 className="h-7 w-7 text-success" />
                    </span>
                    <h2 className="mb-2 text-xl font-extrabold text-ink">
                      Message Sent
                    </h2>
                    <p className="max-w-sm text-sm leading-relaxed text-muted-dark">
                      Thanks {name.trim() || 'for reaching out'} — we'll get back
                      to you at {email || 'your email'} within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 cursor-pointer text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="flex h-full flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Smith"
                          className="w-full rounded-lg border border-border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent/60"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full rounded-lg border border-border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent/60"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full cursor-pointer appearance-none rounded-lg border border-border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                      >
                        {[
                          'General question',
                          'Account & access',
                          'AI trading agents',
                          'Partnership',
                          'Report an issue',
                        ].map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="contact-message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-soft">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        placeholder="How can we help?"
                        className="w-full resize-none rounded-lg border border-border bg-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent/60"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg group w-full cursor-pointer"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
