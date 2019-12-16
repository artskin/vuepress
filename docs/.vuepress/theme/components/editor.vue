<template>
    <div class="editor-wrapper">
      <div class="editor-tools">
        <div>
          <label for="">语言:</label>
          <select v-model="opts.language" clearable placeholder="请选择" v-on:change="changeLanguage(opts.language)">
            <option
              v-for="item in sets.language"
              :key="item"
              :label="item"
              :value="item">
              {{item}}
            </option>
          </select>
        </div>
        <div>
          <label for=""> 主题:</label>
          <select v-model="opts.theme" clearable placeholder="请选择" v-on:change="changeTheme(opts.theme)">
            <option
              v-for="item in sets.theme"
              :key="item"
              :label="item"
              :value="item">
            </option>
          </select>
        </div>
      </div>
      
      <!--调用子组件-->
      <div class="show">
        <monaco ref="monaco" :opts="opts" v-on:change="changeValue" :height="400"></monaco>
        <div class="run text-right"><button type="primary" size="mini" v-on:click="getValue">获取内容</button></div>
        <div>
          <iframe ref="runResult" class="iframe" id="iframeResult" name="iframeResult"></iframe>
        </div>
      </div>
      
    </div>
</template>
<script>
import monaco from './monaco.vue';
import axios from 'axios';
//console.log(axios)
//import html_tmpl from '../lang_tmpl/sample.html.txt'
export default {
    components: { monaco },
    data() {
      return {
        sets: {
          language: {
            'apex': 'apex',
            'azcli': 'azcli',
            'bat': 'bat',
            'c': 'c',
            'clojure': 'clojure',
            'coffeescript': 'coffeescript',
            'cpp': 'cpp',
            'csharp': 'csharp',
            'csp': 'csp',
            'css': 'css',
            'dockerfile': 'dockerfile',
            'fsharp': 'fsharp',
            'go': 'go',
            'graphql': 'graphql',
            'handlebars': 'handlebars',
            'html': 'html',
            'ini': 'ini',
            'java': 'java',
            'javascript': 'javascript',
            'json': 'json',
            'kotlin': 'kotlin',
            'less': 'less',
            'lua': 'lua',
            'markdown': 'markdown',
            'msdax': 'msdax',
            'mysql': 'mysql',
            'objective-c': 'objective-c',
            'pascal': 'pascal',
            'perl': 'perl',
            'pgsql': 'pgsql',
            'php': 'php',
            'plaintext': 'plaintext',
            'postiats': 'postiats',
            'powerquery': 'powerquery',
            'powershell': 'powershell',
            'pug': 'pug',
            'python': 'python',
            'r': 'r',
            'razor': 'razor',
            'redis': 'redis',
            'redshift': 'redshift',
            'ruby': 'ruby',
            'rust': 'rust',
            'sb': 'sb',
            'scheme': 'scheme',
            'scss': 'scss',
            'shell': 'shell',
            'sol': 'sol',
            'sql': 'sql',
            'st': 'st',
            'swift': 'swift',
            'tcl': 'tcl',
            'typescript': 'typescript',
            'vb': 'vb',
            'xml': 'xml',
            'yam': 'yam'
          },
          theme: {
            'vs': 'vs',
            'vs-dark': 'vs-dark',
            'hc-black': 'hc-black'
          }
        },
        opts: {
          value: '',
          readOnly: false, // 是否可编辑
          language: 'javascript', // 语言类型
          theme: 'vs-dark' // 编辑器主题
        }
      }
    },
    mounted(){
      this.changeLanguage(this.opts.language)
    },
    methods: {
      changeLanguage(val) {
        //window.console.log(val);
        // val.target.map((item)=>{
        //   window.console.log(item)
        // })
        this.opts.language = val;
        //if(val === 'html'){
          axios.get('https://microsoft.github.io/monaco-editor/index/samples/sample.'+val+'.txt').then((req)=>{
            //console.log(req)
            this.opts.value = req.data
          })
           //this.opts.value = html_tmpl;
          //this.$refs.monaco.defaultOpts.value = ''
          //console.log(this.$refs.monaco)
        //}
      },
      changeTheme(val) {
        this.opts.theme = val
      },
      // 手动获取值
      getValue() {
        this.$refs.monaco.defaultOpts.value = ''
        //this.$message.info(this.$refs.monaco.getVal());
        //ifr.innerHTML = this.$refs.monaco.getVal()
        console.log(this.$refs.monaco.getVal())
        
        if(this.opts.language === 'javascript'){
          var new_script = document.createElement("script");
          new_script.innerHTML = this.$refs.monaco.getVal();
          window.frames[0].document.getElementsByTagName('head')[0].appendChild(new_script);
        }
        
        window.frames[0].document.write(this.$refs.monaco.getVal());
        console.log(window.frames[0].document)
      },
      // 内容改变自动获取值
      changeValue() {
      }
    }
}
</script>
<style>
.text-right{
  text-align: right;
}
.iframe{
  border: 1px dashed #ccc;
  width: 100%;
}
.editor-wrapper{
  text-align: left;
}
.editor-tools{
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
.editor-tools *{display: inline-block;vertical-align: middle;line-height: 20px;font-size: 14px;}
.editor-tools select{height: 20px;padding: 0}
.show{
  display: flex;
  flex-direction: column
}

</style>