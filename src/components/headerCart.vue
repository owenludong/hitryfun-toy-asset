<template>
  <div id="header">
    <div class="menu">
      <div class="menu-button-container" v-show="isMenu&isLogin" @click="showAsideMenu"></div>
      <div class="close-button" @click="goBack" v-show="isCartPage"></div>
      <div class="go-back-button" v-show="isBack" @click="goBack"></div>
      <div class="page-name" v-show="$route.name !== 'notFound'">{{$route.name}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #header {
    color: #ffffff;
    width: 100%;
    background-color: #8dd9bf;
    padding-left: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: fixed;
    top: 0;
    z-index: 100;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .menu {
      height: 44px;
      line-height: 44px;
      flex: 1;
      div {
        display: inline-block
      }
      .menu-button-container {
        background-repeat: no-repeat;
        background-image: url(../assets/images/menu.png);
        background-size: 32px;
        width: 44px;
        height: 44px;
        background-position: 6px center;
      }
      .close-button {
        background-repeat: no-repeat;
        background-image: url(../assets/images/header_search_cancel_icon.png);
        background-size: 32px;
        width: 44px;
        height: 44px;
        background-position: 6px center;
      }
      .go-back-button {
        background-repeat: no-repeat;
        background-image: url(../assets/images/header_go_back_icon.png);
        background-size: 32px;
        width: 44px;
        height: 44px;
        background-position: 6px center;
      }
      .page-name {
        vertical-align: top;
        max-width: calc(100% - 50px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
      }
    }
  }
</style>

<script>
import Bus from '../_common/js/bus'
export default {

  name: 'header',

  data () {
    return {
      isCartPage: false, // 是否是cart页面 // xx按钮
      isMenu: '', // 菜单按钮
      isBack: '' // 返回按钮
    }
  },
  methods: {
    showAsideMenu () { // 展示侧边按钮
      Bus.$emit('show-menu')
    },
    goBack () {
      window.router = this.$router
      this.$router.back(-1)
    },
    changeMenuBtn () {
      if (this.$route.name === 'Cart') {
        this.isCartPage = true
      } else {
        this.isCartPage = false
        if (this.$route.name === 'Settings') {
          this.isMenu = true
          this.isBack = false
        } else {
          if (this.$route.name !=='ConfirmPay') {
            this.isBack = true
            this.isMenu = false
          }
        }
      }
    }
  },
  created () {
    this.changeMenuBtn()
  },
  computed: {
    isLogin () {
      return this.$store.getters.getLoginStatus
    }
  },
  watch: {
    '$route' (to, from) {
      this.changeMenuBtn()
    }
  }
}
</script>
