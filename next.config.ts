import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Kein output gesetzt - Vercel handhabt das automatisch
  images: {
    unoptimized: true,
  },
}

export default nextConfig
