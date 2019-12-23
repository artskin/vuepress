---
title: SenseTime Logo 动画
lang : zh=CN
date: 2019/12/23 11:46:25
slug: home
---
## SenseTime Logo 动画

### 涉及知识点
> svg + css制作公司logo片头动画
- css background:radial-gradient 渐变
- svg: < linearGradient /> 渐变设置
- css3 animation 动画，及动画执行事件监控（webkitAnimationStart/webkitAnimationEnd/webkitAnimationIteration）
- svg + css3:offset-path 自定义路径动画 → [传送门](https://css-tricks.com/)

<!-- more -->
::: demo
```html
<template>
  <div class="box-infinity">
    <div class="logo-area">
      <svg title="sense-logo" ref="logo" class="svg-logo" id="logo-layer" width="300" height="110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 100">
        <defs>
          <linearGradient id="senselinear" x1="40%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#FD3258"/>
            <stop offset="15%" stop-color="#FB5A43"/>
            <stop offset="85%" stop-color="#FB5A43"/>
            <stop offset="100%" stop-color="#FD3258"/>
          </linearGradient>
        </defs>
        <path v-on:webkitAnimationEnd="changed" class="sense-logo-path" stroke="url(#senselinear)" stroke-width="1px" d="M197.8415,31.1362c-14.2128-32.886-52.36-35.8435-78.14-19.56h0a149.475,149.475,0,0,0-21.64,17.37h0c-87.9195,98.5293-101.0381-39.6623-23.89,5.61h.08c1.4973,1.0205,5.1979-.5224,4.07-3.56v-.1a29.3252,29.3252,0,0,0-2.72-4.5h0a38.17,38.17,0,0,0-13.91-11.27h0c-16.2129-7.6418-35.8535-3.4836-48.09,9.87h0c-23.1246,25.4148-9.2108,62.5669,21.33,70.99h.11a68.8068,68.8068,0,0,0,40.61-4.28h0a114.245,114.245,0,0,0,22.85-14h0c20.6409-14.6661,46.02-56.626,70.77-33.99h0l.14.14.19.09c9.9617,10.1588,8.8662,29.2793-4.67,36.39h0c-14.5731,8.8161-31.2627,3.6532-44.3085-5.4672-9.0736.4219,2.4458,11.57,5.7385,13.9772h0a45.8136,45.8136,0,0,0,29.71,9.03c24.42-1.1825,45.65-23.1767,45.53-48.07h0A47.5905,47.5905,0,0,0,197.8415,31.1362Z"/>
        <path class="logo-shadow" d="M80.3054,50.2744C30.242,101.0141-4.6718,60.6286,11.9017,30.8161,26.1545,7.2527,64.2846,7.5154,76.69,32.0357,56.671,6.75,15.96,17.6032,21.5077,50.2742v0C31.5652,84.5217,70.1007,57.8909,80.3054,50.2744Z"/>
        <path class="logo-shadow" d="M188.4173,79.721h0c0,.0051-.005.0051-.005.01-1.3527,1.6578-14.911,17.438-36.521,16.33-23.2668-1.5192-31.1222-16.026-32.5958-18.0278L119.18,77.81l.1158.2234c19.08,19.8643,50.3879,15.5273,58.32-10.0473,4.9368-20.011-12.6543-38.4464-31.8191-32.2161-11.3668,3.85-23.789,18.26-31.4645,25.3226,6.3016-8.7317,30.7608-43.5323,58.0353-34.4545a32.7629,32.7629,0,0,1,16.68,11.9234.3058.3058,0,0,1,.0605.0813,28.1618,28.1618,0,0,1,1.6218,2.4712.1233.1233,0,0,1,.03.056C197.5791,52.4432,196.3284,68.76,188.4173,79.721Z"/></svg>
      <div class="logo-name">SenseTime</div>
      <div class="rect"></div>
    </div>
  </div>
</template>
<style>
  .logo-area {
    position: relative;
    height:200px;
    overflow:hidden;
    width:200px;
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
      stroke-dasharray: 0 844px;
    }
    100% {
      stroke-dasharray: 844px 0;
    }
  }
  .logo-shadow{
    fill:transparent;
    animation: senseLogoShadow 1s linear forwards;
    animation-delay: 3s;
  }
  @keyframes senseLogoShadow {
    0% {
      fill: transparent;
    }
    100% {
      fill: #383450;
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
    text-align:center;
    font-size:28px;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-name: lightSpeedIn;
    animation-delay: 4s;
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
    offset-path: path("M197.8415,31.1362c-14.2128-32.886-52.36-35.8435-78.14-19.56h0a149.475,149.475,0,0,0-21.64,17.37h0c-87.9195,98.5293-101.0381-39.6623-23.89,5.61h.08c1.4973,1.0205,5.1979-.5224,4.07-3.56v-.1a29.3252,29.3252,0,0,0-2.72-4.5h0a38.17,38.17,0,0,0-13.91-11.27h0c-16.2129-7.6418-35.8535-3.4836-48.09,9.87h0c-23.1246,25.4148-9.2108,62.5669,21.33,70.99h.11a68.8068,68.8068,0,0,0,40.61-4.28h0a114.245,114.245,0,0,0,22.85-14h0c20.6409-14.6661,46.02-56.626,70.77-33.99h0l.14.14.19.09c9.9617,10.1588,8.8662,29.2793-4.67,36.39h0c-14.5731,8.8161-31.2627,3.6532-44.3085-5.4672-9.0736.4219,2.4458,11.57,5.7385,13.9772h0a45.8136,45.8136,0,0,0,29.71,9.03c24.42-1.1825,45.65-23.1767,45.53-48.07h0A47.5905,47.5905,0,0,0,197.8415,31.1362Z");
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
    //this.getSvgPathLength();//获取svg:path长度
  },
  methods:{
    getSvgPathLength(){
      let logoPath = this.$refs.logo.children[1];
      console.log(logoPath.getTotalLength())
    },
    changed(e){
      if(e.animationName ==='senseLogo'){
        e.target.classList.add('logo-fill','iosFill');
        //e.target.classList.add('iosFill'); //解决ios @keyframes fill: url(#senselinear) 无效问题;
      }
    }
  }
}
</script>
:::