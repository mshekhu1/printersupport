import Link from 'next/link';
import FAQAccordionClient from '../../components/FAQAccordionClient';
import { Printer, Wifi, AlertCircle, CheckCircle, Shield, Clock, Monitor, Wrench, Zap } from 'lucide-react';

export const metadata = {
  title: 'Samsung Printer Support | Remote Samsung Printer Help (US)',
  description: 'Samsung printer support for Xpress and other models—driver installs, connectivity fixes, and error troubleshooting with fast remote sessions. Serving US customers.',
  keywords: [
    'Samsung printer support',
    'Samsung printer repair',
    'Samsung Xpress support',
    'Samsung printer driver',
    'Samsung printer troubleshooting',
    'Samsung printer wireless setup',
    'Samsung printer error codes',
    'remote Samsung printer support',
    'US Samsung printer support',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Samsung Printer Support | Remote Samsung Printer Help (US)',
    description: 'Samsung printer support for Xpress and other models—driver installs, connectivity fixes, and error troubleshooting.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/brands/samsung',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samsung Printer Support',
    description: 'Samsung printer support with fast remote sessions for Xpress and other models.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/brands/samsung',
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
    q: 'Do you support Samsung Xpress printers?',
    aShort: 'Yes — we support Samsung Xpress and other Samsung models for drivers, network setup, and error resolution.',
    a: 'Yes — we support Samsung Xpress and other Samsung models for drivers, network setup, and error resolution. We work with Samsung Xpress monochrome and color laser printers, as well as other Samsung printer models, to help with driver installation, connectivity, and troubleshooting.',
  },
  {
    q: 'Can you help when Samsung drivers are missing on my PC?',
    aShort: 'We locate and install correct drivers and resolve conflicts so the printer works with your operating system.',
    a: 'We locate and install correct drivers and resolve conflicts so the printer works with your operating system. We work with official Samsung drivers and ensure compatibility with Windows 10, Windows 11, and macOS systems. We also help resolve driver conflicts and update drivers when necessary.',
  },
  {
    q: 'What if my Samsung printer shows an error code?',
    aShort: 'We remotely diagnose common error codes and guide through fixes. If hardware repair is needed, we advise next steps.',
    a: 'We remotely diagnose common error codes and guide through fixes. If a hardware repair is needed, we will advise next steps. Common Samsung printer error codes related to paper jams, toner issues, and connectivity problems can often be resolved remotely through driver updates and configuration changes.',
  },
  {
    q: 'Which Samsung printer models do you support?',
    aShort: 'We support Samsung Xpress and other Samsung printer models.',
    a: 'We support Samsung Xpress (monochrome and color laser printers) and other Samsung printer models. Whether it\'s a recent model or an older Samsung printer, we can help with driver installation, connectivity, and troubleshooting. Note that Samsung printer business was acquired by HP, but we still support existing Samsung printer models.',
  },
  {
    q: 'How quickly can you fix my Samsung printer?',
    aShort: 'Most Samsung printer issues are resolved within 30-40 minutes during a remote session.',
    a: 'Most Samsung printer issues are resolved within 30-40 minutes during a remote session. Common problems like driver installation, Wi-Fi connectivity, and error code resolution are typically fixed quickly. We offer same-day support sessions and test printing before ending the session.',
  },
];

export default function Samsung() {
  const samsungIssues = [
    { icon: Zap, title: 'Samsung printer driver installation', description: 'Install correct drivers for Windows and Mac' },
    { icon: Wifi, title: 'Samsung printer Wi-Fi problems', description: 'Resolve wireless connectivity and network printing' },
    { icon: Printer, title: 'Samsung printer not printing', description: 'Fix printing problems and error messages' },
    { icon: AlertCircle, title: 'Samsung printer error codes', description: 'Diagnose and fix common error messages' },
    { icon: Monitor, title: 'Samsung printer compatibility', description: 'Ensure compatibility with Windows & macOS' },
    { icon: Wrench, title: 'Samsung printer setup', description: 'Configure Samsung printer on new devices' },
  ];

  const samsungModels = [
    'Samsung Xpress (laser)',
    'Samsung CLP (color laser)',
    'Samsung ML (monochrome)',
    'Samsung SCX (multifunction)',
    'Samsung ProXpress',
    'Samsung Xpress M',
  ];

  const whyChoose = [
    'Experienced with Samsung printer models',
    'Fast, secure remote sessions',
    'Transparent pricing and follow-up guidance',
    'Expert knowledge of Samsung drivers',
    'Support for Windows and macOS',
    'Serving customers across all US states',
  ];

  const serviceSteps = [
    { step: 1, title: 'Contact Us', desc: 'Describe your Samsung printer issue' },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-600 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Samsung Printer Support</h1>
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              Our technicians provide Samsung printer troubleshooting and driver support for both home and small business users. We focus on getting your Samsung printer back online quickly with remote diagnostics and clear next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18887694448" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-600 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Get Samsung Printer Support
              </a>
              <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-slate-500 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-slate-400 transition-all duration-200">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Samsung Printer Models We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {samsungModels.map((model, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all">
                <Printer className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Samsung Issues We Fix</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Our technicians resolve these Samsung printer problems daily</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samsungIssues.map((issue, idx) => {
              const IconComponent = issue.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-slate-300 transform hover:-translate-y-1">
                  <IconComponent className="w-10 h-10 text-slate-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How Our Samsung Printer Support Works</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {serviceSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-gray-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
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
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Our Samsung Support Helps</h2>
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

      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Schedule Samsung Printer Help</h2>
          <p className="text-xl text-slate-100 mb-8">
            Reach out to schedule a secure remote session—many Samsung issues are resolved during the first session.
          </p>
          <a href="tel:+18887694448" className="inline-block px-10 py-5 bg-white text-slate-600 font-bold text-lg rounded-lg hover:bg-slate-50 transition-all duration-200 shadow-2xl hover:scale-105">
            Contact Us for Samsung Help
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
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Related Samsung Printer Support Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/install-printer-driver" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-slate-400">
              <Monitor className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Samsung Driver Installation</p>
            </Link>
            <Link href="/printer-not-connecting-wifi" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-slate-400">
              <Wifi className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Samsung Wi-Fi Setup</p>
            </Link>
            <Link href="/printer-error-code-fix" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-slate-400">
              <AlertCircle className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Samsung Error Codes</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
