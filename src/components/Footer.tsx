import { Link } from 'react-router-dom'
import { footerLinks, toolsDropdown } from '../content/nav'
import { Logo } from './ui/Logo'

const linkTo = (href: string) => (href.startsWith('#') ? `/${href}` : href)

const FOOTER_COLUMNS = [
  {
    title: 'AI Products',
    links: toolsDropdown.items,
  },
  {
    title: 'Explore',
    links: footerLinks,
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Risk Disclosure', href: '/risk-disclosure' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy pb-0 pt-16 text-ink-soft">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" aria-label="Snap Trader AI — home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              SnapTrader AI — also known as Snap Trader AI — is an AI-powered
              chart analysis and trading signals platform for self-directed
              traders. Snap trade smarter: scan charts, detect patterns and
              manage risk across stocks, forex, crypto, indices, commodities
              and ETFs.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={linkTo(link.href)}
                      className="text-sm transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk disclosure */}
        <div className="mt-12 border-t border-border p-4 text-xs leading-relaxed text-ink-soft/70">
          <p className="font-bold uppercase tracking-wider text-ink-soft">
            Risk Disclosure
          </p>
          <p className="mt-2">
            Trading Forex, CFDs, crypto and other financial instruments involves
            significant risk of loss and is not suitable for all investors. The
            information provided by Snap Trader AI is for educational and research
            purposes only and does not constitute financial or investment advice.
            Past performance, backtests and platform statistics do not guarantee
            future results. Snap Trader AI does not execute trades, hold client
            funds or accept deposits. Always conduct your own research and trade
            only with capital you can afford to lose.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border py-4 text-xs">
          <p>
            © {new Date().getFullYear()} SnapTrader AI — Snap Trader AI. All
            rights reserved.
          </p>
          <p className="font-mono text-[10px] text-ink-soft/60">
            Research platform · Not a broker · No profit guarantees
          </p>
        </div>
      </div>
    </footer>
  )
}
