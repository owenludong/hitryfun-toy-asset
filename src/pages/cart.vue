<template>
  <div>
    <my-header></my-header>
    <div id="cartPage" class="mobile-cart-page">
      <div class="cart-item-content" v-show="cartInfo.cartItems.length">
        <div class="shipment-info">
          <div class="header">{{ $t('youshippinginfo') }}</div>
          <router-link class="info-item"  to="/shipping" tag="div">
            <div class="info-item-name">{{ $t('shipping') }}</div>
            <div class="info-item-result">
              <span>{{address.address}} <i class="wconfont wm-arrow-right"></i></span>
            </div>
          </router-link>
          <router-link class="info-item" to="/payment" tag="div">
            <div class="info-item-name">{{ $t('payment') }}</div>
            <div class="info-item-result">
              <!--<div class="paypal"></div>-->
              <span>{{paymethod}} <i class="wconfont wm-arrow-right"></i></span>
            </div>
          </router-link>
        </div>
        <div class="cart-items-container">
          <div class="mobile-cart-item" v-for="cart in cartInfo.cartItems">
            <div clas="item-details">
              <div class="item-picture">
                <img class="cart-product-image" :src="cart.image" @click="goDetail(cart.productId)"/>
              </div>
              <div class="item-info">
                <div class="item-name">
                  {{cart.name}}
                </div>
                <div class="item-customization" v-show="cart.color || cart.size">
                  <span v-show="cart.color">{{cart.color}}</span><span v-show="cart.size">  {{cart.size}}</span>
                </div>
                <div class="item-customization" v-if="cart.shippingPrice">
                  Shipping: {{cartInfo.symbol}}{{cart.shippingPrice}}
                </div>
                <!-- <div class="item-customization">
                  Jan 2 - Jan 12
                </div> -->
                <div class="item-quantity">
                  <a class="sub-quantity main-color wconfont wm-jian" @click="editQuantity(cart, 'minus')"></a>
                  <span class="quantity">
                    {{cart.quantity}}
                  </span>
                  <a class="add-quantity main-color wconfont wm-jia"  @click="editQuantity(cart, 'add')"></a>
                </div>
              </div>
              <div class="item-price">
                <div v-if="cart.productPrice">
                  {{cartInfo.symbol}}{{cart.productPrice}}
                </div>
                <div v-if="cart.originalPrice">
                  <span class="crossed-price">
                    {{cartInfo.symbol}}{{cart.originalPrice}}
                  </span>
                </div>
              </div>
            </div>
            <div class="shipping-options">
            </div>
          </div>
        </div>
        <!-- <div class="cart-return-policy">
          <span class="return-policy-button main-color">
            Return Policy
          </span>
        </div> -->
        <div class="major-divider"></div>
        <div class="cart-footer-container">
          <div>
            <div class="mobile-cart-footer">
              <div class="cart-promo-container">
                <input id="promCode" type="text" :placeholder="$t('enterpromotioncode')" maxlength="20" class="promo-input" v-model="promCode">
                <a class="clickable main-color main-color-border-color" @click="calProm" v-show="!showLoading">{{ $t('apply') }}</a>
                <img v-show="showLoading"  id="prom-loader" src="../assets/images/ajax_loader_24_transparent.gif"/>
              </div>
              <div class="row2">
                <div id="errorText" class="error">{{errorText}}</div>
              </div>
              <div class="row">
                <span class="label">
                  {{ $t('itemtotal') }}
                </span>
                <span class="value">
                  {{cartInfo.symbol}} {{cartInfo.totalProductPrice}}
                </span>
              </div>
              <div class="row ">
                <span class="label">
                  {{ $t('shipping') }}
                </span>
                <span class="value">
                  {{ $t('freeshipping') }}
                </span>
              </div>
              <div class="row order-total ">
                <span class="label">
                  {{ $t('ordertotal') }}
                </span>
                <span class="value">
                  {{cartInfo.symbol}} {{cartInfo.finalPrice}}
                </span>
              </div>

              <div class="row" v-if="localCurrencyName != 'EUR'" style="margin-top: 4px; color: #999; font-size: 13px;">
                <span class="label">
                  Approx. {{ localCurrencyName }}
                </span>
                <span class="value">
                  {{ formatPrice(cartInfo.finalPrice) }}
                </span>
              </div>

            </div>
          </div>
        </div>
        <div class="cart-footer defaulthide ui-footer ui-footer-fixed slideup ui-bar-inherit" data-position="fixed" data-role="footer" role="contentinfo">
          <div class="checkout-button-container">
            <div class="orange-button checkout-button touchable" @click="checkout">
              {{checkoutText}}
            </div>
          </div>
          <div class="cart-footer-cover default-hide" style="display: none;">
          </div>
        </div>
      </div>
      <div class="cart-empty-view" v-show="!cartInfo.cartItems.length">
        <div class="message">
          {{ $t('cartisempty') }}
        </div>
        <router-link class="blue-button start-shopping-button touchable default-hide" to="/" tag="div">
          {{ $t('continueshopping') }}
        </router-link>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/css/cart.css';
  .mobile-text-dialog .dialog-header .dialog-close-button {
      display: block;
      width: 44px;
      height: 44px;
      background-size: 44px 44px;
      background-image: url("../assets/images/ic_nav_x.png?v=13")
  }
  .mobile-cart-item .item-stripe .stripe-tag {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-size: 15px 15px;
      background-image: url("../assets/images/promotag.png?v=13");
      background-position: center;
      background-repeat: no-repeat;
      vertical-align: middle
  }
  .mobile-cart-header .mobile-cart-header-table .change-arrow {
      background: url("../assets/images/cart-right-chevron.png?v=13") no-repeat;
      background-size: 8px 12px;
      width: 8px;
      height: 12px;
      display: inline-block;
      margin-left: 4px
  }
  .mobile-cart-change-billing .mobile-cart-change-billing-table .arrow-cell .change-arrow {
      background: url("../assets/images/dark_arrow.png?v=13") no-repeat;
      background-size: 9px 13px;
      width: 9px;
      height: 13px;
      display: inline-block
  }
  .mobile-cart-change-shipping .mobile-cart-change-shipping-table .arrow-cell .change-arrow {
      background: url("../assets/images/dark_arrow.png?v=13") no-repeat;
      background-size: 9px 13px;
      width: 9px;
      height: 13px;
      display: inline-block
  }
  .cart-footer.ui-footer #apple-pay-button-v2 {
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
  #cartPage {
    margin-top: 64px;
  }
  .mobile-cart-page .cart-item-content {
    padding-top: 16px;
    padding-bottom: 60px;
  }
  .mobile-cart-item .item-info {
      width: calc(100% - 195px);
  }
  .ui-header-fixed, .ui-footer-fixed {
      left: 0;
      right: 0;
      width: 100%;
      position: fixed;
      z-index: 1000;
      bottom: -1px;
      padding-bottom: 1px;
  }
  .shipment-info {
    border: 1px solid #f3f8f8;
    padding: 16px;
    padding-bottom: 0;
    .header {
      font-weight: bold;
      text-align: center;
      font-size: 18px;
      padding-bottom: 16px;
    }
    .info-item {
      display: flex;
      align-items: center;
      padding-top: 16px;
      padding-bottom: 16px;
      .info-item-name {
        flex: 1;
        font-size: 14px;
        color: #3c4646;
      }
      .info-item-result {
        color: #b0bfbf;
      }
    }
    .paypal {
      background-image: url(../assets/images/paypal.png?v=13);
      width: 30px;
      height: 19px;
      background-size: 30px 19px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;
    }
  }
