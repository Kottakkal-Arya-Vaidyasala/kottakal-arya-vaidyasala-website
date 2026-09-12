import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ── Static Export — deploy anywhere ─────────── */
  output: "export",

  /* ── Image Optimization — WebP Performance ────── */
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // 60 seconds instead of 30 days
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
