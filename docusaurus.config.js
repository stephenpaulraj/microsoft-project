// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Microsoft Exam Project",
  tagline: "Azure, DevOps and Data Engineer",
  url: "http://localhost:3002/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RV Matrix", // Usually your GitHub org/user name.
  projectName: "microsoft-exam-project", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: "BQH2SXBYA8",
        apiKey: "377f380c6b03bc6d98bd54f2ecdc1d93",
        indexName: "microsoft_bit",
        contextualSearch: false,
      },
      navbar: {
        logo: {
          alt: "RV Matrix",
          src: "img/rvm.svg",
        },
        items: [
          {
            type: "doc",
            docId: "azure/questions",
            position: "left",
            label: "Azure",
          },
          {
            type: "doc",
            docId: "dev-ops/questions",
            position: "left",
            label: "DevOps Engineer",
          },
          {
            type: "doc",
            docId: "data-engineer/questions",
            position: "left",
            label: "Data Engineer",
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} RV Matrix.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
