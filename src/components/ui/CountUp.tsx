import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  /** Numeric value to count up to */
  target: number
  /** Fraction digits, e.g. 1 for "4.8" */
  decimals?: number
  prefix?: string
  suffix?: string
  /** Animation length in ms */
  duration?: number
}

/** Animates from 0 to `target` the first time it scrolls into view. */
export function CountUp({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1600,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const format = (v: number) =>
      v.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })

    // Reduced motion or no observer: show the final value on the next frame
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      const raf = requestAnimationFrame(() => setDisplay(format(target)))
      return () => cancelAnimationFrame(raf)
    }

    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.disconnect()
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            // easeOutExpo — fast start, gentle landing
            const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
            setDisplay(format(target * eased))
            if (t < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration, decimals])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
