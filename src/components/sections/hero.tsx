"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { heroSocialLinks, personalInfo } from "@/data/portfolio"
import { socialIconMap } from "@/components/icons/social-icons"
import { GlitchText } from "@/components/effects/glitch-text"
import Image from "next/image"

function useTypingEffect(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseTime = 1800
) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [mode, setMode] = useState<"typing" | "pausing" | "deleting">("typing")

  useEffect(() => {
    if (!words.length) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimeout = setTimeout(() => setText(words[0]), 0)
      return () => clearTimeout(reducedMotionTimeout)
    }
    const currentWord = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (mode === "typing") {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setMode("pausing"), pauseTime)
      }
    } else if (mode === "pausing") {
      timeout = setTimeout(() => setMode("deleting"), 200)
    } else if (mode === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed)
      } else {
        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length)
          setMode("typing")
        }, 10)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, mode, wordIndex, words, typeSpeed, deleteSpeed, pauseTime])

  return text
}

function HeroSocials() {
  return (
    <motion.div
      className="flex justify-center lg:justify-start items-center gap-3 flex-wrap"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {heroSocialLinks.map(({ href, label, icon }, index) => {
        const Icon = socialIconMap[icon]
        return (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={label}
            className="w-11 h-11 flex items-center justify-center rounded-lg border border-wire text-text-dim hover:text-neon-red hover:border-neon-red/50 transition-all duration-200"
            style={{ background: "#0A0A0A" }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.7 + index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.15, 
              rotate: 5,
              boxShadow: "0 0 20px rgba(168,85,247,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {Icon && <Icon className="h-8 w-8 rounded-md overflow-hidden" />}
          </motion.a>
        )
      })}
      <motion.a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2 rounded-md font-space font-semibold text-[13px] text-white bg-neon-red hover:bg-neon-dark transition-all duration-200 tracking-wide"
        style={{ boxShadow: "0 0 20px rgba(168,85,247,0.35)" }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.1,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 30px rgba(168,85,247,0.6)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Resume ↗
      </motion.a>
    </motion.div>
  )
}

export function Hero() {
  const [ready, setReady] = useState(false)
  const typingText = useTypingEffect(personalInfo.roles)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="relative flex-shrink-0 mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.88, rotateY: -15 }}
            animate={ready ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1], type: "spring", stiffness: 100 }}
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 70px rgba(168,85,247,0.28), 0 0 140px rgba(124,58,237,0.14)",
                  "0 0 90px rgba(168,85,247,0.4), 0 0 180px rgba(124,58,237,0.2)",
                  "0 0 70px rgba(168,85,247,0.28), 0 0 140px rgba(124,58,237,0.14)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Corner accents */}
            <motion.div
              className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#A855F7] rounded-tl-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#A855F7] rounded-tr-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#A855F7] rounded-bl-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#A855F7] rounded-br-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />

            <Image
              src={personalInfo.avatar}
              alt={`${personalInfo.name} - Full Stack Developer`}
              width={288}
              height={352}
              priority
              sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 288px"
              className="relative w-52 h-60 sm:w-60 sm:h-72 lg:w-72 lg:h-[22rem] object-cover rounded-2xl"
              style={{ border: "1px solid rgba(168,85,247,0.35)" }}
            />

            {/* Open to work badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 sm:-right-6 bg-[#080010] border border-[rgba(168,85,247,0.25)] rounded-xl px-3 sm:px-4 py-2.5 flex items-center gap-2.5"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.7), 0 0 20px rgba(168,85,247,0.1)" }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"
                style={{ boxShadow: "0 0 8px #A855F7" }}
              />
              <span className="font-mono text-[11px] text-[#A0A0A0]">Open to work</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-lg">
            <motion.p
              className="text-neon-red font-space text-[11px] md:text-[18px] uppercase tracking-[0.3em] font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full Stack Engineer
            </motion.p>

            <motion.h1
              className="mt-2 font-syne font-extrabold tracking-tight leading-[1.06]"
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block text-white md:text-[60px] sm:text-[44px] xs:text-[35px] text-[30px]">
                <GlitchText text="SANGEETH" />
              </span>
              <span
                className="block md:text-[42px] sm:text-[30px] xs:text-[24px] text-[20px] tracking-[0.12em] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #A855F7 0%, #C084FC 40%, #EDE9FE 75%, #ffffff 100%)",
                }}
              >
                KARUNAKARAN
              </span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mt-4 mb-5 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.32 }}
            >
              <div className="w-8 h-px bg-gradient-to-r from-[#A855F7] to-transparent hidden sm:block flex-shrink-0" />
              <span className="font-syne text-[#A0A0A0] text-base sm:text-lg">
                {typingText}
                <span className="text-[#A855F7] animate-pulse ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.p
              className="font-inter text-[#707070] text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.42 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.52 }}
            >
              <HeroSocials />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Arc Background */}
      <div
        className="absolute inset-x-0 bottom-80 md:bottom-0 pointer-events-none overflow-hidden"
        style={{ height: "60vh", zIndex: 1 }}
      >
        <div
          className="absolute left-1/2 bottom-[-62vh] h-[118vh] w-[118vh] min-h-[680px] min-w-[680px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, transparent 56%, rgba(255,255,255,0.34) 56.2%, rgba(255,255,255,0.12) 56.6%, rgba(99,102,241,0.32) 59%, rgba(124,58,237,0.28) 62%, transparent 70%)",
            filter: "blur(10px)",
            mixBlendMode: "screen",
          }}
        />
        <div
          className="absolute left-1/2 bottom-[-62vh] h-[118vh] w-[118vh] min-h-[680px] min-w-[680px] -translate-x-1/2 rounded-full"
          style={{
            border: "1px solid rgba(255,255,255,0.28)",
            boxShadow:
              "0 0 80px rgba(168,85,247,0.28), 0 0 150px rgba(99,102,241,0.22)",
          }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="font-space text-[10px] uppercase tracking-[0.3em] text-[#444]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#A855F7] to-transparent"
        />
      </motion.div>

      <style>{`
        @keyframes pulse-red {
          0%, 100% { box-shadow: 0 0 70px rgba(168,85,247,0.28), 0 0 140px rgba(124,58,237,0.14); }
          50% { box-shadow: 0 0 25px rgba(168,85,247,0.6); }
        }
      `}</style>
    </section>
  )
}
