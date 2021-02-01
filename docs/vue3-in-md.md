## ts in md

ts in md

## Vue3 in Md

<strong class="demo-wrap">
{{ msg }}
</strong>

<script lang="ts">
import { defineComponent,toRefs,reactive } from 'vue'
export default defineComponent({
  setup(){
    const data = reactive({
      msg:"vue3 in Markdown"
    })
    return{
      ...toRefs(data),
    }
  }
})
</script>


```vue

<strong>
{{ msg }}
</strong>

<script lang="ts">
import { defineComponent,toRefs,reactive } from 'vue'
export default defineComponent({
  setup(){
    const data = reactive({
      msg:"vue3 in Markdown"
    })
    return{
      ...toRefs(data),
    }
  }
})
</script>

```
