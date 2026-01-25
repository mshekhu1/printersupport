

// New helper: strip common markdown syntax to get plain text for meta descriptions
export const stripMarkdown = (md) => {
  if (!md) return ''
  // 1. Remove HTML tags
  let s = md.replace(/<[^>]*>/g, '')
  // 2. Remove image and link markdown: ![alt](url) and [text](url)
  s = s.replace(/!\[.*?\]\(.*?\)/g, '')
  s = s.replace(/\[(.*?)\]\(.*?\)/g, '$1')
  // 3. Remove code fences and inline code
  s = s.replace(/```[\s\S]*?```/g, '')
  s = s.replace(/`([^`]*)`/g, '$1')
  // 4. Remove remaining markdown characters # * _ > -
  s = s.replace(/[#*>_\-~]/g, '')
  // 5. Collapse whitespace
  s = s.replace(/\s+/g, ' ').trim()
  return s
}



export const estimateReadTime = (text = '') => {
  const words = (text || '').trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
}