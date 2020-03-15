---
title: css3毛玻璃
lang : zh=CN
date: 2020/01/08 19:46:25
slug: home
---
## css3毛玻璃

### 背景介绍
> 

<!-- more -->
::: demo
```html
<template>
  <div class="box-infinity">

    <!-- <button class="btn-aero" draggable="true"><span>毛玻璃按钮</span></button> -->
    <div class="btn-aero noblur" draggable="true"><span>毛玻璃按钮</span></div>
 
  </div>
</template>
<script>
export default {
  data: () => ({}),
  mounted(){
  },
  methods:{
  }
}
</script>
<style>
  .box-infinity,
  .box-infinity .btn-aero::before{
    background:url('/assets/images/normal1.jpg') no-repeat center;
    background-size: cover;
  }
  .box-infinity{
    height:auto;
    text-align:center;
    min-height:300px;
  }
  .box-infinity .btn-aero{
    width: 280px;
    height: 86px;
    background:transparent;
    display:inline-block;
    position:relative;
    overflow:hidden;
    border: 2px solid white;
    -webkit-backface-visibility: hidden;
    margin-top:40px;
    margin-left:100px;
  }
  .box-infinity .btn-aero span{
    position:relative;z-index:1;
  }
  .box-infinity .btn-aero::before{
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background-attachment: fixed;
    background-position: 50%;
    z-index:0;
    transition: all 0.3s ease;
  }
  .box-infinity .btn-aero:hover::before{
    filter: blur(4px);
  }
  .box-infinity .noblur::before{
    filter: blur(4px);
  }
  .box-infinity .noblur:hover::before{
    filter: blur(0px);
  }
</style>
:::
