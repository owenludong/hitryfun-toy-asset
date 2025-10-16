<template>
  <div>
    <my-header></my-header>
    <div id="billingPage">
      <div class="mobile-cart-billing-page">
        <ul id="payment-header">
          <!-- <li class="payment-option" id="credit-card-option" style="width: 33.3333%;">
            <img class="payment-img" id="credit-card-img" src="https://main.cdn.wish.com/ec05fc1c53c5/img/commerce/payment_tab_credit_card.png" />
          </li> -->
          <!-- <li class="payment-option default-hide" data-tid="20532" id="apple-pay-option" style="display: none; width: 100%;">
            <img class="payment-img" id="apple-pay-img" src="https://main.cdn.wish.com/ec05fc1c53c5/img/commerce/payment_tab_apple_pay.png" />
          </li> -->
          <!--
          <li class="payment-option" id="paypal-option" tag="div" @click="selectPay('sofortpay')" v-bind:class="{ 'selected': isSofortPay }">
            <img class="payment-img" id="paypal-img" src="https://www.hitryfun.com/logo/sofort.png" />
            <i class="wconfont wm-Select"></i>
          </li>
          -->
          <li class="payment-option" id="paypal-option" tag="div" v-bind:class="{ 'selected': isPayPal }" @click="selectPay('paypal')">
            <img class="payment-img" id="paypal-img" src="../assets/images/payment_tab_paypal.png" />
            <i class="wconfont wm-Select"></i>
          </li>
          <li class="payment-option" id="creditcard-option" tag="div" @click="selectPay('creditcard')" v-bind:class="{ 'selected': isCreditCard }">
            <img class="payment-img2" id="credit-card-img" style="margin-left:20%" src="../assets/images/american-express-straight-64px.png"/>
            <img class="payment-img2" id="credit-card-img" src="../assets/images/mastercard-straight-64px.png"/>
            <img class="payment-img2" id="credit-card-img" src="../assets/images/visa-straight-64px.png"/>
            <i class="wconfont wm-Select"></i>
          </li>
        </ul>
        <form class="payment-info-form" id="payment-info-form-88af3e24-e99d-4559-9ff8-69003c264f0c">
          <div class="payment-section default-hide" id="apple-pay-section" style="display: none;">
          </div>
          <div class="payment-section default-hide" id="apple-pay-section-v2" style="display: none;">
          </div>
          <div>
            <div class="payment-section" data-payment-mode="1" id="credit-card-section" v-if="isCreditCard">
              <label class="section-title" for="cc-number">
                Credit Card
              </label>
              <div class="form-item"  style="margin-top:10px;">
                   <card class='stripe-card'
                    :class='{ complete }'
                    stripe='pk_live_jez50XmOzKwHIiZ0xlrDsYR7'
                    :options='stripeOptions'
                    @change='complete = $event.complete'
                  />
              </div>
            </div>
          </div>
        </form>

        <div class="orange-button" id="nextBtn" @click="submitPay">
           Next
        </div>
        <!-- 暂时没有save接口 -->
        <!-- <div class="cart-footer defaulthide ui-footer ui-footer-fixed slideup ui-bar-inherit">
          <div class="checkout-button-container">
            <router-link class="orange-button checkout-button touchable done-btn" to="/cart" tag="div">
              Save
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../assets/css/billing.css';
  .secure-payment-table .secure-payment-image {
      width: 35px;
      height: 35px;
      display: inline-block;
      background-size: 35px 35px;
      background-image: url("../assets/images/ic_lock.png")
  }
  .mobile-cart-billing-page .payment-info-form #apple-pay-section-v2 {
      background-color: black;
      background-image: url("../assets/images/apple_pay_medium.png?v=13");
      background-size: 100%;
      background-origin: content-box;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 30px;
      padding: 10px 0;
      cursor: pointer;
      border-radius: 10px;
      margin-top: 20px
  }
  .payment-option i {
    color: white;
    position: absolute;
    right: 0;
    font-size: 24px;
    bottom: 0;
  }
  #billingPage {
    margin-top: 64px;
  }
  .payment-option.selected::after{
    left: 47.5px;
    display: none;
  }
  #paypal-option.selected:before {
      content: '';
      display: block;
      width: 36px;
      height: 36px;
      position: absolute;
      bottom: 0;
      right: 0;
      background: #4b0;
      border-top-left-radius: 100%;
      cursor: pointer;
  }

  #creditcard-option.selected:before {
      content: '';
      display: block;
      width: 36px;
      height: 36px;
      position: absolute;
      bottom: 0;
      right: 0;
      background: #4b0;
      border-top-left-radius: 100%;
      cursor: pointer;
  }
  /*#paypal-option.selected:after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: "\F00C";
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #fff;
      font-size: 24px;
  }*/
  .ui-header-fixed, .ui-footer-fixed {
      left: 0;
      right: 0;
      width: 100%;
      position: fixed;
      z-index: 1000;
      bottom: -1px;
      padding-bottom: 1px;
  }
  .cart-footer.ui-footer .checkout-button {
      margin: 10px;
      padding: 10px 0px;
      font-size: 15px;
      font-weight: bold;
      width: calc(100% - 20px);
  }
  .done-btn {
      background-color: #8dd9bf;
  }
  #credit-card-img {
    height: 40px;
    margin: 0 auto;
  }
  .stripe-card {
  background-color: white;
  height: 45px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #efefef;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.stripe-card.complete {
  border-color: green;
}
#nextBtn {
    margin-top: 40px;
    padding: 10px 0px;
    font-size: 15px;
    font-weight: bold;
}
</style>

