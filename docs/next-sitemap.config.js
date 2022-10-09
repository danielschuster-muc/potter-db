/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_DOCS_URL || "https://docs.potterdb.com",
  generateRobotsTxt: true,
};

module.exports = config;
