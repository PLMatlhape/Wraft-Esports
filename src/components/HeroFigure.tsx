import { useEffect, useMemo, useRef, useState } from 'react'
import fallbackImg from '../images/wraft_home.png'
import './HeroFigure.css'

// The hero animation is a 7-frame sequence: F0 → F6.
// Keep the list explicit so a missing/renamed asset cannot silently change
// the animation sequence or make the component fall back unexpectedly.
const frameModules = import.meta.glob('../images/Home/Wraft_F*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const FRAMES: string[] = Array.from({ length: 7 }, (_, index) => {
  const path = `../images/Home/Wraft_F${index}.png`
  return frameModules[path]
}).filter((url): url is string => Boolean(url))

const FRAME_DURATION_MS = 250

export default function HeroFigure() {
  const frames = framesOrFallback()
  const [frameIndex, setFrameIndex] = useState(0)
  const frameIndexRef = useRef(0)
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    if (prefersReducedMotion || frames.length <= 1) return

    // Preload every frame before playback starts. This prevents a slow image
    // request from making the sequence appear to skip or jump.
    const preloaded = frames.map((src) => {
      const image = new Image()
      image.src = src
      return image
    })

    const id = window.setInterval(() => {
      frameIndexRef.current = (frameIndexRef.current + 1) % frames.length
      setFrameIndex(frameIndexRef.current)
    }, FRAME_DURATION_MS)

    return () => {
      window.clearInterval(id)
      preloaded.forEach((image) => {
        image.onload = null
        image.onerror = null
      })
    }
  }, [frames, prefersReducedMotion])

  const activeIndex = prefersReducedMotion ? frames.length - 1 : frameIndex

  return (
    <div className="hero-figure" aria-hidden="true">
      <div className="hero-figure__grid" />

      <img
        src={frames[activeIndex]}
        alt=""
        className="hero-figure__img"
        draggable={false}
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
