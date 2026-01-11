// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Wrench, Clock, Shield } from 'lucide-react';
import FAQAccordionClient from './components/FAQAccordionClient';
import CallRevealClient from './components/CallRevealClient';

// ── Structured Data ────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you fix my printer without visiting my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most printer issues are software or network related and can be fixed remotely. Most problems like driver errors, offline status, and Wi‑Fi connectivity are fixed by a technician during a secure remote session. We only request temporary access and walk you through every step so you remain in control."
      }
    },
    {
      "@type": "Question",
      name: "How soon can I get help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many customers get help the same day. We offer same-day remote sessions during business hours. After you contact us we typically schedule the next available technician within hours depending on demand."
      }
    },
    {
      "@type": "Question",
      name: "Is remote support secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — sessions use encrypted screen-sharing tools. Remote sessions are encrypted and require your permission to start. We never access files without permission and nothing remains installed after the session unless you explicitly request it."
      }
    },
    {
      "@type": "Question",
      name: "Do you support business printers and home printers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we support both home and small business environments. We work with single users, home offices, and small businesses. For enterprise networks we provide guidance and can coordinate with IT when needed."
      }
    }
  ]
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZamZam Print Support",
  url: "https://www.zamzamprint.com",
  logo: "https://www.zamzamprint.com/logo.png", // ← add real logo if exists
  description: "Professional remote printer support services for US customers",
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
  url: "https://www.zamzamprint.com",
  telephone: "+1-888-769-4448",
  description: "Remote printer support services for US customers",
  areaServed: "United States"
};

