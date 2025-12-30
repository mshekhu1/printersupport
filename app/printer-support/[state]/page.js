import Link from 'next/link';
import { US_STATES, getStateByCode } from '@/lib/usStates';
import { generateServiceJsonLd, generateLocalBusinessJsonLd } from '@/lib/seoUtils';
import { generateBreadcrumbJsonLd } from '@/lib/utils';
import FAQAccordionClient from '../../components/FAQAccordionClient';
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

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return US_STATES.map((state) => ({
    state: state.code,
  }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;
  const stateInfo = getStateByCode(state);
  
  if (!stateInfo) {
    return {
      title: 'Printer Support',
      description: 'Professional remote printer support services',
    };
  }

  const stateName = stateInfo.name;
  const canonicalUrl = `https://www.zamzamprint.com/printer-support/${state}`;

  return {
    title: `Remote Printer Support ${stateName} | Fast ${stateInfo.abbreviation} Printer Help`,
    description: `Get professional remote printer support in ${stateName}. Fix printer offline, not printing, driver issues, and Wi-Fi problems. Fast, affordable ${stateInfo.abbreviation} printer support for home and business.`,
    keywords: [
      `printer support ${stateName}`,
      `printer support ${stateInfo.abbreviation}`,
      `remote printer support ${stateName}`,
      `printer repair ${stateName}`,
      `printer troubleshooting ${stateName}`,
      `printer not printing ${stateName}`,
      `printer offline ${stateName}`,
      `printer driver ${stateName}`,
      `printer setup ${stateName}`,
      `${stateInfo.abbreviation} printer support`,
    ],
    authors: [{ name: 'ZamZam Print Support' }],
    openGraph: {
      title: `Remote Printer Support ${stateName} | Fast ${stateInfo.abbreviation} Printer Help`,
      description: `Professional remote printer support in ${stateName}. Fix printer issues quickly without leaving your home or office.`,
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: 'ZamZam Print Support',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Remote Printer Support ${stateName}`,
      description: `Professional remote printer support in ${stateName}. Fix printer issues quickly.`,
    },
    alternates: {
      canonical: canonicalUrl,
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
}

export default async function StatePrinterSupportPage({ params }) {
  const { state } = await params;
  const stateInfo = getStateByCode(state);

  if (!stateInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">State Not Found</h1>
          <Link href="/printer-support" className="text-blue-600 hover:underline">
            Return to Printer Support
          </Link>
        </div>
      </div>
    );
  }

  const stateName = stateInfo.name;
  const siteUrl = 'https://www.zamzamprint.com';
  const pageUrl = `${siteUrl}/printer-support/${state}`;

  const breadcrumbItems = [
    { name: 'Home', url: `${siteUrl}/` },
    { name: 'Printer Support', url: `${siteUrl}/printer-support` },
    { name: `${stateName} Printer Support`, url: pageUrl },
  ];

  const printerIssues = [
    { icon: AlertCircle, text: 'Printer not printing documents', color: 'text-red-600' },
    { icon: Wifi, text: 'Printer showing offline status', color: 'text-orange-600' },
    { icon: Monitor, text: 'Printer driver installation or update errors', color: 'text-blue-600' },
    { icon: Wifi, text: 'Wireless printer not connecting to Wi-Fi', color: 'text-purple-600' },
    { icon: Printer, text: 'Printer setup for new computers or networks', color: 'text-green-600' },
    { icon: AlertCircle, text: 'Printer error codes and spooler problems', color: 'text-yellow-600' },
  ];

  const supportSteps = [
    { num: '1', title: 'Contact Us', desc: `Reach out from anywhere in ${stateName}` },
    { num: '2', title: 'Start Session', desc: 'Begin a secure remote session with our technician' },
    { num: '3', title: 'Diagnose Issue', desc: 'We identify and diagnose your printer problem' },
    { num: '4', title: 'Fix Remotely', desc: 'Problem is fixed while you watch in real time' },
    { num: '5', title: 'Test & Verify', desc: 'We test printing before ending the session' },
  ];

  const targetUsers = [
    { icon: Home, text: `Home users across ${stateName} who need quick printer fixes` },
    { icon: Briefcase, text: 'Remote workers and home offices' },
    { icon: Building2, text: 'Small businesses without in-house IT staff' },
    { icon: Users, text: 'Offices setting up new printers or computers' },
  ];

  const whyChoose = [
    `Serving customers throughout ${stateName}`,
    'Experienced printer support technicians',
    'Secure and private remote sessions',
    'No long wait times or onsite visits',
    'Clear communication and upfront pricing',
    'Support for Windows and macOS',
  ];

  const faqs = [
    {
      q: `Do you provide printer support in ${stateName}?`,
      aShort: `Yes, we provide remote printer support to customers throughout ${stateName}.`,
      a: `Yes, we provide remote printer support services to customers across all of ${stateName}. Since our service is remote, we can help you from anywhere in the state. You don't need to schedule an in-person visit - we connect to your computer securely and fix the issue remotely.`
    },
    {
      q: `How quickly can I get printer help in ${stateInfo.abbreviation}?`,
      aShort: 'Most customers get help the same day.',
      a: 'We offer same-day remote sessions during business hours. After you contact us, we typically schedule the next available technician within hours, regardless of where you are located in the state.'
    },
    {
      q: 'Is remote printer support secure?',
      aShort: 'Yes — sessions use encrypted screen-sharing tools.',
      a: 'Remote sessions are encrypted and require your permission to start. We never access files without permission and nothing remains installed after the session unless you explicitly request it. Your privacy and security are our top priorities.'
    },
    {
      q: `Can you fix printers from major cities in ${stateName}?`,
      aShort: `Yes, we serve all cities and towns in ${stateName}.`,
      a: `Absolutely! Our remote printer support service works from anywhere in ${stateName}. Whether you're in a major city or a small town, we can help you fix your printer issues remotely. All you need is an internet connection.`
    },
  ];

  const serviceJsonLd = generateServiceJsonLd({
    name: `Remote Printer Support ${stateName}`,
    description: `Professional remote printer support services for customers in ${stateName}`,
    provider: 'ZamZam Print Support',
    areaServed: { type: 'State', name: stateName },
    url: pageUrl,
  });

  const localBusinessJsonLd = generateLocalBusinessJsonLd({
    name: 'ZamZam Print Support',
    url: siteUrl,
    description: `Remote printer support services serving ${stateName}`,
    phone: '+1-888-769-4448',
    areaServed: 'United States',
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbItems);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-3 px-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/printer-support" className="hover:text-blue-600">
                Printer Support
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{stateName}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-blue-100 font-medium">{stateName}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Remote Printer Support in {stateName}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Professional remote printer support for {stateName} residents and businesses. Fix printer offline, not printing, driver issues, and Wi-Fi problems quickly without leaving your home or office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+18887694448"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Printer Support in {stateInfo.abbreviation}
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-blue-400 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remote Support Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Remote Printer Support Works for {stateName} Customers
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Remote printer support allows a certified technician to securely connect to your computer and diagnose printer problems in real time. This means whether you're in {stateName}'s largest cities or smaller communities, you can get professional printer help without waiting for an in-person visit.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our printer support service covers software, driver, connectivity, and setup problems for both Windows and macOS systems. Since we work remotely, we can serve customers across all of {stateName} efficiently and cost-effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Issues We Fix */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Printer Problems We Fix in {stateName}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Our remote printer support service helps resolve common and advanced printer issues for {stateName} customers
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {printerIssues.map((issue, idx) => {
              const IconComponent = issue.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <IconComponent className={`w-8 h-8 ${issue.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <p className="text-gray-800 font-medium leading-relaxed">{issue.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            How Our Remote Printer Support Works
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Clock className="w-5 h-5 text-blue-600" />
            <p className="text-lg text-gray-600">Most printer issues are resolved in 20 to 40 minutes</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8 relative">
            {supportSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-400 h-full transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 text-center mb-2 text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Who Should Use Our Printer Support Service in {stateName}?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Our remote printer support is ideal for:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            {targetUsers.map((user, idx) => {
              const IconComponent = user.icon;
              return (
                <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300">
                  <IconComponent className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{user.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Remote Printer Support?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {whyChoose.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Printer Working Again in {stateName}
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Stop wasting time with trial-and-error fixes. Let our experts resolve your printer issue quickly and safely from anywhere in {stateInfo.abbreviation}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18887694448"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:scale-105"
            >
              Get Printer Support Now
              <ChevronRight className="ml-2 w-6 h-6" />
            </a>
            <Link 
              href="/pricing"
              className="inline-flex items-center justify-center px-10 py-5 bg-blue-500 text-white font-bold text-lg rounded-lg border-2 border-white/30 hover:bg-blue-400 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

