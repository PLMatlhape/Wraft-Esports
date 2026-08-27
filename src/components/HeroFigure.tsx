import './HeroFigure.css'

/**
 * Wraft's signature visual: a wireframe tactical operator built from
 * layered SVG strokes rather than a photographic asset, lit by a
 * vertical cyan signal-beam and a scatter of "network node" particles.
 * This stands in for the reference's red beam + character photo while
 * keeping everything original and lightweight.
 */
export default function HeroFigure() {
  return (
    <div className="hero-figure" aria-hidden="true">
      <div className="hero-figure__beam" />

      <svg
        className="hero-figure__svg"
        viewBox="0 0 420 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Helmet */}
        <path
          d="M150 90c0-38 30-68 68-68s68 30 68 68v34c0 14-8 22-20 26l-8 40-96 4-6-44c-4-4-6-14-6-24V90z"
          stroke="var(--color-cyan)"
          strokeWidth="2"
          opacity="0.9"
        />
        <path
          d="M168 108c8-20 26-32 50-32s42 12 50 32"
          stroke="var(--color-cyan-soft)"
          strokeWidth="1.4"
          opacity="0.6"
        />
        {/* Visor */}
        <rect x="176" y="120" width="68" height="20" rx="4" stroke="var(--color-cyan)" strokeWidth="1.6" opacity="0.85" />

        {/* Torso / rig */}
        <path
          d="M140 194c20-14 44-20 78-20s58 6 78 20l14 96c4 30-4 58-14 84l-10 130H150l-10-130c-10-26-18-54-14-84z"
          stroke="var(--color-cyan)"
          strokeWidth="2"
          opacity="0.85"
        />
        <path d="M160 230h100M154 270h112M150 310h120" stroke="var(--color-cyan-soft)" strokeWidth="1" opacity="0.35" />

        {/* Chest rig panels */}
        <rect x="172" y="214" width="36" height="46" rx="4" stroke="var(--color-cyan-soft)" strokeWidth="1.2" opacity="0.5" />
        <rect x="212" y="214" width="36" height="46" rx="4" stroke="var(--color-cyan-soft)" strokeWidth="1.2" opacity="0.5" />

        {/* Left arm */}
        <path
          d="M140 200c-24 10-40 30-46 58l-14 84c-4 18 2 32 16 40"
          stroke="var(--color-cyan)"
          strokeWidth="2"
          opacity="0.8"
        />
        {/* Right arm holding rifle line */}
        <path
          d="M296 200c26 12 42 32 48 60l10 70"
          stroke="var(--color-cyan)"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Rifle (abstract diagonal silhouette) */}
        <path
          d="M60 430 L300 250"
          stroke="var(--color-cyan)"
          strokeWidth="3"
          opacity="0.9"
          strokeLinecap="round"
        />
        <path d="M96 410 L132 384" stroke="var(--color-cyan-soft)" strokeWidth="2" opacity="0.6" />
        <circle cx="60" cy="430" r="5" fill="var(--color-cyan)" opacity="0.9" />

        {/* Legs */}
        <path
          d="M168 520l-18 96M258 520l18 96"
          stroke="var(--color-cyan)"
          strokeWidth="2"
          opacity="0.75"
        />

        {/* Node particles */}
        {NODES.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="var(--color-cyan-soft)" opacity={n.o} />
        ))}
      </svg>

      <div className="hero-figure__grid" />
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
