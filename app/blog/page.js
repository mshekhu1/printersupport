export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { stripMarkdown } from '@/lib/utils'
import BlogListClient from '../components/BlogListClient'

export const metadata = {
  title: 'Printer Support Blog | Printer Troubleshooting Guides & Tips (US)',
  description: 'Latest printer support articles and troubleshooting guides. Learn how to fix printer issues, install drivers, resolve connectivity problems, and more. Expert tips for US customers.',
  keywords: [
    'printer support blog',
    'printer troubleshooting guides',
    'printer help articles',
    'printer tips',
    'printer repair guides',
    'printer setup guides',
    'printer driver help',
    'printer blog',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Printer Support Blog | Printer Troubleshooting Guides & Tips',
    description: 'Latest printer support articles and troubleshooting guides. Learn how to fix printer issues and get expert tips.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/blog',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Support Blog',
    description: 'Latest printer support articles and troubleshooting guides.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

async function getBlogs() {
  const { data, error } = await supabase
    .from('blogs')
    .select('id, title, slug, description, image, date_posted, author')
    .order('date_posted', { ascending: false })

  if (error) {
    console.error('Error fetching blogs:', error)
    return []
  }

  return data || []
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">Printer Support Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Helpful guides, troubleshooting steps, and how-tos for printers — actionable fixes and step-by-step tutorials to get you back up and printing fast.
          </p>
        </header>

        {/* CTA Banner */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white shadow-xl text-center">
          <p className="text-lg font-semibold mb-2">
            Need help now? Get fast same-day remote printer support
          </p>
          <a href="tel:+18887694448" className="inline-block mt-3 px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:scale-105">
            Call: +1-888-769-4448
          </a>
        </div>

        {/* Blog List */}
        <div className="mb-12">
          <BlogListClient blogs={blogs} />
        </div>

        {/* Related Resources */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Popular Support Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/printer-not-printing" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center border border-blue-200 hover:border-blue-400">
              <p className="font-medium text-gray-800">Printer Not Printing</p>
            </Link>
            <Link href="/printer-offline-fix" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center border border-blue-200 hover:border-blue-400">
              <p className="font-medium text-gray-800">Printer Offline Fix</p>
            </Link>
            <Link href="/install-printer-driver" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center border border-blue-200 hover:border-blue-400">
              <p className="font-medium text-gray-800">Install Printer Driver</p>
            </Link>
            <Link href="/printer-not-connecting-wifi" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-center border border-blue-200 hover:border-blue-400">
              <p className="font-medium text-gray-800">Wi-Fi Connection Issues</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}