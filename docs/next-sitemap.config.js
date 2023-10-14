const { i18n } = require("./next.config.js");

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_DOCS_URL || "https://docs.potterdb.com",
  generateRobotsTxt: true,
  transform: async (_, path) => {
    let transformedPath = path;
    i18n.locales.forEach((locale) => {
      if (transformedPath.endsWith("." + locale) && !transformedPath.includes("/" + locale)) {
        transformedPath = "/" + locale + transformedPath.replace("." + locale, "");
      }
      if (transformedPath.endsWith("." + locale)) {
        transformedPath = transformedPath.replace("." + locale, "");
      }
    });

    return {
      loc: transformedPath,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
