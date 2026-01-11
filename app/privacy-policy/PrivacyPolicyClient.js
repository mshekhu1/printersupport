// app/privacy-policy/PrivacyPolicyClient.js
'use client';

import { useState } from 'react';
import { Shield, Lock, Eye, Users, FileText, RefreshCw, Mail, ChevronDown, ChevronUp, Check } from 'lucide-react';

export default function PrivacyPolicyClient({ sections, lastUpdated }) {
  const [expandedSections, setExpandedSections] = useState({});
  const [readSections, setReadSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    
    if (!readSections[id]) {
      setReadSections(prev => ({
        ...prev,
        [id]: true
      }));
    }
  };

  const iconMap = {
    FileText,
    Users,
    Eye,
    Lock,
    Shield,
    RefreshCw
  };

  const progress = (Object.keys(readSections).length / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our remote printer support services.
          </p>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Reading Progress</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = iconMap[section.icon];
            const isExpanded = expandedSections[section.id];
            const isRead = readSections[section.id];

            return (
              <article
                key={section.id}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 rounded-xl transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`section-${section.id}`}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`p-3 rounded-lg ${isRead ? 'bg-green-100' : 'bg-blue-100'}`}>
                      {Icon && <Icon className={`w-6 h-6 ${isRead ? 'text-green-600' : 'text-blue-600'}`} />}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                        {section.title}
                        {isRead && (
                          <Check className="w-5 h-5 text-green-600 ml-2" />
                        )}
                      </h2>
                    </div>
                  </div>
                  <div className="ml-4">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                <div
                  id={`section-${section.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {section.description && (
                      <p className="mb-4 text-lg">{section.description}</p>
                    )}

                    {section.content && (
                      <p className="text-lg">{section.content}</p>
                    )}

                    {section.items && (
                      <ul className="space-y-2 ml-6">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.features && (
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {section.features.map((feature, idx) => (
                          <div key={idx} className="p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 transition-all hover:shadow-md">
                            <div className="font-semibold text-blue-900 mb-1">{feature.label}</div>
                            <div className="text-sm text-gray-600">{feature.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.note && (
                      <div className={`mt-4 p-3 rounded border-l-4 ${
                        section.noteType === 'important' 
                          ? 'bg-green-50 border-green-500 text-green-800'
                          : section.noteType === 'control'
                          ? 'bg-blue-50 border-blue-500 text-blue-900'
                          : 'bg-gray-50 border-gray-500 text-gray-800'
                      }`}>
                        <p>
                          <strong>
                            {section.noteType === 'important' ? 'Important: ' : 
                             section.noteType === 'control' ? 'Your Control: ' : ''}
                          </strong>
                          {section.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-3">Have Questions?</h2>
          <p className="text-center text-blue-100 mb-6">
            If you have questions about this Privacy Policy, please call us at <strong>+1-888-769-4448</strong> or use the phone button below to reach support immediately.
          </p>
          <div className="text-center">
            <a
              href="tel:+18887694448"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
            >
              Call +1-888-769-4448
            </a>
          </div>
        </section>
<div className="mt-10 text-gray-700 max-w-3xl">
          <p>
            📞 Need immediate help? Call <strong>+1-888-769-4448</strong> and get fast,
            reliable printer support from ZamZam Print experts.
          </p>
        </div>
        {/* Last Updated */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          Last Updated: {lastUpdated}
        </footer>
      </main>
    </div>
  );
}