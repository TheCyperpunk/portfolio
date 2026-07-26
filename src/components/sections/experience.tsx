"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/sections/section-wrapper"
import { experiences } from "@/data/portfolio"

function TimelineItem({
  experience,
}: {
  experience: (typeof experiences)[0]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="relative pl-8 pb-12 last:pb-0">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-neon-red/50 bg-bg-void"
      >
        <div className="h-2.5 w-2.5 rounded-full bg-neon-red" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="ml-4"
      >
        <span className="inline-block rounded-full bg-neon-red/10 px-3 py-1 text-xs font-medium text-neon-red mb-2">
          {experience.period}
        </span>
        <h3 className="text-xl font-semibold text-white font-space">{experience.role}</h3>
        <p className="text-sm text-text-dim mt-1">{experience.company}</p>
        <p className="text-sm text-text-ghost mt-3 leading-relaxed">
          {experience.description}
        </p>
        <ul className="mt-3 space-y-1.5">
          {experience.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-text-ghost"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-red/50" />
              {h}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { once: true })

  return (
    <SectionWrapper id="experience">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <SectionHeader subText="My Journey" title="Work" highlight="Experience" />

        <div className="relative mx-auto max-w-3xl">
          <div ref={lineRef} className="absolute left-3.5 top-0 bottom-0 w-px bg-wire">
            <motion.div
              initial={{ height: 0 }}
              animate={lineInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-neon-red via-neon-mid to-neon-light"
            />
          </div>
          <div className="relative">
            {experiences.map((exp) => (
              <TimelineItem key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
