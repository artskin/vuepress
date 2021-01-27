# ts组件
<!-- ::: demo
```html
<template>
  <div class="box-vue">Vue {{ message }}</div>
</template>
<script>
export default {
  data: () => ({ message: 'Hello World' })
}
</script>
<style>
.box-vue { color: red; }
</style>
```
::: -->

::: demo
```html
<template>
  <ImageItem class="imglayer" :item="{
    imgUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    score:'0.8'
  }" />
</template>
<script lang="ts">
</script>
<style>
  .imglayer{
    width:200px
  }
</style>
```
:::
<!-- <ImageItem :item="{imUrl:'',score:'0.8'}"></ImageItem> -->

<TestTmpl />
<TestIndexTsFile />
