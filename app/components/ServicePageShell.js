import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import FAQAccordionClient from '@/app/components/FAQAccordionClient';
import FAQSchema from '@/app/components/FAQSchema';
import PhoneLink, { PHONE_DISPLAY } from '@/app/components/PhoneLink';
import { service, stringifySchema } from '@/lib/schema';

const SITE = 'https://www.zamzamprint.com';

/**
 * Shared shell for money/service pages: schema, early CTA, article body, FAQ, bottom call.
 */
export default function ServicePageShell({
  breadcrumbItems,
  title,
  intro,
  children,
  faqs = [],
  relatedLinks = [],
  ctaHeadline = 'Need this fixed now?',
  ctaSubcopy = 'A US tech can remote in and usually resolve it in about 15 minutes.',
  footerHeadline = 'Still stuck?',
  footerSubcopy = 'Call for remote printer support — no home visit needed.',
  /** Short plain description for Service JSON-LD */
  serviceDescription,
  /** Path like /services/hp-printer-offline */
  canonicalPath,
}) {
  const path =
    canonicalPath ||
    (breadcrumbItems?.length
      ? breadcrumbItems[breadcrumbItems.length - 1]?.url?.replace(SITE, '')
      : null);
  const absoluteUrl = path
    ? path.startsWith('http')
      ? path
      : `${SITE}${path.startsWith('/') ? path : `/${path}`}`
    : undefined;

  const plainIntro =
    typeof intro === 'string'
      ? intro
      : serviceDescription ||
        `${title} — remote US printer support from ZamZam. Call ${PHONE_DISPLAY}.`;

  const serviceSchema = service({
    name: title,
    description: (serviceDescription || plainIntro).slice(0, 300),
    url: absoluteUrl,
    serviceType: 'Remote Printer Support',
    offers: [
      {
        name: 'Remote printer support session',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(serviceSchema) }}
      />
      {faqs.length > 0 ? <FAQSchema faqs={faqs} /> : null}
      <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
        {breadcrumbItems?.length ? <Breadcrumbs items={breadcrumbItems} /> : null}

        <header className="mb-8 border-b border-slate-200 pb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {title}
          </h1>
          {intro ? <div className="text-lg text-slate-600 leading-relaxed">{intro}</div> : null}
        </header>

        <section className="mb-10 p-5 sm:p-6 border border-slate-200 bg-slate-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <strong className="block text-slate-900 text-lg mb-1">{ctaHeadline}</strong>
              <p className="text-sm text-slate-700 m-0">{ctaSubcopy}</p>
            </div>
            <PhoneLink
              location="service_top_cta"
              className="inline-flex flex-col items-center justify-center bg-blue-700 text-white px-6 py-3 font-bold hover:bg-blue-800 w-full sm:w-auto"
            >
              <span>Call {PHONE_DISPLAY}</span>
              <span className="text-[10px] uppercase tracking-wider text-blue-100 mt-0.5">
                Free diagnosis
              </span>
            </PhoneLink>
          </div>
        </section>

        <div className="service-article space-y-10 mb-12">{children}</div>

        {faqs.length > 0 ? (
          <section className="mt-16 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
            <FAQAccordionClient faqs={faqs} />
          </section>
        ) : null}

        {relatedLinks.length > 0 ? (
          <nav className="mb-12 text-sm text-slate-600" aria-label="Related services">
            <p className="font-semibold text-slate-900 mb-3">Related help</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-700 hover:underline font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <footer className="mt-12 bg-slate-900 text-white p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{footerHeadline}</h3>
          <p className="mb-6 text-slate-300 max-w-2xl mx-auto">{footerSubcopy}</p>
          <PhoneLink
            location="service_footer_cta"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 font-bold"
          >
            Call {PHONE_DISPLAY}
          </PhoneLink>
        </footer>
      </main>
    </>
  );
}
