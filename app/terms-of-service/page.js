import Link from 'next/link';
import { FileText, Shield, AlertCircle, CreditCard, Ban, RefreshCw, CheckCircle, Phone, Info, Lock } from 'lucide-react';

// SEO Metadata for the page
export const metadata = {
  title: 'Terms of Service | Remote Printer Support',
  description: 'Read our Terms of Service for remote printer support services. Understand user responsibilities, service limitations, payment terms, and liability information for our independent technical support.',
  keywords: ['terms of service', 'remote printer support', 'terms and conditions', 'printer support terms', 'service agreement'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Terms of Service | Remote Printer Support',
    description: 'Read our Terms of Service for remote printer support services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/terms-of-service',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Remote Printer Support',
    description: 'Terms and conditions for remote printer support services.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

// Force static generation (SSG)
export const dynamic = 'force-static';

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 'service-description',
      title: 'Service Description',
      icon: FileText,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      content: [
        'We provide independent remote technical support for printer-related issues, including setup, configuration, troubleshooting, driver installation, and connectivity problems.',
        'Our services are delivered remotely via secure screen-sharing sessions. We assist with software, driver, and configuration issues that can be resolved through remote access.',
        'We are an independent technical support service provider and are not affiliated with, endorsed by, or sponsored by any printer manufacturer, including but not limited to HP, Canon, Epson, Brother, Samsung, or Lexmark.'
      ],
      type: 'paragraph'
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: Shield,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      intro: 'By using our service, you agree to:',
      items: [
        'Provide accurate and complete information about your printer issue and system configuration',
        'Grant explicit permission for remote access during support sessions and maintain supervision',
        'Ensure you have legal rights and authorization to access and modify the device in question',
        'Back up important data before allowing remote access, as we are not responsible for data loss',
        'Be present during remote sessions and follow technician instructions',
        'Use the service only for lawful purposes and not attempt to use it for unauthorized access'
      ],
      type: 'list'
    },
    {
      id: 'service-limitations',
      title: 'Service Limitations',
      icon: AlertCircle,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      intro: 'Our remote support services have the following limitations:',
      items: [
        'We do not provide physical repairs, hardware replacement, or on-site service visits',
        'Hardware-related issues (broken components, physical damage, mechanical failures) may require manufacturer service',
        'Some issues may depend on hardware condition, age, or manufacturer limitations that cannot be resolved remotely',
        'Resolution is not guaranteed for hardware-related problems or issues caused by physical damage',
        'We cannot assist with printers that are completely non-functional due to hardware failures',
        'Service availability may vary based on internet connectivity and system compatibility'
      ],
      type: 'list'
    },
    {
      id: 'payments',
      title: 'Payment Terms',
      icon: CreditCard,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      content: [
        'All payments are required before the support session begins, unless otherwise agreed upon in writing.',
        'We accept major credit cards, debit cards, and other payment methods as displayed on our website.',
        'Service fees are non-refundable once a remote session has been initiated and work has begun, except as outlined in our Refund Policy.',
        'For subscription plans, billing occurs according to the selected plan terms. You may cancel subscriptions at any time through your account or by contacting support.',
        'We reserve the right to modify pricing with notice. Continued use of the service after price changes constitutes acceptance of new pricing.'
      ],
      type: 'paragraph'
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      icon: Lock,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
      intro: 'To the maximum extent permitted by law, we are not responsible for:',
      items: [
        'Hardware failures, malfunctions, or physical damage to your printer or computer',
        'Data loss, corruption, or deletion caused by existing system issues, malware, or pre-existing conditions',
        'Manufacturer defects, warranty issues, or hardware incompatibilities',
        'Loss of business, revenue, or profits arising from printer downtime',
        'Indirect, incidental, special, or consequential damages',
        'Issues resulting from user error, failure to follow instructions, or unauthorized modifications'
      ],
      note: 'Our total liability for any claim arising from our services shall not exceed the amount you paid for the specific service in question.',
      type: 'list'
    },
    {
      id: 'termination',
      title: 'Service Termination',
      icon: Ban,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      content: [
        'We reserve the right to refuse, suspend, or terminate service at any time if we detect misuse, abuse, fraudulent activity, or violation of these terms.',
        'Termination may occur if you fail to comply with payment obligations, provide false information, or engage in behavior that threatens the security of our systems or technicians.',
        'Upon termination, your access to the service will cease immediately, and any outstanding payments remain due.',
        'You may discontinue use of our service at any time by canceling any active subscriptions and ceasing to request support services.'
      ],
      type: 'paragraph'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: FileText,
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      content: [
        'All content on this website, including text, graphics, logos, and software, is the property of ZamZam Print Support or its licensors and is protected by copyright and trademark laws.',
        'You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.',
        'Any feedback, suggestions, or ideas you provide regarding our service may be used by us without obligation or compensation.'
      ],
      type: 'paragraph'
    },
    {
      id: 'privacy',
      title: 'Privacy and Data',
      icon: Shield,
      iconColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      content: [
        'Your use of our service is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.',
        'During remote support sessions, we may access your system to diagnose and resolve issues. All sessions are conducted with your explicit permission and supervision.',
        'We do not store personal files, passwords, or sensitive data accessed during support sessions beyond what is necessary to provide service.'
      ],
      type: 'paragraph'
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to Terms',
      icon: RefreshCw,
      iconColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      content: [
        'We reserve the right to update, modify, or revise these Terms of Service at any time without prior notice.',
        'Material changes will be posted on this page with an updated "Last Updated" date.',
        'Your continued use of our service after changes are posted constitutes acceptance of the revised terms.',
        'If you do not agree with any changes, you must discontinue use of our service immediately.',
        'We recommend reviewing these terms periodically to stay informed of any updates.'
      ],
      type: 'paragraph'
    }
  ];

  const keyPoints = [
    {
      icon: CheckCircle,
      text: 'Independent support provider (not affiliated with printer manufacturers)',
      color: 'text-green-600'
    },
    {
      icon: CheckCircle,
      text: 'Remote technical support only (no physical repairs)',
      color: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      text: 'Payment required before service begins',
      color: 'text-purple-600'
    },
    {
      icon: CheckCircle,
      text: 'Liability limited to service fee amount',
      color: 'text-orange-600'
    },
  ];

  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does ZamZam Print Support provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide independent remote technical support for printer-related issues including setup, configuration, troubleshooting, driver installation, and connectivity problems. We are not affiliated with any printer manufacturer."
        }
      },
      {
        "@type": "Question",
        "name": "Are you affiliated with printer manufacturers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we are an independent technical support service provider and are not affiliated with, endorsed by, or sponsored by any printer manufacturer."
        }
      },
      {
        "@type": "Question",
        "name": "What are the payment terms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All payments are required before the support session begins, unless otherwise agreed upon in writing. We accept major credit cards, debit cards, and other payment methods."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <FileText className="w-24 h-24 mx-auto mb-6 text-blue-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              By using our website and remote printer support services, you agree to the following terms and conditions. Please read them carefully.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                href="/privacy-policy"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition border border-white/30"
              >
                <Shield className="w-5 h-5 mr-2" />
                Privacy Policy
              </Link>
              <Link 
                href="/refund-policy"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition border border-white/30"
              >
                <Info className="w-5 h-5 mr-2" />
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Key Points Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white -mt-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {keyPoints.map((point, idx) => {
              const IconComponent = point.icon;
              return (
                <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <IconComponent className={`w-6 h-6 ${point.color} flex-shrink-0 mt-0.5`} />
                  <p className="text-sm leading-relaxed">{point.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {sections.map((section, idx) => {
            const IconComponent = section.icon;
            return (
              <article 
                key={section.id} 
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600"
                id={section.id}
                data-reveal
                data-sr-effect="fade-up"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`${section.bgColor} p-4 rounded-xl flex-shrink-0`}>
                    <IconComponent className={`w-8 h-8 ${section.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                        {idx + 1}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                  </div>
                </div>

                {section.intro && (
                  <p className="text-gray-700 text-lg md:text-xl mb-6 font-semibold pl-14">{section.intro}</p>
                )}

                {section.content && section.type === 'paragraph' && (
                  <div className="space-y-4 pl-14">
                    {section.content.map((para, i) => (
                      <p key={i} className="text-gray-700 text-lg leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {section.items && section.type === 'list' && (
                  <ul className="space-y-4 mb-6 pl-14">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-gray-100">
                        <CheckCircle className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-0.5" />
                        <span className="text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-lg pl-14">
                    <p className="text-gray-800 font-semibold text-lg">
                      <strong className="text-amber-900">Important:</strong> {section.note}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Important Notice */}
        <section 
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-10 md:p-12 text-white"
          data-reveal
          data-sr-effect="fade-up"
        >
          <div className="text-center max-w-3xl mx-auto">
            <AlertCircle className="w-20 h-20 mx-auto mb-6 text-blue-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Important Notice</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms form a legally binding agreement between you and ZamZam Print Support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                href="/privacy-policy"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition border border-white/30"
              >
                Read Privacy Policy
              </Link>
              <Link 
                href="/refund-policy"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition border border-white/30"
              >
                Read Refund Policy
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section 
          className="mt-12 bg-white rounded-2xl shadow-xl p-10 text-center border-2 border-blue-200"
          data-reveal
          data-sr-effect="fade-up"
        >
          <Phone className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you have any questions about these Terms of Service, please don't hesitate to contact us. Our support team is here to help clarify any concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18887694448"
              className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1-888-769-4448
            </a>
            <Link
              href="/printer-support"
              className="inline-flex items-center justify-center px-10 py-4 bg-gray-100 text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300 border-2 border-gray-300"
            >
              View Our Services
            </Link>
          </div>
        </section>

        {/* Acceptance Notice */}
        <div 
          className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl shadow-md"
          data-reveal
          data-sr-effect="fade-up"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-green-900 font-bold text-xl mb-2">Agreement Acknowledgment</p>
              <p className="text-green-800 text-lg leading-relaxed">
                Your use of our services constitutes acceptance of these terms. Please review them carefully before proceeding with any service request. If you do not agree with any part of these terms, please discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-16 text-center space-y-4 pb-8">
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Last Updated: <span className="text-blue-600">{lastUpdated}</span>
            </p>
            <p className="text-gray-600">
              These terms are governed by the laws of the United States. Any disputes will be resolved through binding arbitration in accordance with applicable state and federal laws.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-blue-600 transition">Refund Policy</Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-blue-600 transition">Terms of Service</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
