// app/privacy-policy/page.js
import PrivacyPolicyClient from './PrivacyPolicyClient';

// SEO Metadata for the page
export const metadata = {
  title: 'Privacy Policy | Remote Printer Support Services',
  description: 'Learn how we collect, use, and protect your information when using our remote printer support services. Your privacy is our priority. Secure, user-approved remote sessions.',
  keywords: ['privacy policy', 'remote printer support', 'data protection', 'printer support privacy', 'remote support services'],
  authors: [{ name: 'ZamZam Print Support' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Privacy Policy | Remote Printer Support Services',
    description: 'Your privacy is important to us. Learn about our data collection and protection practices for remote printer support services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/privacy-policy',
    siteName: 'Remote Printer Support Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Remote Printer Support Services',
    description: 'Learn how we collect, use, and protect your information when using our remote printer support services.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/privacy-policy',
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

// Force static generation (SSG)
export const dynamic = 'force-static';

export default function PrivacyPolicyPage() {
  // Static data that will be pre-rendered at build time
  const sections = [
    {
      id: 'collection',
      title: 'Information We Collect',
      icon: 'FileText',
      items: [
        'Name and email address',
        'Contact details submitted through forms',
        'Basic device and browser information',
        'Issue details related to your printer problem'
      ],
      note: 'We do not collect sensitive personal information such as passwords or payment card details during support sessions.',
      noteType: 'important'
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: 'Users',
      description: 'We use your information to:',
      items: [
        'Provide remote printer support services',
        'Respond to support requests and inquiries',
        'Improve our website and service quality',
        'Communicate service-related updates'
      ]
    },
    {
      id: 'remote',
      title: 'Remote Support Sessions',
      icon: 'Eye',
      description: 'Remote sessions are:',
      features: [
        { label: 'User-approved', desc: 'Sessions only start with your explicit permission' },
        { label: 'Secure', desc: 'End-to-end encrypted connections' },
        { label: 'Temporary', desc: 'No persistent access to your system' },
        { label: 'Ended immediately', desc: 'Terminated right after service completion' }
      ],
      note: 'We do not access your system without your permission.',
      noteType: 'control'
    },
    {
      id: 'protection',
      title: 'Data Protection',
      icon: 'Lock',
      content: 'We take reasonable security measures to protect your data from unauthorized access, misuse, or disclosure. Our security protocols are regularly updated to meet industry standards.'
    },
    {
      id: 'thirdparty',
      title: 'Third-Party Services',
      icon: 'Shield',
      description: 'We may use third-party tools for:',
      items: [
        'Website analytics',
        'Secure remote access',
        'Payment processing'
      ],
      note: 'These providers have their own privacy policies.'
    },
    {
      id: 'updates',
      title: 'Updates to This Policy',
      icon: 'RefreshCw',
      content: 'We may update this Privacy Policy at any time. Changes will be posted on this page. We encourage you to review this policy periodically.'
    }
  ];

  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return <PrivacyPolicyClient sections={sections} lastUpdated={lastUpdated} />;
}