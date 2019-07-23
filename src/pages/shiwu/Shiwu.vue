<template>
  <div id="shitu">
    <div class="header">
      <span class="left" @click="toHome"><i class="iconfont icon-icon_home"></i></span>
      <div class="center">
        <span class="center1">发现</span>
        <span class="center2">甄选家</span>
      </div>
      <div class="right">
        <span @click="toSearch"><i class="iconfont icon-iconset0157"></i></span>
        <span @click="toShop"><i class="iconfont icon-gouwuche"></i></span>
      </div>
    </div>
    <div>
      <section class="homeNav" ref="homeNav">
        <ul class="homeNavUl" >
          <li class="navItem">推荐</li>
          <li class="navItem">推荐</li>
          <li class="navItem">推荐</li>
          <li class="navItem">推荐</li>
          <li class="navItem">推荐</li>
          <li class="navItem">推荐</li>
          <li class="navItem">推荐</li>
          <li class="navItem">推荐</li>
          <li class="navItem">推荐</li>
        </ul>
      </section>
    </div>
    <div class="xuanmei">
      <div class="xuanmei-list">
        <div><img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt=""></div>
        <span>选妹</span>
      </div>
      <div class="text"> <span>夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</span>  </div>
      <div><img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt=""></div>
      <div>
        <i class="iconfont icon-chakanguo"></i>
        <span>6121人看过</span>
      </div>
    </div>
    <div>
      <div class="xinwen">
        <div class="xinwen-list">
          <div class="xiaozhou">
            <div><img src="https://yanxuan.nosdn.127.net/8720248cc1f62d279f004b8a5124f811.jpg?imageView&quality=65&thumbnail=56y56" alt=""></div>
            <span>网易：小周</span>
          </div>
          <div class="text"> <span>一次吃遍8种坚果，零食之王要这样吃才对</span>  </div>
          <div class="see">
            <i class="iconfont icon-chakanguo"></i>
            <span>4567人看过</span>
          </div>
        </div>
        <div class="img">
          <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'

  export default {
    computed:{
      ...mapState(['categoryList']),

    },
    methods:{
      toHome(){
        this.$router.push('/home')
      },
      toShop(){
        this.$router.push('/shop')
      },
      toSearch(){
        this.$router.push('/search')
      }
    },
    mounted(){
      // 横向滑动的ul
      this.navScroll = new BScroll('.homeNav', {
        scrollX: true,
        click: true
      })

      this.$store.dispatch('getcategoryList')

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shitu
    .header
      height 88px
      display flex
      justify-content space-between
      align-items center
      .center
        .center1
          font-size 45px
          color red
        .center2
          font-size 30px
          margin  0 30px
          color #333
      .left
       .iconfont
          font-size 58px
      .right
        .iconfont
          font-size 58px
          padding 10px
    .homeNav
      overflow hidden
      position relative
      .homeNavUl
        width 1450px
        font-size 28px
        color #333
        clearFix()
        border-bottom 3px solid #d9d9dd

        li
          width 112px
          height 66px
          margin 0 19px
          line-height 66px
          float left
          text-align center
    .xuanmei
      padding 0 30px
      border-top 3px solid #d9d9dd
      .xuanmei-list
        display flex
        align-items center
        img
          border-radius 40px
      .text
        font-size 40px
      img
        width 100%
        border-radius 20px
    .xinwen
      display flex
      padding 0 30px
      border-top 20px solid #d9d9dd
      .xinwen-list
        margin-top 20px
        .xiaozhou
          display flex
          align-items center
          img
            border-radius 40px
        .text
          font-size 40px
          margin-top 40px
        .see
          margin-top 100px
      .img
        margin-top 20px
        height 360px
        width 400px
        img
          height 350px
          border-radius 20px

</style>
