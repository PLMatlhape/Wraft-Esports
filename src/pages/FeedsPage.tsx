import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import './FeedsPage.css'

interface Clip {
  title: string
  team: string
  game: string
  duration: string
}

const CLIPS: Clip[] = [
  { title: 'Clutch 1v4 on Ascent', team: 'Wraft Prime', game: 'Valorant', duration: '0:38' },
  { title: 'Last-second winner', team: 'Wraft Strikers', game: 'FIFA', duration: '0:22' },
  { title: 'Nuketown quad-kill', team: 'Wraft Vanguard', game: 'Call of Duty', duration: '0:15' },
  { title: 'Chicken dinner, zero shots fired', team: 'Wraft Squad One', game: 'PUBG', duration: '1:04' },
  { title: 'Ace to close out the map', team: 'Wraft EU', game: 'Valorant', duration: '0:41' },
  { title: 'Overtime bicycle kick', team: 'Wraft Reserves', game: 'FIFA', duration: '0:19' },
]

export default function FeedsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Feeds"
        heading="Every highlight, one feed."
        body="Clips posted by Wraft teams across every game — clutches, plays, and match-point moments as they happen."
      />

      <section className="feeds">
        <div className="container feeds__grid">
          {CLIPS.map((clip, i) => (
            <Reveal key={clip.title} as="article" delay={i * 70} className="clip-card">
              <div className="clip-card__thumb" aria-hidden="true">
                <span className="clip-card__thumb-glow" />
                <span className="clip-card__play">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
                  </svg>
                </span>
                <span className="clip-card__duration">{clip.duration}</span>
              </div>
              <h3 className="clip-card__title">{clip.title}</h3>
              <p className="clip-card__meta">
                {clip.team} &middot; {clip.game}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
