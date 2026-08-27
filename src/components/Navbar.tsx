import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../images/Wraft_logo.png'
import './Navbar.css'

type NavLink =
  | { label: string; kind: 'route'; to: string }
  | { label: string; kind: 'anchor'; id: string }

const NAV_LINKS: NavLink[] = [
  { label: 'Home', kind: 'anchor', id: 'home' },
  { label: 'About', kind: 'anchor', id: 'about' },
  { label: 'Games', kind: 'route', to: '/games' },
  { label: 'Feeds', kind: 'route', to: '/feeds' },
  { label: 'Teams', kind: 'route', to: '/teams' },
  { label: 'Multiplayer', kind: 'anchor', id: 'multiplayer' },
  { label: 'Tournaments', kind: 'anchor', id: 'tournaments' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goToSection(id: string) {
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="WraftEsports home">
          <img src={logo} alt="" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            Wraft<span className="navbar__logo-e">E</span>
            <span className="navbar__logo-sports">sports</span>
          </span>
        </Link>

        <div className="navbar__right">
          <nav className="navbar__links" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.kind === 'route' ? (
                <Link key={link.label} to={link.to} className="navbar__link">
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  className="navbar__link navbar__link--btn"
                  onClick={() => goToSection(link.id)}
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>

          <div className="navbar__actions">
            <button className="navbar__icon-btn" aria-label="Search" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <button
              className="navbar__menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {NAV_LINKS.map((link) =>
            link.kind === 'route' ? (
              <Link
                key={link.label}
                to={link.to}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                type="button"
                className="navbar__mobile-link navbar__mobile-link--btn"
                onClick={() => goToSection(link.id)}
              >
                {link.label}
              </button>
            ),
          )}
        </nav>
      )}
    </header>
  )
}
