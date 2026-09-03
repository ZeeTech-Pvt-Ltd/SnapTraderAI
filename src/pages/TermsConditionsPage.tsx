import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { localizedPath, splitStyledTail } from '../i18n'
import { LegalDocument, type LegalSection } from '../components/LegalDocument'

const SECTIONS: LegalSection[] = [
  {
    title: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using the SnapTrader AI website (Snap Trader AI), you confirm that you have read, understood, and agreed to these Terms & Conditions and to our Privacy Policy. These terms apply to all visitors, users and others who access the site.',
    ],
  },
  {
    title: 'Use of the Website',
    paragraphs: [
      'You must be at least 18 years old, or the age of majority in your jurisdiction, to use this website. You agree to use the site lawfully and to refrain from any actions that could damage, disable, overburden, or impair its functionality, or interfere with any other party\'s use of the site.',
    ],
  },
  {
    title: 'Risk Disclaimer',
    paragraphs: [
      'Trading Forex, CFDs, cryptocurrencies and other financial instruments involves significant risk of loss and is not suitable for all investors. All content on this website is provided for informational and educational purposes only and does not constitute financial or investment advice.',
      'We do not guarantee profits, and past performance — including backtests, agent performance and platform statistics — does not guarantee future results. You are solely responsible for your own trading decisions.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, Snap Trader AI, its affiliates, partners, and employees shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of — or inability to use — the website, its tools, or its content.',
      'If you are dissatisfied with any portion of the service, your sole and exclusive remedy is to stop using the website.',
    ],
  },
  {
    title: 'Third-Party Links',
    paragraphs: [
      'The website may contain links to third-party websites that are not operated by us. We assume no responsibility for the content, privacy policies, or practices of any third-party sites and encourage you to review their terms before use.',
    ],
  },
  {
    title: 'Account Responsibility',
    paragraphs: [
      'Where applicable, you are responsible for keeping your login credentials confidential and for all activity that occurs under your account. You agree to notify us immediately of any unauthorised use.',
      'We reserve the right to suspend or terminate accounts at our discretion, including for suspected misuse.',
    ],
  },
  {
    title: 'Termination',
    paragraphs: [
      'We may suspend or terminate your access to the website without notice for any violation of these terms, or for engaging in unlawful or fraudulent activity.',
    ],
  },
  {
    title: 'Changes to the Terms',
    paragraphs: [
      'We may revise these terms at any time. Changes take effect immediately upon posting on this page, and your continued use of the website constitutes acceptance of the revised terms.',
    ],
  },
  {
    title: 'Governing Law',
    paragraphs: [
      'These terms are governed by the laws of the jurisdiction in which the platform operator is registered, without regard to conflict-of-law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of that jurisdiction.',
    ],
  },
]

export function TermsConditionsPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of the heading in every language.
  const [head, tail] = splitStyledTail(t('Terms & Conditions'), 1)

  return (
    <LegalDocument
      title={t('Terms & Conditions')}
      heading={
        <>
          {head} <span className="text-gradient-brand">{tail}</span>
        </>
      }
      intro={t('These Terms & Conditions govern your use of the SnapTrader AI website and platform. Please read them carefully before using the site.')}
      effectiveDate="August 2026"
      sections={SECTIONS}
      contactContent={
        <p className="text-sm leading-relaxed text-muted-dark md:text-base">
          {t('Questions about these terms can be directed to')}{' '}
          <a
            href="mailto:support@snap-traderai.com"
            className="font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            support@snap-traderai.com
          </a>{' '}
          {t('or through our')}{' '}
          <Link
            to={localizedPath('/contact')}
            className="font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            {t('contact page')}
          </Link>
          .
        </p>
      }
      note="Note: Snap Trader AI is a research and analysis platform — not a broker and not a regulated financial services firm. We do not execute trades, hold client funds, or accept deposits. Trading with any broker is subject to that broker's own terms."
    />
  )
}
