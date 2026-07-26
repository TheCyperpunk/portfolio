"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let timeout: ReturnType<typeof setTimeout> | undefined
    const interval = setInterval(() => {
      setGlitching(true)
      timeout = setTimeout(() => setGlitching(false), 200)
    }, 3000)

    return () => {
      clearInterval(interval)
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <motion.span
        className="relative z-10"
        animate={glitching ? {
          x: [0, -2, 2, -2, 0],
          textShadow: [
            "0 0 0 transparent",
            "2px 0 0 #ff00ff, -2px 0 0 #00ffff",
            "-2px 0 0 #ff00ff, 2px 0 0 #00ffff",
            "0 0 0 transparent",
          ]
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>

      {/* Glitch layers */}
      {glitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-neon-red opacity-70"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
            animate={{
              x: [-2, 2, -2],
            }}
            transition={{ duration: 0.2, repeat: 1 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-cyan-400 opacity-70"
            style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
            animate={{
              x: [2, -2, 2],
            }}
            transition={{ duration: 0.2, repeat: 1 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  )
}
