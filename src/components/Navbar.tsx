import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { navLinks, resourcesDropdown, toolsDropdown } from '../content/nav'
import { Logo } from './ui/Logo'
import { Button } from './ui/Button'

/** Hash links resolve to the homepage section; paths stay as-is. */
const linkTo = (href: string) => (href.startsWith('#') ? `/${href}` : href)

const DROPDOWNS = [toolsDropdown, resourcesDropdown]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click / escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null)
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
        <nav ref={navRef} className="hidden items-center gap-4 lg:flex xl:gap-8" aria-label="Main">
          {DROPDOWNS.map((dropdown) => {
            const isOpen = openDropdown === dropdown.label
            return (
              <div key={dropdown.label} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-[0.925rem] font-medium text-ink/75 transition-colors hover:text-accent"
                  onClick={() => setOpenDropdown(isOpen ? null : dropdown.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {dropdown.label}
                  <ChevronDown
                    className={`ml-0.5 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-lg border border-border bg-navy p-2 shadow-card-lg">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.label}
                        to={linkTo(item.href)}
                        onClick={() => setOpenDropdown(null)}
                        className="block rounded-md px-3 py-2 text-sm text-ink/75 transition-colors hover:bg-medium-navy hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
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
        className={`fixed top-[72px] right-0 z-50 flex h-[calc(100vh-72px)] w-[320px] flex-col border-l border-border bg-navy transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Groups + links */}
        <div className="flex-1 overflow-y-auto p-5">
          {DROPDOWNS.map((dropdown) => (
            <div key={dropdown.label}>
              <p className="mb-3 mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-ink">
                <span aria-hidden="true" className="h-2 w-2 rounded-full gradient-brand" />
                {dropdown.label}
              </p>
              {dropdown.items.map((item) => (
                <Link
                  key={item.label}
                  to={linkTo(item.href)}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-border py-3 text-[0.95rem] font-medium text-ink/75 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-6">
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-ink">
              <span aria-hidden="true" className="h-2 w-2 rounded-full gradient-brand" />
              Explore
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={linkTo(link.href)}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-border py-3 text-[0.95rem] font-medium text-ink/75 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Pinned CTA */}
        <div className="border-t border-border p-5">
          <Button to="/get-started" className="w-full" onClick={() => setMobileOpen(false)}>
            Get Started Free
          </Button>
          <p className="mt-3 text-center text-xs text-ink-soft">
            No credit card · No deposit required
          </p>
        </div>
      </div>
    </header>
  )
}
