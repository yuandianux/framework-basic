<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'About',
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
