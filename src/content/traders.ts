export interface Trader {
  id: string
  market: string
  strategy: string
  shortStrategy: string
  model: string
}

export type RiskLevel = 'Low' | 'Medium' | 'High'

export const traderMarkets = [
  'Forex',
  'Crypto',
  'Gold & Commodities',
  'Stocks',
  'Indices',
  'Futures',
] as const

export const marketBadge: Record<string, string> = {
  Forex: 'bg-sky-500/10 text-sky-600 border-sky-500/25',
  Crypto: 'bg-amber-500/10 text-amber-600 border-amber-500/25',
  'Gold & Commodities': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/25',
  Stocks: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/25',
  Indices: 'bg-violet-500/10 text-violet-600 border-violet-500/25',
  Futures: 'bg-teal-500/10 text-teal-600 border-teal-500/25',
}

export const riskBadge: Record<RiskLevel, string> = {
  Low: 'bg-success/10 text-success border-success/25',
  Medium: 'bg-warning/10 text-warning border-warning/25',
  High: 'bg-danger/10 text-danger border-danger/25',
}

/** The live trading-agent roster (sourced from Agents.xlsx). */
export const traders: Trader[] = [
  {
    id: 'falcon-01',
    market: 'Forex',
    strategy: 'Momentum Trend Following (EMA 20/50 + ADX filter)',
    shortStrategy: 'Trend & Momentum',
    model: 'Claude Opus 5',
  },
  {
    id: 'peregrine-02',
    market: 'Forex',
    strategy: 'Carry Trade & Interest-Rate Differential',
    shortStrategy: 'Carry Trade',
    model: 'Gemini 3.1 Pro',
  },
  {
    id: 'kestrel-03',
    market: 'Forex',
    strategy: 'News & Macro Sentiment (economic calendar driven)',
    shortStrategy: 'News & Macro',
    model: 'Grok 4.6',
  },
  {
    id: 'merlin-04',
    market: 'Forex',
    strategy: 'Range Breakout (Donchian Channel)',
    shortStrategy: 'Donchian Breakout',
    model: 'Gemini 3.7 Flash',
  },
  {
    id: 'raptor-05',
    market: 'Crypto',
    strategy: 'Funding Rate Arbitrage (perpetual futures)',
    shortStrategy: 'Funding Arbitrage',
    model: 'GPT-5.6 Sol',
  },
  {
    id: 'viper-06',
    market: 'Crypto',
    strategy: 'On-chain Flow & Whale Wallet Tracking',
    shortStrategy: 'On-chain Flow',
    model: 'DeepSeek V4 Pro',
  },
  {
    id: 'talon-07',
    market: 'Crypto',
    strategy: 'Volatility Breakout (ATR expansion)',
    shortStrategy: 'ATR Breakout',
    model: 'Grok 4.6',
  },
  {
    id: 'shrike-08',
    market: 'Crypto',
    strategy: 'Market Making / Grid',
    shortStrategy: 'Market Making',
    model: 'GPT-5.6 Luna',
  },
  {
    id: 'condor-09',
    market: 'Gold & Commodities',
    strategy: 'Safe-Haven Correlation (DXY + real yields)',
    shortStrategy: 'Safe-Haven',
    model: 'Claude Opus 5',
  },
  {
    id: 'osprey-10',
    market: 'Gold & Commodities',
    strategy: 'Seasonality & Calendar Anomaly',
    shortStrategy: 'Seasonality',
    model: 'Kimi K3',
  },
  {
    id: 'harrier-11',
    market: 'Gold & Commodities',
    strategy: 'Mean Reversion (Bollinger Band fade)',
    shortStrategy: 'Mean Reversion',
    model: 'Claude Sonnet 5',
  },
  {
    id: 'sabre-12',
    market: 'Stocks',
    strategy: 'Earnings Momentum / Post-Earnings Drift',
    shortStrategy: 'Earnings Momentum',
    model: 'GPT-5.6 Sol',
  },
  {
    id: 'lancer-13',
    market: 'Stocks',
    strategy: 'Sector Rotation & Relative Strength',
    shortStrategy: 'Sector Rotation',
    model: 'Gemini 3.1 Pro',
  },
  {
    id: 'spectre-14',
    market: 'Stocks',
    strategy: 'Statistical Arbitrage (pairs trading)',
    shortStrategy: 'Stat Arbitrage',
    model: 'Qwen3.8 Max',
  },
  {
    id: 'phantom-15',
    market: 'Indices',
    strategy: 'Opening Gap Fade',
    shortStrategy: 'Gap Fade',
    model: 'GLM-5.3',
  },
  {
    id: 'vector-16',
    market: 'Indices',
    strategy: 'Order Flow & Volume Profile Imbalance',
    shortStrategy: 'Order Flow',
    model: 'MiniMax M3',
  },
  {
    id: 'tempest-17',
    market: 'Futures',
    strategy: 'Cross-Market Correlation Divergence',
    shortStrategy: 'Cross-Market',
    model: 'Claude Opus 5',
  },
  {
    id: 'warden-18',
    market: 'Futures',
    strategy: 'Adaptive Regime Switching (multi-timeframe confluence)',
    shortStrategy: 'Regime Switching',
    model: 'GPT-5.6 Sol',
  },
]

