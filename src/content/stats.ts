export interface Stat {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  note: string
}

export const stats: Stat[] = [
  {
    value: 10000,
    suffix: '+',
    label: 'Active Traders',
    note: 'Platform users worldwide',
  },
  {
    value: 1,
    suffix: 'M+',
    label: 'Charts Analyzed',
    note: 'Scans across all markets',
  },
  {
    value: 94,
    suffix: '%',
    label: 'Pattern Recognition Accuracy',
    note: 'On backtested data sets',
  },
  {
    value: 4.8,
    decimals: 1,
    suffix: '/5',
    label: 'Average User Rating',
    note: 'Based on 200+ reviews',
  },
]
