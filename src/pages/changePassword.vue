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
                  <div class="form-title">Use this form to change your password.</div>
                  <div class="form-header-content">Enter your old password for authorization.</div>
                </div>
                <div class="new-email" :class="{'focus': email.focus.new, 'error': !email.value.new && !email.firstInput.new || email.itemInvalidate.new}">
                  <div class="label">
                    Old Password
                  </div>
                  <div class="input-container">
                    <input autocapitalize="none" autocorrect="off" class="new-email-input" placeholder="Enter old password" type="email" @focus="focus('new')" @blur="blur('new')" v-model.trim="email.value.new"/>
                  </div>
                  <div class="required" v-show="!email.value.new && !email.firstInput.new || email.itemInvalidate.new">{{email.errorText.new}}</div>
                </div>
                <div class="new-email" :class="{'focus': email.focus.confirm, 'error': !email.value.confirm && !email.firstInput.confirm || email.itemInvalidate.confirm}">
                  <div class="label">
                    New Password
                  </div>
                  <div class="input-container">
                    <input autocapitalize="none" autocorrect="off" class="new-email-input" placeholder="Enter new password" type="email" @focus="focus('confirm')" @blur="blur('confirm')" v-model.trim="email.value.confirm"/>
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
  .form-header-content {
    margin-top: 10px;
  }
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
          new: '', // 老的值
          confirm: '' // 新的值
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
    submit () {
      // 验证邮编
      let data = {
        currentPassword: this.email.value.new,
        newPassword: this.email.value.confirm
      }
      this.$indicator.open({
        spinnerType: 'snake'
      });
      this.$axios.post(this.ApiList.changePassword, qs.stringify(data))
        .then((response) => {
          this.$indicator.close()
          this.$toast({
            message: 'Your password is updated',
            duration: 3000
          });
          this.email.value.new = ''
          this.email.value.confirm = ''
          setTimeout(() => {
            this.email.firstInput.new = true
            this.email.firstInput.confirm = true
          })
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

