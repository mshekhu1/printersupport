// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2, History, ShieldCheck, Zap, Users, Award, Phone, ArrowRight,
  Printer, WifiOff, Settings, Link2, AlertCircle, FileWarning, MapPin, Heart,
  Headset, Globe, Shield
} from 'lucide-react';
import FAQAccordionClient from './components/FAQAccordionClient';


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
  logo: "https://www.zamzamprint.com/logo.jpg",
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+1 888 759 4448",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English"
  }]
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZamZam Print Support",
  telephone: "+1 888 759 4448",
  areaServed: "United States"
};

/* ───────────────── Metadata ───────────────── */

export const metadata = {
  title: 'Remote Printer Support for Home & Business | Fast US Service',
  description: 'Printer not printing or showing offline? Get fast remote printer support for Windows & Mac.',
  alternates: { canonical: 'https://www.zamzamprint.com' },
  openGraph: {
    title: 'Remote Printer Support for Home & Business | Fast US Service',
    description: 'Printer not printing or showing offline? Get fast remote printer support for Windows & Mac. Expert help for HP, Canon, Epson, Brother, and Samsung printers.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional remote printer support services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Printer Support for Home & Business | Fast US Service',
    description: 'Get fast remote printer support for Windows & Mac. Expert help for all major printer brands.',
    images: ['/side-view-employee-using-printer.jpg'],
  },
};

