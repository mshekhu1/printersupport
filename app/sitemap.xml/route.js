import { supabase } from '@/lib/supabaseClient'
import { US_STATES } from '@/lib/usStates'

export async function GET() {
  // prefer NEXT_PUBLIC_SITE_URL, then SITE_URL, then fallback to the canonical domain
  const rawSite = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.zamzamprint.com'
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

  // Generate state-specific pages
  const statePages = US_STATES.map((state) => `printer-support/${state.code}`)

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
    // append state pages
    ...statePages,
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
