// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'xuanze.sol',
    tagline: 'Hello there.',
    url: 'https://aaronangxz.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'aaronangxz', // Usually your GitHub org/user name.
    projectName: 'xuanze.sol', // Usually your repo name.
    trailingSlash: false,

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/master/',
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
            title: 'xuanze.sol',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'LeetCode',
                },
                {
                    type: 'doc',
                    docId: 'notes',
                    position: 'left',
                    label: 'Notes',
                },
                { to: '/projects', label: 'Projects', position: 'left' },
                { to: '/about', label: 'About', position: 'left' },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'LeetCode',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'Socials',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/aaronangxz',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/aaronangxz/',
                        },
                        {
                            label: 'LeetCode',
                            href: 'https://leetcode.com/angxze/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} XZ. Built with Docusaurus. Hosted on IPFS`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;