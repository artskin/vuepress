# vue 代码渲染
::: demo vue演示
```html

<strong>
{{ msg }}
<button @click="count++">Click Me!</button>
{{count}}
</strong>


<script lang="ts">
import { defineComponent,toRefs,reactive } from 'vue'
export default defineComponent({
  setup(){
    const data = reactive({
      msg:"vue3 in Markdown",
      count:0
    });
    return{
      ...toRefs(data),
    }
  }
})
</script>
```
:::


