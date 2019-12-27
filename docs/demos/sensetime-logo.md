---
title: SenseTime Logo 动画
lang : zh=CN
date: 2019/12/23 11:46:25
slug: home
---
## SenseTime Logo 动画

<!-- more -->
::: demo
```html
<template>
  <div class="box-infinity">
    <div class="logo-area">
      <svg title="sense-logo" ref="logo" class="svg-logo" width="400" height="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="senselinear" x1="40%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#fca326"/>
            <stop offset="70%" stop-color="#fc6d26"/>
            <stop offset="100%" stop-color="#fca326"/>
          </linearGradient>
        </defs>
        <path class="sense-logo-path" stroke="url(#senselinear)" v-on:webkitAnimationEnd="animationEnd" d="M380.781,64.312C353.644,1.52,280.806-4.127,231.582,26.965a285.3,285.3,0,0,0-41.319,33.166C22.39,248.262-2.658-15.6,144.647,70.843h.153c2.859,1.948,9.925-1,7.771-6.8v-.191a55.956,55.956,0,0,0-5.193-8.592C114.415,12.533,47.717,18.376,18.764,66.179-10.2,113.567,16.7,173.436,69.723,188.136h.21a131.376,131.376,0,0,0,77.54-8.172,218.126,218.126,0,0,0,43.63-26.731c39.411-28,87.87-108.121,135.127-64.9l.267.267.363.172c19.021,19.4,16.929,55.9-8.917,69.482-27.825,16.834-59.692,6.976-84.6-10.439-18.25,1.11,6.885,24.342,13.52,28.529a86.99,86.99,0,0,0,45.774,15.424C358.7,194.338,406.88,124.467,380.781,64.312Z"/>
        <path class="logo-shadow" d="M155.315,100.243C59.724,197.125-5.895,120.625,25.75,63.7,52.964,18.71,125.769,19.211,149.456,66.03,111.232,17.75,33.5,38.473,44.092,100.854h0C63.3,166.246,138.92,115.857,155.315,100.243Z"/>
        <path class="logo-shadow" d="M362.787,155.518h0c0,.01-.01.01-.01.019-36.8,44.224-104.649,42.55-132.191-3.667,27.555,29.731,70.77,31.543,95.3,8.025,42.071-40.558,3.213-106.164-48.283-85.346-20.932,9.151-42.266,32.6-56.275,45.4C317.011-20.7,410.713,88.555,362.787,155.518Z"/></svg>
      <div class="logo-name">SenseTime</div>
      <div class="rect"></div>
    </div>
  </div>
</template>
<style>
  .logo-area {
    position: relative;
    height:180px;
    overflow:hidden;
    width:240px;
  }
  .svg-logo{
    width:100%;
  }
  .sense-logo-path {
    fill: transparent;
    stroke: url(#senselinear);
    animation: senseLogo 3s ease-in-out forwards;
    /*stroke-dasharray: 5px 20px;*/
  }
  @keyframes senseLogo {
    0% {
      stroke-dasharray: 0 1611px;
    }
    100% {
      stroke-dasharray: 1611px 0;
    }
  }
  .logo-shadow{
    fill:transparent;
    animation: senseLogoShadow .6s linear forwards;
    animation-delay: 3.5s;
  }
  @keyframes senseLogoShadow {
    0% {
      fill: transparent;
    }
    100% {
      fill: #eb6420;
    }
  }
  .logo-fill {
    -webkit-animation: senseLogoFill 1s linear forwards;
    animation: senseLogoFill 1s linear forwards;
  }
  @-webkit-keyframes senseLogoFill {
    from {
      fill: transparent;
    }
    to {
      fill: url(#senselinear);
    }
  }
  .iosFill{
    fill: url(#senselinear);
  }
  .logo-name{
    color:#fff;
    padding-top:10px;
    text-align:center;
    font-size:36px;
    font-weight:bold;
    font-style: italic;
    letter-spacing: 2px;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-name: lightSpeedIn;
    animation-delay: 4s;
    text-shadow:1px -1px #c0c0c0,
                2px -2px #b0b0b0,
                3px -3px #a0a0a0,
                5px -5px rgba(0, 0, 0, 0.4);
  }
  @keyframes lightSpeedIn {
    from {
      -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);
      transform: translate3d(-100%, 0, 0) skewX(-30deg);
      opacity: 0;
    }
    60% {
      -webkit-transform: skewX(20deg);
      transform: skewX(20deg);
      opacity: 1;
    }
    80% {
      -webkit-transform: skewX(-5deg);
      transform: skewX(-5deg);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .logo-area .rect {
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 0px; 
    background: #fdce07;
    offset-path: path("M380.781,64.312C353.644,1.52,280.806-4.127,231.582,26.965a285.3,285.3,0,0,0-41.319,33.166C22.39,248.262-2.658-15.6,144.647,70.843h.153c2.859,1.948,9.925-1,7.771-6.8v-.191a55.956,55.956,0,0,0-5.193-8.592C114.415,12.533,47.717,18.376,18.764,66.179-10.2,113.567,16.7,173.436,69.723,188.136h.21a131.376,131.376,0,0,0,77.54-8.172,218.126,218.126,0,0,0,43.63-26.731c39.411-28,87.87-108.121,135.127-64.9l.267.267.363.172c19.021,19.4,16.929,55.9-8.917,69.482-27.825,16.834-59.692,6.976-84.6-10.439-18.25,1.11,6.885,24.342,13.52,28.529a86.99,86.99,0,0,0,45.774,15.424C358.7,194.338,406.88,124.467,380.781,64.312Z");
    /* offset-distance: 0%; */
    border-radius: 5px;
    animation: svg-path-animation 4s ease 0s infinite normal none;
  }
  @keyframes svg-path-animation {
    from {
      offset-distance: 0%;
    }
    to {
      offset-distance: 100%;
    }
  }

  .box-infinity{
    background: #092756;
    background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top, rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%,#092756 100%);
    background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg, #670d10 0%,#092756 100%);
    background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg, #670d10 0%,#092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg, #670d10 0%,#092756 100%);
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    height:300px;
  }
</style>
<script>
export default {
  data: () => ({}),
  mounted(){
    this.getSvgPathLength();//获取svg:path长度
  },
  methods:{
    getSvgPathLength(){
      let logoPath = this.$refs.logo.children[1];
      console.log(logoPath.getTotalLength())
    },
    animationEnd(e){
      if(e.animationName ==='senseLogo'){
        e.target.classList.add('logo-fill');
        setTimeout(()=>{
          e.target.classList.add('iosFill');
        },1000)
        //e.target.classList.add('iosFill'); //解决ios @keyframes fill: url(#senselinear) 无效问题;
      }
    }
  }
}
</script>

:::

### 涉及知识点
> svg + css制作公司logo片头动画
- css background:radial-gradient 渐变
- svg: < linearGradient /> 渐变设置
- css3 animation 动画，及动画执行事件监控( webkitAnimationStart / webkitAnimationEnd / webkitAnimationIteration)
- svg + css3:offset-path 自定义路径动画 → [传送门](https://css-tricks.com/)
- css 立体文字写法

>其他svg动画库 [vivus.js](http://maxwellito.github.io/vivus/)