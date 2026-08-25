import type { LucideIcon } from 'lucide-react'
import {
  ChartCandlestick,
  LineChart,
  Newspaper,
  ScanLine,
  ShieldCheck,
  Zap,
} from 'lucide-react'

export interface Tool {
  icon: LucideIcon
  title: string
  description: string
  limitation: string
  href: string
  linkLabel: string
}

export const tools: Tool[] = [
  {
    icon: ScanLine,
    title: 'AI Trade Analyzer',
    description:
      'Upload a chart and get structured observations: trend direction, key support and resistance levels, and entry and exit points with confidence scoring.',
    limitation: 'Visible data only — may miss broader market context.',
    href: '/ai-trade-analyzer',
    linkLabel: 'Explore Chart Analyzer',
  },
  {
    icon: Zap,
    title: 'AI Scalp Analysis',
    description:
      'Fast signals built for 1–5 minute charts. The scalp engine reads momentum, order flow and micro-structure for traders who work in minutes, not days.',
    limitation: 'Short timeframes are noisier — small moves can whipsaw.',
    href: '#tools',
    linkLabel: 'Explore Scalp Analysis',
  },
  {
    icon: LineChart,
    title: 'AI Swing Trading',
    description:
      'Multi-day swing setups built from higher-timeframe structure, momentum confluence and risk-to-reward scoring. Designed for traders who hold through the noise.',
    limitation: 'Past setups do not guarantee future performance.',
    href: '#tools',
    linkLabel: 'Explore Swing Trading',
  },
  {
    icon: Newspaper,
    title: 'AI News Analysis',
    description:
      'News alerts and sentiment scoring that show how headlines are shifting market bias — bullish, bearish or neutral — before you commit to a trade.',
    limitation: 'Sentiment is a snapshot — it can flip in seconds.',
    href: '#tools',
    linkLabel: 'Explore News Analysis',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Insights',
    description:
      'Set position size limits, daily loss caps, exposure tracking and drawdown alerts. Controls are built into every workflow, not bolted on after.',
    limitation: 'Controls reduce risk — they do not remove it.',
    href: '#tools',
    linkLabel: 'Explore Risk Insights',
  },
  {
    icon: ChartCandlestick,
    title: 'Pattern Detection',
    description:
      '26 indicators scanning for bullish and bearish patterns across 4 timeframes, each rated with a confidence score and a clear data label.',
    limitation: 'Patterns are probabilities, not certainties.',
    href: '#tools',
    linkLabel: 'Explore Pattern Detection',
  },
]
