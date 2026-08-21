export interface NavLink {
  label: string
  href: string
}

export interface NavDropdown {
  label: string
  items: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
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
