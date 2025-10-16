<template>
  <div>
    <my-header></my-header>
    <div id="shippingPage">
      <div class="mobile-cart-shipping-page ui-page-theme-a">
        <div class="mobile-page-content ui-content" data-role="content" role="main">
          <div class="mobile-page-state-content default-hide" style="display: block;">
            <div class="error-background">
              <div class="error-code">
                404
              </div>
              <div class="error-title-label">
                Error
              </div>
              <div class="error-message-text">
                Page Not Found
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
  .error-background {
      background-position: center top;
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 400px;
      text-align: center;
      color: #343434;
      background-image: url('../assets/images/error_note.png');
  }
  .error-background .error-code {
      font-weight: bold;
      font-size: 70px;
      padding-top: 81px;
  }
  .error-background .error-title-label {
      font-size: 30px;
      margin-bottom: 30px;
  }
  .error-background .error-message-text {
      font-size: 24px;
  }
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
        showCancelBtn: false,
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

