// app/printer-not-connecting-wifi/page.js

// SEO Metadata for the page
export const metadata = {
  title: 'Printer Not Connecting to Wi-Fi? Remote Fix for US Users',
  description: 'Wireless printer not connecting to Wi-Fi? We fix printer Wi-Fi issues remotely. Fast support for US home & office users.',
  keywords: ['printer not connecting wifi', 'wireless printer setup', 'printer wifi issues', 'printer wifi disconnecting', 'fix printer wifi', 'wireless printer troubleshooting', 'printer network setup', 'printer wifi connection'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Printer Not Connecting to Wi-Fi? Remote Fix for US Users',
    description: 'Wireless printer not connecting to Wi-Fi? We fix printer Wi-Fi issues remotely. Fast support for US home & office users.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/printer-not-connecting-wifi',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Not Connecting to Wi-Fi? Remote Fix',
    description: 'We fix printer Wi-Fi issues remotely. Fast support for US home & office users.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/printer-not-connecting-wifi',
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

export default function PrinterWifiFixPage() {
  const symptoms = [
    'Printer can\'t find Wi-Fi network',
    'Printer keeps disconnecting',
    'Wireless setup fails',
    'Printer offline on wireless network'
  ];

  const causes = [
    { title: 'Incorrect Wi-Fi password', icon: 'password' },
    { title: 'Router settings blocking printer', icon: 'router' },
    { title: 'Network band mismatch (2.4GHz vs 5GHz)', icon: 'band' },
    { title: 'IP conflicts', icon: 'ip' }
  ];

  const services = [
    { 
      text: 'Router & network configuration',
      description: 'Optimize your router settings for printer connectivity',
      icon: 'router'
    },
    { 
      text: 'Printer wireless setup',
      description: 'Complete wireless printer configuration and pairing',
      icon: 'printer'
    },
    { 
      text: 'Stable connection testing',
      description: 'Verify and test for reliable wireless printing',
      icon: 'test'
    }
  ];

  const faqs = [
    {
      q: "Why can't my printer find my Wi-Fi network?",
      aShort: 'Often a band or hidden SSID issue.',
      a: 'Many printers only scan 2.4GHz networks or need the network name (SSID) to be visible. We check band compatibility, SSID visibility, and ensure the correct password is used.'
    },
    {
      q: 'Why does my printer keep disconnecting from Wi-Fi?',
      aShort: 'Commonly signal or router timeout related.',
      a: 'Frequent disconnects are usually caused by weak Wi-Fi signal, power-saving modes, router timeouts, or conflicting IP addresses. We test the connection and recommend configuration changes.'
    },
    {
      q: 'Do I need to give you my Wi-Fi password?',
      aShort: 'We only need temporary access during setup.',
      a: 'We ask for the Wi-Fi password only when required for setup. You remain in control — we do not store passwords and recommend changing them after setup if you prefer.'
    },
    {
      q: 'Can you fix printers that only support 2.4GHz?',
      aShort: 'Yes — we can configure networks or suggest workarounds.',
      a: 'If your printer only supports 2.4GHz we can help configure your router to present a 2.4GHz network or set up a dedicated SSID for the printer.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-16 sm:py-20 px-4" data-sr-ignore>
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <ScrollRevealClient delay={50} once={true} effect="fade-up">
              <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </ScrollRevealClient>
            <ScrollRevealClient delay={150} once={true} effect="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Printer Not Connecting to Wi-Fi? We Can Fix It
              </h1>
            </ScrollRevealClient>
            <ScrollRevealClient delay={250} once={true} effect="fade-up">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Wireless printers depend on stable network settings. Even small Wi-Fi changes can disconnect your printer from your computer.
              </p>
            </ScrollRevealClient>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Symptoms Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-sky-600">
          <div className="flex items-center mb-6">
            <div className="bg-sky-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Symptoms</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {symptoms.map((symptom, idx) => (
              <div key={idx} className="flex items-start p-5 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border-l-4 border-sky-400 hover:shadow-md transition-all">
                <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                </svg>
                <span className="text-lg text-gray-800 font-medium">{symptom}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Causes of Wi-Fi Printer Issues Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-rose-600">
          <div className="flex items-center mb-6">
            <div className="bg-rose-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Causes of Wi-Fi Printer Issues</h2>
          </div>
          
          <div className="space-y-4">
            {causes.map((cause, idx) => (
              <div key={idx} className="flex items-start p-5 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-md transition-all">
                <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="text-lg text-gray-800 font-medium pt-0.5">{cause.title}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Remote Wireless Printer Setup - Main CTA Section */}
        <article className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl p-10 mb-8 text-white">
          <div className="text-center mb-8">
            <svg className="w-20 h-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Remote Wireless Printer Setup
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              We reconnect your printer securely to your Wi-Fi network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-black mb-3">{service.text}</h3>
                <p className="text-green-600 text-center text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+18887694448"
              className="inline-block bg-white text-green-700 px-12 py-5 rounded-xl font-bold text-xl hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              👉 Fix Wi-Fi Printer Issue Now
            </a>
            <p className="mt-4 text-green-100 text-sm">Expert wireless setup • Secure remote access • US-based technicians</p>
          </div>
        </article>

        {/* Network Band Explanation */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border-2 border-amber-200">
          <div className="flex items-start">
            <svg className="w-12 h-12 text-amber-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.4GHz vs 5GHz Network Issue</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Many older printers only support 2.4GHz Wi-Fi networks. If your router is set to 5GHz only or has separate network names, your printer may not connect. We can help configure the correct network band.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg font-semibold text-sm">2.4GHz Support</span>
                <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg font-semibold text-sm">5GHz Support</span>
                <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg font-semibold text-sm">Dual-Band Setup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Remote Setup Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Secure Connection</h3>
            <p className="text-gray-600">We never store or share your Wi-Fi password</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-green-500">
            <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Fast Resolution</h3>
            <p className="text-gray-600">Most Wi-Fi issues fixed in 15-30 minutes</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Expert Technicians</h3>
            <p className="text-gray-600">Specialized in wireless printer networking</p>
          </div>
        </div>

        {/* Common Router Issues Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-indigo-600">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Router Configuration Problems</h2>
              <p className="text-gray-600 text-lg">We handle complex router settings that may block your printer</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-50 rounded-xl">
              <h4 className="font-bold text-indigo-900 mb-2">MAC Address Filtering</h4>
              <p className="text-gray-700">Some routers block devices by default. We configure access for your printer.</p>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl">
              <h4 className="font-bold text-indigo-900 mb-2">IP Address Assignment</h4>
              <p className="text-gray-700">Prevent IP conflicts by setting up static or reserved IP addresses.</p>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl">
              <h4 className="font-bold text-indigo-900 mb-2">Firewall Settings</h4>
              <p className="text-gray-700">Configure firewall rules to allow printer communication.</p>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl">
              <h4 className="font-bold text-indigo-900 mb-2">Guest Network Issues</h4>
              <p className="text-gray-700">Move printer to main network for better connectivity.</p>
            </div>
          </div>
        </article>

        {/* Printer Brand Support */}
        <div className="bg-gradient-to-r from-slate-700 to-gray-700 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">All Major Printer Brands Supported</h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              We have extensive experience with wireless setup for all popular printer manufacturers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['HP', 'Canon', 'Epson', 'Brother', 'Lexmark', 'Samsung', 'Dell', 'Xerox'].map((brand) => (
              <div key={brand} className="bg-white text-black bg-opacity-20 px-6 py-3 rounded-lg font-bold backdrop-blur-sm border border-white border-opacity-30">
                {brand}
              </div>
            ))}
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

        {/* Secondary CTA */}
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl shadow-lg p-8 text-center border-2 border-sky-200">
          <svg className="w-16 h-16 mx-auto mb-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Connect Your Printer?</h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Stop struggling with Wi-Fi settings. Get your wireless printer connected in minutes with expert remote support.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block bg-sky-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-sky-700 transition-colors shadow-md hover:shadow-xl"
          >
            Connect My Printer Now
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Wireless printer setup specialists • Serving US customers • Available for home and business</p>
        </footer>
      </main>
    </div>
  );
}