import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2, ShieldCheck, Zap, Phone, ArrowRight,
  Printer, WifiOff, Settings, Link2, AlertCircle, FileWarning,
  Headset, Shield,
} from 'lucide-react';
import FAQAccordionClient from './components/FAQAccordionClient';
import PhoneLink from './components/PhoneLink';
import { PHONE_DISPLAY } from '@/lib/phone';
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
  title: 'Remote Printer Support USA | ZamZam Print',
  description:
    'Printer offline or not printing? US techs fix HP, Canon, Brother & Epson remotely — usually in about 15 minutes. No home visit.',
  alternates: { canonical: 'https://www.zamzamprint.com' },
  openGraph: {
    title: 'Remote Printer Support USA | ZamZam Print',
    description:
      'Printer offline or not printing? US techs fix HP, Canon, Brother & Epson remotely — usually in about 15 minutes. No home visit.',
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
    title: 'Remote Printer Support USA | ZamZam Print',
    description:
      'Printer offline or not printing? US techs fix HP, Canon, Brother & Epson remotely — usually in about 15 minutes. No home visit.',
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
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <Image
          src="/side-view-worker-using-printer.jpg"
          alt="Technician working with a printer during remote support"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.25)_0%,rgba(10,22,40,0.78)_70%,rgba(10,22,40,0.92)_100%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-14 sm:pb-20 pt-32 motion-rise">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-3xl leading-[1.05] mb-5">
            Remote printer support for the USA
          </h1>
          <p className="text-base sm:text-xl text-white/85 max-w-xl mb-8 leading-relaxed">
            HP, Canon, Brother, Epson — fixed over a secure session. No home visit.
            If we don’t fix it, you don’t pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <PhoneLink
              location="home_hero"
              className="inline-flex items-center justify-center gap-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-7 py-4 font-bold text-lg"
              showIcon
            >
              Call {PHONE_DISPLAY}
            </PhoneLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 font-medium">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> US-based techs</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Usually ~15 minutes</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> No fix, no charge</span>
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

      {/* Guides */}
      <section className="py-16 sm:py-20 bg-[var(--surface)] border-y border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Printer fix guides</h2>
          <p className="text-[var(--muted)] mb-10 max-w-2xl">
            Step-by-step help for the issues people search most. Call if you want a tech to do it with you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'HP printer troubleshooting',
                description: 'Offline, not printing, and driver fixes for DeskJet, OfficeJet, and LaserJet.',
                href: '/blog/hp-printer-troubleshooting-guide',
              },
              {
                title: 'HP printer offline',
                description: 'HP Smart, WSD ports, and spooler steps to bring HP back online.',
                href: '/blog/hp-printer-offline-fix-solutions',
              },
              {
                title: 'Printer not printing',
                description: 'Clear the queue, restart the spooler, and check offline status on Windows.',
                href: '/blog/printer-not-printing-fixes-solutions',
              },
              {
                title: 'Printer offline on Windows',
                description: 'Use Printer Offline, Wi‑Fi, and TCP/IP port fixes that usually work.',
                href: '/blog/printer-offline-fix-solutions-2026',
              },
              {
                title: 'Canon B200 error',
                description: 'Printhead and reset checks for Canon error B200 on US models.',
                href: '/blog/canon-error-b200-fix-solution',
              },
              {
                title: 'Brother printer offline',
                description: 'iPrint&Scan, spooler, and port fixes when Brother stays offline.',
                href: '/services/brother-printer-offline',
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block border border-[var(--line)] bg-[var(--background)] p-6 hover:border-[var(--accent)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{guide.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--accent)]">
                  Read the guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:underline">
              All printer guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">How remote support works</h2>
          <p className="text-[var(--muted)] mb-12 max-w-2xl">Three steps. You stay in control the whole time.</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: '01', title: 'Call us', desc: `Call ${PHONE_DISPLAY} and tell us what’s happening with the printer.`, icon: Headset },
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

          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">What a typical call looks like</h3>
            <p className="text-sm text-[var(--muted)] mb-8 max-w-2xl">
              Same-session notes from the specialists above — problem, what we changed, result. These are not customer reviews.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  printer: 'HP OfficeJet',
                  issue: 'Kept going Offline after every Windows update',
                  fix: 'Switched the WSD port to Standard TCP/IP and restarted Print Spooler.',
                  result: 'Test page printed on the same call.',
                  tech: 'James Parker',
                  href: '/blog/hp-printer-offline-fix-solutions',
                  linkLabel: 'HP offline guide',
                },
                {
                  printer: 'Canon Pixma',
                  issue: 'Would not join a new mesh Wi‑Fi network',
                  fix: 'Rejoined the 2.4 GHz SSID and reinstalled the Canon driver.',
                  result: 'Printer showed online and printed from Windows.',
                  tech: 'Victoria Lee',
                  href: '/services/wireless-printer-setup',
                  linkLabel: 'Wi‑Fi setup help',
                },
                {
                  printer: 'Brother laser',
                  issue: 'Print queue stuck for a small office',
                  fix: 'Cleared the spooler and set a stable Standard TCP/IP port.',
                  result: 'Jobs started flowing again without a site visit.',
                  tech: 'Michael Roberts',
                  href: '/services/brother-printer-offline',
                  linkLabel: 'Brother offline help',
                },
              ].map((item) => (
                <article
                  key={item.printer}
                  className="border border-[var(--line)] bg-[var(--surface)] p-6 flex flex-col"
                >
                  <p className="text-xs font-bold tracking-widest uppercase text-[var(--accent)] mb-3">{item.printer}</p>
                  <h4 className="font-bold text-lg mb-4 leading-snug">{item.issue}</h4>
                  <dl className="text-sm space-y-3 mb-6 flex-1">
                    <div>
                      <dt className="font-semibold text-[var(--foreground)]">What we changed</dt>
                      <dd className="text-[var(--muted)] leading-relaxed mt-0.5">{item.fix}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[var(--foreground)]">Result</dt>
                      <dd className="text-[var(--muted)] leading-relaxed mt-0.5">{item.result}</dd>
                    </div>
                  </dl>
                  <p className="text-xs text-[var(--muted)] mb-4">{item.tech}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[var(--accent)] hover:underline"
                  >
                    {item.linkLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
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
