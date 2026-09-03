import {
  ArrowRight,
  Award,
  BookOpen,
  Clock,
  Cpu,
  CreditCard,
  FileDown,
  GraduationCap,
  ListChecks,
  MessageSquare,
  MonitorSmartphone,
  MousePointerClick,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'

const WHY_START_HERE = [
  { icon: Clock, title: 'Bite-sized modules', description: '5–7 minutes each, built for people with day jobs' },
  { icon: MousePointerClick, title: 'Learn by doing', description: 'every lesson ends with a live-chart exercise' },
  { icon: MessageSquare, title: 'Plain English', description: 'no textbook theory, no filler' },
  { icon: ShieldCheck, title: 'Risk taught first', description: 'protect capital before you chase returns' },
  { icon: Cpu, title: 'AI-assisted', description: 'see why a signal fires, not just that it fired' },
]

const LEVELS = [
  {
    track: 'TRACK 01',
    icon: BookOpen,
    title: 'Beginner — Foundations',
    points: [
      'How markets actually move: buyers, sellers, liquidity',
      'Order types, spreads and leverage — and what each one costs you',
      'Reading candles and timeframes without overthinking',
    ],
  },
  {
    track: 'TRACK 02',
    icon: TrendingUp,
    title: 'Intermediate — Strategy',
    points: [
      'Support, resistance and trend structure',
      'Building one repeatable, rule-based setup',
      'Position sizing, stop placement, risk-reward math',
    ],
  },
  {
    track: 'TRACK 03',
    icon: Award,
    title: 'Advanced — Edge',
    points: [
      'Backtesting a strategy before real money touches it',
      'Psychology: drawdowns, patience, discipline',
      'Using AI signals as confirmation — never as a crutch',
    ],
  },
]

const WHATS_INSIDE = [
  { icon: PlayCircle, title: 'Video walkthroughs', description: 'with written summaries' },
  { icon: FileDown, title: 'Downloadable cheat sheets', description: 'patterns, indicators, risk formulas' },
  { icon: ListChecks, title: 'Quick quizzes', description: 'after every module' },
  { icon: BookOpen, title: '200+ term trading glossary', description: '' },
  { icon: TrendingUp, title: 'Weekly market breakdowns', description: 'from our analysts' },
]

const STEPS = [
  { title: 'Place yourself', description: 'a 2-minute quiz picks your starting track' },
  { title: 'Learn', description: 'one module a day, on any device' },
  { title: 'Practise', description: 'test setups in demo mode, no money at risk' },
  { title: 'Apply', description: 'enter live markets with a plan, not a guess' },
]

const FOR_BEGINNERS = [
  { icon: Sparkles, title: 'No prior experience needed' },
  { icon: CreditCard, title: 'No card required for the Foundations track' },
  { icon: MonitorSmartphone, title: 'Progress syncs across your devices' },
  { icon: Award, title: 'Certificate when you finish a track' },
]

export function AcademyPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of each headline in every language.
  const [heroHead, heroTail] = splitStyledTail(
    t('Trading Academy — Learn to Trade, with AI on Your Side'),
    4,
  )
  const [ctaHead, ctaTail] = splitStyledTail(
    t('Your first module is free. Your first mistake shouldn’t cost you.'),
    2,
  )

  return (
    <div className="bg-deep pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep pb-20 pt-20 md:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgb(0 160 220 / 0.14) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <Reveal>
              <h1 className="mb-5 max-w-[640px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
                {heroHead} <span className="text-gradient-brand">{heroTail}</span>
              </h1>
              <p className="mb-3 text-lg font-semibold leading-relaxed text-ink">
                {t('Short lessons. Real charts. Zero jargon.')}
              </p>
              <p className="mb-8 max-w-[560px] text-lg leading-relaxed text-muted-dark">
                {t('Go from “what even is a candlestick?” to reading market structure with confidence — at your own pace.')}
              </p>
              <Button to="/get-started" size="lg" className="group">
                {t('Start Free')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Reveal>

            {/* Level picker visual */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 200 172 / 0.16) 0%, transparent 70%)' }}
                />
                <div className="overflow-hidden rounded-2xl border border-border bg-navy shadow-card-lg">
                  <div className="gradient-brand flex items-center justify-between px-6 py-4">
                    <p className="flex items-center gap-2 font-mono text-xs font-bold text-[#04212b]">
                      <GraduationCap className="h-4 w-4" />
                      {t('PICK YOUR LEVEL')}
                    </p>
                    <p className="font-mono text-[10px] font-bold text-[#04212b]/70">{t('3 TRACKS')}</p>
                  </div>
                  {LEVELS.map((l, i) => (
                    <div
                      key={l.title}
                      className={`group flex items-center gap-4 p-5 transition-colors hover:bg-medium-navy/40 ${
                        i > 0 ? 'border-t border-border' : ''
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                        <l.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent">
                          {t(l.track)}
                        </p>
                        <p className="text-sm font-bold text-ink">{t(l.title)}</p>
                      </div>
                      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-ink-soft/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Traders Start Here */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Why Traders Start Here')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {WHY_START_HERE.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border bg-deep p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-lg">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70" />
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mb-1.5 text-sm font-bold text-ink">{t(w.title)}</h2>
                  <p className="text-xs leading-relaxed text-muted-dark">{t(w.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pick Your Level */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Pick Your Level')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {LEVELS.map((l, i) => (
              <Reveal key={l.title} delay={i * 100}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-navy p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-lg">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70" />
                  {i === 0 && (
                    <span className="absolute right-4 top-4 rounded-full gradient-brand px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wider text-[#04212b]">
                      {t('Start here')}
                    </span>
                  )}
                  {i === LEVELS.length - 1 && (
                    <span className="absolute right-4 top-4 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wider text-violet-500">
                      {t('Pro')}
                    </span>
                  )}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 hover:scale-110">
                      <l.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                      {t(l.track)}
                    </span>
                  </div>
                  <h2 className="mb-4 text-base font-bold text-ink">{t(l.title)}</h2>
                  <ul className="space-y-3">
                    {l.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-dark">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-brand" />
                        {t(point)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('What’s Inside')} />
          </Reveal>
          <Reveal>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-deep shadow-card">
              {WHATS_INSIDE.map((w, i) => (
                <div
                  key={w.title}
                  className={`group flex items-center gap-4 p-5 transition-colors hover:bg-medium-navy/40 ${
                    i > 0 ? 'border-t border-border' : ''
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-accent/15">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-bold text-ink md:text-base">{t(w.title)}</h2>
                    {w.description && (
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-dark md:text-sm">
                        {t(w.description)}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-soft/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-border bg-medium-navy/30 px-5 py-3.5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-success">
                  {t('5/5 included with every track')}
                </p>
                <p className="font-mono text-[9px] text-ink-soft/60">SNAP-ACADEMY</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title="How It Works" />
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 bg-navy font-mono text-xs font-black text-accent">
                      {i + 1}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-[2px] flex-1 gradient-brand md:block"
                      />
                    )}
                  </div>
                  <h3 className="mb-1.5 text-base font-bold text-ink">{t(s.title)}</h3>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(s.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Real Beginners — tinted panel */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl border border-border px-6 py-14 shadow-card md:px-12"
              style={{
                background:
                  'linear-gradient(135deg, #EDF7FC 0%, #F4FAFD 45%, #EBF8F3 100%)',
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full blur-3xl"
                style={{ background: 'rgb(255 255 255 / 0.55)' }}
              />
              <div className="relative z-10">
                <SectionHeader
                  title={t('Built for Real Beginners')}
                  description={t('Most trading courses assume you already know the language. This academy doesn’t.')}
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {FOR_BEGINNERS.map((point, i) => (
                    <Reveal key={point.title} delay={i * 70}>
                      <div className="flex items-center gap-4 rounded-xl border border-border bg-navy p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
                        <span className="gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#04212b]">
                          <point.icon className="h-5 w-5" />
                        </span>
                        <p className="text-sm font-semibold text-muted-dark">{t(point.title)}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="mb-4 text-3xl font-extrabold text-ink md:text-4xl">
              {ctaHead} <span className="text-gradient-brand">{ctaTail}</span>
            </h2>
            <div className="mt-6">
              <Button to="/get-started" size="lg" className="group">
                {t('Start Learning')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
