<template>
  <ParentLayout>
    {{message}}
    <Content/>
    
  </ParentLayout>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ParentLayout from '@parent-theme/layouts/Layout.vue'

@Component({
  components: {
    ParentLayout,
  },
})
export default class Layout extends Vue {
  message = 'Hello, TypeScript'
}
</script>
