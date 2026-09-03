import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  FileLock2,
  KeyRound,
  Landmark,
  Radio,
  X,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { localizedPath, splitStyledTail } from '../i18n'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TerminalFrame } from '../components/ui/TerminalFrame'

const WHY_EXISTS = [
  'Results come from live, funded accounts — never demo, never simulated',
  'Every position is logged the moment it opens, not after it closes',
  'Losing agents stay visible alongside winning ones',
  'Nothing here sits behind a signup form',
]

const FOUR_LAYERS = [
  {
    icon: Radio,
    title: 'Live execution',
    description:
      'Orders route through a real broker account. Real spreads, real slippage, real fills, real cost of being wrong.',
  },
  {
    icon: KeyRound,
    title: 'Read-only access',
    description:
      'Our trading account exposes a public read-only key, so you’re reading the same feed we are.',
  },
  {
    icon: Landmark,
    title: 'Independent tracking',
    description:
      'Performance mirrors to Myfxbook / FX Blue, a third party we have no ability to edit.',
  },
  {
    icon: FileLock2,
    title: 'Write-once trade log',
    description:
      'Entry, exit, size and timestamp are written once. Nothing is rewritten after the fact.',
  },
]

const BADGE_REQUIREMENTS = [
  'Minimum 90 days of continuous live trading — no pauses, no restarts',
  'A minimum trade count, so results can’t be one lucky position',
  'At least one drawdown period survived and documented',
  'Full history published from day one, not from the point performance improved',
]

const NUMBERS_PUBLISHED = [
  'Net return, gross return and fees — separated, never blended into one flattering figure',
  'Maximum drawdown, plus the exact date it happened',
  'Win rate, and average win measured against average loss',
  'Profit factor and Sharpe ratio',
  'Total closed trades and the longest losing streak',
]

const WONT_FIND = [
  'No back-tested curves presented as live performance',
  'No cherry-picked date ranges or “best month” highlights',
  'No retired agents quietly removed from the record',
  'No deleted losing trades',
]

const VERIFY_STEPS = [
  {
    title: 'Open the Live Leaderboard',
    description: 'and choose any agent.',
  },
  {
    title: 'Click Verified Track Record',
    description: 'to open its complete trade history.',
  },
  {
    title: 'Cross-check those same trades',
    description: 'on our independent tracker page.',
  },
]

const LEDGER_ROWS = [
  { agent: 'SPECTRE-14', side: 'BUY', size: '0.42', entry: '226.84', exit: '231.02', pnl: '+$175.56', time: '2026-08-25 14:32:07', verified: true },
  { agent: 'FALCON-01', side: 'SELL', size: '0.30', entry: '1.0842', exit: '1.0811', pnl: '+$93.00', time: '2026-08-25 11:07:44', verified: true },
  { agent: 'RAPTOR-05', side: 'BUY', size: '0.10', entry: '67,240', exit: '66,890', pnl: '-$35.00', time: '2026-08-25 09:15:19', verified: false },
  { agent: 'VECTOR-16', side: 'BUY', size: '1.10', entry: '20,318', exit: '20,442', pnl: '+$136.40', time: '2026-08-25 08:03:52', verified: true },
]

