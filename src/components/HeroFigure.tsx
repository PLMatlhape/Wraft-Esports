import { useEffect, useMemo, useState } from 'react'
import fallbackImg from '../images/wraft_home.png'
import './HeroFigure.css'

const frameModules = import.meta.glob('../images/Home/Wraft_F*.png', { eager: true, import: 'default' }) as Record<string, string>
const FRAMES: string[] = Object.entries(frameModules)
  .sort(([a], [b]) => Number(a.match(/Wraft_F(\d+)/)?.[1] ?? 999) - Number(b.match(/Wraft_F(\d+)/)?.[1] ?? 999))
  .map(([, url]) => url)
const FRAME_DURATION_MS = 220

export default function HeroFigure() {
  const prefersReducedMotion = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])
  const frames = FRAMES.length > 0 ? FRAMES : [fallbackImg]
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion || frames.length <= 1) return
    let index = 0
    let timer: number | undefined
    let cancelled = false
    const preloaded = frames.map((src) => { const image = new Image(); image.src = src; return image })

    const advance = () => {
      if (cancelled) return
      index = (index + 1) % frames.length
      setFrameIndex(index)
      timer = window.setTimeout(advance, FRAME_DURATION_MS)
    }

    timer = window.setTimeout(advance, FRAME_DURATION_MS)
    return () => {
      cancelled = true
      if (timer !== undefined) window.clearTimeout(timer)
      preloaded.forEach((image) => { image.onload = null; image.onerror = null })
    }
  }, [frames, prefersReducedMotion])

  return <div className="hero-figure" aria-hidden="true">
    <div className="hero-figure__grid" />
    <img src={frames[prefersReducedMotion ? frames.length - 1 : frameIndex]} alt="" className="hero-figure__img" draggable={false} />
    <svg className="hero-figure__nodes" viewBox="0 0 420 620">
      {NODES.map((n, i) => <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="var(--color-cyan-soft)" opacity={n.o} />)}
    </svg>
  </div>
}

const NODES = [
  { x: 40, y: 120, r: 2, o: 0.5 }, { x: 380, y: 160, r: 1.6, o: 0.4 }, { x: 60, y: 300, r: 2.2, o: 0.6 },
  { x: 360, y: 340, r: 1.8, o: 0.45 }, { x: 30, y: 480, r: 1.4, o: 0.35 }, { x: 390, y: 500, r: 2, o: 0.5 }, { x: 210, y: 40, r: 1.6, o: 0.4 },
]
