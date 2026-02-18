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
          <p className="text-lg sm:text-xl font-semibold mb-4">Need your printer fixed right now?</p>
          <Link
            href="tel:+18887594448"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300"
          >
            Call for Fast Help: +1 888 759 4448 →
          </Link>
        </div>

        {/* Blog list — Suspense key resets skeleton on page change */}
        <Suspense key={page} fallback={<BlogListSkeleton />}>
          <BlogListClient blogs={blogs} />
        </Suspense>

        <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />

        <div className="mt-10 text-gray-700 max-w-3xl">
          <p>
            📞 Need immediate help? Call <strong>+1 888 759 4448</strong> and get fast, reliable
            printer support from ZamZam Print experts.
          </p>
        </div>
      </main>
    </div>
  )
}