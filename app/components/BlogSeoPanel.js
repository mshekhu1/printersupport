'use client';

import { useMemo, useState } from 'react';
import { analyzeBlogSeo, applySeoSuggestions } from '@/lib/blogSeoAnalyzer';

function CharMeter({ value = '', idealMin, idealMax, hardMax }) {
  const len = value.length;
  let tone = 'text-emerald-700';
  if (len === 0) tone = 'text-slate-400';
  else if (len > hardMax || len < idealMin) tone = 'text-amber-700';
  else if (len > idealMax) tone = 'text-amber-600';

  return (
    <span className={`text-xs font-medium ${tone}`}>
      {len}
      {hardMax ? ` / ${hardMax}` : ''}
      {idealMin != null ? ` (ideal ${idealMin}–${idealMax})` : ''}
    </span>
  );
}

function ScoreBadge({ score, grade }) {
  let cls = 'bg-slate-100 text-slate-700';
  if (score >= 85) cls = 'bg-emerald-100 text-emerald-800';
  else if (score >= 70) cls = 'bg-sky-100 text-sky-800';
  else if (score >= 50) cls = 'bg-amber-100 text-amber-900';
  else cls = 'bg-rose-100 text-rose-800';

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold ${cls}`}>
      <span>SEO {score}/100</span>
      <span className="opacity-80 font-medium">· {grade}</span>
    </div>
  );
}

/**
 * SEO fields + Google SERP preview + Auto-fix from blog analysis.
 */
export default function BlogSeoPanel({ formData, onChange, onApplyForm, imagePresent }) {
  const [lastApplied, setLastApplied] = useState(null);
  const [mode, setMode] = useState('all');

  const analysis = useMemo(
    () =>
      analyzeBlogSeo({
        ...formData,
        imagePresent,
      }),
    [formData, imagePresent]
  );

  const handleField = (e) => {
    onChange(e);
  };

  const runAutoFix = (applyMode = mode) => {
    const next = applySeoSuggestions(formData, analysis, applyMode);
    onApplyForm(next);
    setLastApplied(applyMode);
  };

  return (
    <section className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50/60">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-slate-200 bg-white">
        <div>
          <h3 className="text-base font-bold text-slate-900">SEO & search preview</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Analyzes title, slug, and article body — then fills meta title, description, keywords, author, and FAQs.
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1">
          <ScoreBadge score={analysis.score} grade={analysis.grade} />
          {analysis.projectedScore > analysis.score && (
            <p className="text-[11px] text-slate-500">
              After Auto-fix ≈ {analysis.projectedScore}/100 ({analysis.projectedGrade})
            </p>
          )}
        </div>
      </div>

      <div className="p-4 space-y-5">
        {/* SERP preview */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
            How it can show in Google
          </p>
          <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-[13px] text-[#202124] mb-1 truncate">{analysis.serp.url}</div>
            <div className="text-xl text-[#1a0dab] leading-snug mb-1 hover:underline cursor-default">
              {analysis.serp.title || 'Meta title preview'}
            </div>
            <div className="text-sm text-[#4d5156] leading-relaxed">
              {analysis.serp.description || 'Meta description preview will appear here.'}
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-1.5">
            Approximate desktop SERP. Live titles can still be overridden by{' '}
            <code className="text-[10px] bg-slate-100 px-1">lib/blogSeo.js</code> for some slugs.
          </p>
        </div>

        {/* Insights */}
        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          <div className="bg-white border border-slate-200 rounded-md p-3">
            <p className="text-xs text-slate-500 mb-1">Primary topic</p>
            <p className="font-semibold text-slate-900">{analysis.primaryKeyword}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-md p-3">
            <p className="text-xs text-slate-500 mb-1">Brand / intent</p>
            <p className="font-semibold text-slate-900">
              {[analysis.brand, ...(analysis.intents || []).slice(0, 2)].filter(Boolean).join(' · ') || 'General printer'}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-md p-3">
            <p className="text-xs text-slate-500 mb-1">Body</p>
            <p className="font-semibold text-slate-900">
              {analysis.wordCount} words · {analysis.headingCount} headings
            </p>
          </div>
        </div>

        {(analysis.issues.length > 0 || analysis.tips.length > 0) && (
          <div className="bg-white border border-slate-200 rounded-md p-3 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Analysis</p>
            <ul className="space-y-1.5 text-sm">
              {analysis.issues.map((issue, i) => (
                <li
                  key={`i-${i}`}
                  className={
                    issue.level === 'error'
                      ? 'text-rose-700'
                      : issue.level === 'warn'
                        ? 'text-amber-800'
                        : 'text-slate-600'
                  }
                >
                  <span className="font-semibold uppercase text-[10px] tracking-wide mr-2">
                    {issue.level}
                  </span>
                  {issue.text}
                </li>
              ))}
              {analysis.tips.map((tip, i) => (
                <li key={`t-${i}`} className="text-emerald-700">
                  <span className="font-semibold uppercase text-[10px] tracking-wide mr-2">ok</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Auto fix controls */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white border border-slate-200 rounded-md p-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">Auto-fix SEO from article</p>
            <p className="text-xs text-slate-500 mt-0.5">
              Suggested: “{analysis.suggestions.meta_title}”
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="text-sm border border-slate-300 rounded-md px-2 py-2 bg-white"
              aria-label="Apply mode"
            >
              <option value="all">Overwrite meta fields</option>
              <option value="empty">Only fill empty fields</option>
            </select>
            <button
              type="button"
              onClick={() => runAutoFix(mode)}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold rounded-md"
            >
              Auto-fix SEO
            </button>
          </div>
        </div>
        {lastApplied && (
          <p className="text-xs text-emerald-700 -mt-2">
            Applied suggestions ({lastApplied === 'empty' ? 'empty fields only' : 'overwrite'}). Review and save the post.
          </p>
        )}

        {/* Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">Slug</label>
            </div>
            <input
              type="text"
              name="slug"
              placeholder="url-friendly-slug"
              value={formData.slug}
              onChange={handleField}
              required
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">Meta title</label>
              <CharMeter value={formData.meta_title} idealMin={50} idealMax={60} hardMax={70} />
            </div>
            <input
              type="text"
              name="meta_title"
              placeholder="SEO title shown in Google"
              value={formData.meta_title}
              onChange={handleField}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-gray-700">Meta description</label>
            <CharMeter value={formData.meta_description} idealMin={140} idealMax={160} hardMax={170} />
          </div>
          <textarea
            name="meta_description"
            placeholder="1–2 sentence summary with a soft CTA"
            value={formData.meta_description}
            onChange={handleField}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meta keywords</label>
          <input
            type="text"
            name="meta_keywords"
            placeholder="comma-separated topics"
            value={formData.meta_keywords}
            onChange={handleField}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          />
          <p className="text-[11px] text-slate-400 mt-1">
            Used on the page meta tags and for CMS organization. Focus keywords still matter more in title + body.
          </p>
        </div>

        {analysis.suggestions.faqs?.length > 0 && (!formData.faqs || formData.faqs.length === 0) && (
          <div className="text-sm text-slate-700 bg-sky-50 border border-sky-100 rounded-md p-3">
            Found {analysis.suggestions.faqs.length} FAQ-style headings in the article. Auto-fix can import them for FAQ schema.
          </div>
        )}
      </div>
    </section>
  );
}
