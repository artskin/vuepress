<template>
  <ParentLayout>
    <Content/>
    {{message}}
  </ParentLayout>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ParentLayout from '@parent-theme/layouts/Layout.vue'
console.log(ParentLayout)
@Component({
  components: {
    ParentLayout,
  },
})
export default class Layout extends Vue {
  message = 'Hello, TypeScript'
}
</script>
