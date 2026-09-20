'use client';

import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/phone';

function trackCall(location) {
  try {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'phone_click',
      phone_number: '+18887594448',
      click_location: location || 'unknown',
    });
  } catch {
    // ignore
  }
}

export default function PhoneLink({
  children,
  className = '',
  location = 'site',
  showIcon = false,
  ariaLabel,
  onClick,
}) {
  return (
    <a
      href={PHONE_HREF}
      className={className}
      aria-label={ariaLabel || `Call ${PHONE_DISPLAY}`}
      onClick={(e) => {
        trackCall(location);
        if (typeof onClick === 'function') onClick(e);
      }}
    >
      {showIcon ? (
        <span className="inline-flex items-center gap-2">
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="inline-flex items-center gap-2">{children || PHONE_DISPLAY}</span>
        </span>
      ) : (
        children || PHONE_DISPLAY
      )}
    </a>
  );
}

export { trackCall };
