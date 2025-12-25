export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'

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
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg text-yellow-900 font-semibold text-center">
        Need help now? Call us: <a href="tel:+18887694448" className="underline text-yellow-800">+1-888-769-4448</a> — Fast same-day remote printer support
      </div>
      <h1 className="text-3xl font-bold mb-6">Latest articles</h1>
      <ul className="grid gap-6 md:grid-cols-2">
        {blogs.map((b) => (
          <li key={b.id} className="border rounded p-4">
            <Link href={`/blog/${b.slug}`} className="block">
              {b.image && (
                // Use an img tag to avoid Next Image domain config issues for external images
                <img src={b.image} alt={b.title} className="w-full h-48 object-cover mb-3 rounded" />
              )}

              <h2 className="text-xl font-semibold">{b.title}</h2>
              <p className="text-sm text-gray-600">{new Date(b.date_posted).toLocaleDateString()}</p>
              <p className="mt-2 text-gray-700">{b.description}</p>
            </Link>
            <div className="mt-4">
              <a href="tel:+18887694448" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">Call +1-888-769-4448</a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}