import playerImg from '../images/wraft_home.png'
import './HeroFigure.css'

/**
 * Wraft's signature hero visual: the player cutout lit from behind by
 * a vertical cyan signal-beam, with a faint circuit-grid mask and a
 * scatter of "network node" particles for depth.
 */
export default function HeroFigure() {
  return (
    <div className="hero-figure" aria-hidden="true">
      <div className="hero-figure__beam" />
      <div className="hero-figure__grid" />

      <img
        src={playerImg}
        alt=""
        className="hero-figure__img"
      />

      <svg className="hero-figure__nodes" viewBox="0 0 420 620">
        {NODES.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="var(--color-cyan-soft)" opacity={n.o} />
        ))}
      </svg>
    </div>
  )
}

const NODES = [
  { x: 40, y: 120, r: 2, o: 0.5 },
  { x: 380, y: 160, r: 1.6, o: 0.4 },
  { x: 60, y: 300, r: 2.2, o: 0.6 },
  { x: 360, y: 340, r: 1.8, o: 0.45 },
  { x: 30, y: 480, r: 1.4, o: 0.35 },
  { x: 390, y: 500, r: 2, o: 0.5 },
  { x: 210, y: 40, r: 1.6, o: 0.4 },
]
