// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Clock, Shield } from 'lucide-react';
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

  const homepageFaqs = [
    {
      q: 'Can you fix my printer without visiting my home?',
      a: 'Yes — most printer issues are software or network related and can be fixed remotely.'
    },
    {
      q: 'How soon can I get help?',
      a: 'Many customers get help the same day during business hours.'
    },
    {
      q: 'Is remote support secure?',
      a: 'Yes — sessions use encrypted screen-sharing tools.'
    },
    {
      q: 'Do you support business printers and home printers?',
      a: 'Yes — we support both home and small business users.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ───────── HERO (FIXED IMAGE) ───────── */}
      <section className="relative isolate min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/side-view-worker-using-printer.jpg"
            alt="Professional using modern printer in office environment"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-28 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">
            Printer Not Working?
            <span className="block text-blue-400">Get Instant Remote Support</span>
          </h1>

          <p className="text-xl max-w-3xl mx-auto mb-10">
            Printer offline, not printing, or Wi-Fi issues? Our US-based technicians fix most problems remotely.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              href="tel:+18887694448"
              className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:bg-blue-700"
            >
              Fix My Printer Now →
            </Link>

            <Link
              href="/pricing"
              className="px-10 py-5 bg-white text-blue-700 font-bold rounded-xl shadow-xl"
            >
              View Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Supported Brands ───────── */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Printer Brands We Support
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-5xl mx-auto px-6">
          {brands.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="bg-white p-6 rounded-xl shadow-md text-center font-semibold hover:shadow-lg"
            >
              {b.title}
            </Link>
          ))}
        </div>
      </section>

      {/* ───────── FAQs ───────── */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <FAQAccordionClient faqs={homepageFaqs} />
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
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>© 2026 ZamZam Print Support • United States</p>
        <p className="mt-2">📞 +1-888-769-4448</p>
      </footer>

      {/* ───────── STRUCTURED DATA ───────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </div>
  );
}
