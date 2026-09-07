// app/contact/page.js
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ContactFormClient from '@/app/components/ContactFormClient';
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

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Contact', url: 'https://www.zamzamprint.com/contact' }
  ];

  // Generate schemas
  const webPageSchema = webPage({
    name: 'Contact Us | ZamZam Print Support',
    description: 'Get in touch with ZamZam Print Support for expert printer troubleshooting, setup, and repair assistance.',
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-800">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(allSchemas) }}
      />

      {/* ───────── HERO HEADER ───────── */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="text-center mt-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
              Get Your Printer <span className="text-blue-400">Fixed Today</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
              Tell us about your issue and we'll call you back in under 3 minutes — or call us directly right now.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── MAIN CONTENT ───────── */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20 pb-20">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* ─── LEFT: SUPPORT REQUEST FORM (3 cols) ─── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Request a Call Back</h2>
              </div>
              <p className="text-gray-500 text-sm mb-8 ml-[52px]">Fill this out and a technician will call you — usually within 3 minutes.</p>

              <ContactFormClient />
            </div>
          </div>

          {/* ─── RIGHT: QUICK CONTACT + TRUST SIGNALS (2 cols) ─── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Call Us Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Prefer to Call?</h3>
                  <p className="text-blue-200 text-sm">Skip the form — talk to us now</p>
                </div>
              </div>
              <a
                href="tel:+18887594448"
                className="block text-center bg-white text-blue-700 text-2xl font-black px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                +1 888 759 4448
              </a>
              <p className="text-center text-blue-200 text-sm mt-3">9:00 AM – 7:00 PM Eastern Time</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <a href="mailto:support@zamzamprint.com" className="text-blue-600 font-semibold text-sm hover:underline">
                    support@zamzamprint.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                  <address className="not-italic text-gray-600 text-sm leading-relaxed">
                    2783 Market St #599<br />
                    San Francisco, CA 94114<br />
                    United States
                  </address>
                  <p className="text-xs text-gray-400 mt-2 italic">All support is provided remotely.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-center">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-emerald-800">No Fix, No Charge</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 text-center">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-blue-800">SSL Secured</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100 text-center">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-purple-800">Data Confidential</p>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 text-center">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-amber-800">3-Min Response</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Our Support Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Submit Your Request', desc: 'Tell us your printer issue and phone number using the form above.', color: 'blue' },
              { step: '2', title: 'We Call You Back', desc: 'A technician calls you within minutes and connects to your computer securely.', color: 'indigo' },
              { step: '3', title: 'Problem Solved', desc: 'Most issues fixed in under 20 mins. You only pay if we fix it.', color: 'green' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-100 text-${item.color}-600 font-black text-xl flex items-center justify-center mx-auto mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SEO CONTENT ───────── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed mb-4">
            ZamZam Print Support is dedicated to providing fast, friendly, and effective printer troubleshooting for home and business users across the United States. Whether you're facing a stubborn paper jam, network printing issues, or need help setting up a new device, our team is ready to assist.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We support all major brands including HP, Canon, Epson, Brother, and Samsung, and can resolve most issues remotely for your convenience. Our technicians are highly trained and committed to delivering a great customer experience.
          </p>
        </div>
      </section>
    </main>
  );
}