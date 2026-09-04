/**
 * Blog SEO controls.
 * All blogs stay self-canonical at /blog/{slug} (no service redirects).
 */

/** Posts that must stay out of Google index — empty: all CMS blogs are indexable */
export const NOINDEX_BLOG_SLUGS = new Set();

/** No service canonical overrides — blogs keep /blog/{slug} */
export const BLOG_CANONICAL_OVERRIDES = {};

/** No CTR title/description overrides — blogs use CMS meta_title / meta_description */
export const BLOG_META_OVERRIDES = {};

export function getBlogSeo(slug) {
  const noindex = NOINDEX_BLOG_SLUGS.has(slug);
  const canonicalPath = BLOG_CANONICAL_OVERRIDES[slug] || `/blog/${slug}`;
  const meta = BLOG_META_OVERRIDES[slug] || null;
  return { noindex, canonicalPath, meta };
}
