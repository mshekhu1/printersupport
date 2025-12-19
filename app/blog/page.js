import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { supabase, supabaseConfigValid } from '@/lib/supabaseClient'

const stripMarkdown = (md = '') => {
  // very small strip for preview purposes
  return md
    .replace(/```[\s\S]*?```/g, '') // code blocks
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/[#>`~\-*_]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
}

// Safely format Supabase errors for logging and UI
const formatError = (err) => {
  try {
    if (!err) return 'Unknown error'
    if (typeof err === 'string') return err
    if (err.message) return err.message
    // Attempt to stringify (may throw if circular)
    const str = JSON.stringify(err)
    return str && str !== '{}' ? str : 'Unknown Supabase error'
  } catch (e) {
    return String(err)
  }
}

export default async function BlogListingPage() {
  if (!supabaseConfigValid) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <div className="p-4 bg-yellow-50 text-yellow-800 rounded">
          Supabase is not configured correctly. Check <code className="bg-gray-100 px-1 rounded">.env.local</code> for <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code> and <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> and restart the dev server.
        </div>
      </div>
    )
  }

  let blogs = []

  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('id, title, slug, author, date_posted, description, image')
      .order('date_posted', { ascending: false })

    if (error) {
      const errMsg = formatError(error)
      // Log a clean, informative message without throwing due to strange error objects
      console.error('Supabase fetch error:', errMsg)

      const isInvalidKey = /invalid api key/i.test(errMsg) || !supabaseConfigValid

      return (
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Blog</h1>
          <div className="p-4 bg-red-50 text-red-700 rounded">
            <div>Failed to load posts. {process.env.NODE_ENV === 'development' ? `(${errMsg})` : ''}</div>

            {isInvalidKey && (
              <div className="mt-3 text-sm text-gray-800 bg-white p-3 rounded border border-yellow-100">
                <strong className="text-red-700">Possible cause:</strong> invalid or missing Supabase configuration.
                <div className="mt-2">
                  Check your <code className="bg-gray-100 px-1 rounded">.env.local</code> for <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code> and <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, then restart the dev server.
                </div>
                <div className="mt-2">
                  Make sure you use the project's <em>anon</em> key (not the service_role key). See <a href="https://supabase.com/docs/guides/auth#project-api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Supabase API keys docs</a> for details.
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }

    blogs = data || []
  } catch (err) {
    console.error('Unexpected error fetching blogs:', err)
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <div className="p-4 bg-red-50 text-red-700 rounded">Failed to load posts.</div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog</h1>

      {(!blogs || blogs.length === 0) ? (
        <div className="p-6 bg-gray-50 text-gray-600 rounded">No posts available.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {post.image && (
                <div className="w-full h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <div className="text-sm text-gray-500 mt-1 mb-3">{post.author} • {post.date_posted}</div>
                <p className="text-gray-700 text-sm">{stripMarkdown(post.description).slice(0, 160)}{post.description && post.description.length > 160 ? '...' : ''}</p>

                <div className="mt-4">
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline font-medium">Read more →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
