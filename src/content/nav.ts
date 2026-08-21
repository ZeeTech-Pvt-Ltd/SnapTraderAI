export interface NavLink {
  label: string
  href: string
}

export interface NavDropdown {
  label: string
  items: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'AI Trading Platform', href: '#tools' },
  { label: 'Traders', href: '/traders' },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '/contact' },
]

/** Footer keeps the full explore list, including homepage-only sections. */
export const footerLinks: NavLink[] = [
  ...navLinks,
  { label: 'Why Snap Trader AI', href: '#why-snap' },
  { label: 'Markets', href: '#markets' },
  { label: 'FAQ', href: '#faq' },
]

export const toolsDropdown: NavDropdown = {
  label: 'AI Tools',
  items: [
    { label: 'AI Trade Analyzer', href: '#tools' },
    { label: 'AI Scalp Analysis', href: '#tools' },
    { label: 'AI Swing Trading', href: '#tools' },
    { label: 'AI News Analysis', href: '#tools' },
  ],
}
