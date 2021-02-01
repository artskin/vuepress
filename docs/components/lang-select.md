---
lang: zh-CN
title: LangSelect
description: LangSelect介绍
---
![user](/images/user.jpg)
![icon](./marker-icon.png)

# LangSelect 语言选择

## 基础用法

::: tip
山大倒萨倒萨
:::

::: spoiler click me
*content*
:::


::: demo
这是一个提示33331133111是是是
:::

```vue
<template>
  <div> 当前语言：{{currentLang}}</div>
</template>
<script>
  export default {
    data:()=>({
      currentLang:'EN'
    })
  }
</script>
```

:::demo
```html
<template>
  <div> 当前语言：{{currentLang}}</div>
</template>
<script lang="ts">
  export default {
    data:()=>({
      currentLang:'en',
      langList : ['en','zh']
    }),
    methods:{
      getLang(e){
        this.currentLang = e;
      }
    }
  }
</script>
```
:::

```html{2,11-13}
<template>
  <div> 当前语言：{{currentLang}}</div>
</template>
<script lang="ts">
  export default {
    data:()=>({
      currentLang:'en',
      langList : ['en','zh']
    }),
    methods:{
      getLang(e){
        this.currentLang = e;
      }
    }
  }
</script>
```


```ts:no-line-numbers
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: '你好， VuePress',
}
```
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>


这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

## 属性

| 参数        | 说明            |  参数类型       |  默认值     |
| --------    | :-----          | :----        |:----        |
| langList    | 语言列表       |   Array     |   ——     |

## 方法

| 事件名称        | 说明            |  回调       |
| --------       | :-----          | :----        |
| onLangChanged  |值改变时触发   |   改变后的值     |

## Slot

| name        | 说明            |  默认值       |
| --------    | :-----          | :----        |
| ——          | 组件展示        |   语言icon和文案     |