import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90, 92],
    minimumCacheTTL: 31_536_000,
    deviceSizes: [320, 480, 640, 768, 960, 1200, 1700, 1920, 2560, 3840],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
