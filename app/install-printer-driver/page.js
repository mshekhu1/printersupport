// app/install-printer-driver/page.js
import Link from 'next/link';
import FAQAccordionClient from '../components/FAQAccordionClient';
import ScrollRevealClient from '../components/ScrollRevealClient';
import { Monitor, Printer, AlertCircle } from 'lucide-react';

// SEO Metadata for the page
export const metadata = {
  title: 'Install Printer Driver on Windows or Mac | Remote US Support',
  description: 'Need help installing or updating printer drivers? We remotely install printer drivers on Windows & Mac. Fast US printer support.',
  keywords: ['install printer driver', 'printer driver installation', 'update printer driver', 'Windows printer driver', 'Mac printer driver', 'driver installation service', 'remote driver install', 'printer driver setup'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Install Printer Driver on Windows or Mac | Remote US Support',
    description: 'Need help installing or updating printer drivers? We remotely install printer drivers on Windows & Mac.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/install-printer-driver',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Install Printer Driver on Windows or Mac',
    description: 'We remotely install printer drivers on Windows & Mac. Fast US printer support.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/install-printer-driver',
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

// Force static generation (SSG)
export const dynamic = 'force-static';

export default function InstallPrinterDriverPage() {
  const driverProblems = [
    { 
      problem: 'Printer not detected by Windows', 
      description: 'Windows cannot find your printer even when connected via USB or network',
      icon: 'detect'
    },
    { 
      problem: 'Driver installation failed or incomplete', 
      description: 'Installation process fails, stops midway, or shows error messages',
      icon: 'fail'
    },
    { 
      problem: 'Printer works on one PC but not another', 
      description: 'Same printer works on another computer, indicating driver or system issue',
      icon: 'compat'
    },
    { 
      problem: 'Error after Windows update', 
      description: 'Printer stopped working after a Windows update broke the driver',
      icon: 'update'
    },
    { 
      problem: 'Incompatible driver version', 
      description: 'Driver installed but incompatible with your Windows version',
      icon: 'version'
    },
    { 
      problem: 'Corrupted driver files', 
      description: 'Driver files are damaged or corrupted, causing printing errors',
      icon: 'corrupt'
    },
  ];

  const failureReasons = [
    { 
      title: 'Incompatible driver version', 
      description: 'Driver designed for different Windows version or printer model',
      icon: 'version'
    },
    { 
      title: 'Outdated or missing printer software', 
      description: 'Old drivers no longer compatible with current Windows updates',
      icon: 'old'
    },
    { 
      title: 'Corrupted system files or drivers', 
      description: 'System files or driver components damaged by malware or crashes',
      icon: 'corrupt'
    },
    { 
      title: 'Incomplete previous installations', 
      description: 'Previous installation left partial files causing conflicts',
      icon: 'incomplete'
    },
    { 
      title: 'Conflicting printer drivers', 
      description: 'Multiple driver versions installed, causing system conflicts',
      icon: 'conflict'
    },
  ];

  const installationSteps = [
    { 
      step: 1, 
      title: 'Identify correct driver version',
      description: 'We detect your printer model and OS to find the exact driver needed'
    },
    { 
      step: 2, 
      title: 'Remove conflicting drivers',
      description: 'Clean up old or corrupted drivers that may cause issues'
    },
    { 
      step: 3, 
      title: 'Install & configure printer software',
      description: 'Download and install the latest compatible driver with proper settings'
    },
    { 
      step: 4, 
      title: 'Test printing functionality',
      description: 'Verify that your printer is working correctly with a test print'
    }
  ];

  const supportFeatures = [
    { text: 'Windows 10 & 11 support', icon: 'os', description: 'Full compatibility with latest Windows versions' },
    { text: 'macOS support', icon: 'mac', description: 'Driver installation for Mac computers' },
    { text: 'Wireless & USB printers', icon: 'connection', description: 'All connection types supported' },
    { text: 'All major printer brands', icon: 'brands', description: 'HP, Canon, Epson, Brother, Samsung, and more' },
  ];

  const faqs = [
    {
      q: 'How long does a driver installation take?',
      aShort: 'Most driver installs complete in under 30 minutes.',
      a: 'Most driver installations and configuration tasks are completed within 15–30 minutes. If there are multiple devices or deeper system issues, we will provide an upfront estimate before continuing.'
    },
    {
      q: 'Do you use official manufacturer drivers?',
      aShort: 'Yes — we use official and signed drivers where possible.',
      a: 'We always prioritize official drivers from the manufacturer or Microsoft/macOS repositories. If the manufacturer no longer provides a driver, we use the safest compatible alternative and document the change.'
    },
    {
      q: 'Will you need administrator access?',
      aShort: 'Temporary admin access is often required.',
      a: 'To install or remove drivers we usually need temporary administrative privileges. We guide you through granting temporary elevated access and nothing remains installed after the session unless you ask.'
    },
    {
      q: 'Do you support older or uncommon printers?',
      aShort: 'Yes, we support many older models.',
      a: 'We work with a wide range of older and uncommon printers. If a device is extremely old, we will explain the limitations and offer the best possible workaround or alternative.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 sm:py-20 px-4" data-sr-ignore>
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <ScrollRevealClient delay={50} once={true} effect="fade-up">
              <svg className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </ScrollRevealClient>
            <ScrollRevealClient delay={150} once={true} effect="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Printer Driver Installation & Update Service
              </h1>
            </ScrollRevealClient>
            <ScrollRevealClient delay={250} once={true} effect="fade-up">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Printer drivers allow your computer and printer to communicate properly. Incorrect or missing drivers often cause printing errors, offline issues, or setup failures.
              </p>
            </ScrollRevealClient>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Common Driver Problems Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-teal-600">
          <div className="flex items-center mb-6">
            <div className="bg-teal-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common Printer Driver Problems</h2>
              <p className="text-gray-600 mt-2">These driver issues prevent printers from working correctly</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {driverProblems.map((problem, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border-l-4 border-teal-400 hover:shadow-lg transition-all hover:border-teal-600">
                <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 font-bold mb-2">{problem.problem}</h3>
                  <p className="text-gray-700">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Why Driver Installation Fails Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-orange-600">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Driver Installation Fails</h2>
          </div>
          
          <div className="space-y-4">
            {failureReasons.map((reason, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Our Driver Installation Process Section */}
        <article className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-600">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-4 rounded-xl mr-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Driver Installation Process</h2>
          </div>
          
          <div className="space-y-6">
            {installationSteps.map((item) => (
              <div key={item.step} className="flex items-start bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-all border-2 border-blue-200">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Support Features */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {supportFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-300 hover:border-green-500 hover:shadow-lg transition-all">
                <svg className="w-10 h-10 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-lg text-gray-900 font-bold block mb-1">{feature.text}</span>
                  <span className="text-gray-600 text-sm">{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Main CTA Section */}
        <article className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl p-10 mb-8 text-white">
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Driver Installation Service
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8">
              Let our experts handle your printer driver installation remotely. We ensure compatibility and proper configuration for seamless printing.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3 backdrop-blur-sm border border-white border-opacity-30">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-semibold text-black ">Fast Installation</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3 backdrop-blur-sm border border-white border-opacity-30">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold text-black ">Latest Drivers</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3 backdrop-blur-sm border border-white border-opacity-30">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold text-black ">Tested & Verified</span>
              </div>
            </div>

            <a
              href="tel:+18887694448"
              className="inline-block bg-white text-green-700 px-12 py-5 rounded-xl font-bold text-xl hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              👉 Install Printer Driver Now
            </a>
            <p className="mt-4 text-green-100 text-sm">Remote service • No software installation on your end • US-based support</p>
          </div>
        </article>

        {/* Why Choose Our Service Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-teal-500">
            <svg className="w-12 h-12 text-teal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Certified Technicians</h3>
            <p className="text-gray-600">Experienced professionals who understand driver compatibility</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">All Major Brands</h3>
            <p className="text-gray-600">Support for HP, Canon, Epson, Brother, and more</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Quick Turnaround</h3>
            <p className="text-gray-600">Most driver installations completed in 20-30 minutes</p>
          </div>
        </div>

        {/* Platform Support Banner */}
        <div className="bg-gradient-to-r from-slate-700 to-gray-700 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Cross-Platform Expertise</h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Whether you're on Windows 10, Windows 11, macOS, or older systems, we have the expertise to install the right driver for your setup.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-black font-semibold">Windows 10/11</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-black font-semibold">macOS</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-black font-semibold">Older Systems</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Driver Issues Section */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border-2 border-amber-200">
          <div className="flex items-start">
            <svg className="w-12 h-12 text-amber-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Common After-Update Issues</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Windows updates often break printer drivers. If your printer stopped working after a Windows update, we can reinstall the correct driver and restore functionality quickly.
              </p>
              <p className="text-amber-900 font-semibold">
                ✓ Post-update driver fixes • ✓ Compatibility restoration • ✓ System optimization
              </p>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl shadow-lg p-8 text-center border-2 border-teal-200">
          <svg className="w-16 h-16 mx-auto mb-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Struggling with Driver Installation?</h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Don't waste hours troubleshooting. Let our experts install the correct driver for you remotely.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block bg-teal-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-xl"
          >
            Get Expert Help Now
          </a>
        </div>

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
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Related Printer Driver Support</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/printer-setup-windows" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-teal-400 transform hover:-translate-y-1">
                <Monitor className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Windows Printer Setup</h4>
                <p className="text-gray-600 text-sm">Complete printer setup for Windows</p>
              </Link>
              <Link href="/printer-not-printing" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-teal-400 transform hover:-translate-y-1">
                <Printer className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Printer Not Printing</h4>
                <p className="text-gray-600 text-sm">Fix printing problems after driver install</p>
              </Link>
              <Link href="/printer-error-code-fix" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-teal-400 transform hover:-translate-y-1">
                <AlertCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Printer Error Codes</h4>
                <p className="text-gray-600 text-sm">Fix driver-related error codes</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-50 to-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Install Your Printer Driver?</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get expert help installing the correct printer driver. Our technicians will have your printer working in 20-30 minutes during a secure remote session.
            </p>
            <a
              href="tel:+18887694448"
              className="inline-block bg-teal-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105"
            >
              Install Printer Driver Now
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}