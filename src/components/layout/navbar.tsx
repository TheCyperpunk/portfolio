"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navLinks, personalInfo } from "@/data/portfolio"

const NavItems = memo(function NavItems({
  active,
  setActive,
  onClick,
}: {
  active: string
  setActive: (v: string) => void
  onClick?: () => void
}) {
  return (
    <>
      {navLinks.map((link, index) => (
        <motion.li 
          key={link.id} 
          className="relative group cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ y: -2 }}
        >
          <a
            href={`#${link.id}`}
            onClick={() => {
              setActive(link.label)
              onClick?.()
            }}
            className={`flex min-h-11 items-center font-space text-[14px] font-medium tracking-wide transition-colors lg:min-h-0 ${
              active === link.label ? "text-neon-red" : "text-text-dim hover:text-white"
            }`}
          >
            {link.label}
          </a>
          <motion.span
            className="absolute -bottom-1 left-0 h-[1px] bg-neon-red"
            initial={{ width: 0 }}
            animate={{ width: active === link.label ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.li>
      ))}
    </>
  )
})

export function Navbar() {
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = document.querySelectorAll("section[id]")
      const scrollY = window.scrollY + 100
      for (const section of sections) {
        const el = section as HTMLElement
        const top = el.offsetTop
        const height = el.clientHeight
        if (scrollY >= top && scrollY < top + height) {
          const id = el.id.charAt(0).toUpperCase() + el.id.slice(1)
          setActive((prev) => prev !== id ? id : prev)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  const setActiveCallback = useCallback((v: string) => setActive(v), [])

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 sm:px-16 ${
        scrolled ? "bg-black/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <motion.div 
        className="w-full flex justify-end items-center max-w-7xl mx-auto py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <ul className="list-none hidden lg:flex flex-row gap-8 items-center">
          <NavItems active={active} setActive={setActiveCallback} />
          <motion.li
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
          >
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-md font-space font-medium text-[13px] text-white border border-neon-red/50 hover:bg-neon-red hover:border-neon-red transition-all duration-200"
              style={{ boxShadow: "0 0 12px rgba(168,85,247,0.2)" }}
            >
              Resume ↗
            </a>
          </motion.li>
        </ul>

        <div className="flex items-center lg:hidden">
          <button
            className="flex size-11 items-center justify-center rounded-lg text-white hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 z-50 rounded-xl border border-wire bg-black/95 backdrop-blur-xl p-4"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(168,85,247,0.08)" }}
          >
            <ul className="flex flex-col gap-3">
              <NavItems
                active={active}
                setActive={setActiveCallback}
                onClick={() => setMenuOpen(false)}
              />
              <li className="pt-1 border-t border-wire">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center font-space text-[13px] font-medium px-2 text-neon-red hover:text-white transition-colors"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
