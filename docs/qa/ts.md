---
title: typescript常见问题
lang : zh=CN
date: 2020/2/10 11:46:25
slug: home
---
<!-- more -->

# typescript常见问题

## Q:类型“Window”上不存在属性“***”。ts(2339)

A: 项目根目录新建类型定义文件（*.d.ts）
```js
//假如你在window上新增的属性是config
// 最佳方案
interface Window {
    config:string
}

// 第二方案
(window as MyWindow & typeof globalThis).config

// any 方案

(window as any).config
```