export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'What is Snap Trader AI?',
    answer:
      'Snap Trader AI is an AI-powered chart analysis platform. Upload a chart or pick a market, and our engines scan trend, momentum and patterns to deliver entry and exit insights with confidence scoring. It is a research tool — not a broker.',
  },
  {
    question: 'Is Snap Trader AI a broker?',
    answer:
      'No. Snap Trader AI does not execute trades, hold client funds or accept deposits. You keep full control of your trading and place orders through your own broker. Our job is to make your research clearer and faster.',
  },
  {
    question: 'Do I need to deposit money to use the platform?',
    answer:
      'No minimum deposit is required to use our analysis tools. Trading itself requires capital with your own broker, and we always recommend starting with paper trading until you are confident in your process.',
  },
  {
    question: 'Can AI trading guarantee profits?',
    answer:
      'No — and any platform that says otherwise should be treated with caution. Markets are unpredictable. Snap Trader AI provides analysis and second opinions; it cannot and does not guarantee trading results.',
  },
  {
    question: 'Which markets can I analyse with Snap Trader AI?',
    answer:
      'Stocks, forex, crypto, indices, commodities, ETFs and futures. Every market shows a data label — live or delayed — so you always know what you are looking at.',
  },
  {
    question: 'How accurate is AI market analysis?',
    answer:
      'Every signal ships with a confidence score and its data source. Accuracy varies by market, timeframe and conditions — treat signals as observations to verify, not instructions to follow blindly.',
  },
  {
    question: 'Is my data safe with Snap Trader AI?',
    answer:
      'Yes. We use encryption at rest and in transit, strict access controls and regular security reviews. We do not sell your data — your personal information and trading activity remain private.',
  },
  {
    question: 'Can beginners use Snap Trader AI?',
    answer:
      'Absolutely. The Trading Academy teaches the fundamentals of chart reading and risk, and paper trading lets you practise with virtual funds before risking real capital. Start small and build from there.',
  },
]
