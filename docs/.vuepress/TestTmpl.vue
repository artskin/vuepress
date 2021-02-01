<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
console.log(Vue)
@Component
export default class TestTmpl extends Vue {
  message = 'Test Component'
}
</script>
