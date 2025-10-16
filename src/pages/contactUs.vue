<template>
  <div>
    <my-header></my-header>
    <div id="shippingPage">
      <div class="mobile-cart-shipping-page ui-page-theme-a">
        <div class="address-form">
          <label id="required-text">* Indicates a field is required</label>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="email" placeholder="Please enter your email*" type="email" v-model.trim="info.email"/>
            </div>
          </div>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="full-width-input required-input" name="subject" placeholder="Subject*" type="text" v-model.trim="info.title"/>
            </div>
          </div>
          <div class="form-row">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <textarea class="full-width-input required-input" name="description" placeholder="Description*" v-model.trim="info.content" rows="10"></textarea>
            </div>
          </div>

          <div class="cart-footer defaulthide ui-footer ui-footer-fixed slideup ui-bar-inherit">
            <div class="checkout-button-container">
              <div class="orange-button checkout-button touchable done-btn" @click="submit">
                Done
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
  .ui-input-text textarea {
      font-size: 15px;
      background-color: #f7f7f7;
      font-weight: 100;
      outline: none;
      border: none;
  }
  #companyAbout{
    border-radius: 0px;
    width: 700px;
    margin: 0px auto;
    padding: 20px 20px;
    font-size: 15px;
    background-color: #ffffff;
    color: #777777;
    text-align: left;
    line-height:25px
  }
</style>

<script>
import MyHeader from '../components/header'
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

