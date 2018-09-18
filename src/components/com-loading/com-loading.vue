<template>
  <div class="loading-box">
    <div class="loading-content">
      <div class="loading-icon">
        <img src="@/common/images/loading.gif" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComLoading'
}
</script>
<style lang="less" scoped>
@import './../../common/less/base.less';
.loading-box{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  .flex();
  .flex-c();
  .loading-content{
    .h(300px);
    .loading-icon{
      .h(100%);
      img{
        .h(100%);
      }
    }
  }
}
</style>
