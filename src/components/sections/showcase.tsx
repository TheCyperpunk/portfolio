"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { Marquee } from "@/components/effects/marquee"
import { TicketCard } from "@/components/ui/ticket-card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2, Award } from "lucide-react"

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <SectionWrapper id="showcase">
      <div ref={containerRef} className="relative">
        {/* Marquee section */}
        <div className="py-8 border-y border-wire bg-bg-surface/50 backdrop-blur-sm">
          <Marquee 
            text="FULL STACK DEVELOPER" 
            speed={30}
            className="text-4xl sm:text-6xl font-bold font-syne text-neon-red/20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-20">
          {/* Featured Work Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="w-2 h-2 rounded-full bg-neon-red"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <h2 className="text-sm font-mono text-text-dim uppercase tracking-[0.3em]">
                Featured Work
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Image/Visual */}
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden border border-wire bg-gradient-to-br from-neon-dark/20 to-neon-purple/20"
                style={{ y }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-red/10 via-transparent to-neon-purple/10"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    style={{ rotate }}
                    className="w-32 h-32 rounded-full border-4 border-neon-red/30 border-t-neon-red"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-ghost">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>LIVE PROJECT</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-4xl sm:text-5xl font-bold font-syne text-white mb-4">
                    Enterprise
                    <span className="block bg-gradient-to-r from-neon-red to-neon-light bg-clip-text text-transparent">
                      Solutions
                    </span>
                  </h3>
                  <p className="text-text-dim leading-relaxed mb-6">
                    Building scalable, production-ready applications with modern tech stacks.
                    From concept to deployment, delivering solutions that make an impact.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "Next.js", "Svelte", "Solidity", "Docker"].map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/30 text-neon-red text-xs font-mono"
                        whileHover={{ scale: 1.1, borderColor: "rgba(168,85,247,0.6)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="default" size="sm">
                      <ExternalLink size={14} />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm">
                      <Code2 size={14} />
                      Source Code
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <TicketCard
              title="2"
              subtitle="Hackathon Wins"
              description="First prizes at Data Innovate X Ideathon and LastBot Hackathon"
              badge="ACHIEVEMENT"
              delay={0}
            />
            <TicketCard
              title="14"
              subtitle="Internship Months"
              description="Hands-on MERN, full-stack, and frontend development experience"
              badge="EXPERIENCE"
              delay={0.1}
            />
            <TicketCard
              title="35+"
              subtitle="Technologies"
              description="Frontend, backend, AI, DevOps, and Web3 tools from the resume"
              badge="EXPERTISE"
              delay={0.2}
            />
          </div>

          {/* Coordinates Section (Tathva-inspired) */}
          <motion.div
            className="relative rounded-2xl border border-wire bg-bg-surface p-8 sm:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px"
              }} />
            </div>

            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Award className="text-neon-red" size={24} />
                <h3 className="text-2xl font-bold font-syne text-white">
                  Open for Opportunities
                </h3>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-text-dim mb-4">
                    Full-stack developer based in Wayanad, Kerala, focused on scalable web apps,
                    AI-driven tools, and Web3 platforms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono">
                      AVAILABLE
                    </span>
                    <span className="px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/30 text-neon-red text-xs font-mono">
                      REMOTE
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="font-mono text-text-ghost text-sm mb-2">LOCATION</div>
                  <div className="text-3xl font-bold text-neon-red font-mono">
                    KERALA
                  </div>
                  <div className="text-xs text-text-ghost font-mono mt-1">
                    SULTHAN BATHERY, WAYANAD
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Marquee */}
        <div className="py-8 border-y border-wire bg-bg-surface/50 backdrop-blur-sm">
          <Marquee 
            text="REACT - NEXT.JS - SVELTE - NODE.JS - SOLIDITY - OLLAMA - DOCKER - LANGCHAIN" 
            speed={40}
            direction="right"
            className="text-2xl sm:text-3xl font-bold font-mono text-text-ghost/30"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
