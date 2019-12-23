---
lang : zh=CN
date: 2019/12/17 14:46:25
slug: home
---
## CSS3 人脸识别 扫描效果
## 涉及知识点
> 纯css 实现
- css3: background-image
- css3: animation 动画
- css3: clip-path使用 [传送门](https://bennettfeely.com/clippy/)
- css: 伪类

<!-- more -->
::: demo
```html
<template>
  <div class="demo-bg">
    <div class="radar">
      <div class="circle">
        <div class="circle-inner">
          <div class="circle-scan">
            正在扫描...
          </div>
        </div>
        <img src="/assets/images/head.gif?v=2" alt="face" />
      </div>
      <div class="radar-border"></div>
    </div>
  </div>
</template>
<style>
  .demo-bg{
    height:300px;
    background:#090d2c;
    background: #282537;
    background-image: -webkit-radial-gradient(top, circle cover, #003399 0%, #252233 80%);
    background-image: -moz-radial-gradient(top, circle cover, #003399 0%, #252233 80%);
    background-image: -o-radial-gradient(top, circle cover, #003399 0%, #252233 80%);
    background-image: radial-gradient(top, circle cover, #003399 0%, #252233 80%);
    display:flex;
    justify-content: center;
    align-items:center;
  }
  .demo-bg:before{
    content:'';
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    z-index:0;
  }
  .radar{
    position:relative;
    width: 240px;
    height: 240px;
    padding:20px;
  }
  .radar:before,
  .radar:after,
  .radar-border:before,
  .radar-border:after{
    content:'';
    position:absolute;
    width:40px;
    height:40px;
    border-style:solid;
    border-color:#54d0e1;
  }
  .radar:before,
  .radar:after{
    top:0;
  }
  .radar:before{
    left:0;
    border-width:2px 0 0 2px;
  }
  .radar:after{
    right:0;
    border-width:2px 2px 0 0;
  }
  .radar-border:before,
  .radar-border:after{
    bottom:0;
  }
  .radar-border:before{
    left:0;
    border-width:0 0 2px 2px;
  }
  .radar-border:after{
    right:0;
    border-width:0 2px 2px 0;
  }
  .circle {
    width:100%;
    height:100%;
    position: relative;
    color:#62d7eb;
    border: 1px solid #62d7eb;
    /* box-shadow: inset 0 0 0 2px; */
    border-radius: 50%;
    z-index:1;
  }
  .circle::before,
  .circle::after {
      content: '';
      z-index: 0;
      margin: -5%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 2px solid #62d7eb;
      /* box-shadow: inset 0 0 0 2px; */
      border-radius: 50%;
      animation: clipPath 20s linear infinite;
      /* clip-path:polygon(0% 35%, 35% 35%, 35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%); */
      clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    }
  .circle::before {
    animation-delay: -2.74s;
  }
  @keyframes clipPath{
    0%{}
    50% {
      transform: rotateZ(200deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  @keyframes clipFade {
    0%, 100% {
      clip: rect(0px, 220.0px, 2px, 0px);
    }
    25% {
      clip: rect(0px, 2px, 220.0px, 0px);
    }
    50% {
      clip: rect(218.0px, 220.0px, 220.0px, 0px);
    }
    75% {
      clip: rect(0px, 220.0px, 220.0px, 218.0px);
    }
  }
  .circle-inner{
    width:100%;
    height:100%;
    overflow: hidden;
    border-radius: 50%;
    position:absolute;
    z-index:0;
    background-size: 6px 6px;
    background-image: -webkit-linear-gradient(top , transparent 5px, rgba(98,215,235,.6) 6px),
                      -webkit-linear-gradient(left, transparent 5px, rgba(98,215,235,.6) 6px);
  }
  .circle-scan{
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    animation: radarBeam 3s infinite;
    animation-timing-function: linear;
    animation-delay: 3s;
    background-image: linear-gradient(180deg, rgba(95, 214, 249, 0) 50%, rgba(95, 214, 249, .9) 100%);
    border-bottom:1px solid rgba(95, 214, 249);
    text-align:center;
    line-height:200px;
    max-height:0%;
    border-bottom-width:0;
  }
  .circle img{width:100%;border-radius: 50%;z-index:-2}

  @keyframes radarBeam {
    0%,60% {
      border-bottom-width:0;
      max-height:0%;
    }
    100% {
      border-bottom-width:1px;
      max-height:100%;
    }
  }
</style>
<script>
  export default {}
</script>
:::
