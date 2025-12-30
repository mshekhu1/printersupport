// app/refund-policy/page.js

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
  const eligibleReasons = [
    {
      text: 'The service was not delivered as described',
      icon: 'xCircle'
    },
    {
      text: 'A technical session did not start due to our fault',
      icon: 'xCircle'
    }
  ];

  const nonRefundableReasons = [
    {
      text: 'The issue is hardware-related and cannot be fixed remotely',
      icon: 'alert'
    },
    {
      text: 'The user disconnects or ends the session prematurely',
      icon: 'alert'
    },
    {
      text: 'Incorrect or incomplete information was provided by the user',
      icon: 'alert'
    }
  ];

  const refundSteps = [
    {
      step: 1,
      title: 'Contact our support team',
      description: 'Reach out within 7 days of service'
    },
    {
      step: 2,
      title: 'Provide order details',
      description: 'Include your order details and issue explanation'
    },
    {
      step: 3,
      title: 'Review process',
      description: 'Our team will review the request'
    }
  ];

  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-5xl font-bold mb-6">Refund Policy</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              We aim to provide fair and transparent refund practices for our remote printer support services.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Eligibility Section */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-emerald-600">
          <div className="flex items-center mb-6">
            <div className="bg-emerald-100 p-3 rounded-xl mr-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Eligibility for Refunds</h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">You may be eligible for a refund if:</p>
          
          <div className="space-y-4">
            {eligibleReasons.map((reason, idx) => (
              <div key={idx} className="flex items-start p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500 hover:bg-emerald-100 transition-colors">
                <svg className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-800">{reason.text}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Non-Refundable Section */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-amber-600">
          <div className="flex items-center mb-6">
            <div className="bg-amber-100 p-3 rounded-xl mr-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Non-Refundable Situations</h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">Refunds are not applicable if:</p>
          
          <div className="space-y-4">
            {nonRefundableReasons.map((reason, idx) => (
              <div key={idx} className="flex items-start p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:bg-amber-100 transition-colors">
                <svg className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-800">{reason.text}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Refund Process Section */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-blue-600">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-xl mr-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Refund Process</h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-8">To request a refund:</p>
          
          <div className="space-y-6 mb-8">
            {refundSteps.map((item) => (
              <div key={item.step} className="flex items-start group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-lg">
            <p className="text-gray-800 font-medium text-lg">
              <strong className="text-blue-900">Processing Time:</strong> Approved refunds are processed within 5–7 business days.
            </p>
          </div>
        </article>

        {/* Subscription Plans Section */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-purple-600">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-xl mr-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Subscription Plans</h2>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
            <p className="text-gray-800 text-lg leading-relaxed">
              Monthly support plans can be canceled anytime. Refunds apply only to unused billing periods, if applicable.
            </p>
          </div>
        </article>

        {/* Final Note Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-2xl p-10 text-white mb-8">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              We strive for customer satisfaction and handle refund requests fairly and professionally.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-emerald-200">
          <svg className="w-12 h-12 mx-auto mb-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Need to Request a Refund?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Contact our support team with your order details and we'll assist you with your refund request.
          </p>
          <a
              href="tel:+18887694448"
              className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Support
            </a>
        </section>

        {/* Trust Badge */}
        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
          <div className="flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <p className="text-green-900 font-bold text-lg">Fair & Transparent Policy</p>
              <p className="text-green-700 text-sm">We value your trust and satisfaction</p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-12 text-center space-y-2">
          <p className="text-gray-500 text-sm">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-gray-400 text-xs">
            This refund policy complies with consumer protection standards
          </p>
        </footer>
      </main>
    </div>
  );
}