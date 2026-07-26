"use client"

import { Heart } from "lucide-react"
import { navLinks, personalInfo, footerSocialLinks } from "@/data/portfolio"
import { socialIconMap } from "@/components/icons/social-icons"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-bg-void border-t border-wire">
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #A855F7 30%, #C084FC 70%, transparent 100%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-8">
          <div className="space-y-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="flex items-center gap-2.5 w-fit group"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-neon-red/30 group-hover:border-neon-red/70 transition-all">
                <Image
                  src={personalInfo.logo}
                  alt=""
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-space font-semibold text-white text-base">
                {personalInfo.name}
              </span>
            </a>
            <p className="font-inter text-text-ghost text-sm leading-relaxed">
              Full Stack Developer. AI Builder. Web3 Explorer.
            </p>
            <p className="font-mono text-[10px] text-[#333] tracking-wide">
              React - Next.js - Svelte - Solidity - Ollama
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-space font-semibold text-text-dim text-sm uppercase tracking-widest">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="font-inter text-text-ghost text-sm hover:text-neon-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-space font-semibold text-text-dim text-sm uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex gap-3 flex-wrap">
              {footerSocialLinks.map(({ href, label, icon }) => {
                const Icon = socialIconMap[icon]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-11 h-11 flex items-center justify-center rounded-lg border border-wire text-text-ghost hover:text-neon-red hover:border-neon-red/40 transition-all duration-200"
                    aria-label={label}
                    style={{ background: "#0A0A0A" }}
                  >
                    {Icon && <Icon className="h-8 w-8 rounded-md overflow-hidden" />}
                  </a>
                )
              })}
            </div>
            <p className="font-inter text-text-ghost text-xs">
              {personalInfo.email}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-wire flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[11px] text-[#333]">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-[#333] flex items-center gap-1">
            Built with <Heart size={11} className="text-red-500 fill-red-500" /> React · Next.js · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
