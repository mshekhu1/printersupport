// app/page.js
import Link from 'next/link';
import { CheckCircle, Wrench, Clock, Shield, Zap, Users } from 'lucide-react';
import FAQAccordionClient from './components/FAQAccordionClient';
import ScrollRevealClient from './components/ScrollRevealClient';
import CallRevealClient from './components/CallRevealClient';
import { generateOrganizationJsonLd, generateLocalBusinessJsonLd } from '@/lib/seoUtils';

export const metadata = {
  title: 'Remote Printer Support for Home & Business | Fast US Service',
  description: 'Printer not printing or showing offline? Get fast remote printer support for Windows & Mac. Affordable printer fixing service for US users.',
  keywords: [
    'printer support',
    'remote printer support',
    'printer not printing',
    'printer offline',
    'printer repair',
    'printer troubleshooting',
    'printer driver',
    'printer setup',
    'US printer support',
    'printer fixing service',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Remote Printer Support for Home & Business | Fast US Service',
    description: 'Printer not printing or showing offline? Get fast remote printer support for Windows & Mac.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Printer Support for Home & Business',
    description: 'Get fast remote printer support for Windows & Mac. Affordable printer fixing service.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com',
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
    { title: 'HP printers', href: '/brands/hp' },
    { title: 'Canon printers', href: '/brands/canon' },
    { title: 'Epson printers', href: '/brands/epson' },
    { title: 'Brother printers', href: '/brands/brother' },
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
      aShort: 'Yes — most printer issues are software or network related and can be fixed remotely.',
      a: 'Most problems like driver errors, offline status, and Wi‑Fi connectivity are fixed by a technician during a secure remote session. We only request temporary access and walk you through every step so you remain in control.'
    },
    {
      q: 'How soon can I get help?',
      aShort: 'Many customers get help the same day.',
      a: 'We offer same-day remote sessions during business hours. After you contact us we typically schedule the next available technician within hours depending on demand.'
    },
    {
      q: 'Is remote support secure?',
      aShort: 'Yes — sessions use encrypted screen-sharing tools.',
      a: 'Remote sessions are encrypted and require your permission to start. We never access files without permission and nothing remains installed after the session unless you explicitly request it.'
    },
    {
      q: 'Do you support business printers and home printers?',
      aShort: 'Yes — we support both home and small business environments.',
      a: 'We work with single users, home offices, and small businesses. For enterprise networks we provide guidance and can coordinate with IT when needed.'
    }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const siteUrl = 'https://www.zamzamprint.com';
  const organizationJsonLd = generateOrganizationJsonLd({
    name: 'ZamZam Print Support',
    url: siteUrl,
    description: 'Professional remote printer support services for US customers',
  });

  const localBusinessJsonLd = generateLocalBusinessJsonLd({
    name: 'ZamZam Print Support',
    url: siteUrl,
    description: 'Remote printer support services for US customers',
    phone: '+1-888-769-4448',
    areaServed: 'United States',
  });

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative overflow-hidden" data-sr-ignore>
        <div className="absolute inset-0">
          {/* Background image (public/side-view-emp) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/side-view-worker-using-printer.jpg')" }}
          />
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 "></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <ScrollRevealClient delay={50} once={true} effect="fade-up">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Printer Not Working?<br />
                  <span className="text-blue-600">Get Instant Remote Printer Support</span>
                </h1>
              </ScrollRevealClient>

              <ScrollRevealClient delay={150} once={true} effect="fade-up">
                <p className="text-xl text-white mb-8 leading-relaxed">
                  Having trouble with your printer not printing, showing offline, or not connecting to Wi-Fi? 
                  Our certified technicians fix printer issues remotely for home and business users across the United States.
                </p>
              </ScrollRevealClient>

              <div className="flex flex-col sm:flex-row gap-10 justify-center">
                <ScrollRevealClient delay={250} once={true} effect="fade-up">
                  <Link 
                    href="tel:+18887694448"
                    className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    👉 Fix My Printer Now
                  </Link>
                </ScrollRevealClient>
                <ScrollRevealClient delay={300} once={true} effect="fade-up">
                  <Link 
                    href="/pricing"
                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    👉 View Pricing
                  </Link>
                </ScrollRevealClient>
                <ScrollRevealClient delay={350} once={true} effect="fade-up">
                  <Link 
                    href="/printer-support"
                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    👉 Get Printer Support
                  </Link>
                </ScrollRevealClient>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {trustSignals.map((signal, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 50} effect="slide-left">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-gray-700">{signal}</span>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
   <section className="py-20 bg-linear-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
      Common Printer Problems We Fix Daily
    </h2>
    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
      From paper jams to connectivity issues, our experts handle it all quickly and reliably.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {problems.map((problem, idx) => (
        <ScrollRevealClient key={idx} delay={idx * 80} effect="slide-left">
          <Link
            href={problem.href}
            className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-400 border-2 border-transparent"
          >
            {/* Background illustration (replace with actual printer-related images/icons for each) */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <div className="bg-linear-to-br from-blue-100 to-indigo-200 absolute inset-0" />
            </div>

            <div className="relative p-8 bg-white">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <Wrench className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    {problem.description || "Fast and professional repair for this common issue."}
                  </p>
                </div>
              </div>
              <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-800 flex items-center gap-2">
                Learn more →
              </div>
            </div>
          </Link>
        </ScrollRevealClient>
      ))}
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            How Our Remote Printer Support Works
          </h2>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-lg text-gray-600">
              <Clock className="w-5 h-5" />
              Average fix time: 20–40 minutes
            </span>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="slide-left">
                <div className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-center text-sm leading-relaxed">{step}</p>
                  </div>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Printers We Commonly Support
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8 text-center text-lg">
              We provide support for most popular printer brands, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-8">
              {brands.map((brand, idx) => (
                <ScrollRevealClient key={idx} delay={idx * 50} effect="slide-left">
                  <Link
                    key={idx}
                    href={brand.href}
                    className="bg-white p-4 rounded-lg shadow-md text-center font-medium text-gray-800 border border-gray-200 hover:shadow-lg hover:scale-105 transition-transform"
                  >
                    {brand.title}
                  </Link>
                </ScrollRevealClient>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
              📌 We are an independent printer support service and not affiliated with any brand.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-linear-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Simple & Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="slide-left">
                <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.desc}</p>
                  </div>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="tel:+18887694448"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
            >
              👉 View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Printer Support Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((reason, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 60} effect="slide-left">
                <div className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md">
                  <Shield className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <p className="text-gray-700">{reason}</p>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/pricing" className="group p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">See Pricing</h3>
                  <p className="text-sm text-gray-600">Transparent, easy plans</p>
                </div>
              </div>
            </a>

            <a href="/printer-support" className="group p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Printer Support</h3>
                  <p className="text-sm text-gray-600">Common fixes & troubleshooting</p>
                </div>
              </div>
            </a>

            <div className="group p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Setup Guides & Fixes</h3>
                  <p className="text-sm text-gray-600">Step-by-step instructions and quick fixes</p>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Call Support</h3>
                  <p className="text-sm text-gray-600">Reveal our US support number</p>
                  <div className="mt-3">
                    <CallRevealClient />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Gallery / Trust visuals */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">See Our Work</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{src: '/10140.jpg', cap: 'Driver installation & setup'},{src: '/8771958.jpg', cap: 'Driver downloads & updates'},{src: '/5144313.jpg', cap: 'Wireless & Wi‑Fi fixes'},{src: '/5150026.jpg', cap: 'Remote diagnostics & repairs'}].map((it, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 60} effect="slide-left">
                <figure className="rounded-lg overflow-hidden shadow-sm">
                  <img src={it.src} alt={it.cap} className="w-full h-40 object-cover" />
                  <figcaption className="text-sm text-gray-600 p-2 text-center">{it.cap}</figcaption>
                </figure>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Frequently Asked Questions</h2>
          <FAQAccordionClient faqs={homepageFaqs} />
        </div>
      </section>

      {/* Structured data for FAQ, Organization, and LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }} />

      {/* Final CTA */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-indigo-600 text-white">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Immediate Printer Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't waste hours trying random fixes. Get professional remote printer support and start printing again today.
          </p>
          <Link 
            href="tel:+18887694448"
            className="inline-block px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:scale-105"
          >
            👉 Fix My Printer Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            Independent remote printer support service for US users. We are not affiliated with HP, Canon, Epson, or any printer brand.
          </p>
        </div>
      </footer>
    </div>
  );
}
