"use client"

import { useRef, useEffect, useState, memo } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/sections/section-wrapper"
import { personalInfo, stats } from "@/data/portfolio"

const AnimatedCounter = memo(function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center relative">
      <div className="text-3xl sm:text-4xl font-bold font-syne text-white relative">
        <span>{count}+</span>
      </div>
      <div className="mt-1 text-xs sm:text-sm text-text-ghost">{label}</div>
    </div>
  )
})

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <SectionWrapper id="about">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 sm:px-16">
        <SectionHeader subText="Get To Know" title="About" highlight="Me" />

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ y }}
          >
            <p className="text-base sm:text-lg text-text-dim leading-relaxed">
              {personalInfo.description}
            </p>
            <p className="text-text-ghost leading-relaxed">
              Currently pursuing B.Tech in Computer Science and Engineering at APJ Abdul Kalam
              Technological University, Kerala. My work spans MERN applications, local AI
              assistants, Web3 investment platforms, and emergency-response automation tools.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["React", "Next.js", "Svelte", "Node.js", "Solidity", "Ollama", "Docker"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neon-red/20 bg-neon-red/5 px-3 py-1 text-xs font-medium text-neon-red cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-wire bg-bg-surface/80 p-4 sm:p-6 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-neon-red/45 hover:bg-bg-surface hover:shadow-[0_18px_45px_rgba(168,85,247,0.22)]"
              >
                <div className="absolute top-3 right-3 h-8 w-8 rounded-tr-md border-t-2 border-r-2 border-neon-red/30 transition-all duration-300 group-hover:border-neon-red/80 group-hover:h-10 group-hover:w-10" />
                <div className="absolute bottom-3 left-3 h-8 w-8 rounded-bl-md border-b-2 border-l-2 border-neon-red/15 opacity-0 transition-all duration-300 group-hover:border-neon-red/60 group-hover:opacity-100" />
                <AnimatedCounter value={stat.value} label={stat.label} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
