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
    <div class="loading">loading</div>
    <div class="infinity">
      <div class="infinity-left">

      </div>
      <div class="infinity-right"></div>
    </div>
    <div class="gossip"></div>

    <div class="container">
      <svg width="260" height="250" xmlns="http://www.w3.org/2000/svg"><!-- <path d="M 50 100 A 50 50 0 1 0 150 100 A 50 50 0 1 1 250 100 A 50 50 0 1 1 150 100 A 50 50 0 1 0 50 100 Z" /> --><!-- <path d="M201.24,34.19a47.86,47.86,0,0,0-44.12-29.3l-1.32,0a64.06,64.06,0,0,0-32.7,9.74l0,0A149.47,149.47,0,0,0,101.46,32h0c-4.66,4.58-9.3,9.25-13.77,13.87A95.88,95.88,0,0,1,60.4,65.32a30.38,30.38,0,0,1-13.14,3A30,30,0,0,1,40,67.44,20.12,20.12,0,0,1,26.73,52.51a20.87,20.87,0,0,1,14-22.86,38,38,0,0,1,10-1.36,37.57,37.57,0,0,1,9.14,1.13,65.83,65.83,0,0,1,12.28,5c1.88,1,3.7,2.07,5.42,3.19l.08,0a2.89,2.89,0,0,0,1.43.38,2.85,2.85,0,0,0,2.64-3.94l0-.1A29.33,29.33,0,0,0,79,29.45l0,0A38.17,38.17,0,0,0,65.09,18.18h0a41.07,41.07,0,0,0-43.61,5.69A43.07,43.07,0,0,0,17,28.05l0,0A44.07,44.07,0,0,0,5.33,58a.28.28,0,0,0,0,.09,44.63,44.63,0,0,0,33,40.95l.11,0a68.08,68.08,0,0,0,13.5,1.35,67.57,67.57,0,0,0,27.11-5.63h0a114.24,114.24,0,0,0,22.85-14l0,0c1.15-1,2.31-2,3.46-3l.08-.07c8.89-7.64,17.61-15.72,25.92-24a62.33,62.33,0,0,1,16.89-12,23.15,23.15,0,0,1,23.72,4.41l.59.55.11.12,0,0,.14.14L173,47l.1.11a2.27,2.27,0,0,1,.22.22,26.46,26.46,0,0,1,6.48,17.14v.2c0,.66,0,1.3-.07,1.92a22.58,22.58,0,0,1-11.4,16.8h0a34.81,34.81,0,0,1-24.39,3.91,55,55,0,0,1-18.71-8.79,2.83,2.83,0,0,0-3.7.08,2.85,2.85,0,0,0-.47,3.71,36.19,36.19,0,0,0,8.7,9.6h0A45.33,45.33,0,0,0,156.93,101c.84,0,1.69,0,2.54-.07h0A48.77,48.77,0,0,0,193.05,84.2l.07-.08A48.74,48.74,0,0,0,205,52.86v0A47.59,47.59,0,0,0,201.24,34.19Z" /> --></svg>
      <div class="rect"></div>
    </div>
  </div>
</template>
<style>
.loading{
  color:#fff;
  line-height:1;
  font-size:20px;
  position: relative;
}
.loading:after{
  content: '...';
  position: absolute;
  display:block;
  left:3.4em;
  top:0;
  overflow:hidden;
  width:0;
  animation: loads 1s infinite;
}
@keyframes loads {
  0%{width:0;}
  100%{
    width:0.6em;
  }
}
  .container {
    position: relative;
    
  }
  .container svg path {
    stroke: #c51915;
    fill: none;
    stroke-width: 1;
  }
  @keyframes svg-path-animation {
    from {
      offset-distance: 0%;
    }
    to {
      offset-distance: 100%;
    }
  }
  .container .rect {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px; 
    background: #fdce07;
    offset-path: path("M201.24,34.19a47.86,47.86,0,0,0-44.12-29.3l-1.32,0a64.06,64.06,0,0,0-32.7,9.74l0,0A149.47,149.47,0,0,0,101.46,32h0c-4.66,4.58-9.3,9.25-13.77,13.87A95.88,95.88,0,0,1,60.4,65.32a30.38,30.38,0,0,1-13.14,3A30,30,0,0,1,40,67.44,20.12,20.12,0,0,1,26.73,52.51a20.87,20.87,0,0,1,14-22.86,38,38,0,0,1,10-1.36,37.57,37.57,0,0,1,9.14,1.13,65.83,65.83,0,0,1,12.28,5c1.88,1,3.7,2.07,5.42,3.19l.08,0a2.89,2.89,0,0,0,1.43.38,2.85,2.85,0,0,0,2.64-3.94l0-.1A29.33,29.33,0,0,0,79,29.45l0,0A38.17,38.17,0,0,0,65.09,18.18h0a41.07,41.07,0,0,0-43.61,5.69A43.07,43.07,0,0,0,17,28.05l0,0A44.07,44.07,0,0,0,5.33,58a.28.28,0,0,0,0,.09,44.63,44.63,0,0,0,33,40.95l.11,0a68.08,68.08,0,0,0,13.5,1.35,67.57,67.57,0,0,0,27.11-5.63h0a114.24,114.24,0,0,0,22.85-14l0,0c1.15-1,2.31-2,3.46-3l.08-.07c8.89-7.64,17.61-15.72,25.92-24a62.33,62.33,0,0,1,16.89-12,23.15,23.15,0,0,1,23.72,4.41l.59.55.11.12,0,0,.14.14L173,47l.1.11a2.27,2.27,0,0,1,.22.22,26.46,26.46,0,0,1,6.48,17.14v.2c0,.66,0,1.3-.07,1.92a22.58,22.58,0,0,1-11.4,16.8h0a34.81,34.81,0,0,1-24.39,3.91,55,55,0,0,1-18.71-8.79,2.83,2.83,0,0,0-3.7.08,2.85,2.85,0,0,0-.47,3.71,36.19,36.19,0,0,0,8.7,9.6h0A45.33,45.33,0,0,0,156.93,101c.84,0,1.69,0,2.54-.07h0A48.77,48.77,0,0,0,193.05,84.2l.07-.08A48.74,48.74,0,0,0,205,52.86v0A47.59,47.59,0,0,0,201.24,34.19Z");
    offset-distance: 0%;
    border-radius: 5px;
    animation: svg-path-animation 4s ease 0s infinite normal none;
  }
