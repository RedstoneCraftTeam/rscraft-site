// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '红石工艺（Redstone Craft）',
  tagline: '轻量 纯净 国创 养老 原版',
  url: 'https://www.rscraft.cf',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RedstoneCraftTeam', // Usually your GitHub org/user name.
  projectName: 'rscraft-site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RedstoneCraftTeam/rscraft-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RedstoneCraftTeam/rscraft-site/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '红石工艺（Redstone Craft）',
        logo: {
          alt: 'rsc_logo',
          src: 'img/rsclogo.png',
        },
        items: [
          {to: '/download', label: '下载', position: 'left'},
          {to: '/changelog', label: '更新日志', position: 'left'},
          {
            href: 'https://jq.qq.com/?_wv=1027&k=4z1QcV8t',
            label: 'QQ群',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '导航',
            items: [
              {
                label: '主页',
                href: '/',
              },
              {
                label: '下载',
                href: '/download/',
              },
              {
                label: '更新日志',
                href: '/changelog/',
              },
            ],
          },
          {
            title: '联系我们 丨 Contact us',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/RedstoneCraftTeam',
              },
              {
                label: 'E-mail',
                href: 'mailto:geneluo@qq.com'
              },
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=4z1QcV8t'
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} 红石工艺团队。网站使用 Docusaurus 2 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
