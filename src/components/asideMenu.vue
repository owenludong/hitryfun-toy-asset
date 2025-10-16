<template>
  <div id="aside" :class="{ 'show-menu': isMenuShow}">
    <div id="asideMenu">
      <div id="personalInfo">
        <div class="mobile-profile-header main-color-background">
          <div class="user-image">
            <img :src=personImage />
          </div>
          <div class="user-detail">
            <div class="user-name">
              {{loginName}}
            </div>
            <!-- <div class="view-profile">View Profile</div> -->
          </div>
        </div>
         <!-- <div class="arrow-right"></div>-->
      </div>
      <!-- <div class="mobile-profile-header main-color-background">
        <div class="user-image">
          <img src="https://contestimg.wish.com/api/image/fetch?profile_image_name=NTk4NDNlNjEwMGE5OTI2YzFlOWM0ZDI3_1512462355700.jpg&w=100&h=100" />
        </div>
        <div class="user-detail">
          <div class="user-name">
            xiujun zheng
          </div>
        </div>
      </div> -->
      <div class="mobile-profile-menu">
        <ul>
          <a class="menu-item ui-link" href="javascript:void(0);" @click="goTo('/')">
            <li class="profile-menu-row" :class="{'active':activeMenu==='Browse'}">
              <div class="row-icon home-icon">
              </div>
              <div class="row-description">
                Home
              </div>
            </li>
          </a>
          <!--
          <a class="menu-item ui-link" href="javascript:void(0);" @click="goTo('/search')">
            <li class="profile-menu-row" :class="{'active':activeMenu==='search'}">
              <div class="row-icon search-icon">
              </div>
              <div class="row-description">
                Search
              </div>
            </li>
          </a>-->
          <a class="menu-item ui-link" href="javascript:void(0);" @click="goTo('/cart')">
            <li class="profile-menu-row" :class="{'active':activeMenu==='cart'}">
              <div class="row-icon shopping-cart-icon">
              </div>
              <div class="row-description">
                Shopping Cart
              </div>
            </li>
          </a>
          <a class="menu-item ui-link" href="javascript:void(0);" @click="goTo('/transaction')">
            <li class="profile-menu-row" :class="{'active':activeMenu==='transaction'}">
              <div class="row-icon order-history-icon">
              </div>
              <div class="row-description">
                Order History
              </div>
              <!-- <div class="row-notification hide"></div> -->
            </li>
          </a>
          <a class="menu-item ui-link" href="javascript:void(0);" @click="goTo('/contact-us')">
            <li class="profile-menu-row" :class="{'active':activeMenu==='ContactUs'}">
              <div class="row-icon customer-icon">
              </div>
              <div class="row-description">
                Customer Support
              </div>
            </li>
          </a>
          <li class="mobile-profile-menu-section-devider">
          </li>
          <!-- <a class="menu-item ui-link" data-tid="1933" href="/m/help">
            <li class="profile-menu-row">
              <div class="row-icon faq-icon">
              </div>
              <div class="row-description">
                FAQ
              </div>
            </li>
          </a> -->
          <!-- Settings Button -->
          <a class="menu-item ui-link" href="javascript:void(0);" @click="goTo('/settings')">
            <div class="profile-menu-row" :class="{'active':activeMenu==='Settings'}">
              <div class="row-icon settings-icon">
              </div>
              <div class="row-description">
                Settings
              </div>
              <!-- 有消息的状态 -->
              <!-- <div class="row-notification hide"></div> -->
            </div>
          </a>

          <!-- <a class="menu-item ui-link" data-tid="1902" href="market://details?id=com.contextlogic.wish">
            <li class="profile-menu-row">
              <div class="row-description">
                Download App
              </div>
            </li>
          </a>
          <a class="menu-item ui-link" data-tid="20758" href="/m/return_policy">
            <li class="profile-menu-row">
              <div class="row-description">
                Return Policy
              </div>
            </li>
          </a> -->
        </ul>
      </div>
    </div>
    <div class="menu-mask" @click="hideMenu"></div>
  </div>
