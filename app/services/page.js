import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { webPage, service, stringifySchema } from '@/lib/schema';

export const metadata = {
  title: 'Printer Support Services | Fix All Printer Issues | Expert Help',
  description: 'Comprehensive printer support services for HP, Canon, Epson, Brother, and Samsung printers. Fix offline, driver, connection, and printing issues with expert solutions.',
  keywords: ['printer support services', 'printer repair services', 'printer troubleshooting', 'HP printer support', 'Canon printer support', 'Epson printer support', 'Brother printer support', 'printer services'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Printer Support Services | Fix All Printer Issues',
    description: 'Expert printer support services for all major brands and common printer problems.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/services',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Printer Support Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Support Services | Fix All Printer Issues',
    description: 'Comprehensive printer support services for all major brands.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/services',
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

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Services', url: 'https://www.zamzamprint.com/services' }
  ];

  const generalServices = [
    {
      href: '/services/printer-offline',
      title: 'Printer Offline',
      description: 'Fix printer offline issues on Windows 10 and Windows 11. Solutions for keeping printers online.',
    },
    {
      href: '/services/printer-not-connecting',
      title: 'Printer Not Connecting',
      description: 'Troubleshoot printer connection issues. Fix USB and wireless printer detection problems.',
    },
    {
      href: '/services/printer-driver-installation',
      title: 'Printer Driver Installation',
      description: 'Install and update printer drivers on Windows 11. Fix driver installation errors.',
    },
    {
      href: '/services/wireless-printer-setup',
      title: 'Wireless Printer Setup',
      description: 'Connect printer to WiFi. Step-by-step wireless printer setup guide.',
    },
    {
      href: '/services/printer-error-codes',
      title: 'Printer Error Codes',
      description: 'Decode and fix printer error codes for HP, Epson, Brother, and Canon printers.',
    },
    {
      href: '/services/printer-spooler-error',
      title: 'Printer Spooler Error',
      description: 'Fix print spooler errors and printer spooler not working issues on Windows.',
    },
    {
      href: '/services/printer-paper-jam',
      title: 'Printer Paper Jam',
      description: 'Clear paper jams safely. Expert guide to removing stuck paper from printers.',
    },
    {
      href: '/services/printer-printing-blank-pages',
      title: 'Printer Printing Blank Pages',
      description: 'Fix blank page printing issues. Solutions for white page printing problems.',
    },
  ];

  const brandServices = [
    {
      brand: 'HP Printer Support',
      services: [
        {
          href: '/services/hp-printer-support',
          title: 'HP Printer Support',
          description: 'Comprehensive HP printer support for all models and issues.',
        },
        {
          href: '/services/hp-printer-offline',
          title: 'HP Printer Offline',
          description: 'Fix HP printer offline issues and keep HP printers online.',
        },
        {
          href: '/services/hp-printer-not-printing',
          title: 'HP Printer Not Printing',
          description: 'Troubleshoot HP printer not printing issues with expert solutions.',
        },
      ],
    },
    {
      brand: 'Canon Printer Support',
      services: [
        {
          href: '/services/canon-printer-support',
          title: 'Canon Printer Support',
          description: 'Expert Canon printer support for setup, errors, and troubleshooting.',
        },
        {
          href: '/services/canon-printer-offline',
          title: 'Canon Printer Offline',
          description: 'Fix Canon printer offline problems and connection issues.',
        },
      ],
    },
    {
      brand: 'Epson Printer Support',
      services: [
        {
          href: '/services/epson-printer-support',
          title: 'Epson Printer Support',
          description: 'Epson printer support for offline, ink issues, and setup problems.',
        },
        {
          href: '/services/epson-printer-not-printing',
          title: 'Epson Printer Not Printing',
          description: 'Fix Epson printer not printing issues with step-by-step solutions.',
        },
      ],
    },
    {
      brand: 'Brother Printer Support',
      services: [
        {
          href: '/services/brother-printer-support',
          title: 'Brother Printer Support',
          description: 'Brother printer support for setup, offline, and driver problems.',
        },
        {
          href: '/services/brother-printer-offline',
          title: 'Brother Printer Offline',
          description: 'Fix Brother printer offline issues and keep Brother printers online.',
        },
      ],
    },
    {
      brand: 'Samsung Printer Support',
      services: [
        {
          href: '/services/samsung-printer-support',
          title: 'Samsung Printer Support',
          description: 'Samsung printer support for setup, errors, drivers, and connectivity.',
        },
      ],
    },
  ];

  // Generate schemas
  const webPageSchema = webPage({
    name: 'Printer Support Services | Fix All Printer Issues | Expert Help',
    description: 'Comprehensive printer support services for HP, Canon, Epson, Brother, and Samsung printers. Fix offline, driver, connection, and printing issues with expert solutions.',
    url: '/services',
    breadcrumb: breadcrumbItems,
  });

  const serviceSchema = service({
    name: 'Printer Support Services',
    description: 'Expert printer support services for all major brands and common printer problems.',
    url: '/services',
  });

  const allSchemas = [webPageSchema, serviceSchema].filter(Boolean);

  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(allSchemas) }}
      />
      
      <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
        <Breadcrumbs items={breadcrumbItems} />
        
        <header className="mb-12 border-b pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Printer Support Services
          </h1>
          <p className="text-lg text-slate-600 italic">
            Expert solutions for all your printer problems. Find the right support guide for your specific issue.
          </p>
        </header>

        {/* General Printer Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">General Printer Issues</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {generalServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:text-blue-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center mt-3 text-blue-600 font-medium group-hover:text-blue-700">
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Brand-Specific Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Brand-Specific Support</h2>
          <div className="space-y-12">
            {brandServices.map((brandGroup) => (
              <div key={brandGroup.brand}>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 border-b pb-2">
                  {brandGroup.brand}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brandGroup.services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block p-5 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all group"
                    >
                      <h4 className="text-lg font-bold text-blue-700 mb-2 group-hover:text-blue-800 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center mt-2 text-blue-600 text-sm font-medium group-hover:text-blue-700">
                        View guide
                        <svg
                          className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 p-8 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Need Immediate Help?</h2>
          <p className="text-gray-700 mb-4">
            If you can't find the solution you need or need professional assistance, our expert technicians are ready to help.
          </p>
          <a
            href="tel:+18887694448"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Support: +1-888-769-4448
          </a>
        </section>
      </main>
    </>
  );
}