</style>

<script>
import MyHeader from '../components/headerCart'
import Bus from '../_common/js/bus'
import qs from 'qs'

export default {

  name: 'search',
  components: { MyHeader },
  data () {
    return {
      cartInfo: {
        cartItems: [],
        totalProductPrice: ''
      },
      activeCartIndex: '', // 当前正在操作的产品
      showDialog: false, // 展现弹窗
      hasAddress: null, // 有地址，有付款方式；无地址，无付款方式；有地址，无付款方式；无地址，有付款方式
      address: {}, // 收货地址
      paymethod: '',
      stripeToken: '', // 信用卡支付的token
      errorText: '',
      showLoading: false,
      promCode: '',
      localCurrencyName: '',
      checkoutText: '' // 有checkout placeOrder 2种
    }
  },
  created () {
    this.fetch()
    this.getAddress()
    this.localCurrencyName = localStorage.getItem('currency') || 'EUR';
  },
  mounted () {
    const tg = document.querySelector('.telegram-btn');
    const wa = document.querySelector('.whatsapp-btn');
    if (tg) tg.style.visibility = 'hidden';
    if (wa) wa.style.visibility = 'hidden';
  },
  // 【新增这个方法】离开时还原
  beforeDestroy () {
    const tg = document.querySelector('.telegram-btn');
    const wa = document.querySelector('.whatsapp-btn');
    if (tg) tg.style.visibility = 'visible';
    if (wa) wa.style.visibility = 'visible';
  },
  methods: {
    goDetail (productId) { // 访问物流详情
      this.$router.push({path: `/product/${productId}`})
    },
    formatPrice(basePrice) {
      if (basePrice === null || basePrice === undefined) return '';

      const currency = localStorage.getItem('currency') || 'EUR';
      const rate = parseFloat(localStorage.getItem('currencyRate')) || 1;

      let finalPrice = basePrice * rate;

      // 非欧元强制 .99 结尾
      if (currency !== 'EUR') {
        finalPrice = Math.floor(finalPrice) + 0.99;
      }

      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(finalPrice);
    },
    editQuantity (cart, type) { // 改成购物车某商品数量
      let quantity;
      if (type === 'add') {
        quantity = cart.quantity + 1
      } else {
        quantity = cart.quantity - 1
      }
      this.changeQuantity(cart, quantity)
    },
    calProm () {
      this.showLoading = true
      let data = {
        promCode: this.promCode,
        price: this.cartInfo.totalProductPrice
      }
      this.$axios.post(this.ApiList.applyProm, qs.stringify(data))
        .then((res) => {
          this.showLoading = false
          if (res.success) {
            this.errorText = ''
            this.cartInfo.finalPrice = res.data.after
          } else {
            this.errorText = res.msg
          }
        })
        .catch((err) => {
          this.showLoading = false
          this.errorText = err.data.msg
          console.log(err)
        })
    },
    fetch () {
      // 获取购物车
      this.$axios(this.ApiList.cart)
        .then((response) => {
          this.cartInfo = response.data.carts
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAddress () {
      // 获取送货地址
      this.$axios(this.ApiList.shippingAddress)
        .then((response) => {
          if (response.data.address.firstName) {
            this.hasAddress = true
            this.address = response.data.address
          } else {
            this.hasAddress = false
          }
          if(response.data.paymethod){
            this.paymethod = response.data.paymethod
          }
          if (response.data.stripeToken) {
            this.stripeToken = response.data.stripeToken
          }
          this.checkoutText = this.$t("placeorder")
        })
        .catch((err) => {
          console.log(err)
        })
    },
    checkout () { // 下单
      if (!this.hasAddress) {
         this.$router.push({path: '/shipping'})
      } else if (!this.paymethod) {
         this.$router.push({path: '/payment'})
      } else if(this.paymethod === 'CreditCard' && !this.stripeToken) {
         this.$router.push({path: '/payment'})
      } else {
         this.$router.push({name: 'pay-loading', params: {paymethod: this.paymethod, stripeToken: this.stripeToken}})
      }
    },
    changeQuantity (cart, quantity) { // 改变商品数量
      if (quantity === 0) {
        // this.$messagebox({
        //          message: `<img src="https://contestimg.wish.com/api/image/fetch?contest_id=5708c53637c447219b14ed6f&w=160&h=160&s=10" class="remove-img"/> <div class="remove-text">Remove this item from cart?</div>`,
        //          confirmButtonText: 'Remove Item',
        //          showCancelButton: true,
        //          cancelButtonText: 'cancel'
        this.$messagebox({
          message: `<img src="${cart.image}" class="remove-img"/> <div class="remove-text">{{ $t('removeItemTips') }}</div>`,
          confirmButtonText: this.$t("removeItem"),
          showCancelButton: true,
          cancelButtonText: this.$t("cancel")
        }).then(action => {
          if (action === 'confirm') {
            Bus.$emit('show-circle-loading', 'show')
            let data = {
              cartItemId: cart.id
            }
            this.$axios.post(this.ApiList.cartDelete, qs.stringify(data))
              .then((res) => {
                Bus.$emit('show-circle-loading', 'hide')
                if (res.data.carts) {
                  this.cartInfo = res.data.carts
                } else {
                  this.cartInfo = {
                    cartItems: [],
                    totalProductPrice: ''
                  }
                }
              })
              .catch((err) => {
                Bus.$emit('show-circle-loading', 'hide')
                console.log(err)
              })
          }
        })
        return
      }
      Bus.$emit('show-circle-loading', 'show')
      let data = [{
        'id': cart.id,
        'quantity': quantity,
        'cartCode': cart.cartCode
      }]
      let params = {
        shoppingCartItems: JSON.stringify(data)
      }
      this.$axios.post(this.ApiList.cartUpdate, qs.stringify(params))
        .then((res) => {
          Bus.$emit('show-circle-loading', 'hide')
          this.cartInfo = res.data.carts
          console.log(this.cartInfo)
        })
        .catch((err) => {
          Bus.$emit('show-circle-loading', 'hide')
          console.log(err)
        })

    }
  }
}
</script>

