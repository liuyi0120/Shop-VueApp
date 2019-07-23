<template>
  <div id="app">
    <router-view/>
    <FooterNav v-show="$route.meta.isShow"/>
  </div>

</template>

<script type="text/ecmascript-6">
import FooterNav from './components/FooterNav/FooterNav'
  export default {
    components:{
      FooterNav
    },
    mounted(){
      this.$store.dispatch('gethomeData')
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
