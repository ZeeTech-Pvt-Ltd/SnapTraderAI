import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { TradersPage } from './pages/TradersPage'
import { LeaderboardPage } from './pages/LeaderboardPage'
import { ContactPage } from './pages/ContactPage'
import { GetStartedPage } from './pages/GetStartedPage'

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
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
