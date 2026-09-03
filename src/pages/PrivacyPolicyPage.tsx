import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { splitStyledTail } from '../i18n'
import { LegalDocument, type LegalSection } from '../components/LegalDocument'

const SECTIONS: LegalSection[] = [
  {
    title: 'Information We Collect',
    paragraphs: [
      'We collect information at the point you provide it. When you contact us directly — for example through our contact page or support email — we may collect your name, email address, phone number, and the contents of your message. When you create an account or request access to the platform, we may ask for contact details including your name, company, address, email address and telephone number.',
      'We also collect limited technical information automatically, such as device type, browser, and pages visited, to keep the platform secure and working correctly.',
    ],
  },
  {
    title: 'How We Use Your Information',
    paragraphs: [
      'We use the information we collect to provide and manage our services, to improve platform performance and your user experience, and to communicate with you about your account or your inquiries.',
      'With your consent where required, we may also send you updates, offers and notifications. You can opt out of marketing communications at any time using the link in any email or by contacting us directly.',
      'We may also process information where necessary to meet our legal obligations.',
    ],
  },
  {
    title: 'Cookies and Tracking Technologies',
    paragraphs: [
      'We use cookies and similar technologies for functionality, performance measurement, understanding visitor behaviour, and remembering your preferences. Some of these cookies are essential for the site to work.',
      'You can disable cookies in your browser settings, but doing so may cause parts of the platform to stop working as intended.',
    ],
  },
  {
    title: 'Data Protection and Security',
    paragraphs: [
      'We use industry-standard safeguards — including encryption at rest and in transit, access controls, and regular security reviews — to protect your personal information.',
      'However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Data Sharing and Disclosure',
    paragraphs: [
      'We do not sell, trade, or rent your personal information. Period.',
      'We share information only with trusted service providers who help us operate the platform (such as hosting and analytics), when required by law or regulation, and to meet regulatory or anti-fraud obligations.',
    ],
  },
  {
    title: 'Your Rights',
    paragraphs: [
      'You may request access to, correction of, or deletion of your personal data at any time. Where processing relies on consent, you may withdraw that consent, and you may request a copy of the data we hold about you.',
      'To exercise any of these rights, contact us at support@snap-traderai.com.',
    ],
  },
  {
    title: 'Third-Party Links',
    paragraphs: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites, and we encourage you to review their policies before providing any information.',
    ],
  },
  {
    title: 'Data Retention',
    paragraphs: [
      'We keep personal data only for as long as necessary to fulfil the purposes described in this policy, to comply with legal obligations, and to resolve disputes.',
    ],
  },
  {
    title: 'Changes to This Policy',
    paragraphs: [
      'We may update this policy from time to time. Changes will be posted on this page with a revised effective date, and we encourage you to review it regularly.',
    ],
  },
]

export function PrivacyPolicyPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of the heading in every language.
  const [head, tail] = splitStyledTail(t('Privacy Policy'), 1)

  return (
    <LegalDocument
      title={t('Privacy Policy')}
      heading={
        <>
          {head} <span className="text-gradient-brand">{tail}</span>
        </>
      }
      intro={t('This policy explains how SnapTrader AI (Snap Trader AI) collects, uses, discloses, and protects your personal information when you visit our website or use our platform. By using the site, you agree to the practices described here.')}
      effectiveDate="August 2026"
      sections={SECTIONS}
      contactContent={
        <p className="text-sm leading-relaxed text-muted-dark md:text-base">
          {t('Questions, requests or concerns about this policy can be sent to')}{' '}
          <a
            href="mailto:support@snap-traderai.com"
            className="font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            support@snap-traderai.com
          </a>{' '}
          {t('or through our')}{' '}
          <Link
            to="/contact"
            className="font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            {t('contact page')}
          </Link>
          .
        </p>
      }
      note="Note: Snap Trader AI is a research and analysis platform — not a broker and not a regulated financial services firm. This policy applies to our website and platform; it does not apply to any broker you may choose to trade through."
    />
  )
}
