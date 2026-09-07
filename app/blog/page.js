// app/blog/page.js
import Link from 'next/link'
import { Suspense } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { stripMarkdown } from '@/lib/utils'
import BlogListClient from '../components/BlogListClient'
import Pagination from '../components/Pagination'
import { breadcrumbList, stringifySchema } from '@/lib/schema'

// ISR: revalidate every 30 minutes — good balance for a blog listing page
export const revalidate = 1800

export const metadata = {
  title: 'Printer Support Blog | Troubleshooting Guides & Tips (US)',
  description:
    'Latest printer troubleshooting guides, setup tutorials, driver fixes and expert tips. Actionable step-by-step help for HP, Canon, Epson, Brother & more.',
  keywords: [
    'printer support blog',
    'printer troubleshooting',
    'printer repair guide',
    'printer setup tutorial',
    'printer driver help',
    'fix printer offline',
    'printer not printing fix',
  ],
  openGraph: {
    title: 'Printer Support Blog – Practical Fixes & Guides',
    description:
      'Helpful printer troubleshooting articles, step-by-step guides and expert tips for US customers.',
    type: 'website',
    url: 'https://www.zamzamprint.com/blog',
    images: [{ url: 'https://www.zamzamprint.com/side-view-employee-using-printer.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Support Blog – Practical Fixes & Guides',
    description:
      'Helpful printer troubleshooting articles, step-by-step guides and expert tips for US customers.',
    images: ['https://www.zamzamprint.com/side-view-employee-using-printer.jpg'],
  },
  alternates: { canonical: 'https://www.zamzamprint.com/blog' },
}

const BLOGS_PER_PAGE = 12

async function getBlogs(page = 1) {
  try {
    const from = (page - 1) * BLOGS_PER_PAGE
    const to = from + BLOGS_PER_PAGE - 1

    const { data, count, error } = await supabase
      .from('blogs')
      .select('id, title, slug, description, image, date_posted, author', { count: 'exact' })
      .order('date_posted', { ascending: false })
      .range(from, to)

    if (error) {
      console.error('Supabase blogs error:', error)
      return { blogs: [], count: 0 }
    }

    // Generate a plain-text excerpt on the server so the client component
    // never needs to import the heavy markdown parser just for the list view.
    const blogs = (data || []).map((b) => ({
      ...b,
      excerpt: stripMarkdown(b.description || '').slice(0, 160),
    }))

    return { blogs, count: count || 0 }
  } catch (err) {
    console.error('Unexpected error fetching blogs:', err)
    return { blogs: [], count: 0 }
  }
}

// Skeleton shown while the blog list streams in
function BlogListSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-6">
          <div className="h-48 bg-gray-200 rounded-lg mb-4" />
          <div className="h-8 w-4/5 bg-gray-200 rounded mb-3" />
          <div className="h-4 bg-gray-200 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      ))}
    </div>
  )
}

export default async function BlogPage(props) {
  const searchParams = await props.searchParams
  const page = Math.max(1, Number(searchParams?.page) || 1)

  const { blogs, count } = await getBlogs(page)
  const totalPages = Math.ceil(count / BLOGS_PER_PAGE)

  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Hero */}
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-5">
            Printer Support Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practical troubleshooting guides, setup tutorials, driver fixes and expert tips to solve
            your printer problems quickly.
          </p>
        </header>

        {/* Quick CTA */}
        <div className="mb-12 lg:mb-16 p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white shadow-xl text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">Free Diagnosis</p>
          <p className="text-xl sm:text-2xl font-bold mb-2">Still stuck after following this guide?</p>
          <p className="text-blue-100 text-lg mb-6">Don’t waste 2 hours. Our US tech expert can fix it remotely in 15 mins via screen share.</p>
          <Link
            href="tel:+18887594448"
            className="inline-flex flex-col items-center px-8 py-3 bg-white text-blue-700 rounded-xl shadow-2xl hover:bg-gray-50 hover:scale-[1.02] transition-all duration-300"
          >
            <span className="font-black text-xl">Call +1 888 759 4448</span>
          </Link>
        </div>

        {/* Blog list — Suspense key resets skeleton on page change */}
        <Suspense key={page} fallback={<BlogListSkeleton />}>
          <BlogListClient blogs={blogs} />
        </Suspense>

        <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Still stuck after following this guide?
              </h3>
              <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-1">
                Don’t waste 2 hours.
              </p>
              <p className="text-blue-200 text-base sm:text-lg">
                Our US tech expert can fix it remotely in 15 mins via screen share.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <Link
                href="tel:+18887594448"
                className="flex flex-col items-center justify-center bg-white text-blue-900 px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-blue-50 hover:-translate-y-1 transition-all group w-full"
              >
                <span className="font-black text-2xl group-hover:text-blue-700 transition-colors">Call +1 888 759 4448</span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mt-2">Free Diagnosis</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}