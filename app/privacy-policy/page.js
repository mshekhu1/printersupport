// app/privacy-policy/page.js
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { webPage, stringifySchema } from '@/lib/schema';

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
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - ZamZam Print Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Remote Printer Support Services',
    description: 'Learn how we collect, use, and protect your information when using our remote printer support services.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/privacy-policy',
  },
};

// Force static generation (SSG)
export const dynamic = 'force-static';

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Privacy Policy', url: 'https://www.zamzamprint.com/privacy-policy' }
  ];

  // Generate schema
  const webPageSchema = webPage({
    name: 'Privacy Policy | Remote Printer Support Services',
    description: 'Learn how we collect, use, and protect your information when using our remote printer support services. Your privacy is our priority. Secure, user-approved remote sessions.',
    url: '/privacy-policy',
    breadcrumb: breadcrumbItems,
    datePublished: '2024-01-01',
    dateModified: lastUpdated,
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(webPageSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-lg text-slate-600 italic">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our remote printer support services.
        </p>
      </header>

      {/* Information We Collect */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Information We Collect</h2>
        <p className="text-lg text-gray-700 mb-4">We collect the following information:</p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Name and email address</li>
          <li>Contact details submitted through forms</li>
          <li>Basic device and browser information</li>
          <li>Issue details related to your printer problem</li>
        </ul>
        <div className="bg-green-50 p-4 border-l-4 border-green-500 rounded-r">
          <p className="text-gray-800">
            <strong>Important:</strong> We do not collect sensitive personal information such as passwords or payment card details during support sessions.
          </p>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">How We Use Your Information</h2>
        <p className="text-lg text-gray-700 mb-4">We use your information to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Provide remote printer support services</li>
          <li>Respond to support requests and inquiries</li>
          <li>Improve our website and service quality</li>
          <li>Communicate service-related updates</li>
        </ul>
      </section>

      {/* Remote Support Sessions */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Remote Support Sessions</h2>
        <p className="text-lg text-gray-700 mb-4">Remote sessions are:</p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>User-approved:</strong> Sessions only start with your explicit permission</li>
          <li><strong>Secure:</strong> End-to-end encrypted connections</li>
          <li><strong>Temporary:</strong> No persistent access to your system</li>
          <li><strong>Ended immediately:</strong> Terminated right after service completion</li>
        </ul>
        <div className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded-r">
          <p className="text-gray-800">
            <strong>Your Control:</strong> We do not access your system without your permission.
          </p>
        </div>
      </section>

      {/* Data Protection */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Data Protection</h2>
        <p className="text-lg text-gray-700">
          We take reasonable security measures to protect your data from unauthorized access, misuse, or disclosure. Our security protocols are regularly updated to meet industry standards.
        </p>
      </section>

      {/* Third-Party Services */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Third-Party Services</h2>
        <p className="text-lg text-gray-700 mb-4">We may use third-party tools for:</p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Website analytics</li>
          <li>Secure remote access</li>
          <li>Payment processing</li>
        </ul>
        <p className="text-gray-700">These providers have their own privacy policies.</p>
      </section>

      {/* Updates to This Policy */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Updates to This Policy</h2>
        <p className="text-lg text-gray-700">
          We may update this Privacy Policy at any time. Changes will be posted on this page. We encourage you to review this policy periodically.
        </p>
      </section>

      {/* Contact Section */}
      <section className="my-10 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-3">Have Questions?</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about this Privacy Policy, please call us at <strong>+1 888 759 4448</strong> or use the phone button below to reach support immediately.
        </p>
        <a
          href="tel:+1 888 759 4448"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 888 759 4448
        </a>
      </section>
      <div className="mt-10 text-gray-700 max-w-3xl">
        <p>
          📞 Need immediate help? Call <strong>+1 888 759 4448</strong> and get fast,
          reliable printer support from ZamZam Print experts.
        </p>
      </div>

      {/* Footer Info */}
      <footer className="mt-12 text-center text-gray-500 text-sm border-t pt-8">
        <p>Last Updated: {lastUpdated}</p>
      </footer>
    </main>
  );
}
