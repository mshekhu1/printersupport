// app/contact/page.js
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { webPage, organization, stringifySchema } from '@/lib/schema';

export const metadata = {
  title: 'Contact Us | ZamZam Print Support - Printer Help & Technical Support',
  description: 'Get in touch with ZamZam Print Support for expert printer troubleshooting, setup, and repair assistance. Call us anytime for fast help with HP, Canon, Epson, Brother, Samsung printers and more.',
  keywords: [
    'contact ZamZam Print Support',
    'printer support phone number',
    'printer technical support contact',
    'HP Canon Epson Brother printer help',
    'printer repair support contact'
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Contact ZamZam Print Support | Expert Printer Assistance',
    description: 'Reach our printer support team by phone for immediate help with any printing issues. Available for Windows, Mac, and all major brands.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/contact',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact ZamZam Print Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ZamZam Print Support',
    description: 'Call +1 888 759 4448 for professional printer support and troubleshooting.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/contact',
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

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Contact', url: 'https://www.zamzamprint.com/contact' }
  ];

  // Generate schemas
  const webPageSchema = webPage({
    name: 'Contact Us | ZamZam Print Support',
    description: 'Get in touch with ZamZam Print Support for expert printer troubleshooting, setup, and repair assistance. Call us anytime for fast help with HP, Canon, Epson, Brother, Samsung printers and more.',
    url: '/contact',
    breadcrumb: breadcrumbItems,
  });

  const organizationSchema = organization({
    name: 'ZamZam Print Support',
    url: 'https://www.zamzamprint.com',
    telephone: '+1 888 759 4448',
    email: 'support@zamzamprint.com',
  });

  const allSchemas = [webPageSchema, organizationSchema].filter(Boolean);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(allSchemas) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      <header className="mb-12 border-b pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Contact ZamZam Print Support
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We're here to help with all your printer issues. Get immediate assistance from our expert technicians.
        </p>
        <p className="text-base text-gray-700 mt-6 max-w-2xl mx-auto">
          ZamZam Print Support is dedicated to providing fast, friendly, and effective printer troubleshooting for home and business users across the United States. Whether you’re facing a stubborn paper jam, network printing issues, or need help setting up a new device, our team is ready to assist. We support all major brands, including HP, Canon, Epson, Brother, and Samsung, and can resolve most issues remotely for your convenience. Our goal is to minimize your downtime and get your printer working smoothly again, so you can focus on what matters most.
        </p>
        <p className="text-base text-gray-700 mt-4 max-w-2xl mx-auto">
          You can reach us by phone, email, or by filling out our online support form. Our technicians are highly trained and committed to delivering a great customer experience. We also offer guidance on printer maintenance, driver updates, and best practices to prevent future problems. Don’t hesitate to contact us for any printer-related question—no issue is too small or too complex!
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="mb-8 md:mb-0">
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-yellow-800 mb-3">How Our Support Works</h2>
            <p className="text-gray-700 mb-2">When you contact ZamZam Print Support, you’ll speak directly with a knowledgeable technician who will listen to your issue and walk you through solutions step by step. Most problems can be fixed remotely, but if we can’t resolve it over the phone, we’ll provide clear next steps or recommend a trusted local service if needed.</p>
            <p className="text-gray-700">We value your time and privacy—your information is always kept confidential, and we never upsell unnecessary services. Our mission is to get your printer working as quickly and affordably as possible.</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Call Us Now</h2>
            <div className="space-y-4">
              <p className="text-lg">
                For fast, reliable printer support, give us a call. Our team is ready to help with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Printer not printing or offline issues</li>
                <li>Driver installation and updates</li>
                <li>Paper jams, error codes, and spooler problems</li>
                <li>Setup for HP, Canon, Epson, Brother, Samsung, and more</li>
                <li>Wireless/network printing problems</li>
              </ul>
              <div className="pt-4">
                <a
                  href="tel:+18887594448"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-10 py-5 rounded-full transition-all shadow-lg transform hover:scale-105"
                >
                  Call +1 888 759 4448
                </a>
              </div>
              <p className="text-sm text-gray-600 italic pt-4">
                Available extended hours for urgent printer emergencies.
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-xl border border-green-100 shadow-sm">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Our Support Hours</h2>
            <p className="text-gray-700">
              Monday – Sunday: 7:00 AM – 11:00 PM EST<br />
              (Emergency support available outside these hours – just call!)
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Location</h2>
            <address className="not-italic text-gray-700 space-y-3">
              <p className="font-semibold text-lg">ZamZam Print Support</p>
              <p> Tech Support Avenue</p>
              <p>Suite 450</p>
              <p>Orlando, FL 32801</p>
              <p>United States</p>
            </address>
            <p className="text-sm text-gray-500 mt-6 italic">
              This is our primary support hub address (updates coming soon). All support is currently provided remotely via phone for fastest resolution.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-xl border border-purple-100 shadow-sm">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Why Call Us?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                Instant connection to live technicians
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                No waiting in chat queues or emails
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                Step-by-step remote guidance
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                Support for all major printer brands
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                Satisfaction guaranteed
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center py-12 bg-slate-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Ready to Fix Your Printer Problem?
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Don't struggle with printing issues any longer. Our experts are just one call away.
        </p>
        <a
          href="tel:+18887594448"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full text-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Call Now: +1 888 759 4448
        </a>
      </section>

      <footer className="mt-20 text-center text-gray-600">
        <p>© {new Date().getFullYear()} ZamZam Print Support. All rights reserved.</p>
        <p className="mt-2">Remote printer support specialists serving customers across the United States.</p>
        <p className="mt-2 text-sm text-gray-500">For non-urgent inquiries, email us at <a href="mailto:support@zamzamprint.com" className="text-blue-600 underline">support@zamzamprint.com</a> or use our online contact form. We aim to respond to all messages within one business day.</p>
      </footer>
    </main>
  );
}