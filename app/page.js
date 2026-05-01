// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2, History, ShieldCheck, Zap, Users, Award, Phone, ArrowRight,
  Printer, WifiOff, Settings, Link2, AlertCircle, FileWarning, MapPin, Heart,
  Headset, Globe, Shield, Facebook, Youtube, Instagram, Star, Clock
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
  sameAs: [
    "https://www.facebook.com/profile.php?id=61588289645189&sfnsn=wiwspwa&mibextid=RUbZ1f",
    "https://youtube.com/@zamzam_print",
    "https://www.instagram.com/zamzamprint_support"
  ],
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
      {/* ───────── GLOBAL TOP BANNER ───────── */}
      <div className="bg-blue-600 text-white text-center py-2.5 px-4 font-medium text-sm sm:text-base tracking-wide flex items-center justify-center gap-3 relative z-50 shadow-sm border-b border-blue-700">
        <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_8px_rgba(110,231,183,0.8)]"></span>
        <span>No In-Person Visit Needed — <strong className="font-bold">100% Remote Printer Support for USA</strong></span>
      </div>

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
      <section className="relative pt-8 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 overflow-hidden bg-white">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] -z-10" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left mt-2 sm:mt-8 lg:mt-0">
            {/* Elegant Subdued Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-4 sm:mb-6 shadow-sm">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-700 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase">
                Printer Down? Fixed in 15 Minutes
              </span>
            </div>

            {/* Core Headline Stringent Typography */}
            <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-slate-900 tracking-tight">
              100% Remote <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Printer Support
              </span>
            </h1>

            {/* Sub-headline accent line */}
            <p className="inline-block text-base sm:text-lg font-bold text-slate-800 mb-4 sm:mb-5 tracking-tight bg-slate-50 px-3 py-1 rounded-lg sm:rounded-xl border border-slate-200 max-w-[280px] sm:max-w-none">
              HP, Canon, Brother, Epson & More
            </p>

            {/* Body */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-sm sm:max-w-lg mx-auto lg:mx-0 font-medium px-2 sm:px-0">
              Our certified US technicians fix 95% of printer issues over the phone. No home visit needed. <strong className="text-slate-900 font-bold">If we don't fix it, you don't pay.</strong>
            </p>

            {/* Massive Trust Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6 sm:mb-8 w-full sm:w-auto px-2 sm:px-0">
              <Link
                href="tel:+18887594448"
                className="group w-full sm:w-auto relative inline-flex flex-col items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)]"
              >
                <div className="flex items-center gap-2 sm:gap-2.5 mb-0.5 sm:mb-1">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className="font-black text-xl sm:text-2xl tracking-tight">Call: +1 888 759 4448</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-blue-100 flex items-center gap-1 opacity-90">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Average Wait Time: 2 Mins
                </span>
              </Link>
            </div>

            {/* Trust Badges Checkmarks */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-2 text-slate-600 text-[11px] sm:text-xs font-bold pt-4 sm:pt-5 border-t border-slate-100 max-w-sm sm:max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                <span>US-Based Techs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                <span>Fix While You Watch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                <span>Guaranteed Fix</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative mt-6 sm:mt-10 lg:mt-0 px-2 sm:px-0">
            {/* Structural Solid Offset Background */}
            <div className="absolute top-[8px] -right-[8px] bottom-[-8px] left-[8px] sm:top-[15px] sm:-right-[15px] sm:bottom-[-15px] sm:left-[15px] bg-blue-50 border border-blue-100/50 rounded-2xl sm:rounded-3xl -z-10 shadow-sm"></div>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100 bg-white w-full aspect-[4/3] max-w-md sm:max-w-lg mx-auto lg:max-w-none transform transition-transform duration-500">
              <Image
                src="/side-view-worker-using-printer.jpg"
                alt="Expert remote printer support"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-40 sm:h-40 bg-blue-200/50 rounded-full blur-2xl sm:blur-3xl -z-20 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-40 sm:h-40 bg-indigo-200/50 rounded-full blur-2xl sm:blur-3xl -z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ───────── TRUST SIGNALS ───────── */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/60 relative overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* No Fix No Charge */}
            <div className="group flex flex-row sm:flex-col items-center sm:text-center p-5 sm:p-8 rounded-[1.25rem] sm:rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all duration-300">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-2xl bg-emerald-50 flex items-center justify-center mr-4 sm:mr-0 sm:mb-5">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="text-slate-900 font-bold sm:font-extrabold text-[15px] sm:text-lg mb-0.5 sm:mb-2">No Fix, No Charge</h3>
                <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-medium">100% satisfaction guarantee — pay only when fixed.</p>
              </div>
            </div>

            {/* SSL Secured */}
            <div className="group flex flex-row sm:flex-col items-center sm:text-center p-5 sm:p-8 rounded-[1.25rem] sm:rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all duration-300">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-2xl bg-blue-50 flex items-center justify-center mr-4 sm:mr-0 sm:mb-5">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="text-slate-900 font-bold sm:font-extrabold text-[15px] sm:text-lg mb-0.5 sm:mb-2">SSL Secured</h3>
                <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-medium">256-bit encrypted sessions protect every interaction.</p>
              </div>
            </div>

            {/* Data Confidential */}
            <div className="group flex flex-row sm:flex-col items-center sm:text-center p-5 sm:p-8 rounded-[1.25rem] sm:rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all duration-300">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-2xl bg-purple-50 flex items-center justify-center mr-4 sm:mr-0 sm:mb-5">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="text-slate-900 font-bold sm:font-extrabold text-[15px] sm:text-lg mb-0.5 sm:mb-2">Data Confidential</h3>
                <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-medium">We never store or access your personal files.</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="group flex flex-row sm:flex-col items-center sm:text-center p-5 sm:p-8 rounded-[1.25rem] sm:rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all duration-300">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-2xl bg-amber-50 flex items-center justify-center mr-4 sm:mr-0 sm:mb-5">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 sm:flex-none">
                <h3 className="text-slate-900 font-bold sm:font-extrabold text-[15px] sm:text-lg mb-0.5 sm:mb-2">3-Min Response</h3>
                <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-medium">Average call response time: under 3 minutes.</p>
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
              Why Trust <span className="text-blue-600">ZamZam</span> Support?
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
              Premium remote assistance from certified US-based experts. Fast, secure, and available when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChooseUs.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group text-center">
                  <div className="w-20 h-20 bg-blue-50/80 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                    <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              Trusted by 10,000+ US Customers
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Real stories from small businesses and home users who got their printers fixed remotely, securely, and in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                location: "Dallas, TX",
                text: "I was literally in tears trying to get my Brother printer to connect. The tech remoted in and fixed it in 12 minutes. I didn't even have to leave my desk. Absolute lifesavers!",
              },
              {
                name: "Michael T.",
                location: "Chicago, IL",
                text: "As a small business owner, I can't wait 3 days for a Geek Squad home visit. ZamZam fixed my HP OfficeJet offline error while I was eating lunch. Outstanding US-based service.",
              },
              {
                name: "Linda R.",
                location: "Miami, FL",
                text: "I was skeptical about remote screen sharing, but the technician was so patient and explained everything he was clicking. My Canon prints perfectly again. Highly recommend!",
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all flex flex-col justify-between duration-300 group shadow-sm">
                <div>
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: (i * 50) + 'ms' }} />
                    ))}
                  </div>
                  <p className="text-slate-600 font-medium leading-loose mb-10 text-[15px] italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-bold text-blue-700 text-lg border border-blue-100 shadow-inner">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 tracking-wide">{review.name}</h4>
                    <p className="text-xs text-slate-500 font-bold tracking-wider uppercase mt-0.5">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="tel:+18887594448"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white font-extrabold rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:shadow-[0_20px_40px_-5px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02] active:scale-95"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg tracking-tight">Get Your Printer Fixed Now</span>
            </Link>
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
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-50 text-sm font-bold mb-8 border border-white/20 shadow-sm">
            <Zap className="w-4 h-4 animate-pulse text-amber-300" />
            <span className="uppercase tracking-widest">Instant Connection Available</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white tracking-tight leading-[1.05]">
            Ready to Fix Your <br />
            <span className="text-blue-200">Printer Today?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Don't let technical glitches halt your productivity. Join thousands of satisfied users who trust ZamZam for fast, reliable remote support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="tel:+18887594448"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-white text-blue-700 font-black rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)] hover:bg-slate-50 transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span className="text-2xl">+1 888 759 4448</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-6 bg-blue-700/50 backdrop-blur-md text-white font-bold rounded-2xl border border-blue-400/50 hover:bg-blue-800/50 transition-all shadow-sm"
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
            <a href="https://www.facebook.com/profile.php?id=61588289645189&sfnsn=wiwspwa&mibextid=RUbZ1f" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="group inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-3 py-2 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white transition-colors"><span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 group-hover:bg-blue-500/20"><Facebook size={15} /></span><span className="hidden sm:inline">Facebook</span></a>
            <a href="https://youtube.com/@zamzam_print" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="group inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-3 py-2 hover:border-red-500 hover:bg-red-500/10 hover:text-white transition-colors"><span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 group-hover:bg-red-500/20"><Youtube size={15} /></span><span className="hidden sm:inline">YouTube</span></a>
            <a href="https://www.instagram.com/zamzamprint_support" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile" className="group inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-3 py-2 hover:border-pink-500 hover:bg-pink-500/10 hover:text-white transition-colors"><span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 group-hover:bg-pink-500/20"><Instagram size={15} /></span><span className="hidden sm:inline">Instagram</span></a>
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
