import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

/** Slim mid-page conversion band — converts visitors who've read the
    product sections but haven't scrolled to the bottom yet. */
export function MidPageCta() {
  return (
    <section className="border-y border-border bg-navy py-12">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-deep p-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-xl font-extrabold text-ink md:text-2xl">
                Ready to put the plan into{' '}
                <span className="text-gradient-brand">action?</span>
              </h2>
              <p className="mt-1 text-sm text-muted-dark md:text-base">
                Start free — no credit card, no deposit. Your first chart
                analysis in under a minute.
              </p>
            </div>
            <Button to="/get-started" size="lg" className="group shrink-0">
              Start Free Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
