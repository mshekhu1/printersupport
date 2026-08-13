'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { buildBlogSeoPatch } from '@/lib/blogSeoAnalyzer';

/**
 * Bulk + per-row SEO tools for Blog Management list.
 * Auto-fix fills empty meta; Rewrite always refreshes meta title/description.
 */
export default function BlogListSeoTools({ onDone }) {
  const [running, setRunning] = useState(false);
  const [log, setLog] = useState('');
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const runBulk = async (mode) => {
    const label = mode === 'rewrite' ? 'Rewrite meta for ALL blogs' : 'Auto-fix SEO (empty fields only)';
    if (
      !confirm(
        mode === 'rewrite'
          ? 'Rewrite meta title + description for EVERY blog based on its content? This overwrites existing meta.'
          : 'Fill missing meta title/description/keywords/author for blogs that are incomplete?'
      )
    ) {
      return;
    }

    setRunning(true);
    setLog(`Starting: ${label}…`);
    setProgress({ done: 0, total: 0 });

    try {
      const { data: blogs, error } = await supabase
        .from('blogs')
        .select('id, title, slug, author, description, content, meta_title, meta_description, meta_keywords')
        .order('date_posted', { ascending: false });

      if (error) throw error;
      if (!blogs?.length) {
        setLog('No blogs found.');
        setRunning(false);
        return;
      }

      setProgress({ done: 0, total: blogs.length });
      let updated = 0;
      let skipped = 0;
      let failed = 0;

      for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        const { patch, changed } = buildBlogSeoPatch(blog, mode);

        if (!changed && mode === 'empty') {
          skipped++;
        } else {
          const { error: upErr } = await supabase.from('blogs').update(patch).eq('id', blog.id);
          if (upErr) {
            failed++;
            console.error('SEO update failed', blog.slug, upErr);
          } else {
            updated++;
          }
        }

        setProgress({ done: i + 1, total: blogs.length });
        setLog(
          `${mode === 'rewrite' ? 'Rewriting' : 'Fixing'} ${i + 1}/${blogs.length}: ${blog.slug || blog.title}`
        );
      }

      setLog(
        `Done. Updated ${updated}${mode === 'empty' ? `, skipped ${skipped} (already complete)` : ''}${
          failed ? `, failed ${failed}` : ''
        }.`
      );
      if (onDone) onDone();
    } catch (err) {
      console.error(err);
      setLog(`Error: ${err.message || 'Bulk SEO failed'}`);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="border-b border-gray-200 bg-slate-50 px-4 py-4 sm:px-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-slate-900">SEO for all blogs</p>
          <p className="text-xs text-slate-500 mt-0.5">
            Analyzes each post body and updates meta title / description in Supabase. Use Rewrite later for fresher CTR copy.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={running}
            onClick={() => runBulk('empty')}
            className="px-4 py-2 text-sm font-bold rounded-md bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50"
          >
            Auto-fix SEO (all)
          </button>
          <button
            type="button"
            disabled={running}
            onClick={() => runBulk('rewrite')}
            className="px-4 py-2 text-sm font-bold rounded-md bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-50"
          >
            Rewrite meta (all)
          </button>
        </div>
      </div>
      {(running || log) && (
        <div className="mt-3 text-xs text-slate-600">
          {running && progress.total > 0 && (
            <div className="mb-1.5 h-1.5 bg-slate-200 rounded overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all"
                style={{ width: `${Math.round((progress.done / progress.total) * 100)}%` }}
              />
            </div>
          )}
          <p className={running ? 'text-blue-700' : 'text-emerald-700'}>{log}</p>
        </div>
      )}
    </div>
  );
}

/** Per-row rewrite — overwrites that blog’s meta title + description */
export async function rewriteBlogMeta(blogId) {
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('id, title, slug, author, description, content, meta_title, meta_description, meta_keywords')
    .eq('id', blogId)
    .single();
  if (error) throw error;

  const { patch } = buildBlogSeoPatch(blog, 'rewrite');
  const { error: upErr } = await supabase.from('blogs').update(patch).eq('id', blog.id);
  if (upErr) throw upErr;
  return patch;
}
