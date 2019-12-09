---
lang: zh-CN
---
# vue代码示例

::: demo
```html
<template>
  <div class="box-vue">
    <p><input v-model="userName" placeholder="请输入用户名"></p>
    <p><input v-model="pwd" type="password" placeholder="请输入密码"></p>
    <p>用户名是: {{ userName }}<br>密 码 是: {{pwd}}</p>
    <p><button @click="doSubmit">提交</button></p>
  </div>
</template>
<style lang='less' rel="stylesheet/less">
 .box-vue{
   color:green;
   button{
     width:100px;
   }
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
      if( this.userName && this.pwd){
        alert('输入正确')
      }else{
        alert('重新输入')
      }
      
    }
  }
}
</script>
<style>
.box-vue { color: red; }
</style>
:::
----
<ClientOnly>
  <Vssue class="myvssue" />
</ClientOnly>
