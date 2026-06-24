import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

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

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
export default withNextIntl(nextConfig);
