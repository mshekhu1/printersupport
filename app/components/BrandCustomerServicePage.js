import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import FAQAccordionClient from '@/app/components/FAQAccordionClient';
import FAQSchema from '@/app/components/FAQSchema';
import BrandOfficialContact from '@/app/components/BrandOfficialContact';
import { BRAND_KEYS, getBrandSupport } from '@/lib/brandSupport';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/phone';

function faqsFor(info) {
  return [
    {
      q: `What is the ${info.name} customer service phone number?`,
      aShort: info.phoneDisplay,
      a: `The published U.S. ${info.name} customer service number is ${info.phoneDisplay}${info.phoneAlias ? ` (${info.phoneAlias})` : ''}. ${info.hours}`,
    },
    {
      q: `What is the official ${info.name} support website?`,
      aShort: info.websiteLabel,
      a: `Use ${info.websiteUrl}. That is the verified support site for drivers, manuals, and contact options. Ignore lookalike sites and phone numbers that only appear in search ads.`,
    },
    {
      q: `How do I avoid fake ${info.name} support?`,
      aShort: 'Use the published phone and website. Do not pay a caller who contacted you first.',
      a: `Legitimate ${info.name} support will not demand gift cards, wire transfers, or your Windows password on an unsolicited call, and it will not ask you to install remote-access software from a pop-up. ZamZam Print Support is independent and is not ${info.name}. We only connect when you call us.`,
    },
    {
      q: `When should I call ZamZam instead of ${info.name}?`,
      aShort: 'Call us for a remote session when the printer is offline, will not print, or a driver install fails.',
      a: `Call ${info.name} at ${info.phoneDisplay} for warranty repairs, account or subscription issues, and orders. Call ZamZam at ${PHONE_DISPLAY} when you want a U.S. technician to fix offline status, a stuck queue, or a driver on your computer without waiting on the manufacturer line.`,
    },
  ];
}

export default function BrandCustomerServicePage({ brand }) {
  const info = getBrandSupport(brand);
  const faqs = faqsFor(info);
  const others = BRAND_KEYS.filter((key) => key !== brand).map((key) => getBrandSupport(key));
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Brands', url: 'https://www.zamzamprint.com/brands' },
    { name: info.name, url: `https://www.zamzamprint.com/brands/${brand}` },
    { name: `${info.name} Customer Service`, url: `https://www.zamzamprint.com/brands/${brand}/printer-support` },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="mb-12 border-b pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {info.name} Customer Service
          </h1>
          <p className="text-lg text-slate-800 mb-3">{info.lede}</p>
          <p className="text-lg text-slate-600 max-w-3xl">{info.metaDescription}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/blog/${info.blogSlug}`}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              {info.blogLabel}
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border border-slate-300 px-5 py-3 rounded-lg font-semibold text-slate-900 hover:bg-slate-50"
            >
              Contact ZamZam {PHONE_DISPLAY}
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Official channels first</h2>
          <p className="text-slate-600 mb-6 max-w-3xl">
            Start with {info.name}&apos;s verified support phone and website — not a number from a search ad or a pop-up that offers to fix the printer if you call now.
          </p>
          <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <BrandOfficialContact brand={brand} embedded />
          </div>
        </section>

        <section className="mb-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Avoid support scams</h2>
          <p className="text-slate-700 max-w-3xl">
            Legitimate {info.name} support will not ask for gift cards, remote control of your PC, or passwords over an unsolicited call. Type the support address yourself, or use the website link on this page. ZamZam is an independent printer support service and is not {info.name}.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">When to call us</h2>
          <p className="text-slate-600 mb-4 max-w-3xl">
            Call ZamZam when printer setup, offline status, or a driver problem needs a remote session and you do not want to wait on the {info.name} line. Use {info.name}&apos;s own number for warranty repairs, billing, and account issues.
          </p>
          <a href={PHONE_HREF} className="text-blue-700 font-semibold hover:underline">
            Call {PHONE_DISPLAY}
          </a>
          {info.fixes?.length ? (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Try a fix first</h3>
              <ul className="space-y-2">
                {info.fixes.map((fix) => (
                  <li key={fix.href}>
                    <Link href={fix.href} className="text-blue-700 font-medium hover:underline">
                      {fix.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">More brand customer service</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {others.map((other) => (
              <li key={other.blogSlug}>
                <Link
                  href={`/brands/${other.name.toLowerCase()}/printer-support`}
                  className="block p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 font-semibold text-slate-900"
                >
                  {other.name} Customer Service
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href="/brands" className="text-blue-700 font-medium hover:underline">
              All brands
            </Link>
          </p>
        </section>

        <section className="mt-16 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently asked questions</h2>
          <FAQAccordionClient faqs={faqs} />
        </section>
      </main>
    </>
  );
}
