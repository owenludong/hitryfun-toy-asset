<template>
  <div id="container">
    <my-header>
    </my-header>
    <my-footer></my-footer>
    <my-dialog :is-show="showDialog" @close-dialog="hideDialog" :title="dialogInfo.title" :content="dialogInfo.content" :cancelButtonText="dialogInfo.cancelButtonText" :confirmButtonText="dialogInfo.confirmButtonText" :size="dialogInfo.size"></my-dialog>
  </div>
</template>
<script>
  import MyHeader from '../components/headerCart'
  import Validator from '../_common/js/validate.js'
  import CookieApi from '../_common/js/cookies.js'
  import qs from 'qs'

  export default {

    name: 'oauthCallback',
    components: {
      MyHeader
    },
    data () {
      return {
      }
    },
    created () {
      let site = this.$route.params.site
      let code = this.getQueryString('code')
      let prams = {'code': code, 'source': 'mobile'}
      if (site === 'facebook') {
        if (code) {
          this.$axios.post(this.ApiList.facebookAuthCallback, qs.stringify(prams))
          .then((response) => {
            CookieApi.setCookie('user', response.data.user, 10)
            CookieApi.setCookie('cart', response.data.cart, 10)
            this.$store.commit('changeLoginStatus', {
              isLogin: true,
              account: {
                userName: response.data.user
              }
            })
            this.fetch()
            // window.location.replace('http://hitryfun.com')
            this.$router.push({path: '/'})
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
        } else {
          let error = this.getQueryString('error')
          if (error) {
            this.$messagebox({
              title: 'Oops!',
              message: error + ' Please retry login facebook or contact us',
              confirmButtonText: 'ok',
              confirmButtonHighlight: true
            })
          } else {
            this.$messagebox({
              title: 'Oops!',
              message: ' Please retry login facebook or contact us',
              confirmButtonText: 'ok',
              confirmButtonHighlight: true
            })
          }
        }
      }
    },
    methods: {
      fetch () { // 获取购物车
        this.$axios(this.ApiList.cart)
          .then((response) => {
            let cartInfo = response.data.carts
            let total = 0
            for (var i = 0; i < cartInfo.cartItems.length; i++) {
              total += cartInfo.cartItems[i].quantity
            }
            this.cartCount = total
            // 如果是首页 就往index里面传递购物车数据
            if ((this.$route.name === 'index' || this.$route.name === 'search') && this.cartCount) {
              Bus.$emit('cartToIndex', cartInfo)
            }
          })
          .catch((err) => {
            // console.log('未登录')
            console.log(err)
          })
      },
      getQueryString (name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        let r = window.location.search.substr(1).match(reg)
        if (r != null) {
          return unescape(r[2])
        } else {
          return null
        }
      }
    }
  }
</script>