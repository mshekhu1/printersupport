import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2, ShieldCheck, Zap, Phone, ArrowRight,
  Printer, WifiOff, Settings, Link2, AlertCircle, FileWarning,
  Headset, Shield,
} from 'lucide-react';
import FAQAccordionClient from './components/FAQAccordionClient';
import PhoneLink, { PHONE_DISPLAY } from './components/PhoneLink';
import { TEAM_BIOS } from '@/lib/authors';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you fix my printer without visiting my home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — most printer issues are software or network related and can be fixed remotely during a secure session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How soon can I get help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many customers get help the same day during business hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is remote support secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — sessions use encrypted screen-sharing tools and require your permission.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you support business printers and home printers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we support both home and small business environments.',
      },
    },
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.zamzamprint.com/#localbusiness',
  name: 'ZamZam Print Support',
  url: 'https://www.zamzamprint.com',
  telephone: '+18887594448',
  image: 'https://www.zamzamprint.com/logo.jpg',
  priceRange: '$$',
  areaServed: { '@type': 'Country', name: 'United States' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2783 Market St #599',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94114',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61588289645189',
    'https://youtube.com/@zamzam_print',
    'https://www.instagram.com/zamzamprint_support',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+18887594448',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
};

export const metadata = {
  title: 'Remote Printer Support USA | Fast Remote Help',
  description:
    'Remote printer support for HP, Canon, Brother & Epson. Fix offline and not printing over a secure US session — usually in about 15 minutes. Call +1 888 759 4448.',
  alternates: { canonical: 'https://www.zamzamprint.com' },
  openGraph: {
    title: 'Remote Printer Support USA | Fast Remote Help',
    description:
      'Printer offline or not printing? US techs fix HP, Canon, Brother, Epson remotely. No home visit. Call +1 888 759 4448.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-worker-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'ZamZam remote printer support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Printer Support USA | Fast Remote Help',
    description: 'Fast remote printer troubleshooting for Windows & Mac.',
    images: ['/side-view-worker-using-printer.jpg'],
  },
};

