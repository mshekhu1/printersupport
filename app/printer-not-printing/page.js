import FAQAccordionClient from '../components/FAQAccordionClient';
import ScrollRevealClient from '../components/ScrollRevealClient';

// SEO Metadata for the page
export const metadata = {
  title: 'Printer Not Printing? Fix Printer Issues Remotely (US Support)',
  description: 'Printer not printing documents or images? Get fast remote printer support for Windows & Mac. Serving home and business users across the US.',
  keywords: ['printer not printing', 'printer issues', 'remote printer support', 'printer troubleshooting', 'printer repair', 'fix printer', 'US printer support', 'printer not printing fix', 'printer not working'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Printer Not Printing? Fix Printer Issues Remotely (US Support)',
    description: 'Printer not printing documents or images? Get fast remote printer support for Windows & Mac.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/printer-not-printing',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Not Printing? Fix Printer Issues Remotely',
    description: 'Get fast remote printer support for Windows & Mac when your printer is not printing.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/printer-not-printing',
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

export default function PrinterNotPrintingPage() {
  const symptoms = [
    'Printer accepts jobs but nothing prints',
    'Printer stuck in queue',
    'Blank pages printing',
    'Printer status shows "ready" but no output',
    'Printing worked before, now suddenly stopped'
  ];

  const causes = [
    { title: 'Corrupted or outdated printer drivers', icon: 'driver' },
    { title: 'Incorrect printer selected as default', icon: 'settings' },
    { title: 'Spooler service not running', icon: 'service' },
    { title: 'Connection issues (USB or Wi-Fi)', icon: 'connection' },
    { title: 'Software or system updates causing conflicts', icon: 'update' }
  ];

  const troubleshootingSteps = [
    { step: 1, text: 'Restart the printer and computer' },
    { step: 2, text: 'Set the printer as default' },
    { step: 3, text: 'Cancel stuck print jobs' },
    { step: 4, text: 'Check cable or wireless connection' }
  ];

  const features = [
    { text: 'Secure remote session', icon: 'shield' },
    { text: 'Average fix time: 30–40 minutes', icon: 'clock' },
    { text: 'Support for Windows & macOS', icon: 'computer' },
    { text: 'US-based service hours', icon: 'flag' }
  ];

  const faqs = [
    {
      q: 'Why does my printer accept jobs but nothing prints?',
      aShort: 'Often a driver, spooler, or connectivity issue.',
      a: 'When a job appears accepted but no output occurs it is commonly the print spooler, a corrupted driver, or a connectivity problem. We diagnose the queue, restart or repair the spooler, and reinstall drivers if needed.'
    },
    {
      q: 'Why are blank pages printing?',
      aShort: 'Could be driver settings or toner issues.',
      a: 'Blank pages can be caused by incorrect driver settings (e.g., wrong paper type), low toner/ink, or issues with the printer engine. We walk through targeted tests to isolate the cause.'
    },
    {
      q: 'Can you clear a stuck print queue?',
      aShort: 'Yes — we clear and reset the queue remotely.',
      a: 'We can clear stuck jobs, reset the printer, and ensure the queue is healthy. If the issue is persistent we look for missing updates or driver conflicts.'
    },
    {
      q: 'Do you support multifunction printers (scan/copy)?',
      aShort: 'Yes, we support all-in-one devices.',
      a: 'We diagnose scanning and printing subsystems and ensure drivers and settings for both functions are configured correctly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16 sm:py-20 px-4" data-sr-ignore>
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <ScrollRevealClient delay={50} once={true} effect="fade-up">
              <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </ScrollRevealClient>
            <ScrollRevealClient delay={150} once={true} effect="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Printer Not Printing? Get Instant Remote Printer Help
              </h1>
            </ScrollRevealClient>
            <ScrollRevealClient delay={250} once={true} effect="fade-up">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                If your printer is powered on but not printing anything, you're not alone. This is one of the most common printer problems faced by US home and office users.
              </p>
            </ScrollRevealClient>
            <ScrollRevealClient delay={300} once={true} effect="fade-up">
              <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Our remote printer support team helps diagnose and fix printing issues quickly—without any hardware shipping or in-person visits.
              </p>
            </ScrollRevealClient>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Common Symptoms Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-red-600">
          <div className="flex items-center mb-6">
            <div className="bg-red-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common Symptoms</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {symptoms.map((symptom, idx) => (
              <div key={idx} className="flex items-start p-4 bg-red-50 rounded-xl border-l-4 border-red-400 hover:bg-red-100 transition-colors">
                <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-lg text-gray-800 font-medium">{symptom}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Why Your Printer Is Not Printing Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-orange-600">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Your Printer Is Not Printing</h2>
          </div>
          
          <div className="space-y-4">
            {causes.map((cause, idx) => (
              <div key={idx} className="flex items-start p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-md transition-all">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="text-lg text-gray-800 font-medium pt-0.5">{cause.title}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Basic Troubleshooting Steps Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-600">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Basic Troubleshooting Steps</h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">You can try these quick checks:</p>
          
          <div className="space-y-4 mb-8">
            {troubleshootingSteps.map((item) => (
              <div key={item.step} className="flex items-start bg-blue-50 rounded-xl p-5 hover:bg-blue-100 transition-colors">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-lg text-gray-800 font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6">
            <div className="flex items-start">
              <svg className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-lg text-amber-900 font-semibold">
                <strong>⚠️ If the issue continues, advanced diagnosis is required.</strong>
              </p>
            </div>
          </div>
        </article>

        {/* Professional Help Section - CTA */}
        <article className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl p-10 mb-8 text-white">
          <div className="text-center mb-8">
            <svg className="w-20 h-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Professional Printer Help (Recommended)
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Our certified technicians fix printer problems remotely in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
                <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-black font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+18887694448"
              className="inline-block bg-white text-green-700 px-12 py-5 rounded-xl font-bold text-xl hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              👉 Fix My Printer Now
            </a>
            <p className="mt-4 text-green-100 text-sm">No credit card required to start</p>
          </div>
        </article>

        {/* Trust Signals */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Secure Sessions</h3>
            <p className="text-gray-600">Your data is protected with enterprise-grade encryption</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Certified Experts</h3>
            <p className="text-gray-600">Experienced technicians with proven track records</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Fast Response</h3>
            <p className="text-gray-600">Most issues resolved in under 40 minutes</p>
          </div>
        </div>

        {/* Interactive Help + FAQs */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <ScrollRevealClient effect="fade-up" once={true}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Frequently Asked Questions</h3>
            </ScrollRevealClient>
            <FAQAccordionClient faqs={faqs} />
          </div>
        </section>

        {/* FAQ Teaser */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 text-center border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-700 text-lg mb-6">
            Our support team is ready to help you get your printer working again.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Contact Support Now
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Serving US customers with reliable remote printer support since 2020</p>
        </footer>
      </main>
    </div>
  );
}