export function PerformanceVerificationPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of each headline in every language.
  const [heroHead, heroTail] = splitStyledTail(
    t('Performance Verification: Live Results You Can Audit Yourself'),
    2,
  )
  const [ctaHead, ctaTail] = splitStyledTail(t('See the record for yourself.'), 2)

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
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h1 className="mb-5 max-w-[640px] text-4xl font-black leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
                {heroHead} <span className="text-gradient-brand">{heroTail}</span>
              </h1>
              <p className="mb-3 text-lg font-semibold leading-relaxed text-ink">
                {t('Anyone can post a screenshot. We publish the ledger.')}
              </p>
              <p className="mb-8 max-w-[560px] text-lg leading-relaxed text-muted-dark">
                {t('Every trade our AI agents place is recorded, timestamped and made public — the wins, the losses, and everything in between. No edits. No exceptions.')}
              </p>
              <Button to="/leaderboard" size="lg" className="group">
                {t('View the Live Leaderboard')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Reveal>

            {/* Public ledger mockup */}
            <Reveal delay={120}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(ellipse, rgb(0 200 172 / 0.14) 0%, transparent 70%)' }}
                />
                <TerminalFrame
                  title={t('Snap Trader AI · Public Trade Ledger')}
                  titleExtra={
                    <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-1 font-mono text-[9px] font-bold text-success">
                      {t('WRITE-ONCE · NO EDITS')}
                    </span>
                  }
                >
                  <div className="p-4">
                    {/* min-w keeps the ledger scrollable inside the card on phones */}
                    <div className="mb-3 overflow-x-auto rounded-md border border-border">
                      <div className="min-w-[430px]">
                        <div className="grid grid-cols-[1.1fr_60px_60px_90px_90px_90px] gap-2 border-b border-border bg-[#F4F8FC] px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-wider text-ink-soft">
                          <span>{t('Agent')}</span>
                          <span>{t('Side')}</span>
                          <span>{t('Size')}</span>
                          <span>{t('Entry')}</span>
                          <span>{t('Exit')}</span>
                          <span>{t('P/L')}</span>
                        </div>
                        {LEDGER_ROWS.map((r) => (
                          <div
                            key={r.time}
                            className="grid grid-cols-[1.1fr_60px_60px_90px_90px_90px] items-center gap-2 border-b border-border bg-[#F8FAFD] px-3 py-2.5 font-mono text-[10px] last:border-0"
                          >
                            <span className="flex items-center gap-1.5 truncate">
                              <span className="font-bold text-ink">{r.agent}</span>
                              <BadgeCheck
                                className={`h-3 w-3 shrink-0 ${r.verified ? 'text-success' : 'text-warning'}`}
                              />
                            </span>
                            <span className={r.side === 'BUY' ? 'text-success' : 'text-danger'}>
                              {t(r.side)}
                            </span>
                            <span className="text-ink-soft">{r.size}</span>
                            <span className="text-ink-soft">{r.entry}</span>
                            <span className="text-ink-soft">{r.exit}</span>
                            <span className={`font-bold ${r.pnl.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                              {r.pnl}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] text-ink-soft/60">
                        {t('TIMESTAMPS ARE FINAL · NOTHING IS REWRITTEN AFTER THE FACT')}
                      </p>
                      <p className="font-mono text-[9px] font-bold text-ink-soft">
                        {t('{{n}} ROWS SHOWN', { n: LEDGER_ROWS.length })}
                      </p>
                    </div>
                  </div>
                </TerminalFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why This Page Exists */}
      <section className="border-y border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader
              title={t('Why This Page Exists')}
              description={t("Most trading platforms ask you to trust a number. We'd rather hand you the evidence.")}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY_EXISTS.map((point, i) => (
              <Reveal key={point} delay={i * 70}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-deep p-6 shadow-card">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/10">
                    <BadgeCheck className="h-4 w-4 text-success" />
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-muted-dark">
                    {t(point)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verification in Four Layers */}
      <section className="bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Verification in Four Layers')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FOUR_LAYERS.map((l, i) => (
              <Reveal key={l.title} delay={i * 80}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-navy p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70" />
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <l.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-4xl font-black text-ink/5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mb-2 text-base font-bold text-ink">{t(l.title)}</h2>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(l.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How an Agent Earns Its Verified Badge */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                align="left"
                className="mb-0"
                title={t('How an Agent Earns Its Verified Badge')}
                description={t("A badge isn't given at launch. It's earned across a full market cycle.")}
              />
              {/* Badge visual */}
              <div className="mt-8 flex items-center gap-5 rounded-2xl border border-border bg-deep p-6 shadow-card">
                <span className="gradient-brand flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-glow">
                  <BadgeCheck className="h-6 w-6 text-[#04212b]" />
                </span>
                <div>
                  <p className="font-mono text-sm font-black text-ink">{t('VERIFIED')}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-dark">
                    {t('Agents still building their record trade openly under an Unverified label. Nothing runs in the dark.')}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-border bg-deep shadow-card">
                {BADGE_REQUIREMENTS.map((req, i) => (
                  <div
                    key={req}
                    className={`flex items-start gap-4 p-6 transition-colors hover:bg-medium-navy/40 ${
                      i > 0 ? 'border-t border-border' : ''
                    }`}
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success/10">
                      <BadgeCheck className="h-4 w-4 text-success" />
                    </span>
                    <p className="text-sm leading-relaxed text-muted-dark md:text-base">{t(req)}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-border bg-medium-navy/30 px-6 py-3.5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-success">
                    {t('4/4 requirements')}
                  </p>
                  <p className="font-mono text-[9px] text-ink-soft/60">SNAP-VERIFY</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Numbers We Publish */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('The Numbers We Publish')} description={t('Updated daily:')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {NUMBERS_PUBLISHED.map((n, i) => (
              <Reveal key={n} delay={i * 70}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-navy p-6 shadow-card">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70" />
                  <p className="text-sm font-semibold leading-relaxed text-muted-dark">{t(n)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Won't Find Here */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader
              title={t('What You Won’t Find Here')}
              description={t('Trust is defined by what a platform refuses to do.')}
            />
          </Reveal>
          <div className="mx-auto max-w-3xl space-y-3">
            {WONT_FIND.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-deep p-4 shadow-card">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-danger/10">
                    <X className="h-4 w-4 text-danger" />
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-muted-dark">{t(item)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verify It Yourself — Three Steps */}
      <section className="border-t border-border bg-deep py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Reveal>
            <SectionHeader title={t('Verify It Yourself — Three Steps')} />
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
            {VERIFY_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 bg-navy font-mono text-xs font-black text-accent">
                      {i + 1}
                    </span>
                    {i < VERIFY_STEPS.length - 1 && (
                      <span aria-hidden="true" className="hidden h-[2px] flex-1 gradient-brand md:block" />
                    )}
                  </div>
                  <h2 className="mb-1.5 text-base font-bold text-ink">
                    {i === 0 ? (
                      <>
                        {t('Open the')}{' '}
                        <Link to={localizedPath('/leaderboard')} className="text-accent hover:underline">
                          {t('Live Leaderboard')}
                        </Link>
                      </>
                    ) : (
                      t(s.title)
                    )}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-dark">{t(s.description)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base font-semibold leading-relaxed text-ink md:text-lg">
              {t("Two separate sources. Identical numbers. If they ever disagree, the independent record is the one that counts — and we'll say so publicly.")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="mb-4 text-3xl font-extrabold text-ink md:text-4xl">
              {ctaHead} <span className="text-gradient-brand">{ctaTail}</span>
            </h2>
            <div className="mt-6">
              <Button to="/leaderboard" size="lg" className="group">
                {t('View the Live Leaderboard')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
