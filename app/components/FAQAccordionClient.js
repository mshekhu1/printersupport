"use client";

import { useState } from 'react';

export default function FAQAccordionClient({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-100 shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              id={`faq-button-${idx}`}
              className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                {faq.aShort && <p className="text-sm text-gray-500 mt-1 hidden sm:block">{faq.aShort}</p>}
              </div>
              <div className={`text-gray-400 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} aria-hidden>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            {openIndex === idx && (
              <div id={`faq-panel-${idx}`} role="region" aria-labelledby={`faq-button-${idx}`} className="px-4 pb-4 text-gray-700">
                <div className="pt-2 text-sm">{faq.a}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
