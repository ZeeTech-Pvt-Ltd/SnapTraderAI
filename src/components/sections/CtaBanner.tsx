import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../../i18n'
import { Reveal } from '../ui/Reveal'

export function CtaBanner() {
  const { t } = useTranslation()

  // Gradient covers the tail of the headline in every language.
  const [headingHead, headingTail] = splitStyledTail(
    t('Ready to Snap Trade Like a Pro?'),
    3,
  )

  return (
    <section id="get-started" className="relative overflow-hidden bg-deep py-20 lg:py-28">
      {/* Center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, rgb(0 180 230 / 0.3) 0%, rgb(0 200 172 / 0.2) 50%, transparent 70%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal>
          <h2 className="mb-5 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.1] tracking-tight text-ink">
            {headingHead}{' '}
            <span className="text-gradient-brand">{headingTail}</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-dark">
            {t('Join 10,000+ traders using SnapTrader AI — the Snap Trader platform — for clearer charts, honest signals and risk-aware decision making. Start free: no deposit, no card, no hype.')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/get-started" size="lg" className="group">
              {t('Start Free Access')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              {t('See How It Works')}
            </Button>
          </div>
          <p className="mt-6 text-xs text-ink-soft">
            {t('Trading involves significant risk of loss. Snap Trader AI provides analysis — never financial advice.')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
