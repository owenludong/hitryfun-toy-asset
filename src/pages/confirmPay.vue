<template>
  <div id="container">
    <my-header>
    </my-header>
    <div id="content-wrapper">
      <div class="center" id="content">
        <div  id="content-inner">
          <!-- <div v-show="payStatus === 'cancel'">
            <span>支付失败</span>
            <router-link to="/cart">返回到购物车</router-link>
          </div>
          <div v-show="payStatus === 'success'">
            <span>支付成功</span>
          </div> -->
          <div v-show="status === 'checking'">
            <h1>{{checkingTitle.en}} <i class="fa fa-spin fa-spinner"></i> </h1>
            <div class="footer-loading-view">
              <img class="footer-loading-spinner" src="../assets/images/ajax_loader_small.gif?v=13" width="32px" />
            </div>
            <!-- <div class="fa fa-spin fa-spinner loading-text loading-gif"></div> -->
          </div>
          <!-- <div v-show="status === 'fail'" class="success">
            <h1 class="loading-text">支付成功</h1>
          </div> -->
          <div v-show="status === 'fail'" class="fail">
            <h1>{{failTitle.en}}</h1>
            <div v-show="failMsg" class="fail-msg">The cause of failure：{{failMsg}}</div>
            <div id="promo-code-btn" class="clickable main-color main-color-border-color"><a id="promo-code-btn-txt" href="javascript:void(0)" @click="repay">Repay</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MyHeader from '@/components/headerCart'
  import qs from 'qs'

  export default {

    name: 'comfirmPay',
    components: {
      MyHeader
    },
    data () {
      return {
        failMsg: '', // 失败原因
        status: 'checking', // 付款状态: 检测 checking 、 成功 success 、失败 fail
        payStatus: '', // success cancel 支付状态 成功 失败
        checkingTitle: {
          cn: '正在检查支付状态',
          en: 'We are checking the payment status, please wait'
        },
        failTitle: {
          cn: '支付失败',
          en: 'Sorry, the payment is fail, please repay or contact us with service@hitryfun.com'
        }
      }
    },
    created () {
      // 支付成功 直接跳转到订单详情页面
      // 支付失败 显示支付失败及其原因 还有返回购物车页面
      this.payStatus = this.$route.params.type
      let prams = this.$route.query
      if (this.payStatus === 'success') {
        // 调用支付成功接口
        this.$axios.post(this.ApiList.paySuccess, qs.stringify(prams))
          .then((response) => {
            if (response.data.orderId) {
              // this.status = 'success'
              this.$router.push({'path': `/purchase-confirmation/${response.data.orderId}`}) // 并跳转到支付完成页面
            }
          })
          .catch((err) => {
            this.status = 'fail'
            this.failMsg = err.data.msg
          })
      } else {
        this.status = 'fail'
      }
    },
    methods: {
      repay () {
        this.$router.replace('/cart')
      }
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
#promo-code-btn-txt {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
.fail-msg {
  word-wrap: break-word;
  margin-top: 10px;
}
#content-wrapper {
  padding: 10px;
}

#container {
  margin-top: 64px;
  background-color: white;
}
.fail {
  color: red;
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
  margin-top: 20px;
}
.loading-gif {
  font-size: 2em;
}
#promo-code-btn {
    margin-top: 20px;
    border: 1px solid;
    width: 77px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: white;
    font-size: 14px;
    font-weight: bold;
    border-radius: 2px;
    margin-bottom: 8px;
}
</style>

