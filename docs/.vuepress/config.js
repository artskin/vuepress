const path = require('path');
//const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'web前端技术,前端思考,ECMAS,js,css3,vue' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    // ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.0/index.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  title: "BS-Components",
  description: "前端思考，web前端代码及新技术试验场",
  markdown: {
    // 代码显示行号
    lineNumbers: true,
  },
  enhanceAppFiles: path.resolve(__dirname, './enhanceApp.ts'),
  //theme:'reform',
  themeConfig: {
    logo: '/assets/images/logo.svg',
    type: "blog",
    tags:"tags",
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
      { text: "文档", link: "/docs/" },
      { text: "组件及示例", link: "/components/" },
	    { text: 'Gitlab', link: 'https://gitlab.sz.sensetime.com/fe/bs-components.git' }
    ],
    sidebar: 'auto',
    sidebarDepth : 1,
  },
  dest: "public",
  plugins: [
    'vuepress-plugin-typescript',
    'leo-demo-block'
  ],
  configureWebpack: {
    plugins: [
      //new MonacoWebpackPlugin()
    ]
  }
};
