/**
 * Sync CMS meta_title / meta_description to Google site:zamzamprint.com titles.
 * Usage: node --env-file=.env.local scripts/sync-blog-meta-to-gsc.mjs
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

function env(name) {
  return String(process.env[name] || '')
    .trim()
    .replace(/^['"]+|['"]+$/g, '')
    .replace(/\s+/g, '');
}

const src = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../lib/blogSeo.js'), 'utf8');
const match = src.match(/export const BLOG_META_OVERRIDES = (\{[\s\S]*?\n\});/);
if (!match) {
  console.error('Could not parse BLOG_META_OVERRIDES');
  process.exit(1);
}
const overrides = Function(`"use strict"; return (${match[1]})`)();


const url = env('NEXT_PUBLIC_SUPABASE_URL');
const key = env('NEXT_PUBLIC_SUPABASE_ANON_KEY');
if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const sb = createClient(url, key);
const slugs = Object.keys(overrides);

const { data, error } = await sb.from('blogs').select('id, slug, meta_title, meta_description').in('slug', slugs);
if (error) {
  console.error(error);
  process.exit(1);
}

for (const row of data || []) {
  const meta = overrides[row.slug];
  if (!meta) continue;
  const { error: upErr } = await sb
    .from('blogs')
    .update({
      meta_title: meta.title,
      meta_description: meta.description.slice(0, 160),
    })
    .eq('id', row.id);
  if (upErr) {
    console.error('FAIL', row.slug, upErr.message);
    process.exitCode = 1;
  } else {
    console.log('SYNCED', row.slug);
  }
}
