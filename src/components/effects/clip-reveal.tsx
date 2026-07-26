"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"

interface ClipRevealProps {
  children: ReactNode
  direction?: "left" | "right" | "top" | "bottom"
  delay?: number
}

export function ClipReveal({ children, direction = "bottom", delay = 0 }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const clipPaths = {
    left: useTransform(scrollYProgress, [0, 0.5], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]),
    right: useTransform(scrollYProgress, [0, 0.5], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]),
    top: useTransform(scrollYProgress, [0, 0.5], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]),
    bottom: useTransform(scrollYProgress, [0, 0.5], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"])
  }

  return (
    <motion.div
      ref={ref}
      style={{ clipPath: clipPaths[direction] }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
