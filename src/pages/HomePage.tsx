import { lazy, Suspense } from 'react'
import { Hero } from '../components/Hero'
import { TickerTape } from '../components/TickerTape'
import { TrustStrip } from '../components/sections/TrustStrip'

// Below-the-fold sections load after the first paint, keeping the
// initial JavaScript small for fast FCP/LCP on mobile.
const HomeBelowFold = lazy(() =>
  import('./HomeBelowFold').then((m) => ({ default: m.HomeBelowFold })),
)

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <TickerTape />
      {/* null fallback: a skeleton here would become the LCP element */}
      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
    </>
  )
}
