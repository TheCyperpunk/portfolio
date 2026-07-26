import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/hero"

const About = dynamic(() => import("@/components/sections/about").then((m) => ({ default: m.About })))
const HorizontalScroll = dynamic(() => import("@/components/sections/horizontal-scroll").then((m) => ({ default: m.HorizontalScroll })))
const Tech = dynamic(() => import("@/components/sections/tech").then((m) => ({ default: m.Tech })))
const Showcase = dynamic(() => import("@/components/sections/showcase").then((m) => ({ default: m.Showcase })))
const Projects = dynamic(() => import("@/components/sections/projects").then((m) => ({ default: m.Projects })))
const Experience = dynamic(() => import("@/components/sections/experience").then((m) => ({ default: m.Experience })))
const Contact = dynamic(() => import("@/components/sections/contact").then((m) => ({ default: m.Contact })))

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HorizontalScroll />
      <Tech />
      <Showcase />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
