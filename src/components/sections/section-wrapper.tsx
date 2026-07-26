"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id={id} ref={ref} className={`relative py-16 sm:py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({
  subText,
  title,
  highlight,
}: {
  subText: string
  title: string
  highlight: string
}) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <p className="text-neon-red font-space text-[11px] md:text-[18px] uppercase tracking-[0.3em] font-medium">
        {subText}
      </p>
      <h2 className="mt-3 text-white font-syne font-extrabold uppercase tracking-tight md:text-[60px] sm:text-[44px] xs:text-[35px] text-[30px] leading-none">
        {title}{" "}
        <span className="bg-gradient-to-r from-neon-red to-neon-light bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <div className="mx-auto mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-neon-red to-neon-light" />
    </div>
  )
}
