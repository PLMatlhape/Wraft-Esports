import HeroFigure from './HeroFigure'
import FeatureRail from './FeatureRail'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            The signal is live — are you ready to deploy?
          </p>
          <h1 className="hero__headline">
            ENTER
            <span className="hero__headline-accent">THE GRID</span>
          </h1>
          <div className="hero__rule" />

          <div className="hero__actions">
            <a href="#games" className="hero__cta">
              Play Now
            </a>
            <div className="hero__socials" aria-label="Wraft on social media">
              <a href="#" aria-label="Facebook" className="hero__social-icon">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="hero__social-icon">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hero__social-icon">
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__figure-wrap">
          <HeroFigure />
        </div>

        <div className="hero__features">
          <FeatureRail />
        </div>
      </div>

      <button className="hero__play" aria-label="Play trailer" type="button">
        <PlayIcon />
      </button>
    </section>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4v2H9v3h2v7h3v-7h2.2l.8-3H14v-2c0-.5.4-1 1-1z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  )
}
