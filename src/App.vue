<template>
  <div id="app" class="app-wrapper">
    <keep-alive include="index">   <!-- ✅ 只缓存首页 -->
      <router-view class="page-container" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view class="page-container" v-if="!$route.meta.keepAlive" />
    <aside-menu></aside-menu>
    <aside-category></aside-category>
    <loading-circle :isShowMask="showLoadingCircle"></loading-circle>
  </div>
</template>

<script>
import AsideMenu from './components/asideMenu'
import AsideCategory from './components/asideCategory'
import CookieApi from './_common/js/cookies.js'
import LoadingCircle from './components/base/loadingCircle'
import Bus from './_common/js/bus'
import SiteFooter from '@/components/SiteFooter.vue'
// import LoginModal from './components/signIn'
// import MyHeader from './components/header'
export default {
  name: 'app',
  components: { AsideMenu, AsideCategory, LoadingCircle, SiteFooter},
  data () {
    return {
      showLoadingCircle: false
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      // document.body.docu
    }
  },
  created () {
    let user = CookieApi.getCookie('user')
    let email = CookieApi.getCookie('email')
    if (user) {
      this.$store.commit('changeLoginStatus', {
        isLogin: true,
        account: {
          userName: user,
          email: email
        }
      })
    } else {
      this.$store.commit('changeLoginStatus', {
        isLogin: false
      })
    }
    Bus.$on('show-circle-loading', (type) => {
      if (type === 'show') {
        this.showLoadingCircle = true
      } else {
        this.showLoadingCircle = false
      }
    })
  }
}
</script>

<style >


</style>