export default function Home() {
  const brands = [
    { title: 'HP Support', href: '/services/hp-printer-support', image: '/10140.jpg' },
    { title: 'Canon Support', href: '/services/canon-printer-support', image: '/5103595.jpg' },
    { title: 'Epson Support', href: '/services/epson-printer-support', image: '/5144313.jpg' },
    { title: 'Brother Support', href: '/services/brother-printer-support', image: '/5150026.jpg' },
    { title: 'Samsung Support', href: '/services/samsung-printer-support', image: '/8771958.jpg' },
  ];

  const commonIssues = [
    {
      icon: Printer,
      title: 'Printer Offline',
      description: 'Shows offline even when powered on — we get it back online.',
      link: '/services/printer-offline',
    },
    {
      icon: WifiOff,
      title: 'Wi‑Fi Setup',
      description: 'Wireless printers that won’t join the network.',
      link: '/services/wireless-printer-setup',
    },
    {
      icon: Settings,
      title: 'Driver Problems',
      description: 'Missing, outdated, or “driver unavailable” errors.',
      link: '/services/printer-driver-installation',
    },
    {
      icon: Link2,
      title: 'Not Connecting',
      description: 'Windows can’t detect the printer over USB or network.',
      link: '/services/printer-not-connecting',
    },
    {
      icon: FileWarning,
      title: 'Error Codes',
      description: 'We decode and clear common printer error codes.',
      link: '/services/printer-error-codes',
    },
    {
      icon: AlertCircle,
      title: 'Paper Jams',
      description: 'Safe guidance to clear jams without damaging rollers.',
      link: '/services/printer-paper-jam',
    },
  ];

  const homepageFaqs = [
    {
      q: 'Can you fix my printer without visiting my home?',
      a: 'Yes — most printer issues are software or network related and can be fixed remotely. Problems like driver errors, offline status, Wi‑Fi connectivity, and configuration issues are handled through a secure remote session with your permission.',
    },
    {
      q: 'How soon can I get help?',
      a: 'Many customers get help the same day during business hours. We prioritize quick response times when you need to print urgently.',
    },
    {
      q: 'Is remote support secure?',
      a: 'Yes — sessions use encrypted screen-sharing tools that require your explicit permission. You can see everything and end the session anytime.',
    },
    {
      q: 'Do you support business printers and home printers?',
      a: 'Yes — single home printers and small-office fleets. Setup, troubleshooting, and ongoing support.',
    },
    {
      q: "What if the problem can't be fixed remotely?",
      a: 'If it is a hardware fault, we will say so clearly and outline repair or replacement options. You only pay when we fix a remote-solvable issue.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Full-bleed hero */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/side-view-worker-using-printer.jpg"
          alt="Technician working with a printer during remote support"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.25)_0%,rgba(10,22,40,0.78)_70%,rgba(10,22,40,0.92)_100%)] max-sm:bg-[linear-gradient(180deg,rgba(10,22,40,0.72)_0%,rgba(10,22,40,0.35)_42%,rgba(10,22,40,0.78)_72%,rgba(10,22,40,0.92)_100%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 min-h-[88vh] flex flex-col justify-between sm:justify-end pb-14 sm:pb-20 pt-10 sm:pt-32 motion-rise">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-3xl leading-[1.05] sm:mb-5">
            Remote printer support for the USA
          </h1>
          <div>
            <p className="text-base sm:text-xl text-white/85 max-w-xl mb-8 leading-relaxed">
              HP, Canon, Brother, Epson — fixed over a secure session. No home visit.
              Stay on the line while we get you printing again.
            </p>
            <PhoneLink
              location="home_hero"
              className="inline-flex items-center justify-center gap-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-7 py-4 font-bold text-lg"
              showIcon
            >
              Call {PHONE_DISPLAY}
            </PhoneLink>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 font-medium">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> US-based techs</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Usually ~15 minutes</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> No fix, no charge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands — one job */}
      <section className="py-16 sm:py-20 border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Brands we support</h2>
          <p className="text-[var(--muted)] mb-10 max-w-2xl">
            Dedicated help pages for the printers people call about most.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brands.map((b) => (
              <Link key={b.href} href={b.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image src={b.image} alt={b.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <span className="font-semibold text-[var(--accent)] group-hover:underline">{b.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Problems we fix</h2>
          <p className="text-[var(--muted)] mb-10 max-w-2xl">
            Offline status, drivers, Wi‑Fi, and error codes — remotely.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue) => {
              const Icon = issue.icon;
              return (
                <Link
                  key={issue.link}
                  href={issue.link}
                  className="block border border-[var(--line)] bg-[var(--surface)] p-6 hover:border-[var(--accent)] transition"
                >
                  <Icon className="w-7 h-7 text-[var(--accent)] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{issue.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{issue.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--accent)]">
                    Fix this <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">How remote support works</h2>
          <p className="text-[var(--muted)] mb-12 max-w-2xl">Three steps. You stay in control the whole time.</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: '01', title: 'Call or request help', desc: `Call ${PHONE_DISPLAY} or submit a callback form.`, icon: Headset },
              { step: '02', title: 'Secure remote session', desc: 'We share a one-time link. You approve every connection.', icon: Shield },
              { step: '03', title: 'Print again', desc: 'Most issues clear in under 20 minutes. Pay only when fixed.', icon: Zap },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="motion-fade">
                  <div className="text-sm font-bold tracking-widest text-[var(--accent)] mb-3">{item.step}</div>
                  <Icon className="w-8 h-8 mb-4 text-[var(--foreground)]" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team / trust */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Who you’re talking to</h2>
          <p className="text-[var(--muted)] mb-10 max-w-2xl">
            Named specialists — not a generic call center script.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {TEAM_BIOS.map((person) => (
              <div key={person.name} className="border border-[var(--line)] bg-[var(--surface)] p-6">
                <div className="w-12 h-12 bg-[var(--accent)] text-white flex items-center justify-center font-bold text-lg mb-4">
                  {person.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg">{person.name}</h3>
                <p className="text-sm font-semibold text-[var(--accent)] mb-2">{person.role}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{person.blurb}</p>
              </div>
            ))}
          </div>

          <div className="mb-12 border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-2">What customers call about</h3>
            <p className="text-sm text-[var(--muted)] mb-6 max-w-2xl">
              Typical outcomes from remote sessions — plain language, no star widgets.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              {[
                {
                  quote: 'HP kept flipping Offline after every Windows update. Port + spooler fix, printing again same call.',
                  meta: 'HP OfficeJet · Remote',
                },
                {
                  quote: 'Canon Pixma would not join the new mesh Wi‑Fi. Rejoined the right SSID and reinstalled the driver.',
                  meta: 'Canon Pixma · Remote',
                },
                {
                  quote: 'Brother queue stuck for a small office. Cleared spooler and set a stable TCP/IP port.',
                  meta: 'Brother laser · Remote',
                },
              ].map((item) => (
                <blockquote key={item.meta} className="border-l-2 border-[var(--accent)] pl-4">
                  <p className="text-[var(--foreground)] leading-relaxed mb-3">“{item.quote}”</p>
                  <footer className="text-[var(--muted)] font-medium">{item.meta}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="flex gap-3 items-start">
              <ShieldCheck className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Encrypted sessions</p>
                <p className="text-[var(--muted)]">You approve access and can end anytime.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">No fix, no charge</p>
                <p className="text-[var(--muted)]">Pay only when the printer works again.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Phone className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Fast pickup</p>
                <p className="text-[var(--muted)]">Average wait aimed under a few minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-[var(--foreground)] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Printer down? Call ZamZam.
            </h2>
            <p className="text-white/75 max-w-xl">
              Remote help for offline, drivers, and setup — usually while you’re still on the phone.
            </p>
          </div>
          <PhoneLink
            location="home_bottom_cta"
            className="inline-flex items-center justify-center gap-3 bg-white text-[var(--foreground)] px-8 py-4 font-bold text-lg hover:bg-slate-100"
            showIcon
          >
            {PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-center">FAQs</h2>
          <p className="text-center text-[var(--muted)] mb-10">Remote printer support, answered plainly.</p>
          <FAQAccordionClient faqs={homepageFaqs} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </div>
  );
}
