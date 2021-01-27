
# ImagePlus 增强图片组件

> 大图轮播，下载，切换
## 基础用法

:::demo
```html
<template>
  <ImagePlus :imgInfo="imgInfo"></ImagePlus>
</template>
<script lang="ts">
export interface imgInfoType{
  name:string
  imgUrl:string
  bigImgList:Array<string>
}
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components:{
    ImagePlus
  }
})
export default class extends Vue {
  imgInfo:imgInfoType={
    name:'',
    imgUrl:'',
    bigImgList:[]
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