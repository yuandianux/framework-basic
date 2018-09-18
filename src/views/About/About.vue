<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapGetters([
      'msg'
    ])
  },
  mounted () {
    this.setIsLoading(false)
  },
  methods: {
    ...mapActions([
      'setIsLoading'
    ])
  }
}
</script>
<style lang="less" scoped>
@import './../../common/less/base.less';
</style>
