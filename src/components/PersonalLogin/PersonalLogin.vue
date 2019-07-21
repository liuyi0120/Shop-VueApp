<template>
  <div id="personal">
   <!--  <div class="header">
      <span class="left" @click="toHome"><i class="iconfont icon-icon_home"></i></span>
      <div>
        <div class="center"><img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt=""></div>
      </div>
      <div class="right">
        <span><i class="iconfont icon-iconset0157"></i></span>
        <span @click="toShop"><i class="iconfont icon-gouwuche"></i></span>
      </div>
    </div> -->
    <div class="img">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="login">
      <div class="phone">
        <span><i class="iconfont icon-44"></i></span>
        <button class="phone-btn" @click="phoneLogin">手机登录</button>
      </div>
      <div class="mail">
        <span><i class="iconfont icon-qianjinxiayige"></i></span>
        <button class="mail-btn" @click="emailLogin">邮箱登录</button>
      </div>
      <div class="loginPhone">
        <span>手机号快速注册</span>
        <i class="iconfont icon-qianjinxiayige"></i>
      </div>

    </div>
    <footer>
      <div>
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
        <span class="split">|</span>
      </div>
      <div>
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
        <span class="split">|</span>
      </div>
      <div>
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import PhoneLigin from '../../components/PhoneLigin/PhoneLigin'
  import MailLogin from '../../components/MailLogin/MailLogin'

  export default {
    methods:{
      /*去主页 */
      toHome(){
        this.$router.push('/home')
      },
      toShop(){
        this.$router.push('/shop')
      },
      phoneLogin(){
        this.$store.dispatch('phoneLoginaction')
      },
       emailLogin(){
        this.$store.dispatch('emailLoginaction')
      }
    },
    components:{
      PhoneLigin,
      MailLogin
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personal
    .header
      height 88px
      display flex
      justify-content space-between
      align-items center
      .centent
        img
          font-size 58px
      .left
       .iconfont
          font-size 58px
      .right
        .iconfont
          font-size 58px
          padding 10px
    .img
      height 410px
      line-height 410px
      text-align center
      padding-top 50px
      padding-bottom 100px
      border-top 3px solid #d9d9dd
      img
        width 254px
        height  75px
    .login
      text-align center
      //padding 100px 0
      margin-bottom 400px
      .phone
        .iconfont
          position absolute
          margin-left 200px
          margin-top 28px
          font-size 40px
          color white
        .phone-btn
          height 87px
          width 635px
          background red
          font-size 28px
          color white
          border-radius 10px
      .mail
        .iconfont
          position absolute
          margin-left 200px
          margin-top 66px
          font-size 40px
          color white
        .mail-btn
          margin-top 40px
          height 87px
          width 635px
          background red
          font-size 28px
          color white
          border-radius 10px
      .loginPhone
        margin-top 30px
        width 100%
        font-size 34px
        .iconfont
          font-size 34px
    footer
      display flex
      justify-content center
      margin-top 375px
      padding-bottom 85px
      div
        i
          font-size 36px
          color #7f7f7f
        span
          font-size 30px
          color #7f7f7f
          margin-right 30px
        .split
          font-weight bold
          font-size 30px
</style>