<script>
import MyHeader from '../components/headerCart'
import qs from 'qs'
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {

  name: 'payment',
  components: { MyHeader, Card },
  data () {
    return {
      isPayPal: false,
      isSofortPay: false,
      isCreditCard: false,
      complete: false,
      stripeOptions: {
      }
    }
  },
  created () {
     this.fetch()
  },
  methods: {
   selectPay(paymethod) {
      if (paymethod === 'paypal') {
        this.isPayPal = true
        this.isSofortPay = false
        this.isCreditCard = false
      } else if (paymethod === 'sofortpay') {
        this.isPayPal = false
        this.isSofortPay = true
        this.isCreditCard = false
      } else if (paymethod === 'creditcard') {
        this.isPayPal = false
        this.isSofortPay = false
        this.isCreditCard = true
      }
    },
    async submitPay () {
      let payMethod
      let payToken
      if (this.isPayPal) {
        payMethod = 'Paypal'
      } else if (this.isSofortPay) {
        payMethod = 'Sofortpay'
      } else if (this.isCreditCard) {
        payMethod = 'CreditCard'
        if (!this.complete) {
          this.$messagebox({
            title: 'Oops!',
            message: 'Please enter the required field.',
            showCancelButton: true,
            cancelButtonText: 'NO'
          })
          return false
        }
        let {token, error} = await createToken()
        if (token) {
          payToken = token.id
          console.log('token=' + payToken)
        } else {
          this.$messagebox({
            title: 'Oops!',
            message: error.message,
            showCancelButton: true,
            cancelButtonText: 'NO'
          })
          return false
        }
      } else {
        this.$messagebox({
         title: 'Oops!',
         message: 'Please select one pay method.',
         showCancelButton: true,
         cancelButtonText: 'NO'
       })
        return false
      }

      let data = {
        payMethod: payMethod,
        stripeToken: payToken
      }

      this.$axios.post(this.ApiList.Updatepaymethod, qs.stringify(data))
        .then((response) => {
          console.log(response.data)
          this.$router.push({path: '/cart'})
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetch () {
      this.$axios(this.ApiList.shippingAddress)
        .then((response) => {
          let paymethod = response.data.paymethod
          if (paymethod === 'Paypal') {
            this.isPayPal = true
            this.isSofortPay = false
            this.isCreditCard = false
          } else if (paymethod === 'Sofortpay') {
            this.isPayPal = false
            this.isSofortPay = true
            this.isCreditCard = false
          } else if (paymethod === 'CreditCard') {
            this.isPayPal = false
            this.isSofortPay = false
            this.isCreditCard = true
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }
}
</script>

