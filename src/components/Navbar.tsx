import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { navLinks, toolsDropdown } from '../content/nav'
import { Logo } from './ui/Logo'
import { Button } from './ui/Button'

/** Hash links resolve to the homepage section; paths stay as-is. */
const linkTo = (href: string) => (href.startsWith('#') ? `/${href}` : href)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const toolsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click / escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setToolsOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 z-50 h-[72px] w-full border-b backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? 'border-border bg-deep/90 shadow-card'
          : 'border-border bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-container items-center justify-between px-4 md:px-6">
        <Link to="/" aria-label="Snap Trader AI — home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <div ref={toolsRef} className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[0.925rem] font-medium text-ink/75 transition-colors hover:text-accent"
              onClick={() => setToolsOpen((v) => !v)}
              aria-expanded={toolsOpen}
              aria-haspopup="true"
            >
              {toolsDropdown.label}
              <ChevronDown
                className={`ml-0.5 h-4 w-4 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-lg border border-border bg-navy p-2 shadow-card-lg">
                {toolsDropdown.items.map((item) => (
                  <Link
                    key={item.label}
                    to={linkTo(item.href)}
                    onClick={() => setToolsOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-ink/75 transition-colors hover:bg-medium-navy hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={linkTo(link.href)}
              className="text-[0.925rem] font-medium text-ink/75 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Button to="/get-started" size="sm">
            Get Started Free
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink transition-colors hover:bg-medium-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-black/70 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed top-[72px] right-0 z-50 h-[calc(100vh-72px)] w-[300px] border-l border-border bg-navy p-8 transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-ink-soft">
          AI Tools
        </p>
        {toolsDropdown.items.map((item) => (
          <Link
            key={item.label}
            to={linkTo(item.href)}
            onClick={() => setMobileOpen(false)}
            className="block border-b border-border py-2.5 text-[1.05rem] font-medium text-ink/85"
          >
            {item.label}
          </Link>
        ))}
        <p className="mb-2 mt-6 text-xs font-bold uppercase tracking-wider text-ink-soft">
          Explore
        </p>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={linkTo(link.href)}
            onClick={() => setMobileOpen(false)}
            className="block border-b border-border py-2.5 text-[1.05rem] font-medium text-ink/85"
          >
            {link.label}
          </Link>
        ))}
        <Button to="/get-started" className="mt-8 w-full" onClick={() => setMobileOpen(false)}>
          Get Started Free
        </Button>
      </div>
    </header>
  )
}
