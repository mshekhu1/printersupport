// app/refund-policy/page.js
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { webPage, stringifySchema } from '@/lib/schema';

// SEO Metadata for the page
export const metadata = {
  title: 'Refund Policy | Remote Printer Support Services',
  description: 'Learn about our fair and transparent refund policy for remote printer support services. Understand eligibility criteria, non-refundable situations, and the refund request process.',
  keywords: ['refund policy', 'money back guarantee', 'remote printer support refunds', 'printer support refund', 'service refund'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Refund Policy | Remote Printer Support Services',
    description: 'Learn about our fair and transparent refund policy for remote printer support services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/refund-policy',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Refund Policy - ZamZam Print Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | Remote Printer Support',
    description: 'Fair and transparent refund policy for remote printer support services.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/refund-policy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Force static generation (SSG)
export const dynamic = 'force-static';

export default function RefundPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Refund Policy', url: 'https://www.zamzamprint.com/refund-policy' }
  ];

  // Generate schema
  const webPageSchema = webPage({
    name: 'Refund Policy | Remote Printer Support Services',
    description: 'Learn about our fair and transparent refund policy for remote printer support services. Understand eligibility criteria, non-refundable situations, and the refund request process.',
    url: '/refund-policy',
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
          Refund Policy
        </h1>
        <p className="text-lg text-slate-600 italic">
          We aim to provide fair and transparent refund practices for our remote printer support services.
        </p>
      </header>

      {/* Eligibility Section */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Eligibility for Refunds</h2>
        <p className="text-lg text-gray-700 mb-4">You may be eligible for a refund if:</p>
        
        <div className="space-y-4">
          <div className="bg-emerald-50 p-4 border-l-4 border-emerald-500 rounded-r">
            <p className="text-gray-800"><strong>The service was not delivered as described</strong></p>
          </div>
          <div className="bg-emerald-50 p-4 border-l-4 border-emerald-500 rounded-r">
            <p className="text-gray-800"><strong>A technical session did not start due to our fault</strong></p>
          </div>
        </div>
      </section>

      {/* Non-Refundable Section */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Non-Refundable Situations</h2>
        <p className="text-lg text-gray-700 mb-4">Refunds are not applicable if:</p>
        
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded-r">
            <p className="text-gray-800"><strong>The issue is hardware-related and cannot be fixed remotely</strong></p>
          </div>
          <div className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded-r">
            <p className="text-gray-800"><strong>The user disconnects or ends the session prematurely</strong></p>
          </div>
          <div className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded-r">
            <p className="text-gray-800"><strong>Incorrect or incomplete information was provided by the user</strong></p>
          </div>
        </div>
      </section>

      {/* Refund Process Section */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Refund Process</h2>
        <p className="text-lg text-gray-700 mb-6">To request a refund:</p>
        
        <ol className="list-decimal ml-6 space-y-4">
          <li className="pl-2">
            <strong>Contact our support team:</strong> Reach out within 7 days of service
          </li>
          <li className="pl-2">
            <strong>Provide order details:</strong> Include your order details and issue explanation
          </li>
          <li className="pl-2">
            <strong>Review process:</strong> Our team will review the request
          </li>
        </ol>

        <div className="mt-6 bg-blue-50 p-4 border-l-4 border-blue-500 rounded-r">
          <p className="text-gray-800">
            <strong>Processing Time:</strong> Approved refunds are processed within 5–7 business days.
          </p>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Subscription Plans</h2>
        <div className="bg-purple-50 p-4 border-l-4 border-purple-500 rounded-r">
          <p className="text-gray-800">
            Monthly support plans can be canceled anytime. Refunds apply only to unused billing periods, if applicable.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="my-10 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-3">Need to Request a Refund?</h2>
        <p className="text-gray-700 mb-4">
          Contact our support team with your order details and we'll assist you with your refund request.
        </p>
        <a
          href="tel:+1 888 759 4448"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Support
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
        <p className="mt-2 text-gray-400 text-xs">
          This refund policy complies with consumer protection standards
        </p>
      </footer>
    </main>
  );
}
