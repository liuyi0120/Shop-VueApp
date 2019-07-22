<template>
  <div id="home">
      <!-- home导航头 -->
    <section class="homeHeader">
      <img @click="toHome" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <span class="icon-search"></span>
      <span class="input" @click="toSearch">搜索商品,共~~~~~款好物</span>
      <button @click="toPersonal">登录</button>
    </section>
    <!-- 头部导航推荐静 -->
    <div>
      <section class="homeNav">
        <ul class="homeNavUl">
          <li class="navItem" >推荐</li>
          <li class="navItem" >推荐</li>
          <li class="navItem" >推荐</li>
          <li class="navItem" >推荐</li>
        </ul>
        <div class="opcityBox"></div>
        <div class="arrow" @click="handleArrow">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png"
               alt="">
        </div>
      </section>
      <!-- 点击按钮显示 -->
      <section class="all" v-show="isShow">
        <div class="allTitle">全部频道</div>
        <ul class="allUl">
          <li class="allItem" v-for="(item,index) in navListData" :key="index"
              :class="index===newIndex?'allItem active':'allItem'">{{item}}</li>
        </ul>
      </section>
      <!-- 遮罩层 -->
      <section class="wrap" v-show="isShow" @click="handleArrow"></section>

    </div>

     <!-- 轮播图 -->
    <div class="homeSwiper swiper-container">
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
    <!-- 退货 -->
    <div class="g-back">
      <span>网易自营品牌</span>
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
    </div>
    <!-- 中间十个图片 -->
    <div class="minSwiper-list">
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
    </div>
    <div class="minSwiper-list">
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
      <a href="">
        <div><img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt=""></div>
        <div class="text">新品首发</div>
      </a>
    </div>
    <!-- 广告 -->
    <div class="selection">
      <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
    </div>
    <!-- 四张图片 -->
    <div class="fourList">
      <ul>
        <li>
          <p class="big">是否是否是</p>
          <p class="small">是否是否是</p>
          <div>
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </li>
        <li>
          <p class="big">是否是否是</p>
          <p class="small">是否是否是</p>
          <div>
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </li>
        <li>
          <p class="big">是否是否是</p>
          <p class="small">是否是否是</p>
          <div>
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </li>
        <li>
          <p class="big">是否是否是</p>
          <p class="small">是否是否是</p>
          <div>
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </li>
      </ul>
    </div>
    <!-- 私人定制 -->
    <div class="private">
      <div class="text"> <h1>私人定制</h1></div>
      <div class="home-Swiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <!-- 轮播每一页 -->
            <div>
            <img src="https://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div><p>fsfsfs</p></div>
            </div>
            <div>
            <img src="https://yanxuan.nosdn.127.net/00bd304b98650d5fe73b68635771ea4d.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div><p>fsfsfs</p></div>
            </div>
            <div>
            <img src="https://yanxuan.nosdn.127.net/8a8eeefd81555eec03a673abbc24615a.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div><p>fsfsfs</p></div>
            </div>
          </div>
          <div class="swiper-slide">
            <!-- 轮播每二页 -->
            <div>
            <img src="https://yanxuan.nosdn.127.net/74d477f8ce98a22f4b5bc1ab6121e15e.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div><p>fsfsfs</p></div>
            </div>
            <div>
            <img src="https://yanxuan.nosdn.127.net/67d6c15a456c31c427c9bcbc0bfc7eda.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div><p>fsfsfs</p></div>
            </div>
            <div>
            <img src="https://yanxuan.nosdn.127.net/426b5d6ea40d94d3a4594405df3bdec5.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div><p>fsfsfs</p></div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

    </div>
    <!-- 限时购 -->
    <div class="sixListWrap">
      <split />
      <h3>
        <span class="left">限时购</span>
        <span class="right">更多 ></span>
      </h3>
      <sixList/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"
  import BScroll from 'better-scroll'
  import Split from '../../components/Split/Split.vue'
  import sixList from '../../components/sixList/sixList.vue'
  export default {
    /* 首页 */
    data () {
      return {
        isShow: false,
        isArrow: true,// true箭头向下
        newIndex: 0,
        navListData: ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']// 导航的数据
      }
    },
    methods:{
      toPersonal(){
        this.$router.push('/personal')
      },
      toHome(){
        this.$router.push('/home')
      },
      handleArrow () {
        this.isShow = !this.isShow
        this.isArrow = !this.isArrow
      },
      toSearch(){
        this.$router.push('/search')
      }
    },
    mounted () {
      var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })

      // 横向滑动的ul
      this.navScroll = new BScroll('.homeNav', {
        scrollX: true,
        click: true
      })
    },
    components:{
      Split,
      sixList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  #home
    padding-bottom 100px
  /* 头部 */
    .homeHeader
      height 88px
      display flex
      justify-content space-around
      align-items center
      background-color #fff
      img
        height 40px
      .input
        height 56px
        line-height 56px
        width 450px
        font-size 28px
        background-color #ededed
        text-align center
        border-radius 10px
        color #666
        text-indent 28px
      .icon-search
        width 28px
        height 28px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        position absolute
        left 200px
        top 30px
      button
        width 78px
        height 44px
        border 1px solid red
        border-radius 8px
        background-color #fff
        color red
        font-size 24px
  /* header下边 */
    .homeNav
      overflow hidden
      position relative
      //margin-top 88px
      .homeNavUl
        width 1450px
        font-size 28px
        color #333
        clearFix()
        li
          width 112px
          height 66px
          margin 0 19px
          line-height 66px
          float left
          text-align center
          &.active
            border-bottom 6px solid $main
            color $main
      .opcityBox
        width 60px
        height 60px
        z-index 15
        position absolute
        top 0
        right 100px
        background linear-gradient(90deg,rgba(255,255,255,0) 0,#fff 100%)
      .arrow
        width 100px
        height 60px
        text-align center
        padding-top 15px
        background-color #fff
        z-index 15
        position absolute
        top 0
        right 0
        transition all 1s
        .downArrow
          transform rotate(0deg)
          transition all 0.5s
        .upArrow
          transform rotate(180deg)
          transition all 0.5s
  /* 遮罩显示 */
    .all
      background-color #fff
      height 372px
      width 100%
      color #333
      top-border-1px(#eee)
      position absolute
      top 72px
      left 0
      z-index 10
      .allTitle
        width 100%
        height 60px
        line-height 60px
        font-size  28px
        padding-left 30px
      .allUl
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
          &.active
            color $main
            border-color $main


  /* 轮播图 */
    .homeSwiper
      img
        width 100%
  /* 退货 */
    .g-back
      display flex
      justify-content space-around
      align-items center
      font-size 28px
  /* 中间十张图 */
    .minSwiper-list
      display flex
      justify-content space-between
      a
        text-decoration none
      img
        height 128px
        width 128px
      .text
        color #333
        text-align center
  /* 广告 */
    .selection
      img
        width 100%
  /* 四张图片 */
    .fourList
      margin-top 40px
      ul
        display flex
        flex-wrap wrap
        justify-content center
        li
          width 343px
          height 260px
          padding 20px 0 0 20px
          margin 4px 0 0 4px
          background-color #f5f5f5
        .big
          font-size 32px
          color #333
          padding-left 10px
        .small
          font-size 24px
          color #7f7f7f
          margin 10px 0
          padding-left 10px
        div
          img
            float left
            width 150px
            height 150px

   /* 私人定制轮播 */
    .private
      height 470px
      width 100%
      //background-color pink
      .text
        height 100px
        width 100%
        //background-color blue
        h1
          font-size 40px
          font-weight 700
          line-height 100px
          margin-left 20px
      .swiper-wrapper
        .swiper-slide
          height 370px
          display flex
          justify-content space-around
          img
            height 216px
            width 216px
            background #f5f5f5
          p
            padding-top 10px
            text-align center
  /* 六个图 */
    .sixListWrap
      h3
        height 100px
        line-height 100px
        margin-top 20px
        .left
          font-size 32px
          margin-left 50px
        .right
          font-size 28px
          float right
          margin-right 50px
</style>
