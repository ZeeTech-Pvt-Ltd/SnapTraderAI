import { AgentsBoard } from '../components/sections/AgentsBoard'
import { MarketTicker } from '../components/sections/MarketTicker'
import { Tools } from '../components/sections/Tools'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Features } from '../components/sections/Features'
import { CanCannot } from '../components/sections/CanCannot'
import { DataTransparency } from '../components/sections/DataTransparency'
import { Stats } from '../components/sections/Stats'
import { Testimonials } from '../components/sections/Testimonials'
import { Faq } from '../components/sections/Faq'
import { CtaBanner } from '../components/sections/CtaBanner'

/** Everything below the hero — loaded lazily so the first paint
    only needs the top of the page. */
export function HomeBelowFold() {
  return (
    <>
      <AgentsBoard />
      <MarketTicker />
      <Tools />
      <HowItWorks />
      <Features />
      <CanCannot />
      <DataTransparency />
      <Stats />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  )
}
