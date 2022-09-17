/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URl || "https://potterdb.com",
  generateRobotsTxt: true,
};

module.exports = config;
