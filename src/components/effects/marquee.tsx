"use client"

import { motion } from "framer-motion"

interface MarqueeProps {
  text: string
  speed?: number
  direction?: "left" | "right"
  className?: string
}

export function Marquee({ text, speed = 50, direction = "left", className = "" }: MarqueeProps) {
  const repeatedText = Array(20).fill(text).join(" /// ")

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="inline-block px-2">{repeatedText}</span>
        <span className="inline-block px-2">{repeatedText}</span>
      </motion.div>
    </div>
  )
}
