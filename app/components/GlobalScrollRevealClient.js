"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Enhanced scroll reveal system with better performance and reliability
export default function GlobalScrollRevealClient() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respect reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, [data-reveal]').forEach(el => {
        el.classList.add('reveal-visible')
      })
      return
    }

    const observed = new WeakSet()
    let observer = null
    let mutationObserver = null

    // Create IntersectionObserver
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          const onceAttr = el.getAttribute('data-sr-once')
          
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible')
            if (onceAttr === 'true') {
              observer.unobserve(el)
            }
          } else {
            // Remove class to allow re-animation unless once is set
            if (onceAttr !== 'true') {
              el.classList.remove('reveal-visible')
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Apply reveal classes and observe element
    const applyReveal = (el, index = 0, parent = null) => {
      if (!el || observed.has(el)) return
      
      // Skip if element should be ignored
      if (el.hasAttribute('data-sr-ignore')) return

      // Get effect type (default: fade-up)
      const effect = el.getAttribute('data-sr-effect') || 
                     (parent && parent.getAttribute('data-sr-effect')) || 
                     'fade-up'

      // Add reveal classes
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal')
        el.classList.add(`reveal-effect-${effect}`)
        
        // Apply staggered delay if parent has reveal-stagger class
        if (parent && parent.classList.contains('reveal-stagger') && index > 0) {
          el.style.transitionDelay = `${index * 80}ms`
        }
      }

      observer.observe(el)
      observed.add(el)
    }

    // Scan and apply reveal to elements
    const scanAndApply = (root = document) => {
      // Target common semantic elements and elements with data-reveal attribute
      const selectors = [
        'section:not([data-sr-ignore])',
        'article:not([data-sr-ignore])',
        '[data-reveal]:not([data-sr-ignore])',
        '.reveal-target:not([data-sr-ignore])',
      ]

      selectors.forEach(selector => {
        const elements = Array.from(root.querySelectorAll(selector))
        elements.forEach(el => {
          // Handle stagger containers
          if (el.classList.contains('reveal-stagger')) {
            Array.from(el.children).forEach((child, i) => {
              if (child.nodeType === 1) {
                applyReveal(child, i, el)
              }
            })
          } else {
            applyReveal(el, 0, null)
          }
        })
      })
    }

    // Initial scan
    const initDelay = setTimeout(() => {
      scanAndApply()
    }, 100)

    // Watch for dynamically added content
    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return // Only process element nodes
          
          // Check if the node itself matches
          if (node.matches && (
            node.matches('section:not([data-sr-ignore])') ||
            node.matches('article:not([data-sr-ignore])') ||
            node.matches('[data-reveal]:not([data-sr-ignore])') ||
            node.matches('.reveal-target:not([data-sr-ignore])')
          )) {
            if (node.classList.contains('reveal-stagger')) {
              Array.from(node.children).forEach((child, i) => {
                if (child.nodeType === 1) {
                  applyReveal(child, i, node)
                }
              })
            } else {
              applyReveal(node, 0, null)
            }
          }
          
          // Scan inside the node
          scanAndApply(node)
        })
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Re-scan on full page load (for late-loading content)
    window.addEventListener('load', () => {
      setTimeout(scanAndApply, 200)
    })

    // Cleanup
    return () => {
      clearTimeout(initDelay)
      if (observer) observer.disconnect()
      if (mutationObserver) mutationObserver.disconnect()
      window.removeEventListener('load', scanAndApply)
    }
  }, [pathname])

  return null
}

