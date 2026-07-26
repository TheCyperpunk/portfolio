"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface TicketCardProps {
  title: string
  subtitle?: string
  description?: string
  price?: string
  badge?: string
  children?: ReactNode
  delay?: number
}

export function TicketCard({ 
  title, 
  subtitle, 
  description, 
  price, 
  badge,
  children,
  delay = 0 
}: TicketCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Ticket background with gradient */}
      <div className="relative overflow-hidden rounded-2xl border border-wire bg-gradient-to-br from-bg-surface via-bg-elevated to-bg-surface p-6 sm:p-8">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-red/10 via-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.5 }}
        />

        {/* Perforated edge effect */}
        <div className="absolute left-0 top-0 bottom-0 w-1 flex flex-col justify-around">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-wire" />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 ml-4">
          {badge && (
            <motion.div
              className="inline-block mb-3 px-3 py-1 rounded-full bg-neon-red/20 border border-neon-red/40 text-neon-red text-xs font-mono uppercase tracking-wider"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: delay + 0.2, type: "spring" }}
            >
              {badge}
            </motion.div>
          )}

          <h3 className="text-2xl sm:text-3xl font-bold font-syne text-white mb-2">
            {title}
          </h3>

          {subtitle && (
            <p className="text-sm text-text-dim font-mono mb-4">{subtitle}</p>
          )}

          {description && (
            <p className="text-text-ghost text-sm leading-relaxed mb-4">
              {description}
            </p>
          )}

          {children}

          {price && (
            <motion.div
              className="mt-6 pt-4 border-t border-wire flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.4 }}
            >
              <span className="text-xs text-text-ghost font-mono">PRICE</span>
              <span className="text-2xl font-bold text-neon-red font-mono">{price}</span>
            </motion.div>
          )}
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-neon-red/30 rounded-tr-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neon-red/30 rounded-br-lg" />
      </div>
    </motion.div>
  )
}
