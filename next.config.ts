import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.slack-edge.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
        port: '',
      },
    ]
  }
};

export default nextConfig;
