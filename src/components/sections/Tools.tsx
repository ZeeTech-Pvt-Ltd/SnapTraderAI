import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { tools } from '../../content/tools'
import { useTranslation } from 'react-i18next'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Tools() {
  const { t } = useTranslation()

  return (
    <section id="tools" className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title={t('Research, Test, Decide — Six Tools Built for Traders Who Do Their Own Homework')}
            description={t('Each tool ships with transparent data labels and clear limitations. No hype, just structured analysis.')}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <Reveal key={t(tool.title)} delay={(i % 3) * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-navy p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-lg">
                {/* Gradient top hairline */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] gradient-brand opacity-70"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-2 font-mono text-5xl font-black text-ink/5 transition-colors duration-300 group-hover:text-accent/10"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'rgb(0 180 230 / 0.12)' }}
                />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-bold text-ink">{t(tool.title)}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-dark">
                  {t(tool.description)}
                </p>
                {tool.href.startsWith('/') ? (
                  <Link
                    to={tool.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    {t(tool.linkLabel)}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <a
                    href={tool.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    {t(tool.linkLabel)}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
