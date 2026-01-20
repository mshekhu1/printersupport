"use client"

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import BlogContentClient from './BlogContentClient'

export default function BlogListClient({ blogs = [] }) {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('newest')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let items = blogs.slice() || []
    if (q) {
      items = items.filter(b => {
        const hay = `${b.title} ${b.description || ''} ${b.author || ''}`.toLowerCase()
        return hay.includes(q)
      })
    }

    items.sort((a, b) => {
      if (sort === 'newest') return new Date(b.date_posted) - new Date(a.date_posted)
      if (sort === 'oldest') return new Date(a.date_posted) - new Date(b.date_posted)
      return 0
    })

    return items
  }, [blogs, query, sort])

  const estimateReadTime = (text = '') => {
    const words = (text || '').trim().split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.ceil(words / 200))
  }

  const hero = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="px-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Search articles"
            />
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 border rounded-md text-sm">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          <div className="text-sm text-gray-600">{filtered.length} article{filtered.length !== 1 ? 's' : ''}</div>
        </div>
      </div>

      {hero && (
        <section className="mb-8 bg-white rounded-lg overflow-hidden shadow-lg border">
          <div className="md:flex">
            {hero.image && (
              <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
                <img src={hero.image} alt={hero.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-6 md:flex-1">
              <div className="text-sm text-gray-500 mb-2">{new Date(hero.date_posted).toLocaleDateString('en-US')} • {hero.author} • {estimateReadTime(hero.description)} min read</div>
              <h2 className="text-2xl font-bold mb-3">{hero.title}</h2>
              <div className="text-gray-700 mb-4" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                <BlogContentClient content={(hero.description || '').split(/\n\s*\n/)[0]} allowLinks={false} wrapperClass="prose-sm max-w-none" />
              </div>
              <div className="flex items-center gap-3">
                <Link href={`/blog/${hero.slug}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">Read article</Link>
                <a href="tel:+18887694448" className="inline-block border border-blue-600 text-blue-600 px-3 py-2 rounded-md hover:bg-blue-50">Call</a>
              </div>
            </div>
          </div>
        </section>
      )}

      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((b) => (
          <li key={b.id} className="bg-white shadow-sm hover:shadow-lg transform transition hover:-translate-y-1 rounded-lg overflow-hidden">
            <Link href={`/blog/${b.slug}`} className="block group" aria-label={`Read ${b.title}`}>
              {b.image ? (
                <div className="h-44 md:h-48 w-full overflow-hidden bg-gray-100">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform" />
                </div>
              ) : (
                <div className="h-44 md:h-48 w-full bg-linear-to-r from-gray-100 to-gray-50" />
              )}

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{b.title}</h3>
                <div className="text-xs text-gray-500 mb-3">{new Date(b.date_posted).toLocaleDateString('en-US')} • {b.author}</div>
                <div className="text-sm text-gray-700 mb-4" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                  <BlogContentClient content={(b.description || '').split(/\n\s*\n/)[0]} allowLinks={false} wrapperClass="prose-sm max-w-none" />
                </div>
              </div>
            </Link>

            {/* Action row should be outside the Link to avoid nested <a> tags */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-center justify-between">
                <Link href={`/blog/${b.slug}`} className="text-sm font-medium text-blue-600">Read article →</Link>
                <a href="tel:+18887694448" className="hidden md:inline-block bg-blue-600 text-white px-3 py-1.5 rounded-md font-semibold hover:bg-blue-700">Call</a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <div className="mt-12 text-center text-gray-600">No articles found. Try a different search.</div>
      )}
    </div>
  )
}
