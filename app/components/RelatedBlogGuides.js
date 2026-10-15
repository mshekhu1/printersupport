import Link from 'next/link';
import { getRelatedBlogsForService } from '@/lib/serviceBlogLinks';

/**
 * Related blog guides for a service page — final /blog/{slug} destinations only.
 */
export default function RelatedBlogGuides({
  servicePath,
  title = 'Related Blog Guides',
  className = 'mb-12 p-6 bg-slate-50 border border-slate-200 rounded-lg',
}) {
  const blogs = getRelatedBlogsForService(servicePath);
  if (!blogs.length) return null;

  return (
    <section className={className} aria-label={title}>
      <h2 className="text-2xl font-bold mb-4 text-slate-900">{title}</h2>
      <p className="text-sm text-slate-600 mb-4">
        Deep-dive articles that match this service — open the full guide for step-by-step fixes.
      </p>
      <ul className="grid md:grid-cols-2 gap-3">
        {blogs.map((b) => (
          <li key={b.href}>
            <Link href={b.href} className="text-blue-700 font-medium hover:underline">
              {b.label} →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
