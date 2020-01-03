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
</style>
<script>
export default {
  data: () => ({}),
  mounted(){},
  methods:{}
}
</script>
:::