<template>
  <div id="classify">
    <!-- 头部搜索框 -->
    <section class="classifyHeader"  @click="toSearch">
      <span class="icon-search"></span>
      <span class="input">搜索商品,共~~~~~款好物</span>
    </section>

    <div class="classify-list">
        <!-- 左测 -->
      <div class="classify-left" v-if="category.categoryL1List">
        <ul>
          <li v-for="(category,index) in category.categoryL1List" :key="category.id"
          @click="getIndex(index)" :class="thisIndex===index?'active':''">{{category.name}}</li>
        </ul>
      </div>
      <!-- 右侧 -->

      <div class="classify-right">
        <div v-if="category.categoryL1List">
          <img :src="category.categoryL1List[thisIndex].wapBannerUrl" alt="">
          <ul class="qwer">
            <li v-for="(item) in category.categoryL1List[thisIndex].subCateList" :key="item.id">
              <img :src="item.wapBannerUrl" alt="">
              <span class="now">{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState}from 'vuex'
  export default {
    
    /* 分类 */
    data () {
      return {
        thisIndex:0
      }
     },
    mounted () {
      //左侧导航滑动
      this.$store.dispatch('getcategoryList', () => {
        this.$nextTick(() => {
          new BScroll('.classify-left',{
            click: true
          })
          new BScroll('.classify-right')
        })
      })
    },
    methods:{
      getIndex(index){
        this.thisIndex = index
      },
      toSearch(){
        this.$router.push('/search')
      }
    },
    mounted(){
      this.$store.dispatch('getcategory')
      this.$store.dispatch('getcategoryList')
    },
    computed:{
      ...mapState(['category']),
      //...mapState(['categoryList'])
    }
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
            &:first-child
              margin-top 0
          .active
            border-left 6px solid #b4282d
            color #b4282d
            /* 右侧 */
      .classify-right
        width 588px
        height 1140px
        padding 0px 30px 100px 30px
        img
          width 528px
          height 192px
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
