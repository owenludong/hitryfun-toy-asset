<template>
  <!-- <div class="msite-signin-signup-modal" id="msite-signup-modal">
    <my-header></my-header>
    <div class="singup-v2">

    </div>
  </div> -->
  <div id="container">
    <my-header>
    </my-header>
    <div id="content-wrapper">
      <div class="center" id="content">
        <div class="align-center" id="content-inner">
          <h1 class="">{{title.en}}</h1>
          <div class="footer-loading-view">
            <img class="footer-loading-spinner" src="../assets/images/ajax_loader_small.gif?v=13" width="32px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MyHeader from '../components/headerCart'

  export default {

    name: 'comfirmPay',
    components: {
      MyHeader
    },
    data () {
      return {
        title: {
          cn: '正在跳转到paypal支付，请稍后',
          en: 'We are going to the PayPal, please wait...'
        }
      }
    },
    created () {
      this.paymethod = this.$route.params.paymethod
      let requesturl
      if (this.paymethod === 'Paypal') {
        requesturl = this.ApiList.paypalbuy
        this.title.cn = '正在跳转到paypal支付，请稍后'
        this.title.en = 'We are going to the PayPal site, please wait'
      } else if (this.paymethod === 'Sofortpay') {
        requesturl = this.ApiList.sofortpaybuy
        this.title.cn = '正在跳转到sofort支付，请稍后'
        this.title.en = 'We are going to the sofort site, please wait'
      } else if (this.paymethod === 'CreditCard') {
        requesturl = this.ApiList.creditcardbuy
        this.title.cn = '正在通过信用卡支付，请稍后'
        this.title.en = 'We are checking out now, please wait'
      } else {
        return
      }
      let router = this.$router
      let timer

      this.$axios.post(requesturl)
       .then((res) => {
         if (res.data.url) {
           window.location.replace(res.data.url)
         } else if (res.data.orderId) {
           this.$router.push({'path': `/purchase-confirmation/${res.data.orderId}`}) // 并跳转到支付完成页面
         } else {
           this.$router.push({path: '/transaction'})
         }
       })
       .catch((err) => {
         console.log(err)
         let content
         if (err.data.msg) {
           content = err.data.msg
         } else {
           content = 'pay error, please send email to us'
         }
         this.$messagebox({
           title: 'Oops!',
           message: content,
           showCancelButton: true,
           cancelButtonText: 'NO'
         })
         timer = setInterval(function () {
           router.push({path: '/cart'})
           clearInterval(timer)
         }, 3000)
       })

      /*this.$axios.post(this.ApiList.buy)
      .then((res) => {
        if (res.data.url) {
          // window.location = res.data.url
          window.location.replace(res.data.url)
          // var tempwindow = window.open('_blank')
          // tempwindow.location = res.data.url
        }
      })
      .catch((err) => {
        console.log(err)
      })*/
    },
    methods: {
    }
  }
</script>
<style scoped>
.footer-loading-view {
  text-align: center;
}
.footer-loading-spinner {
  margin-top: 20px;
}
#content-wrapper {
  padding: 10px;
}

#container {
  margin-top: 64px;
  background-color: white;
}

.flat-blue-button {
    background-color: #8dd9bf;
}
.flat-blue-button:hover {
    background-color: #1baae2;
}
#contactTextarea {
  width: 80%;
  border: 1px solid #ddd;
  font-size: 14px;
  vertical-align: text-top;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
}
.transaction-change-address .form-row {
  padding-bottom: 18px;
}
.form-row {
  text-align: center;
}
.form-header {
  display: inline-block;
  width: 10%;
}
.transaction-change-address .form-row .full-width-input {
  width: 80%;
}
.loading-text {
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 50px;
}
.loading-gif {
  font-size: 2em;
}
</style>

