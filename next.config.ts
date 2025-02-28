import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**',
      },
      { 
        protocol: 'https',
        hostname: '1000marcas.net',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;