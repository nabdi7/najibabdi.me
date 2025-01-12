import type { NextConfig } from 'next/dist/server/config'

const config: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  // images: {
  //   domains: ['res.cloudinary.com'],
  // },
}

export default config