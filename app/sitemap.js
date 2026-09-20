import { supabase } from '@/lib/supabaseClient';
import { BLOG_CANONICAL_OVERRIDES, NOINDEX_BLOG_SLUGS } from '@/lib/blogSeo';

export const dynamic = 'force-dynamic';

const SITE = 'https://www.zamzamprint.com';
// Update this only when indexable static-page content changes.
// This revision fixed visible phone content shared across the site.
const STATIC_LAST_MODIFIED = new Date('2026-09-20T17:13:54.000Z');

function toValidDate(value) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap() {
  // Money pages first — highest crawl priority for calls
  const staticPages = [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: 'services', priority: 0.95, changefreq: 'weekly' },
    { path: 'contact', priority: 0.9, changefreq: 'monthly' },
    { path: 'pricing', priority: 0.85, changefreq: 'weekly' },
    { path: 'about', priority: 0.7, changefreq: 'monthly' },
    { path: 'blog', priority: 0.75, changefreq: 'daily' },
    { path: 'privacy-policy', priority: 0.3, changefreq: 'yearly' },
    { path: 'refund-policy', priority: 0.3, changefreq: 'yearly' },
    { path: 'terms-of-service', priority: 0.3, changefreq: 'yearly' },

    { path: 'services/printer-offline', priority: 0.95, changefreq: 'weekly' },
    { path: 'services/hp-printer-offline', priority: 0.95, changefreq: 'weekly' },
    { path: 'services/hp-printer-support', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/canon-printer-support', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/epson-printer-support', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/brother-printer-support', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/brother-printer-offline', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/canon-printer-offline', priority: 0.85, changefreq: 'weekly' },
    { path: 'services/hp-printer-not-printing', priority: 0.85, changefreq: 'weekly' },
    { path: 'services/epson-printer-not-printing', priority: 0.85, changefreq: 'weekly' },
    { path: 'services/samsung-printer-support', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-driver-installation', priority: 0.85, changefreq: 'weekly' },
    { path: 'services/wireless-printer-setup', priority: 0.85, changefreq: 'weekly' },
    { path: 'services/printer-not-connecting', priority: 0.85, changefreq: 'weekly' },
    { path: 'services/printer-error-codes', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-spooler-error', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-paper-jam', priority: 0.75, changefreq: 'weekly' },
    { path: 'services/printer-printing-blank-pages', priority: 0.8, changefreq: 'weekly' },
  ];

  const staticUrls = staticPages.map(({ path, priority, changefreq }) => ({
    url: path === '' ? SITE : `${SITE}/${path}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: changefreq,
    priority,
  }));

  let blogUrls = [];
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('slug, date_posted');

    if (error) {
      console.error('Sitemap blogs error:', error.message);
    } else if (data) {
      blogUrls = data
        .filter((blog) => {
          if (!blog?.slug) return false;
          if (NOINDEX_BLOG_SLUGS.has(blog.slug)) return false;
          if (BLOG_CANONICAL_OVERRIDES[blog.slug]?.startsWith('/services/')) return false;
          return true;
        })
        .map((blog) => ({
          url: `${SITE}/blog/${blog.slug}`,
          lastModified: toValidDate(blog.date_posted),
          changeFrequency: 'weekly',
          priority: 0.55,
        }));
    }
  } catch (err) {
    console.error('Sitemap generation error:', err);
  }

  return [...staticUrls, ...blogUrls];
}
