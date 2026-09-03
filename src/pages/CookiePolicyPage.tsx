import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { localizedPath, splitStyledTail } from '../i18n'
import { LegalDocument, type LegalSection } from '../components/LegalDocument'

const SECTIONS: LegalSection[] = [
  {
    title: 'What Are Cookies',
    paragraphs: [
      'Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, understand how you use it, and deliver a smoother experience on your next visit.',
    ],
  },
  {
    title: 'How We Use Cookies',
    paragraphs: ['We use the following categories of cookies:'],
    list: [
      'Essential cookies — keep the site working, including login sessions and security features.',
      'Preference cookies — remember your settings, such as language and display choices.',
      'Analytics cookies — help us understand which pages are visited and how users move through the site, so we can improve it.',
      'Marketing cookies — used to show relevant offers and measure campaign performance.',
    ],
  },
  {
    title: 'Third-Party Cookies',
    paragraphs: [
      'Some cookies are set by third-party services we use, such as analytics and chat tools. These providers have their own cookie policies, which we encourage you to review. We do not control those cookies.',
    ],
  },
  {
    title: 'Managing Cookies',
    paragraphs: [
      'You can control and delete cookies through your browser settings at any time. You may also block cookies entirely — but please note that some parts of the site may not function correctly without them.',
    ],
  },
  {
    title: 'Consent',
    paragraphs: [
      'When you first visit our site, we ask for your consent to place non-essential cookies. You can change or withdraw your consent at any time through your browser settings or by clearing stored cookies.',
    ],
  },
  {
    title: 'Data Collected by Cookies',
    paragraphs: [
      'Cookies may collect information such as your IP address, browser type, device type, pages visited, and time spent on the site. This data is used in aggregate to improve our services and is never sold to third parties.',
    ],
  },
  {
    title: 'Retention',
    paragraphs: [
      'Cookie retention depends on the type: session cookies expire when you close your browser, while persistent cookies remain until they expire or you delete them. Analytics data is kept only as long as needed for our legitimate business purposes.',
    ],
  },
  {
    title: 'Changes to This Policy',
    paragraphs: [
      'We may update this cookie policy from time to time. Changes will be posted on this page with a revised date. Continued use of the site after changes are posted constitutes acceptance.',
    ],
  },
]

export function CookiePolicyPage() {
  const { t } = useTranslation()

  // Gradient covers the tail of the heading in every language.
  const [head, tail] = splitStyledTail(t('Cookie Policy'), 1)

  return (
    <LegalDocument
      title={t('Cookie Policy')}
      heading={
        <>
          {head} <span className="text-gradient-brand">{tail}</span>
        </>
      }
      intro={t('What cookies are, how we use them, and how you can manage your preferences.')}
      effectiveDate="August 2026"
      dateLabel="Last updated"
      sections={SECTIONS}
      contactContent={
        <p className="text-sm leading-relaxed text-muted-dark md:text-base">
          {t('Questions about cookies or this policy? Reach us at')}{' '}
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
      note="Note: Trading Forex, CFDs, cryptocurrencies and other financial instruments involves significant risk of loss. Cookie preferences do not affect this risk — trade only with capital you can afford to lose."
    />
  )
}
