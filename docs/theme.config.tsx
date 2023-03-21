import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  darkMode: true,
  docsRepositoryBase:
    "https://github.com/danielschuster-muc/potter-db/tree/master/docs",
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    labels: "documentation",
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Potter DB.`,
  },
  useNextSeoProps: () => ({ titleTemplate: "%s – Potter DB: Docs" }),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Documentation for Potter DB" />
      <meta name="og:title" content="Potter DB: Docs" />
    </>
  ),
  i18n: [{ locale: "en", text: "English" }],
  logo: <span>Potter DB: Docs</span>,
  project: {
    link: "https://github.com/danielschuster-muc/potter-db",
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 0,
  },
};

export default config;
