export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

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
  const description = blog.meta_description || (blog.description ? blog.description.slice(0, 160) : '')

  return {
    title,
    description,
    openGraph: {
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

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg text-yellow-900 font-semibold text-center">
        Immediate help: <a href="tel:+18887694448" className="underline text-yellow-800">Call +1-888-769-4448</a>
      </div>
      <article className="prose max-w-none">
        <h1>{blog.title}</h1>
        <p className="text-sm text-gray-600">{new Date(blog.date_posted).toLocaleDateString()} • {blog.author}</p>

        <div className="mt-4 mb-6">
          <a href="tel:+18887694448" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">Call +1-888-769-4448 — Get help now</a>
        </div>

        {blog.image && (
          <img src={blog.image} alt={blog.title} className="w-full h-auto my-6 rounded" />
        )}

        {/* Assume content is stored as HTML */}
        {blog.content ? (
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        ) : (
          <p>{blog.description}</p>
        )}

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-200">
          <strong>Need help right away?</strong> Call <a href="tel:+18887694448" className="font-semibold">+1-888-769-4448</a> to speak with a technician.
        </div>

        {faqs.length > 0 && (
          <section className="mt-8">
            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="border rounded p-4">
                  <h3 className="font-semibold">{f.question}</h3>
                  <p className="mt-2">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  )
}