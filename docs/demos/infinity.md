---
title: 无穷大 符号动画
lang : zh=CN
date: 2019/12/17 13:46:25
slug: home
---
## ∞ css动画

## 莫比乌斯带
### 涉及知识点
> css+svg 实现
- css3: offset-path → [传送门](https://css-tricks.com/)

<!-- more -->
::: demo
```html
<template>
  <div class="box-infinity">
    <div class="infinity">
      <div class="rect"></div>
    </div>
    <div class="container">
      <svg width="150" height="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 64"><path ref="svgPath" d="M103.8,59.8c-28,0-43-59-73-59-14,0-29,12-29,30,0,15,13,29,29,29,30,0,44-59,73-59,15,0,30,9.6,30,30C133.8,46.7,119.8,59.8,103.8,59.8Z" /></svg>
      <div class="rect"></div>
    </div>
  </div>
</template>
<style>
  div{box-sizing: border-box;}
  .box-infinity{
    height:auto;
    background: #092756;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
  }
  .container { position: relative;}
  .container svg path {
    stroke: #c51915;
    fill: none;
    stroke-width: 2;
  }
  .rect{
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px; 
    border-radius: 5px;
    offset-path: path("M103.8,59.8c-28,0-43-59-73-59-14,0-29,12-29,30,0,15,13,29,29,29,30,0,44-59,73-59,15,0,30,9.6,30,30C133.8,46.7,119.8,59.8,103.8,59.8Z");
    offset-distance: 90%;
    z-index:9;
  }
  .container .rect {
    background: #fdce07;
    animation: svg-path-animation 4s ease 0s infinite normal none;
  }
  @keyframes svg-path-animation {
    from {
      offset-distance: 90%;
    }
    to {
      offset-distance: -10%;
    }
  }
  .infinity {
    width: 137px;
    height: 100px;
    position: relative;
    margin-top:30px;
    --deg: 45deg;
  }
  .infinity:before,
  .infinity:after{
    content:'';
    position: absolute;
    color:#fdce07;
    border-style:solid;
    border-width:4px;
    border-color: currentColor;
    width: 51px;
    height: 51px;
  }
  .infinity:before{
    transform: rotate(-45deg); 
    border-radius: 50px 50px 0 50px;
  }
  .infinity:after{
    transform: rotate(45deg); 
    right: 0px;
    top:0px;
    border-radius: 50px 50px 50px 0;
  }
  .infinity .rect {
    background: #d00;
    animation: svg-path-animation 5s ease 0s infinite normal none;
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