</template>
<style lang="scss" scoped>
  .profile-menu-row.active {
    background: rgb(243, 248, 248);
  }
  #asideMenu {
    background: #Fff;
  }
  .mobile-profile-header {
      font-family: 'Roboto';
      // height: 92px;
      width: calc(100% - 32px);
      color: #fff;
      // padding: 16px;
      position: relative;
  }
  .mobile-profile-header .user-image {
      display: inline-block;
      float: left;
      margin: auto;
  }
  .mobile-profile-header .user-detail {
      // position: absolute;
      // top: 25%;
      // margin: 15px 16px;
      display: inline-block;
      margin-left: 10px;
      margin-top: 8px;
  }
  .mobile-profile-header .view-profile {
    font-size: 13px;
    margin-top: 8px;
  }
  .mobile-profile-header .user-image img {
      width: 60px;
      height: 60px;
      border-radius: 60px;
  }
  // .mobile-profile-header .user-detail .user-name {
  //     font-weight: bold;
  //     font-size: 16px;
  // }
  #aside {
    // position:absolute;
    // height: 100%;
    // width: 100%;
    // top: 0;
    // right: 100%;
    // transition: all 1s;
    line-height: 1.3;
  }
  #asideMenu {
    position: fixed;
    top: 0;
    left: 0;
    width: 78%;
    z-index: 1000;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all .5s;
    transform: translateX(-100%);
    #personalInfo {
      height: 140px;
      // height: 20%;
      background: linear-gradient(to bottom right, #8dd9bf , #8dd9bf);
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      align-items: center;
      color: #fff;
      .avatar {
        height: 90px;
        width: 90px;
      }
      .avatar img{
        border-radius: 45px;
      }
      .user {
        margin-left: 22px;
      }
      .user-name {
        // font-weight: bold;
        font-size: 18px;
      }
      .profile {
        font-size: 14px;
        margin-top: 12px;
      }
      .arrow-right {
        background: url(../assets/images/arrow_right.png) no-repeat center;
        background-size: 20px 20px;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
      }
    }
    .menu-list {
      background-color: #fff;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: #000;
    z-index: 900;
    visibility: hidden;
    transition: opacity 2s;
  }
  .ui-page-theme-a a:visited, .ui-bar-a a:visited, .ui-body-a a:visited, .ui-group-theme-a a:visited {
      color: #38c;
  }
  .ui-page-theme-a a, .ui-bar-a a, .ui-body-a a, .ui-group-theme-a a {
      color: #38c;
      font-weight: bold;
  }
  a:link, a:visited, a:hover, a:active {
      text-decoration: none;
  }
  .profile-menu-row {
      padding: 16px;
      font-family: Roboto;
      font-size: 14px;
      display: block;
      position: relative;
  }
  .profile-menu-row .row-icon {
      color: #3c4646;
      display: inline-block !important;
      margin-right: 16px !important;
      margin-bottom: -4px;
      width: 19px;
      height: 19px;
      background-size: 19px 19px;
  }
  .home-icon {
      background-image: url(../assets/images/home.png?v=13);
  }
  .search-icon {
      background-image: url(../assets/images/search2.png);
  }
  .shopping-cart-icon {
      background-image: url(../assets/images/shopping_cart.png?v=13);
  }
  .order-history-icon {
      background-image: url(../assets/images/order_history.png?v=13);
  }
  .faq-icon {
      background-image: url(../assets/images/faq.png?v=13);
  }
  .settings-icon {
      background-image: url(../assets/images/settings-icon.png?v=13);
  }
  .customer-icon {
      background-image: url(../assets/images/customer.png);
  }
  .profile-menu-row .row-notification {
      background-color: #EE6C6B;
      border-radius: 8px;
      width: 8px;
      height: 8px;
      display: inline-block;
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
  }
  .profile-menu-row .row-description {
      font-weight: normal;
      color: #3c4646;
      display: inline-block;
  }
  .mobile-profile-menu {
    background: #fff;
  }
  .mobile-profile-menu .mobile-profile-menu-section-devider {
      height: 5px;
      background-color: #f3f8f8;
  }
  .show-menu #asideMenu {
    transform: translateX(0);
    height: 100%;
  }
  .show-menu .menu-mask {
    visibility: visible;
    opacity: 0.5;
  }
</style>
<script>
import Bus from '../_common/js/bus'
import CookieApi from '../_common/js/cookies.js'
export default {

  name: 'asideMenu',

  data () {
    return {
      activeMenu: '', // 当前激活的菜单
      isMenuShow: false, // 是否显示
      loginName: '',
      personImage: ''
    }
  },
  created () {
    let current = this
    Bus.$on('show-menu', () => {
      this.isMenuShow = true
      this.person()
    })
    this.getActiveMenu(this.$route.name)
  },
  methods: {
    hideMenu () {
      this.isMenuShow = false
    },
    goTo (path) {
      this.hideMenu()
      this.$router.push({path: path})
    },
    getActiveMenu (name) {
      this.activeMenu = name
    },
    person () {
      this.$axios.post(this.ApiList.personInfo)
        .then((response) => {
          this.loginName = response.data.userName
          let gender = response.data.gender
          if(gender){
             if ('M' == gender) {
                this.personImage = 'https://www.hitryfun.com/logo/male.jpeg'
             } else if ('F' == gender) {
                this.personImage = 'https://www.hitryfun.com/logo/female.jpeg'
             }
          }
        })
        .catch((err) => {
          console.log(error)
        })
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      this.activeMenu = to.name
    }
  }
}
</script>


