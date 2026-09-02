import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
import { RiskCalculatorPage } from './pages/RiskCalculatorPage'
import { AcademyPage } from './pages/AcademyPage'
import { PerformanceVerificationPage } from './pages/PerformanceVerificationPage'
import { ThankYouPage } from './pages/ThankYouPage'
import { WhyChoosePage } from './pages/WhyChoosePage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { TraderDetailPage } from './pages/TraderDetailPage'
import { StrategyBacktestingPage } from './pages/StrategyBacktestingPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { TradingPlatformPage } from './pages/TradingPlatformPage'

/** Canonical URL of the site — change to the production domain if needed. */
const SITE_URL = 'https://snap-traderai.com'

const DEFAULT_SEO = {
  title: 'SnapTrader AI: Turn Any Chart Into a Clear Trading Plan',
  description:
    'Stop guessing your charts. SnapTrader AI reads any screenshot instantly, flags bullish or bearish setups and hands you a clear entry and exit plan.',
}

/** Static routes: title + meta description. Dynamic routes (/traders/:slug,
    /blog/:slug) set their own titles in their pages and are skipped. */
const SEO: Record<string, { title: string; description: string }> = {
  '/': DEFAULT_SEO,
  '/traders': {
    title: 'AI Traders | SnapTrader AI',
    description:
      'Browse 18 AI trading agents across Forex, Crypto, Stocks, Indices, Gold & Commodities and Futures — with strategy, AI model and performance details.',
  },
  '/leaderboard': {
    title: 'AI Bot Leaderboard | SnapTrader AI',
    description:
      'Live leaderboard of Snap Trader AI agents — ranked by return, win rate, risk and drawdown across global markets.',
  },
  '/contact': {
    title: 'Contact | SnapTrader AI',
    description:
      'Questions about Snap Trader AI? Reach our support team by email or live chat — we reply within 24 hours.',
  },
  '/get-started': {
    title: 'Get Started — Free | SnapTrader AI',
    description:
      'Start analysing with Snap Trader AI for free. No credit card, no deposit required — register in minutes.',
  },
  '/thank-you': {
    title: 'Thank You | SnapTrader AI',
    description: 'Your details have been received — welcome to Snap Trader AI.',
  },
  '/academy': {
    title: 'Academy | SnapTrader AI',
    description:
      'Learn to trade with AI on your side — bite-sized modules, real charts and zero jargon, from beginner to advanced.',
  },
  '/blog': {
    title: 'Blog | SnapTrader AI',
    description:
      'Risk, strategy, market structure and AI — articles written for traders who want to think clearly before risking capital.',
  },
  '/performance-verification': {
    title: 'Performance Verification | SnapTrader AI',
    description:
      'Live results you can audit yourself — every AI agent trade is recorded, timestamped and made public. No edits, no exceptions.',
  },
  '/why-choose-snaptrader-ai': {
    title: 'Why Choose SnapTrader AI | SnapTrader AI',
    description:
      'Decisions in milliseconds, AI that learns, full transparency and risk control first — see what makes SnapTrader AI different.',
  },
  '/ai-trading-platform': {
    title: 'AI Trading Platform | SnapTrader AI',
    description:
      'One platform for every market you trade — chart analysis, pattern detection, strategy testing and risk management in a single dashboard.',
  },
  '/ai-trade-analyzer': {
    title: 'AI Trade Analyzer | SnapTrader AI',
    description:
      'Grade your setup before you risk a rupee — the AI Trade Analyzer reads your chart in seconds and tells you if the trade is worth taking.',
  },
  '/ai-scalp-analyzer': {
    title: 'AI Scalp Analyzer | SnapTrader AI',
    description:
      'Read 1M & 5M setups in seconds — the AI Scalp Analyzer checks structure, momentum and volume on fast timeframes.',
  },
  '/ai-swing-trading': {
    title: 'AI Swing Trading | SnapTrader AI',
    description:
      'Multi-day setups managed by AI — scan 4-hour and daily charts, hold across sessions, and trail stops automatically.',
  },
  '/ai-strategy-builder': {
    title: 'AI Strategy Builder | SnapTrader AI',
    description:
      'Say the rule, get the system — turn plain-English trading ideas into readable, testable strategies. No code, no spreadsheets.',
  },
  '/ai-pattern-detection': {
    title: 'AI Pattern Detection | SnapTrader AI',
    description:
      'The pattern engine watches the charts so you don’t have to — formations flagged the moment they qualify, with confidence scores.',
  },
  '/strategy-backtesting': {
    title: 'Strategy Backtesting | SnapTrader AI',
    description:
      'Test before you risk capital — replay your rules across years of historical data with honest, out-of-sample verification.',
  },
  '/risk-calculator': {
    title: 'Risk Calculator | SnapTrader AI',
    description:
      'Position size, risk and reward in one click — see your risk per trade, consecutive losses to ruin and probability of ruin.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | SnapTrader AI',
    description: 'How SnapTrader AI collects, uses and protects your personal information.',
  },
  '/terms-conditions': {
    title: 'Terms & Conditions | SnapTrader AI',
    description: 'The terms that govern your use of the SnapTrader AI website and platform.',
  },
  '/disclaimer': {
    title: 'Disclaimer | SnapTrader AI',
    description:
      'SnapTrader AI content is for informational and educational purposes only — not financial advice.',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | SnapTrader AI',
    description: 'What cookies are, how we use them, and how you can manage your preferences.',
  },
  '/risk-disclosure': {
    title: 'Risk Disclosure | SnapTrader AI',
    description:
      'Trading involves substantial risk — read the full risk disclosure before using the SnapTrader AI platform.',
  },
}

