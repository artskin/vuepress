---
title: 无穷大 符号动画
lang : zh=CN
date: 2019/12/17 13:46:25
slug: home
---
## ∞ css动画

## 莫比乌斯带
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
  </div>
</template>
<style>
.box-infinity{
    height:300px;
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
  width: 48px;
  height: 48px;
  animation: run 2s infinite;
  animation-timing-function: linear;
  animation-delay: 1s;
  border-width: 5px 5px 0 0;
  border-color:currentColor currentColor transparent transparent
  --deg: 45deg;
  animation-direction: reverse;
}
.infinity-right {
  /* transform: rotate(135deg);  */
  width: 52px;
  height: 52px;
  right: 0px;
  top:0px;
  animation: run 3s infinite;
}
.infinity-left:before{
  content: ' ';
  left:0;
  top:0;
  display:block;
  width:10px;
  height:10px;
  border-radius:6px;
  background: linear-gradient(to left, rgb(242, 112, 156), rgb(255, 148, 114));
  box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em, 0 0 0 0.5em rgba(255, 255, 0, 0.1);
}
.infinity-right:before{
  content: ' ';
  left:0;
  top:0;
  display:block;
  width:10px;
  height:10px;
  border-radius:6px;
  background: linear-gradient(to left, rgb(242, 112, 156), rgb(255, 148, 114));
  box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em, 0 0 0 0.5em rgba(255, 255, 0, 0.1);
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