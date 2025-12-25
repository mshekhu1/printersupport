export const generateFaqJsonLd = (faqs) => {
  if (!faqs || !faqs.length) return '';
  const faqEntities = faqs
    .filter((f) => f.question && f.answer)
    .map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    }));
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqEntities,
    },
    null,
    2
  );
};

// New helper: strip common markdown syntax to get plain text for meta descriptions
export const stripMarkdown = (md) => {
  if (!md) return ''
  // Remove image and link markdown: ![alt](url) and [text](url)
  let s = md.replace(/!\[.*?\]\(.*?\)/g, '')
  s = s.replace(/\[(.*?)\]\(.*?\)/g, '$1')
  // Remove code fences and inline code
  s = s.replace(/```[\s\S]*?```/g, '')
  s = s.replace(/`([^`]*)`/g, '$1')
  // Remove remaining markdown characters # * _ > -
  s = s.replace(/[#*>_\-~]/g, '')
  // Collapse whitespace
  s = s.replace(/\s+/g, ' ').trim()
  return s
}

export const generateArticleJsonLd = ({ title, description, author, datePublished, image, url }) => {
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      author: {
        '@type': 'Person',
        name: author || 'Printer Support',
      },
      datePublished: datePublished,
      image: image || undefined,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    },
    null,
    2
  )
}

export const generateBreadcrumbJsonLd = (items = []) => {
  const itemList = items.map((it, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: it.name,
    item: it.url
  }))
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemList
  }, null, 2)
}

export const estimateReadTime = (text = '') => {
  const words = (text || '').trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}