export interface TraderStats {
  daysActive: number
  totalReturn: number
  totalProfit: number
  floatingPnl: number
  maxDrawdown: number
  winRate: number
}

/** Deterministic demo stats seeded from the agent id, so values are stable
    across renders. Illustrative only — the xlsx contains no performance data. */
function hashSeed(s: string): number {
  let h = 0
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return h
}

export function traderStats(t: Trader): TraderStats {
  const h = hashSeed(t.id)
  // Note: use >>> (unsigned shift) — >> treats the hash as signed int32
  const totalReturn = Number(((h % 900) / 10 - 45 + (h % 5) * 0.3).toFixed(2))
  const totalProfit = Math.round(totalReturn * 50)
  const floatingPnl = h % 4 === 0 ? Number(((h % 90) / 10).toFixed(2)) : 0
  const maxDrawdown = -Number((((h >>> 3) % 40) + 3 + (h % 5)).toFixed(2))
  const winRate = Number((((h >>> 5) % 35) + 25).toFixed(2))
  const daysActive = 90 + (h % 21)
  return { daysActive, totalReturn, totalProfit, floatingPnl, maxDrawdown, winRate }
}

/** Risk level derived from the seeded drawdown. */
export function traderRisk(t: Trader): RiskLevel {
  const dd = traderStats(t).maxDrawdown
  if (dd >= -10) return 'Low'
  if (dd >= -25) return 'Medium'
  return 'High'
}

/** Seeded random-walk return curve, rescaled to end exactly on totalReturn. */
export function traderSeries(t: Trader, points = 20): number[] {
  const h = hashSeed(t.id)
  const { totalReturn } = traderStats(t)
  const walk = [0]
  let acc = 0
  for (let i = 1; i < points; i++) {
    const step = (((h >>> (i % 24)) % 9) - 3.2) * (i % 4 === 0 ? 1.6 : 1)
    acc += step
    walk.push(acc)
  }
  const last = walk[points - 1]
  if (last === 0) return walk
  const scale = totalReturn / last
  return walk.map((v) => Number((v * scale).toFixed(2)))
}

/** Deterministic monthly returns for the last 12 months (%). */
export function traderMonthly(t: Trader): { month: string; value: number }[] {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const h = hashSeed(t.id + '-monthly')
  return MONTHS.map((month, i) => {
    const v = (((h >>> (i * 2)) % 17) - 6) + ((h >>> (i * 3)) % 7) / 10 - 2.5
    return { month, value: Number(v.toFixed(2)) }
  })
}

export interface ClosedTrade {
  date: string
  symbol: string
  action: 'BUY' | 'SELL'
  entry: number
  exit: number
  pnl: number
}

/** Deterministic closed-trade history (demo). */
export function traderClosedTrades(t: Trader, n = 6): ClosedTrade[] {
  const h = hashSeed(t.id + '-trades')
  const SYMBOLS = ['GBPUSD', 'EURUSD', 'XAUUSD', 'BTCUSD', 'US30', 'NAS100']
  const trades: ClosedTrade[] = []
  for (let i = 0; i < n; i++) {
    const base = 1 + ((h >>> (i * 4)) % 300) / 100
    const entry = base
    const dir = ((h >>> (i * 5)) % 2) === 0 ? 1 : -1
    const exit = base + dir * ((1 + ((h >>> (i * 6)) % 30)) / 1000)
    const pnl = Number((dir * (1 + ((h >>> (i * 7)) % 40)) / 10).toFixed(2))
    trades.push({
      date: `2026-08-${String(26 - i).padStart(2, '0')} 0${i}:00`,
      symbol: SYMBOLS[i % SYMBOLS.length],
      action: dir > 0 ? 'BUY' : 'SELL',
      entry: Number(entry.toFixed(4)),
      exit: Number(exit.toFixed(4)),
      pnl,
    })
  }
  return trades
}
