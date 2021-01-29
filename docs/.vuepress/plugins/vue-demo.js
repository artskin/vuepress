"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container = require("markdown-it-container");
const shared_1 = require("@vuepress/shared");
const validate = (params) =>{
  return true
}

exports.vuedemoPlugin = void 0;

const vuedemoPlugin = ({type,after,before,locales,marker,render}) => {
  console.log("文件加载？？",type,after,before,locales,marker,render)
  const pluginObj = {
    name: "vue-demo",
    multiple:true
  }
  if(!type){
    console.warn(`[${pluginObj.name}] ${type} option is required`)
    return pluginObj
  }
  if(!render){
    let renderBefore
    let renderAfter

    if (before !== undefined && after !== undefined) {
      // user defined
      renderBefore = before
      renderAfter = after
    } else {
      // fallback
      renderBefore = (info) =>
        `<div class="custom-vue ${type}">${
          info ? `<p class="custom-vue-title">${info}</p>` : ''
        }\n`
      renderAfter = () => '</div>\n'
    }

    // token info stack
    const infoStack = []
    render = (tokens, index, opts, env) => {
      console.log('渲染')
      const token = tokens[index]

      if (token.nesting === 1) {
        // `before` tag

        // resolve info (title)
        let info = token.info.trim().slice(type.length).trim()
        if (!info && locales) {
          // locale
          const { filePathRelative } = env
          const relativePath = shared_1.ensureLeadingSlash(filePathRelative ?? '')

          const localePath = shared_1.resolveLocalePath(locales, relativePath)
          const localeData = locales[localePath] ?? {}

          if (localeData.defaultInfo) {
            info = localeData.defaultInfo
          } else {
            info = type.toUpperCase()
          }
        }

        // push the info to stack
        infoStack.push(info)
        console.log('我的插件',infoStack)
        // render
        return renderBefore(info)
      } else {
        // `after` tag

        // pop the info from stack
        const info = infoStack.pop() || ''

        // render
        return renderAfter(info)
      }
    }
  }
  

  // use markdown-it-container
  pluginObj.extendsMarkdown = (md) => {
    md.use(container, type, { render, validate, marker })
  }

  return pluginObj
};


exports.vuedemoPlugin = vuedemoPlugin;
exports.default = exports.vuedemoPlugin;
//module.exports = vuedemoPlugin