/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["static.wikia.nocookie.net", "www.wizardingworld.com"]
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
