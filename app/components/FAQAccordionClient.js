"use client";

import { useState } from 'react';

export default function FAQAccordionClient({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              id={`faq-button-${idx}`}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-xl transition-colors hover:bg-gray-50"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">?</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-snug pr-2">{faq.q}</h4>
                    {faq.aShort && (
                      <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">{faq.aShort}</p>
                    )}
                  </div>
                </div>
              </div>
              <div 
                className={`flex-shrink-0 text-blue-600 transition-all duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                aria-hidden="true"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </button>

            <div 
              id={`faq-panel-${idx}`} 
              role="region" 
              aria-labelledby={`faq-button-${idx}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <div className="pl-9 border-l-2 border-blue-200">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2">{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
