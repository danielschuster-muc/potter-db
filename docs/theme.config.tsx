import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  darkMode: true,
  docsRepositoryBase:
    "https://github.com/danielschuster-muc/potter-db/tree/master/docs",
  editLink: {
    text: "Edit this page on GitHub",
  },
  // feedback: {
  //   content: () => <>Question? Give us feedback</>,
  //   labels: "feedback",
  // },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Potter DB.`,
  },
  getNextSeoProps: () => ({ titleTemplate: "%s – Potter DB: Docs" }),
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
  i18n: [{ locale: "en", text: "English" }],
  logo: <span>Potter DB: Docs</span>,
  // navbar: {
  //   extraContent: <Link href="https://potterdb.com">Website</Link>,
  // },
  project: {
    link: "https://github.com/danielschuster-muc/potter-db",
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === "separator") {
        return <b>{title}!!!!</b>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 0,
  },
};

export default config;
