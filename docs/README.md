# Hello VuePress next

::: spoiler 标题
 code 详情
:::

::: demo
```vue
<template>
  <el-button>{{currentLang}}</el-button>
</template>
<script>
  export default {
    data:()=>({
      currentLang:'en',
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

<RedDiv>_Current count is: {{ count }}_</RedDiv>
<strong>{{msg}}</strong>
<button @click="count++">Click Me!</button>

<script>
  import { h, ref } from 'vue'
  const RedDiv = (_, ctx) => h(
    'div',
    {
      class: 'red-div',
    },
    ctx.slots.default()
  )
  export default {
    components: {
      RedDiv,
    },
    data:()=>({
      currentLang:'en',
    }),
    setup() {
      const msg = 'Vue in Markdown'
      const count = ref(0)
      return {
        msg,
        count,
      }
    }
  }
</script>
<style>
.red-div{
  color:#c00
}
</style>