// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Clock, Shield, Zap, Users, Award, Phone, ArrowRight, Printer, Wifi, Download } from 'lucide-react';
import FAQAccordionClient from './components/FAQAccordionClient';
import CallRevealClient from './components/CallRevealClient';

/* ───────────────── Structured Data ───────────────── */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you fix my printer without visiting my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most printer issues are software or network related and can be fixed remotely. Most problems like driver errors, offline status, and Wi-Fi connectivity are fixed by a technician during a secure remote session."
      }
    },
    {
      "@type": "Question",
      name: "How soon can I get help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many customers get help the same day. We offer same-day remote sessions during business hours."
      }
    },
    {
      "@type": "Question",
      name: "Is remote support secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — sessions use encrypted screen-sharing tools and require your permission."
      }
    },
    {
      "@type": "Question",
      name: "Do you support business printers and home printers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we support both home and small business environments."
      }
    }
  ]
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZamZam Print Support",
  url: "https://www.zamzamprint.com",
  logo: "https://www.zamzamprint.com/logo.png",
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+1-888-769-4448",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English"
  }]
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZamZam Print Support",
  telephone: "+1-888-769-4448",
  areaServed: "United States"
};

/* ───────────────── Metadata ───────────────── */

export const metadata = {
  title: 'Remote Printer Support for Home & Business | Fast US Service',
  description: 'Printer not printing or showing offline? Get fast remote printer support for Windows & Mac.',
  alternates: { canonical: 'https://www.zamzamprint.com' },
};

/* ───────────────── Page ───────────────── */

