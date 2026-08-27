import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Multiplayer from '../components/Multiplayer'
import Tournaments from '../components/Tournaments'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Multiplayer />
      <Tournaments />
    </>
  )
}
