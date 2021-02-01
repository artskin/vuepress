## ts in md

ts in md

## Vue3 in Md

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

::: demo
```vue
<template>
{{ message }}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options
export default class TsInMd extends Vue {
  message : 'TypeScript in Markdown3'
}
</script>
```
:::