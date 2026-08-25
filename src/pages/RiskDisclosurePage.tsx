import { Link } from 'react-router-dom'
import { LegalDocument, type LegalSection } from '../components/LegalDocument'

const SECTIONS: LegalSection[] = [
  {
    title: 'High-Risk Warning',
    paragraphs: [
      'Trading foreign exchange, cryptocurrencies, contracts for difference (CFDs), stocks, indices, commodities, and other financial instruments carries a high level of risk and may not be suitable for all investors. The high degree of leverage available in some markets can work against you as well as for you.',
    ],
  },
  {
    title: 'You Could Lose Your Capital',
    paragraphs: [
      'Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. You could sustain a loss of some or all of your initial investment. You should not invest money that you cannot afford to lose.',
    ],
  },
  {
    title: 'AI Analysis Is Not Infallible',
    paragraphs: ['Be aware that:'],
    list: [
      'AI-generated analysis, signals, and predictions can be incorrect.',
      'Pattern recognition and historical data do not predict future price movements.',
      'Past performance, backtests, and simulations do not guarantee future results.',
      'Every signal includes a confidence score — treat it as a research input, not a certainty.',
    ],
  },
  {
    title: 'Market Volatility',
    paragraphs: [
      'Financial markets can move rapidly and unpredictably. Price gaps, flash crashes, and periods of extreme volatility occur regularly — particularly in cryptocurrency markets, which operate 24/7 with no circuit breakers. A stop-loss order may not protect you at the exact price you expect during such events.',
    ],
  },
  {
    title: 'Leverage Risk',
    paragraphs: [
      'Leveraged products magnify both gains and losses. A small adverse price movement can result in losses that exceed your initial margin. You should fully understand how margin and leverage work before using them.',
    ],
  },
  {
    title: 'Not Financial Advice',
    paragraphs: [
      'Snap Trader AI is a market research and analysis platform — not a broker, financial advisor, or investment service. Nothing on this site constitutes a recommendation or solicitation to buy or sell any financial instrument. All trading decisions are yours alone.',
    ],
  },
  {
    title: 'Data Labels',
    paragraphs: [
      'All data on our platform is clearly labelled: Live, Delayed, Backtested, or Illustrative. Verify the label before acting on any information. Delayed data may not reflect current market conditions, and illustrative examples are demonstrations — not real results.',
    ],
  },
  {
    title: 'Your Responsibility',
    paragraphs: ['By using this platform, you acknowledge that:'],
    list: [
      'You will verify information independently before acting on it.',
      'You will seek advice from an independent financial advisor if you have any doubts.',
      'You will only trade with capital you can afford to lose.',
      'You are solely responsible for your trading decisions and their outcomes.',
    ],
  },
]

export function RiskDisclosurePage() {
  return (
    <LegalDocument
      title="Risk Disclosure"
      heading={
        <>
          Risk <span className="text-gradient-brand">Disclosure</span>
        </>
      }
      intro="Trading involves substantial risk. Please read this disclosure carefully before using the Snap Trader AI platform."
      effectiveDate="August 2026"
      dateLabel="Last updated"
      sections={SECTIONS}
      contactContent={
        <p className="text-sm leading-relaxed text-muted-dark md:text-base">
          Questions about this risk disclosure? Reach us at{' '}
          <a
            href="mailto:support@snap-traderai.com"
            className="font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            support@snap-traderai.com
          </a>{' '}
          or through our{' '}
          <Link
            to="/contact"
            className="font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            contact page
          </Link>
          .
        </p>
      }
      note="This disclosure is not exhaustive and does not replace the risk warnings provided by your broker. Always read your broker's own risk disclosure and terms before trading."
    />
  )
}
