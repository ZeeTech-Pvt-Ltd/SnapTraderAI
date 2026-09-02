import { Link } from 'react-router-dom'
import { ChevronRight, Clock, Headset, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { LeadForm } from '../components/LeadForm'
import { Reveal } from '../components/ui/Reveal'

interface Channel {
  icon: typeof Mail
  title: string
  value: string
  sub?: string
  /** External/anchor link — renders a plain anchor */
  href?: string
  /** Internal route — renders a router Link */
  to?: string
}

const CHANNELS: Channel[] = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'support@snap-traderai.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:support@snap-traderai.com',
  },
  {
    icon: Headset,
    title: 'Live Support',
    value: 'Click here to live support',
    sub: 'Chat with us in real time',
    href: '#replain-link',
  },
  {
    icon: Clock,
    title: 'Support Hours',
    value: 'Monday – Friday · 09:00–18:00 GMT',
  },
]

export function ContactPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of the heading in every language.
  const [headingHead, headingTail] = splitStyledTail(t('Contact Us'))

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
              {headingHead} <span className="text-gradient-brand">{headingTail}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-dark md:text-lg">
              {t('If you have questions about Snap Trader AI, need assistance with the platform, or want to learn more about our services, feel free to reach out. Our team aims to respond as quickly as possible.')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact body */}
      <section className="bg-deep pb-20 lg:pb-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
            {/* Contact channels — one directory panel */}
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-border bg-navy shadow-card">
                {CHANNELS.map((channel, i) => {
                  const inner = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-accent/15">
                        <channel.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-ink">
                          {t(channel.title)}
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-accent">
                          {t(channel.value)}
                        </span>
                        {channel.sub && (
                          <span className="mt-0.5 block text-xs text-ink-soft">
                            {t(channel.sub)}
                          </span>
                        )}
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-ink-soft/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </>
                  )

                  return (
                    <div key={channel.title} className={i > 0 ? 'border-t border-border' : ''}>
                      {channel.to ? (
                        <Link
                          to={channel.to}
                          className="group flex items-center gap-4 p-5 transition-colors hover:bg-medium-navy/50"
                        >
                          {inner}
                        </Link>
                      ) : channel.href ? (
                        <a
                          href={channel.href}
                          className="group flex items-center gap-4 p-5 transition-colors hover:bg-medium-navy/50"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="group flex items-center gap-4 p-5">
                          {inner}
                        </div>
                      )}
                    </div>
                  )
                })}

              </div>

              {/* Get in Touch — from the reference contact page */}
              <div className="mt-6 rounded-2xl border border-border bg-navy p-6 shadow-card">
                <h2 className="mb-3 text-base font-bold text-ink">{t('Get in Touch')}</h2>
                <p className="text-sm leading-relaxed text-muted-dark">
                  {t('Please note that Snap Trader AI does not provide personalized financial or investment advice. Any questions related to trading decisions should be discussed with a qualified financial professional.')}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark">
                  {t('We appreciate your interest in Snap Trader AI and value your trust. Your feedback helps us improve and serve you better.')}
                </p>
              </div>
            </Reveal>

            {/* Form — same lead form as the Get Started page */}
            <Reveal delay={120}>
              <div className="rounded-2xl border border-border bg-navy p-6 shadow-card md:p-8">
                <LeadForm
                  formHeading={t('Explore Trading Opportunities')}
                  submitLabel={t('Register Now')}
                  formName="contact_us"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
