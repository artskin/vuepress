
# LangSelect 语言选择

## 基础用法

:::demo
```html
<template>
  <LangSelect :langList="langList" @onLangChanged="langChanged">{{langList[0]}}</LangSelect>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components:{
    LangSelect
  }
})
export default class extends Vue {
  langList=[
    "en",
    "zh"
  ]  
  langChanged(val:string){
    console.log(val)
  }
}
</script>
```
:::

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