export default function Home() {
  const brands = [
    { title: 'HP printers', href: '/hp-printer-offline' },
    { title: 'Canon printers', href: '/canon-printer-offline' },
    { title: 'Epson printers', href: '/epson-printer-not-printing' },
    { title: 'Brother printers', href: '/brother-printer-offline' },
    { title: 'Samsung printers', href: '/services/samsung-printer-support' },
  ];

  const commonIssues = [
    {
      icon: Printer,
      title: 'Printer Offline',
      description: 'Your printer shows offline even though it\'s connected? We\'ll get it back online in minutes.',
      link: '/printer-offline'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Connection Issues',
      description: 'Can\'t connect your wireless printer to your network? We\'ll configure it properly.',
      link: '/wireless-printer-setup'
    },
    {
      icon: Download,
      title: 'Driver Problems',
      description: 'Missing, outdated, or corrupted printer drivers? We\'ll install the right ones.',
      link: '/printer-driver-installation'
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Same-Day Service',
      description: 'Get help fast. Most issues are resolved the same day you contact us.'
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Encrypted remote sessions with full transparency. You stay in control.'
    },
    {
      icon: Users,
      title: 'US-Based Technicians',
      description: 'Friendly, experienced support staff located right here in the United States.'
    },
    {
      icon: Award,
      title: 'Satisfaction Guaranteed',
      description: 'We don\'t stop until your printer works perfectly. Your satisfaction is our priority.'
    }
  ];

  const homepageFaqs = [
    {
      q: 'Can you fix my printer without visiting my home?',
      a: 'Yes — most printer issues are software or network related and can be fixed remotely. Problems like driver errors, offline status, Wi-Fi connectivity, and configuration issues are handled through a secure remote session where our technician can see and control your screen (with your permission) to diagnose and fix the problem.'
    },
    {
      q: 'How soon can I get help?',
      a: 'Many customers get help the same day during business hours. We prioritize quick response times because we understand how frustrating printer problems can be, especially when you need to print something urgently.'
    },
    {
      q: 'Is remote support secure?',
      a: 'Yes — sessions use encrypted screen-sharing tools that require your explicit permission to connect. You can see everything the technician does, and you can end the session at any time. We never access your computer without your knowledge and consent.'
    },
    {
      q: 'Do you support business printers and home printers?',
      a: 'Yes — we support both home users and small business environments. Whether you have a single printer at home or multiple printers in a small office, our technicians can help with setup, troubleshooting, and ongoing support.'
    },
    {
      q: 'What if the problem can\'t be fixed remotely?',
      a: 'While most printer issues are software-related and can be fixed remotely, if we determine your printer has a hardware problem, we\'ll be honest about it and help you understand your options for repair or replacement.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ───────── HERO ───────── */}
      <section className="relative isolate min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/side-view-worker-using-printer.jpg"
            alt="Professional using modern printer in office environment"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-purple-900/70" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 text-sm font-medium mb-6 border border-blue-400/30">
              <Zap className="w-4 h-4" />
              <span>Same-Day Remote Support Available</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
              Printer Not Working?
              <span className="block text-blue-300 mt-2">We'll Fix It Remotely</span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-50 mb-10 leading-relaxed">
              Offline printers, connection issues, driver problems? Our US-based technicians solve most issues remotely—no home visit needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="tel:+18887694448"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold rounded-xl shadow-2xl hover:bg-blue-700 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: 1-888-769-4448</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Home Visit Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── COMMON ISSUES ───────── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Common Printer Problems We Fix
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From offline errors to wireless setup, we handle all types of printer issues quickly and remotely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commonIssues.map((issue, idx) => {
              const Icon = issue.icon;
              return (
                <Link
                  key={idx}
                  href={issue.link}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {issue.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {issue.description}
                  </p>
                  <div className="mt-4 text-blue-600 font-semibold flex items-center gap-2">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── WHY CHOOSE US ───────── */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose ZamZam Print Support?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fast, secure, and reliable printer support from experienced US-based technicians.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/20">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              How Remote Support Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your printer fixed is simple. Here's how we do it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Call or Chat</h3>
              <p className="text-gray-600 leading-relaxed">
                Reach out to us via phone or online chat. Describe your printer issue and we'll schedule a session.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Secure Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll send you a secure link to share your screen. You stay in control and can disconnect anytime.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Problem Solved</h3>
              <p className="text-gray-600 leading-relaxed">
                Our technician diagnoses and fixes the issue remotely. Most problems are resolved in 15-30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SUPPORTED BRANDS ───────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              All Major Printer Brands Supported
            </h2>
            <p className="text-xl text-gray-600">
              We work with all popular printer manufacturers and models.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {brands.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="bg-white p-8 rounded-xl shadow-md text-center font-semibold text-gray-800 hover:shadow-xl hover:text-blue-600 transition-all hover:-translate-y-1 border border-gray-100"
              >
                {b.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA SECTION ───────── */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Fix Your Printer?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Don't let printer problems slow you down. Call us now for same-day remote support.
          </p>
          <Link
            href="tel:+18887694448"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-gray-100 transition-all hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span className="text-xl">1-888-769-4448</span>
          </Link>
        </div>
      </section>

      {/* ───────── FAQs ───────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Everything you need to know about our remote printer support service.
          </p>
          <FAQAccordionClient faqs={homepageFaqs} />
        </div>
      </section>

      {/* ───────── SEO INTERNAL LINKS (CRAWL BOOST) ───────── */}
      <section className="sr-only" aria-hidden="false">
        <h2>Printer Support Pages</h2>
        <ul>
          <li><Link href="/printer-offline">Printer Offline</Link></li>
          <li><Link href="/printer-not-printing">Printer Not Printing</Link></li>
          <li><Link href="/printer-driver-installation">Printer Driver Installation</Link></li>
          <li><Link href="/wireless-printer-setup">Wireless Printer Setup</Link></li>
          <li><Link href="/printer-error-codes">Printer Error Codes</Link></li>
          <li><Link href="/printer-paper-jam">Printer Paper Jam</Link></li>
        </ul>

        <h3>Brand Pages</h3>
        <ul>
          <li><Link href="/hp-printer-offline">HP Printer Support</Link></li>
          <li><Link href="/canon-printer-offline">Canon Printer Support</Link></li>
          <li><Link href="/epson-printer-not-printing">Epson Printer Support</Link></li>
          <li><Link href="/brother-printer-offline">Brother Printer Support</Link></li>
          <li><Link href="/services/samsung-printer-support">Samsung Printer Support</Link></li>
        </ul>

        <h3>Company</h3>
        <ul>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service">Terms of Service</Link></li>
          <li><Link href="/refund-policy">Refund Policy</Link></li>
        </ul>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg">© 2026 ZamZam Print Support • United States</p>
          <p className="mt-4 text-2xl font-bold text-white">📞 +1-888-769-4448</p>
          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>

      {/* ───────── STRUCTURED DATA ───────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </div>
  );
}
