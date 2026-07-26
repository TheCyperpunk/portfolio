"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Code2 } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/sections/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/portfolio"
import { useRef } from "react"

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <SectionWrapper id="projects">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 sm:px-16">
        <SectionHeader
          subText="My Work"
          title="Featured"
          highlight="Projects"
        />

        <motion.p 
          className="text-center text-text-ghost text-sm max-w-2xl mx-auto mb-12 -mt-8"
          style={{ opacity }}
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to code
          repositories and live demos.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1, 
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group rounded-xl border border-wire bg-bg-surface overflow-hidden transition-all duration-300 hover:border-neon-red/40 hover:shadow-lg relative"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neon-red/10 via-transparent to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={false}
              />

              <div className="relative aspect-video bg-gradient-to-br from-bg-elevated to-bg-void overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-bg-void via-transparent to-transparent"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-4xl font-bold text-[#1C1C1C] select-none font-syne"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {project.title.charAt(0)}
                  </motion.span>
                </motion.div>
                {project.featured && (
                  <motion.div 
                    className="absolute top-3 right-3"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  >
                    <Badge variant="default">Featured</Badge>
                  </motion.div>
                )}
              </div>
              <div className="p-5 relative z-10">
                <motion.h3 
                  className="font-semibold text-white mb-2 group-hover:text-neon-red transition-colors font-space"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-sm text-text-ghost mb-4 line-clamp-2">
                  {project.description}
                </p>
                <motion.div 
                  className="flex flex-wrap gap-1.5 mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {project.tags.slice(0, 3).map((tag) => (
                    <motion.div
                      key={tag}
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                    >
                      <Badge variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                  {project.tags.length > 3 && (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                    >
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div 
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Button variant="outline" size="sm" asChild>
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code2 size={14} />
                      GitHub
                    </motion.a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
