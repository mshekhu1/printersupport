import Link from 'next/link';
import {
  Building2,
  CheckCircle2,
  Clock,
  Monitor,
  Phone,
  Shield,
  Users,
} from 'lucide-react';
import ContactFormClient from '@/app/components/ContactFormClient';
import FAQAccordionClient from '@/app/components/FAQAccordionClient';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/phone';
import { webPage, stringifySchema } from '@/lib/schema';

export const metadata = {
  title: 'Business Printer IT Support (B2B Only) | ZamZam Print Support',
  description:
    'Independent remote printer IT support exclusively for US businesses and offices. Shared printers, drivers, offline status, and workstation print issues. Not for consumers. Not affiliated with any manufacturer.',
  alternates: { canonical: 'https://www.zamzamprint.com/business' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Business Printer IT Support — B2B Only',
    description:
      'Remote printer troubleshooting exclusively for businesses. Independent IT support — not HP, Canon, Brother, or Epson.',
    url: 'https://www.zamzamprint.com/business',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Is this service for home users?',
    aShort: 'No — businesses and offices only.',
    a: 'No. This page and offer are exclusively for businesses, offices, and organizations. Home / consumer printer support is not sold through this business offer.',
  },
  {
    q: 'Are you affiliated with HP, Canon, Brother, or Epson?',
    aShort: 'No — independent IT support.',
    a: 'No. ZamZam Print Support is an independent remote IT provider and is not affiliated with, endorsed by, or a partner of any printer manufacturer. For warranty or hardware service, contact the manufacturer.',
  },
  {
    q: 'What business printer issues do you handle remotely?',
    aShort: 'Software, drivers, queues, and network print connectivity.',
    a: 'We help with office printers showing offline, shared printer setup, driver installs, print queues/spooler errors, Wi‑Fi/LAN connectivity, and scan-to-folder/email configuration when the issue is software-related.',
  },
  {
    q: 'What are your business hours?',
    aShort: 'Mon–Fri 9AM–7PM ET, Sat 10AM–4PM ET.',
    a: 'Monday–Friday 9:00 AM–7:00 PM Eastern Time, Saturday 10:00 AM–4:00 PM Eastern Time. Sessions are scheduled during these hours.',
  },
];

export default function BusinessLandingPage() {
  const schema = webPage({
    name: 'Business Printer IT Support (B2B Only)',
    description:
      'Independent remote printer IT support exclusively for US businesses and offices.',
    url: '/business',
    breadcrumb: [
      { name: 'Home', url: 'https://www.zamzamprint.com' },
      { name: 'Business', url: 'https://www.zamzamprint.com/business' },
    ],
  });

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
      />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 py-3 text-sm text-slate-600">
          Independent IT service · Not affiliated with HP, Canon, Brother, Epson, or Samsung ·{' '}
          <strong className="text-slate-900">Businesses and offices only</strong>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
              B2B remote printer IT support
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              Keep office printers working — without a site visit
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              ZamZam provides <strong>independent remote printer IT support exclusively for
              businesses</strong> in the United States. We help offices resolve software,
              driver, queue, and network-print issues over a secure remote session.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Shared / network printers offline on workstations',
                'Driver installs and print-server / TCP-IP port setup',
                'Spooler and stuck print queues across staff PCs',
                'New office printer deployment (software side)',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Building2, label: 'Businesses only' },
                { icon: Shield, label: 'Independent (non-OEM)' },
                { icon: Clock, label: 'Mon–Sat business hours' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700"
                >
                  <Icon className="w-4 h-4 text-blue-600" />
                  {label}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-bold text-slate-900 mb-2">Business pricing</h2>
              <p className="text-slate-600 text-sm mb-3">
                Typical remote business ticket:{' '}
                <strong className="text-slate-900">from $79</strong> per session. Multi-seat /
                multi-printer work quoted after triage. See{' '}
                <Link href="/pricing" className="text-blue-700 underline">
                  pricing
                </Link>{' '}
                and{' '}
                <Link href="/refund-policy" className="text-blue-700 underline">
                  refund policy
                </Link>
                .
              </p>
              <p className="text-xs text-slate-500">
                Hardware failures, warranty claims, and manufacturer account issues are outside
                remote software support — we will tell you when that applies.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-700" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Request business support</h2>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              For companies and offices only. Include your company name so we can prioritize
              correctly.
            </p>
            <ContactFormClient variant="business" source="business-landing" />
            <div className="mt-6 pt-6 border-t border-slate-100 text-center text-sm text-slate-600">
              Or call{' '}
              <a href={PHONE_HREF} className="font-semibold text-blue-700">
                {PHONE_DISPLAY}
              </a>{' '}
              and say you need <strong>business printer IT support</strong>.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How business remote support works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: '1. Triage',
                desc: 'Tell us which office printers and workstations are affected.',
              },
              {
                icon: Monitor,
                title: '2. Secure session',
                desc: 'A technician joins with your permission to diagnose software and network print settings.',
              },
              {
                icon: CheckCircle2,
                title: '3. Restore printing',
                desc: 'We focus on getting staff printing again. Hardware needs are flagged clearly.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-200 p-6">
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-14">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Business FAQ</h2>
        <FAQAccordionClient faqs={faqs} />
        <p className="mt-8 text-sm text-slate-500">
          Looking for home / consumer help instead? See{' '}
          <Link href="/get-help" className="text-blue-700 underline">
            /get-help
          </Link>
          . This business offer is not for consumers.
        </p>
      </section>
    </main>
  );
}
