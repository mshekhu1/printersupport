// app/printer-support/page.js
import Link from 'next/link';
import { 
  CheckCircle, 
  Wrench, 
  Clock, 
  Shield, 
  Monitor,
  Wifi,
  Printer,
  AlertCircle,
  Users,
  Building2,
  Home,
  Briefcase,
  ChevronRight,
  HelpCircle,
  MapPin
} from 'lucide-react';
import { US_STATES } from '@/lib/usStates';
import ScrollRevealClient from '../components/ScrollRevealClient';

export const metadata = {
  title: 'Remote Printer Support for Home & Business | Fast US Help',
  description: 'Need help with a printer issue? Our remote printer support fixes printing, offline, driver, and Wi-Fi problems for US home and business users. Fast & affordable.',
  keywords: [
    'printer support',
    'remote printer support',
    'printer repair',
    'printer troubleshooting',
    'printer not printing',
    'printer offline',
    'printer driver',
    'printer setup',
    'US printer support',
    'printer support service',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Remote Printer Support for Home & Business | Fast US Help',
    description: 'Need help with a printer issue? Our remote printer support fixes printing, offline, driver, and Wi-Fi problems for US home and business users.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/printer-support',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Printer Support for Home & Business',
    description: 'Professional remote printer support fixes printing, offline, driver, and Wi-Fi problems.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/printer-support',
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

export default function PrinterSupport() {
  const printerIssues = [
    { icon: AlertCircle, text: 'Printer not printing documents', color: 'text-red-600' },
    { icon: Wifi, text: 'Printer showing offline status', color: 'text-orange-600' },
    { icon: Monitor, text: 'Printer driver installation or update errors', color: 'text-blue-600' },
    { icon: Wifi, text: 'Wireless printer not connecting to Wi-Fi', color: 'text-purple-600' },
    { icon: Printer, text: 'Printer setup for new computers or networks', color: 'text-green-600' },
    { icon: AlertCircle, text: 'Printer error codes and spooler problems', color: 'text-yellow-600' },
    { icon: Clock, text: 'Slow printing or print queue stuck', color: 'text-indigo-600' },
    { icon: Monitor, text: 'Scanner not working on all-in-one printers', color: 'text-pink-600' },
  ];

  const supportSteps = [
    { num: '1', title: 'Choose a Plan', desc: 'Select a printer support plan that fits your needs' },
    { num: '2', title: 'Start Session', desc: 'Start a secure remote session with our technician' },
    { num: '3', title: 'Diagnose Issue', desc: 'We diagnose the printer issue and identify the cause' },
    { num: '4', title: 'Fix Problem', desc: 'The problem is fixed while you watch in real time' },
    { num: '5', title: 'Test & Verify', desc: 'We test printing before ending the session' },
  ];

  const printerTypes = [
    'Inkjet and laser printers',
    'All-in-one printers (print, scan, copy)',
    'Wireless and USB printers',
  ];

  const brands = ['HP', 'Canon', 'Epson', 'Brother', 'Samsung'];

  const targetUsers = [
    { icon: Home, text: 'Home users who need quick printer fixes' },
    { icon: Briefcase, text: 'Remote workers and home offices' },
    { icon: Building2, text: 'Small businesses without in-house IT staff' },
    { icon: Users, text: 'Offices setting up new printers or computers' },
    { icon: Wrench, text: 'Users who want fast help without hardware replacement' },
  ];

  const whyChoose = [
    'Experienced printer support technicians',
    'Secure and private remote sessions',
    'No long wait times or onsite visits',
    'Clear communication and upfront pricing',
    'Support for Windows and macOS',
    'Focused on real solutions, not upselling',
  ];

  const pricing = [
    { price: '$49', desc: 'One-time printer troubleshooting session', popular: false },
    { price: '$79', desc: 'Complete printer setup and configuration', popular: true },
    { price: '$99/month', desc: 'Ongoing printer support for home or office', popular: false },
  ];

  const faqs = [
    {
      q: 'Can printer problems really be fixed remotely?',
      a: 'Yes. Most printer issues are caused by software, drivers, or network settings and can be resolved remotely.',
    },
    {
      q: 'Do I need to install any software?',
      a: 'You may be asked to run a secure remote support tool for the session. Nothing stays installed after the session ends.',
    },
    {
      q: 'How long does a printer fix usually take?',
      a: 'Most issues are resolved within 30 minutes.',
    },
    {
      q: 'Is my data safe during remote support?',
      a: 'Yes. Sessions are encrypted and you remain in control throughout the process.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white" data-sr-ignore>
        {/* Background image (public/side-view-emp) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/side-view-women-holding-paper.jpg')" }}
          />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="max-w-4xl">
            <ScrollRevealClient delay={50} once={true} effect="fade-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Remote Printer Support for Home & Business Users
              </h1>
            </ScrollRevealClient>
            <ScrollRevealClient delay={150} once={true} effect="fade-up">
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                If your printer is not printing, showing offline, or refusing to connect, our remote printer support service helps you get it fixed quickly without any in-person visit. We provide reliable printer troubleshooting for home offices and small businesses across the United States.
              </p>
            </ScrollRevealClient>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollRevealClient delay={250} once={true} effect="fade-up">
                <a 
                  href="tel:+18887694448"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Fix My Printer Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </ScrollRevealClient>
              <ScrollRevealClient delay={300} once={true} effect="fade-up">
                <Link 
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-blue-400 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </ScrollRevealClient>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Remote Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollRevealClient effect="fade-up" once={true}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Is Remote Printer Support?
              </h2>
            </ScrollRevealClient>
            <ScrollRevealClient effect="fade-up" delay={100} once={true}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Remote printer support allows a certified technician to securely connect to your computer and diagnose printer problems in real time. Instead of waiting for a local technician or replacing your printer, most issues can be fixed remotely within minutes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our printer support service covers software, driver, connectivity, and setup problems for both Windows and macOS systems.
                </p>
              </div>
            </ScrollRevealClient>
          </div>
        </div>
      </section>

      {/* Issues We Fix */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Printer Problems We Fix Every Day
            </h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Our remote printer support service helps resolve common and advanced printer issues
            </p>
          </ScrollRevealClient>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {printerIssues.map((issue, idx) => {
              const IconComponent = issue.icon;
              return (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div 
                    className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 cursor-pointer transform hover:-translate-y-1"
                  >
                    <IconComponent className={`w-8 h-8 ${issue.color} mb-4 group-hover:scale-110 transition-transform`} />
                    <p className="text-gray-800 font-medium leading-relaxed">{issue.text}</p>
                  </div>
                </ScrollRevealClient>
              );
            })}
          </div>
          <p className="text-center text-gray-600 bg-white/60 backdrop-blur-sm p-4 rounded-lg inline-block mx-auto">
            👉 Each issue is handled step-by-step during a live remote session.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              How Our Remote Printer Support Works
            </h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <div className="flex items-center justify-center gap-2 mb-12">
              <Clock className="w-5 h-5 text-blue-600" />
              <p className="text-lg text-gray-600">Most printer issues are resolved in 20 to 40 minutes</p>
            </div>
          </ScrollRevealClient>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" style={{ width: '80%', margin: '0 auto' }}></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {supportSteps.map((step, idx) => (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div className="relative">
                    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-400 h-full transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto shadow-lg">
                        {step.num}
                      </div>
                      <h3 className="font-bold text-gray-900 text-center mb-2 text-lg">{step.title}</h3>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollRevealClient>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Printers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Printers We Commonly Support
            </h2>
          </ScrollRevealClient>
          <div className="max-w-4xl mx-auto">
            <ScrollRevealClient effect="fade-up" delay={100} once={true}>
              <p className="text-lg text-gray-700 text-center mb-8">
                We work with a wide range of printers used in homes and offices, including:
              </p>
            </ScrollRevealClient>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {printerTypes.map((type, idx) => (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-gray-200 hover:border-blue-400 transition-all">
                    <Printer className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <p className="font-medium text-gray-800">{type}</p>
                  </div>
                </ScrollRevealClient>
              ))}
            </div>
            <ScrollRevealClient effect="fade-up" delay={150} once={true}>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-6">
                <p className="text-gray-700 mb-4 text-center font-medium">Common brands we support include:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {brands.map((brand, idx) => (
                    <span key={idx} className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg font-semibold text-gray-800 border border-blue-200">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollRevealClient>
            <ScrollRevealClient effect="fade-up" delay={200} once={true}>
              <p className="text-sm text-gray-500 text-center bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                ⚠️ We are an independent printer support service and are not affiliated with or endorsed by any printer manufacturer.
              </p>
            </ScrollRevealClient>
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Who Should Use Our Printer Support Service?
            </h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-center text-gray-600 mb-12 text-lg">Our remote printer support is ideal for:</p>
          </ScrollRevealClient>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {targetUsers.map((user, idx) => {
              const IconComponent = user.icon;
              return (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300">
                    <IconComponent className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{user.text}</p>
                  </div>
                </ScrollRevealClient>
              );
            })}
          </div>
          <ScrollRevealClient effect="fade-up" delay={150} once={true}>
            <div className="text-center bg-blue-50 border-2 border-blue-300 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-800 font-medium text-lg">
                🇺🇸 We currently provide service for customers located in the United States.
              </p>
            </div>
          </ScrollRevealClient>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-center mb-4">
              Affordable Printer Support Pricing
            </h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-center text-blue-100 mb-12 text-lg">
              We offer simple, transparent pricing with no hidden charges
            </p>
          </ScrollRevealClient>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {pricing.map((plan, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                <div 
                  className={`bg-white text-gray-900 p-8 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                    plan.popular ? 'ring-4 ring-yellow-400 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-4">{plan.price}</div>
                    <p className="text-gray-600 leading-relaxed">{plan.desc}</p>
                  </div>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
          <ScrollRevealClient effect="fade-up" delay={150} once={true}>
            <div className="text-center">
              <Link 
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xl"
              >
                👉 View Full Pricing
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollRevealClient>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Choose Our Remote Printer Support?
            </h2>
          </ScrollRevealClient>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {whyChoose.map((reason, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                <div className="flex items-start gap-3 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium">{reason}</p>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
          <ScrollRevealClient effect="fade-up" delay={150} once={true}>
            <p className="text-center text-gray-700 text-lg font-medium bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
              Your printer issue is handled professionally from start to finish.
            </p>
          </ScrollRevealClient>
        </div>
      </section>

      {/* State-Specific Support Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollRevealClient effect="fade-up" once={true}>
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            </ScrollRevealClient>
            <ScrollRevealClient effect="fade-up" delay={100} once={true}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Printer Support by State
              </h2>
            </ScrollRevealClient>
            <ScrollRevealClient effect="fade-up" delay={150} once={true}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide remote printer support services across all 50 US states. Select your state for localized information and support.
              </p>
            </ScrollRevealClient>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-4 sm:p-6">
              <div className="max-h-[420px] overflow-y-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                  {US_STATES.map((state) => (
                    <ScrollRevealClient key={state.code} effect="fade-up">
                      <Link
                        href={`/printer-support/${state.code}`}
                        className="flex items-center justify-center px-2 py-2 sm:py-2.5 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md transition-all text-center"
                      >
                        <span className="text-xs sm:text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                          {state.name}
                        </span>
                      </Link>
                    </ScrollRevealClient>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollRevealClient>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-blue-300 transition-all">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-3">{faq.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Printer Working Again Today
            </h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Stop wasting time with trial-and-error fixes. Let a professional technician resolve your printer issue quickly and safely.
            </p>
          </ScrollRevealClient>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollRevealClient effect="fade-up" delay={200} once={true}>
              <a 
                href="tel:+18887694448"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:scale-105"
              >
                Fix My Printer Now
                <ChevronRight className="ml-2 w-6 h-6" />
              </a>
            </ScrollRevealClient>
            <ScrollRevealClient effect="fade-up" delay={250} once={true}>
              <a 
                href="tel:+18887694448"
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-500 text-white font-bold text-lg rounded-lg border-2 border-white/30 hover:bg-blue-400 transition-all duration-200"
              >
                Contact Support
              </a>
            </ScrollRevealClient>
          </div>
        </div>
      </section>
    </div>
  );
}