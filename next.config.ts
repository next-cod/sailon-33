import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/figma/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=31536000" }],
      },
      {
        source: "/figma-exact/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=31536000" }],
      },
      {
        source: "/team/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=31536000" }],
      },
    ];
  },
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
