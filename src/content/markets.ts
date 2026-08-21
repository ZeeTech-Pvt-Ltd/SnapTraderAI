export type DataLabel = 'Live' | 'Delayed'

export interface Market {
  symbol: string
  name: string
  price: string
  change: number
  label: DataLabel
}

export const markets: Market[] = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0842', change: 0.31, label: 'Live' },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: '67,240.00', change: 2.14, label: 'Live' },
  { symbol: 'ETH/USD', name: 'Ethereum', price: '3,485.90', change: 1.85, label: 'Live' },
  { symbol: 'XAU/USD', name: 'Gold Spot', price: '2,412.80', change: -0.28, label: 'Live' },
  { symbol: 'SPX', name: 'S&P 500', price: '5,742.10', change: 0.42, label: 'Delayed' },
  { symbol: 'NDX', name: 'Nasdaq 100', price: '20,318.55', change: 0.61, label: 'Delayed' },
  { symbol: 'AAPL', name: 'Apple Inc.', price: '226.84', change: -0.15, label: 'Delayed' },
  { symbol: 'WTI', name: 'Crude Oil WTI', price: '78.42', change: 1.02, label: 'Delayed' },
]
