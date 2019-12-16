
# 汇总

## 学习资料

- [阮一峰 ES6 教程](http://es6.ruanyifeng.com/)

- [OpenLayers](http://openlayers.org)

- [ArcGis](http://www.arcgis.com/index.html)

```bash
//查看npm源
npm config get registry
// 或
npm config list
# 默认源
npm config set registry https://registry.npmjs.org

# https -> http，这样网速就会好很多
npm config set registry http://registry.npmjs.org 

# 如果还不能下载，就切换成淘宝源
npm config set registry https://registry.npm.taobao.org
```
## OpenLayers资源

- [OpenLayers 中文简介](https://segmentfault.com/a/1190000009679800#articleHeader24)
- [Valine](https://valine.js.org) 一款快速、简洁且高效的无后端评论系统。

- [Vssue](https://vssue.js.org/zh/) Vue 驱动的、基于 Issue 的评论插件
- [codepen](https://codepen.io/) 在线执行代码
- [leetcode](https://leetcode-cn.com/) 程序算法练习

- [vuepress主题开发](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)
- [zeit: Now 部署node项目](https://zeit.co/dashboard)
- [md文档运行vue代码配置](http://daxigua.me/vuepress-plugin-demo-block/zh/)
- [vuepress中使用typescript](https://vuepress.github.io/zh/plugins/typescript/)
- [vuepress博客主题](https://vuepress-theme-reco.recoluan.com/)
- [vuepress基于默认主题的博客主题](https://github.com/xuzhongpeng/vuepress-theme-reform)
- [前端进阶面试题](https://muyiy.cn/question/)

### webpack
为处理资源管理和分割代码而生，可以包含任何类型的文件。灵活，插件多。

### rollup
用标准化的格式（es6）来写代码，通过减少死代码尽可能地缩小包体积。

### parcel
超快的打包速度，多线程在多核上并发编译，不用任何配置。、
