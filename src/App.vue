<template>
  <div id="app">
    <com-header></com-header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ComHeader from '@/components/com-header/com-header'
export default {
  name: 'app',
  components: {
    ComHeader
  }
}
</script>

<style lang="less" scoped>
@import url('./common/less/base.less');
#app{
  .main{}
}
</style>
