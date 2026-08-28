import { useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms, useful for grids/lists rendered in a loop. */
  delay?: number
  /** Direction used when the element enters the viewport. */
  direction?: 'up' | 'left' | 'right'
  as?: ElementType
  className?: string
}

export default function Reveal({ children, delay = 0, direction = 'up', as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal-direction={direction}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
