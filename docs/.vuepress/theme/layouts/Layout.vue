<template>
  <ParentLayout>
    
    <Content/>
    {{message}}
    <!-- <template #sidebar-top>
      <CarbonAds />
    </template>
    <template #page-bottom>
      <BuySellAds />
    </template> -->
  </ParentLayout>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ParentLayout from '@parent-theme/layouts/Layout.vue';
// import CarbonAds from '@theme/components/CarbonAds.vue'
// import BuySellAds from '@theme/components/BuySellAds.vue'

@Component({
  components: {
    ParentLayout,
    // CarbonAds,
    // BuySellAds
  },
})
export default class Layout extends Vue {
  message = 'Hello, TypeScript'
}
</script>