/* ───────────────── Page ───────────────── */

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
      description: 'Your printer shows offline even though it\'s connected? We\'ll get it back online in minutes.',
      link: '/services/printer-offline'
    },
    {
      icon: WifiOff,
      title: 'Wi-Fi Connection Issues',
      description: 'Can\'t connect your wireless printer to your network? We\'ll configure it properly.',
      link: '/services/wireless-printer-setup'
    },
    {
      icon: Settings,
      title: 'Driver Problems',
      description: 'Missing, outdated, or corrupted printer drivers? We\'ll install the right ones.',
      link: '/services/printer-driver-installation'
    },
    {
      icon: Link2,
      title: 'Printer Not Connecting',
      description: 'Printer not detected by Windows? We\'ll fix connection and detection issues.',
      link: '/services/printer-not-connecting'
    },
    {
      icon: FileWarning,
      title: 'Printer Error Codes',
      description: 'Seeing error codes on your printer? We\'ll decode and fix them quickly.',
      link: '/services/printer-error-codes'
    },
    {
      icon: AlertCircle,
      title: 'Paper Jam Issues',
      description: 'Paper stuck in your printer? We\'ll guide you to clear it safely.',
      link: '/services/printer-paper-jam'
    }
  ];

  const whyChooseUs = [
    {
      icon: History,
      title: 'Same-Day Service',
      description: 'Get help fast. Most issues are resolved the same day you contact us.'
    },
    {
      icon: ShieldCheck,
      title: '100% Secure',
      description: 'Encrypted remote sessions with full transparency. You stay in control.'
    },
    {
      icon: MapPin,
      title: 'US-Based Technicians',
      description: 'Friendly, experienced support staff located right here in the United States.'
    },
    {
      icon: Heart,
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
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}} />

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
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
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

            <p className="text-xl lg:text-2xl text-blue-50 mb-10 leading-relaxed drop-shadow-md">
              Offline printers, connection issues, driver problems? Our US-based technicians solve most issues remotely—no home visit needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="tel:+1 888 759 4448"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold rounded-xl shadow-2xl hover:bg-blue-700 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +1 888 759 4448</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all font-outfit"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <span className="font-medium">No Home Visit Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500/20 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-purple-500/20 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                </div>
                <span className="font-medium">100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SUPPORT MARQUEE ───────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Major Printer Brands Supported
            </h2>
            <p className="text-lg text-gray-600">
              Expert assistance for all leading manufacturers, delivered remotely to your home or office.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="marquee-container py-4">
            {[...brands, ...brands].map((b, idx) => (
              <Link
                key={idx}
                href={b.href}
                className="group relative flex-shrink-0 w-[320px] h-[200px] mx-4 rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-blue-900/80 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{b.title}</h3>
                  <div className="flex items-center gap-2 text-blue-300 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Expert Support</span>
                    <ArrowRight className="w-4 h-4 translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Faded edges for better look */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
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

          <div className="text-center mb-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors bg-blue-50 px-6 py-2 rounded-full"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {commonIssues.map((issue, idx) => {
              const Icon = issue.icon;
              return (
                <Link
                  key={idx}
                  href={issue.link}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100/50 hover:border-blue-400/50 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-blue-100" />
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 border border-blue-200/50 group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:scale-110 transition-all shadow-sm">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">
                    {issue.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {issue.description}
                  </p>
                  <div className="mt-6 text-blue-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── WHY CHOOSE US ───────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/side-view-worker-using-printer.jpg')] bg-cover bg-fixed grayscale" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Why Trust <span className="text-blue-400">ZamZam</span> Support?
            </h2>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto font-light">
              Premium remote assistance from certified US-based experts. Fast, secure, and available when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChooseUs.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group text-center">
                  <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-400/50 transition-all shadow-2xl">
                    <Icon className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100/70 leading-relaxed text-sm font-light">
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

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100" />

            {[
              {
                step: '01',
                title: 'Request Support',
                desc: 'Call us at +1 888 759 4448 or use our online portal to describe your issue.',
                icon: Headset
              },
              {
                step: '02',
                title: 'Secure Link',
                desc: 'Our technician provides a secure, one-time connection link to access your printer software.',
                icon: Shield
              },
              {
                step: '03',
                title: 'Back to Work',
                desc: 'Most issues are resolved in under 20 minutes. You only pay when the job is done.',
                icon: Zap
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group relative">
                  <div className="relative z-10 w-20 h-20 bg-white border-2 border-blue-50 rounded-3xl flex items-center justify-center text-3xl font-black text-blue-600 mx-auto mb-8 shadow-xl group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                    <Icon className="w-10 h-10" />
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white text-xs flex items-center justify-center rounded-xl border-2 border-white">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-center text-sm font-light px-4">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── CTA SECTION ───────── */}
      <section className="py-24 relative overflow-hidden bg-slate-900 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-400 text-sm font-bold mb-8 border border-blue-500/20">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="uppercase tracking-widest">Instant Connection Available</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white tracking-tight leading-none">
            Ready to Fix Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Printer Today?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Don't let technical glitches halt your productivity. Join thousands of satisfied users who trust ZamZam for fast, reliable remote support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="tel:+1 888 759 4448"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span className="text-2xl">+1 888 759 4448</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-white/5 backdrop-blur-md text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <span>Chat with Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
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
      <section className="sr-only" aria-hidden="true">
        <h2>Site Navigation</h2>

        <h3>Main Pages</h3>
        <ul>
          <li><Link href="/services">All Services</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>

        <h3>General Printer Services</h3>
        <ul>
          <li><Link href="/services/printer-offline">Printer Offline</Link></li>
          <li><Link href="/services/printer-not-connecting">Printer Not Connecting</Link></li>
          <li><Link href="/services/printer-driver-installation">Printer Driver Installation</Link></li>
          <li><Link href="/services/wireless-printer-setup">Wireless Printer Setup</Link></li>
          <li><Link href="/services/printer-error-codes">Printer Error Codes</Link></li>
          <li><Link href="/services/printer-spooler-error">Printer Spooler Error</Link></li>
          <li><Link href="/services/printer-paper-jam">Printer Paper Jam</Link></li>
          <li><Link href="/services/printer-printing-blank-pages">Printer Printing Blank Pages</Link></li>
        </ul>

        <h3>HP Printer Support</h3>
        <ul>
          <li><Link href="/services/hp-printer-support">HP Printer Support</Link></li>
          <li><Link href="/services/hp-printer-offline">HP Printer Offline</Link></li>
          <li><Link href="/services/hp-printer-not-printing">HP Printer Not Printing</Link></li>
        </ul>

        <h3>Canon Printer Support</h3>
        <ul>
          <li><Link href="/services/canon-printer-support">Canon Printer Support</Link></li>
          <li><Link href="/services/canon-printer-offline">Canon Printer Offline</Link></li>
        </ul>

        <h3>Epson Printer Support</h3>
        <ul>
          <li><Link href="/services/epson-printer-support">Epson Printer Support</Link></li>
          <li><Link href="/services/epson-printer-not-printing">Epson Printer Not Printing</Link></li>
        </ul>

        <h3>Brother Printer Support</h3>
        <ul>
          <li><Link href="/services/brother-printer-support">Brother Printer Support</Link></li>
          <li><Link href="/services/brother-printer-offline">Brother Printer Offline</Link></li>
        </ul>

        <h3>Samsung Printer Support</h3>
        <ul>
          <li><Link href="/services/samsung-printer-support">Samsung Printer Support</Link></li>
        </ul>

        <h3>Legal Pages</h3>
        <ul>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service">Terms of Service</Link></li>
          <li><Link href="/refund-policy">Refund Policy</Link></li>
        </ul>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg">© 2026 ZamZam Print Support • United States</p>
          <p className="mt-4 text-2xl font-bold text-white">📞 +1 888 759 4448</p>
          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <Link href="/services" className="hover:text-white transition-colors">All Services</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
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
