"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { technologies } from "@/data/portfolio"
import { TiltCard } from "@/components/effects/tilt-card"
import { TextSplit } from "@/components/effects/text-split"
import { useRef } from "react"
import Image from "next/image"

export function Tech() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="relative py-20 bg-gradient-to-b from-bg-void via-[#0a0015] to-bg-void overflow-hidden"
    >
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]) }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="2" fill="#A855F7" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid-dots)" />
        </svg>
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-16"
        style={{ y, scale }}
      >
        {/* Main Grid Container */}
        <div className="relative grid grid-cols-12 gap-4 lg:min-h-[700px] lg:gap-0">
          
          {/* Left Column - Title */}
          <TiltCard className="col-span-12 lg:col-span-3 row-span-2 mb-4 lg:mb-0" tiltAmount={5}>
            <motion.div
              className="h-full border-2 border-neon-red/40 bg-bg-surface/80 backdrop-blur-sm p-8 lg:p-12 flex flex-col justify-center glass hover-scale"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                borderColor: "rgba(168, 85, 247, 0.8)",
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)"
              }}
            >
              <motion.p 
                className="text-neon-red font-space text-xs uppercase tracking-[0.3em] mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                What I Know
              </motion.p>
              <h2 className="text-5xl lg:text-7xl font-black font-syne leading-[0.9] uppercase">
                <TextSplit text="TECH" className="text-white mb-2" delay={0.3} />
                <TextSplit 
                  text="STACK" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-light gradient-text-animate" 
                  delay={0.5}
                />
              </h2>
              <motion.div 
                className="w-16 h-1 bg-neon-red mt-6 mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              />
              <motion.p 
                className="text-text-ghost text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                A comprehensive toolkit of modern technologies
              </motion.p>
            </motion.div>
          </TiltCard>

          {/* Top Right - Description */}
          <TiltCard className="col-span-12 lg:col-span-5 lg:col-start-8 mb-4 lg:mb-0 z-20" tiltAmount={3}>
            <motion.div
              className="h-full border-2 border-neon-red/40 bg-bg-surface/80 backdrop-blur-sm p-6 lg:p-8 glass shimmer"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                borderColor: "rgba(168, 85, 247, 0.8)",
                backgroundColor: "rgba(17, 17, 17, 0.9)"
              }}
            >
              <motion.p 
                className="text-text-dim text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Experienced in building scalable applications with modern frameworks and best practices. 
                From frontend to backend, cloud deployment to AI integration.
              </motion.p>
            </motion.div>
          </TiltCard>

          {/* Center - Tech Icons Grid */}
          <motion.div
            className="col-span-12 lg:col-span-7 lg:col-start-4 row-span-3 lg:row-start-2 relative overflow-hidden border-2 border-neon-red/20 bg-gradient-to-br from-bg-elevated/50 to-bg-surface/50 backdrop-blur-sm p-4 sm:p-8 lg:mb-0 perspective"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ opacity }}
          >
            {/* Animated grid overlay */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: `
                  linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px"
              }}
            />

            {/* Tech Icons Grid */}
            <motion.div
              className="relative z-10 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 20, rotateX: -90 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { 
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      },
                    },
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -8,
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Tech Card */}
                  <div className="relative bg-bg-void/60 backdrop-blur-sm border border-wire rounded-lg p-2 overflow-hidden transition-all duration-500 hover:border-neon-red/60 hover:bg-bg-elevated aspect-square flex flex-col items-center justify-center glass">
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-neon-red/20 via-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.4 }}
                    />

                    {/* Icon */}
                    <motion.div 
                      className="relative z-10 w-8 h-8 mb-1 flex items-center justify-center"
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className={`w-full h-full object-contain drop-shadow-lg ${tech.invert ? "brightness-0 invert" : ""}`}
                      />
                    </motion.div>

                    {/* Name */}
                    <div className="relative z-10 text-center">
                      <span className="text-[9px] font-mono font-semibold text-text-ghost group-hover:text-neon-red transition-colors uppercase tracking-wide">
                        {tech.name}
                      </span>
                    </div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Corner decorations with pulsing dots */}
      {[
        { top: 4, left: 4, delay: 0 },
        { top: 4, right: 4, delay: 0.5 },
        { bottom: 4, left: 4, delay: 1 },
        { bottom: 4, right: 4, delay: 1.5 }
      ].map((pos, i) => (
        <motion.div 
          key={i} 
          className="absolute w-8 h-8" 
          style={pos}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: pos.delay, type: "spring" }}
        >
          <div className={`absolute ${pos.top !== undefined ? 'top-0' : 'bottom-0'} ${pos.left !== undefined ? 'left-0' : 'right-0'} w-full h-0.5 bg-neon-red/50`} />
          <div className={`absolute ${pos.top !== undefined ? 'top-0' : 'bottom-0'} ${pos.left !== undefined ? 'left-0' : 'right-0'} w-0.5 h-full bg-neon-red/50`} />
          <motion.div 
            className={`absolute ${pos.top !== undefined ? 'top-0' : 'bottom-0'} ${pos.left !== undefined ? 'left-0' : 'right-0'} w-2 h-2 bg-neon-red rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: pos.delay,
            }}
          />
        </motion.div>
      ))}
    </section>
  )
}
