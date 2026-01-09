import { supabase } from "@/lib/supabaseClient"

export default async function sitemap() {
  const siteUrl = 'https://www.zamzamprint.com'
  const lastModified = new Date()

  // ---------- STATIC PAGES ----------
  const staticPages = [
    '',
    'pricing',


    'privacy-policy',
    'refund-policy',
    'terms-of-service',

    'printer-printing-blank-pages',
    'printer-paper-jam',
    'printer-error-codes',
    'printer-offline',
    'wireless-printer-setup',
    'printer-driver-installation',
    'printer-spooler-error',
    'printer-not-connecting',

    'hp-printer-offline',
    'hp-printer-not-printing',
    'canon-printer-offline',
    'epson-printer-not-printing',
    'brother-printer-offline',

    'blog',
    'blog-uploads',

    'brands/hp',
    'brands/canon',
    'brands/epson',
    'brands/brother',
    'brands/samsung',
  ]

  const staticUrls = staticPages.map((page) => ({
    url: page === '' ? siteUrl : `${siteUrl}/${page}`,
    lastModified,
  }))

  // ---------- BLOG DETAIL PAGES ----------
  let blogUrls = []

  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('slug')

    if (!error && data) {
      blogUrls = data.map((blog) => ({
        url: `${siteUrl}/blog/${blog.slug}`,
        lastModified,
      }))
    }
  } catch (err) {
    // fail silently (sitemap must still work)
  }

  return [...staticUrls, ...blogUrls]
}
