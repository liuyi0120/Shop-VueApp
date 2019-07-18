<template>
  <div id="home">
      <!-- home导航 -->
      <section class="homeHeader">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <span class="icon-search"></span>
      <span class="input">搜索商品,共......款好物</span>
      <button>登录</button>
    </section>
    <!-- 推荐 -->
    <section class="home-nav">
      <ul class="home-list">
        <li class="navItem">推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
      </ul>
    </section>
    <!-- 轮播图 -->
    <div class="firstSwiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="introduce">
      <span>网易自营品牌</span>
      <span class="center">30天无忧退货</span>
      <span>48小时快速退款</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"

  export default {
    mounted () {
      var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  #home
    padding-bottom 105px
    .homeHeader
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
      img
        height 40px
      .input
        height 56px
        line-height 56px
        width 486px
        font-size 28px
        background-color #ededed
        margin 0 8px 0 10px
        text-align center
        border-radius 2px
        color #666
        text-indent 28px
      .icon-search
        width 28px
        height 28px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        position absolute
        left 230px
        top 30px
      button
        width 78px
        height 44px
        border 1px solid $main
        color $main
        background-color #fff
        font-size 24px
      //推荐
    .home-nav
      display flex
      flex-direction row
      overflow hidden
      position relative
      margin-top 88px
      .home-list
        display flex
        flex-direction row
        font-size 28px
        color #333
      //home轮播图
    .firstSwiper
      width 100%
      height 370px
      img
        width 100%
        height 100%
</style>
