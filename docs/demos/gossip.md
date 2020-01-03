---
title: 无穷大 符号动画
lang : zh=CN
date: 2019/12/17 13:46:25
slug: home
---
## css 八卦图

### 涉及知识点
> css实现

<!-- more -->
::: demo
```html
<template>
  <div class="box-infinity">
    <div class="gossip"></div>
  </div>
</template>
<style>
  .box-infinity{
    height:auto;
    background: #092756;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    min-height:200px;
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
    box-sizing:content-box;
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
  @keyframes run {
    0%{}
    50%{
      transform: rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
    }
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