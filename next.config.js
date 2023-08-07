const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
  compress: true,
  productionBrowserSourceMaps: false,
  rewrites: () => [
    {
      destination: 'https://solved.ac/api/v3/:path*',
      source: '/api/solved/:path*',
    },
  ],
};

module.exports = withPlugins([[withBundleAnalyzer], nextConfig]);
