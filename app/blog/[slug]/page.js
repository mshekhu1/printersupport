// app/blog/[slug]/page.js
import { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient'
import BlogContentClient from '@/app/components/BlogContentClient'
import ScrollRevealClient from '@/app/components/ScrollRevealClient'
import TableOfContents from '@/app/components/TableOfContents'
import { stripMarkdown, estimateReadTime } from '@/lib/utils'
import { breadcrumbList, article, faqPage, stringifySchema } from '@/lib/schema'
import { getBlogSeo } from '@/lib/blogSeo'

// ISR: revalidate every hour. Remove this to go fully static.
export const revalidate = 3600

const SITE_URL = 'https://www.zamzamprint.com'

/**
 * Cached fetch — deduplicates the Supabase call so generateMetadata
 * and the page component share the same request within one render cycle.
 */
const getBlogBySlug = cache(async (slug) => {
  if (!slug) return null
  const { data, error } = await supabase
    .from('blogs')
    .select('id, title, content, description, meta_title, meta_description, meta_keywords, slug, image, date_posted, author, faqs')
    .eq('slug', slug)
    .single()
  if (error) {
    console.error('Error fetching blog:', error)
    return null
  }
  return data
})

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export async function generateMetadata({ params }) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  if (!blog) return notFound()

  const seo = getBlogSeo(blog.slug)
  const title = seo.meta?.title || blog.meta_title || blog.title
  const description = (
    seo.meta?.description ||
    stripMarkdown(blog.meta_description || blog.description || '')
  ).slice(0, 160)
  const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`
  const ogImage = blog.image || `${SITE_URL}/side-view-employee-using-printer.jpg`
  const robots = seo.noindex
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : { index: true, follow: true, googleBot: { index: true, follow: true } }

  return {
    title,
    description,
    keywords: blog.meta_keywords || undefined,
    alternates: { canonical: canonicalUrl },
    robots,
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: 'ZamZam Print Support',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      publishedTime: blog.date_posted,
      authors: blog.author ? [blog.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function BlogSlugPage({ params }) {
  const { slug } = await params
  // Fetch both blog and related blogs in parallel
  const [blog, { data: relatedBlogs = [] }] = await Promise.all([
    getBlogBySlug(slug),
    supabase
      .from('blogs')
      .select('title, slug, image, date_posted, author')
      .neq('slug', slug) // Use slug instead of id for consistency
      .order('date_posted', { ascending: false })
      .limit(3)
  ])

  if (!blog) return notFound()

  const faqs = Array.isArray(blog.faqs) ? blog.faqs : []
  const content = (blog.content && blog.content.trim()) || blog.description || ''
  const seo = getBlogSeo(blog.slug)
  const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`
  const readTime = estimateReadTime(stripMarkdown(content))
  const plainDescription = stripMarkdown(blog.meta_description || blog.description || '')

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: blog.title, url: `/blog/${blog.slug}` },
  ]

  const breadcrumbSchema = breadcrumbList(breadcrumbs, SITE_URL)
  const articleSchema = article({
    headline: blog.title,
    description: plainDescription.slice(0, 160),
    author: blog.author,
    datePublished: blog.date_posted,
    image: blog.image,
    url: canonicalUrl,
  })
  const faqSchema = faqs.length > 0
    ? faqPage(faqs.map((f) => ({ question: f.question, answer: f.answer })))
    : null

  const formattedDate = new Date(blog.date_posted).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <>
      {/* JSON-LD schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema(faqSchema) }} />
      )}

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex flex-wrap items-center gap-1 sm:gap-2">
              {breadcrumbs.map((b, i) => (
                <li key={i} className="inline-flex items-center">
                  {i !== 0 && <span className="mx-1 text-gray-400">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.url} className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                      {b.name}
                    </Link>
                  ) : (
                    <span className="text-gray-900 font-semibold truncate max-w-[160px] sm:max-w-xs">
                      {b.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg:grid lg:grid-cols-3 lg:gap-10 xl:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <header className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
                  {blog.title}
                </h1>

                {/* Author / date / read time */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold shadow-sm">
                      {(blog.author || 'P').slice(0, 1)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{blog.author}</div>
                      <div className="text-[11px] sm:text-xs text-gray-500">
                        {formattedDate} · {readTime} min read
                      </div>
                    </div>
                  </div>
                </div>

              </header>

              {/* Featured image — next/image for automatic optimisation */}
              {blog.image && (
                <figure className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1200}
                    height={630}
                    priority
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                </figure>
              )}

              {/* Article body */}
              <article
                id="article-content"
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8"
              >
                <BlogContentClient content={content} />

                {/* End-of-article soft CTA */}
                <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    <div className="max-w-xl">
                      <strong className="block text-gray-900 text-lg mb-1">Need hands-on help?</strong>
                      <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        ZamZam is an independent remote support service (not the manufacturer). You can request a guided remote session for software and connectivity issues.
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="flex-shrink-0 inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all w-full sm:w-auto font-semibold"
                    >
                      Request a remote session
                    </Link>
                  </div>
                </div>

                {/* FAQs */}
                {faqs.length > 0 && (
                  <section className="mt-10">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                      Frequently asked questions
                    </h2>
                    <div className="space-y-3">
                      {faqs.map((f, i) => (
                        <details
                          key={i}
                          className="group border border-gray-200 rounded-xl bg-gray-50/80 px-4 py-3 sm:px-5 sm:py-4 transition-colors hover:border-blue-300"
                        >
                          <summary className="font-medium cursor-pointer list-none flex items-center justify-between gap-2 text-sm sm:text-base text-gray-900">
                            <span>{f.question}</span>
                            <span className="text-xs text-gray-500 group-open:hidden">+</span>
                            <span className="text-xs text-gray-500 hidden group-open:inline">−</span>
                          </summary>
                          <div className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                            <BlogContentClient content={f.answer || ''} />
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                )}
              </article>

              {/* Related posts */}
              {relatedBlogs.length > 0 && (
                <section className="mt-16 pt-10 border-t border-gray-100">
                  <ScrollRevealClient effect="fade-up">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">You might also like</h2>
                  </ScrollRevealClient>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {relatedBlogs.map((post, i) => (
                      <ScrollRevealClient key={post.slug} effect="fade-up" delay={i * 100}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                        >
                          <div className="relative aspect-video overflow-hidden">
                            <Image
                              src={post.image || '/side-view-employee-using-printer.jpg'}
                              alt={post.title}
                              fill
                              unoptimized
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                              <span>{post.author}</span>
                              <span>
                                {new Date(post.date_posted).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </ScrollRevealClient>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="mt-12 lg:mt-0 lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                <ScrollRevealClient once delay={200}>
                  <div className="p-6 bg-white text-slate-800 rounded-2xl shadow-sm border border-slate-200">
                    <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Independent help</div>
                    <h3 className="text-xl font-bold mb-3 leading-tight tracking-tight">Want a guided remote session?</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      We are not HP, Canon, Brother, or Epson. Request help for software and connectivity printer issues.
                    </p>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center text-sm font-bold px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
                    >
                      Contact ZamZam
                    </Link>
                  </div>
                </ScrollRevealClient>

                <TableOfContents content={content} />

                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wider">Quick Resources</h4>
                  <ul className="space-y-4">
                    {[
                      { label: 'Pricing & Plans', href: '/pricing' },
                      { label: 'Update Drivers', href: '/install-printer-driver' },
                      { label: 'Windows Setup', href: '/printer-setup-windows' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <span className="w-1 h-1 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                    Prefer guided help?
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg">
                    Request an independent remote session for software and connectivity issues. For warranty or hardware repairs, contact the manufacturer.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all w-full"
                  >
                    Request a remote session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}