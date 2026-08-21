export type RiskLevel = 'Low' | 'Medium' | 'High'

export interface Agent {
  id: string
  name: string
  strategy: string
  risk: RiskLevel
  totalReturn: number
  series: number[]
}

/** Illustrative backtest data shown on the agents board. */
export const agents: Agent[] = [
  { id: 'SWG', name: 'Swing Agent', strategy: 'Multi-day structure', risk: 'Low', totalReturn: 20.6, series: [0, 2, 4, 3, 7, 6, 9, 12, 10, 14, 17, 15, 19, 20.6] },
  { id: 'SCP', name: 'Scalp Agent', strategy: '1–5 min momentum', risk: 'Medium', totalReturn: 12.7, series: [0, 1, 3, 2, 5, 4, 7, 9, 8, 10, 12.7] },
  { id: 'TRD', name: 'Trend Analyzer', strategy: 'Trend + pullback', risk: 'Low', totalReturn: 9.8, series: [0, 1, 0, 2, 3, 5, 4, 6, 8, 7, 9.8] },
  { id: 'BRK', name: 'Breakout Hunter', strategy: 'Range breakouts', risk: 'Medium', totalReturn: 7.5, series: [0, 2, 1, 3, 5, 4, 6, 7.5] },
  { id: 'MOM', name: 'Momentum Scout', strategy: 'RSI + volume', risk: 'Low', totalReturn: 6.2, series: [0, 1, 3, 2, 4, 5, 6.2] },
  { id: 'NWS', name: 'News Sentiment', strategy: 'Headline bias', risk: 'High', totalReturn: 5.4, series: [0, -1, 1, 3, 2, 4, 5.4] },
  { id: 'PTN', name: 'Pattern Engine', strategy: 'Chart patterns', risk: 'High', totalReturn: -3.5, series: [0, -1, -2, -4, -3, -3.5] },
]
