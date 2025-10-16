<template>
  <div>
    <my-header></my-header>
    <div id="shippingPage">
      <div class="mobile-cart-shipping-page ui-page-theme-a">
        <div class="mobile-page-content ui-content" data-role="content" role="main">
          <div class="mobile-page-state-content default-hide" style="display: block;">
            <div class="mobile-settings-page">
              <ul>
                <!-- <a class="ui-link" href="/m/settings/notification">
                  <li class="settings-tab">
                    Notifications
                  </li>
                </a>
                <a class="ui-link" href="/m/settings/phone">
                  <li class="settings-tab">
                    Phone Settings
                  </li>
                </a>
                <a class="ui-link" href="/m/settings/profile">
                  <li class="settings-tab">
                    Update Profile
                  </li>
                </a> -->
                <router-link class="ui-link" to="/settings/change-email">
                  <li class="settings-tab">
                    Change Email Address
                  </li>
                </router-link>
                <router-link class="ui-link" to="/settings/change-password">
                  <li class="settings-tab">
                    Change Password
                  </li>
                </router-link>
                <!-- <a class="ui-link" href="/m/settings/payment">
                  <li class="settings-tab">
                    Payment Settings
                  </li>
                </a> -->
                <li class="settings-tab logout" @click="showLogoutModal">
                  Logout
                </li>
              </ul>
              <div class="information-text">
                <div class="terms-and-privacy">
                  <!-- <a class="main-color ui-link" href="/m/terms">
                    Terms of service
                  </a>
                  and
                  <a class="main-color ui-link" href="/m/terms">
                    Privacy Policy
                  </a> -->
                </div>
                <!--
                <div class="uid user-info-item">
                  Logged in via: Email
                </div>
                <div class="email user-info-item">
                  Email: 383550559@qq.com
                </div>-->
                <!-- <div class="uid">
                  User ID: 59843e6100a9926c1e9c4d27
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/css/shipping';
  @import '../assets/css/settings';
</style>

<script>
import MyHeader from '../components/headerCart'
import Validator from '../_common/js/validate.js'
import qs from 'qs'

export default {

  name: 'contact',
  components: { MyHeader },
  data () {
    return {
      info: {
        email: '',
        title: '',
        content: ''
      }
    }
  },
  created () {

  },
  methods: {
    showLogoutModal () { // 退出
      this.$luoji_confirm({
        title:'Do you want to log out?',
        showCancelBtn: true,
        confirmText: 'Logout'
      }).then(() => {
        this.logout()
      }).catch(() => {

      })
    },
    logout () { // 退出
      // 请求接口
      this.$axios.post(this.ApiList.logout)
        .then((res) => {
          this.$cookieApi.setCookie('user', '', -1)
          this.$cookieApi.setCookie('cart', '', -1)
          this.$cookieApi.setCookie('email', '', -1)
          this.$store.commit('changeLoginStatus', {
            isLogin: false
          })
          console.log('退出')
          this.$router.push({path: '/'})
          // let notNessaryPath = ['index', 'detailPage', 'help', 'privacy', 'terms', 'return', 'login', 'notFound', 'search', 'contactUs']
          // if (notNessaryPath.indexOf(this.$router.currentRoute.name) === -1) {
          //   this.$router.push({path: '/'})
          // }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    submit () {
      // 验证为空
      if (this.info.email === '' || this.info.title === '' || this.info.content === '') {
        this.$messagebox({
          title: 'Oops!',
          message: 'Please provide information in all required fields',
          confirmButtonText: 'ok',
          confirmButtonHighlight: true
        })
        return
      }
      // 验证邮编
      let emailResult = Validator.email(this.info.email)
      if (!emailResult.status) {
        this.$messagebox({
          title: 'Oops!',
          message: emailResult.errorText,
          confirmButtonText: 'ok',
          confirmButtonHighlight: true
        });
        return false
      }
      let data = this.info
      this.$axios.post(this.ApiList.contact, qs.stringify(data))
        .then((response) => {
          console.log(response.data)
          this.$toast({
            message: 'Thank you! We will be in contact with you shortly.',
            // position: 'bottom',
            duration: 3000
          });
          this.info.content = ''
        })
        .catch((err) => {
          if (!err.data.success) {
            this.$messagebox({
              title: 'Oops!',
              message: err.data.msg,
              confirmButtonText: 'ok',
              confirmButtonHighlight: true
            })
          }
        })
    },
  }
}
</script>

