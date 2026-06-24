import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_ERXES_ENDPOINT: process.env.NEXT_PUBLIC_ERXES_ENDPOINT,
    NEXT_PUBLIC_ERXES_APP_TOKEN: process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: false,
};

export default nextConfig;
