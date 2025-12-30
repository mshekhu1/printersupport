import Link from 'next/link';
import FAQAccordionClient from '../components/FAQAccordionClient';
import ScrollRevealClient from '../components/ScrollRevealClient';
import { CheckCircle, Wifi, Usb, Monitor, Clock, Shield, Printer, Settings, Download, AlertCircle, ArrowRight } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Printer Setup on Windows 10 & 11 | Remote US Support',
  description: 'Need help setting up a printer on Windows? We provide remote printer setup for Windows 10 & 11. Complete installation, driver setup, and configuration for USB and wireless printers.',
  keywords: ['printer setup windows', 'windows printer setup', 'printer installation windows', 'windows 10 printer setup', 'windows 11 printer setup', 'remote printer setup', 'printer configuration', 'Windows printer installation'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Printer Setup on Windows 10 & 11 | Remote US Support',
    description: 'Need help setting up a printer on Windows? We provide remote printer setup for Windows 10 & 11. Complete installation, driver setup, and configuration.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/printer-setup-windows',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Setup on Windows 10 & 11',
    description: 'We provide remote printer setup for Windows 10 & 11. Complete installation and configuration.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/printer-setup-windows',
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

export default function PrinterSetupWindows() {
  const setupTypes = [
    { 
      title: 'New Printer Installation', 
      description: 'Complete setup for brand new printers on Windows 10 and 11',
      icon: Printer,
      color: 'text-blue-600'
    },
    { 
      title: 'Printer Setup on New Computer', 
      description: 'Transfer and configure your existing printer to a new Windows PC',
      icon: Monitor,
      color: 'text-green-600'
    },
    { 
      title: 'Wireless Printer Setup', 
      description: 'Wi-Fi printer configuration and network printing setup',
      icon: Wifi,
      color: 'text-purple-600'
    },
    { 
      title: 'USB Printer Setup', 
      description: 'Direct USB connection setup and driver installation',
      icon: Usb,
      color: 'text-orange-600'
    },
    { 
      title: 'Network Printer Setup', 
      description: 'Shared printer setup for office and home networks',
      icon: Settings,
      color: 'text-indigo-600'
    },
    { 
      title: 'Default Printer Configuration', 
      description: 'Set printer as default and configure printing preferences',
      icon: Settings,
      color: 'text-pink-600'
    },
  ];

  const commonFailures = [
    { 
      title: 'Missing or incompatible drivers', 
      description: 'Windows can\'t find the correct driver, or the driver is incompatible with your Windows version',
      icon: Download
    },
    { 
      title: 'Windows compatibility issues', 
      description: 'Printers designed for older Windows versions not working on Windows 10/11',
      icon: AlertCircle
    },
    { 
      title: 'Incorrect network settings', 
      description: 'Wi-Fi printer not connecting due to network configuration or password issues',
      icon: Wifi
    },
    { 
      title: 'Partial or interrupted installations', 
      description: 'Setup process was interrupted, leaving printer in an incomplete state',
      icon: AlertCircle
    },
    { 
      title: 'Firewall or security blocking', 
      description: 'Windows Firewall or security software preventing printer communication',
      icon: Shield
    },
  ];

  const setupSteps = [
    { 
      step: 1, 
      title: 'Identify Printer Model & Windows Version',
      description: 'We determine your exact printer model and Windows version (10 or 11) to select the right driver'
    },
    { 
      step: 2, 
      title: 'Download & Install Correct Drivers',
      description: 'Download and install the latest compatible drivers from manufacturer or Windows Update'
    },
    { 
      step: 3, 
      title: 'Configure Printer Connection',
      description: 'Set up USB, Wi-Fi, or network connection based on your printer type'
    },
    { 
      step: 4, 
      title: 'Complete Printer Configuration',
      description: 'Configure printer settings, set as default if needed, and adjust preferences'
    },
    { 
      step: 5, 
      title: 'Test Printing & Verify',
      description: 'Perform test prints to ensure everything works correctly before closing the session'
    },
  ];

  const windowsVersions = [
    { version: 'Windows 11', description: 'Latest Windows version with enhanced printer support', icon: Monitor },
    { version: 'Windows 10', description: 'Most common Windows version, full printer compatibility', icon: Monitor },
    { version: 'Windows Server', description: 'Server environments and network printer setups', icon: Settings },
  ];

  const benefits = [
    { text: 'Works with Windows 10 & 11', icon: Monitor },
    { text: 'USB and wireless printer support', icon: Usb },
    { text: 'All major printer brands', icon: Printer },
    { text: 'Same-day setup available', icon: Clock },
    { text: 'Secure remote sessions', icon: Shield },
  ];

  const faqs = [
    {
      q: 'How long does a Windows printer setup take?',
      aShort: 'Most printer setups are completed within 30-45 minutes.',
      a: 'Most Windows printer setups are completed within 30-45 minutes during a remote session. This includes driver download and installation, connection configuration, and testing. Complex setups with network printers or older models may take up to an hour.'
    },
    {
      q: 'Do you support both Windows 10 and Windows 11?',
      aShort: 'Yes, we support printer setup on both Windows 10 and Windows 11.',
      a: 'Yes, we support printer setup on both Windows 10 and Windows 11. Our technicians are experienced with both operating systems and can install the appropriate drivers and configure settings for your specific Windows version. We also handle compatibility issues when setting up older printers on newer Windows versions.'
    },
    {
      q: 'Can you set up wireless printers on Windows?',
      aShort: 'Yes, we configure Wi-Fi printers and network printing on Windows.',
      a: 'Yes, we configure Wi-Fi printers and network printing on Windows. We help connect your wireless printer to your Wi-Fi network, install the necessary drivers, and ensure it works with Windows printing system. We can also set up network printers for multiple computers to share.'
    },
    {
      q: 'What if Windows can\'t find my printer driver?',
      aShort: 'We locate and install the correct driver from manufacturer or Windows Update.',
      a: 'If Windows can\'t automatically find your printer driver, we locate the correct driver from the manufacturer\'s website or Windows Update. We ensure the driver is compatible with your Windows version and install it properly. For older printers, we may use compatible drivers or provide guidance on alternatives.'
    },
    {
      q: 'Do you help set up printers on multiple Windows computers?',
      aShort: 'Yes, we can set up the same printer on multiple Windows PCs.',
      a: 'Yes, we can help set up the same printer on multiple Windows computers. For network or wireless printers, we configure each computer to connect to the shared printer. This is particularly useful for home offices or small businesses with multiple users needing access to the same printer.'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 sm:py-20" data-sr-ignore>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollRevealClient delay={50} once={true} effect="fade-up">
              <Monitor className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 text-blue-200" />
            </ScrollRevealClient>
            <ScrollRevealClient delay={150} once={true} effect="fade-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
                Printer Setup for Windows 10 & Windows 11
              </h1>
            </ScrollRevealClient>
            <ScrollRevealClient delay={250} once={true} effect="fade-up">
              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
                Setting up a printer on Windows can be confusing, especially with wireless printers or new systems. Our experts handle complete printer setup remotely—driver installation, configuration, and testing included.
              </p>
            </ScrollRevealClient>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollRevealClient delay={350} once={true} effect="fade-up">
                <a 
                  href="tel:+18887694448"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 font-bold text-base sm:text-lg rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:scale-105"
                >
                  Set Up Printer on Windows Now
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </ScrollRevealClient>
              <ScrollRevealClient delay={400} once={true} effect="fade-up">
                <Link 
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-blue-500 text-white font-bold text-base sm:text-lg rounded-lg border-2 border-white/30 hover:bg-blue-400 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </ScrollRevealClient>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Types We Help With */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Windows Printer Setup Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">We handle all types of printer setup scenarios on Windows</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setupTypes.map((type, idx) => {
              const IconComponent = type.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300 transform hover:-translate-y-1">
                  <IconComponent className={`w-12 h-12 ${type.color} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Setup Often Fails */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Why Windows Printer Setup Often Fails</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Understanding common issues helps us provide better solutions</p>
          <div className="space-y-6">
            {commonFailures.map((failure, idx) => {
              const IconComponent = failure.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <IconComponent className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                        <h3 className="text-xl font-bold text-gray-900">{failure.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{failure.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Setup Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Complete Windows Printer Setup Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {setupSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Windows Versions Supported */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Windows Versions We Support</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {windowsVersions.map((win, idx) => {
              const IconComponent = win.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all border-2 border-blue-200 hover:border-blue-400">
                  <IconComponent className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{win.version}</h3>
                  <p className="text-gray-600">{win.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Our Windows Printer Setup Service</h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md text-center border border-blue-100 hover:shadow-lg transition-all">
                  <IconComponent className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <p className="text-gray-800 font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Printer className="w-20 h-20 mx-auto mb-6 text-blue-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Windows Printer Setup Service
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let our experts handle your Windows printer setup remotely. We ensure everything is configured correctly and your printer works perfectly with Windows 10 or 11.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
              <Download className="w-10 h-10 mx-auto mb-3 text-blue-200" />
              <p className="font-semibold text-lg">Driver Installation</p>
              <p className="text-blue-100 text-sm mt-2">Latest compatible drivers</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
              <CheckCircle className="w-10 h-10 mx-auto mb-3 text-green-300" />
              <p className="font-semibold text-lg">Full Configuration</p>
              <p className="text-blue-100 text-sm mt-2">Complete setup & testing</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
              <Shield className="w-10 h-10 mx-auto mb-3 text-blue-200" />
              <p className="font-semibold text-lg">Secure & Fast</p>
              <p className="text-blue-100 text-sm mt-2">30-45 minute setup time</p>
            </div>
          </div>
          <a
            href="tel:+18887694448"
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Set Up Printer on Windows Now
          </a>
          <p className="mt-4 text-blue-100 text-sm">Same-day service • US-based support • Windows 10 & 11</p>
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Related Windows Printer Support</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/install-printer-driver" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
              <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Driver Installation</h4>
              <p className="text-gray-600 text-sm">Install printer drivers on Windows</p>
            </Link>
            <Link href="/printer-not-connecting-wifi" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
              <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Wi-Fi Setup</h4>
              <p className="text-gray-600 text-sm">Wireless printer configuration</p>
            </Link>
            <Link href="/printer-not-printing" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
              <Printer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Printer Not Printing</h4>
              <p className="text-gray-600 text-sm">Fix printing issues on Windows</p>
            </Link>
            <Link href="/printer-offline-fix" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1">
              <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Printer Offline</h4>
              <p className="text-gray-600 text-sm">Fix offline printer issues</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Help Setting Up Your Printer on Windows?</h3>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Don't struggle with confusing setup processes. Our experts will have your printer working on Windows 10 or 11 in 30-45 minutes during a secure remote session.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Windows Printer Setup Help
          </a>
        </div>
      </section>
    </div>
  );
}
