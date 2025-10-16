<template>
  <div class="msite-signin-signup-modal" id="msite-signup-modal">
    <my-header></my-header>
    <div class="singup-v2">
      <ul>
        <li>
          <label id="required-text">* Indicates a field is required</label>
          <form class="input-fields-v2 ui-mobile-input-overwrite">
            <div class="signup-v2-names">
              <div class="signup-v2-fname-div">
                <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                  <input class="highlight-v2" id="signup-v2-fname" spellcheck="false" type="text" v-model.trim="firstName" placeholder="First Name*" />
                </div>
              </div>
              <div class="signup-v2-lname-div">
                <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                  <input class="highlight-v2" id="signup-v2-lname" spellcheck="false" type="text" v-model.trim="lastName" placeholder="Last Name*"/>
                </div>
              </div>
            </div>
            <div class="signup-v2-input-div">
              <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                <input class="highlight-v2" id="signup-v2-email" spellcheck="false" type="email" v-model.trim="email" placeholder="Email*"/>
              </div>
              <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                <input class="highlight-v2" id="signup-v2-password" type="password" v-model.trim="password" placeholder="Password*"/>
              </div>
            </div>
            <button class="btn-v2 ui-mobile-btn-overwrite email-signup-button-v2 ui-btn ui-shadow ui-corner-all" type="button" @click="signUp">
              <span class="text">
                Create an Account
              </span>
            </button>
          </form>
        </li>
        <!--<li>
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
        </li>-->
        <li>
          <div class="signup-existing">
            <div class="signup-existing-txt">
              Already have an account?
            </div>
            <router-link class="text-link signup-btn-signin cronkite touchable" tag="div" to="/login">
              Sign In
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/css/signin.css';
  @import "../assets/css/mintui.css";
  #msite-signup-modal {
    margin-top: 64px;
  }
  .msite-signin-signup-modal .singup-v2 ul {
    padding: 10px;
  }
  .signup-existing-txt {
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
  .msite-signin-signup-modal .singup-v2 ul .signup-v2-names {
    height: auto;
  }
</style>

<script>
import MyHeader from '../components/headerCart'
import Validator from '../_common/js/validate.js'
import CookieApi from '../_common/js/cookies.js'
import qs from 'qs'

export default {

  name: 'signup',
  components: { MyHeader },
  data () {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }
  },
  created () {

  },
  methods: {
    signUp () {
      if (this.email === '' || this.password === '' || this.firstName === '' || this.lastName === '') {
        this.$messagebox({
          title: 'Oops!',
          message: 'Please fill in all the fields.',
          confirmButtonText: 'ok',
          confirmButtonHighlight: true
        });
        return false
      }
      let emailResult = Validator.email(this.email)
      if (!emailResult.status) {
        this.$messagebox({
          title: 'Oops!',
          message: emailResult.errorText,
          confirmButtonText: 'ok',
          confirmButtonHighlight: true
        });
        return false
      }
      let data = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      }
      this.$axios.post(this.ApiList.register, qs.stringify(data))
        .then((response) => {
          CookieApi.setCookie('user', response.data.user, 10)
          CookieApi.setCookie('cart', response.data.cart, 10)
          CookieApi.setCookie('email', this.email, 10)
          this.$store.commit('changeLoginStatus', {
            isLogin: true,
            account: {
              userName: response.data.user,
              email: this.email
            }
          })
          if (this.$route.query.redirect) {
            this.$router.push({path: this.$route.query.redirect})
          } else {
            this.$router.push({path: '/'})
          }
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
    }
  }
}
</script>

