<template>
  <div>
    <my-header></my-header>
    <div id="shippingPage">
      <div class="mobile-cart-shipping-page ui-page-theme-a">
        <div class="mobile-page-content ui-content" data-role="content" role="main">
          <div class="mobile-page-state-content default-hide" style="display: block;">
            <div class="mobile-settings-change-email-page">
              <div class="mobile-settings-change-email-page-main-content">
                <div class="email-explanation">
                  <div class="form-title">Use this form to change your email address.</div>
                  <!-- <div>We will send you an e-mail to confirm the address change.</div> -->
                </div>
                <div class="old-email">
                  <div class="label">
                    Current e-mail address
                  </div>
                  <div class="old-email-text">{{account.email}}</div>
                </div>
                <!-- <div class="old-email">
                  <div class="label">
                    Old E-mail Address
                  </div>
                  <div class="ui-input-text ui-body-inherit ui-corner-all ui-state-disabled ui-shadow-inset">
                    <input class="old-email-input" disabled="disabled" placeholder="383550559@qq.com" type="text"/>
                  </div>
                </div> -->
                <div class="new-email" :class="{'focus': email.focus.new, 'error': !email.value.new && !email.firstInput.new || email.itemInvalidate.new}">
                  <div class="label">
                    New e-mail address
                  </div>
                  <div class="input-container">
                    <input autocapitalize="none" autocorrect="off" class="new-email-input" placeholder="Enter e-mail address" type="email" @focus="focus('new')" @blur="blur('new')" v-model.trim="email.value.new"/>
                  </div>
                  <div class="required" v-show="!email.value.new && !email.firstInput.new || email.itemInvalidate.new">{{email.errorText.new}}</div>
                </div>
                <div class="new-email" :class="{'focus': email.focus.confirm, 'error': !email.value.confirm && !email.firstInput.confirm || email.itemInvalidate.confirm}">
                  <div class="label">
                    Confirm e-mail address
                  </div>
                  <div class="input-container">
                    <input autocapitalize="none" autocorrect="off" class="new-email-input" placeholder="Confirm new e-mail address" type="email" @focus="focus('confirm')" @blur="blur('confirm')" v-model.trim="email.value.confirm"/>
                  </div>
                  <div class="required" v-show="!email.value.confirm && !email.firstInput.confirm || email.itemInvalidate.confirm">{{email.errorText.confirm}}</div>
                </div>
              </div>
              <div class="cart-footer ui-footer ui-footer-fixed ui-bar-inherit">
                <div class="checkout-button-container" :class="{disabled: email.invalidate}">
                  <div class="orange-button checkout-button done-btn" @click='submit'>
                    Save Changes
                  </div>
                </div>
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

  .required {
    margin-top: 10px;
    text-align: right;
    font-size: 12px;
    font-weight: bold;
  }
  .old-email-text {
    padding-top: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(240,245,247)
  }
  .mobile-settings-change-email-page input {
    background-color: rgb(248,250,251);
  }
  .focus{
    color: #8dd9bf;
  }
  .focus .input-container {
    border-color: #8dd9bf;
  }
  .error {
    color: rgb(236, 47, 47)
  }

  .error .input-container {
    border-color: rgb(236, 47, 47);
  }
  .input-container {
    margin-top: 10px;
    border-radius: 3px;
    background-color: #fafafa;
    -webkit-box-shadow: unset;
    box-shadow: unset;
    font-size: 15px;
    text-shadow: none !important;
    border: 1px solid #d4e3eb;
  }
  .input-container input {
    padding: 12px;
    background-color: #f8fafb;
    font-size: 15px;
    font-weight: 100;
    margin: 0;
    min-height: 2.2em;
    text-align: left;
    border: 0;
    -webkit-appearance: none;
    border-radius: inherit;
    line-height: 1.4em;
    display: block;
    width: 100%;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
  }
  .checkout-button-container.disabled {
    opacity: .3;
    pointer-events: none;
  }
  input::-webkit-input-placeholder{
      color: #ddd;
  }
  .mobile-settings-change-email-page-main-content {
    margin-bottom: 60px;
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
      email: {
        value: { // 2个输入框的值
          new: '',
          confirm: ''
        },
        invalidate: true, // 总的验证
        focus: {  // 2个输入框的焦点
          new: false,
          confirm: false
        },
        firstInput: { // 2个输入框的第一次输入
          new: true,
          confirm: true
        },
        errorText: {
          new: 'Required Field',
          confirm: 'Required Field'
        },
        itemInvalidate: {
          new: false,
          confirm: false
        }
      }
    }
  },
  computed: {
    account () {
      return this.$store.getters.getAccount
    }
  },
  methods: {
    focus (type) {
      this.email.focus[type] = true
    },
    blur (type) {
      this.email.focus[type] = false
    },
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
      if (this.email.value.new !== this.email.value.confirm) {
        this.email.itemInvalidate.confirm = true
        this.email.errorText.confirm = 'Your emails do not match'
        return
      } else {
        this.email.itemInvalidate.confirm = false
      }
      // 验证邮编
      let emailResult = Validator.email(this.email.value.new)
      if (!emailResult.status) {
        this.email.itemInvalidate.new = true
        this.email.errorText.new = 'Invalid e-mail address'
        return
      }
      let data = {
        newEmail: this.email.value.new
      }
      this.$indicator.open({
        spinnerType: 'snake'
      });
      this.$axios.post(this.ApiList.changeEmail, qs.stringify(data))
        .then((response) => {
          this.$indicator.close()
          this.$toast({
            message: 'Your e-mail address is updated',
            duration: 3000
          });
          this.$cookieApi.setCookie('email', this.email.value.new, 10)
          this.$cookieApi.setCookie('user', '', -1)
          this.$cookieApi.setCookie('cart', '', -1)
          this.$cookieApi.setCookie('email', '', -1)
          this.$store.commit('changeLoginStatus', {
            isLogin: false
          })
          console.log('退出')
          this.$router.push({path: '/login'})
          /*this.$store.commit('changeLoginStatus', {
            isLogin: true,
            account: {
              userName: this.account.userName,
              email: this.email.value.new
            }
          })
          this.email.value.new = ''
          this.email.value.confirm = ''
          setTimeout(() => {
            this.email.firstInput.new = true
            this.email.firstInput.confirm = true
          })*/

        })
        .catch((err) => {
          console.log(err)
          this.$indicator.close()
          if (!err.data.success) {
            this.email.itemInvalidate.new = true
            this.email.errorText.new = err.data.msg
          }
        })
    }
  },
  watch: {
    'email.value.new' (newVal, val) {
      this.email.itemInvalidate.new = false
      this.email.firstInput.new = false
      if (this.email.value.new && this.email.value.confirm) {
        this.email.invalidate = false
      } else {
        this.email.invalidate = true
      }
    },
    'email.value.confirm' (newVal, val) {
      this.email.itemInvalidate.confirm = false
      this.email.firstInput.confirm = false
      if (this.email.value.new && this.email.value.confirm) {
        this.email.invalidate = false
      } else {
        this.email.invalidate = true
      }
    }
  }
}
</script>

