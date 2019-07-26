<template>
  <div id="searchWrap" v-if="searchData.defaultKeyword">
    <section class="searchHeader">
      <input @input="kong" class="input" type="text" :placeholder="searchData.defaultKeyword.keyword"
             v-model="searchContent" @keyup="search">
      <span class="icon-search"></span>
      <div class="delete" @click="deleteSearchContent" v-show="searchContent">x</div>
      <span class="cancel" @click="backHistory">取消</span>
    </section>
    <div class="hot">热门搜索</div>
    <section class="list" v-show="!searchContent">
      <ul>
        <li v-for="(hotKeyword) in searchData.hotKeywordVOList" :key="hotKeyword.materialId">{{hotKeyword.keyword}}</li>
      </ul>
    </section>
    <section class="searchList" v-if="searchContent">
      <ul>
        <li v-for="(item,index) in searchData0">{{item}}</li>
      </ul>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import {reqThingsSearch} from '../../api'

  export default {
    data () {
      return {
        searchContent: '',
        searchData0: []
      }
    },
    
    computed:{
      ...mapState(['searchData'])


    },

    mounted(){
      this.$store.dispatch('getSearchInitialData')
    },

    methods: {
       /* 返回上一页 */
      backHistory(){
        this.$router.go(-1)
      },
      kong () {
        this.searchData0 = []
      },
      async search (e) {
        const result = await reqThingsSearch(this.searchContent)
          if (result.code*1 === 200) {
            this.searchData0 = result.data
          }
      },
      deleteSearchContent () {
        this.searchContent = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchWrap
    .searchHeader
      display flex
      margin 20px 0 0 30px
      .input
        width 612px
        height 56px
        padding-left 60px
        line-height 56px
        background-color #f4f4f4
        font-size 28px
        color #666
        position relative
        margin-right 20px
        outline none
      .icon-search
        width 60px
        height 56px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        background-position 20px 15px
        position absolute
        left 34px
        top 18px
      .cancel
        line-height 56px
        font-size 28px
      .delete
        width 30px
        height 30px
        line-height 30px
        background-color #ccc
        position absolute
        right 134px
        top 30px
        border-radius 50%
        text-align center
        color #fff
    .hot
      font-size 28px
      padding 30px 0 0 30px
      color #999
    .list
      ul
        color #333
        font-size 28px
        display flex
        flex-wrap wrap
        margin 30px 0 0 30px
        li
          padding 8px 15px 8px 15px
          margin 0 60px 32px 0
          border 1px solid #999
    .searchList
      ul
        padding-left 30px
        li
          font-size 28px
          color #333
          border-bottom 1px solid #d9d9d9
          height 90px
          line-height 90px
          width 720px
</style>
