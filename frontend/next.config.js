/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.wikia.nocookie.net", "www.wizardingworld.com"],
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
