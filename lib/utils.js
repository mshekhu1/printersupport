

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



export const estimateReadTime = (text = '') => {
  const words = (text || '').trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}