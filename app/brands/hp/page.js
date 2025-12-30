import Link from 'next/link';
import FAQAccordionClient from '../../components/FAQAccordionClient';
import { Printer, Wifi, AlertCircle, CheckCircle, Shield, Clock, Monitor, Wrench, MapPin } from 'lucide-react';

export const metadata = {
  title: 'HP Printer Support & Repair | Remote HP Printer Help (US)',
  description: 'Fast, reliable HP printer support—driver installation, offline & connectivity fixes, and remote troubleshooting. Get same-day help from certified technicians for HP OfficeJet, LaserJet, DeskJet models.',
  keywords: [
    'HP printer support',
    'HP printer repair',
    'HP printer troubleshooting',
    'HP OfficeJet support',
    'HP LaserJet support',
    'HP DeskJet support',
    'HP printer driver',
    'HP printer offline',
    'remote HP printer support',
    'US HP printer support',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'HP Printer Support & Repair | Remote HP Printer Help (US)',
    description: 'Fast, reliable HP printer support—driver installation, offline & connectivity fixes, and remote troubleshooting.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/brands/hp',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HP Printer Support & Repair',
    description: 'Fast, reliable HP printer support with remote troubleshooting and same-day help.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/brands/hp',
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

export const dynamic = 'force-static';

const faqs = [
  {
    q: 'Do you provide remote HP printer support?',
    aShort: 'Yes, we offer secure remote HP printer support for most software and connectivity issues.',
    a: 'Yes. Most HP issues like driver errors, offline printers, and network connectivity can be resolved remotely during a secure session. We guide you through every step so you stay in control. Whether you have an HP OfficeJet, LaserJet, or DeskJet, we can help fix common problems without needing to visit your location.',
  },
  {
    q: 'Can you help with HP printer drivers and firmware?',
    aShort: 'Absolutely. We install the correct drivers and update firmware when necessary.',
    a: 'Absolutely. We install the correct drivers and update firmware where necessary to ensure your HP printer operates reliably with your computer and network. We work with the latest HP driver versions and ensure compatibility with Windows 10, Windows 11, and macOS systems.',
  },
  {
    q: 'What if my HP printer is still under warranty?',
    aShort: 'We can help with software issues while advising on warranty options when needed.',
    a: 'We can advise on warranty options and, when appropriate, help you prepare information for HP support. For most software and connectivity issues, we can fix the problem without vendor intervention. Our service is independent and does not void your HP warranty.',
  },
  {
    q: 'Which HP printer models do you support?',
    aShort: 'We support all major HP printer series including OfficeJet, LaserJet, DeskJet, and more.',
    a: 'We support all major HP printer series including OfficeJet (home and office models), LaserJet (monochrome and color), DeskJet, Envy, PageWide, and other HP printer lines. Whether it\'s a recent model or an older HP printer, we can help with driver installation, connectivity, and troubleshooting.',
  },
  {
    q: 'How quickly can you fix my HP printer?',
    aShort: 'Most HP printer issues are resolved within 30-40 minutes during a remote session.',
    a: 'Most HP printer issues are resolved within 30-40 minutes during a remote session. Common problems like driver installation, offline status, and Wi-Fi connectivity are typically fixed quickly. We offer same-day support sessions and test printing before ending the session to ensure everything works correctly.',
  },
];

export default function HP() {
  const hpIssues = [
    { icon: AlertCircle, title: 'HP printer showing offline', description: 'Fix offline status and restore printing capability' },
    { icon: Wifi, title: 'HP printer Wi-Fi connection problems', description: 'Resolve wireless connectivity and network setup issues' },
    { icon: Monitor, title: 'HP printer driver installation errors', description: 'Install correct drivers for Windows and Mac' },
    { icon: Printer, title: 'HP printer not printing', description: 'Diagnose and fix printing problems' },
    { icon: Wrench, title: 'HP printer error codes', description: 'Resolve paper jam alerts and error messages' },
    { icon: Clock, title: 'HP printer setup for new computer', description: 'Configure HP printer on new devices' },
  ];

  const hpModels = [
    'HP OfficeJet (all series)',
    'HP LaserJet (monochrome & color)',
    'HP DeskJet (all models)',
    'HP Envy printers',
    'HP PageWide printers',
    'HP Smart Tank printers',
  ];

  const whyChoose = [
    'Experienced with all HP printer series',
    'Secure remote sessions with full control',
    'Fast response and same-day availability',
    'Clear pricing with no hidden charges',
    'Support for Windows and macOS',
    'Serving customers across all US states',
  ];

  const serviceSteps = [
    { step: 1, title: 'Contact Us', desc: 'Reach out with your HP printer issue' },
    { step: 2, title: 'Secure Session', desc: 'Start a safe remote support session' },
    { step: 3, title: 'Diagnose Issue', desc: 'Our technician identifies the problem' },
    { step: 4, title: 'Fix Remotely', desc: 'Problem resolved while you watch' },
    { step: 5, title: 'Test & Verify', desc: 'We test printing before closing' },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              HP Printer Support & Repair
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Our certified technicians specialize in HP printers — from OfficeJet and LaserJet to DeskJet models. Whether your HP printer is showing offline, not printing, or failing to connect to Wi‑Fi, we offer fast remote troubleshooting and clear, affordable pricing to get you back to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+18887694448"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get HP Printer Support
              </a>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-blue-400 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HP Models Supported */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">HP Printer Models We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hpModels.map((model, idx) => (
              <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all">
                <Printer className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common HP Issues */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Common HP Printer Issues We Fix</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Our technicians resolve these HP printer problems every day</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hpIssues.map((issue, idx) => {
              const IconComponent = issue.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300 transform hover:-translate-y-1">
                  <IconComponent className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How Our HP Printer Support Works</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {serviceSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Our HP Printer Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Your HP Printer Working Again</h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop struggling with HP printer issues. Get professional remote support and start printing again today.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            Contact Us for HP Support
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Related HP Printer Support Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/printer-offline-fix" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-blue-400">
              <AlertCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">HP Printer Offline Fix</p>
            </Link>
            <Link href="/install-printer-driver" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-blue-400">
              <Monitor className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">HP Printer Driver Installation</p>
            </Link>
            <Link href="/printer-not-printing" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-blue-400">
              <Printer className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">HP Printer Not Printing</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
