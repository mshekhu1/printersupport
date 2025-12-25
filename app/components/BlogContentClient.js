"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function BlogContentClient({ content }) {
  if (!content) return null

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            // Render a plain img tag to avoid invalid nesting inside <p>
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
