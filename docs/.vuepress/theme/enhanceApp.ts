import {  Vue } from 'vue-property-decorator'
import { EnhanceApp } from 'vuepress-types'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//import LangSelect from '../../packages/langSelect/index.vue'
// const components = [
//   Button
// ]
//import Test from './components/Test.vue'
//console.log(ElementUI)
import TestTmpl from './components/TestTmpl.vue'
import ImageItem from '../../../packages/ImageItem/index.vue'
import LangSelect from '../../../packages/langSelect/index.vue'
import TestTsFile from './components/TestTsFile'
import TestIndexTsFile from './components/TestIndexTsFile'
const enhanceApp: EnhanceApp = ({ Vue }) => {
  //Vue.component('LangSelect', LangSelect)
  // components.forEach(component => {
  //   Vue.component(component.name, component);
  // });
  Vue.use(ElementUI)
  Vue.component('ImageItem', ImageItem)
  Vue.component('TestTmpl', TestTmpl)
  Vue.component('LangSelect', LangSelect)
  Vue.component('TestTsFile', TestTsFile)
  Vue.component('TestIndexTsFile', TestIndexTsFile)
}


export default enhanceApp