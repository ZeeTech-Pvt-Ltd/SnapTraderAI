import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { TickerTape } from './components/TickerTape'
import { TrustStrip } from './components/sections/TrustStrip'
import { AgentsBoard } from './components/sections/AgentsBoard'
import { MarketTicker } from './components/sections/MarketTicker'
import { Tools } from './components/sections/Tools'
import { HowItWorks } from './components/sections/HowItWorks'
import { Features } from './components/sections/Features'
import { CanCannot } from './components/sections/CanCannot'
import { DataTransparency } from './components/sections/DataTransparency'
import { Stats } from './components/sections/Stats'
import { Testimonials } from './components/sections/Testimonials'
import { Faq } from './components/sections/Faq'
import { CtaBanner } from './components/sections/CtaBanner'

export default function App() {
  return (
    <div className="min-h-screen bg-deep font-sans text-ink">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-[#04212b]"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TrustStrip />
        <TickerTape />
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
      </main>

      <Footer />
    </div>
  )
}
