import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll position on route change, except when navigating home
 * with a `scrollTo` section id (handled by HomePage itself).
 */
export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (!state?.scrollTo) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return null
}
