'use client';

import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import {
  blogNeedsRewrite,
  buildBlogSeoPatch,
  summarizeSeoNeeds,
} from '@/lib/blogSeoAnalyzer';

const SELECT_FIELDS =
  'id, title, slug, author, description, content, meta_title, meta_description, meta_keywords';

/**
 * Bulk SEO tools — buttons stay inactive when there is nothing to fix/rewrite.
 */
export default function BlogListSeoTools({ onDone, refreshKey = 0 }) {
  const [running, setRunning] = useState(false);
  const [log, setLog] = useState('');
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [needs, setNeeds] = useState({
    total: 0,
    needsFix: 0,
    needsRewrite: 0,
    canAutoFix: false,
    canRewrite: false,
  });
  const [scanning, setScanning] = useState(true);

  const scanNeeds = useCallback(async () => {
    setScanning(true);
    try {
      const { data: blogs, error } = await supabase
        .from('blogs')
        .select('id, title, slug, author, meta_title, meta_description, meta_keywords');

      if (error) throw error;
      setNeeds(summarizeSeoNeeds(blogs || []));
    } catch (err) {
      console.error(err);
      setNeeds({
        total: 0,
        needsFix: 0,
        needsRewrite: 0,
        canAutoFix: false,
        canRewrite: false,
      });
    } finally {
      setScanning(false);
    }
  }, []);

  useEffect(() => {
    scanNeeds();
  }, [scanNeeds, refreshKey]);

  const runBulk = async (mode) => {
    const canRun = mode === 'rewrite' ? needs.canRewrite : needs.canAutoFix;
    if (!canRun || running) return;

    const label = mode === 'rewrite' ? 'Rewrite weak meta' : 'Auto-fix incomplete SEO';
    if (
      !confirm(
        mode === 'rewrite'
          ? `Rewrite meta title + description for ${needs.needsRewrite} blog(s) that need stronger SERP copy?`
          : `Fill missing SEO fields on ${needs.needsFix} blog(s)?`
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
        .select(SELECT_FIELDS)
        .order('date_posted', { ascending: false });

      if (error) throw error;
      if (!blogs?.length) {
        setLog('No blogs found.');
        setRunning(false);
        await scanNeeds();
        return;
      }

      const targets = blogs.filter((b) => buildBlogSeoPatch(b, mode).needsWork);
      if (!targets.length) {
        setLog('Nothing to do — all blogs already look fine.');
        setRunning(false);
        await scanNeeds();
        return;
      }

      setProgress({ done: 0, total: targets.length });
      let updated = 0;
      let skipped = 0;
      let failed = 0;

      for (let i = 0; i < targets.length; i++) {
        const blog = targets[i];
        const { patch, changed } = buildBlogSeoPatch(blog, mode);

        if (!changed) {
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

        setProgress({ done: i + 1, total: targets.length });
        setLog(
          `${mode === 'rewrite' ? 'Rewriting' : 'Fixing'} ${i + 1}/${targets.length}: ${blog.slug || blog.title}`
        );
      }

      setLog(
        `Done. Updated ${updated}${skipped ? `, skipped ${skipped}` : ''}${
          failed ? `, failed ${failed}` : ''
        }.`
      );
      await scanNeeds();
      if (onDone) onDone();
    } catch (err) {
      console.error(err);
      setLog(`Error: ${err.message || 'Bulk SEO failed'}`);
    } finally {
      setRunning(false);
    }
  };

  const autoFixActive = !running && !scanning && needs.canAutoFix;
  const rewriteActive = !running && !scanning && needs.canRewrite;

  return (
    <div className="border-b border-gray-200 bg-slate-50 px-4 py-4 sm:px-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-slate-900">SEO for all blogs</p>
          <p className="text-xs text-slate-500 mt-0.5">
            {scanning
              ? 'Checking which posts need SEO…'
              : needs.canAutoFix || needs.canRewrite
                ? `${needs.needsFix} need Auto-fix · ${needs.needsRewrite} need Rewrite (of ${needs.total})`
                : `All ${needs.total} blogs look SEO-ready — buttons stay off until something needs work.`}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!autoFixActive}
            onClick={() => runBulk('empty')}
            title={
              autoFixActive
                ? `Fill missing SEO on ${needs.needsFix} blogs`
                : 'No blogs need Auto-fix'
            }
            className={`px-4 py-2 text-sm font-bold rounded-md transition-colors ${
              autoFixActive
                ? 'bg-blue-700 text-white hover:bg-blue-800'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Auto-fix SEO (all)
            {needs.needsFix > 0 ? ` · ${needs.needsFix}` : ''}
          </button>
          <button
            type="button"
            disabled={!rewriteActive}
            onClick={() => runBulk('rewrite')}
            title={
              rewriteActive
                ? `Rewrite weak meta on ${needs.needsRewrite} blogs`
                : 'No blogs need a meta rewrite'
            }
            className={`px-4 py-2 text-sm font-bold rounded-md transition-colors ${
              rewriteActive
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Rewrite meta (all)
            {needs.needsRewrite > 0 ? ` · ${needs.needsRewrite}` : ''}
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

/** Per-row rewrite — only when that blog’s meta is weak/incomplete */
export async function rewriteBlogMeta(blogId) {
  const { data: blog, error } = await supabase
    .from('blogs')
    .select(SELECT_FIELDS)
    .eq('id', blogId)
    .single();
  if (error) throw error;

  if (!blogNeedsRewrite(blog)) {
    const err = new Error('Meta already looks healthy — rewrite not needed.');
    err.code = 'SEO_NOT_NEEDED';
    throw err;
  }

  const { patch, changed } = buildBlogSeoPatch(blog, 'rewrite');
  if (!changed) {
    const err = new Error('Nothing to update.');
    err.code = 'SEO_NOT_NEEDED';
    throw err;
  }

  const { error: upErr } = await supabase.from('blogs').update(patch).eq('id', blog.id);
  if (upErr) throw upErr;
  return patch;
}

export { blogNeedsRewrite };
