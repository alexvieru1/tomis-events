import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-039f9033d8464e8d933b76f3820fd6c0.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
