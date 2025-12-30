"use client";

import { useState } from 'react';

export default function CallRevealClient() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const phone = '+1-888-769-4448';

  async function copy() {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="inline-flex items-center gap-3">
      {!visible ? (
        <button onClick={() => setVisible(true)} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-md text-sm hover:bg-blue-100 transition">Show number</button>
      ) : (
        <div className="flex items-center gap-2">
          <a href="tel:+18887694448" className="font-mono text-sm text-gray-900">{phone}</a>
          <button onClick={copy} className="px-2 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-500 transition">Copy</button>
          <button onClick={() => setVisible(false)} className="px-2 py-1 border rounded-md text-sm">Hide</button>
          {copied && <span className="ml-2 text-sm text-green-600">Copied!</span>}
        </div>
      )}
    </div>
  );
}
