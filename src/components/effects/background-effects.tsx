"use client"

import { memo } from "react"
import { motion } from "framer-motion"

const GRADIENT_BLOBS = [
  { className: "w-[700px] h-[700px] -top-[15%] -left-[10%]", bg: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 65%)", blur: "blur(90px)", x: [0, 30, -20, 0], y: [0, -50, 20, 0], scale: [1, 1.05, 0.95, 1], duration: 20 },
  { className: "w-[600px] h-[600px] -top-[5%] right-[5%]", bg: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 65%)", blur: "blur(80px)", x: [0, -30, 20, 0], y: [0, 40, -30, 0], scale: [1, 0.95, 1.05, 1], duration: 28, delay: 2 },
  { className: "w-[500px] h-[500px] top-[35%] left-[25%]", bg: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", blur: "blur(100px)", x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.9, 1], duration: 35, delay: 5 },
  { className: "w-[500px] h-[500px] bottom-[5%] right-[10%]", bg: "radial-gradient(circle, rgba(217,70,239,0.15) 0%, transparent 65%)", blur: "blur(80px)", x: [0, -40, 25, 0], y: [0, 35, -25, 0], scale: [1, 0.92, 1.08, 1], duration: 22, delay: 8 },
]

interface Particle {
  id: number
  x: string
  y: string
  delay: number
  duration: number
  dx: number
  dy: number
}

function getFloatingParticles(): Particle[] {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: `${(i * 37 + 11) % 100}%`,
    y: `${(i * 61 + 17) % 100}%`,
    delay: (i * 1.7) % 10,
    duration: 18 + (i % 5) * 2,
    dx: ((i * 29) % 120) - 60,
    dy: ((i * 43) % 120) - 60,
  }))
}

function FloatingParticle({ delay, duration, x, y, dx, dy }: Particle) {
  return (
    <motion.div
      className="absolute hidden sm:block w-1 h-1 rounded-full bg-neon-red/30"
      style={{ willChange: "transform, opacity" }}
      initial={{ x, y, opacity: 0 }}
      animate={{
        x: [x, x + dx, x + dx * 0.5, x],
        y: [y, y + dy, y + dy * 0.5, y],
        opacity: [0, 0.6, 0.6, 0],
        scale: [0, 1.5, 1, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

const MemoizedParticles = memo(function Particles() {
  const particles = getFloatingParticles()
  return (
    <>
      {particles.map((p) => (
        <FloatingParticle key={p.id} {...p} />
      ))}
    </>
  )
})

export const BackgroundEffects = memo(function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {GRADIENT_BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${blob.className}`}
          style={{
            background: blob.bg,
            filter: blob.blur,
            willChange: "transform",
          }}
          animate={{ x: blob.x, y: blob.y, scale: blob.scale }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay ?? 0,
          }}
        />
      ))}

      <MemoizedParticles />

    </div>
  )
})
