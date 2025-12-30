import Link from 'next/link';
import FAQAccordionClient from '../components/FAQAccordionClient';
import ScrollRevealClient from '../components/ScrollRevealClient';
import { AlertTriangle, CheckCircle, Shield, Clock, Monitor, Wrench, Printer, XCircle, RefreshCw, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Fix Printer Error Codes Remotely | US Printer Support',
  description: 'Printer showing error codes or warning messages? We diagnose and fix printer error codes remotely. US-based printer support for all major brands.',
  keywords: ['printer error code', 'fix printer error', 'printer error codes remote support', 'printer warning messages', 'printer error diagnosis', 'printer error fix', 'printer error codes', 'HP printer error', 'Canon printer error', 'Epson printer error'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Fix Printer Error Codes Remotely | US Printer Support',
    description: 'Printer showing error codes or warning messages? We diagnose and fix printer error codes remotely. US-based printer support.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/printer-error-code-fix',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fix Printer Error Codes Remotely',
    description: 'We diagnose and fix printer error codes remotely. US-based printer support.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/printer-error-code-fix',
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

export const dynamic = 'force-static';

export default function PrinterErrorCodeFix() {
  const commonErrorCodes = [
    { 
      code: 'Paper Jam Errors', 
      description: 'False paper jam alerts, E3/E4 errors, paper stuck messages',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    { 
      code: 'Ink/Toner Errors', 
      description: 'Low ink warnings, cartridge not detected, CISS errors',
      icon: Printer,
      color: 'text-orange-600'
    },
    { 
      code: 'Communication Errors', 
      description: 'Printer not responding, connection timeouts, device errors',
      icon: Monitor,
      color: 'text-blue-600'
    },
    { 
      code: 'Driver/Software Errors', 
      description: 'Driver conflicts, spooler errors, installation failures',
      icon: Wrench,
      color: 'text-purple-600'
    },
    { 
      code: 'Hardware Errors', 
      description: 'Printhead errors, scanner errors, overheating warnings',
      icon: XCircle,
      color: 'text-yellow-600'
    },
    { 
      code: 'System Errors', 
      description: 'Windows print errors, service errors, registry issues',
      icon: AlertCircle,
      color: 'text-indigo-600'
    },
  ];

  const causes = [
    { 
      title: 'Corrupted or outdated printer drivers', 
      description: 'Drivers that are incompatible with your Windows version or corrupted during installation',
      icon: Monitor
    },
    { 
      title: 'Software conflicts and system updates', 
      description: 'Windows updates breaking printer drivers or antivirus software interfering',
      icon: RefreshCw
    },
    { 
      title: 'Firmware issues and sensor problems', 
      description: 'Outdated printer firmware or malfunctioning sensors giving false error readings',
      icon: AlertCircle
    },
    { 
      title: 'Network and connectivity problems', 
      description: 'Wi-Fi disconnections, IP conflicts, or port configuration issues',
      icon: Monitor
    },
    { 
      title: 'Incomplete installations or partial setups', 
      description: 'Interrupted installation processes leaving printer in an error state',
      icon: XCircle
    },
  ];

  const diagnosticSteps = [
    { 
      step: 1, 
      title: 'Identify the Error Code',
      description: 'We analyze the specific error code or message displayed on your printer or computer screen'
    },
    { 
      step: 2, 
      title: 'Check System & Driver Status',
      description: 'Examine printer drivers, Windows services, and system logs to find the root cause'
    },
    { 
      step: 3, 
      title: 'Test Printer Communication',
      description: 'Verify printer connectivity and communication between your computer and printer'
    },
    { 
      step: 4, 
      title: 'Apply Targeted Fix',
      description: 'Implement the appropriate solution - driver update, service restart, or configuration fix'
    },
    { 
      step: 5, 
      title: 'Verify & Test',
      description: 'Test printing functionality to ensure the error code is resolved and printer works correctly'
    },
  ];

  const services = [
    { 
      text: 'Error code diagnosis and interpretation', 
      description: 'We identify what each error code means and why it appeared',
      icon: AlertTriangle
    },
    { 
      text: 'Driver repair and software reset', 
      description: 'Fix corrupted drivers, reinstall software, and restore printer functionality',
      icon: RefreshCw
    },
    { 
      text: 'System service and spooler repair', 
      description: 'Restart and repair Windows print spooler and related services',
      icon: Wrench
    },
    { 
      text: 'Firmware updates when needed', 
      description: 'Update printer firmware to resolve compatibility and error code issues',
      icon: Monitor
    },
  ];

  const brandErrors = [
    { brand: 'HP Printers', errors: ['E3, E4, E5 (paper jam)', '50.4Fuser error', 'E8, E9 (cartridge)', '49/79 service errors'] },
    { brand: 'Canon Printers', errors: ['E05, E07 (paper jam)', 'B200 (printhead)', 'P02, P03 (paper)', '5B00 (waste ink)'] },
    { brand: 'Epson Printers', errors: ['0x97 (firmware)', 'E-01 (paper jam)', '000031 (waste ink)', 'Service required errors'] },
    { brand: 'Brother Printers', errors: ['Paper jam 03', 'Toner error', 'Drum unit error', 'Print head error'] },
  ];

  const faqs = [
    {
      q: 'Can you fix printer error codes remotely?',
      aShort: 'Yes, most error codes are software or driver related and can be fixed remotely.',
      a: 'Yes, most printer error codes are caused by software, driver, or configuration issues that can be fixed remotely. Our technicians diagnose the error code, identify the root cause, and apply the appropriate fix during a secure remote session. Hardware-related errors may require additional guidance or repair services.'
    },
    {
      q: 'How do you diagnose printer error codes?',
      aShort: 'We analyze error messages, check system logs, and test printer communication.',
      a: 'We diagnose error codes by examining the error message displayed on your printer or computer, checking Windows event logs and print spooler status, testing printer communication, and reviewing driver and service status. This comprehensive approach helps us identify whether the error is driver-related, software-related, or a hardware issue.'
    },
    {
      q: 'Do you support all printer brands for error code fixes?',
      aShort: 'Yes, we work with HP, Canon, Epson, Brother, Samsung, and other major brands.',
      a: 'Yes, we support error code fixes for all major printer brands including HP, Canon, Epson, Brother, Samsung, Lexmark, and more. Each brand has specific error codes, and our technicians are familiar with common error codes across different manufacturers and can provide appropriate solutions.'
    },
    {
      q: 'What if the error code indicates a hardware problem?',
      aShort: 'We diagnose remotely and provide clear guidance on next steps if hardware repair is needed.',
      a: 'If our remote diagnosis indicates a hardware problem (like a broken printhead or mechanical issue), we will clearly explain what needs to be repaired. We can guide you through troubleshooting steps that might resolve the issue, or advise on whether professional hardware repair or replacement is necessary. Many error codes that appear hardware-related are actually fixable through software solutions.'
    },
    {
      q: 'How long does it take to fix a printer error code?',
      aShort: 'Most error code fixes are completed within 30-45 minutes during a remote session.',
      a: 'Most printer error code fixes are completed within 30-45 minutes during a remote session. Simple driver or service-related errors may be resolved in 15-20 minutes, while more complex issues requiring driver reinstalls or system repairs may take up to an hour. We work efficiently to diagnose and fix the issue quickly so you can resume printing.'
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20 px-4" data-sr-ignore>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollRevealClient delay={50} once={true} effect="fade-up">
              <AlertTriangle className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 text-white" />
            </ScrollRevealClient>
            <ScrollRevealClient delay={150} once={true} effect="fade-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Printer Error Codes? Get Professional Help
              </h1>
            </ScrollRevealClient>
            <ScrollRevealClient delay={250} once={true} effect="fade-up">
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Printer error codes indicate system, driver, or hardware communication problems. Ignoring them can completely stop printing. Our US-based technicians diagnose and repair error codes remotely—fast and affordably.
              </p>
            </ScrollRevealClient>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollRevealClient delay={350} once={true} effect="fade-up">
                <a 
                  href="tel:+18887694448"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-indigo-600 font-bold text-base sm:text-lg rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:scale-105"
                >
                  Fix Error Code Now
                </a>
              </ScrollRevealClient>
              <ScrollRevealClient delay={400} once={true} effect="fade-up">
                <Link 
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-indigo-500 text-white font-bold text-base sm:text-lg rounded-lg border-2 border-white/30 hover:bg-indigo-400 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </ScrollRevealClient>
            </div>
          </div>
        </div>
      </header>

      {/* Common Error Codes Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Common Printer Error Codes We Fix</h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg">Our technicians resolve these error codes daily for customers across the US</p>
          </ScrollRevealClient>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {commonErrorCodes.map((error, idx) => {
              const IconComponent = error.icon;
              return (
                <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-indigo-300 transform hover:-translate-y-1">
                    <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 ${error.color} mb-4`} />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{error.code}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{error.description}</p>
                  </div>
                </ScrollRevealClient>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand-Specific Error Codes */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Common Error Codes by Printer Brand</h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg">We're experienced with error codes across all major printer manufacturers</p>
          </ScrollRevealClient>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {brandErrors.map((brandError, idx) => (
              <ScrollRevealClient key={idx} delay={idx * 80} effect="fade-up">
                <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-all">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{brandError.brand}</h3>
                  <ul className="space-y-2">
                    {brandError.errors.map((error, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollRevealClient>
            ))}
          </div>
        </div>
      </section>

      {/* Why Error Codes Appear Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Why Printer Error Codes Appear</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Understanding the root causes helps us fix error codes effectively</p>
          <div className="space-y-6">
            {causes.map((cause, idx) => {
              const IconComponent = cause.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <IconComponent className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                        <h3 className="text-xl font-bold text-gray-900">{cause.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{cause.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diagnostic Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Error Code Diagnostic Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {diagnosticSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Error Code Fix Services We Provide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all">
                  <IconComponent className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.text}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealClient effect="fade-up" once={true}>
            <Shield className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6" />
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={100} once={true}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Remote Error Code Diagnosis & Fix
            </h2>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={200} once={true}>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed">
              Our certified technicians identify error codes, diagnose the root cause, and apply the correct fix—all remotely. Most error codes are resolved during the first session.
            </p>
          </ScrollRevealClient>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 sm:mb-10">
            {[
              { icon: Clock, title: 'Quick Diagnosis', desc: 'Error codes identified in minutes', color: 'text-blue-200' },
              { icon: CheckCircle, title: 'Expert Solutions', desc: 'Targeted fixes for each error type', color: 'text-green-300' },
              { icon: Shield, title: 'Secure & Safe', desc: 'Encrypted remote sessions', color: 'text-blue-200' }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <ScrollRevealClient key={idx} delay={300 + idx * 100} effect="fade-up">
                  <div className="bg-white/20 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-white/30">
                    <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 ${item.color}`} />
                    <p className="font-semibold text-base sm:text-lg">{item.title}</p>
                    <p className="text-blue-100 text-xs sm:text-sm mt-2">{item.desc}</p>
                  </div>
                </ScrollRevealClient>
              );
            })}
          </div>
          <ScrollRevealClient effect="fade-up" delay={400} once={true}>
            <a
              href="tel:+18887694448"
              className="inline-block bg-white text-indigo-600 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Fix Printer Error Code Now
            </a>
          </ScrollRevealClient>
          <ScrollRevealClient effect="fade-up" delay={450} once={true}>
            <p className="mt-4 text-blue-100 text-xs sm:text-sm">Same-day service available • US-based support • All major brands</p>
          </ScrollRevealClient>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealClient effect="fade-up" once={true}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
          </ScrollRevealClient>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Related Printer Support Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/printer-not-printing" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-indigo-400 transform hover:-translate-y-1">
              <Printer className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Printer Not Printing</h4>
              <p className="text-gray-600 text-sm">Fix printers that won't print documents</p>
            </Link>
            <Link href="/install-printer-driver" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-indigo-400 transform hover:-translate-y-1">
              <Monitor className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Driver Installation</h4>
              <p className="text-gray-600 text-sm">Install and fix printer drivers</p>
            </Link>
            <Link href="/printer-offline-fix" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-indigo-400 transform hover:-translate-y-1">
              <AlertCircle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Printer Offline Fix</h4>
              <p className="text-gray-600 text-sm">Fix printers showing offline status</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Don't Let Error Codes Stop Your Printing</h3>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get professional help to diagnose and fix your printer error codes. Our experts resolve most error codes within 30-45 minutes during a secure remote session.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Error Code Help Now
          </a>
        </div>
      </section>
    </div>
  );
}
