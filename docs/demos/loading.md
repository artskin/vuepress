---
title: css loading 效果
lang : zh=CN
date: 2019/12/17 13:46:25
slug: home
---
## css动画之loading 效果

### 涉及知识点
> 
- css3: animation

<!-- more -->
::: demo
```html
<template>
  <div class="box-infinity">
    <div class="loading">loading</div>
    <svg style="display:none">
      <defs>
          <linearGradient id="borderlinear">
            <stop offset="0%" stop-color="#0F4C81"/>
            <stop offset="100%" stop-color="#4C8EC9"/>
          </linearGradient></defs></svg>
    <div class="circle">
      <svg width="100%" height="100%" viewBox="0 0 100% 100%"><circle stroke-dasharray="200% 300%" cx="50%" cy="50%" r="47%" /></svg>
    </div>
  
  </div>
</template>
<style>
  div{box-sizing: border-box;}
  .box-infinity{
    height:auto;
    background: #092756;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    min-height:200px;
  }
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
  .circle{
    width:120px;
    height:120px;
    overflow:hidden;
    background:rgba(0,0,0,.2)
  }
  .circle circle{ 
    fill:transparent;
    stroke-width:6%;
    stroke-linecap:round;
    stroke:url(#borderlinear);
    animation:2s cicleRun ease-in-out forwards;
    /* stroke-dasharray: 160px 377px; */
  }
  @keyframes cicleRun{
    /* 0%{
      stroke-dasharray: 0 377px;
    }
    50%{
      stroke-dasharray: 377px 0;
    } */
  }
</style>
<script>
export default {
  data: () => ({}),
  mounted(){},
  methods:{}
}
</script>
:::