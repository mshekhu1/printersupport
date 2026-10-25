import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: { absolute: 'Printer Support by Brand | HP, Canon, Epson, Brother & Samsung' },
  description:
    'Choose HP, Canon, Epson, Brother, or Samsung for technical support and troubleshooting, a repair hub, and the official customer service phone number and website.',
  alternates: { canonical: 'https://www.zamzamprint.com/brands' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Printer Support by Brand | HP, Canon, Epson, Brother & Samsung',
    description:
      'Choose HP, Canon, Epson, Brother, or Samsung for technical support and troubleshooting, a repair hub, and the official customer service phone number and website.',
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
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Printer Support by Brand
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          HP, Canon, Epson, Brother, and Samsung. Each brand has a technical support guide for
          troubleshooting, a repair hub, and a customer service page with the official phone number
          and website.
        </p>
      </header>
      <ul className="grid md:grid-cols-2 gap-4">
        {BRANDS.map((b) => (
          <li key={b.key} className="p-5 border border-slate-200 rounded-lg">
            <Link href={`/brands/${b.key}`} className="text-xl font-bold text-slate-900 block mb-3 hover:underline">
              {b.name}
            </Link>
            <div className="space-y-2">
              <Link
                href={`/brands/${b.key}/printer-support`}
                className="block text-blue-700 font-medium hover:underline"
              >
                {b.name} Printer Support →
              </Link>
              <Link
                href={`/services/${b.key}-printer-repair-guide`}
                className="block text-blue-700 font-medium hover:underline"
              >
                {b.name} Printer Repair Guide →
              </Link>
              <Link
                href={`/brands/${b.key}/customer-service`}
                className="block text-blue-700 font-medium hover:underline"
              >
                Contact {b.name} printer customer service phone number →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
