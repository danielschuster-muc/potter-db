/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.wikia.nocookie.net'],
  },
}

module.exports = nextConfig
