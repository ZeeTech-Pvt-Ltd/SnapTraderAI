import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Mail, PlayCircle, Search } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

interface ThankYouState {
  firstName?: string
  email?: string
}

const NEXT_STEPS = [
  {
    icon: Mail,
    title: 'Check your inbox',
    description: 'Your welcome details are on their way to your email.',
  },
  {
    icon: PlayCircle,
    title: 'Start with paper trading',
    description: 'Practise on demo funds before risking real capital.',
  },
  {
    icon: Search,
    title: 'Explore the AI products',
    description: 'Analyse charts, test strategies and read the live leaderboard.',
  },
]

export function ThankYouPage() {
  const location = useLocation()
  const state = (location.state ?? {}) as ThankYouState
  const name = state.firstName?.trim()

  useEffect(() => {
    document.title = 'Thank You | SnapTrader AI'
  }, [])

  return (
    <div className="bg-deep pt-[72px]">
      <section className="relative overflow-hidden bg-deep py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[380px] w-[380px]"
          style={{ background: 'radial-gradient(circle, rgb(0 200 172 / 0.12) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <span className="gradient-brand mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-glow">
              <CheckCircle2 className="h-10 w-10 text-[#04212b]" />
            </span>
            <h1 className="mb-4 text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              Thank You{name ? `, ${name}` : ''}!{' '}
              <span className="text-gradient-brand">You&apos;re In.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-dark">
              Your details have been received and your free access is being
              prepared. Keep an eye on{' '}
              <span className="font-semibold text-ink">
                {state.email || 'your inbox'}
              </span>{' '}
              — we&apos;ll be in touch shortly.
            </p>

            {/* Next steps */}
            <div className="mb-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
              {NEXT_STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-border bg-navy p-6 shadow-card">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <h2 className="mb-1.5 text-sm font-bold text-ink">{step.title}</h2>
                    <p className="text-xs leading-relaxed text-muted-dark">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/" size="lg" className="group">
                Back to Homepage
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button to="/#tools" variant="outline" size="lg">
                Explore AI Products
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
