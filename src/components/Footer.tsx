import './Footer.css'

const FOOTER_COLUMNS = [
  {
    heading: 'Platform',
    links: ['All Games', 'Multiplayer', 'Tournaments', 'Leaderboards'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Press'],
  },
  {
    heading: 'Support',
    links: ['Help Center', 'Report a Bug', 'Community Rules'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">WRAFT</span>
          <p className="footer__tagline">Enter the grid. Own the arena.</p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading} className="footer__col">
            <h4 className="footer__col-heading">{col.heading}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Wraft. All rights reserved.</p>
      </div>
    </footer>
  )
}