export const metadata = {
  title: 'Remote Printer Support for Home & Business | Fast US Service',
  description: 'Printer not printing or showing offline? Get fast remote printer support for Windows & Mac. Affordable printer fixing service for US users.',
  keywords: [
    'printer support', 'remote printer support', 'printer not printing', 'printer offline',
    'printer repair', 'printer troubleshooting', 'printer driver', 'printer setup',
    'US printer support', 'printer fixing service',
  ],
  openGraph: {
    title: 'Remote Printer Support for Home & Business | Fast US Service',
    description: 'Printer not printing or showing offline? Get fast remote printer support for Windows & Mac.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com',
    siteName: 'ZamZam Print Support',
    images: [{ url: '/og-printer-support.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Printer Support for Home & Business',
  },
  alternates: { canonical: 'https://www.zamzamprint.com' },
};

export default function Home() {
  const problems = [
    { title: 'Printer showing offline', href: '/printer-offline-fix' },
    { title: 'Printer not printing documents', href: '/printer-not-printing' },
    { title: 'Printer driver installation issues', href: '/install-printer-driver' },
    { title: 'Wireless printer not connecting to Wi-Fi', href: '/printer-not-connecting-wifi' },
    { title: 'Printer setup for new computer', href: '/printer-setup-windows' },
    { title: 'Error codes and paper jam alerts', href: '/printer-error-code-fix' },
  ];

  const brands = [
    { title: 'HP printers', href: '/hp-printer-offline' },
    { title: 'Canon printers', href: '/canon-printer-offline' },
    { title: 'Epson printers', href: '/epson-printer-not-printing' },
    { title: 'Brother printers', href: '/brother-printer-offline' },
    { title: 'Samsung printers', href: '/brands/samsung' },
  ];

  const trustSignals = [
    'US-based remote support',
    'Secure screen-sharing session',
    'No hardware shipping needed',
    'Same-day issue resolution',
    'Support for Windows & macOS',
  ];

  const steps = [
    'You contact us and select a support plan',
    'We start a secure remote session',
    'Our technician diagnoses the issue',
    'Printer problem is fixed in real time',
    'We test printing before closing session',
  ];

  const pricing = [
    { name: 'One-time Fix', price: '$49', desc: '30 minutes' },
    { name: 'Full Setup', price: '$79', desc: 'Setup & configuration' },
    { name: 'Monthly Plan', price: '$99/mo', desc: 'Ongoing support' },
  ];

  const whyChoose = [
    'Experienced remote support technicians',
    'Fast response for urgent printer issues',
    'Clear pricing – no hidden charges',
    'US customer support hours',
    'Help for both home & small business users',
  ];

  const homepageFaqs = [
    {
      q: 'Can you fix my printer without visiting my home?',
      a: 'Yes — most printer issues are software or network related and can be fixed remotely. Most problems like driver errors, offline status, and Wi‑Fi connectivity are fixed by a technician during a secure remote session. We only request temporary access and walk you through every step so you remain in control.'
    },
    {
      q: 'How soon can I get help?',
      a: 'Many customers get help the same day. We offer same-day remote sessions during business hours. After you contact us we typically schedule the next available technician within hours depending on demand.'
    },
    {
      q: 'Is remote support secure?',
      a: 'Yes — sessions use encrypted screen-sharing tools. Remote sessions are encrypted and require your permission to start. We never access files without permission and nothing remains installed after the session unless you explicitly request it.'
    },
    {
      q: 'Do you support business printers and home printers?',
      a: 'Yes — we support both home and small business environments. We work with single users, home offices, and small businesses. For enterprise networks we provide guidance and can coordinate with IT when needed.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - Optimized for LCP */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/side-view-worker-using-printer.jpg"
            alt="Professional using modern printer in office environment"
            fill
            priority
            quality={76}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1400px"
            className="object-cover brightness-[0.88]"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..." // ← replace with your real small base64
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-xl animate-fade-up">
              Printer Not Working?<br />
              <span className="text-blue-400">Get Instant Remote Support</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-md max-w-3xl mx-auto animate-fade-up animation-delay-200">
              Printer offline, not printing, or Wi-Fi connection issues? Our certified US-based technicians fix most problems remotely — fast, secure, no visit needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up animation-delay-400">
              <Link
                href="tel:+18887694448"
                className="inline-flex items-center px-9 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Call now to get immediate printer support +1-888-769-4448"
              >
                Fix My Printer Now →
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center px-9 py-5 bg-white/90 backdrop-blur-sm text-blue-700 font-bold text-lg rounded-xl border-2 border-white/40 hover:bg-white hover:text-blue-800 transition-all duration-300 shadow-lg"
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-10 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 text-center md:text-left">
            {trustSignals.map((signal, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center md:justify-start gap-2.5 text-sm font-medium text-gray-700 animate-fade-up"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-5 animate-fade-up">
            Common Printer Problems We Fix Daily
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-fade-up animation-delay-100">
            From connectivity failures to driver issues — solved remotely, usually in 20–45 minutes.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, idx) => (
              <Link
                key={idx}
                href={problem.href}
                className="group relative block overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-blue-400 animate-fade-up"
                style={{ animationDelay: `${idx * 80}ms` }}
                aria-label={`Learn how to fix ${problem.title}`}
              >
                <div className="p-7">
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                      <Wrench className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {problem.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-5 text-blue-600 font-medium group-hover:text-blue-800 flex items-center gap-2 text-sm sm:text-base">
                    See solution →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-5 animate-fade-up">
            How Our Remote Support Works
          </h2>

          <div className="text-center mb-12 animate-fade-up animation-delay-100">
            <span className="inline-flex items-center gap-2 text-lg text-gray-700 font-medium">
              <Clock className="w-5 h-5" aria-hidden="true" />
              Average resolution time: 20–40 minutes
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg h-full border border-gray-100 animate-fade-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  {idx + 1}
                </div>
                <p className="text-gray-700 text-center text-sm sm:text-base leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-8 animate-fade-up">
            Printer Brands We Support
          </h2>

          <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto animate-fade-up animation-delay-100">
            We help with most popular printer brands — independent service, not affiliated with manufacturers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {brands.map((brand, idx) => (
              <Link
                key={idx}
                href={brand.href}
                className="block bg-white p-5 rounded-xl shadow-md text-center font-semibold text-gray-800 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {brand.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12 animate-fade-up">
            Simple & Transparent Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <div className="text-5xl font-extrabold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              See Full Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12 animate-fade-up">
            Why Choose ZamZam Print Support
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 animate-fade-up"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <Shield className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 animate-fade-up">
            Frequently Asked Questions
          </h2>
          <FAQAccordionClient faqs={homepageFaqs} />
        </div>
      </section>

      {/* Final Big CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight animate-fade-up">
            Need Printer Help Right Now?
          </h2>

          <p className="text-xl sm:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto animate-fade-up animation-delay-150">
            Don't waste more time with trial-and-error. Get professional remote help today — most issues fixed same day.
          </p>

          <Link
            href="tel:+18887694448"
            className="inline-flex items-center px-12 py-6 bg-white text-blue-700 font-bold text-xl rounded-2xl shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 animate-fade-up animation-delay-300"
            aria-label="Call now for immediate printer support +1-888-769-4448"
          >
            Call & Fix It Now →
          </Link>
        </div>
      </section>

      {/* Footer + SEO links */}
     <footer className="bg-gray-900 text-gray-400 py-12">
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
    <div className="text-center mb-8">
      <p className="text-lg font-medium text-gray-300">
        Independent remote printer support • Not affiliated with any manufacturer
      </p>
    </div>

    {/* SEO-rich internal links grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center text-sm">
      <Link href="/printer-offline-fix" className="hover:text-white transition-colors">Printer Offline</Link>
      <Link href="/printer-not-printing" className="hover:text-white transition-colors">Not Printing</Link>
      <Link href="/printer-driver-installation" className="hover:text-white transition-colors">Driver Install</Link>
      <Link href="/printer-paper-jam" className="hover:text-white transition-colors">Paper Jam Fix</Link>
      <Link href="/hp-printer-offline" className="hover:text-white transition-colors">HP Offline</Link>
      <Link href="/canon-printer-offline" className="hover:text-white transition-colors">Canon Support</Link>
      <Link href="/epson-printer-not-printing" className="hover:text-white transition-colors">Epson Fix</Link>
      <Link href="/brother-printer-offline" className="hover:text-white transition-colors">Brother Help</Link>
      <Link href="/printer-error-codes" className="hover:text-white transition-colors">Error Codes</Link>
      <Link href="/wireless-printer-setup" className="hover:text-white transition-colors">WiFi Setup</Link>
      <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
      <Link href="/blog" className="hover:text-white transition-colors">Support Blog</Link>
    </div>

    <div className="text-center mt-8 text-sm">
      <p>© 2026 ZamZam Print Support • United States only</p>
      <p className="mt-2">
        📞 Immediate help: <strong>+1-888-769-4448</strong>
      </p>
    </div>
  </div>
</footer>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </div>
  );
}