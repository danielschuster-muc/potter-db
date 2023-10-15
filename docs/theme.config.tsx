/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

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
    text() {
      const { locale } = useRouter();
      switch (locale) {
        case "fr":
          return "Editer cette page sur GitHub →";
        case "tl":
          return "I-edit ang pahinang ito sa GitHub →";
        default:
          return "Edit this page on GitHub →";
      }
    },
  },
  feedback: {
    labels: "documentation",
    content() {
      const { locale } = useRouter();
      switch (locale) {
        case "fr":
          return "Donnez-nous votre avis →";
        case "tl":
          return "Bigyan kami ng katugunan →";
        default:
          return "Give us feedback →";
      }
    },
  },
  footer: {
    text: `Copyright © Potter DB ${new Date().getFullYear()}`,
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter();
    let text = "";
    switch (locale) {
      case "fr":
        text = "Dernière mise à jour le";
        break;
      case "tl":
        text = "Huling ini-update noong";
        break;
      default:
        text = "Last updated on";
        break;
    }
    return (
      <>
        {text}{" "}
        {timestamp.toLocaleDateString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </>
    );
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Documentation for Potter DB" />
      <meta name="og:title" content="Potter DB: Docs" />
    </>
  ),
  i18n: [{ locale: "en", text: "English" },{ locale: "fr", text: "Français" },{ locale: "tl", text: "Filipino/Tagalog" }],
  logo: <span>Potter DB: Docs</span>,
  project: {
    link: "https://github.com/danielschuster-muc/potter-db",
  },
  search: {
    placeholder() {
      const { locale } = useRouter();
      switch (locale) {
        case "fr":
          return "Rechercher...";
        case "tl":
            return "Maghanap...";
        default:
          return "Search...";
      }
    },
    loading() {
      const { locale } = useRouter();
      switch (locale) {
        case "fr":
          return "En cours de chargement...";
        case "tl":
            return "Naglo-load...";
        default:
          return "Loading...";
      }
    },
    emptyResult() {
      const { locale } = useRouter();
      let text = "";
      switch (locale) {
        case "fr":
          text = "Aucun résultat.";
          break;
        case "tl":
          text = "Walang nahanap na resulta";
          break;
        default:
          text = "No results found.";
          break;
      }
      return (
        <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
          {text}
        </span>
      );
    },
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
  themeSwitch: {
    useOptions() {
      const { locale } = useRouter();
      switch (locale) {
        case "fr":
          return {
            light: "Clair",
            dark: "Sombre",
            system: "Système",
          };
        case "tl":
          return {
            light: "Liwanag",
            dark: "Dilim",
            system: "Sistema",
          };
        default:
          return {
            light: "Light",
            dark: "Dark",
            system: "System",
          };
      }
    },
  },
  toc: {
    float: true,
    title() {
      const { locale } = useRouter();
      switch (locale) {
        case "fr":
          return "Sur cette page";
        case "tl":
          return "Sa pahinang ito";
        default:
          return "On this page";
      }
    },
  },
  useNextSeoProps: () => ({ titleTemplate: "%s - Potter DB: Docs" }),
};

export default config;
