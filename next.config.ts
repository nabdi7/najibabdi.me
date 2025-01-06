import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {unoptimized: true},

  // images: {
  //   domains: ['res.cloudinary.com'],
  // },
};

export default nextConfig;
