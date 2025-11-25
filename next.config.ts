import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Atur batas upload jadi 10MB (atau sesuaikan)
    },
  },
};

export default nextConfig;
