'use client';

import { Phone } from 'lucide-react';

const PHONE_HREF = 'tel:+18887594448';
const PHONE_DISPLAY = '+1 888 759 4448';

/** Unused by default (removed from layout). Kept for optional money-page use. */
export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] md:hidden pointer-events-none">
      <div className="px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 bg-white border-t border-gray-200">
        <a
          href={PHONE_HREF}
          className="pointer-events-auto flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 text-white py-3.5 px-4 font-bold hover:bg-blue-700 active:scale-[0.99] transition"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span>Call {PHONE_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
}
