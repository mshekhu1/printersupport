import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Samsung Printer Guides | Offline, Drivers & Setup Help' },
  description:
    'Browse Samsung printer guides for offline status, drivers, setup, and common errors. Start with the full Samsung Printer Support guide or jump to related fixes.',
  alternates: { canonical: 'https://www.zamzamprint.com/brands/samsung' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Samsung Printer Guides | Offline, Drivers & Setup Help',
    description: 'Samsung printer troubleshooting guides and related fix pages in one place.',
    url: 'https://www.zamzamprint.com/brands/samsung',
    siteName: 'ZamZam Print Support',
    type: 'website',
  },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function SamsungBrandPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Brands', url: 'https://www.zamzamprint.com/brands' },
    { name: 'Samsung', url: 'https://www.zamzamprint.com/brands/samsung' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Breadcrumbs items={breadcrumbItems} />
      <header className="mb-10 border-b pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Samsung Printer Guides</h1>
        <p className="text-lg text-slate-600">
          Troubleshooting guides and related fixes for Samsung printers — offline, drivers, setup, and printing issues.
        </p>
      </header>

      <section className="mb-10 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Full support guide</h2>
        <p className="text-slate-600 mb-3">
          Step-by-step Samsung printer support covering the most common failures and remote help options.
        </p>
        <Link
          href="/brands/samsung/printer-support"
          className="inline-flex text-blue-700 font-bold text-lg hover:underline"
        >
          Samsung Printer Support →
        </Link>
      </section>


      <p className="text-slate-600">
        Need a tech now? Call <a href="tel:+18887594448" className="text-blue-700 font-semibold">+1 888 759 4448</a>.
      </p>
    </main>
  );
}
