import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: undefined,
      allowedOrigins: undefined,
    }, // If you're using Server Actions
  },
  images: {
    remotePatterns: [{ hostname: "n7jr836wex.ufs.sh" }]
  }
};

export default nextConfig;
