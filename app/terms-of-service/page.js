// app/terms-of-service/page.js

// SEO Metadata for the page
export const metadata = {
  title: 'Terms of Service | Remote Printer Support',
  description: 'Read our Terms of Service for remote printer support services. Understand user responsibilities, service limitations, payment terms, and liability information for our independent technical support.',
  keywords: ['terms of service', 'remote printer support', 'terms and conditions', 'printer support terms', 'service agreement'],
  authors: [{ name: 'Remote Printer Support' }],
  
}

// Force static generation (SSG)
export const dynamic = 'force-static';

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 'service-description',
      title: 'Service Description',
      content: [
        'We provide independent remote technical support for printer-related issues, including setup, configuration, and troubleshooting.',
        'We are not affiliated with any printer manufacturer.'
      ],
      type: 'paragraph'
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      intro: 'You agree to:',
      items: [
        'Provide accurate information about your printer issue',
        'Grant permission for remote access during the support session',
        'Ensure you have legal rights to access the device'
      ],
      type: 'list'
    },
    {
      id: 'service-limitations',
      title: 'Service Limitations',
      items: [
        'We do not provide physical repairs or hardware replacement',
        'Some issues may depend on hardware condition or manufacturer limitations',
        'Resolution is not guaranteed if the issue is hardware-related'
      ],
      type: 'list'
    },
    {
      id: 'payments',
      title: 'Payments',
      content: [
        'All payments are required before the support session begins unless otherwise stated.'
      ],
      type: 'paragraph'
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      intro: 'We are not responsible for:',
      items: [
        'Hardware failures',
        'Data loss caused by existing system issues',
        'Manufacturer defects'
      ],
      note: 'Our liability is limited to the amount paid for the service.',
      type: 'list'
    },
    {
      id: 'termination',
      title: 'Termination',
      content: [
        'We reserve the right to refuse or terminate service if misuse or abuse is detected.'
      ],
      type: 'paragraph'
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to Terms',
      content: [
        'These terms may be updated without prior notice. Continued use of the service implies acceptance of updated terms.'
      ],
      type: 'paragraph'
    }
  ];

  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-700 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              By using our website and remote printer support services, you agree to the following terms and conditions.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <article 
              key={section.id} 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600"
              id={section.id}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg mr-3">
                  {idx + 1}
                </span>
                {section.title}
              </h2>

              {section.intro && (
                <p className="text-gray-700 text-lg mb-4 font-medium">{section.intro}</p>
              )}

              {section.content && section.type === 'paragraph' && (
                <div className="space-y-4">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-gray-700 text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {section.items && section.type === 'list' && (
                <ul className="space-y-3 mb-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.note && (
                <div className="mt-6 p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-lg">
                  <p className="text-gray-800 font-medium">
                    <strong className="text-amber-900">Note:</strong> {section.note}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Important Notice */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-10 text-white">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl font-bold mb-4">Important Notice</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-blue-200">
          <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Questions About Our Terms?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            If you have any questions about these Terms of Service, please don't hesitate to contact us.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us
          </a>
        </section>

        {/* Acceptance Notice */}
        <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-green-900 font-semibold mb-1">Agreement Acknowledgment</p>
              <p className="text-green-800">
                Your use of our services constitutes acceptance of these terms. Please review them carefully before proceeding with any service request.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-12 text-center space-y-2">
          <p className="text-gray-500 text-sm">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-gray-400 text-xs">
            These terms are governed by the laws of the United States
          </p>
        </footer>
      </main>
    </div>
  );
}