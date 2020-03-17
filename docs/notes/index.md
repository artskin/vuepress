
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

# yarn 获取默认安装源
yarn config get registry https://registry.yarnpkg.com

# yarn 设置新安装源
yarn config set registry https://registry.npm.taobao.org

# yarn 安装或升级最新版本
sudo apt-get update && sudo apt-get install yarn

# git 添加子仓库
//在主仓库执行如下命令
git submodule add 子仓库ssh地址
//添加成功后主仓库根目录增加了.gitmodule文件

# 添加完子仓库后
git submodule init // 初始化本地配置文件

git submodule update // 检出主仓库列出的commit

```

## git回退版本

```ts
git reset --hard id //(例如commit id 为: 7222c8f6be2d663982faa98dffe2647966b438b1)

git push origin HEAD --force //推送到本地到远程仓库：让远程仓库代码和你本地一样，到当前你本地的版本。

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
- [Yubisaki 主题的使用](https://wuwaki.me/yubisaki/usage.html)
- [Yubisaki 主题的使用](https://lewiscutey.github.io/blog/blog/vuepress-theme-toos.html)
- [前端进阶面试题](https://muyiy.cn/question/)
- [一行代码实现本地https证书校验](https://github.com/FiloSottile/mkcert)
- [国际化自动替换助手](https://github.com/alibaba/kiwi)
- [codesandbox:vsCode 在线版](https://codesandbox.io/)
- [FileSaver.js](https://github.com/eligrey/FileSaver.js)

### 粒子动画
- [按钮点击粒子动画](https://tympanus.net/codrops/2018/04/25/particle-effects-for-buttons/)
- [基因螺旋粒子](https://github.com/jackrugile/3d-particle-explorations)
- [threejs](https://github.com/Mamboleoo/DecorativeBackgrounds/)
- [银河系背景](http://www.htmleaf.com/html5/html5-canvas/201707294656.html)
- [SVG科幻动画圆圈旋转](https://wow.techbrood.com/fiddle/32230)

### SVG动画资源
- [svg 资源集合网站](http://svgtrick.com/)
- [animejs](https://animejs.com/)
- [tweenmax案例](https://www.tweenmax.com.cn/cool/)

### webpack
为处理资源管理和分割代码而生，可以包含任何类型的文件。灵活，插件多。

### rollup
用标准化的格式（es6）来写代码，通过减少死代码尽可能地缩小包体积。

### parcel
超快的打包速度，多线程在多核上并发编译，不用任何配置。、
