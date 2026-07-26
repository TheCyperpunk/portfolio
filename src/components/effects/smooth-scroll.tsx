"use client"

import { useEffect } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LenisInstance = any

export function SmoothScroll() {
  useEffect(() => {
    let instance: LenisInstance
    let frameId = 0
    let cancelled = false

    async function init() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const Lenis = (await import("lenis")).default
      if (cancelled) return
      instance = new Lenis({
        lerp: 0.08,
      })
      function raf(time: number) {
        if (cancelled) return
        instance.raf(time)
        frameId = requestAnimationFrame(raf)
      }
      frameId = requestAnimationFrame(raf)
    }
    init()
    return () => {
      cancelled = true
      cancelAnimationFrame(frameId)
      if (instance) instance.destroy()
    }
  }, [])
  return null
}
