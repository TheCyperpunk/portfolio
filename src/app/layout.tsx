import type { Metadata, Viewport } from "next"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BackgroundEffects } from "@/components/effects/background-effects"
import { ScrollProgress } from "@/components/effects/scroll-progress"
import { SmoothScroll } from "@/components/effects/smooth-scroll"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sangeeth karunakaran | Full Stack Developer",
  description:
    "Sangeeth karunakaran is a Full Stack Developer specializing in scalable web applications, AI-driven solutions, and Web3 platforms.",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "React",
    "Next.js",
    "Svelte",
    "Solidity",
    "Ollama",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Sangeeth karunakaran" }],
  openGraph: {
    title: "Sangeeth karunakaran | Full Stack Developer",
    description:
      "Full Stack Developer specializing in scalable web applications, AI-driven solutions, and Web3 platforms.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#040009",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-bg-void text-text-white antialiased selection:bg-neon-red/30 selection:text-white">
        <Providers>
          <ScrollProgress />
          <BackgroundEffects />
          <SmoothScroll />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
