import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/gh/devicons/devicon@latest/icons/**" },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/npm/simple-icons@latest/icons/**" },
      { protocol: "https", hostname: "devicon-website.vercel.app", pathname: "/api/**" },
    ],
  },
}

export default nextConfig
