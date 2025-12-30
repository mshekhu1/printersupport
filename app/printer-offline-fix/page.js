// app/printer-offline-fix/page.js

// SEO Metadata for the page
export const metadata = {
  title: 'Printer Showing Offline? How to Fix Printer Offline Issue (US)',
  description: 'Printer showing offline even when turned on? We fix printer offline issues remotely for US users. Fast and affordable printer support.',
  keywords: ['printer offline', 'printer showing offline', 'fix printer offline', 'printer offline windows', 'wireless printer offline', 'printer offline fix', 'US printer support', 'printer offline error'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Printer Showing Offline? How to Fix Printer Offline Issue (US)',
    description: 'Printer showing offline even when turned on? We fix printer offline issues remotely for US users.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/printer-offline-fix',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Showing Offline? How to Fix It',
    description: 'We fix printer offline issues remotely for US users. Fast and affordable printer support.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/printer-offline-fix',
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


import FAQAccordionClient from '../components/FAQAccordionClient';
import ScrollRevealClient from '../components/ScrollRevealClient';

export default function PrinterOfflineFixPage() {
  const symptoms = [
    'Printer status shows "offline"',
    'Printer not responding to print jobs',
    'Wireless printer disconnected',
    'Offline message after system update'
  ];

  const causes = [
    { title: 'Network or Wi-Fi changes', icon: 'wifi' },
    { title: 'Incorrect port configuration', icon: 'settings' },
    { title: 'Windows setting printer as offline', icon: 'windows' },
    { title: 'IP address conflict', icon: 'network' },
    { title: 'Driver communication failure', icon: 'driver' }
  ];

  const quickSteps = [
    { step: 1, text: 'Restart printer and router' },
    { step: 2, text: 'Disable "Use Printer Offline" option' },
    { step: 3, text: 'Reconnect printer to Wi-Fi' }
  ];

  const services = [
    { text: 'Network configuration fix', icon: 'network' },
    { text: 'Driver & port correction', icon: 'tools' },
    { text: 'Wireless printer re-setup', icon: 'wifi' }
  ];

  const faqs = [
    {
      q: 'Will restarting my router and printer fix the offline status?',
      aShort: 'Sometimes; it helps in many cases.',
      a: 'Restarting the router and printer can clear temporary network conflicts and reassign IP addresses. We recommend trying this first, but if the printer remains offline we can diagnose network and driver issues remotely.'
    },
    {
      q: 'Do you fix offline issues caused by Windows settings?',
      aShort: 'Yes — we check Windows printer settings and services.',
      a: 'We inspect Windows print spooler, the "Use Printer Offline" toggle, port settings, and driver status. If a system update caused the issue, we identify the change and roll back or repair as needed.'
    },
    {
      q: 'Can you help if the printer is connected via USB?',
      aShort: 'Yes; we diagnose USB connectivity too.',
      a: 'USB printers can appear offline if the cable, port, or driver has an issue. We test connectivity, update drivers, and suggest hardware steps if a cable or port is failing.'
    },
    {
      q: 'Do you work with office networks and managed routers?',
      aShort: 'Yes — we handle small office networks.',
      a: 'We support home and small office environments. For enterprise-managed networks you may need permission from the network administrator. We will provide clear instructions to coordinate the fix.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 sm:py-20 px-4" data-sr-ignore>
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <ScrollRevealClient delay={50} once={true} effect="fade-up">
              <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
              </svg>
            </ScrollRevealClient>
            <ScrollRevealClient delay={150} once={true} effect="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Printer Showing Offline? Here's How to Fix It
              </h1>
            </ScrollRevealClient>
            <ScrollRevealClient delay={250} once={true} effect="fade-up">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                When your printer shows "offline" even though it's powered on, printing becomes impossible. This problem is very common with wireless printers and Windows systems.
              </p>
            </ScrollRevealClient>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Signs of Printer Offline Issue Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-indigo-600">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Signs of Printer Offline Issue</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {symptoms.map((symptom, idx) => (
              <div key={idx} className="flex items-start p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-l-4 border-indigo-400 hover:shadow-md transition-all">
                <svg className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-gray-800 font-medium">{symptom}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Why Printers Go Offline Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-purple-600">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Printers Go Offline</h2>
          </div>
          
          <div className="space-y-4">
            {causes.map((cause, idx) => (
              <div key={idx} className="flex items-start p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="text-lg text-gray-800 font-medium pt-0.5">{cause.title}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Quick Things You Can Try Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-cyan-600">
          <div className="flex items-center mb-6">
            <div className="bg-cyan-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Quick Things You Can Try</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            {quickSteps.map((item) => (
              <div key={item.step} className="flex items-start bg-cyan-50 rounded-xl p-5 hover:bg-cyan-100 transition-colors border-2 border-cyan-200">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
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
                <strong>⚠️ These steps don't always solve the root cause.</strong>
              </p>
            </div>
          </div>
        </article>

        {/* Remote Printer Offline Fix - CTA Section */}
        <article className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl shadow-2xl p-10 mb-8 text-white">
          <div className="text-center mb-8">
            <svg className="w-20 h-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Remote Printer Offline Fix
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              We remotely reconnect your printer and restore online status.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
                <svg className="w-12 h-12 text-emerald-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg font-semibold text-black text-center">{service.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+18887694448"
              className="inline-block bg-white text-emerald-700 px-12 py-5 rounded-xl font-bold text-xl hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              👉 Get Printer Back Online Now
            </a>
            <p className="mt-4 text-emerald-100 text-sm">Quick response • Affordable pricing • US support</p>
          </div>
        </article>

        {/* Why Choose Remote Support Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Instant Access</h3>
            <p className="text-gray-600">No waiting for on-site technician visits</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Cost-Effective</h3>
            <p className="text-gray-600">More affordable than on-site service calls</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-green-500">
            <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Encrypted connections with your permission only</p>
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

        {/* Wireless Printer Specialty */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Wireless Printer Specialists</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                We specialize in fixing offline issues with wireless printers from HP, Canon, Epson, Brother, and more. Network configuration is our expertise.
              </p>
            </div>
            <div className="shrink-0">
              <svg className="w-32 h-32 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 text-center border-2 border-blue-200">
          <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
          </svg>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Printer Still Showing Offline?</h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Don't waste time troubleshooting. Let our experts get your printer back online in minutes.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-xl"
          >
            Start Remote Support Session
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Professional remote printer support for US customers • Available during business hours</p>
        </footer>
      </main>
    </div>
  );
}