---
title: 一个DIV实现小米200w的logo
lang : zh=CN
date: 2021/04/06 22:46:25
slug: home
---
## 一个DIV实现小米200w的logo

### 涉及知识点
> css3
- css3：伪类
- css3：多重阴影

<!-- more -->
::: demo
```html
<template>
  <div class="mi-logo"></div>
</template>
<style>
  .mi-logo{
    background:#f96400;
    width:66px;
    height:66px;
    border-radius:1.1em;
    color:#fff;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    padding:8px;
    font-size:18px;
    transform: scale(2.5);
  }
  .logo:before,.logo:after{
    content:'';
    display:inline-block;
  }
  .logo:before{
    transform: translateX(-20%);
    width:0.88em;
    height:0.88em;
    background:#f96400;
    border-radius:0 .3em 0 0;
    box-shadow: 0 .4em #f96400,0 0 0 .3em #fff;
  }
  .logo:after{
    position:absolute;
    left:45%;
    top:58%;
    transform: translate(-50%, -50%);
    background:currentColor;
    width:.3em;
    height:.9em;
    box-shadow: 21px -10.5px 0 0px, 21px 0.2px 0 0px;
  }
  .vuepress-plugin-demo-block__app{
    height:250px;
    padding:10em;
  }
</style>
<script>
export default {
  data: () => ({ }),
  mounted(){ },
  methods:{ }
}
</script>
:::