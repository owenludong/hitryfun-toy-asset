<template>
  <div class="msite-signin-signup-modal" id="msite-signup-modal">
    <my-header></my-header>
    <div class="singin-v2">
      <ul>
        <li>
          <label id="required-text">{{ $t('signinReq') }}</label>
          <form class="input-fields-v2 ui-mobile-input-overwrite">
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="highlight-v2" id="signin-v2-email" spellcheck="false" type="email" :placeholder="$t('emailReq')" autocomplete="off" v-model.trim="email"/>
            </div>
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
              <input class="highlight-v2" id="signin-v2-password" type="password" :placeholder="$t('passwordReq')" v-model.trim="password" autocomplete="off"/>
            </div>
            <button class="btn-v2 ui-mobile-btn-overwrite email-signin-button-v2 ui-btn ui-shadow ui-corner-all" @click="signin" type="button">
              <span class="text">
                {{ $t('signin') }}
              </span>
            </button>
          </form>
        </li>
        <li>
          <div class="signin-new">
            <div class="signin-new-txt">
              {{ $t('newTo') }}
            </div>
            <router-link class="text-link signin-btn-signup cronkite touchable" to="/signup" tag="div">
              {{ $t('createAccount') }}
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
  .msite-signin-signup-modal .singin-v2 ul {
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
</style>

<script>
import MyHeader from '../components/headerCart'
import Validator from '../_common/js/validate.js'
import CookieApi from '../_common/js/cookies.js'
import qs from 'qs'

export default {

  name: 'signin',
  components: { MyHeader },
  data () {
    return {
      email: '',
      password: '',
    }
  },
  created () {

  },
  methods: {
    tofb () {
      this.$axios(this.ApiList.facebookAuthUrl)
        .then((response) => {
          let fbUrl = response.data.url
          window.location.replace(fbUrl)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signin () {
      if (this.email === '' || this.password === '') {
        this.$messagebox({
          title: 'Oops!',
          message: 'Please fill in all the fields.',
          confirmButtonText: 'ok',
          confirmButtonHighlight: true
        })
        return false
      }
      // let emailResult = Validator.email(this.email)
      // if (!emailResult.status) {
      //   this.$messagebox({
      //     title: 'Oops!',
      //     message: emailResult.errorText,
      //     confirmButtonText: 'ok',
      //     confirmButtonHighlight: true
      //   })
      //   return false
      // }
      let data = {
        email: this.email,
        password: this.password
      }
      this.$axios.post(this.ApiList.login, qs.stringify(data))
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

