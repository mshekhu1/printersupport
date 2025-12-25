import { supabase } from '@/lib/supabaseClient'

export async function GET() {
  // prefer NEXT_PUBLIC_SITE_URL, then SITE_URL, then fallback to the canonical domain
  const rawSite = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://zamzamprint.com'
  // remove surrounding quotes if env was set with quotes and trim whitespace
  const siteUrl = String(rawSite).replace(/^\s+|\s+$/g, '').replace(/^"|"$/g, '')

  // fetch blog slugs from Supabase if available
  let blogSlugs = []
  try {
    const { data, error } = await supabase.from('blogs').select('slug')
    if (!error && Array.isArray(data)) {
      blogSlugs = data.map((r) => `blog/${r.slug}`)
    }
  } catch (e) {
    // ignore
  }

  const pages = [
    '',
    'pricing',
    'printer-support',
    'install-printer-driver',
    'printer-not-printing',
    'printer-not-connecting-wifi',
    'printer-offline-fix',
    'printer-setup-windows',
    'printer-error-code-fix',
    'privacy-policy',
    'refund-policy',
    'terms-of-service',
    'blog',
    'blog-uploads',
    'brands/hp',
    'brands/canon',
    'brands/epson',
    'brands/brother',
    'brands/samsung',
    // append blog slugs
    ...blogSlugs,
  ]

  const today = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n    ${pages
    .map((page) => {
      const url = `${siteUrl}/${page}`.replace(/\/+$/, '')
      return `\n      <url>\n        <loc>${url}</loc>\n        <lastmod>${today}</lastmod>\n      </url>`
    })
    .join('')}\n  </urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
