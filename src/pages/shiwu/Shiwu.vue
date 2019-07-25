<template>
  <div id="shitu">
    <div class="header">
      <span class="left" @click="toHome">
        <i class="iconfont icon-icon_home"></i>
      </span>
      <div class="center">
        <span class="center1">发现</span>
        <span class="center2">甄选家</span>
      </div>
      <div class="right">
        <span @click="toSearch">
          <i class="iconfont icon-iconset0157"></i>
        </span>
        <span @click="toShop">
          <i class="iconfont icon-gouwuche"></i>
        </span>
      </div>
    </div>
    <div>
      <section class="homeNav" ref="homeNav">
        <ul class="homeNavUl">
          <li class="navItem" v-for="thingNavs in thingsNav" :key="thingNavs.tabId">{{thingNavs.tabName}}</li>


        </ul>
      </section>
    </div>
    <section class="center">
      <div class="center-list" v-for="(things,index) in thingsData" :key="index">
        <ul class="center-Ul" v-for="(thing,index) in things.topics" :key="index">
          <!-- <li class="ul-item1"><img src="https://yanxuan.nosdn.127.net/bdb121b22f382f1d2a116ace09bcfaf4.jpg?imageView&quality=65&thumbnail=690y376" alt=""></li> -->
          <li class="ul-item2" v-if="thing.style === 1">
            <div class="item2-header">
              <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
              <span>{{thing.nickname}}</span>
            </div>
            <div class="item2-text">{{thing.title}}</div>
            <div class="item2-img"><img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt=""></div>
            <div class="item2-footer">
              <i class="iconfont icon-chakanguo"></i>
              <span>{{thing.readCount}}人看过</span>
            </div>
          </li>
          <li class="ul-item3" v-if="thing.style === 2">
            <div class="item3-left">
              <div class="item3-header">
                <img src="https://yanxuan.nosdn.127.net/1ecf5d57d84b7ae03905404131dc2c10.jpg?imageView&quality=65&thumbnail=56y56" alt="">
                <span>{{thing.nickname}}</span>
              </div>
              <div class="item3-text">{{thing.title}}</div>
              <div>{{thing.subTitle}}</div>
              <div class="item3-footer">
                <i class="iconfont icon-chakanguo"></i>
                <span>{{thing.readCount}}人看过</span>
              </div>
            </div>
            <div class="item3-right"><img src="https://yanxuan.nosdn.127.net/119ea021198fbc19e7d0cb76c718e324.jpg?imageView&quality=65&thumbnail=272y272" alt=""></div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { mapState } from "vuex";

export default {
  computed:{
    ...mapState(['thingsData']),
    ...mapState(['thingsNav'])

  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toShop() {
      this.$router.push("/shop");
    },
    toSearch() {
      this.$router.push("/search");
    }
  },
  mounted() {
    this.$store.dispatch('reqThingsData')
    this.$store.dispatch('getThingsNav')

    // 横向滑动的ul
    this.navScroll = new BScroll(".homeNav", {
      scrollX: true,
      click: true
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#shitu
  .header {
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .center {
      .center1 {
        font-size: 45px;
        color: red;
      }

      .center2 {
        font-size: 30px;
        margin: 0 30px;
        color: #333;
      }
    }

    .left {
      .iconfont {
        font-size: 58px;
      }
    }

    .right {
      .iconfont {
        font-size: 58px;
        padding: 10px;
      }
    }
  }

  .homeNav {
    overflow: hidden;
    position: relative;

    .homeNavUl {
      width: 1450px;
      font-size: 28px;
      color: #333;
      clearFix();
      border-bottom: 3px solid #d9d9dd;

      li {
        width: 112px;
        height: 66px;
        margin: 0 19px;
        line-height: 66px;
        float: left;
        text-align: center;
      }
    }
  }
  .center
    padding 20px 20px
    .center-list
      .center-Ul
        .ul-item1
          img
            border-radius 10px
        .ul-item2
          margin 20px 0
          .item2-header
            img
              height 50px
              width 50px
              border-radius 25px
          .item2-text
            margin-top 10px
            font-size 34px
          .item2-img
            margin-top 10px
            img
              border-radius 10px
          .item2-footer
            margin-top 10px
        .ul-item3
          margin 20px 0
          display flex
          .item3-left
            .item3-header
              img
                height 50px
                width 50px
                border-radius 25px
            .item3-text
              margin-top 10px
              font-size 34px
            .item3-footer
              margin-top 60px
          .item3-right
            img
              height 380px
              width 450px

</style>
