import Link from 'next/link';
import FAQAccordionClient from '../../components/FAQAccordionClient';
import { Printer, Wifi, AlertCircle, CheckCircle, Shield, Clock, Monitor, Wrench, Camera } from 'lucide-react';

export const metadata = {
  title: 'Canon Printer Support | Remote Canon Printer Help (US)',
  description: 'Canon printer support for Pixma, imageCLASS, and MAXIFY models. Driver installs, Wi‑Fi setup, and error resolution with remote sessions and expert guidance. Serving US customers.',
  keywords: [
    'Canon printer support',
    'Canon printer repair',
    'Canon Pixma support',
    'Canon imageCLASS support',
    'Canon MAXIFY support',
    'Canon printer driver',
    'Canon printer troubleshooting',
    'Canon printer wireless setup',
    'remote Canon printer support',
    'US Canon printer support',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Canon Printer Support | Remote Canon Printer Help (US)',
    description: 'Canon printer support for Pixma, imageCLASS, and MAXIFY models. Driver installs, Wi‑Fi setup, and error resolution.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/brands/canon',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canon Printer Support',
    description: 'Canon printer support with remote sessions and expert guidance for all Canon models.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/brands/canon',
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
    q: 'Can you help with Canon printer wireless setup?',
    aShort: 'Yes — we can walk you through Wi‑Fi setup and network troubleshooting.',
    a: 'Yes — we can walk you through Wi‑Fi setup, network troubleshooting, and router settings to get your Canon printer connected reliably. Whether you have a Canon Pixma, imageCLASS, or MAXIFY printer, we help configure wireless printing and ensure stable connectivity.',
  },
  {
    q: 'Do you install Canon drivers and software?',
    aShort: 'We install official Canon drivers and configure settings for Windows and macOS.',
    a: 'We install official Canon drivers and configure settings to ensure compatibility with Windows and macOS systems. We work with the latest Canon driver versions and help resolve any conflicts or compatibility issues with your operating system.',
  },
  {
    q: 'Are ink/toner and hardware problems handled?',
    aShort: 'We diagnose hardware issues remotely and advise on repair needs when necessary.',
    a: 'We diagnose hardware issues remotely and can advise whether a technician visit or replacement parts are required. Software fixes and configuration are commonly resolved remotely. For ink system problems, print head issues, or paper feed problems, we provide guidance and can help determine if hardware service is needed.',
  },
  {
    q: 'Which Canon printer models do you support?',
    aShort: 'We support Canon Pixma, imageCLASS, MAXIFY, and other Canon printer series.',
    a: 'We support all major Canon printer series including Pixma (home and photo printers), imageCLASS (office laser printers), MAXIFY (small business printers), and other Canon models. Whether it\'s a recent model or an older Canon printer, we can help with driver installation, connectivity, and troubleshooting.',
  },
  {
    q: 'Can you help with Canon printer photo printing issues?',
    aShort: 'Yes, we help with photo printing quality, color calibration, and print settings.',
    a: 'Yes, we help with photo printing quality, color calibration, and print settings for Canon Pixma and other photo-capable printers. We can guide you through print head cleaning, alignment, and driver settings to improve photo print quality.',
  },
];

export default function Canon() {
  const canonIssues = [
    { icon: Camera, title: 'Canon printer photo quality issues', description: 'Improve photo printing and color calibration' },
    { icon: Wifi, title: 'Canon printer Wi-Fi setup problems', description: 'Configure wireless connectivity and network printing' },
    { icon: Monitor, title: 'Canon driver installation errors', description: 'Install correct drivers for Windows and Mac' },
    { icon: Printer, title: 'Canon printer not printing', description: 'Fix printing problems and error messages' },
    { icon: Wrench, title: 'Print head alignment and cleaning', description: 'Resolve print quality and maintenance issues' },
    { icon: AlertCircle, title: 'Canon printer error codes', description: 'Diagnose and fix common error messages' },
  ];

  const canonModels = [
    'Canon Pixma (all series)',
    'Canon imageCLASS (laser printers)',
    'Canon MAXIFY (business printers)',
    'Canon PIXMA G series',
    'Canon PIXMA TR series',
    'Canon PIXMA TS series',
  ];

  const whyChoose = [
    'Expert knowledge of Canon printer models',
    'Secure remote sessions with step-by-step guidance',
    'Fast response and same-day availability',
    'Transparent pricing with no hidden charges',
    'Support for Windows and macOS',
    'Serving customers across all US states',
  ];

  const serviceSteps = [
    { step: 1, title: 'Contact Us', desc: 'Describe your Canon printer issue' },
    { step: 2, title: 'Secure Session', desc: 'Start a safe remote support session' },
    { step: 3, title: 'Diagnose Issue', desc: 'Our technician identifies the problem' },
    { step: 4, title: 'Fix Remotely', desc: 'Problem resolved while you watch' },
    { step: 5, title: 'Test Printing', desc: 'We verify printing before closing' },
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Canon Printer Support
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              We support Canon printers including Pixma, imageCLASS, and MAXIFY. Our team specializes in fast driver installs, wireless configuration, and resolving printing errors so you can get back to printing documents and photos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+18887694448"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Canon Printer Support
              </a>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-red-400 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Canon Models Supported */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Canon Printer Models We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {canonModels.map((model, idx) => (
              <div key={idx} className="bg-red-50 p-4 rounded-lg text-center border border-red-200 hover:border-red-400 hover:shadow-md transition-all">
                <Printer className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Canon Issues */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Common Canon Printer Issues We Fix</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Our technicians resolve these Canon printer problems daily</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canonIssues.map((issue, idx) => {
              const IconComponent = issue.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-red-300 transform hover:-translate-y-1">
                  <IconComponent className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How Our Canon Printer Support Works</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {serviceSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
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
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Our Canon Printer Support</h2>
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Fix Your Canon Printer?</h2>
          <p className="text-xl text-red-100 mb-8">
            Contact us to schedule a secure remote session. We prioritize quick resolution and will test printing before ending the session.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block px-10 py-5 bg-white text-red-600 font-bold text-lg rounded-lg hover:bg-red-50 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            Get Canon Support
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
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Related Canon Printer Support Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/install-printer-driver" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-red-400">
              <Monitor className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Canon Driver Installation</p>
            </Link>
            <Link href="/printer-not-connecting-wifi" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-red-400">
              <Wifi className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Canon Wi-Fi Setup</p>
            </Link>
            <Link href="/printer-not-printing" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-red-400">
              <Printer className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Canon Printer Not Printing</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
