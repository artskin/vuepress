---
title: WuHan 2020 Logo 动画
lang : zh=CN
date: 2020/02/02 22:46
slug: home
---
# WuHan 2020 Logo 动画


<!-- more -->
::: demo
```html
<template>
  <div class="box-infinity">
    <div class="logo-area">
      <svg title="sense-logo" ref="logo" class="svg-logo" width="420" height="360" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360">
        <defs>
          <linearGradient id="senselinear" x1="40%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#ff8c00"/>
            <stop offset="100%" stop-color="#fe1c62"/>
          </linearGradient>
        </defs>
        <path class="sense-logo-path" stroke="url(#senselinear)" v-on:webkitAnimationEnd="animationEnd" d="M220.06,249.9s-46.1-33.26-65.06-74c-12.29-26.42-13-61.81-6.51-80.52,5.15-14.81,16.22-37,35-53.68,14.3-12.71,33.44-22.25,50.43-26,29.28-6.5,64.22-1,91.09,17.08,16.13,10.85,27.23,26.39,35.79,40.67,14.64,24.4,14.38,59.69,9.76,81.34-5.9,27.68-21.15,44.73-21.15,44.73L196.48,351.56S61.46,218.18,45.2,202.72c-21.15-26-31.49-59.66-26-91.09C39.5-5.49,178.58,3.45,171.26,25.41c-.81,2.46-18.7,23.59-22,22.78-14.64-3.26-35.3.31-47.17,5.69C79,64.39,70.41,74.22,59.84,95.36,52.77,109.49,46,146.6,70.41,173.44c20.8,22.88,125.25,126.88,125.25,126.88s117.12-108.17,126.07-122c41-63.36,2.44-110.61-33.35-125.25-18.36-7.51-41.95-8.49-61.81.81-22.85,10.7-41.1,32.94-46.36,54.5-2.43,9.94-2.44,25.21,1.63,43.1,3.25,14.32,14.64,27.66,25.21,38.23,19.54,19.54,37.25,36.48,35.79,39C239.58,234.44,220.06,249.9,220.06,249.9Zm87,118.22-47.88-47.87-47.88,47.87L259.17,416ZM364.84,43.31m85.4,35.79c25.89,36.39,17.89,73.2-1.63,97.6C431.23,198.42,320.1,307.64,320.1,307.64l-24.4-23.58-20.33,20.33,46.36,47.17S451.87,227.8,474.64,199.47C508,158,501.44,111.22,494.16,91.3c-15.45-42.3-39-59.38-65.07-69.95-33.38-13.56-77.27-3.26-80.52,0s21.15,26,21.15,26S420.15,36.8,450.24,79.1Z"/></svg>
        <!-- <path class="logo-shadow" d="M155.315,100.243C59.724,197.125-5.895,120.625,25.75,63.7,52.964,18.71,125.769,19.211,149.456,66.03,111.232,17.75,33.5,38.473,44.092,100.854h0C63.3,166.246,138.92,115.857,155.315,100.243Z"/>
        <path class="logo-shadow" d="M362.787,155.518h0c0,.01-.01.01-.01.019-36.8,44.224-104.649,42.55-132.191-3.667,27.555,29.731,70.77,31.543,95.3,8.025,42.071-40.558,3.213-106.164-48.283-85.346-20.932,9.151-42.266,32.6-56.275,45.4C317.011-20.7,410.713,88.555,362.787,155.518Z"/> -->
      <div class="logo-name">WuHan 2010</div>
      <div class="rect"></div>
    </div>
  </div>
</template>
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
      console.log(e)
      if(e.animationName ==='senseLogo'){
        e.target.classList.add('logo-fill');
        // setTimeout(()=>{
        //   e.target.classList.add('iosFill');
        // },100)
        //e.target.classList.add('iosFill'); //解决ios @keyframes fill: url(#senselinear) 无效问题;
      }
    }
  }
}
</script>
<style>
  .logo-area {
    position: relative;
    overflow:hidden;
    width:380px;
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
      stroke-dasharray: 0 3687px;
    }
    100% {
      stroke-dasharray: 3687px 0;
    }
  }
  .logo-shadow{
    fill:transparent;
    animation: senseLogoShadow 3s linear forwards;
    
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
    animation-delay: 3s;
    -webkit-animation: senseLogoFill 3s linear forwards;
    animation: senseLogoFill 3s linear forwards;
    
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
    font-size:40px;
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
    
    justify-content: center;align-items:center;/**/
    flex-direction: column;
    height:550px;
  }
  .vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display{max-height:550px!important;}
</style>


:::
