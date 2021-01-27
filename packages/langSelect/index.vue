<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div class="el-dropdown-link">
      <slot>
        <i ref="icon" class="el-icon-setting" :style="'font-size:'+size"></i>选择语言
      </slot>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item 
      v-for="(item,index) in langList" 
      :key="index" 
      :disabled="language===item" :command="item">
        {{item}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Vue,Prop, Watch } from 'vue-property-decorator';

@Component({
})
export default class LangSelect extends Vue {
  @Prop({default:""}) lang!:string
  @Prop({default:"14px"}) size!:string
  @Prop({default:[]}) langList!:Array<string>

  get language() {
    return this.lang;
  }
  created() {
    
  }
  mounted(){
    document.documentElement.setAttribute('lang',this.language);
  }

  handleSetLanguage(lang:string) {
    document.documentElement.setAttribute('lang',lang);
    this.$emit("onLangChanged",lang)
  }
}

</script>

<style lang="scss" scoped>

</style>
