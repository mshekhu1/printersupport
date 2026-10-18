import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Epson Printer Guides | Offline, Drivers & Setup Help' },
  description:
    'Browse Epson printer guides for offline status, drivers, setup, and common errors. Start with the full Epson Printer Support guide or jump to related fixes.',
  alternates: { canonical: 'https://www.zamzamprint.com/brands/epson' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Epson Printer Guides | Offline, Drivers & Setup Help',
    description: 'Epson printer troubleshooting guides and related fix pages in one place.',
    url: 'https://www.zamzamprint.com/brands/epson',
    siteName: 'ZamZam Print Support',
    type: 'website',
  },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function EpsonBrandPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Brands', url: 'https://www.zamzamprint.com/brands' },
    { name: 'Epson', url: 'https://www.zamzamprint.com/brands/epson' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Breadcrumbs items={breadcrumbItems} />
      <header className="mb-10 border-b pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Epson Printer Guides</h1>
        <p className="text-lg text-slate-600">
          Troubleshooting guides and related fixes for Epson printers — offline, drivers, setup, and printing issues.
        </p>
      </header>

      <section className="mb-10 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Full support guide</h2>
        <p className="text-slate-600 mb-3">
          Step-by-step Epson printer support covering the most common failures and remote help options.
        </p>
        <Link
          href="/brands/epson/printer-support"
          className="inline-flex text-blue-700 font-bold text-lg hover:underline"
        >
          Epson Printer Support →
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Related Epson fixes</h2>
        <ul className="space-y-2">
          <li><Link href="/services/epson-printer-not-printing" className="text-blue-700 font-medium hover:underline">Epson Printer Not Printing →</Link></li>
        </ul>
      </section>

      <p className="text-slate-600">
        Need a tech now? Call <a href="tel:+18887594448" className="text-blue-700 font-semibold">+1 888 759 4448</a>.
      </p>
    </main>
  );
}
