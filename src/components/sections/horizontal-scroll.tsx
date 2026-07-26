"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"

const highlights = [
  {
    title: "Full Stack Development",
    description: "Building scalable web applications with modern frontend and backend stacks",
    tech: ["React", "Next.js", "Node.js"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Backend Architecture",
    description: "Developing APIs, database-backed features, and server-side workflows",
    tech: ["Express", "MongoDB", "Firebase"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Cloud & DevOps",
    description: "Containerizing and deploying applications with production-ready tooling",
    tech: ["Docker", "Kubernetes", "Vercel"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "AI Integration",
    description: "Integrating LLMs, RAG workflows, and local AI assistants",
    tech: ["Ollama", "LangChain", "FAISS"],
    color: "from-orange-500/20 to-red-500/20",
  },
]

export function HorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollDistance, setScrollDistance] = useState(0)
  const [sectionHeight, setSectionHeight] = useState("auto")

  useLayoutEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current
      const track = trackRef.current

      if (!viewport || !track) {
        return
      }

      const overflow = Math.max(0, track.scrollWidth - viewport.clientWidth)
      const horizontalTravel = Math.max(380, overflow)
      const stickyHeight = sectionRef.current?.querySelector("[data-horizontal-sticky]")?.clientHeight ?? window.innerHeight
      const height = stickyHeight + Math.max(260, horizontalTravel * 0.7)

      setScrollDistance(horizontalTravel)
      setSectionHeight(`${Math.round(height)}px`)
    }

    measure()
    window.addEventListener("resize", measure)

    return () => window.removeEventListener("resize", measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: sectionHeight }}
      aria-labelledby="expertise-title"
    >
      <div data-horizontal-sticky className="sticky top-0 flex flex-col justify-start overflow-hidden py-12 sm:py-16">
        <div className="mx-auto mb-6 w-full max-w-[1540px] px-6 sm:mb-8 sm:px-16">
          <p className="text-neon-red font-space text-[11px] md:text-[18px] uppercase tracking-[0.3em] font-medium mb-3">
            What I Do
          </p>
          <h2 id="expertise-title" className="text-white font-syne font-extrabold uppercase tracking-tight md:text-[60px] sm:text-[44px] xs:text-[35px] text-[30px] leading-none">
            Core{" "}
            <span className="bg-gradient-to-r from-neon-red to-neon-light bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </div>

        <div ref={viewportRef} className="w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex w-max gap-6 px-6 pb-4 sm:gap-8 sm:px-16 lg:gap-10"
            style={{ x }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="w-[72vw] max-w-[275px] flex-none sm:w-[295px] sm:max-w-none lg:w-[320px] xl:w-[340px]"
              >
                <div className={`relative h-full min-h-[190px] rounded-2xl border border-wire bg-gradient-to-br ${item.color} p-4 sm:min-h-[210px] sm:p-5 overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-neon-red/20 border border-neon-red/40 flex items-center justify-center mb-3 group-hover:rotate-180 transition-transform duration-500">
                      <ExternalLink className="text-neon-red" size={16} />
                    </div>

                    <h3 className="text-[18px] font-bold font-syne text-white mb-2 leading-tight sm:text-[21px]">
                      {item.title}
                    </h3>

                    <p className="text-text-dim text-[12px] mb-3 leading-relaxed sm:text-[13px]">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-bg-elevated border border-wire text-text-ghost text-[11px] font-mono hover:border-neon-red/60 hover:text-neon-red transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-neon-red/20 rounded-tr-lg" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-text-ghost text-xs font-mono">
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  )
}
