'use client';

import React, { useEffect, useState } from 'react';
import { slugify } from '@/lib/utils';

export default function TableOfContents({ content }) {
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        if (!content) return;

        // Regex to match # headings
        // Matches ## Heading or ### Heading
        const regex = /^(#{2,3})\s+(.+)$/gm;
        const items = [];
        let match;

        while ((match = regex.exec(content)) !== null) {
            const level = match[1].length; // 2 or 3
            const text = match[2];
            const id = slugify(text);
            items.push({ id, text, level });
        }

        setHeadings(items);

        // Scroll spy logic
        const handleScroll = () => {
            const headingElements = items.map(h => document.getElementById(h.id));
            const scrollPosition = window.scrollY + 100; // offset

            let currentId = '';
            for (const el of headingElements) {
                if (el && el.offsetTop <= scrollPosition) {
                    currentId = el.id;
                }
            }
            setActiveId(currentId);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [content]);

    if (headings.length < 2) return null;

    return (
        <nav className="hidden lg:block sticky top-32 max-h-[80vh] overflow-auto">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Table of Contents
            </h4>
            <ul className="space-y-3 text-sm border-l border-gray-100">
                {headings.map((h, i) => (
                    <li key={i} className={`pl-4 ${h.level === 3 ? 'ml-2' : ''}`}>
                        <a
                            href={`#${h.id}`}
                            className={`block transition-colors hover:text-blue-600 ${activeId === h.id
                                    ? 'text-blue-600 font-medium border-l-2 border-blue-600 -ml-[17px] pl-4'
                                    : 'text-gray-500'
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#${h.id}`)?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setActiveId(h.id);
                            }}
                        >
                            {h.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
