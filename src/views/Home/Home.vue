<template>
  <div class="home">
    <h1>{{msg}}</h1>
    <el-button @click="_apiTest">按钮</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { caseSummaryList } from '@/api/test'
export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'msg'
    ])
  },
  mounted () {
    this.setIsLoading(false)
  },
  methods: {
    _apiTest () {
      this.setIsLoading(true)
      caseSummaryList({
        caseId: 'B5283672059AC5C6CB97622A056A57A4'
      }).then((res) => {
        console.log(res)
        this.setIsLoading(false)
      }).catch((err) => {
        console.error(err)
        this.setIsLoading(false)
      })
    },
    ...mapActions([
      'setIsLoading'
    ])
  }
}
</script>
<style lang="less" scoped>
@import './../../common/less/base.less';
</style>
