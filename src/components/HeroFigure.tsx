import { useEffect, useMemo, useRef, useState } from 'react'
import fallbackImg from '../images/wraft_home.png'
import './HeroFigure.css'

// Loads every frame in src/images/Home/ (Wraft_F1.png ... Wraft_F6.png)
// and sorts them numerically by the trailing number in the filename.
const frameModules = import.meta.glob('../images/Home/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const FRAMES: string[] = Object.entries(frameModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/(\d+)(?=\.png$)/)?.[0] ?? '0', 10)
    const numB = parseInt(b.match(/(\d+)(?=\.png$)/)?.[0] ?? '0', 10)
    return numA - numB
  })
  .map(([, url]) => url)

// How long each frame stays on screen before advancing. At 160ms the
// whole 6-frame pass took well under a second — too fast to register
// as motion, just looked like a jump-cut. ~1.5–2s per frame is what
// actually sells the "approaching" illusion.
const FRAME_DURATION_MS = 1800
const TOTAL_LOOPS = 2

/**
 * Plays through the Wraft_F1 → Wraft_F6 sequence on mount (frames are
 * already pre-sized/pre-positioned by design, so no scaling is applied
 * here — just a straight frame swap). Loops twice, then settles on the
 * final frame.
 */
export default function HeroFigure() {
  const frames = framesOrFallback()
  const [frameIndex, setFrameIndex] = useState(0)
  const loopsRef = useRef(0)
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    if (prefersReducedMotion || frames.length <= 1) return

    const id = window.setInterval(() => {
      setFrameIndex((current) => {
        const next = current + 1
        if (next < frames.length) return next

        loopsRef.current += 1
        if (loopsRef.current >= TOTAL_LOOPS) {
          window.clearInterval(id)
          return frames.length - 1
        }
        return 0
      })
    }, FRAME_DURATION_MS)

    return () => window.clearInterval(id)
  }, [frames.length, prefersReducedMotion])

  const activeIndex = prefersReducedMotion ? frames.length - 1 : frameIndex

  return (
    <div className="hero-figure" aria-hidden="true">
      <div className="hero-figure__grid" />

      <img
        src={frames[activeIndex]}
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

function framesOrFallback(): string[] {
  return FRAMES.length > 0 ? FRAMES : [fallbackImg]
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