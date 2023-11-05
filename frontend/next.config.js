/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.wikia.nocookie.net", "www.wizardingworld.com"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/scrabby",
        destination: "https://github.com/danielschuster-muc/scrabby",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
