import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

export default withNextra({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
