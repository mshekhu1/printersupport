export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { stripMarkdown } from '@/lib/utils'
import BlogListClient from '../components/BlogListClient'

export const metadata = {
  title: 'Blog - Printer Support',
  description: 'Latest printer support articles and troubleshooting guides.'
}

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
    <main className="container mx-auto px-4 py-10">
      <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg text-yellow-900 font-semibold text-center">
        Need help now? Call us: <a href="tel:+18887694448" className="underline text-yellow-800">+1-888-769-4448</a> — Fast same-day remote printer support
      </div>

      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Latest articles</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">Helpful guides, troubleshooting steps, and how-tos for printers — actionable fixes and step-by-step tutorials to get you back up and printing fast.</p>
      </header>

      <BlogListClient blogs={blogs} />
    </main>
  )
}