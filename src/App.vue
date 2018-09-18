<template>
  <div id="app">
    <com-header></com-header>
    <div class="main">
      <router-view></router-view>
    </div>
    <com-loading v-if="isLoading"></com-loading>
  </div>
</template>

<script>
import ComHeader from '@/components/com-header/com-header'
import ComLoading from '@/components/com-loading/com-loading'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  },
  components: {
    ComHeader,
    ComLoading
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import url('./common/less/base.less');
#app{
  .main{}
}
</style>
