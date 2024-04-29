/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.wikia.nocookie.net", "www.wizardingworld.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
