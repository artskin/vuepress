---
title: CSS3 绘制图形
lang : zh=CN
date: 2019/12/17 13:46:25
slug: home
---
<!-- more -->
::: demo
```html
<template>
  <div class="box-radar">
    <div class="parallelogram"> ☺ | 佩戴口罩</div>
    <div class="parallelogram"> ☺ | 佩戴口罩</div>
  </div>
</template>
<style>
.box-radar{
    height:300px;
    background: #092756;
    
    display:flex;
    justify-content: center;
    align-items:center;
}
.parallelogram{
  height:40px;
  line-height:40px;
  padding:0 25px;
  position:relative;
  z-index:1;
  text-align:center;
  margin-right:3px;
}
.parallelogram:after{
  content:'';
  position:absolute;
  left:0;
  top:0;
  z-index:-1;
  width:100%;
  height:100%;
  transform: skewX(-45deg);
  background: rgb(231, 126, 56);
  border-radius:3px;
}
.parallelogram:last-child:after{
  background:rgb(240,240,240)
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