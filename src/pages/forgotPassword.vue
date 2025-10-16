<template>
  <div class="msite-signin-signup-modal" id="msite-signup-modal">
    <my-header></my-header>
    <div class="forgotpassword-v2">
      <div class="forgotpassword-v2-div">
        <label id="required-text">* Indicates a field is required</label>
        <form class="input-fields-v2 ui-mobile-input-overwrite">
          <div class="signup-v2-lname-div">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="highlight-v2" id="signup-v2-lname" spellcheck="false" type="email" placeholder="Email*"/>
            </div>
          </div>
          <button class="btn-v2 ui-mobile-btn-overwrite email-forgot-pwd-btn-v2 ui-btn ui-shadow ui-corner-all">
            <span class="text">
              Reset Password
            </span>
          </button>
        </form>
        <div class="message-v2 highlight-v2">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/css/signin.css';
  #msite-signup-modal {
    margin-top: 64px;
  }
  .msite-signin-signup-modal .forgotpassword-v2 .forgotpassword-v2-div {
    padding: 0;
  }
  .msite-signin-signup-modal .forgotpassword-v2 {
    padding: 10px;
  }
  .signin-new-txt {
    color: rgb(119, 119, 119);
  }
  form .ui-input-text {
    margin-bottom: 12px;
  }
  form .ui-input-text input {
    font-size: 15px;
    background-color: rgb(247, 247, 247) !important;
    font-weight: 100;
  }
  .msite-signin-signup-modal .forgotpassword-v2 .email-forgot-pwd-btn-v2 {
    margin-top: 0;
  }
</style>

<script>
import MyHeader from '../components/headerCart'

export default {

  name: 'forgotpassword',
  components: { MyHeader },
  data () {
    return {
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

