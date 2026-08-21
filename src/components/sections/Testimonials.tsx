import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star, StarHalf } from 'lucide-react'
import { testimonials } from '../../content/testimonials'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

const AUTOPLAY_MS = 6000

function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => {
        if (i + 1 <= value) {
          return <Star key={i} className="h-4 w-4 fill-warning text-warning" />
        }
        return <StarHalf key={i} className="h-4 w-4 text-warning" />
      })}
    </div>
  )
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const count = testimonials.length

  const goTo = useCallback((i: number) => {
    setIndex(((i % count) + count) % count)
  }, [count])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Autoplay, paused on hover/focus
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [next, paused])

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  return (
    <section className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionHeader
            title="Real Feedback From Platform Users"
            description="Individual experiences — trading outcomes vary."
          />
        </Reveal>

        <Reveal>
          <div
            className="relative mx-auto max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Track */}
            <div
              className="overflow-hidden rounded-2xl"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <figure
                    key={t.name}
                    aria-hidden={i !== index}
                    className={`w-full shrink-0 rounded-2xl border border-border bg-navy p-8 shadow-card transition-opacity duration-500 md:p-10 ${
                      i === index ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <Rating value={t.rating} />
                      <Quote className="h-6 w-6 text-accent/20" />
                    </div>
                    <blockquote className="mb-6 text-base leading-relaxed text-muted-dark md:text-lg">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <p className="text-sm font-bold text-white">{t.name}</p>
                        <p className="mt-0.5 text-xs text-ink-soft">{t.role}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-accent/15 bg-accent/10 px-2.5 py-1 text-[10px] font-medium text-accent">
                        Verified
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-navy text-ink-soft transition-colors hover:border-accent/50 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                      i === index
                        ? 'w-6 gradient-brand'
                        : 'w-2 bg-ink-soft/30 hover:bg-ink-soft/60'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-navy text-ink-soft transition-colors hover:border-accent/50 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-center text-xs text-ink-soft">
            ★ 4.8/5 · Based on 200+ reviews · Sample feedback from platform users.
            Individual results vary. Trading involves risk of loss.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
