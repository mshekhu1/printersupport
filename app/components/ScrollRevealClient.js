"use client"

import { useEffect, useRef, useState } from 'react'

export default function ScrollRevealClient({ children, className = '', threshold = 0.15, rootMargin = '0px', delay = 0, once = false, effect = 'fade-up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Respect reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once && observer && el) observer.unobserve(el)
        } else {
          // If not once, allow it to hide so it can re-animate when entering again
          if (!once) setVisible(false)
        }
      })
    }, { threshold, rootMargin })

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return (
    <div
      ref={ref}
      data-sr-once={once ? 'true' : 'false'}
      className={`${className} reveal-effect-${effect} transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
