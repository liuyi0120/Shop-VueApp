<template>
  <div id="search">
    <section class="searchHeader">
      <span class="icon-search"></span>
      <span class="input">搜索商品,共~~~~~款好物</span>
      <span class="cancel" @click="backHistory">取消</span>
    </section>
    <div class="cancel-bottom">
      <span>热门搜索</span>
      <div class="bottom-list">
        <ul class="bottomUl">
          <li>夏凉被83折起</li>
          <li>夏凉被83折起</li>
          <li>夏凉被83折起</li>
          <li>夏凉被83折起</li>
          <li>夏凉被83折起</li>
          <li>夏凉被83折起</li>
          <li>夏凉被83折起</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      backHistory(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #search
    .searchHeader
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
        width 500px
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
        left 100px
        top 30px
      .cancel
        font-size 30px
        margin-left 100px
        border-radius 10px
    .cancel-bottom
      margin-top 100px
      height 300px
      width 100%
      padding  0px 30px
      .bottom-list
        .bottomUl
          padding 24px 0 0 0
          li
            width 150px
            height 56px
            line-height 56px
            text-align center
            border 1px solid #ccc
            border-radius 4px
            float left
            font 24px
            margin 0 0 40px 30px
            background-color #fafafa
</style>
