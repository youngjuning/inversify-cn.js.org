import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://cdn.jsdelivr.net/gh/youngjuning/images@main/1693297869826.png'],
  autoAlias: false,
  themeConfig: {
    name: 'InversifyJS',
    logo: 'https://cdn.jsdelivr.net/gh/youngjuning/images@main/1693297869826.png',
    prefersColor: { default: 'auto' },
    editLink: "https://github.com/youngjuning/inversify-cn.js.org/edit/main/{filename}",
    socialLinks: {
      github: 'https://github.com/zizhuspot/inversify-cn',
      twitter: 'https://twitter.com/luozhu2021'
    },
    hd: { rules: [] },
    footer: 'Made with ❤️ by <a href="https://github.com/zizhuspot" target="_blank">紫竹</a>'
  },
  theme: {
    '@c-primary': '#5083e4',
  },
  publicPath: '/',
  analytics: {
    ga_v2: 'G-ZFXC431DWS',
  },
  // sitemap: {
    // hostname: 'https://inversify-cn.js.org',
  // },
  hash: true,
  exportStatic: {},
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7962287588031867', async: true, crossorigin: 'anonymous'},
  ]
});
