import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { TradersPage } from './pages/TradersPage'
import { LeaderboardPage } from './pages/LeaderboardPage'
import { ContactPage } from './pages/ContactPage'
import { GetStartedPage } from './pages/GetStartedPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsConditionsPage } from './pages/TermsConditionsPage'
import { DisclaimerPage } from './pages/DisclaimerPage'
import { CookiePolicyPage } from './pages/CookiePolicyPage'
import { RiskDisclosurePage } from './pages/RiskDisclosurePage'
import { TradeAnalyzerPage } from './pages/TradeAnalyzerPage'
import { ScalpAnalyzerPage } from './pages/ScalpAnalyzerPage'
import { SwingTradingPage } from './pages/SwingTradingPage'
import { StrategyBuilderPage } from './pages/StrategyBuilderPage'
import { PatternDetectionPage } from './pages/PatternDetectionPage'

/** Scrolls to top on route change, or to the hash target when present. */
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

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

      <ScrollManager />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/traders" element={<TradersPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/risk-disclosure" element={<RiskDisclosurePage />} />
          <Route path="/ai-trade-analyzer" element={<TradeAnalyzerPage />} />
          <Route path="/ai-scalp-analyzer" element={<ScalpAnalyzerPage />} />
          <Route path="/ai-swing-trading" element={<SwingTradingPage />} />
          <Route path="/ai-strategy-builder" element={<StrategyBuilderPage />} />
          <Route path="/ai-pattern-detection" element={<PatternDetectionPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
