<template>
  <div class="h-box">
    <div class="logo">
      <img src="@/common/images/logo.png" alt="">
    </div>
    <nav class="menu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router @select="_handleSelect">
        <el-menu-item class="menu-item" index="/home">首页</el-menu-item>
        <el-menu-item class="menu-item" index="/about">关于我们</el-menu-item>
      </el-menu>
    </nav>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ComHeader',
  data () {
    return {
      activeIndex: window.location.pathname === '/' ? '/home' : window.location.pathname
    }
  },
  created () {
    this.setMsg(this.activeIndex)
  },
  methods: {
    _handleSelect (index) {
      this.setMsg(index)
    },
    ...mapActions([
      'setMsg'
    ])
  }
}
</script>

<style lang="less" scoped>
@import './../../common/less/base.less';
.h-box{
  .clearfix();
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
  .logo{
    .left();
    .mt(18px);
    .mr(20px);
  }
  .menu{
    .left();
    .el-menu-demo{
      border-bottom: none 0;
      .menu-item{
        .pr(10px);
        .pl(10px);
      };
    }
  }
}
</style>
