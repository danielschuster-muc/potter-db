const { getSiteUrl } = require("./src/lib/utils");

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: getSiteUrl(),
  generateRobotsTxt: true,
};

module.exports = config;
