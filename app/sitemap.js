import { supabase } from "@/lib/supabaseClient";

export const dynamic = 'force-dynamic'; // Ensures fresh generation on each request

export default async function sitemap() {
  const siteUrl = 'https://www.zamzamprint.com';
  const lastModified = new Date().toISOString(); // Use ISO for standard format

  // ---------- STATIC PAGES ----------
  const staticPages = [
    { path: '', priority: 1.0, changefreq: 'daily' }, // Homepage high priority
    { path: 'services', priority: 0.9, changefreq: 'weekly' }, // Services listing page
    { path: 'pricing', priority: 0.8, changefreq: 'weekly' },
    { path: 'contact', priority: 0.7, changefreq: 'monthly' },
    { path: 'blog', priority: 0.9, changefreq: 'daily' }, // Blog list high
    { path: 'privacy-policy', priority: 0.5, changefreq: 'monthly' },
    { path: 'refund-policy', priority: 0.5, changefreq: 'monthly' },
    { path: 'terms-of-service', priority: 0.5, changefreq: 'monthly' },
    
    // General printer services
    { path: 'services/printer-offline', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-not-connecting', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-driver-installation', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/wireless-printer-setup', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-error-codes', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-spooler-error', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-paper-jam', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/printer-printing-blank-pages', priority: 0.8, changefreq: 'weekly' },

    // Brand-specific support pages (very targeted, high conversion potential)
    { path: 'services/hp-printer-support', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/hp-printer-offline', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/hp-printer-not-printing', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/canon-printer-support', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/canon-printer-offline', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/epson-printer-support', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/epson-printer-not-printing', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/brother-printer-support', priority: 0.9, changefreq: 'weekly' },
    { path: 'services/brother-printer-offline', priority: 0.8, changefreq: 'weekly' },
    { path: 'services/samsung-printer-support', priority: 0.9, changefreq: 'weekly' },
  ];

  const staticUrls = staticPages.map(({ path, priority, changefreq }) => ({
    url: path === '' ? siteUrl : `${siteUrl}/${path}`,
    lastmod: lastModified,
    priority,
    changefreq,
  }));

  // ---------- BLOG DETAIL PAGES ----------
  let blogUrls = [];
  try {
    const { data, error } = await supabase.from('blogs').select('slug');
    if (error) {
      console.error('Supabase error:', error); // Debugging
    } else if (data) {
      blogUrls = data.map((blog) => ({
        url: `${siteUrl}/blog/${blog.slug}`,
        lastmod: lastModified,
        priority: 0.8, // Blogs medium-high priority
        changefreq: 'weekly',
      }));
      console.log('Fetched blogs:', blogUrls.length); // Debugging
    }
  } catch (err) {
    console.error('Sitemap generation error:', err);
  }

  return [...staticUrls, ...blogUrls];
}