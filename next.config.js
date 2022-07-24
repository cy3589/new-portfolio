/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
  compress: true,
  productionBrowserSourceMaps: false,
};

module.exports = withPlugins([[withBundleAnalyzer], nextConfig]);
