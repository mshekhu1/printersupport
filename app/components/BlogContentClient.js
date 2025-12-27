"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

export default function BlogContentClient({ content }) {
  if (!content) return null

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        // Render raw HTML (rehypeRaw) but sanitize it (rehypeSanitize) to avoid XSS
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // If a paragraph contains only an image, render a figure (allows caption from alt text)
          p: ({ node, children, ...props }) => {
            const onlyImage = node.children && node.children.length === 1 && node.children[0].tagName === 'img'
            if (onlyImage) {
              // children will be the rendered <img />
              const alt = node.children[0].properties && node.children[0].properties.alt
              return (
                <figure className="my-6">
                  {children}
                  {alt && <figcaption className="text-sm text-gray-500 mt-2">{alt}</figcaption>}
                </figure>
              )
            }
            return <p {...props}>{children}</p>
          },
          img: ({ node, ...props }) => (
            <img {...props} alt={props.alt || ''} loading="lazy" className="max-w-full h-auto rounded" />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-auto">
              <table {...props} />
            </div>
          ),
          a: ({ node, ...props }) => (
            <a {...props} target={props.target || '_blank'} rel={props.rel || 'noopener noreferrer'} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
