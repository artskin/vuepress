
```md
# package.json
"dependencies": {
  "monaco-editor": "~0.18.1",
  "monaco-editor-webpack-plugin": "^1.7.0",
}
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Monaco Editor是为VS Code提供支持的代码编辑器，运行在浏览器环境中。编辑器提供代码提示，智能建议等功能。
    </p>
    <editor></editor>
  </div>
</template>

<script>
import editor from '@theme/components/editor.vue'
export default {
  name: 'monacoEditor',
  components: { editor },
  data(){
    return{
      msg: 'Monaco-editor'
    }
  }
}
</script>

<style scoped>

</style>
```



<Vssue title="vuepress" />