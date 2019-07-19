<template>
  <div id="classify">
    <!-- 头部搜索框 -->
    <section class="classifyHeader">
      <span class="icon-search"></span>
      <span class="input">搜索商品,共~~~~~款好物</span>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    /* 分类 */
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  #classify
  /* 头部搜索框 */
    .classifyHeader
      height 88px
      line-height 72px
      padding 16px 30px
      vertical-align middle
      display flex
      align-items center
      position fixed
      top 0
      left 0
      z-index 30
      background-color #fff
      border-bottom 1px solid #eee
      .input
        height 56px
        line-height 56px
        width 675px
        font-size 28px
        background-color #ededed
        margin 0 8px 0 10px
        text-align center
        border-radius 2px
        color #666
        text-indent 28px
        border-radius 10px
      .icon-search
        width 28px
        height 28px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        position absolute
        left 200px
        top 30px





</style>
