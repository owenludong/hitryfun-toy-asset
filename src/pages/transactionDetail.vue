<template>
  <div>
    <my-header></my-header>
    <div id="transactionDetailPage">
      <div class="mobile-transaction-detail-page mobile-transaction-detail">
        <div class="transaction-complete" v-if="$router.currentRoute.name === 'order-confirm'">
         <div class="page-title">
           Order Confirmed!
         </div>
         <div class="email-container">
          <div class="email-title">
           A confirmation email has been sent to:
          </div>
          <div class="email-text">
            {{account.email}}
          </div>
          <div class="change-email">
           <router-link class="change-email-link" to="/settings/change-email"> Click here to change your email </router-link>
          </div>
         </div>
         <div class="payment-subtitle">
           You can track your order at any time by visiting the Order History page.
         </div>
         <router-link class="blue-button contact-button" to="/" tag="a"> Continue Shopping </router-link>
        </div>
        <div v-if="$router.currentRoute.name === 'transactionDetail'">
          <div class="page-title">
            Order Details
          </div>
          <div class="page-order-line-one">
            Order Placed: {{orderDetail.createDate | orderDate}}
          </div>
          <div class="page-order-line-two">
            Order #: {{orderDetail.orderNo}}
          </div>
        </div>
        <!-- <div class="page-title">Order Details</div>
        <div class="page-order-line-one">Order Placed: {{orderDetail.createDate | orderDate}}</div>
        <div class="page-order-line-two">Order #: {{orderDetail.id}}</div> -->
        <div class="detail-content">
          <table class="ship-bill-table">
            <tbody>
              <tr>
                <td class="shipping-section">
                  <div class="shipping-title">
                    Shipping Address:
                  </div>
                  <div class="shipping-address">
                    {{orderDetail.delivery.firstName}} {{orderDetail.delivery.lastName}}
                    <br/>
                    {{orderDetail.delivery.address}}
                    <br/>
                    {{orderDetail.delivery.city}}，{{orderDetail.delivery.stateProvince}} {{orderDetail.delivery.postalCode}}
                    <br/>
                    {{orderDetail.delivery.country}}
                  </div>
                </td>
              </tr>
              <tr>
                <td class="billing-section">
                  <div class="billing-title">
                    Payment Method:
                  </div>
                  <div class="billing-text">
                    <div>{{orderDetail.paymentType}}</div>
                    <!-- <div>
                      Credit Card
                    </div>
                    <div>
                      Discover: **** 9666
                    </div>
                    <div>
                      Zip/Postal Code: 77001
                    </div> -->
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="question-placeholder">
            <div class="help-title">
              Need Help?
            </div>
            Find the item you need help with and tap on Contact Support.
          </div>
          <div class="page-subtitle">Items</div>
          <div class="item-list">
            <div class="mobile-transaction-expanded-row-item" v-for="product in orderDetail.products">
              <table class="item-info">
                <tbody>
                  <tr>
                    <td class="product-image-container">
                      <img class="product-image" :src="product.image" @click="showDetail(product.product.id)">
                      </img>
                    </td>
                    <td class="product-details">
                      <table class="ellipsized-table">
                        <tbody>
                          <tr>
                            <td class="ellipsized-content product-title-text">
                              {{product.name}}
                            </td>
                          </tr>
                          <tr>
                            <td class="ellipsized-content product-sub-text">
                              Quantity: {{product.quantity}}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="order-information-header">
                        <div class="order-state main-color">
                          {{orderDetail.orderStatus}}
                        </div>
                        <div class="order-tracking-number" v-show="orderDetail.orderStatus === 'delivered' || orderDetail.orderStatus === 'shipped'">
                          Tracking #: {{orderDetail.trackNo}}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="price-area">
                <div class="price-text">
                  {{product.product.symbol}}{{product.product.productPrice}}
                </div>
                <div class="price-subline">
                  <div class="price-subline" v-show="product.size || product.color">
                    <span v-show="product.size">Size:</span>
                    <span class="value">{{product.size}}</span><span v-show="product.color">, Color:</span>
                    <span class="value">{{product.color}}</span>
                  </div>
                </div>
              </div>
              <div class="track-button blue-button touchable" @click="packageTrack(orderDetail.id)" v-if="orderDetail.trackNo && orderDetail.orderStatus === 'shipped' || orderDetail.orderStatus === 'delivered'">
                Where's My Package?
              </div>
              <div class="blue-button contact-button" @click="goTo('/contact-us')">
                Contact Support
              </div>
            </div>
          </div>

          <div class="page-subtitle">Summary</div>
          <div class="summary-section">
            <table class="summary-table">
              <tbody>
                <tr class=" ">
                  <td class="label-col">
                    Item Total:
                  </td>
                  <td class="value-col">
                    {{orderDetail.symbol}}{{orderDetail.productPrice}}
                  </td>
                </tr>
                <tr class=" ">
                  <td class="label-col">
                    Shipping:
                  </td>
                  <!--<td class="value-col">
                    {{orderDetail.symbol}}{{orderDetail.shippingPrice}}
                  </td>-->
                  <td class="value-col">
                    Free Shipping
                  </td>
                </tr>
                <tr class=" order-total ">
                  <td class="label-col">
                    Order Total:
                  </td>
                  <td class="value-col">
                    {{orderDetail.symbol}}{{orderDetail.totalPrice}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="refund-placeholder"></div>
          <div>
            <table class="mobile-guarantee">
              <tbody>
                <tr>
                  <!--
                  <td class="guarantee-seal-container">
                    <img class="guarantee-seal" src="../assets/images/ic_guarantee_wish.png">
                    </img>
                  </td>-->
                  <td class="guarantee-text">
                    We have your back! You never have to worry when you shop on Hitryfun.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <router-link class="gray-button all-orders-button touchable" to="/transaction" tag="div">
            View All Orders
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  @import '../assets/css/transactionDetail.css';
  @import '../assets/css/transaction.css';
  a {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
  }
  #transactionDetailPage {
    margin-top: 64px;
    color: #777;
    line-height: 1.3;
  }
  .contact-button {
    margin-top: 10px;
    display: block;
    padding: 10px;
    font-size: 14px;
    font-weight: normal;
  }
  .transaction-complete {
    padding: 10px;
  }
  .transaction-complete .page-title {
      font-size: 18px;
      text-align: center;
      padding-bottom: 12px
  }

  .transaction-complete .email-container {
      border: 1px solid #dddddd;
      font-size: 13px;
      padding: 12px;
      background: #f3f3f3
  }

  .transaction-complete .email-container .email-title {
      text-align: center
  }

  .transaction-complete .email-container .email-text {
      font-weight: bold;
      text-align: center;
      margin-top: 6px
  }

  .transaction-complete .email-container .change-email {
      text-align: center;
      margin-top: 6px
  }

  .transaction-complete .email-container .change-email-link {
      color: #7dbde5;
      font-weight: normal
  }

  .transaction-complete .payment-subtitle {
      font-size: 13px;
      text-align: center;
      padding: 12px
  }

  .transaction-complete .page-subtitle {
      font-size: 15px;
      text-align: center;
      padding: 12px
  }

  .transaction-complete .declined-section {
      border: 1px solid #f9e3b7;
      background: #fcf6dd;
      padding: 6px;
      font-size: 12px
  }

  .transaction-complete .declined-section .declined-item {
      position: relative;
      margin-top: 10px
  }

  .transaction-complete .declined-section .declined-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 20px 0px;
      font-weight: bold
  }

  .transaction-complete .declined-section .declined-image {
      width: 50px;
      height: 50px;
      margin-right: 6px;
      float: left
  }

  .transaction-complete .declined-section .cropped-declined-image {
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
      background-position: center center;
      width: 50px;
      height: 50px;
      margin-right: 6px;
      float: left
  }

  .transaction-complete .shipping-section {
      margin-top: 10px;
      border: 1px solid #dddddd;
      padding: 6px 6px;
      font-size: 13px;
      width: 50%;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box
  }

  .transaction-complete .shipping-section .shipping-title {
      font-weight: bold;
      margin-top: 2px;
      margin-bottom: 8px
  }

  .transaction-complete .shipping-section .shipping-address {
      line-height: 16px
  }

  .transaction-complete .change-email {
      color: #7dbde5
  }

  .transaction-complete .question-placeholder {
      border: 1px solid #dddddd;
      font-size: 13px;
      padding: 6px;
      background: #f3f3f3;
      margin-top: 15px;
      text-align: center
  }

  .transaction-complete .question-placeholder .help-title {
      font-size: 14px;
      font-weight: bold;
      margin-top: 6px;
      margin-bottom: 8px;
      text-align: center
  }

  .transaction-complete .ship-bill-table {
      width: 100%
  }

  .transaction-complete .billing-section {
      border-top: 1px solid #dddddd;
      border-right: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      padding: 6px 6px;
      font-size: 13px;
      width: 50%;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box
  }

  .transaction-complete .billing-section .billing-title {
      font-weight: bold;
      margin-top: 2px;
      margin-bottom: 8px
  }

  .transaction-complete .billing-section .billing-text {
      line-height: 16px
  }

  .transaction-complete .summary-section {
      border: 1px solid #dddddd;
      padding: 3px 6px
  }

  .transaction-complete .summary-section .summary-table {
      width: 100%;
      font-size: 13px
  }

  .transaction-complete .summary-section .summary-table .label-col {
      white-space: nowrap;
      padding: 6px 0px
  }

  .transaction-complete .summary-section .summary-table .value-col {
      width: 100%;
      text-align: right;
      padding: 6px 0px
  }

  .transaction-complete .summary-section .summary-table .value-col .currency-subscript {
      font-size: 9px;
      margin-left: 3px
  }

  .transaction-complete .summary-section .summary-table .order-total {
      font-weight: bold;
      font-size: 14px
  }

  .transaction-complete .summary-section .summary-table .credit {
      color: #EA9C51
  }

  .transaction-complete .flat-button {
      display: block;
      padding: 12px 0px;
      width: 400px;
      font-size: 13px;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box
  }

  .transaction-complete .all-orders-button {
      margin: 15px auto 0 auto
  }

  .transaction-complete .print-boleto-button,.transaction-complete .print-oxxo-button,.transaction-complete .continue-shopping-button {
      margin: 10px auto 20px auto
  }

  .transaction-complete .error-view {
      margin: 20px auto;
      text-align: center;
      font-size: 14px
  }

  .transaction-complete .error-view .error-message {
      margin-bottom: 20px
  }

  .transaction-complete .error-view .back-to-cart-button {
      padding: 12px 0px;
      width: 250px;
      margin: 0 auto;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box
  }
  .mobile-transaction-expanded-row .transaction-separator {
      /*background-image: url('../asstes/images/zigzag.png');*/
      background-repeat: repeat-x;
      background-size: 18px 10px;
      text-align: center;
      height: 10px
  }
</style>

<script>
import MyHeader from '../components/header'

export default {

  name: 'transactionDetail',
  components: { MyHeader },
  data () {
    return {
      transactionId: '',
      emailAddress: '',
      orderDetail: { // 订单详情
        delivery: {}
      }
    }
  },
  created () {
    this.transactionId = this.$route.params.tid
    this.fetch()
  },
  methods: {
    fetch () {
      this.$axios(this.ApiList.orderDetail + `${this.transactionId}`)
        .then((res) => {
          console.log(res)
          this.orderDetail = res.data.order
          this.emailAddress = res.data.email
          console.log('this.orderDetail')
          console.log(this.orderDetail)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    showDetail (proId) { // 展示商品详情
      this.$router.push({path: `/product/${proId}`})
    },
    packageTrack (orderId) { // 物流详情
      this.$router.push({path: `/transaction/track/${orderId}`})
    },
    goTo (path) {
      this.$router.push({path: path})
    },
  },
  computed: {
    account () { // 登录的用户名
      return this.$store.getters.getAccount
    }
  }
}
</script>

