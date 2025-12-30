import Link from 'next/link';
import FAQAccordionClient from '../../components/FAQAccordionClient';
import { Printer, Wifi, AlertCircle, CheckCircle, Shield, Clock, Monitor, Wrench, Scan } from 'lucide-react';

export const metadata = {
  title: 'Brother Printer Support | Remote Brother Printer Help (US)',
  description: 'Brother printer troubleshooting for HL, MFC and DCP series. Driver installs, network setup, and error resolution with friendly remote technicians. Serving US customers.',
  keywords: [
    'Brother printer support',
    'Brother printer repair',
    'Brother MFC support',
    'Brother HL support',
    'Brother DCP support',
    'Brother printer driver',
    'Brother printer troubleshooting',
    'Brother multifunction printer',
    'remote Brother printer support',
    'US Brother printer support',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Brother Printer Support | Remote Brother Printer Help (US)',
    description: 'Brother printer troubleshooting for HL, MFC and DCP series. Driver installs, network setup, and error resolution.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/brands/brother',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brother Printer Support',
    description: 'Brother printer troubleshooting with friendly remote technicians.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/brands/brother',
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
    q: 'Do you support Brother multifunction printers?',
    aShort: 'Yes — we support printing, scanning, and fax issues on Brother MFC and DCP series.',
    a: 'Yes — we support printing, scanning, and fax issues on Brother MFC and DCP series and help configure multi-function features. We can help with scanner setup, fax configuration, and ensuring all functions work correctly with your Brother multifunction printer.',
  },
  {
    q: 'Can you help with driver conflicts on Windows?',
    aShort: 'We resolve driver conflicts and ensure the correct Brother drivers are installed.',
    a: 'We resolve driver conflicts and ensure the correct Brother drivers are installed and configured for network or USB setups. We work with the latest Brother driver versions and help resolve compatibility issues with Windows 10, Windows 11, and macOS.',
  },
  {
    q: 'What if my Brother printer needs service?',
    aShort: 'We diagnose remotely and advise if a repair visit or parts replacement is required.',
    a: 'We will diagnose remotely and advise if a repair visit or parts replacement is required. Many software and network issues are resolved without hardware service. For hardware problems, we provide clear guidance on next steps and can help coordinate with Brother service if needed.',
  },
  {
    q: 'Which Brother printer models do you support?',
    aShort: 'We support Brother HL, MFC, DCP, and other Brother printer series.',
    a: 'We support all major Brother printer series including HL (laser printers), MFC (multifunction center), DCP (desktop color printers), and other Brother models. Whether it\'s a recent model or an older Brother printer, we can help with driver installation, connectivity, and troubleshooting.',
  },
  {
    q: 'Can you help with Brother printer network setup?',
    aShort: 'Yes, we help configure network printing and shared printer setup for Brother printers.',
    a: 'Yes, we help configure network printing and shared printer setup for Brother printers. We can assist with Wi-Fi setup, wired network configuration, and ensuring your Brother printer is accessible across your network for multiple users.',
  },
];

export default function Brother() {
  const brotherIssues = [
    { icon: Scan, title: 'Brother scanner and fax setup', description: 'Configure multifunction features on MFC and DCP models' },
    { icon: Wifi, title: 'Brother printer network issues', description: 'Resolve network printing and shared printer problems' },
    { icon: Monitor, title: 'Brother driver installation', description: 'Install correct drivers for Windows and Mac' },
    { icon: Printer, title: 'Brother printer not printing', description: 'Fix printing problems and error messages' },
    { icon: Wrench, title: 'Brother printer error codes', description: 'Diagnose and fix common error messages' },
    { icon: AlertCircle, title: 'Brother printer offline issues', description: 'Restore online status and connectivity' },
  ];

  const brotherModels = [
    'Brother HL (laser printers)',
    'Brother MFC (multifunction)',
    'Brother DCP (desktop color)',
    'Brother QL (label printers)',
    'Brother PT (P-touch)',
    'Brother INKvestment',
  ];

  const whyChoose = [
    'Expert knowledge of Brother printer models',
    'Secure remote sessions with customer control',
    'Fast diagnosis and transparent pricing',
    'Support for multifunction features',
    'Support for Windows and macOS',
    'Serving customers across all US states',
  ];

  const serviceSteps = [
    { step: 1, title: 'Contact Us', desc: 'Describe your Brother printer issue' },
    { step: 2, title: 'Secure Session', desc: 'Start a safe remote support session' },
    { step: 3, title: 'Diagnose Issue', desc: 'Our technician identifies the problem' },
    { step: 4, title: 'Fix Remotely', desc: 'Problem resolved while you watch' },
    { step: 5, title: 'Test & Verify', desc: 'We test printing and scanning before closing' },
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Brother Printer Support</h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              We provide friendly, practical support for Brother printers — from office-class MFCs to compact HL models. Our technicians troubleshoot driver problems, network printing, and multi-function features remotely and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18887694448" className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Get Brother Printer Support
              </a>
              <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-teal-400 transition-all duration-200">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Brother Printer Models We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brotherModels.map((model, idx) => (
              <div key={idx} className="bg-teal-50 p-4 rounded-lg text-center border border-teal-200 hover:border-teal-400 hover:shadow-md transition-all">
                <Printer className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Brother Issues We Fix</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Our technicians resolve these Brother printer problems daily</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brotherIssues.map((issue, idx) => {
              const IconComponent = issue.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-teal-300 transform hover:-translate-y-1">
                  <IconComponent className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How Our Brother Printer Support Works</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {serviceSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Service Highlights</h2>
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

      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Brother Printer Help?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Contact us and we'll schedule a secure remote session to fix your Brother printer — usually during the first session.
          </p>
          <a href="tel:+18887694448" className="inline-block px-10 py-5 bg-white text-teal-600 font-bold text-lg rounded-lg hover:bg-teal-50 transition-all duration-200 shadow-2xl hover:scale-105">
            Get Brother Support
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Related Brother Printer Support Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/install-printer-driver" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-teal-400">
              <Monitor className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Brother Driver Installation</p>
            </Link>
            <Link href="/printer-not-connecting-wifi" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-teal-400">
              <Wifi className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Brother Network Setup</p>
            </Link>
            <Link href="/printer-not-printing" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-teal-400">
              <Printer className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Brother Printer Not Printing</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
