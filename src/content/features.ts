import type { LucideIcon } from 'lucide-react'
import {
  Eye,
  Globe2,
  GraduationCap,
  MonitorSmartphone,
  RefreshCw,
  Shield,
} from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: MonitorSmartphone,
    title: 'Accessible Across Devices',
    description:
      'Our platform works across tablets, laptops and smartphones, so you can trade anytime with a stable internet connection.',
  },
  {
    icon: Eye,
    title: 'Uncovers Hidden Patterns',
    description:
      'Advanced algorithms scan huge amounts of market data to surface patterns and levels the human eye often misses.',
  },
  {
    icon: Globe2,
    title: 'Multi-Market Diversification',
    description:
      'Invest across stocks, forex, crypto, indices, commodities, ETFs and futures to diversify your portfolio from one dashboard.',
  },
  {
    icon: Shield,
    title: 'Limits Trading Risks',
    description:
      'Risk-focused tools — position limits, loss caps and drawdown alerts — help you limit the damage of unexpected market moves.',
  },
  {
    icon: GraduationCap,
    title: 'Educational by Design',
    description:
      'The built-in Trading Academy teaches chart reading, risk basics and strategy building — for beginners and veterans alike.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous AI Improvement',
    description:
      'The system adapts its strategies to changing market conditions, keeping your analysis relevant as markets evolve.',
  },
]
