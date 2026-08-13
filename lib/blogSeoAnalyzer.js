import { authorForSlug } from '@/lib/authors';
import { getBlogSeo } from '@/lib/blogSeo';
import { slugify, stripMarkdown } from '@/lib/utils';

const SITE_HOST = 'www.zamzamprint.com';
const YEAR = new Date().getFullYear();

const BRANDS = [
  { key: 'hp', label: 'HP', patterns: [/\bhp\b/i, /hewlett/i] },
  { key: 'canon', label: 'Canon', patterns: [/\bcanon\b/i, /\bpixma\b/i] },
  { key: 'brother', label: 'Brother', patterns: [/\bbrother\b/i] },
  { key: 'epson', label: 'Epson', patterns: [/\bepson\b/i, /\becotank\b/i] },
  { key: 'samsung', label: 'Samsung', patterns: [/\bsamsung\b/i] },
];

const INTENT_PHRASES = [
  { key: 'offline', label: 'printer offline', re: /\boffline\b/i },
  { key: 'not_printing', label: 'not printing', re: /\bnot printing\b|\bwont print\b|\bwon't print\b/i },
  { key: 'driver', label: 'printer driver', re: /\bdriver\b/i },
  { key: 'wifi', label: 'wireless printer setup', re: /\bwi-?fi\b|\bwireless\b/i },
  { key: 'error', label: 'printer error', re: /\berror\b|\bcode\b/i },
  { key: 'paper_jam', label: 'paper jam', re: /\bpaper jam\b/i },
  { key: 'blank', label: 'blank pages', re: /\bblank\b/i },
  { key: 'setup', label: 'printer setup', re: /\bsetup\b|\binstall\b/i },
  { key: 'spooler', label: 'print spooler', re: /\bspooler\b/i },
];

function detectBrand(text = '') {
  for (const brand of BRANDS) {
    if (brand.patterns.some((re) => re.test(text))) return brand;
  }
  return null;
}

function detectIntents(text = '') {
  return INTENT_PHRASES.filter((p) => p.re.test(text)).map((p) => p.label);
}

function extractHeadings(md = '') {
  const lines = md.split('\n');
  const headings = [];
  for (const line of lines) {
    const m = /^(#{1,4})\s+(.+)$/.exec(line.trim());
    if (m) headings.push({ level: m[1].length, text: m[2].replace(/[#*_`]/g, '').trim() });
  }
  return headings;
}

function extractFaqsFromMarkdown(md = '', limit = 6) {
  const lines = md.split('\n');
  const faqs = [];
  for (let i = 0; i < lines.length && faqs.length < limit; i++) {
    const m = /^(#{2,3})\s+(.+\?)\s*$/.exec(lines[i].trim());
    if (!m) continue;
    const question = m[2].replace(/[#*_`]/g, '').trim();
    const answerParts = [];
    for (let j = i + 1; j < lines.length; j++) {
      const next = lines[j].trim();
      if (!next) {
        if (answerParts.length) break;
        continue;
      }
      if (/^#{1,4}\s+/.test(next)) break;
      answerParts.push(next.replace(/^[-*+]\s+/, '').replace(/[#*_`]/g, ''));
      if (answerParts.join(' ').length > 220) break;
    }
    const answer = stripMarkdown(answerParts.join(' ')).slice(0, 280);
    if (question && answer.length > 40) faqs.push({ question, answer });
  }
  return faqs;
}

function clampSentence(text, max) {
  const clean = stripMarkdown(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

function buildPrimaryKeyword({ title, slug, brand, intents }) {
  const fromSlug = (slug || '')
    .replace(/-/g, ' ')
    .replace(/\b(fix|solutions?|guide|complete|ultimate|202\d)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (fromSlug.length >= 8) return fromSlug;
  if (brand && intents[0]) return `${brand.label} ${intents[0]}`.replace(/\bprinter printer\b/i, 'printer');
  if (intents[0]) return intents[0];
  return stripMarkdown(title).slice(0, 48) || 'printer support';
}

function pickVariant(seed = '', forced) {
  if (forced != null) return Number(forced) % 3;
  let h = 0;
  const s = `${seed}|${Date.now()}`;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % 3;
}

function buildMetaTitle({ title, brand, primaryKeyword, variant = 0 }) {
  const topic = stripMarkdown(title || primaryKeyword || 'Printer Fix')
    .replace(/\s+/g, ' ')
    .replace(/\b20\d{2}\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const brandLabel = brand?.label || '';
  const withBrand = (t) =>
    brandLabel && !new RegExp(brandLabel, 'i').test(t) ? `${brandLabel} ${t}` : t;

  let candidate;
  if (variant === 1) {
    candidate = withBrand(`${primaryKeyword || topic}: Fast Fix (${YEAR})`);
  } else if (variant === 2) {
    candidate = withBrand(`How to Fix ${primaryKeyword || topic} (${YEAR})`);
  } else {
    candidate = withBrand(topic);
    if (!/\b(fix|fixes?|guide|setup|support)\b/i.test(candidate)) {
      candidate = `${candidate} — Fix Guide`;
    }
    if (!/\b20\d{2}\b/.test(candidate)) candidate = `${candidate} (${YEAR})`;
  }

  if (candidate.length > 60) {
    candidate = clampSentence(candidate, 57);
  }
  return candidate;
}

function buildMetaDescription({ title, brand, primaryKeyword, plain, intents, variant = 0 }) {
  const brandBit = brand ? `${brand.label} ` : '';
  const intentBit = intents[0] || primaryKeyword || 'printer issue';
  const snippet = clampSentence(plain || '', 90);

  const templates = [
    () => {
      const hook = snippet || `Clear Windows steps that usually restore ${brandBit}${intentBit} the same day.`;
      return `${hook} Stuck? Call ZamZam for remote US printer support.`;
    },
    () =>
      `Fix ${brandBit}${intentBit} on Windows 10/11 with proven checks for offline, drivers, and Wi‑Fi. Remote US help available if you need it done now.`,
    () =>
      `${brandBit}${intentBit} still broken after restart? Follow this ${YEAR} guide — or get a ZamZam tech on a secure remote session in minutes.`,
  ];

  let desc = templates[variant % templates.length]();
  if (desc.length < 120) {
    desc = `Fix ${brandBit}${intentBit} with step-by-step checks for Windows 10/11. Call ZamZam for remote US printer support.`;
  }
  return clampSentence(desc, 158).replace(/…$/, '.');
}

function buildKeywords({ brand, primaryKeyword, intents, title, slug }) {
  const set = new Set();
  const add = (k) => {
    const v = (k || '').toLowerCase().replace(/\s+/g, ' ').trim();
    if (v.length >= 3 && v.length <= 48) set.add(v);
  };
  add(primaryKeyword);
  intents.forEach(add);
  if (brand) {
    add(`${brand.label} printer`);
    add(`${brand.label} printer support`);
    intents.slice(0, 2).forEach((intent) => add(`${brand.label} ${intent}`));
  }
  add('remote printer support');
  add('printer troubleshooting');
  stripMarkdown(title)
    .toLowerCase()
    .split(/[^a-z0-9+]+/)
    .filter((w) => w.length > 3)
    .slice(0, 6)
    .forEach(add);
  (slug || '')
    .split('-')
    .filter((w) => w.length > 3 && !['guide', 'solutions', 'complete', 'ultimate'].includes(w))
    .forEach(add);
  return Array.from(set).slice(0, 10).join(', ');
}

function scoreSeo({ title, slug, metaTitle, metaDesc, keywords, plain, headings, faqs, imagePresent, author }) {
  const issues = [];
  const tips = [];
  let score = 100;

  const mtLen = (metaTitle || '').length;
  const mdLen = (metaDesc || '').length;
  const words = plain.split(/\s+/).filter(Boolean).length;

  if (!title?.trim()) {
    issues.push({ level: 'error', text: 'Missing blog title.' });
    score -= 20;
  }
  if (!slug?.trim()) {
    issues.push({ level: 'error', text: 'Missing URL slug.' });
    score -= 15;
  } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    issues.push({ level: 'warn', text: 'Slug should be lowercase kebab-case (a-z, 0-9, hyphens).' });
    score -= 8;
  }

  if (!metaTitle?.trim()) {
    issues.push({ level: 'error', text: 'Meta title is empty — Google will fall back to the H1.' });
    score -= 15;
  } else if (mtLen < 35) {
    issues.push({ level: 'warn', text: `Meta title is short (${mtLen} chars). Aim for 50–60.` });
    score -= 6;
  } else if (mtLen > 60) {
    issues.push({ level: 'warn', text: `Meta title may truncate in SERP (${mtLen} chars). Keep ≤60.` });
    score -= 6;
  } else {
    tips.push('Meta title length looks good.');
  }

  if (!metaDesc?.trim()) {
    issues.push({ level: 'error', text: 'Meta description is empty.' });
    score -= 15;
  } else if (mdLen < 120) {
    issues.push({ level: 'warn', text: `Meta description is short (${mdLen} chars). Aim for 140–160.` });
    score -= 6;
  } else if (mdLen > 160) {
    issues.push({ level: 'warn', text: `Meta description may truncate (${mdLen} chars). Keep ≤160.` });
    score -= 6;
  } else {
    tips.push('Meta description length looks good.');
  }

  if (!keywords?.trim()) {
    issues.push({ level: 'warn', text: 'No meta keywords set (low impact, but useful for internal CMS).' });
    score -= 3;
  }

  if (words < 400) {
    issues.push({ level: 'warn', text: `Thin body (~${words} words). Aim for 800+ for competitive printer queries.` });
    score -= 12;
  } else if (words < 800) {
    issues.push({ level: 'info', text: `Body is ~${words} words — OK, 1000+ is stronger for DIY guides.` });
    score -= 4;
  }

  const h2Count = headings.filter((h) => h.level === 2).length;
  if (h2Count < 2) {
    issues.push({ level: 'warn', text: 'Add clearer H2 sections so Google can understand the outline.' });
    score -= 6;
  }

  if (!author?.trim()) {
    issues.push({ level: 'warn', text: 'Author missing — hurts E-E-A-T consistency.' });
    score -= 5;
  }

  if (!imagePresent) {
    issues.push({ level: 'info', text: 'No featured image — Open Graph / social previews will use a site fallback.' });
    score -= 3;
  }

  if (!faqs?.length) {
    issues.push({ level: 'info', text: 'No FAQs — FAQ schema can win extra SERP space when relevant.' });
    score -= 2;
  }

  const seoFlags = slug ? getBlogSeo(slug) : { noindex: false, canonicalPath: null, meta: null };
  if (seoFlags.noindex) {
    issues.push({
      level: 'warn',
      text: 'This slug is marked noindex in code (lib/blogSeo.js). Metadata won’t help rankings until removed.',
    });
    score -= 10;
  }
  if (seoFlags.canonicalPath && !seoFlags.canonicalPath.startsWith('/blog/')) {
    issues.push({
      level: 'warn',
      text: `Canonical override points to ${seoFlags.canonicalPath} — Google may credit the service page, not this blog.`,
    });
    score -= 8;
  }
  if (seoFlags.meta) {
    tips.push('Hard-coded CTR overrides exist for this slug in lib/blogSeo.js (they win over CMS meta on the live site).');
  }

  score = Math.max(0, Math.min(100, score));
  let grade = 'Needs work';
  if (score >= 85) grade = 'Strong';
  else if (score >= 70) grade = 'Good';
  else if (score >= 50) grade = 'Fair';

  return { score, grade, issues, tips, seoFlags };
}

/**
 * Analyze blog draft fields and suggest SEO metadata.
 * @param {{ rewriteVariant?: number }} input — pass rewriteVariant to force a CTR rewrite style (0–2)
 */
export function analyzeBlogSeo(input = {}) {
  const title = input.title || '';
  const slug = (input.slug || '').trim();
  const bodyMd = input.content || input.description || '';
  const plain = stripMarkdown(bodyMd);
  const headings = extractHeadings(bodyMd);
  const brand = detectBrand(`${title} ${slug} ${plain}`);
  const intents = detectIntents(`${title} ${slug} ${plain}`);
  const primaryKeyword = buildPrimaryKeyword({ title, slug, brand, intents });
  const suggestedFaqs = extractFaqsFromMarkdown(bodyMd);
  const variant = pickVariant(`${slug}|${input.meta_title || ''}`, input.rewriteVariant);

  const suggestions = {
    slug: slug || slugify(title) || 'printer-support-guide',
    author: input.author?.trim() || authorForSlug(slug || title).display,
    meta_title: buildMetaTitle({ title, brand, primaryKeyword, variant }),
    meta_description: buildMetaDescription({
      title,
      brand,
      primaryKeyword,
      plain,
      intents,
      variant,
    }),
    meta_keywords: buildKeywords({ brand, primaryKeyword, intents, title, slug }),
    faqs: suggestedFaqs.length ? suggestedFaqs : null,
    variant,
  };

  const currentMetaTitle = (input.meta_title || '').trim();
  const currentMetaDesc = (input.meta_description || '').trim();
  const analysis = scoreSeo({
    title,
    slug,
    metaTitle: currentMetaTitle,
    metaDesc: currentMetaDesc,
    keywords: input.meta_keywords,
    plain,
    headings,
    faqs: input.faqs,
    imagePresent: Boolean(input.imagePresent),
    author: input.author,
  });

  const projected = scoreSeo({
    title,
    slug: slug || suggestions.slug,
    metaTitle: currentMetaTitle || suggestions.meta_title,
    metaDesc: currentMetaDesc || suggestions.meta_description,
    keywords: input.meta_keywords || suggestions.meta_keywords,
    plain,
    headings,
    faqs: input.faqs?.length ? input.faqs : suggestedFaqs,
    imagePresent: Boolean(input.imagePresent),
    author: input.author || suggestions.author,
  });

  const displayTitle = (currentMetaTitle || suggestions.meta_title || title || 'Untitled').slice(0, 60);
  const displayDesc = (
    currentMetaDesc ||
    suggestions.meta_description ||
    clampSentence(plain, 158)
  ).slice(0, 160);
  const pathSlug = slug || suggestions.slug;

  return {
    primaryKeyword,
    brand: brand?.label || null,
    intents,
    wordCount: plain.split(/\s+/).filter(Boolean).length,
    headingCount: headings.length,
    suggestions,
    ...analysis,
    projectedScore: projected.score,
    projectedGrade: projected.grade,
    serp: {
      title: displayTitle,
      description: displayDesc,
      url: `${SITE_HOST}/blog/${pathSlug}`,
    },
  };
}

/**
 * Apply analyzer suggestions onto form fields.
 * @param {'all'|'empty'|'rewrite'} mode
 *  - empty: fill missing meta/author/slug only
 *  - all: fill meta + keywords + author/slug gaps
 *  - rewrite: always overwrite meta_title + meta_description (+ keywords)
 */
export function applySeoSuggestions(formData, analysis, mode = 'all') {
  const s = analysis.suggestions;
  const next = { ...formData };
  const fill = (key, value) => {
    if (value == null || value === '') return;
    if (mode === 'empty' && String(next[key] || '').trim()) return;
    next[key] = value;
  };

  if (mode === 'rewrite') {
    next.meta_title = s.meta_title;
    next.meta_description = s.meta_description;
    fill('meta_keywords', s.meta_keywords);
    return next;
  }

  fill('slug', s.slug);
  fill('author', s.author);
  fill('meta_title', s.meta_title);
  fill('meta_description', s.meta_description);
  fill('meta_keywords', s.meta_keywords);

  // Never wipe hand-written FAQs — only import when empty
  if (s.faqs?.length && (!next.faqs || next.faqs.length === 0)) {
    next.faqs = s.faqs;
  }

  return next;
}

/**
 * Build DB patch for one blog row (list bulk SEO).
 * @param {'empty'|'rewrite'} mode
 */
export function buildBlogSeoPatch(blog, mode = 'empty') {
  const analysis = analyzeBlogSeo({
    ...blog,
    rewriteVariant: mode === 'rewrite' ? undefined : 0,
  });
  const applied = applySeoSuggestions(blog, analysis, mode === 'rewrite' ? 'rewrite' : 'empty');
  const patch = {
    meta_title: applied.meta_title,
    meta_description: applied.meta_description,
    meta_keywords: applied.meta_keywords,
  };
  if (mode === 'empty') {
    if (!String(blog.author || '').trim()) patch.author = applied.author;
  }
  const changed =
    mode === 'rewrite' ||
    patch.meta_title !== (blog.meta_title || '') ||
    patch.meta_description !== (blog.meta_description || '') ||
    patch.meta_keywords !== (blog.meta_keywords || '') ||
    (patch.author != null && patch.author !== blog.author);

  return { patch, analysis, changed };
}
