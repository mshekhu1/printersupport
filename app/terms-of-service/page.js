import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { webPage, stringifySchema } from '@/lib/schema';

// SEO Metadata for the page
export const metadata = {
  title: 'Terms of Service | Remote Printer Support',
  description: 'Read our Terms of Service for remote printer support services. Understand user responsibilities, service limitations, payment terms, and liability information for our independent technical support.',
  keywords: ['terms of service', 'remote printer support', 'terms and conditions', 'printer support terms', 'service agreement'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Terms of Service | Remote Printer Support',
    description: 'Read our Terms of Service for remote printer support services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/terms-of-service',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Terms of Service - ZamZam Print Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Remote Printer Support',
    description: 'Terms and conditions for remote printer support services.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

// Force static generation (SSG)
export const dynamic = 'force-static';

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Terms of Service', url: 'https://www.zamzamprint.com/terms-of-service' }
  ];

  // Generate schema
  const webPageSchema = webPage({
    name: 'Terms of Service | Remote Printer Support',
    description: 'Read our Terms of Service for remote printer support services. Understand user responsibilities, service limitations, payment terms, and liability information for our independent technical support.',
    url: '/terms-of-service',
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
          Terms of Service
        </h1>
        <p className="text-lg text-slate-600 italic">
          By using our website and remote printer support services, you agree to the following terms and conditions. Please read them carefully.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            href="/refund-policy"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Refund Policy
          </Link>
        </div>
      </header>

      {/* Service Description */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">1. Service Description</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            We provide independent remote technical support for printer-related issues, including setup, configuration, troubleshooting, driver installation, and connectivity problems.
          </p>
          <p className="text-lg text-gray-700">
            Our services are delivered remotely via secure screen-sharing sessions. We assist with software, driver, and configuration issues that can be resolved through remote access.
          </p>
          <p className="text-lg text-gray-700">
            We are an independent technical support service provider and are not affiliated with, endorsed by, or sponsored by any printer manufacturer, including but not limited to HP, Canon, Epson, Brother, Samsung, or Lexmark.
          </p>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">2. User Responsibilities</h2>
        <p className="text-lg text-gray-700 mb-4 font-semibold">By using our service, you agree to:</p>
        <ul className="list-disc ml-6 space-y-3">
          <li className="text-lg text-gray-700">Provide accurate and complete information about your printer issue and system configuration</li>
          <li className="text-lg text-gray-700">Grant explicit permission for remote access during support sessions and maintain supervision</li>
          <li className="text-lg text-gray-700">Ensure you have legal rights and authorization to access and modify the device in question</li>
          <li className="text-lg text-gray-700">Back up important data before allowing remote access, as we are not responsible for data loss</li>
          <li className="text-lg text-gray-700">Be present during remote sessions and follow technician instructions</li>
          <li className="text-lg text-gray-700">Use the service only for lawful purposes and not attempt to use it for unauthorized access</li>
        </ul>
      </section>

      {/* Service Limitations */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">3. Service Limitations</h2>
        <p className="text-lg text-gray-700 mb-4 font-semibold">Our remote support services have the following limitations:</p>
        <ul className="list-disc ml-6 space-y-3">
          <li className="text-lg text-gray-700">We do not provide physical repairs, hardware replacement, or on-site service visits</li>
          <li className="text-lg text-gray-700">Hardware-related issues (broken components, physical damage, mechanical failures) may require manufacturer service</li>
          <li className="text-lg text-gray-700">Some issues may depend on hardware condition, age, or manufacturer limitations that cannot be resolved remotely</li>
          <li className="text-lg text-gray-700">Resolution is not guaranteed for hardware-related problems or issues caused by physical damage</li>
          <li className="text-lg text-gray-700">We cannot assist with printers that are completely non-functional due to hardware failures</li>
          <li className="text-lg text-gray-700">Service availability may vary based on internet connectivity and system compatibility</li>
        </ul>
      </section>

      {/* Payment Terms */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">4. Payment Terms</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            All payments are required before the support session begins, unless otherwise agreed upon in writing.
          </p>
          <p className="text-lg text-gray-700">
            We accept major credit cards, debit cards, and other payment methods as displayed on our website.
          </p>
          <p className="text-lg text-gray-700">
            Service fees are non-refundable once a remote session has been initiated and work has begun, except as outlined in our Refund Policy.
          </p>
          <p className="text-lg text-gray-700">
            For subscription plans, billing occurs according to the selected plan terms. You may cancel subscriptions at any time through your account or by contacting support.
          </p>
          <p className="text-lg text-gray-700">
            We reserve the right to modify pricing with notice. Continued use of the service after price changes constitutes acceptance of new pricing.
          </p>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">5. Limitation of Liability</h2>
        <p className="text-lg text-gray-700 mb-4 font-semibold">To the maximum extent permitted by law, we are not responsible for:</p>
        <ul className="list-disc ml-6 space-y-3 mb-4">
          <li className="text-lg text-gray-700">Hardware failures, malfunctions, or physical damage to your printer or computer</li>
          <li className="text-lg text-gray-700">Data loss, corruption, or deletion caused by existing system issues, malware, or pre-existing conditions</li>
          <li className="text-lg text-gray-700">Manufacturer defects, warranty issues, or hardware incompatibilities</li>
          <li className="text-lg text-gray-700">Loss of business, revenue, or profits arising from printer downtime</li>
          <li className="text-lg text-gray-700">Indirect, incidental, special, or consequential damages</li>
          <li className="text-lg text-gray-700">Issues resulting from user error, failure to follow instructions, or unauthorized modifications</li>
        </ul>
        <div className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded-r">
          <p className="text-gray-800">
            <strong>Important:</strong> Our total liability for any claim arising from our services shall not exceed the amount you paid for the specific service in question.
          </p>
        </div>
      </section>

      {/* Service Termination */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">6. Service Termination</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            We reserve the right to refuse, suspend, or terminate service at any time if we detect misuse, abuse, fraudulent activity, or violation of these terms.
          </p>
          <p className="text-lg text-gray-700">
            Termination may occur if you fail to comply with payment obligations, provide false information, or engage in behavior that threatens the security of our systems or technicians.
          </p>
          <p className="text-lg text-gray-700">
            Upon termination, your access to the service will cease immediately, and any outstanding payments remain due.
          </p>
          <p className="text-lg text-gray-700">
            You may discontinue use of our service at any time by canceling any active subscriptions and ceasing to request support services.
          </p>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">7. Intellectual Property</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            All content on this website, including text, graphics, logos, and software, is the property of ZamZam Print Support or its licensors and is protected by copyright and trademark laws.
          </p>
          <p className="text-lg text-gray-700">
            You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
          </p>
          <p className="text-lg text-gray-700">
            Any feedback, suggestions, or ideas you provide regarding our service may be used by us without obligation or compensation.
          </p>
        </div>
      </section>

      {/* Privacy and Data */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">8. Privacy and Data</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Your use of our service is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.
          </p>
          <p className="text-lg text-gray-700">
            During remote support sessions, we may access your system to diagnose and resolve issues. All sessions are conducted with your explicit permission and supervision.
          </p>
          <p className="text-lg text-gray-700">
            We do not store personal files, passwords, or sensitive data accessed during support sessions beyond what is necessary to provide service.
          </p>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">9. Changes to Terms</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            We reserve the right to update, modify, or revise these Terms of Service at any time without prior notice.
          </p>
          <p className="text-lg text-gray-700">
            Material changes will be posted on this page with an updated "Last Updated" date.
          </p>
          <p className="text-lg text-gray-700">
            Your continued use of our service after changes are posted constitutes acceptance of the revised terms.
          </p>
          <p className="text-lg text-gray-700">
            If you do not agree with any changes, you must discontinue use of our service immediately.
          </p>
          <p className="text-lg text-gray-700">
            We recommend reviewing these terms periodically to stay informed of any updates.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="my-10 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-3">Important Notice</h2>
        <p className="text-gray-700 mb-4">
          By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms form a legally binding agreement between you and ZamZam Print Support.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Read Privacy Policy
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            href="/refund-policy"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Read Refund Policy
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="my-10 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-3">Questions About Our Terms?</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms of Service, please don't hesitate to contact us. Our support team is here to help clarify any concerns.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+18887594448"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 888 759 4448
          </a>
          <Link
            href="/printer-support"
            className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </section>
      <div className="mt-10 text-gray-700 max-w-3xl">
        <p>
          📞 Need immediate help? Call <strong>+1 888 759 4448</strong> and get fast,
          reliable printer support from ZamZam Print experts.
        </p>
      </div>

      {/* Footer Info */}
      <footer className="mt-12 text-center text-gray-500 text-sm border-t pt-8">
        <p className="mb-2">
          Last Updated: <span className="text-blue-600 font-semibold">{lastUpdated}</span>
        </p>
        <p className="text-gray-600 mb-4">
          These terms are governed by the laws of the United States. Any disputes will be resolved through binding arbitration in accordance with applicable state and federal laws.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
          <span>•</span>
          <Link href="/refund-policy" className="hover:text-blue-600 transition">Refund Policy</Link>
          <span>•</span>
          <Link href="/terms-of-service" className="hover:text-blue-600 transition">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}
