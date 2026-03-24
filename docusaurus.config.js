import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'fibe.gg Docs',
  tagline: 'Documentation for fibe.gg',
  favicon: 'img/favicon.ico',

  headTags: [
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/icon-192.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: '/site.webmanifest' } },
  ],

  scripts: [
    '/js/docsbot.js',
  ],

  future: {
    v4: true,
  },

  url: 'https://docs.fibe.gg',
  baseUrl: '/',

  organizationName: 'fibegg',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    localeConfigs: {
      en: { label: 'English' },
      uk: { label: 'Українська' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'ru'],
        docsRouteBasePath: '/',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        searchBarShortcutHint: true,
      }),
    ],
  ],




  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'description', content: 'Official documentation for fibe.gg — instant cloud environments powered by Docker.' },
        { name: 'keywords', content: 'fibe.gg, documentation, docs, cloud environments, docker' },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'fibe.gg',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://fibe.gg',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/',
            label: 'Docs',
            position: 'left',
            activeBaseRegex: '^/$|^/(?!blog)',
          },
          {
            href: 'https://blog.fibe.gg',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/fibegg',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} fibe.gg — All rights reserved.<br/><span style="font-size: smaller; opacity: 0.8">built-at ${new Date().toISOString()}</span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
