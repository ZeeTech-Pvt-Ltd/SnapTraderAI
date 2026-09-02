import { useEffect } from 'react'
import { ArrowRight, Home, LineChart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

export function NotFoundPage() {
  const { t, i18n } = useTranslation()

  // No SEO entry for the catch-all route — set the title here, per language.
  useEffect(() => {
    document.title = t('Page Not Found | SnapTrader AI')
  }, [t, i18n.language])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-deep px-4 pt-[72px] pb-16 text-center">
      <Reveal>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <LineChart className="h-7 w-7" />
        </span>
        <h1 className="mb-4 font-mono text-[clamp(4rem,12vw,8rem)] font-black leading-none tracking-tight">
          <span className="text-gradient-brand">404</span>
        </h1>
        <h2 className="mb-3 text-2xl font-extrabold text-ink md:text-3xl">
          {t("This Chart Doesn't Exist")}
        </h2>
        <p className="mx-auto mb-8 max-w-md text-muted-dark">
          {t("The page you're looking for was moved, renamed, or never existed in the first place. Just like a bad trade — cut it and move on.")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/" size="lg" className="group">
            <Home className="h-4 w-4" />
            {t('Back to Homepage')}
          </Button>
          <Button to="/leaderboard" variant="outline" size="lg" className="group">
            {t('View Leaderboard')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </Reveal>
    </div>
  )
}
