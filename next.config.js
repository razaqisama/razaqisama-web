/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'camo.githubusercontent.com',
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
