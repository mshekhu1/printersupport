import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle,
  Clock,
  Monitor,
  Printer,
  Shield,
  CreditCard,
  Users,
  Building2,
  Home,
  Briefcase,
  X,
  AlertCircle,
  ChevronRight,
  Zap,
  Headphones
} from 'lucide-react';
import ScrollRevealClient from '../components/ScrollRevealClient';

export const metadata = {
  title: 'Printer Support Pricing | Affordable Remote Help (US)',
  description: 'Clear pricing for remote printer support: One-time fix $49 • Full setup $79 • Monthly plan $99. No hidden fees. Fast US-based help.',
  keywords: [
    'printer support pricing',
    'remote printer support cost',
    'printer repair price',
    'affordable printer help',
    'printer setup cost',
    'printer offline fix price'
  ],
  openGraph: {
    title: 'Printer Support Pricing – Simple & Transparent',
    description: 'One-time fix $49 • Full setup $79 • Monthly $99/mo. Professional remote printer support for US customers.',
    type: 'website',
    url: 'https://www.zamzamprint.com/pricing',
    images: [
      {
        url: '/og-pricing-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Printer Support Pricing Plans'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Support Pricing – Clear Plans Starting at $49',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/pricing',
  },
};

export default function Pricing() {
  const plans = [
    {
      name: 'One-Time Printer Fix',
      price: '$49',
      badge: 'Quick Fix',
      badgeColor: 'bg-blue-600',
      description: 'Perfect for most common printer problems',
      features: [
        'Printer not printing',
        'Printer shows offline',
        'Driver / software issues',
        'Print queue problems',
        'Basic Wi-Fi connection fixes',
      ],
      details: [
        { icon: Clock, text: 'Up to 30 minutes support' },
        { icon: Monitor, text: 'Secure remote session' },
        { icon: Headphones, text: 'US-based technicians' },
      ],
      cta: 'Fix My Printer Now',
      popular: false,
    },
    {
      name: 'Full Printer Setup & Configuration',
      price: '$79',
      badge: 'Most Popular',
      badgeColor: 'bg-green-600',
      description: 'Ideal for new printers or complete reinstalls',
      features: [
        'New printer installation',
        'Wireless setup & configuration',
        'Windows or macOS setup',
        'Scanner + full print testing',
        'Latest driver installation',
      ],
      details: [
        { icon: Clock, text: 'Up to 60 minutes support' },
        { icon: Printer, text: 'Multiple test prints included' },
      ],
      cta: 'Get Full Setup Help',
      popular: true,
    },
    {
      name: 'Monthly Support Plan',
      price: '$99',
      period: '/mo',
      badge: 'Best Value',
      badgeColor: 'bg-purple-600',
      description: 'Unlimited help for frequent printer users',
      features: [
        'Unlimited support requests',
        'Priority response time',
        'All types of fixes & setups',
        'Perfect for home offices & small businesses',
        'Multiple printers supported',
      ],
      details: [
        { icon: Zap, text: 'Billed monthly' },
        { icon: CheckCircle, text: 'Cancel anytime' },
      ],
      cta: 'Start Monthly Plan',
      popular: false,
    },
  ];

  const included = [
    { icon: Shield, text: 'Fully secure remote screen-sharing' },
    { icon: Users, text: 'Experienced printer technicians' },
    { icon: Monitor, text: 'Step-by-step guidance' },
    { icon: CheckCircle, text: 'Verification after fix' },
    { icon: AlertCircle, text: 'Honest hardware failure advice' },
  ];

  const notCovered = [
    'Physical hardware repairs',
    'Printer part replacements',
    'Ink / toner supply issues',
    'On-site visits',
  ];

  const targetUsers = [
    { icon: Home, text: 'Home users' },
    { icon: Briefcase, text: 'Remote workers & freelancers' },
    { icon: Building2, text: 'Small businesses & offices' },
    { icon: Printer, text: 'Users with multiple printers' },
  ];

  const paymentFeatures = [
    'Secure online payment',
    'No surprise charges',
    'Clear refund policy',
    'Invoice sent by email',
  ];

  const faqs = [
    {
      q: 'How quickly can you fix my printer?',
      a: 'Most issues are resolved in 20–45 minutes during the remote session.'
    },
    {
      q: 'Do you support every printer brand?',
      a: 'We support most popular brands (HP, Canon, Epson, Brother, etc.) but we are an independent service.'
    },
    {
      q: "What happens if it can't be fixed remotely?",
      a: "We'll clearly explain the problem and guide you on the best next steps — usually local repair or replacement."
    },
    {
      q: 'Is this service only available in the United States?',
      a: 'Yes, our pricing and support are designed specifically for customers in the US.'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero - Modernized with next/image */}
      <section className="relative isolate overflow-hidden" data-sr-ignore>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/side-view-employee-using-printer.jpg"
            alt="Professional using modern office printer"
            fill
            priority
            quality={78}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1400px"
            className="object-cover brightness-[0.82] contrast-[1.04]"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/..." // ← Replace with real small base64
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollRevealClient effect="fade-up" delay={60}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-xl leading-tight">
                Transparent Pricing<br />
                <span className="text-blue-300">Real Printer Support</span>
              </h1>
            </ScrollRevealClient>

            <ScrollRevealClient effect="fade-up" delay={160}>
              <p className="mt-6 text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-md">
                No confusing packages • No hidden fees<br className="hidden sm:inline" />
                Professional remote help starting at <span className="font-bold text-white">$49</span>
              </p>
            </ScrollRevealClient>

            <ScrollRevealClient effect="fade-up" delay={240}>
              <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="tel:+18887694448"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-700 font-bold text-lg rounded-xl shadow-2xl hover:bg-gray-50 hover:scale-[1.03] transition-all duration-300"
                  aria-label="Call now to get immediate printer support +1-888-769-4448"
                >
                  Get Help Now →
                </Link>
              </div>
            </ScrollRevealClient>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 sm:py-20 lg:py-24 -mt-10 sm:-mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-7 lg:gap-9">
            {plans.map((plan, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 100} effect="fade-up">
                <div
                  className={`relative bg-white rounded-2xl shadow-xl transition-all duration-400 hover:shadow-2xl hover:-translate-y-3 border-2 ${
                    plan.popular
                      ? 'border-green-500 scale-[1.03] sm:scale-105 shadow-2xl'
                      : 'border-gray-200/70 hover:border-blue-300'
                  }`}
                >
                  {plan.badge && (
                    <div
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg`}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div className="p-7 sm:p-9">
                    <div className="text-center mb-7">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className="text-5xl sm:text-6xl font-extrabold text-blue-600">{plan.price}</span>
                        {plan.period && <span className="text-2xl text-gray-500 font-medium">{plan.period}</span>}
                      </div>
                      <p className="mt-4 text-gray-600 font-medium">{plan.description}</p>
                    </div>

                    <div className="space-y-3 mb-9">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2.5 mb-9 pb-7 border-b border-gray-200 text-sm text-gray-600">
                      {plan.details.map((detail, i) => {
                        const Icon = detail.icon;
                        return (
                          <div key={i} className="flex items-center gap-3">
                            <Icon className="w-4.5 h-4.5 text-blue-600" />
                            <span>{detail.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    <Link
                      href="tel:+18887694448"
                      className={`block w-full py-4 text-center font-bold text-lg rounded-xl transition-all duration-300 shadow-md ${
                        plan.popular
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 hover:shadow-xl hover:scale-[1.02]'
                          : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:scale-[1.01]'
                      }`}
                      aria-label={`Call to purchase ${plan.name}`}
                    >
                      {plan.cta} →
                    </Link>
                  </div>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollRevealClient effect="fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-5">
              What's Included in Every Plan
            </h2>
          </ScrollRevealClient>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {included.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div className="bg-white p-7 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 mb-4" />
                    <p className="text-gray-800 font-medium">{item.text}</p>
                  </div>
                </ScrollRevealClient>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rest of sections follow similar modernization pattern... */}
      {/* Not Covered • Who It's For • Payment • FAQ • Final CTA */}
      

      {/* What's Not Covered */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              What's Not Covered
            </h2>
          </ScrollRevealClient>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {notCovered.map((item, idx) => (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div className="flex items-start gap-3 bg-red-50 p-5 rounded-xl border-2 border-red-200">
                    <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                </ScrollRevealClient>
              ))}
            </div>
            <ScrollRevealClient effect="fade-up" delay={150} once={true}>
              <div className="text-center bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <AlertCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <p className="text-gray-800 font-medium">
                  👉 If hardware failure is detected, we guide you on next steps.
                </p>
              </div>
            </ScrollRevealClient>
          </div>
        </div>
      </section>

      {/* Supported Users */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Who Is This Pricing For?
            </h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Our printer support services are ideal for:
            </p>
          </ScrollRevealClient>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            {targetUsers.map((user, idx) => {
              const IconComponent = user.icon;
              return (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300 text-center">
                    <IconComponent className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-800 font-medium">{user.text}</p>
                  </div>
                </ScrollRevealClient>
              );
            })}
          </div>
          <ScrollRevealClient effect="fade-up" delay={150} once={true}>
            <div className="text-center bg-blue-600 text-white rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-bold">
                🇺🇸 📍 Service available only for US customers
              </p>
            </div>
          </ScrollRevealClient>
        </div>
      </section>

      {/* Payment & Security */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Secure & Easy Payment
            </h2>
          </ScrollRevealClient>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {paymentFeatures.map((feature, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md border-2 border-green-200 text-center">
                  <CreditCard className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <p className="text-gray-800 font-medium">{feature}</p>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollRevealClient>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-blue-400 transition-all">
                  <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-start gap-2">
                    <span className="text-blue-600 flex-shrink-0">❓</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-7">{faq.a}</p>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>
      
      {/* Modern Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.07)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <ScrollRevealClient effect="fade-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Need Your Printer Fixed Today?
            </h2>
          </ScrollRevealClient>

          <ScrollRevealClient effect="fade-up" delay={120}>
            <p className="mt-6 text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Choose your plan and talk to a technician right now — most problems solved in under an hour.
            </p>
          </ScrollRevealClient>

          <ScrollRevealClient effect="fade-up" delay={240}>
            <Link
              href="tel:+18887694448"
              className="mt-12 inline-flex items-center gap-3 px-12 py-6 bg-white text-blue-700 font-bold text-xl rounded-2xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300"
              aria-label="Call now for immediate printer support +1-888-769-4448"
            >
              Call & Get It Fixed
              <Zap className="w-6 h-6" />
            </Link>
          </ScrollRevealClient>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center text-sm">
          <p>Independent remote printer support service • Not affiliated with any printer manufacturer</p>
          <p className="mt-4">© {new Date().getFullYear()} ZamZam Print Support • United States customers only</p>
        </div>
      </footer>
    </div>
  );
}