```
{{ message }}
{{device}}
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

enum Device {
    Camera,
    SenseKeeper,
    SenseDLC,
    SenseID,
    SemseGate
}
@Component
export default class TsInMd extends Vue {
  message = 'TypeScript in Markdown'
  device = Device[Device.SenseDLC]
}
</script>
```


<!-- {{ message }}
{{device}}
<script>
import { Component, Vue } from 'vue-property-decorator'

enum Device {
    Camera,
    SenseKeeper,
    SenseDLC,
    SenseID,
    SemseGate
}
@Component
export default class TsInMd extends Vue {
  message = 'TypeScript in Markdown'
  device = Device[Device.SenseDLC]
}
</script> -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: ()=>{
    return{
      msg: 'HelloWorld'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