.box-infinity{
    height:auto;
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
}
.infinity {
  width: 100px;
  height: 100px;
  position: relative;
}
.infinity-left,
.infinity-right{
  position: absolute;
  border-style:solid;
  color:#fdce07;
  border-radius: 30px;
}
.infinity-left {
  /* transform: rotate(-45deg);  */
  /* animation: run 2s infinite; */
  width: 51px;
  height: 51px;
  animation: run 4s infinite;
  animation-timing-function: linear;
  animation-delay: 2s;
  border-color:currentColor currentColor currentColor currentColor;
  --deg: 45deg;
  animation-direction: reverse;
}
.infinity-right {
  /* transform: rotate(135deg);  */
  width: 51px;
  height: 51px;
  right: 0px;
  top:0px;
  animation: run 4s infinite;
  animation-timing-function: linear;
  border-color: currentColor currentColor currentColor currentColor;
}
.infinity-left:before{
  content: ' ';
  left:0;
  top:0;
  display:block;
  width:10px;
  height:10px;
  border-radius:6px;
  animation: runHalf 4s infinite;
  animation-timing-function: linear;
  animation-delay: 2s;
  opacity:1;
  background: linear-gradient(to left, rgb(242, 112, 156), rgb(255, 148, 114));
  /* box-shadow: 0 0 1em, 0 0 2em, 0 0 3em, 0 0 4em, 0 0 5em, 0 0 0 0.5em rgba(255, 255, 0, 0.1); */
}
.infinity-right:before{
  content: ' ';
  left:0;
  top:0;
  display:block;
  width:10px;
  height:10px;
  border-radius:6px;
  opacity:1;
  animation: runHalf 4s infinite;
  animation-timing-function: linear;
  background: linear-gradient(to left, rgb(242, 112, 156), rgb(255, 148, 114));
  /* box-shadow: 0 0 1em, 0 0 2em, 0 0 3em, 0 0 4em, 0 0 5em, 0 0 0 0.5em rgba(255, 255, 0, 0.1); */
}
@keyframes run {
  0%{}
  50%{
    transform: rotate(180deg);
  }
  100%{
   
    transform: rotate(360deg);
  }
}
@keyframes runHalf {
  0%{
    opacity:1
  }
  50%{
    opacity:0
  }
  100%{
    opacity:1
  }
}
@keyframes clipDiamondIn {
  0%   {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 0, 99% 50%, 50% 99%, 0 50%);
  }   
}
.vuepress-plugin-demo-block__wrapper .gossip{
  box-sizing:content-box;
}
.gossip { 
  width: 96px; 
  height: 48px; 
  background: #eee; 
  border-color: black; 
  border-style: solid; 
  border-width: 2px 2px 50px 2px; 
  border-radius: 100%; 
  position: relative;
  animation: run 5s infinite;
} 
.gossip:before { 
  content: ""; 
  position: absolute; 
  top: 50%; 
  left: 0; 
  background: #eee; 
  border: 18px solid black; 
  border-radius: 50%; 
  width: 12px; 
  height: 12px; 
} 
.gossip:after { 
  content: ""; 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  background: black; 
  border: 18px solid #eee; 
  border-radius:100%; 
  width: 12px; 
  height: 12px; 
} 
</style>
<script>
export default {
  data: () => ({
    userName: '',
    pwd:''
  }),
  methods:{
    doSubmit(){
      
    }
  }
}
</script>
:::