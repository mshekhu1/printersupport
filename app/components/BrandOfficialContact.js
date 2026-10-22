import Link from 'next/link';
import { getBrandSupport } from '@/lib/brandSupport';

/**
 * Official manufacturer phone and website, plus the matching customer-service guide.
 */
export default function BrandOfficialContact({ brand, embedded = false }) {
  const info = getBrandSupport(brand);
  const Tag = embedded ? 'div' : 'section';

  return (
    <Tag
      className={embedded ? '' : 'mb-12 p-6 md:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm'}
      aria-label={`Official ${info.name} customer service`}
    >
      {embedded ? null : (
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Official {info.name} customer service
        </h2>
      )}
      <p className="text-slate-600 mb-6 max-w-3xl">{info.hours}</p>

      <dl className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</dt>
          <dd className="mt-2">
            <a href={info.phoneHref} className="text-2xl font-bold text-blue-700 hover:underline">
              {info.phoneDisplay}
            </a>
            {info.phoneAlias ? <p className="text-sm text-slate-500 mt-1">{info.phoneAlias}</p> : null}
            {info.extraPhones?.map((phone) => (
              <p key={phone.href} className="mt-3">
                <a href={phone.href} className="text-lg font-semibold text-blue-700 hover:underline">
                  {phone.display}
                </a>
                {phone.alias ? <span className="block text-sm text-slate-500 mt-1">{phone.alias}</span> : null}
              </p>
            ))}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Website</dt>
          <dd className="mt-2">
            <a
              href={info.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-700 hover:underline break-all"
            >
              {info.websiteLabel}
            </a>
            {info.extraLinks?.map((link) => (
              <p key={link.url} className="mt-3">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:underline"
                >
                  {link.label}
                </a>
              </p>
            ))}
          </dd>
        </div>
      </dl>

      {embedded ? null : (
        <p className="mt-6 text-slate-700">
          <Link href={`/blog/${info.blogSlug}`} className="text-blue-700 font-semibold hover:underline">
            {info.blogLabel} →
          </Link>
        </p>
      )}
    </Tag>
  );
}
