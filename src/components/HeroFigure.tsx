import { useEffect, useMemo, useRef, useState } from 'react'
import fallbackImg from '../images/wraft_home.png'
import './HeroFigure.css'

const frameModules = import.meta.glob('../images/Home/Wraft_F*.png',{eager:true,import:'default'}) as Record<string,string>
const FRAMES:string[]=Array.from({length:7},(_,index)=>frameModules[`../images/Home/Wraft_F${index}.png`]).filter((url):url is string=>Boolean(url))
const FIRST_FRAME_HOLD_MS=1500
const FRAME_DURATION_MS=230

export default function HeroFigure(){
  const frames=framesOrFallback()
  const [frameIndex,setFrameIndex]=useState(0)
  const frameIndexRef=useRef(0)
  const prefersReducedMotion=useMemo(()=>typeof window!=='undefined'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches,[])

  useEffect(()=>{
    if(prefersReducedMotion||frames.length<=1)return
    const preloaded=frames.map(src=>{const image=new Image();image.src=src;return image})
    let timeoutId:number
    function scheduleNextFrame(currentIndex:number){
      const holdTime=currentIndex===0?FIRST_FRAME_HOLD_MS:FRAME_DURATION_MS
      timeoutId=window.setTimeout(()=>{
        const nextIndex=(currentIndex+1)%frames.length
        frameIndexRef.current=nextIndex
        setFrameIndex(nextIndex)
        scheduleNextFrame(nextIndex)
      },holdTime)
    }
    scheduleNextFrame(frameIndexRef.current)
    return()=>{window.clearTimeout(timeoutId);preloaded.forEach(image=>{image.onload=null;image.onerror=null})}
  },[frames,prefersReducedMotion])

  const activeIndex=prefersReducedMotion?frames.length-1:frameIndex
  return <div className="hero-figure" aria-hidden="true"><div className="hero-figure__grid"/><img src={frames[activeIndex]} alt="" className="hero-figure__img" draggable={false}/><svg className="hero-figure__nodes" viewBox="0 0 420 620">{NODES.map((n,i)=><circle key={i} cx={n.x} cy={n.y} r={n.r} fill="var(--color-cyan-soft)" opacity={n.o}/>)}</svg></div>
}
function framesOrFallback():string[]{return FRAMES.length>0?FRAMES:[fallbackImg]}
const NODES=[{x:40,y:120,r:2,o:.5},{x:380,y:160,r:1.6,o:.4},{x:60,y:300,r:2.2,o:.6},{x:360,y:340,r:1.8,o:.45},{x:30,y:480,r:1.4,o:.35},{x:390,y:500,r:2,o:.5},{x:210,y:40,r:1.6,o:.4}]
