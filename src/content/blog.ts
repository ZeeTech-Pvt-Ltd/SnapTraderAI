import { BookOpen, Brain, CandlestickChart, FlaskConical, ShieldCheck } from 'lucide-react'

/** Category → gradient pair + icon for the generated featured image. */
export function coverByCategory(category: string): {
  from: string
  to: string
  icon: typeof BookOpen
} {
  const covers: Record<string, { from: string; to: string; icon: typeof BookOpen }> = {
    'Risk Management': { from: '#00b4e6', to: '#00c8ac', icon: ShieldCheck },
    'AI Insights': { from: '#3b82f6', to: '#8b5cf6', icon: Brain },
    'Trading Basics': { from: '#10b981', to: '#00b4e6', icon: CandlestickChart },
    Strategy: { from: '#f59e0b', to: '#ef4444', icon: FlaskConical },
    Education: { from: '#06b6d4', to: '#6366f1', icon: BookOpen },
  }
  return covers[category] ?? covers.Education
}

export interface Post {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'why-your-stop-loss-keeps-getting-hit',
    category: 'Risk Management',
    title: 'Why Your Stop Loss Keeps Getting Hit (And What to Do About It)',
    excerpt:
      'If every stop you place gets swept before the move happens, the problem usually isn’t the market — it’s where you put the stop. Here’s how to place stops at levels that actually matter.',
    date: 'Aug 24, 2026',
    readTime: '6 min read',
    body: [
      'Every trader knows the feeling: price taps your stop, reverses, and runs straight to your target — without you. It feels personal. It isn’t. What it usually means is that your stop was sitting exactly where everyone else’s was.',
      'Stops placed at round numbers, just below the most obvious swing low, or at a fixed pip distance are crowd magnets. Liquidity pools form around those levels because that is where the orders collect. When price sweeps a level and reverses, it is often simply filling the resting orders before moving on.',
      'The fix starts with structure. Instead of asking “how much can I afford to lose?”, ask “where is this trade idea wrong?”. The invalidation level — the price that would prove the setup false — is the only honest place for a stop. If that distance is too large for your risk budget, the answer is not to move the stop closer. It is to reduce position size.',
      'A second habit helps: give the stop breathing room beyond the obvious level. If the swing low is at 1.0800 and everyone’s stop sits at 1.0795, place yours a few pips beyond the noise — below the wick extremes, not below the close.',
      'Finally, track the data. If your stop distances vary wildly from trade to trade, you are sizing by hope, not by plan. Consistent risk per trade, with stops at structurally honest levels, turns the “they always hit my stop” feeling into a measurable, fixable statistic.',
      'Good stops are not shields. They are the line where your idea is proven wrong — and walking away early at that line is the cheapest tuition the market will ever charge you.',
    ],
  },
  {
    slug: 'how-ai-grades-a-chart-inside-the-setup-score',
    category: 'AI Insights',
    title: 'How AI Grades a Chart: Inside the Setup Score',
    excerpt:
      'The setup score isn’t a black box. We break down exactly what the engine measures — trend quality, structure, volume agreement — and why the same rules apply to every chart.',
    date: 'Aug 19, 2026',
    readTime: '5 min read',
    body: [
      'When Snap Trader AI shows you a setup score, that number is the output of a fixed checklist — the same one, applied the same way, to every chart on every market. There is no mood, no favourite pair, no “vibes”.',
      'The first thing the engine measures is trend quality. That means higher highs and higher lows in an uptrend, the slope of key moving averages, and whether price is trading above or below the levels that matter. A clean trend scores high; a choppy range scores low — no matter how exciting the candle pattern looks.',
      'Next comes structure. The engine marks support and resistance from swing points and volume areas, then checks whether the current setup sits in a sensible location. An entry pressed against a wall of overhead supply scores worse than one with clear space above it.',
      'Volume agreement is the third pillar. A breakout on rising volume is evidence; a breakout on falling volume is a rumour. The score weighs whether the activity behind the move confirms the story the price is telling.',
      'Finally, the score checks confirmation: has the pattern actually completed, or is it still forming? Half-formed setups are downgraded, not ignored — the engine tells you what is missing instead of guessing.',
      'Because the checklist never changes, scores become comparable. A 7.8 on gold means the same quality as a 7.8 on the Nasdaq. That comparability is the point — it lets you study your own decisions after the fact and learn which score range actually pays.',
    ],
  },
  {
    slug: 'the-recovery-problem-losses-are-not-symmetrical',
    category: 'Risk Management',
    title: 'The Recovery Problem: Losses Are Not Symmetrical',
    excerpt:
      'Drop 10% and you need 11% back. Drop 50% and you need to double your account just to reach the starting line. Small, consistent sizing keeps you out of the deep end.',
    date: 'Aug 12, 2026',
    readTime: '4 min read',
    body: [
      'Percentages play a cruel trick on traders. A 10% loss does not need a 10% gain to recover — it needs 11.1%. A 25% drawdown needs 33%. A 50% drawdown needs 100%: you must double what is left just to get back to where you started.',
      'The reason is simple arithmetic. When you lose, the base your future gains grow from is smaller. The deeper the hole, the steeper the climb out of it. This curve is why drawdown control is the single most important variable in long-term trading.',
      'Position sizing is the only lever that keeps you on the shallow end. Risking 1% per trade means a brutal ten-loss streak costs roughly 10% of the account — painful, but recoverable. Risking 10% per trade means the same streak can end the account entirely.',
      'There is a second, quieter cost to deep drawdowns: behaviour. Traders who need a double just to break even start forcing trades, doubling up, and reaching for the one big winner. That psychology usually digs the hole deeper.',
      'The boring discipline — fixed risk per trade, stops at invalidation, no revenge sizing — is what keeps the recovery math working for you instead of against you. Small, consistent sizing means a normal winning streak is enough to repair the damage.',
      'Use the risk calculator before every session, not after the drawdown. Fix the numbers first, then let the chart do whatever it wants.',
    ],
  },
  {
    slug: 'scalping-vs-swing-trading-choosing-your-battlefield',
    category: 'Trading Basics',
    title: 'Scalping vs Swing Trading: Choosing Your Battlefield',
    excerpt:
      'One-minute charts and daily charts reward completely different habits. A quick guide to picking the timeframe that fits your schedule, temperament and account size.',
    date: 'Aug 5, 2026',
    readTime: '7 min read',
    body: [
      'Scalping and swing trading are not just different timeframes — they are different games with different rules, different costs, and different personality requirements. Choosing the wrong one is one of the most common reasons new traders quit.',
      'Scalping rewards speed. You read a 1M or 5M chart, take a small move, and repeat. The edge is built on many small wins, which means spreads and commissions matter enormously. If your cost per round trip is two pips and your average win is six, you are giving back a third of every winner before it starts.',
      'Swing trading rewards patience. Positions run for days, so the spread is a rounding error — but overnight financing and weekend gaps become real factors. The edge is built on catching multi-day moves, which means your win rate can be lower while your average win grows.',
      'Temperament decides more than skill. Scalping suits traders who can take twenty quick decisions without tilting; swing trading suits traders who can hold through a red Tuesday without touching anything. Be honest about which one you are.',
      'Schedule matters too. Scalping needs you at the screen during the active sessions. Swing trading fits around a day job — you set the plan on Sunday, check once a day, and let time do the heavy lifting.',
      'There is no better battlefield, only a better fit. Most traders improve the fastest by picking one timeframe family, mastering it for a quarter, and only then experimenting with the other. Spread across both too early, and you get the worst of both worlds.',
    ],
  },
  {
    slug: 'backtesting-honesty-why-most-strategies-fail-live',
    category: 'Strategy',
    title: 'Backtesting Honesty: Why Most Strategies Fail Live',
    excerpt:
      'Most backtests are too kind to survive real markets. Out-of-sample splits, walk-forward testing and look-ahead protection — the checks that separate data from wishful thinking.',
    date: 'Jul 29, 2026',
    readTime: '8 min read',
    body: [
      'The gap between a beautiful backtest and a bleeding live account has a name: overfitting. A strategy tuned on one slice of history learns the noise along with the signal — and falls apart the moment the noise changes.',
      'The first honesty check is the out-of-sample split. Build your rules on one period, then validate them on data you never touched while designing. If the strategy only works on the period it was built on, it was never a strategy — it was a memory.',
      'Walk-forward testing goes further. You roll the sample window forward in steps, re-optimising each step and testing on the next. A real edge survives the walk; a curve-fit dies the moment the market changes character.',
      'Look-ahead protection sounds obvious but is violated constantly. The engine must never use information on a bar that wasn’t available when the bar closed. A backtest that fills you at the opening price of the breakout candle is pretending you knew the breakout before it happened.',
      'Then there are the costs. Spreads, commissions and slippage on every single trade — not just a flat deduction at the end. A 200-trade test with realistic costs can turn a confident winner into a clear loser.',
      'Finally, stress the results. Monte Carlo runs reshuffle trade order and ask the uncomfortable question: was the return a steady grind, or one lucky month doing all the work? If the edge survives the shuffle, it survives doubt.',
      'Honest backtesting doesn’t guarantee profit. It removes the strategies that never worked, and hands you a benchmark to hold your live results against. That is exactly what a professional process looks like.',
    ],
  },
  {
    slug: 'reading-market-structure-without-overthinking',
    category: 'Education',
    title: 'Reading Market Structure Without Overthinking',
    excerpt:
      'Forget the 26-indicator dashboard. Learn to spot higher highs, lower lows and liquidity zones — the three shapes every reliable setup is built on.',
    date: 'Jul 22, 2026',
    readTime: '5 min read',
    body: [
      'Most beginners drown in indicators before they learn the only chart feature that matters: market structure. Structure tells you who is in control, where the market is likely to turn, and where your trade idea becomes wrong.',
      'Start with the basics. An uptrend is a series of higher highs and higher lows; a downtrend is the reverse. When price stops making higher lows, the trend is telling you something — listen before your indicators do.',
      'Liquidity zones are the second shape. Old highs and lows, round numbers, and the areas where price spent a long time consolidating all hold resting orders. Price gravitates toward these zones, and the best entries often come from how price reacts when it arrives.',
      'The third shape is the break and retest. A level that held twice breaks, then price returns to it from the other side and finds new buyers or sellers. That retest — confirmation, not prediction — is where structure traders earn their edge.',
      'You do not need twenty indicators to see any of this. A clean chart with swing highs and lows marked, plus a volume histogram, covers most of the work. Everything else is decoration until the structure says otherwise.',
      'Practice by marking up one chart a day: trend, liquidity, levels. Within a month, you will see the market’s skeleton instead of its noise — and that is when the real learning begins.',
    ],
  },
]
