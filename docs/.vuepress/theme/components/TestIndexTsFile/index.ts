import Vue from 'vue'

export default Vue.extend({
  // eslint-disable-next-line vue/match-component-file-name
  name: 'TestIndexTsFile',

  render(h) {
    return h('strong', 'test index.ts file')
  },
})