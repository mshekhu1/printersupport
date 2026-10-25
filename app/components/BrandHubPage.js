import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { getBrandSupport } from '@/lib/brandSupport';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/phone';

export default function BrandHubPage({ brand }) {
  const info = getBrandSupport(brand);
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Brands', url: 'https://www.zamzamprint.com/brands' },
    { name: info.name, url: `https://www.zamzamprint.com/brands/${brand}` },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Breadcrumbs items={breadcrumbItems} />
      <header className="mb-10 border-b pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
          {info.name} Printer Support
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          A technical support guide for offline, driver, and Wi-Fi issues, a repair hub, and the official{' '}
          {info.name} customer service phone and website.
        </p>
      </header>

      <section className="mb-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">{info.name} Printer Support Guide</h2>
        <p className="text-slate-600 mb-3">
          Technical support steps for offline status, drivers, Wi-Fi, and common {info.name} printer
          problems.
        </p>
        <Link
          href={`/brands/${brand}/printer-support`}
          className="inline-flex text-blue-700 font-bold text-lg hover:underline"
        >
          {info.name} Printer Support →
        </Link>
      </section>

      <section className="mb-8 p-6 bg-white border border-slate-200 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">{info.name} Printer Repair Guide</h2>
        <p className="text-slate-600 mb-3">
          Brand repair and maintenance hub with model coverage and links to symptom fixes.
        </p>
        <Link
          href={`/services/${brand}-printer-repair-guide`}
          className="inline-flex text-blue-700 font-bold text-lg hover:underline"
        >
          {info.name} Printer Repair Guide →
        </Link>
      </section>

      <section className="mb-10 p-6 bg-white border border-slate-200 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">{info.name} Customer Service</h2>
        <p className="text-slate-600 mb-3">{info.metaDescription}</p>
        <Link
          href={`/brands/${brand}/customer-service`}
          className="inline-flex text-blue-700 font-bold text-lg hover:underline"
        >
          Contact {info.name} printer customer service phone number →
        </Link>
      </section>

      {info.fixes?.length ? (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Printer fixes</h2>
          <ul className="space-y-2">
            {info.fixes.map((fix) => (
              <li key={fix.href}>
                <Link href={fix.href} className="text-blue-700 font-medium hover:underline">
                  {fix.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="text-slate-600">
        Need a tech now? Call{' '}
        <a href={PHONE_HREF} className="text-blue-700 font-semibold">
          {PHONE_DISPLAY}
        </a>
        .
      </p>
    </main>
  );
}
