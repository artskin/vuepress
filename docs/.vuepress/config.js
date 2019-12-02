module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }]
  ],
  title: "前端笔记",
  description: "阿沐的学习资料整理，Document library2",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Git命令", link: "/git/" },
      { text: "Config Page", link: "/config" },
	  { text: '学习文档', link: '/notes/' }
    ]
  },
  dest: "public",
  sidebar: 'auto'
};
