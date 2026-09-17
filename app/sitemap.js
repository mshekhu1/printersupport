import { supabase } from '@/lib/supabaseClient';
import { BLOG_CANONICAL_OVERRIDES, NOINDEX_BLOG_SLUGS } from '@/lib/blogSeo';

export const dynamic = 'force-dynamic';

const SITE = 'https://www.zamzamprint.com';

export default async function sitemap() {
  // Money pages first — highest crawl priority for calls
  const staticPages = [
    { path: '', priority: 1.0, changefreq: 'daily', lastModified: '2026-09-07' },
    { path: 'services', priority: 0.95, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'contact', priority: 0.9, changefreq: 'monthly', lastModified: '2026-08-16' },
    { path: 'pricing', priority: 0.85, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'about', priority: 0.7, changefreq: 'monthly', lastModified: '2026-09-07' },
    { path: 'blog', priority: 0.75, changefreq: 'daily', lastModified: '2026-09-07' },
    { path: 'privacy-policy', priority: 0.3, changefreq: 'yearly', lastModified: '2026-01-23' },
    { path: 'refund-policy', priority: 0.3, changefreq: 'yearly', lastModified: '2026-02-17' },
    { path: 'terms-of-service', priority: 0.3, changefreq: 'yearly', lastModified: '2026-01-23' },

    { path: 'services/printer-offline', priority: 0.95, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/hp-printer-offline', priority: 0.95, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/hp-printer-support', priority: 0.9, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/canon-printer-support', priority: 0.9, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/epson-printer-support', priority: 0.9, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/brother-printer-support', priority: 0.9, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/brother-printer-offline', priority: 0.9, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/canon-printer-offline', priority: 0.85, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/hp-printer-not-printing', priority: 0.85, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/epson-printer-not-printing', priority: 0.85, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/samsung-printer-support', priority: 0.8, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/printer-driver-installation', priority: 0.85, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/wireless-printer-setup', priority: 0.85, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/printer-not-connecting', priority: 0.85, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/printer-error-codes', priority: 0.8, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/printer-spooler-error', priority: 0.8, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/printer-paper-jam', priority: 0.75, changefreq: 'weekly', lastModified: '2026-09-07' },
    { path: 'services/printer-printing-blank-pages', priority: 0.8, changefreq: 'weekly', lastModified: '2026-09-07' },
  ];

  let blogUrls = [];
  let latestBlogDate = null;
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('slug, date_posted');

    if (error) {
      console.error('Sitemap blogs error:', error.message);
    } else if (data) {
      const indexableBlogs = data.filter((blog) => {
        if (!blog?.slug) return false;
        if (NOINDEX_BLOG_SLUGS.has(blog.slug)) return false;
        if (BLOG_CANONICAL_OVERRIDES[blog.slug]?.startsWith('/services/')) return false;
        return true;
      });

      blogUrls = indexableBlogs.map((blog) => ({
          url: `${SITE}/blog/${blog.slug}`,
          lastModified: blog.date_posted || undefined,
          changeFrequency: 'weekly',
          priority: 0.55,
      }));

      latestBlogDate = indexableBlogs.reduce((latest, blog) => {
        if (!blog?.date_posted) return latest;
        return !latest || blog.date_posted > latest ? blog.date_posted : latest;
      }, null);
    }
  } catch (err) {
    console.error('Sitemap generation error:', err);
  }

  const staticUrls = staticPages.map(({ path, priority, changefreq, lastModified }) => ({
    url: path === '' ? SITE : `${SITE}/${path}`,
    lastModified: path === 'blog' && latestBlogDate ? latestBlogDate : lastModified,
    changeFrequency: changefreq,
    priority,
  }));

  return [...staticUrls, ...blogUrls];
}
