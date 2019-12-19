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
      <div class="infinity-left">

      </div>
      <div class="infinity-right"></div>
    </div>
    <div class="gossip"></div>

    <div class="container">
      <svg width="260" height="250" xmlns="http://www.w3.org/2000/svg">
        <!-- <path d="M 50 100 A 50 50 0 1 0 150 100 A 50 50 0 1 1 250 100 A 50 50 0 1 1 150 100 A 50 50 0 1 0 50 100 Z" /> -->
        <path d="M201.24,34.19a47.86,47.86,0,0,0-44.12-29.3l-1.32,0a64.06,64.06,0,0,0-32.7,9.74l0,0A149.47,149.47,0,0,0,101.46,32h0c-4.66,4.58-9.3,9.25-13.77,13.87A95.88,95.88,0,0,1,60.4,65.32a30.38,30.38,0,0,1-13.14,3A30,30,0,0,1,40,67.44,20.12,20.12,0,0,1,26.73,52.51a20.87,20.87,0,0,1,14-22.86,38,38,0,0,1,10-1.36,37.57,37.57,0,0,1,9.14,1.13,65.83,65.83,0,0,1,12.28,5c1.88,1,3.7,2.07,5.42,3.19l.08,0a2.89,2.89,0,0,0,1.43.38,2.85,2.85,0,0,0,2.64-3.94l0-.1A29.33,29.33,0,0,0,79,29.45l0,0A38.17,38.17,0,0,0,65.09,18.18h0a41.07,41.07,0,0,0-43.61,5.69A43.07,43.07,0,0,0,17,28.05l0,0A44.07,44.07,0,0,0,5.33,58a.28.28,0,0,0,0,.09,44.63,44.63,0,0,0,33,40.95l.11,0a68.08,68.08,0,0,0,13.5,1.35,67.57,67.57,0,0,0,27.11-5.63h0a114.24,114.24,0,0,0,22.85-14l0,0c1.15-1,2.31-2,3.46-3l.08-.07c8.89-7.64,17.61-15.72,25.92-24a62.33,62.33,0,0,1,16.89-12,23.15,23.15,0,0,1,23.72,4.41l.59.55.11.12,0,0,.14.14L173,47l.1.11a2.27,2.27,0,0,1,.22.22,26.46,26.46,0,0,1,6.48,17.14v.2c0,.66,0,1.3-.07,1.92a22.58,22.58,0,0,1-11.4,16.8h0a34.81,34.81,0,0,1-24.39,3.91,55,55,0,0,1-18.71-8.79,2.83,2.83,0,0,0-3.7.08,2.85,2.85,0,0,0-.47,3.71,36.19,36.19,0,0,0,8.7,9.6h0A45.33,45.33,0,0,0,156.93,101c.84,0,1.69,0,2.54-.07h0A48.77,48.77,0,0,0,193.05,84.2l.07-.08A48.74,48.74,0,0,0,205,52.86v0A47.59,47.59,0,0,0,201.24,34.19ZM83.64,52.84A133.74,133.74,0,0,1,63.05,69.23a46.13,46.13,0,0,1-23.11,7.5A27.32,27.32,0,0,1,14,62a30,30,0,0,1,4.34-32.65h0a43,43,0,0,1,4.27-4,39.26,39.26,0,0,1,41.64-5.43,36.31,36.31,0,0,1,13.2,10.7A25.45,25.45,0,0,1,80,34.79,37.29,37.29,0,0,0,61.77,22.33a37,37,0,0,0-20,.13A26.09,26.09,0,0,0,24.89,52.83h0a21.92,21.92,0,0,0,14.6,16.39A32.07,32.07,0,0,0,61.2,67,98,98,0,0,0,83.26,52.62C85.24,50.9,85.42,51,83.64,52.84ZM191.65,83h0a0,0,0,0,1,0,0,46.81,46.81,0,0,1-32.28,16.09c-.81,0-1.62.07-2.43.07a43.37,43.37,0,0,1-26.06-8.7,34.71,34.71,0,0,1-8.28-9.14,1,1,0,0,1-.17-.67,1,1,0,0,0,.17.67A51,51,0,0,0,133,89.13a35.44,35.44,0,0,0,27.64,3,32,32,0,0,0,19.58-18.57c.24-.73.45-1.48.63-2.23s.33-1.46.44-2.19c.07-.39.12-.76.17-1.14l0-.33c0-.3.06-.61.08-.91.06-.7.08-1.41.08-2.11v-.2a28.33,28.33,0,0,0-6.94-18.38q-.17-.18-.33-.33l-.13-.14-.2-.19-.05-.06h0l-.69-.64A25.07,25.07,0,0,0,147.6,40a63,63,0,0,0-17.47,12.44c-21,21.28-11.7,10.29-3.1.42a117.63,117.63,0,0,1,15.77-15c.3-.24.62-.47.93-.7s.62-.44.93-.65l.64-.43c.26-.18.53-.35.8-.52l.55-.35c.27-.16.53-.32.81-.47l.59-.35.6-.34,1-.52c.31-.17.63-.32,1-.48l.09,0c.34-.17.69-.34,1-.49l1.06-.47.42-.18.48-.19.34-.13.73-.28.05,0,.65-.23.58-.2.95-.31c.36-.12.73-.23,1.09-.33s.74-.21,1.11-.3l.18-.05a32.22,32.22,0,0,1,6.92-.75h1l.61,0h.23l.49,0h.18l.57.05.71.08c.51.06,1,.13,1.51.21s1.07.2,1.59.31l.69.16.28.07.63.16.38.11.49.14.11,0,.71.23.4.13.35.12,0,0,.8.31c.53.2,1,.42,1.56.66.26.11.52.23.77.36s.51.24.76.38c.52.27,1,.56,1.56.86s.91.55,1.35.85a28.29,28.29,0,0,1,2.73,2c.23.18.46.37.69.58a5.22,5.22,0,0,1,.43.39c.17.14.34.3.51.46s.3.28.45.44a4.78,4.78,0,0,1,.45.45,7.94,7.94,0,0,1,.57.59c.3.31.58.62.86,1s.55.65.81,1,.51.64.75,1l.06.08c.24.34.48.68.71,1,.08.1.14.2.21.3.24.36.47.74.7,1.12l0,.05c.14.24.28.48.41.72s.19.33.27.49a3,3,0,0,1,.16.31c.12.22.24.45.35.68l.12.25a1.42,1.42,0,0,1,.12.25c.08.16.16.33.23.49l.06.14c.06.13.12.27.17.4.15.34.3.69.43,1s.17.43.24.64c.16.43.3.86.45,1.3.07.22.14.44.2.66l.09.33a3.37,3.37,0,0,1,.1.34A36.81,36.81,0,0,1,191.65,83Z" />
      </svg>
      <div class="rect"></div>
    </div>

  </div>
</template>
<style>
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
    offset-path: path("M 50 100 A 50 50 0 1 0 150 100 A 50 50 0 1 1 250 100 A 50 50 0 1 1 150 100 A 50 50 0 1 0 50 100 Z");
    offset-distance: 0%;
    border-radius: 5px;
    animation: svg-path-animation 2s ease-in-out 0s infinite normal none;
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