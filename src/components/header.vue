<template>
<div id="parentDiv">
  <div id="header">
    <div class="menu">
      <div class="menu-button-container" v-show="isMenu&isLogin" @click="showAsideMenu"></div>
      <div class="go-back-button" v-show="!isMenu" @click="goBack"></div>

      <div class="page-name"  v-if="titleName?titleName:$route.name=='Browse'">
         <img id="logo" src="https://www.hitryfun.com/logo/hitryfun-logo.png" v-show="showLogo">
      </div>

      <div class="page-name"  v-else>
         {{titleName?titleName:$route.name}}
      </div>

    </div>
    <ul class="right-btn">
      <li class="cart-button-container inline-block" :class="{'bounce' : isCartZoom }" @click="goCart" v-show="isLogin">
        <span class="cart-quantity" v-show="cartCount !== 0">{{cartCount}}</span>
      </li>
      <li class="sign-button-container inline-block" @click="signIn" v-show="!isLogin"></li>
      <!--
      <li class="category-button-container inline-block" @click="showCategoryMenu" v-show="isCategoryMenu"></li>
      <li class="search-button-container inline-block" @click="search" v-show="isSearchMenu"><a class="search-button ui-link"></a></li>
      -->
    </ul>
  </div>
</div>
</template>

<style lang="scss" scoped>

  .bounce {
    animation: pulsate 1500ms 1 alternate ease-in-out;
  }
  @keyframes pulsate {
      0% {
          transform: scale(1)
      }

      15% {
          transform: scale(1.6)
      }

      30% {
          transform: scale(1)
      }

      50% {
          transform: scale(1.4)
      }

      68% {
          transform: scale(1)
      }

      83% {
          transform: scale(1.2)
      }

      100% {
          transform: scale(1)
      }
  }
  #logo {
     margin-top: 6px;
     padding-right: 8px;
     display: inline-block;
     height: 30px;
  }
  #header {
    color: #ffffff;
    width: 100%;
    background-color: #8dd9bf;
    padding-left: 16px;
    position: fixed;
    top: 0;
    z-index: 100;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .wm-header {
      margin-right: 10px;
    }
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
    .right-btn {
      // position: absolute;
      // top: 10px;
      // right: 16px;
      // width: 200px;
      text-align: right;
      height: 44px;
      .cart-button-container {
        background: url(../assets/images/header-cart-icon.png) no-repeat;
        width: 44px;
        height: 44px;
        background-size: 32px;
        background-position: 6px center;
        position: relative;
        // right: 124px;
        // top: 10px;
        z-index: 1;
      }
      .cart-quantity  {
        padding: 3px;
        font-size: 9px;
        position: absolute;
        right: 4px;
        top: 4px;
        color: #FFF;
        background: rgb(236, 97, 96);
        border-radius: 9px;
        // width: 18px;
        // height: 18px;
        text-align: center;
      }
      .search-button-container {
        // position: absolute;
        // right: 16px;
        // top: 10px;
        z-index: 1;
        .search-button {
            display: block;
            display: inline-block;
            overflow: hidden;
            background-repeat: no-repeat;
            background-image: url(../assets/images/header_search_icon.png);
            width: 44px;
            height: 44px;
            background-size: 32px;
            background-position: 6px center;
        }
      }
      .category-button-container {
        // position: absolute;
        // right: 70px;
        // top: 10px;
        z-index: 1;
        width: 44px;
        height: 44px;
        background-repeat: no-repeat;
        background-image: url(../assets/images/category.png);
        background-size: 32px;
        background-position: 6px center;
      }
      .sign-button-container {
        z-index: 1;
        width: 44px;
        height: 44px;
        background-repeat: no-repeat;
        background-image: url(../assets/images/profile.png);
        background-size: 32px;
        background-position: 6px center;
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
      isMenu: '', // 是否显示左菜单按钮  首页 历史订单 订单详情 设置 帮助我们
      menuItems: ['Browse', 'transaction', 'transactionDetail', 'Settings', 'ContactUs'], //
      isPageName: '', // 是否显示页面名字  首页、详情页、搜索结果页 、设置页面
      PageItems: ['Browse', 'Details', 'searchResult', 'Settings'], //
      isCategoryMenu: '', // 是否显示类目菜单按钮 首页
      categoryItems: ['Browse'], //
      isSearchMenu: '', // 是否显示搜索菜单按钮 首页、详情页 、搜索结果页
      searchItems: ['Browse', 'Details', 'searchResult'], //
      titleName: '', // 页面对应的描述
      isCartZoom: false, // 购买商品成功后 购物车放大显示
      cartCount: null, // 购物车产品数量
      showLogo: 'y'
    }
  },
  methods: {
    signIn () {
      this.$router.push({path: '/login'})
    },
    fetch () { // 获取购物车
      this.$axios(this.ApiList.cart)
        .then((response) => {
          let cartInfo = response.data.carts
          let total = 0
          for (var i = 0; i < cartInfo.cartItems.length; i++) {
            total += cartInfo.cartItems[i].quantity
          }
          this.cartCount = total
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goCart () {
      this.$router.push({path: '/cart'})
    },
    showAsideMenu () { // 展示侧边按钮
      Bus.$emit('show-menu')
    },
    showCategoryMenu () { // 展示类目按钮
      Bus.$emit('show-category')
    },
    changeTitleName () {
      switch (this.$route.name) {
        case 'searchResult':
          this.titleName = this.$route.params.text
          break
      }
      if (this.menuItems.indexOf(this.$route.name) > -1) {
        this.isMenu = true
      } else {
        this.isMenu = false
      }

      if (this.categoryItems.indexOf(this.$route.name) > -1) {
        this.isCategoryMenu = true
      } else {
        this.isCategoryMenu = false
      }

      if (this.PageItems.indexOf(this.$route.name) > -1) {
        this.isPageName = true
      } else {
        this.isPageName = false
      }

      if (this.searchItems.indexOf(this.$route.name) > -1) {
        this.isSearchMenu = true
      } else {
        this.isSearchMenu = false
      }
    },
    goBack () {
      if (window.history.length <= 1) {
        this.$router.push({path:'/'})
        return false
      } else {
        this.$router.back(-1)
      }
      //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
      //如果上面都执行了 页面都跳走了，这个也就不用管了
      setTimeout(() => {
        this.$router.push({path:'/'})
      },500)

    },
    search () {
      this.$router.push({path: '/search'})
    }
  },
  created () {
    console.log(this.$route)
    this.changeTitleName()
    this.fetch()
    Bus.$on('cart-refresh', () => {
      this.fetch()
    })
    Bus.$on('cart-zoom', () => {
      console.log('ssf')
      this.isCartZoom = true
      setTimeout(() => {
        this.isCartZoom = false
      }, 2000)
    })
  },
  computed: {
    isLogin () {
      return this.$store.getters.getLoginStatus
    }
  }
}
</script>
