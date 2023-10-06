import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  banner: {
    key: "hacktoberfest-2023",
    text: (
      <a href="https://github.com/danielschuster-muc/potter-db" target="_blank">
        🎉 Participate in Hacktoberfest 2023 by contributing to Potter DB →
      </a>
    ),
  },
  darkMode: true,
  docsRepositoryBase: "https://github.com/danielschuster-muc/potter-db/tree/master/docs",
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    labels: "documentation",
    content: "Give us feedback →",
  },
  footer: {
    text: `Copyright © Potter DB ${new Date().getFullYear()}`,
  },
  useNextSeoProps: () => ({ titleTemplate: "%s - Potter DB: Docs" }),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Documentation for Potter DB" />
      <meta name="og:title" content="Potter DB: Docs" />
    </>
  ),
  i18n: [{ locale: "en", text: "English" },{ locale: "fr", text: "Français" }],
  logo: <span>Potter DB: Docs</span>,
  project: {
    link: "https://github.com/danielschuster-muc/potter-db",
  },
  search: {
    placeholder: "Search...",
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
  },
};

export default config;
