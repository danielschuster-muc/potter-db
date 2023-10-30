const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "es", "sk", "de"],
    defaultLocale: "en",
  },
});
