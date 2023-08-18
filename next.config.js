/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
