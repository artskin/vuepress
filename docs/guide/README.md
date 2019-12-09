# vuepress

::: demo
```vue
<template>
  <div class="box-vue">
    Vue {{ message }}
    <button @click="doSomething">改变</button>
  </div>
</template>
<style>
 .box-vue{
   color:green
 }
</style>
<script>
export default {
  data: () => ({ message: 'Hello World2' }),
  methods:{
    doSomething(){
      this.message = new Date();
      alert("显示时间")
    }
  }
}
</script>
<style>
.box-vue { color: red; }
</style>
:::

<!-- <Vssue title="vuepress" /> -->
```javascript

console.log('测试')
```
<ClientOnly>
  <Vssue class="myvssue" />
</ClientOnly>
