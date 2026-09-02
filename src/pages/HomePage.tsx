import { Hero } from '../components/Hero'
import { TickerTape } from '../components/TickerTape'
import { TrustStrip } from '../components/sections/TrustStrip'
import { AgentsBoard } from '../components/sections/AgentsBoard'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Tools } from '../components/sections/Tools'
import { MarketTicker } from '../components/sections/MarketTicker'
import { Features } from '../components/sections/Features'
import { MidPageCta } from '../components/sections/MidPageCta'
import { CanCannot } from '../components/sections/CanCannot'
import { DataTransparency } from '../components/sections/DataTransparency'
import { Stats } from '../components/sections/Stats'
import { Testimonials } from '../components/sections/Testimonials'
import { Faq } from '../components/sections/Faq'
import { CtaBanner } from '../components/sections/CtaBanner'

/** Homepage journey: promise → how it works → tools → live proof
    (leaderboard) → markets → why us → mid-page CTA → objections →
    trust → stats → social proof → FAQ → closing CTA. */
export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <TickerTape />
      <AgentsBoard />
      <HowItWorks />
      <Tools />
      <MarketTicker />
      <Features />
      <MidPageCta />
      <CanCannot />
      <DataTransparency />
      <Stats />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  )
}
