---
title: 数字更新时上下滑动效果
lang : zh=CN
date: 2020/01/08 19:46:25
slug: home
---
## 数字更新时上下滑动效果

### 背景介绍
> 项目用到这个效果，网上找了下现成的例子，发现代码量还不少，有个甚至需要npm两个包，有点没必要。
其实原理也很简单，不如自己写一个吧。借助vue,css3,非常简单的实现。
包含vue的架子和css，本实例用到的也不到50行代码。

### 知识点
- vue watch
- css3动画

- ps：表单输入数字，或按键盘方向上下键看效果

<!-- more -->
::: demo
```html
<template>
  <div class="box-infinity">
    <div ref="numberSlide" class="number-slide">
      <i v-for="item in numberList" :style="'transform:translateY(-' +item + 'em)'" :key="item.key">{{item}}</i>
    </div>
    <input type="number" v-model.number="growValue">
  </div>
</template>
<script>
export default {
  data: () => ({
    growValue:1234,
    numberList:[]
  }),
  watch:{
    growValue(n,old){
      this.creatNumber()
    }
  },
  mounted(){
    this.creatNumber()
  },
  methods:{
    creatNumber(){
      let arr = String(this.growValue).split('');
      this.numberList = arr;
    }
  }
}
</script>
<style>
  div{box-sizing: border-box;}
  .box-infinity{
    height:auto;
    background: #092756;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    min-height:400px;
  }
  .number-slide {
    font-size: 58px;
    color: orange;
    overflow: hidden;
    line-height:1;
    height: 1em;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0);
    margin-bottom:20px;
  }
  .number-slide i{
    font-style: normal;
    position: relative;
    display: inline-block;
    transition: all 1.2s ease 0s;
  }
  .number-slide i::after{
    content:'0 1 2 3 4 5 6 7 8 9';
    position:absolute;
    color:#fff;
    font-weight: normal;
    display: block;
    width: 1em;
    line-height: 1em;
    left: -0.25em;
    top: 0;
  }
</style>
:::