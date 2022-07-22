/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.wikia.nocookie.net"],
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
