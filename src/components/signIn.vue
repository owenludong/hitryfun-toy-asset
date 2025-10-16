<template>
  <div>
    <div class="mobile-signup-dialog ui-page ui-page-theme-a ui-dialog" data-close-btn="none" data-corners="false" data-page-active="true" data-role="dialog" id="signup-dialog-0a0389d1-7bc5-4c63-9ca1-c78fc8945195" style="display: block;" tabindex="0">
      <div class="ui-dialog-contain ui-overlay-shadow" role="dialog">
        <div class="msite-signin-signup-modal" id="msite-signup-modal">
          <div class="singup-v2" v-show="currentContent === 'signup'">
            <ul>
              <li>
                <div class="title-v2">
                  Create an Account
                </div>
              </li>
              <li>
                <form class="input-fields-v2 ui-mobile-input-overwrite">
                  <div class="signup-v2-names">
                    <div class="signup-v2-fname-div">
                      <label for="signup-v2-fname">
                        First Name
                      </label>
                      <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                        <input class="highlight-v2" id="signup-v2-fname" spellcheck="false" type="text"/>
                      </div>
                    </div>
                    <div class="signup-v2-lname-div">
                      <label for="signup-v2-lname">
                        Last Name
                      </label>
                      <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                        <input class="highlight-v2" id="signup-v2-lname" spellcheck="false" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div class="signup-v2-input-div">
                    <label for="signup-v2-email">
                      E-mail
                    </label>
                    <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                      <input class="highlight-v2" id="signup-v2-email" spellcheck="false" type="email"/>
                    </div>
                    <label for="signup-v2-password">
                      Password
                    </label>
                    <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                      <input class="highlight-v2" id="signup-v2-password" type="password"/>
                    </div>
                  </div>
                  <button class="btn-v2 ui-mobile-btn-overwrite email-signup-button-v2 ui-btn ui-shadow ui-corner-all" @click="createAccount">
                    <span class="text">
                      Create an Account
                    </span>
                  </button>
                </form>
                <div class="message-v2 highlight-v2">
                </div>
              </li>
              <li>
                <div class="login-separator-v2">
                  <div class="text">
                    or
                  </div>
                </div>
              </li>
              <li>
                <div class="loginmodal-v2-social-div">
                  <div class="loginmodal-v2-social-btn fb-login-btn btn-v2 cronkite" data-tid="1518">
                    <div>
                      <img src="../assets/images/fb.png?v=13"/>
                      <span class="text">
                        Facebook
                      </span>
                    </div>
                  </div>
                  <div class="loginmodal-v2-social-btn gplus-login-btn btn-v2 cronkite" data-tid="1814">
                    <div>
                      <img src="../assets/images/gplus.png?v=13" style="margin-left: -6px"/>
                      <span class="text">
                        Google
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="signup-existing">
                  <div class="signup-existing-txt">
                    Already have an account?
                  </div>
                  <div class="text-link signup-btn-signin cronkite touchable" @click="changeContent('signin')">
                    Sign In
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="singin-v2" v-show="currentContent === 'signin'">
            <ul>
              <li>
                <div class="title-v2">
                  Sign In
                </div>
              </li>
              <li>
                <form class="input-fields-v2 ui-mobile-input-overwrite">
                  <label class="input-fields-v2-label" for="signin-v2-email">
                    E-mail
                  </label>
                  <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input class="highlight-v2" id="signin-v2-email" spellcheck="false" type="email"/>
                  </div>
                  <label for="signin-v2-password">
                    Password
                  </label>
                  <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input class="highlight-v2" id="signin-v2-password" type="password"/>
                  </div>
                  <div class="forgot-password-link-v2 forgot-password-v2 text-link" @click="changeContent('forgotPassword')">
                    Forgot password?
                  </div>
                  <button class="btn-v2 ui-mobile-btn-overwrite email-signin-button-v2 ui-btn ui-shadow ui-corner-all">
                    <span class="text">
                      Sign In
                    </span>
                  </button>
                </form>
                <div class="message-v2 highlight-v2">
                </div>
              </li>
              <li>
                <div class="login-separator-v2">
                  <div class="text">
                    or
                  </div>
                </div>
              </li>
              <li>
                <div class="loginmodal-v2-social-div">
                  <div class="loginmodal-v2-social-btn fb-login-btn btn-v2 cronkite" data-tid="1518">
                    <div>
                      <img src="../assets/images/fb.png?v=13"/>
                      <span class="text">
                        Facebook
                      </span>
                    </div>
                  </div>
                  <div class="loginmodal-v2-social-btn gplus-login-btn btn-v2 cronkite" data-tid="1814">
                    <div>
                      <img src="../assets/images/gplus.png?v=13" style="margin-left: -6px"/>
                      <span class="text">
                        Google
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="signin-new">
                  <div class="signin-new-txt">
                    New to Hitryfun?
                  </div>
                  <div class="text-link signin-btn-signup cronkite touchable" @click="changeContent('signup')">
                    Sign Up
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="forgotpassword-v2" v-show="currentContent === 'forgotPassword'">
            <div class="back-v2 left" @click="changeContent('signin')">
              <img src="../assets/images/back.png?v=13"/>
            </div>
            <div class="forgotpassword-v2-div">
              <form class="input-fields-v2 ui-mobile-input-overwrite">
                <div class="title-v2">
                  Forgot password?
                </div>
                <label class="forgotpassword-v2-email-label" for="forgotpassword-v2-email">
                  Email
                </label>
                <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                  <input class="forgotpassword-v2-email highlight-v2" id="forgotpassword-v2-email" type="text"/>
                </div>
                <button class="btn-v2 ui-mobile-btn-overwrite email-forgot-pwd-btn-v2 ui-btn ui-shadow ui-corner-all">
                  <span class="text">
                    Submit
                  </span>
                </button>
              </form>
              <div class="message-v2 highlight-v2">
              </div>
            </div>
          </div>
          <div class="loader-v2 hide">
            <img src="../assets/images/ajax_loader_24_transparent.gif?v=13"/>
          </div>
        </div>
      </div>
    </div>
    <div class="login-mask"></div>
  </div>
</template>
<style lang="scss" scoped="">
@import '../assets/css/signin.css';

</style>
<script>
  export default {

  name: 'signIn',
  data () {
    return {
      currentContent: 'signup', // 当前的显示内容 signup signin forgotPassword
      createAccountInfo: {
        state: true,
        errorTest: '',
        firstName: {
          value: '',
          status: true
        },
        lastName: {
          value: '',
          status: true
        },
        email: {
          value: '',
          status: true
        },
        password: {
          value: '',
          status: true
        }
      }
    }
  },
  created () {

  },
  methods: {
    changeContent (type) { // 注册或者登录页面或者忘记密码页面的切换
      this.currentContent = type
    },
    createAccount () {
      this.validCreateInfo()
    },
    validCreateInfo () {
      if (this.createAccountInfo.firstName.value === '' || this.createAccountInfo.lastName.value === '' || this.createAccountInfo.email.value === '' || this.createAccountInfo.password.value === '') {
        this.createAccountInfo.state = false
        this.createAccountInfo.errorTest = 'Please fill out all fields.'
      }
    }
  }
}
</script>
