'use client';

import { usePathname } from 'next/navigation';
import PhoneLink, { PHONE_DISPLAY } from './PhoneLink';

function isBlogDetailPath(pathname) {
  // /blog/some-slug — not /blog or /blog-uploads
  return /^\/blog\/[^/]+/.test(pathname || '');
}

export default function StickyCallBar() {
  const pathname = usePathname();
  if (isBlogDetailPath(pathname)) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] md:hidden">
      <div className="px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 bg-white border-t border-slate-200">
        <PhoneLink
          location="sticky_mobile_bar"
          className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white py-3.5 px-4 font-bold hover:bg-blue-800"
          showIcon
        >
          Call {PHONE_DISPLAY}
          <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-100">
            Free diagnosis
          </span>
        </PhoneLink>
      </div>
    </div>
  );
}

/** Bottom padding for sticky bar — skipped on blog detail pages */
export function StickyCallPad({ children }) {
  const pathname = usePathname();
  const hideSticky = isBlogDetailPath(pathname);
  return <div className={hideSticky ? undefined : 'pb-20 md:pb-0'}>{children}</div>;
}
