// app/pricing/page.js
import Link from 'next/link';
import { 
  CheckCircle, 
  Clock, 
  Monitor,
  Wifi,
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
  Star,
  Headphones
} from 'lucide-react';
import ScrollRevealClient from '../components/ScrollRevealClient';

export const metadata = {
  title: 'Printer Support Pricing | Affordable Remote Printer Help (US)',
  description: 'Transparent printer support pricing for US users. Fix printer offline, not printing, or setup issues remotely. No hidden charges. Instant help available.',
  keywords: ['printer support pricing', 'printer repair cost', 'printer support price', 'affordable printer support', 'printer support rates', 'remote printer support cost'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Printer Support Pricing | Affordable Remote Printer Help (US)',
    description: 'Transparent printer support pricing for US users. Fix printer offline, not printing, or setup issues remotely.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/pricing',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Support Pricing | Affordable Remote Printer Help',
    description: 'Transparent printer support pricing for US users. No hidden charges.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/pricing',
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

export default function Pricing() {
  const plans = [
    {
      name: 'One-Time Printer Fix',
      price: '$49',
      badge: 'Quick Fix',
      badgeColor: 'bg-blue-500',
      description: 'Best for quick printer problems',
      features: [
        'Printer not printing',
        'Printer offline error',
        'Driver or software issues',
        'Print queue errors',
        'Minor Wi-Fi connection issues',
      ],
      details: [
        { icon: Clock, text: 'Support Time: Up to 30 minutes' },
        { icon: Monitor, text: 'Remote session included' },
        { icon: Headphones, text: 'US-based support hours' },
      ],
      cta: 'Fix My Printer Now',
      popular: false,
    },
    {
      name: 'Full Printer Setup & Configuration',
      price: '$79',
      badge: 'Most Popular',
      badgeColor: 'bg-green-500',
      description: 'Best for new or reinstalled printers',
      features: [
        'New printer setup',
        'Wireless printer configuration',
        'Printer setup on Windows or macOS',
        'Scanner & print test included',
        'Driver installation & updates',
      ],
      details: [
        { icon: Clock, text: 'Support Time: Up to 60 minutes' },
        { icon: Printer, text: 'Multiple test prints included' },
      ],
      cta: 'Get Full Setup Help',
      popular: true,
    },
    {
      name: 'Monthly Printer Support Plan',
      price: '$99',
      period: '/month',
      badge: 'Best Value',
      badgeColor: 'bg-purple-500',
      description: 'Best for offices & frequent users',
      features: [
        'Unlimited printer support requests',
        'Priority response',
        'Setup, fixes & troubleshooting',
        'Ideal for home offices & small businesses',
        'Covers multiple printer issues',
      ],
      details: [
        { icon: Zap, text: 'Billed monthly' },
        { icon: CheckCircle, text: 'Cancel anytime' },
      ],
      cta: 'Start Monthly Support',
      popular: false,
    },
  ];

  const included = [
    { icon: Shield, text: 'Secure remote screen-sharing session' },
    { icon: Users, text: 'Experienced printer support technicians' },
    { icon: Monitor, text: 'Step-by-step issue explanation' },
    { icon: CheckCircle, text: 'Post-fix testing & confirmation' },
    { icon: AlertCircle, text: 'Honest advice if issue is hardware-related' },
  ];

  const notCovered = [
    'Physical hardware repair',
    'Replacement of printer parts',
    'Ink or toner supply issues',
    'On-site technician visits',
  ];

  const targetUsers = [
    { icon: Home, text: 'Home users in the United States' },
    { icon: Briefcase, text: 'Remote workers & freelancers' },
    { icon: Building2, text: 'Small businesses & startups' },
    { icon: Printer, text: 'Offices with multiple printers' },
  ];

  const paymentFeatures = [
    'Secure online payment',
    'No auto-charges (except monthly plan)',
    'Clear refund terms',
    'Email invoice provided',
  ];

  const faqs = [
    {
      q: 'How fast can my printer issue be fixed?',
      a: 'Most printer problems are resolved within 20–40 minutes.',
    },
    {
      q: 'Do you support all printer brands?',
      a: 'We support most popular printers but are not affiliated with any brand.',
    },
    {
      q: "What if my printer can't be fixed remotely?",
      a: "We'll explain the issue honestly and suggest the best next step.",
    },
    {
      q: 'Is this service only for US users?',
      a: 'Yes. Our pricing and support are designed specifically for US customers.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white" data-sr-ignore>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/side-view-employee-using-printer.jpg')" }}
          />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollRevealClient effect="fade-up" delay={50} once={true}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Simple & Transparent<br />
                Printer Support Pricing
              </h1>
            </ScrollRevealClient>
            <ScrollRevealClient effect="fade-up" delay={150} once={true}>
              <p className="text-2xl text-blue-600 mb-4 leading-relaxed">
                No confusing plans. No long contracts. Choose a printer support option that fits your problem and get instant remote help anywhere in the United States.
              </p>
            </ScrollRevealClient>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealClient effect="fade-up" once={true}>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Whether your printer is not printing, showing offline, or needs a full setup, our remote printer support plans are designed for home users, small businesses, and offices in the US.
            </p>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-lg font-semibold text-gray-900">
              You pay only for the service you need — clear pricing, no hidden fees.
            </p>
          </ScrollRevealClient>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                <div 
                  className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    plan.popular ? 'ring-4 ring-green-400 scale-105' : 'border-2 border-gray-200'
                  }`}
                >
                  {/* Badge */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {plan.badge}
                  </div>

                  <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-6 mt-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="flex items-end justify-center mb-2">
                        <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                        {plan.period && <span className="text-2xl text-gray-600 mb-2">{plan.period}</span>}
                      </div>
                      <p className="text-gray-600 font-medium">{plan.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                      {plan.details.map((detail, dIdx) => {
                        const IconComponent = detail.icon;
                        return (
                          <div key={dIdx} className="flex items-center gap-2 text-sm text-gray-600">
                            <IconComponent className="w-4 h-4 text-blue-600" />
                            <span>{detail.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA */}
                    <a 
                      href="tel:+18887694448"
                      className={`block w-full py-4 px-6 text-center font-bold rounded-xl transition-all duration-200 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-xl' 
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {plan.cta}
                      <ChevronRight className="inline-block ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              What's Included With Every Support Plan
            </h2>
          </ScrollRevealClient>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {included.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <IconComponent className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-800 font-medium">{item.text}</p>
                  </div>
                </ScrollRevealClient>
              );
            })}
          </div>
          <ScrollRevealClient effect="fade-up" delay={150} once={true}>
            <div className="text-center bg-white border-2 border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-700 font-medium">
                📌 We do not sell printers or parts — support only.
              </p>
            </div>
          </ScrollRevealClient>
        </div>
      </section>

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

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Immediate Printer Help?
            </h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Stop wasting time searching random fixes. Choose a plan and get professional remote printer support now.
            </p>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={200} once={true}>
            <a 
              href="tel:+18887694448"
              className="inline-flex items-center px-12 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:scale-105"
            >
              👉 Fix My Printer Now
              <ChevronRight className="ml-2 w-6 h-6" />
            </a>
          </ScrollRevealClient>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            Independent remote printer support service. Not affiliated with HP, Canon, Epson, Brother, or any printer brand.
          </p>
        </div>
      </footer>
    </div>
  );
}