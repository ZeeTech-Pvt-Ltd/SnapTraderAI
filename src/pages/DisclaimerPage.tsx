import { Link } from 'react-router-dom'
import { LegalDocument, type LegalSection } from '../components/LegalDocument'

const SECTIONS: LegalSection[] = [
  {
    title: 'Disclaimer',
    paragraphs: [
      'All content on the SnapTrader AI (Snap Trader AI) website is provided for general informational and educational purposes only.',
    ],
  },
  {
    title: 'No Financial Advice',
    paragraphs: [
      'Nothing on this website constitutes financial, investment, legal, tax, or professional advice, nor a recommendation to buy, sell, or hold any financial instrument. Always seek independent advice from a licensed professional before making any trading or investment decision.',
    ],
  },
  {
    title: 'Risk Acknowledgment',
    paragraphs: [
      'Trading Forex, CFDs, cryptocurrencies, stocks, and other derivatives involves substantial risk. Losses may exceed your initial deposit, and you may lose more than you invest. Past performance — including backtests, agent performance and platform statistics — is not indicative of future results.',
    ],
  },
  {
    title: 'No Liability',
    paragraphs: [
      'We make no warranties as to the accuracy, completeness, or timeliness of the information on this website. Snap Trader AI, its affiliates, partners, and employees shall not be held liable for any losses or damages arising from your use of the site, its tools, or its content.',
    ],
  },
  {
    title: 'Independent Verification',
    paragraphs: [
      'You are responsible for verifying all information yourself before acting on it. Where appropriate, consult licensed financial, tax, or legal advisors in your jurisdiction.',
    ],
  },
  {
    title: 'No Guarantees',
    paragraphs: [
      'We do not guarantee trading profits, the accuracy of data, or uninterrupted access to the platform. Technical issues, delays, and errors may occur.',
    ],
  },
  {
    title: 'External Links',
    paragraphs: [
      'Links to third-party websites are provided for convenience only. We do not endorse, control, or assume responsibility for the content or practices of external sites.',
    ],
  },
  {
    title: 'Your Responsibility',
    paragraphs: [
      'All trading decisions are made entirely at your own risk. By using this website, you expressly release Snap Trader AI from any liability arising from your trading activities. Never trade with money you cannot afford to lose.',
    ],
  },
]

export function DisclaimerPage() {
  return (
    <LegalDocument
      title="Disclaimer"
      heading={<span className="text-gradient-brand">Disclaimer</span>}
      intro="This disclaimer applies to the SnapTrader AI website and platform. By using the site, you accept the terms of this disclaimer."
      effectiveDate="August 2026"
      sections={SECTIONS}
      contactContent={
        <p className="text-sm leading-relaxed text-muted-dark md:text-base">
          Questions about this disclaimer can be directed to{' '}
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
      note="Site Risk Disclosure: Trading Forex, CFDs, cryptocurrencies, stocks and derivatives involves significant risk of loss and is not suitable for all investors. Never invest more than you can afford to lose, and always seek independent financial advice where appropriate. Snap Trader AI accepts no liability for trading losses."
    />
  )
}
