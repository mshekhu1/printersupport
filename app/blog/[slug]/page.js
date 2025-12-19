import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { supabase } from '@/lib/supabaseClient'
import { notFound } from 'next/navigation'

const stripMarkdown = (md = '') => {
  return md
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/[\#>`~\-*_]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
}

const markdownComponents = {
  h1: ({node, ...props}) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: ({node, ...props}) => <h2 className="text-2xl font-semibold my-3" {...props} />,
  h3: ({node, ...props}) => <h3 className="text-xl font-semibold my-2" {...props} />,
  p: ({node, ...props}) => <p className="my-3 text-gray-800 leading-relaxed" {...props} />,
  a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} target="_blank" rel="noopener noreferrer" />,
  ul: ({node, ...props}) => <ul className="list-disc ml-6 my-2" {...props} />,
  ol: ({node, ...props}) => <ol className="list-decimal ml-6 my-2" {...props} />,
  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700" {...props} />,
  code: ({node, inline, ...props}) => inline 
    ? <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600 font-mono text-sm" {...props} />
    : <pre className="bg-gray-100 p-3 rounded-md overflow-auto my-3"><code {...props} /></pre>,
  table: ({node, ...props}) => <table className="w-full border-collapse border border-gray-300 my-4" {...props} />,
  th: ({node, ...props}) => <th className="border border-gray-300 px-4 py-2 bg-gray-100" {...props} />,
  td: ({node, ...props}) => <td className="border border-gray-300 px-4 py-2" {...props} />,
  tr: ({node, ...props}) => <tr className="border border-gray-300" {...props} />,
}

async function fetchPostBySlug(slug) {
  if (!supabaseConfigValid) {
    console.warn('Supabase configuration invalid; fetch skipped for slug:', slug)
    return null
  }

  const { data, error } = await supabase
    .from('blogs')
    .select('id, title, slug, author, date_posted, description, content, image, meta_title, meta_description, meta_keywords, faqs')
    .eq('slug', slug)
    .limit(1)
    .single()

  if (error) {
    console.error('Supabase fetch error:', error)
    return null
  }
  return data
}

export async function generateMetadata({ params }) {
  const slug = params.slug
  const post = await fetchPostBySlug(slug)
  if (!post) return { title: 'Post not found' }

  const title = post.meta_title || post.title
  const description = post.meta_description || stripMarkdown(post.description || post.content || '').slice(0, 160)
  const keywords = post.meta_keywords ? post.meta_keywords.split(',').map(k => k.trim()) : undefined

  const image = post.image || undefined

  const metadata = {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image, alt: post.title }] : undefined,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      images: image ? [image] : undefined,
    }
  }

  // Optionally add canonical if NEXT_PUBLIC_SITE_URL is set
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (siteUrl) {
    metadata.metadataBase = new URL(siteUrl)
    metadata.alternates = { canonical: `${siteUrl}/blog/${slug}` }
  }

  return metadata
}

export default async function BlogPostPage({ params }) {
  const slug = params.slug
  const post = await fetchPostBySlug(slug)
  if (!post) return notFound()

  const faqJsonLd = (faqs) => {
    if (!Array.isArray(faqs) || faqs.length === 0) return null
    const mainEntity = faqs
      .filter(f => f.question && f.answer)
      .map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.answer }
      }))

    return JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': mainEntity }, null, 2)
  }

  const articleJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'image': post.image ? [post.image] : undefined,
    'author': { '@type': 'Person', 'name': post.author || 'Author' },
    'datePublished': post.date_posted,
    'description': post.meta_description || stripMarkdown(post.description || post.content || ''),
    'mainEntityOfPage': { '@type': 'WebPage', '@id': (process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}` : undefined) }
  }, null, 2)

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white my-8 rounded-lg shadow-sm">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900">{post.title}</h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date_posted}>{post.date_posted}</time>
          {post.meta_keywords && (
            <div className="ml-4 flex flex-wrap gap-2">
              {post.meta_keywords.split(',').map((k, i) => (
                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{k.trim()}</span>
              ))}
            </div>
          )}
        </div>

        {post.image && (
          <div className="mt-6 rounded overflow-hidden border border-gray-200">
            <div className="relative w-full h-72 md:h-96">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        )}

        <p className="mt-4 text-gray-700 text-lg">{post.meta_description || stripMarkdown(post.description || post.content || '').slice(0, 220)}</p>
      </header>

      <section className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {post.description || post.content || ''}
        </ReactMarkdown>
      </section>

      {post.faqs && post.faqs.length > 0 && (
        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-3">Frequently asked questions</h3>
          <div className="space-y-3">
            {post.faqs.map((f, i) => (
              <div key={i} className="p-3 border border-gray-100 rounded">
                <div className="font-medium">{f.question}</div>
                <div className="mt-1 text-gray-700">{f.answer}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      {post.faqs && post.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd(post.faqs) }} />
      )}

    </article>
  )
}
