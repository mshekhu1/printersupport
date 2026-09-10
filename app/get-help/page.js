import Link from 'next/link';
import { CheckCircle2, Phone, Shield } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/phone';
import { webPage, stringifySchema } from '@/lib/schema';

export const metadata = {
  title: 'Get Remote Printer Help | ZamZam Print Support',
  description:
    'Independent remote printer help for US customers. Call for offline, not printing, drivers, and Wi‑Fi issues. Not affiliated with HP, Canon, Brother, or Epson.',
  alternates: { canonical: 'https://www.zamzamprint.com/get-help' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Get Remote Printer Help',
    description:
      'Independent remote help for printer offline, drivers, and Wi‑Fi. Call during business hours.',
    url: 'https://www.zamzamprint.com/get-help',
    type: 'website',
  },
};

export default function GetHelpLandingPage() {
  const schema = webPage({
    name: 'Get Remote Printer Help',
    description:
      'Independent remote printer help for US customers — offline, drivers, Wi‑Fi, and setup.',
    url: '/get-help',
    breadcrumb: [
      { name: 'Home', url: 'https://www.zamzamprint.com' },
      { name: 'Get Help', url: 'https://www.zamzamprint.com/get-help' },
    ],
  });

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
      />

      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-5 py-12 sm:py-16 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200 mb-3">
            Independent remote printer help · US customers
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Printer offline or not printing?
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mb-8 leading-relaxed mx-auto sm:mx-0">
            ZamZam is an <strong className="text-white">independent</strong> remote support
            service — not HP, Canon, Brother, Epson, or any manufacturer. Call us for software,
            drivers, and connectivity help.
          </p>

          <a
            href={PHONE_HREF}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white text-slate-900 font-bold text-xl px-8 py-5 hover:bg-slate-100"
          >
            <Phone className="w-6 h-6" />
            Call {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-slate-400">
            Hours: Mon–Fri 9AM–7PM ET · Sat 10AM–4PM ET ·{' '}
            <Link href="/pricing" className="underline text-slate-300">
              From $49
            </Link>
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">What we help with</h2>
          <ul className="space-y-2.5">
            {[
              'Printer shows offline',
              'Not printing / stuck queue',
              'Driver install & updates',
              'Wi‑Fi / connection problems',
              'New printer setup (software)',
            ].map((item) => (
              <li key={item} className="flex gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-2 font-bold text-slate-900 mb-3">
            <Shield className="w-5 h-5 text-blue-600" />
            Clear expectations
          </div>
          <ul className="text-sm text-slate-600 space-y-2 mb-6">
            <li>You stay in control of the remote session.</li>
            <li>If we cannot resolve the software issue, you are not charged for that session.</li>
            <li>
              For warranty or hardware repairs, contact the manufacturer. Details in our{' '}
              <Link href="/terms-of-service" className="text-blue-700 underline">
                terms
              </Link>
              .
            </li>
          </ul>
          <a
            href={PHONE_HREF}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-bold px-6 py-4 hover:bg-blue-700"
          >
            <Phone className="w-5 h-5" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-5 py-10 text-center">
          <p className="text-slate-600 mb-4">
            Ready for help? Call now — no form needed.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-bold text-lg px-8 py-4 hover:bg-blue-700"
          >
            <Phone className="w-5 h-5" />
            {PHONE_DISPLAY}
          </a>
          <p className="mt-6 text-sm text-slate-500">
            Need office / company IT support?{' '}
            <Link href="/business" className="text-blue-700 underline">
              Business-only page
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
