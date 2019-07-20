<template>
  <div id="classify">
    <!-- 头部搜索框 -->
    <section class="classifyHeader">
      <span class="icon-search"></span>
      <span class="input">搜索商品,共~~~~~款好物</span>
    </section>

    <div class="classify-list" >
        <!-- 左测 -->
      <div class="classify-left">
        <ul>
          <li>夏凉专区</li>
          <li>夏凉专区</li>
          <li>夏凉专区</li>
          <li>夏凉专区</li>
          <li>夏凉专区</li>
          <li>夏凉专区</li>
          <li>夏凉专区</li>
          <li>夏凉专区</li>
        </ul>
      </div>
      <!-- 右侧 -->
      <div class="classify-right">
        <div>
          <img src="https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196" alt="">
          <ul>
            <li>
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
              <div>
                <span class="now">员工精选好货</span>
              </div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
              <div>
                <span class="now">员工精选好货</span>
              </div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
              <div>
                <span class="now">员工精选好货</span>
              </div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
              <div>
                <span class="now">员工精选好货</span>
              </div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
              <div>
                <span class="now">员工精选好货</span>
              </div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
              <div>
                <span class="now">员工精选好货</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    /* 分类 */
    mounted (){

    },
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
  /* 分类列表 */
    .classify-list
      display flex
      padding-top 88px
      /* 左侧 */
      .classify-left
        height 1140px
        ul
          width 162px
          li
            height 50px
            color #7e8c8d
            text-align center
            font-size 30px
            margin-top 40px
            /* 右侧 */
      .classify-right
        width 588px
        height 1140px
        padding 0px 30px 100px 30px

        ul
          display flex
          flex-wrap wrap
          margin-top 20px
          li
            width 144px
            height 216px
            display flex
            flex-direction column
            img
              height 144px
              width 144px
            span
              font-size 28px
              text-align center
</style>
