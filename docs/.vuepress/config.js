module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  title: "前端笔记",
  description: "Note，Document library",
  markdown: {
    // 代码显示行号
    lineNumbers: true,
  },
  themeConfig: {
    type: "blog",
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category" // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag" // 默认文案 “标签”
      }
    },
    author: "Amu",
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/" },
      { text: "Terminal", link: "/terminal/" },
      { text: "Demos", link: "/demos" },
      { text: "图博", link: "https://xinyi.tuchong.com/" },
	    { text: 'Github', link: 'https://github.com/artskin' }
    ],
    sidebar: 'auto',
    sidebarDepth : 1
  },
  dest: "public",
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',
      // 其他的 Vssue 配置
      owner: 'artskin',
      repo: 'vuepress',
      clientId: 'be6226886eb40a308a27',
      clientSecret: 'e0b8c567ae32beb6cf994c064ecc69c0571c9f70',
    },
    'demo-block':true
  },
};