/** Keeps <title> and the meta description in sync with the current route. */
function SeoManager() {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, '') || '/'
    const seo = SEO[path]

    // Dynamic routes set their own titles; only refresh their description
    if (!seo) {
      if (path.startsWith('/traders/') || path.startsWith('/blog/')) {
        setMetaDescription(DEFAULT_SEO.description)
        setSocialMeta(document.title, DEFAULT_SEO.description, path)
      }
      return
    }

    // Titles and descriptions follow the selected language where a
    // translation exists — untranslated routes fall back to the English key.
    const title = t(seo.title)
    const description = t(seo.description)
    document.title = title
    setMetaDescription(description)
    setSocialMeta(title, description, path)
  }, [location, lang, t])

  return null
}

/** Keeps Open Graph + Twitter tags in sync with the current route. */
function setSocialMeta(title: string, description: string, path: string) {
  const url = `${SITE_URL}${path}`
  const set = (selector: string, attr: string, value: string) => {
    let meta = document.querySelector<HTMLMetaElement>(selector)
    if (!meta) {
      meta = document.createElement('meta')
      const name = selector.replace(/^meta\[name="([^"]+)"\]$/, '$1')
      if (selector.includes('name=')) meta.name = name
      else meta.setAttribute('property', name)
      document.head.appendChild(meta)
    }
    meta.setAttribute(attr, value)
  }
  set('meta[property="og:title"]', 'content', title)
  set('meta[property="og:description"]', 'content', description)
  set('meta[property="og:url"]', 'content', url)
  set('meta[name="twitter:title"]', 'content', title)
  set('meta[name="twitter:description"]', 'content', description)
}

function setMetaDescription(content: string) {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.appendChild(meta)
  }
  meta.content = content
}

/** Keeps the <link rel="canonical"> in sync with the current route. */
function CanonicalManager() {
  const location = useLocation()

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    const path = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '')
    link.href = `${SITE_URL}${path}`
  }, [location])

  return null
}

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
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-deep font-sans text-ink">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-[#04212b]"
      >
        {t('Skip to main content')}
      </a>

      <ScrollManager />
      <CanonicalManager />
      <SeoManager />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/traders" element={<TradersPage />} />
          <Route path="/traders/:slug" element={<TraderDetailPage />} />
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
          <Route path="/strategy-backtesting" element={<StrategyBacktestingPage />} />
          <Route path="/ai-trading-platform" element={<TradingPlatformPage />} />
          <Route path="/risk-calculator" element={<RiskCalculatorPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/performance-verification" element={<PerformanceVerificationPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/why-choose-snaptrader-ai" element={<WhyChoosePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
