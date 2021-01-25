
# FilterPopover 筛选框

## 基础用法

:::demo
```html
<template>
  <FilterPopover :formRules="formRules" @filterParams="getFilterParams"></FilterPopover>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components:{
    FilterPopover
  }
})
export default class extends Vue {
  formRules=[]  
  getFilterParams(filterResult){
    console.log(filterResult)
  }
}
</script>
```
:::

## 属性

| 参数        | 说明                                                              |  参数类型       |  默认值     |
| --------    | :-----                                                            | :----         |:----        |
| placement   | 弹出层出现位置（可选值：bottom / bottom-start / right-start）        |   String      |   bottom    |
| icon       | 筛选按钮icon图标class 名称                                           |   String      |   ——    |
| formRules   | 表单生成规则 参考 http://www.form-create.com/v2/guide/rule.html     |   Array       |   ——      |

## 方法

| 事件名称        | 说明                    |  回调                 |
| --------       | :-----                  | :----                 |
| filterParams   |表单筛选完成提交事件   |   表单筛选提交后的参数     |

## Slot

| name        | 说明            |  默认值       |
| --------    | :-----          | :----        |
| ——          | 筛选按钮文案     |   筛选     |