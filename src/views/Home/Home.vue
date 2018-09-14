<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'msg'
    ])
  }
}
</script>
<style lang="less" scoped>
@import './../../common/less/base.less';
</style>
