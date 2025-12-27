export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import BlogContentClient from '@/app/components/BlogContentClient'
import { stripMarkdown, generateArticleJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd, estimateReadTime } from '@/lib/utils'

async function getBlogBySlug(slug) {
  if (!slug) return null
  const { data, error } = await supabase.from('blogs').select('*').eq('slug', slug).single()
  if (error) {
    console.error('Error fetching blog:', error)
    return null
  }
  return data
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  if (!blog) return { title: 'Blog' }

  const title = blog.meta_title || blog.title
  const rawDescription = blog.meta_description || blog.description || ''
  const description = stripMarkdown(rawDescription).slice(0, 160)

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://zamzamprint.com').replace(/^\/+/, '').replace(/\/+$/,'').replace(/^"|"$/g, '')
  const canonicalUrl = `${siteUrl}/blog/${blog.slug}`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      images: blog.image ? [blog.image] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: blog.image ? [blog.image] : undefined
    }
  }
}

export default async function BlogSlugPage({ params }) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  if (!blog) return notFound()

  const faqs = Array.isArray(blog.faqs) ? blog.faqs : []

  // Prefer main 'content' for the article body; fall back to 'description' if no content exists
  const content = blog.content || blog.description || ''
  const plainDescription = stripMarkdown(blog.meta_description || blog.description || '')
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://zamzamprint.com').replace(/^\/+/, '').replace(/\/+$/,'').replace(/^"|"$/g, '')
  const canonicalUrl = `${siteUrl}/blog/${blog.slug}`
  const readTime = estimateReadTime(stripMarkdown(content || ''))

  const breadcrumbs = [
    { name: 'Home', url: `${siteUrl}` },
    { name: 'Blog', url: `${siteUrl}/blog` },
    { name: blog.title, url: canonicalUrl }
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
        <ol className="list-reset inline-flex items-center space-x-2">
          {breadcrumbs.map((b, i) => (
            <li key={i} className="inline-flex items-center">
              {i !== 0 && <span className="mx-2">/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link href={b.url} className="text-blue-600 hover:underline">{b.name}</Link>
              ) : (
                <span className="text-gray-800 font-semibold">{b.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Breadcrumb JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateBreadcrumbJsonLd(breadcrumbs) }} />

      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">{blog.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">{(blog.author || 'P').slice(0,1)}</div>
                <div>
                  <div className="font-medium text-gray-900">{blog.author}</div>
                  <div className="text-xs text-gray-500">{new Date(blog.date_posted).toLocaleDateString('en-US')} • {readTime} min read</div>
                </div>
              </div>
            </div>

            { (blog.meta_description || blog.description) && (
              <div className="mt-4 max-w-3xl">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  {/* Render full meta_description/description as sanitized markdown to preserve lists, spacing, and headings */}
                  <BlogContentClient content={(blog.meta_description || blog.description)} wrapperClass="prose max-w-none" allowLinks={true} />
                </div>
                {blog.content && (
                  <div className="mt-2">
                    <a href="#article-content" className="text-sm text-blue-600 font-medium hover:underline">Read full article →</a>
                  </div>
                )}
              </div>
            )}
          </header>

          {blog.image && (
            <figure className="mb-6 rounded overflow-hidden shadow-sm">
              <img src={blog.image} alt={blog.title} className="w-full h-64 md:h-80 object-cover" />
            </figure>
          )}

          <article id="article-content" className="prose lg:prose-lg max-w-3xl mx-auto">
            <BlogContentClient content={content} />

            <div className="mt-8 p-4 rounded-lg shadow-sm border border-blue-100 bg-linear-to-r from-blue-50 to-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <strong className="block text-gray-900">Need help right away?</strong>
                  <div className="text-sm text-gray-700 mt-1">Call our technicians for fast assistance.</div>
                </div>
                <div>
                  <a href="tel:+18887694448" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-blue-700">Call +1-888-769-4448</a>
                </div>
              </div>
            </div>

            {faqs.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <details key={i} className="border rounded p-4">
                      <summary className="font-medium cursor-pointer">{f.question}</summary>
                      <div className="mt-3 text-gray-700"><BlogContentClient content={f.answer || ''} /></div>
                    </details>
                  ))}
                </div>
              </section>
            )}

          </article>
        </div>

        <aside className="mt-8 lg:mt-0 lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md">
              <div className="text-sm font-semibold">Get expert help now</div>
              <div className="mt-3">
                <a href="tel:+18887694448" className="w-full inline-block text-center bg-white text-blue-600 font-bold px-4 py-2 rounded-md">Call +1-888-769-4448</a>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="text-sm font-semibold mb-2">Quick links</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="text-blue-600 hover:underline">Pricing & Plans</Link></li>
                <li><Link href="/install-printer-driver" className="text-blue-600 hover:underline">Driver Installation</Link></li>
                <li><Link href="/printer-setup-windows" className="text-blue-600 hover:underline">Printer Setup for Windows</Link></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* Article JSON-LD for better SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateArticleJsonLd({
        title: blog.title,
        description: plainDescription.slice(0, 160),
        author: blog.author,
        datePublished: blog.date_posted,
        image: blog.image,
        url: canonicalUrl
      }) }} />

      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateFaqJsonLd(faqs) }} />
      )}

    </main>
  )
}