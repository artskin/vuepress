module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }]
  ],
  title: "前端笔记",
  description: "Note，Document library",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/" },
      { text: "Terminal", link: "/terminal/" },
      { text: "Demos", link: "/demos" },
	    { text: 'Github', link: 'https://github.com/artskin' }
    ]
  },
  dest: "public",
  sidebar: 'auto'
};
