---
title: CSS3 雷达扫描效果
lang : zh=CN
date: 2019/12/17 13:46:25
slug: home
---
<!-- more -->
::: demo
```html
<template>
  <div class="box-radar">
    <div class="radar"></div>
  </div>
</template>
<style>
.box-radar{
    height:300px;
    background:#090d2c;
    display:flex;
    justify-content: center;
    align-items:center;
}
.box-radar:before{
    content:'';
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    z-index:0;
    background: -webkit-linear-gradient(top, transparent 20px, rgba(255,255,255,.2) 21px),-webkit-linear-gradient(left, transparent 20px, rgba(255,255,255,.2) 21px);
    background-size: 21px 21px;
}
.radar {
  background: -webkit-radial-gradient(center, rgba(104, 225, 244, 0.3) 0%, rgba(104, 225, 244, 0) 75%), 
              -webkit-repeating-radial-gradient(rgba(104, 225, 244, 0) 5.8%, rgba(104, 225, 244, 0) 18%, #62d7eb 18.6%, rgba(104, 225, 244, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(104, 225, 244, 0) 49.5%, #62d7eb 50%, #62d7eb 50%, rgba(104, 225, 244, 0) 50.2%), 
              -webkit-linear-gradient(0deg, rgba(104, 225, 244, 0) 49.5%, #62d7eb 50%, #62d7eb 50%, rgba(104, 225, 244, 0) 50.2%);
  background: radial-gradient(center, rgba(104, 225, 244, 0.3) 0%, rgba(104, 225, 244, 0) 75%), 
              repeating-radial-gradient(rgba(104, 225, 244, 0) 5.8%, rgba(104, 225, 244, 0) 18%, #62d7eb 18.6%, rgba(104, 225, 244, 0) 18.9%), 
              linear-gradient(90deg, rgba(104, 225, 244, 0) 49.5%, #62d7eb 50%, #62d7eb 50%, rgba(104, 225, 244, 0) 50.2%), 
              linear-gradient(0deg, rgba(104, 225, 244, 0) 49.5%, #62d7eb 50%, #62d7eb 50%, rgba(104, 225, 244, 0) 50.2%);
  width: 200px;
  height: 200px;
  max-height: 75vh;
  max-width: 75vh;
  position: relative;
  left: 5px;
  top: -4px;
  border-radius: 50%;
  border: 1px solid #62d7eb;
  overflow: hidden;
}
.radar:before {
  content: ' ';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: blips 5s infinite;
  animation-timing-function: linear;
  animation-delay: 1.4s;
}
.radar:after {
  content: ' ';
  display: block;
  background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #20ff4d 100%);
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation: radar-beam 5s infinite;
  animation-timing-function: linear;
  transform-origin: bottom right;
  border-radius: 100% 0 0 0;
}

@keyframes radar-beam {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes blips {
  14% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
  }
  14.0002% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
  }
  25% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
  }
  26% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
    opacity: 1;
  }
  100% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%), radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
    opacity: 0;
  }
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