import type { LucideIcon } from 'lucide-react'
import { BadgeCheck, BookOpenCheck, ShieldAlert, Wallet } from 'lucide-react'

export interface TrustItem {
  icon: LucideIcon
  title: string
  description: string
}

export const trustStrip: TrustItem[] = [
  {
    icon: ShieldAlert,
    title: 'No Profit Guarantees',
    description: 'We never promise returns. Markets are unpredictable.',
  },
  {
    icon: BadgeCheck,
    title: 'Labelled Signals',
    description: 'Live, delayed, backtested or illustrative — always shown.',
  },
  {
    icon: Wallet,
    title: 'Paper Trading First',
    description: 'Practise with virtual funds before risking real capital.',
  },
  {
    icon: BookOpenCheck,
    title: 'Educational Approach',
    description: 'Learn the method behind every signal, not just the call.',
  },
]

export interface CanCannotGroup {
  can: string[]
  cannot: string[]
}

export const canCannot: CanCannotGroup = {
  can: [
    'Chart scanning and pattern detection',
    'Entry, exit and stop-loss level insights',
    'Signal screening with transparent confidence ratings',
    'Risk parameter setting and exposure tracking',
    'News alerts and sentiment analysis',
    'Paper trading to practise without real capital',
  ],
  cannot: [
    'Guarantee trading profits — no technology can',
    'Eliminate risk from trading',
    'Execute trades or hold client funds',
    'Provide financial or investment advice',
    'Predict market movements with certainty',
    'Replace your own research and judgment',
  ],
}

export interface DataLabelItem {
  dot: string
  dotClass: string
  topBorderClass: string
  label: string
  description: string
}

export const dataLabels: DataLabelItem[] = [
  {
    dot: 'LIVE',
    dotClass: 'bg-success/15 text-success border-success/25',
    topBorderClass: 'border-t-success/50',
    label: 'Live market data',
    description: 'Connected market feeds from verified data providers. Real-time where available.',
  },
  {
    dot: 'DELAYED',
    dotClass: 'bg-warning/15 text-warning border-warning/25',
    topBorderClass: 'border-t-warning/50',
    label: 'Delayed market data',
    description: 'Labelled with the delay period. Suitable for analysis, not execution.',
  },
  {
    dot: 'BACKTEST',
    dotClass: 'bg-info/15 text-info border-info/25',
    topBorderClass: 'border-t-info/50',
    label: 'Backtested results',
    description: 'Historical simulation only. Past patterns do not predict future market movements.',
  },
  {
    dot: 'ILLUSTRATIVE',
    dotClass: 'bg-danger/15 text-danger border-danger/25',
    topBorderClass: 'border-t-danger/50',
    label: 'Illustrative figures',
    description: 'Example scenarios for explanation. Never treated as real performance.',
  },
]
