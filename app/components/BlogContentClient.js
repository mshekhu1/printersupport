"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { slugify } from '@/lib/utils'

export default function BlogContentClient({ content, allowLinks = true, wrapperClass = 'prose max-w-none' }) {
  if (!content) return null

  return (
    <div className={wrapperClass}>
      <ReactMarkdown
        // remarkGfm for tables/strikethrough, remarkBreaks to convert single newlines to <br>
        remarkPlugins={[remarkGfm, remarkBreaks]}
        // Render raw HTML (rehypeRaw) but sanitize it (rehypeSanitize) to avoid XSS
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // Headings
          h1: ({ node, ...props }) => <h1 className="text-3xl font-extrabold my-4" {...props} />,
          h2: ({ node, children, ...props }) => {
            const getNodeText = (node) => {
              if (['string', 'number'].includes(typeof node)) return node
              if (node instanceof Array) return node.map(getNodeText).join('')
              if (typeof node === 'object' && node?.props?.children) return getNodeText(node.props.children)
              return ''
            }
            const id = slugify(getNodeText(children))
            return <h2 id={id} className="text-2xl font-bold my-3 scroll-mt-24" {...props}>{children}</h2>
          },
          h3: ({ node, children, ...props }) => {
            const getNodeText = (node) => {
              if (['string', 'number'].includes(typeof node)) return node
              if (node instanceof Array) return node.map(getNodeText).join('')
              if (typeof node === 'object' && node?.props?.children) return getNodeText(node.props.children)
              return ''
            }
            const id = slugify(getNodeText(children))
            return <h3 id={id} className="text-xl font-semibold my-2 scroll-mt-24" {...props}>{children}</h3>
          },
          h4: ({ node, ...props }) => <h4 className="text-lg font-semibold my-2" {...props} />,
          // Paragraphs and images
          p: ({ node, children, ...props }) => {
            const onlyImage = node.children && node.children.length === 1 && node.children[0].tagName === 'img'
            if (onlyImage) {
              const alt = node.children[0].properties && node.children[0].properties.alt
              return (
                <figure className="my-6">
                  {children}
                  {alt && <figcaption className="text-sm text-gray-500 mt-2">{alt}</figcaption>}
                </figure>
              )
            }
            return <p className="my-4 text-gray-800 leading-relaxed" {...props}>{children}</p>
          },
          img: ({ node, ...props }) => (
            <img {...props} alt={props.alt || ''} loading="lazy" className="max-w-full h-auto rounded shadow-sm" />
          ),
          // Lists
          ul: ({ node, ...props }) => <ul className="list-disc ml-6 my-3" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal ml-6 my-3" {...props} />,
          li: ({ node, ...props }) => <li className="my-1 leading-relaxed" {...props} />,
          // Blockquote & code
          blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4 text-gray-700" {...props} />,
          code: ({ node, inline, className, children, ...props }) => (
            inline
              ? <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-600 font-mono text-sm" {...props}>{children}</code>
              : <pre className="bg-gray-100 p-3 rounded-md overflow-auto text-sm"><code className={className} {...props}>{children}</code></pre>
          ),
          // Tables
          table: ({ node, ...props }) => (
            <div className="overflow-auto my-4">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => <th className="px-4 py-2 bg-gray-50 text-left text-sm font-semibold" {...props} />,
          td: ({ node, ...props }) => <td className="px-4 py-2 text-sm" {...props} />,
          a: ({ node, children, ...props }) => {
            if (!allowLinks) {
              // Render as styled span to avoid nested <a> when used inside link-wrapped cards
              return <span className={(props.className || '') + ' text-blue-600 underline'}>{children}</span>
            }
            return <a {...props} target={props.target || '_blank'} rel={props.rel || 'noopener noreferrer'}>{children}</a>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
