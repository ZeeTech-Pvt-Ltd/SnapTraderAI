import type { LucideIcon } from 'lucide-react'
import {
  ChartCandlestick,
  FlaskConical,
  LineChart,
  NotebookPen,
  ScanLine,
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
    href: '/ai-scalp-analyzer',
    linkLabel: 'Explore Scalp Analysis',
  },
  {
    icon: LineChart,
    title: 'AI Swing Trading',
    description:
      'Multi-day swing setups built from higher-timeframe structure, momentum confluence and risk-to-reward scoring. Designed for traders who hold through the noise.',
    limitation: 'Past setups do not guarantee future performance.',
    href: '/ai-swing-trading',
    linkLabel: 'Explore Swing Trading',
  },
  {
    icon: NotebookPen,
    title: 'AI Strategy Builder',
    description:
      'Say the rule in plain words — “buy gold when price breaks the 20-day high” — and get a complete, readable trading system: entry, exit, filters, risk rules and paper testing.',
    limitation: 'A strategy is only as good as the idea behind it.',
    href: '/ai-strategy-builder',
    linkLabel: 'Explore Strategy Builder',
  },
  {
    icon: FlaskConical,
    title: 'Strategy Backtesting',
    description:
      'Replay your exact entry, exit and risk rules across years of historical price action — through rallies, chop and crashes — before your capital is on the line.',
    limitation: 'Backtesting does not predict the future.',
    href: '/strategy-backtesting',
    linkLabel: 'Explore Backtesting',
  },
  {
    icon: ChartCandlestick,
    title: 'AI Pattern Detection',
    description:
      'The pattern engine watches the charts so you don’t have to — flags formations the moment they qualify, with breakout levels, invalidation points and confidence scores.',
    limitation: 'Patterns are probabilities, not certainties.',
    href: '/ai-pattern-detection',
    linkLabel: 'Explore Pattern Detection',
  },
]
