import type { UserConfig, DefaultThemeOptions } from 'vuepress'
const vuedemoPlugin = require('./plugins/vue-demo.js')

const vueContainerPlugin = require('./plugins/vue-container/lib/index.js')
console.log(vueContainerPlugin)
var md = require('markdown-it')();
const config: UserConfig<DefaultThemeOptions> = {
  lang: 'zh-CN',
  title: 'AIS 组件文档',
  description: '这是一个 VuePress 文档站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
  alias: {
    '@root': '/',
  },
  extendsMarkdown: (md) => {
    //console.log(md)
  },
  plugins: [
    // [vuedemoPlugin,{
    //   type:'demo',
    //   validate: function(params) {
    //     return params.trim().match(/^spoiler\s+(.*)$/);
    //   },
    // }
    // ],
    // [
    //   '@vuepress/container',
    //   {
    //     type: 'spoiler',
    //     before:(info: string): string => `<div class="custom-container">${info ? `<h4 class="custom-container-title">${info}</h4>` : ''}\n`,
    //     after:(): string => '</div>\n',
    //     render: function (tokens, idx) {
    //       var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
    //       if (tokens[idx].nesting === 1) {
    //         // opening tag
    //         return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
      
    //       } else {
    //         // closing tag
    //         return '</details>\n';
    //       }
    //     }
    //   },
    // ],
    [vueContainerPlugin.vueContainerPlugin,{
      type: 'demo',
    }]
  ],
}

export = config