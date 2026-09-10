/**
 * One-time CMS repair:
 * - copy long description → content when content is empty
 * - normalize authors
 * - keep restored tech guides (router / Gmail / slow PC) as normal posts
 *
 * Usage: node --env-file=.env.local scripts/repair-blogs.mjs
 */
import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const sb = createClient(url, key);

const AUTHORS = {
  default: 'ZamZam Print Support',
};

function pickAuthor() {
  return AUTHORS.default;
}

const { data, error } = await sb
  .from('blogs')
  .select('id,slug,description,content,author');

if (error) {
  console.error(error.message);
  process.exit(1);
}

let migrated = 0;
let authorsFixed = 0;
let failed = 0;

for (const b of data) {
  const desc = b.description || '';
  const content = b.content || '';
  const updates = {};

  if (!content.trim() && desc.trim()) {
    updates.content = desc;
    if (desc.trim().length > 200) {
      const plain = desc.replace(/[#>*`\[\]]/g, '').replace(/\s+/g, ' ').trim();
      updates.description = plain.slice(0, 220);
    }
    migrated++;
  }

  const desired = pickAuthor(b.slug);
  if ((b.author || '') !== desired) {
    updates.author = desired;
    authorsFixed++;
  }

  if (!Object.keys(updates).length) continue;

  const up = await sb.from('blogs').update(updates).eq('id', b.id);
  if (up.error) {
    console.log('UPD_FAIL', b.slug, up.error.message);
    failed++;
  } else {
    console.log('UPDATED', b.slug, Object.keys(updates).join(','));
  }
}

console.log(JSON.stringify({ migrated, authorsFixed, failed, total: data.length }));
