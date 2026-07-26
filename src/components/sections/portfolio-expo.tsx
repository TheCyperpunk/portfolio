"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"

export function PortfolioExpo() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-bg-void via-[#0a0015] to-bg-void overflow-hidden">
      {/* Grid dots at intersections only */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="2" fill="#A855F7" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 sm:px-16">
        {/* Main Grid Container */}
        <div className="relative grid grid-cols-12 gap-0 min-h-[700px]">
          
          {/* Left Column - Title */}
          <motion.div
            className="col-span-3 row-span-2 border-2 border-neon-red/40 bg-bg-surface/80 backdrop-blur-sm p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              borderColor: "rgba(168, 85, 247, 0.8)",
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)"
            }}
          >
            <h2 className="text-7xl font-black font-syne leading-[0.9] uppercase">
              <span className="text-white">FULL</span>
              <br />
              <span className="text-white">STACK</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-light">
                PORTFOLIO
              </span>
            </h2>
          </motion.div>

          {/* Top Right - Text Box 1 */}
          <motion.div
            className="col-span-5 col-start-8 border-2 border-neon-red/40 bg-bg-surface/80 backdrop-blur-sm p-8 z-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              borderColor: "rgba(168, 85, 247, 0.8)",
              backgroundColor: "rgba(17, 17, 17, 0.9)"
            }}
          >
            <p className="text-text-dim text-sm leading-relaxed">
              Full Stack Developer specializing in scalable web applications, AI-driven solutions, and Web3 platforms. 
              Building scalable applications with clean architecture and best practices.
            </p>
          </motion.div>

          {/* Center - Large Image (spans multiple rows and columns) */}
          <motion.div
            className="col-span-7 col-start-4 row-span-3 row-start-2 relative overflow-hidden border-2 border-neon-red/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main architectural image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80')] bg-cover bg-center" />
            
            {/* Purple overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neon-dark/40 via-transparent to-bg-void/80" />

            {/* Animated grid overlay */}
            <motion.div
              className="absolute inset-0 opacity-20"
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
          </motion.div>

          {/* Center Plus Icon Box */}
          <motion.div
            className="col-span-2 col-start-6 row-start-3 border-2 border-neon-red bg-bg-surface/90 backdrop-blur-sm flex items-center justify-center z-30 aspect-square"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 90,
              borderColor: "#A855F7",
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)"
            }}
          >
            <Plus size={60} className="text-neon-red" strokeWidth={2} />
          </motion.div>

          {/* Bottom Right - Text Box 2 */}
          <motion.div
            className="col-span-4 col-start-9 row-start-4 border-2 border-neon-red/40 bg-bg-surface/80 backdrop-blur-sm p-8 z-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ 
              borderColor: "rgba(168, 85, 247, 0.8)",
              backgroundColor: "rgba(17, 17, 17, 0.9)"
            }}
          >
            <p className="text-text-dim text-sm leading-relaxed">
              This portfolio showcases production-ready projects, technical expertise, and professional experience. 
              From frontend to backend, cloud deployment to AI integration.
            </p>
          </motion.div>

          {/* Small decorative boxes */}
          <motion.div
            className="col-span-2 col-start-4 row-start-4 border-2 border-neon-red/30 bg-bg-surface/60 backdrop-blur-sm z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ 
              borderColor: "rgba(168, 85, 247, 0.8)",
              backgroundColor: "rgba(168, 85, 247, 0.1)"
            }}
          />

          <motion.div
            className="col-span-2 col-start-7 row-start-5 border-2 border-neon-red/30 bg-bg-surface/60 backdrop-blur-sm z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ 
              borderColor: "rgba(168, 85, 247, 0.8)",
              backgroundColor: "rgba(168, 85, 247, 0.1)"
            }}
          />

          {/* Bottom Left - Learn More Button */}
          <motion.div
            className="col-span-3 row-start-5 border-2 border-neon-red bg-neon-red/10 backdrop-blur-sm flex items-center justify-center p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(168, 85, 247, 0.3)",
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
            }}
          >
            <button className="text-white font-mono uppercase tracking-wider text-sm hover:text-neon-light transition-colors">
              EXPLORE
              <br />
              PROJECTS
            </button>
          </motion.div>
        </div>
      </div>

      {/* Corner decorations with purple theme */}
      <div className="absolute top-4 left-4 w-8 h-8">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-neon-red/50" />
        <div className="absolute top-0 left-0 w-0.5 h-full bg-neon-red/50" />
        <motion.div 
          className="absolute top-0 left-0 w-2 h-2 bg-neon-red rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
      <div className="absolute top-4 right-4 w-8 h-8">
        <div className="absolute top-0 right-0 w-full h-0.5 bg-neon-red/50" />
        <div className="absolute top-0 right-0 w-0.5 h-full bg-neon-red/50" />
        <motion.div 
          className="absolute top-0 right-0 w-2 h-2 bg-neon-red rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
      </div>
      <div className="absolute bottom-4 left-4 w-8 h-8">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-red/50" />
        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-neon-red/50" />
        <motion.div 
          className="absolute bottom-0 left-0 w-2 h-2 bg-neon-red rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>
      <div className="absolute bottom-4 right-4 w-8 h-8">
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-neon-red/50" />
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-neon-red/50" />
        <motion.div 
          className="absolute bottom-0 right-0 w-2 h-2 bg-neon-red rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1.5,
          }}
        />
      </div>
    </section>
  )
}
