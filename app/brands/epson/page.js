import Link from 'next/link';
import FAQAccordionClient from '../../components/FAQAccordionClient';
import { Printer, Wifi, AlertCircle, CheckCircle, Shield, Clock, Monitor, Wrench, Droplet } from 'lucide-react';

export const metadata = {
  title: 'Epson Printer Support | Remote Epson Printer Help (US)',
  description: 'Trusted Epson printer support for EcoTank, WorkForce and Stylus models. We handle driver installs, network setup, and print quality issues with secure remote help. Serving US customers.',
  keywords: [
    'Epson printer support',
    'Epson printer repair',
    'Epson EcoTank support',
    'Epson WorkForce support',
    'Epson Stylus support',
    'Epson printer driver',
    'Epson printer troubleshooting',
    'Epson printer ink issues',
    'remote Epson printer support',
    'US Epson printer support',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Epson Printer Support | Remote Epson Printer Help (US)',
    description: 'Trusted Epson printer support for EcoTank, WorkForce and Stylus models. Driver installs, network setup, and print quality issues.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/brands/epson',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epson Printer Support',
    description: 'Trusted Epson printer support for EcoTank, WorkForce and Stylus models.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/brands/epson',
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
    q: 'Can you help with Epson EcoTank issues?',
    aShort: 'Yes. We diagnose ink system problems, connectivity, driver issues, and print quality concerns.',
    a: 'Yes. We diagnose ink system problems, connectivity, driver issues, and print quality concerns for EcoTank and other Epson models. We can help with ink level detection, print head cleaning, and system maintenance for your Epson EcoTank printer.',
  },
  {
    q: 'Do you support Epson printers on macOS?',
    aShort: 'We support both Windows and macOS systems for all Epson printer models.',
    a: 'We support both Windows and macOS systems and can ensure your Epson printer works reliably across devices. Whether you have a Mac or PC, we install the correct Epson drivers and configure settings for optimal performance.',
  },
  {
    q: 'Can you improve print quality or color calibration?',
    aShort: 'We provide guidance on print head cleaning, alignment, and driver settings to improve print quality.',
    a: 'We provide guidance on print head cleaning, alignment, and driver settings to improve print quality where possible. We can help with color calibration, print head alignment, and maintenance routines for Epson printers to achieve better printing results.',
  },
  {
    q: 'Which Epson printer models do you support?',
    aShort: 'We support Epson EcoTank, WorkForce, Stylus, Expression, and other Epson printer series.',
    a: 'We support all major Epson printer series including EcoTank (tank-based printers), WorkForce (office printers), Stylus (home and photo printers), Expression, and other Epson models. Whether it\'s a recent model or an older Epson printer, we can help with driver installation, connectivity, and troubleshooting.',
  },
  {
    q: 'How quickly can you fix my Epson printer?',
    aShort: 'Most Epson printer issues are resolved within 30-40 minutes during a remote session.',
    a: 'Most Epson printer issues are resolved within 30-40 minutes during a remote session. Common problems like driver installation, Wi-Fi connectivity, and print quality issues are typically fixed quickly. We offer same-day support sessions and test printing before ending the session.',
  },
];

export default function Epson() {
  const epsonIssues = [
    { icon: Droplet, title: 'Epson EcoTank ink system issues', description: 'Fix ink level detection and tank problems' },
    { icon: Wifi, title: 'Epson printer Wi-Fi connection problems', description: 'Resolve wireless connectivity and network setup' },
    { icon: Monitor, title: 'Epson printer driver installation', description: 'Install correct drivers for Windows and Mac' },
    { icon: Printer, title: 'Epson printer print quality issues', description: 'Improve print quality and color calibration' },
    { icon: Wrench, title: 'Epson print head cleaning and alignment', description: 'Resolve print head maintenance issues' },
    { icon: AlertCircle, title: 'Epson printer error codes', description: 'Diagnose and fix common error messages' },
  ];

  const epsonModels = [
    'Epson EcoTank (all series)',
    'Epson WorkForce (office printers)',
    'Epson Stylus (home printers)',
    'Epson Expression',
    'Epson Artisan',
    'Epson SureColor',
  ];

  const whyChoose = [
    'Expert knowledge of Epson printer models',
    'Secure remote sessions with customer control',
    'Quick diagnosis and practical fixes',
    'Transparent pricing with no hidden charges',
    'Support for Windows and macOS',
    'Serving customers across all US states',
  ];

  const serviceSteps = [
    { step: 1, title: 'Contact Us', desc: 'Describe your Epson printer issue' },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Epson Printer Support</h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              We specialize in Epson printer troubleshooting — including EcoTank, WorkForce, and Stylus lineup. Whether your printer won't connect, is producing poor print quality, or showing driver errors, we'll fix it quickly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18887694448" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Get Epson Printer Support
              </a>
              <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-purple-400 transition-all duration-200">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Epson Printer Models We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {epsonModels.map((model, idx) => (
              <div key={idx} className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                <Printer className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Epson Printer Problems We Fix</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Our technicians resolve these Epson printer problems daily</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {epsonIssues.map((issue, idx) => {
              const IconComponent = issue.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-purple-300 transform hover:-translate-y-1">
                  <IconComponent className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How Our Epson Printer Support Works</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {serviceSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
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
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Our Epson Printer Support</h2>
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

      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Book an Epson Support Session</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our team and we'll schedule a secure remote session to diagnose and resolve your Epson printer issue—often during the first session.
          </p>
          <a href="tel:+18887694448" className="inline-block px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-purple-50 transition-all duration-200 shadow-2xl hover:scale-105">
            Contact Us for Epson Help
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
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Related Epson Printer Support Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/printer-not-printing" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-purple-400">
              <Printer className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Epson Printer Not Printing</p>
            </Link>
            <Link href="/install-printer-driver" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-purple-400">
              <Monitor className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Epson Driver Installation</p>
            </Link>
            <Link href="/printer-not-connecting-wifi" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-purple-400">
              <Wifi className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Epson Wi-Fi Setup</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
