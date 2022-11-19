const themeConfig = {
  project: {
    link: "https://github.com/danielschuster-muc/potter-db",
  },
  docsRepositoryBase:
    "https://github.com/danielschuster-muc/potter-db/tree/master/docs",
  getNextSeoProps: () => ({ titleTemplate: "%s – Potter DB: Docs" }),
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  footer: {
    text: `MIT ${new Date().getFullYear()} © Potter DB.`,
  },
  editLink: {
    text: `Edit this page on GitHub`,
  },
  logo: (
    <>
      <span>Potter DB: Docs</span>
    </>
  ),
  sidebar: {
    defaultMenuCollapsed: true,
    subtitle: ({ title }) => <>{title}</>,
  },
  i18n: [{ locale: "en", text: "English" }],
  unstable_flexsearch: true,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Potter DB: Docs - Documentation for Potter DB"
      />
      <meta name="og:title" content="Potter DB: Docs" />
    </>
  ),
};

export default themeConfig;
