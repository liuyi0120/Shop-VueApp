<template>
  <div id="footer-tab" >
    <div class="tab-item" :class="{on: $route.path==='/home'}" @click="goTo('/home')">
      <span><i class="iconfont icon-icon_home"></i></span>
      <span class="text">首页</span>
    </div>
    <div class="tab-item" :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
      <span><i class="iconfont icon-iconfl"></i></span>
      <span>分类</span>
    </div>
    <div class="tab-item" :class="{on: $route.path==='/shiwu'}" @click="goTo('/shiwu')">
      <span><i class="iconfont icon-quanchangniaokantu"></i></span>
      <span>识物</span>
    </div>
    <div class="tab-item" :class="{on: $route.path==='/shop'}" @click="goTo('/shop')">
      <span><i class="iconfont icon-gouwuche"></i></span>
      <span>购物车</span>
    </div>
    <div class="tab-item" :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
      <span><i class="iconfont icon-user"></i></span>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #footer-tab
    display flex
    width 100%
    height 100px
    box-sizing border-box
    padding 12px
    background-color #fff
    position fixed
    left 0
    bottom 0
    align-items center
    z-index 100
    .tab-item
      flex 1
      display flex
      flex-direction column
      align-items center
      &.on
        color red
      .iconfont
        font-size 40px
      .text
        font-size 30px
</style>
