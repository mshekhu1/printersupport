import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Brands' },
  description:
    'Customer service guidance for HP, Canon, Epson, Brother, and Samsung, including official phone numbers and support websites.',
  alternates: { canonical: 'https://www.zamzamprint.com/brands' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Brands',
    description: 'Customer service guidance for HP, Canon, Epson, Brother, and Samsung.',
    url: 'https://www.zamzamprint.com/brands',
    siteName: 'ZamZam Print Support',
    type: 'website',
  },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

const BRANDS = [
  { key: 'hp', name: 'HP' },
  { key: 'canon', name: 'Canon' },
  { key: 'epson', name: 'Epson' },
  { key: 'brother', name: 'Brother' },
  { key: 'samsung', name: 'Samsung' },
];

export default function BrandsIndexPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Brands', url: 'https://www.zamzamprint.com/brands' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Breadcrumbs items={breadcrumbItems} />
      <header className="mb-10 border-b pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Brands</h1>
        <p className="text-lg text-slate-600">
          Customer service guidance for HP, Canon, Epson, Brother, and Samsung. Each page lists the official phone number, support website, and how to avoid support scams.
        </p>
      </header>
      <ul className="grid md:grid-cols-2 gap-4">
        {BRANDS.map((b) => (
          <li key={b.key}>
            <Link
              href={`/brands/${b.key}/printer-support`}
              className="block p-5 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <span className="text-xl font-bold text-slate-900">{b.name} Customer Service</span>
              <span className="block text-sm text-blue-700 mt-1 font-medium">Official phone and website →</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
