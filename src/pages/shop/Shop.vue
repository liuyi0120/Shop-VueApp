<template>
    <div id="shop">
      <header class="header">
        <h3>购物车</h3>
        <span>领券</span>
      </header>
      <div class="header-bottom">
        <ul class="bottom-list">
          <li>30天无忧</li>
          <li>30天无忧</li>
          <li>30天无忧</li>
        </ul>
      </div>
      <div class="centent">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
        <span>去添加点什么</span>
        <button class="btn">登录</button>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shop
    height 100%
    width  100%
    .header
      height 88px
      width 670px
      line-height 88px
      display flex
      justify-content space-between
      padding 0 40px
      font-size 30px
      background #fff
      h3
        font-size 40px
        line-height 88px
      span
        margin-right 0px
        color #b4282b
    .header-bottom
      height 72px
      padding 0 35px
      background #eee
      .bottom-list
        width 100%
        height 100%
        display flex
        justify-content space-between
        align-items center
        li
          height 36px
          line-height 36px
          font-size 24px
    .centent
      display flex
      flex-direction column
      align-items center
      margin-top 380px
      img
        height 248px
        width 248px
      .btn
        height 92px
        width 480px
        background #f40
        font-size 50px
        color white
</style>
