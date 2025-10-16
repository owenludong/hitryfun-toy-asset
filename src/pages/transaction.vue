<template>
  <div>
    <my-header></my-header>
    <div id="transactionPage" class="mobile-transaction-list-page">
      <div class="page-title">
        Order History
      </div>
      <!--
      <div class="guarantee-placeholder">
        <table class="mobile-guarantee">
          <tbody>
            <tr>
              
              <td class="guarantee-seal-container"><img class="guarantee-seal" src="../assets/images/ic_guarantee_wish.png" /></td>
              <td class="guarantee-text">We have your back! You never have to worry when you shop on Hitryfun.</td>
            </tr>
          </tbody>
        </table>
      </div>-->
      <div class="empty-view" v-show="!pagination.total">
        <div class="empty-message">
          You haven't made any orders.
        </div>
        <router-link class="gray-button close-button touchable" to="/" tag="div">
          Shop Now
        </router-link>
      </div>
      <div class="transaction-list" v-show="pagination.total">
        <div class="mobile-transaction-expanded-row" v-for="order in orders">
          <div class="transaction-separator">
          </div>
          <div class="transaction-content-wrapper">
            <table class="transaction-header">
              <tbody>
                <tr>
                  <td class="header-text-cell">
                    <div class="header-text-line-one">
                      Order Placed:
                    </div>
                    {{order.createDate | orderDate}}
                  </td>
                  <td class="detail-button-cell">
                    <div class="detail-button blue-button" @click="viewDetail(order.id)">
                      Details
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="transaction-content-separator">
            </div>
            <div class="refund-placeholder">
            </div>
            <div class="item-list">
              <div v-for="product in order.products">
                <div class="mobile-transaction-expanded-row-item">
                  <table class="item-info">
                    <tbody>
                      <tr>
                        <td class="product-image-container">
                          <img class="product-image" :src="product.image" @click="showDetail(product.product.id)"/>
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
                              {{order.orderStatus}}
                            </div>
                            <div class="order-tracking-number" v-show="order.orderStatus === 'delivered' || order.orderStatus === 'shipped'">
                              Tracking #: {{order.trackNo}}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="contact-button blue-button" @click="goTo('/contact-us')">
                    Contact Support
                  </div>
                  <div class="blue-button return-center-button" @click="packageTrack(order.id)" v-if="order.orderStatus === 'delivered' || order.orderStatus === 'shipped'">
                     Where's My Package?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="mobile-transaction-expanded-row">
          <div class="transaction-separator">
          </div>
          <div class="transaction-content-wrapper">
            <table class="transaction-header">
              <tbody>
                <tr>
                  <td class="header-text-cell">
                    <div class="header-text-line-one">
                      Order Placed:
                    </div>
                    Nov 2, 2017
                  </td>
                  <td class="detail-button-cell">
                    <div class="detail-button blue-button touchable">
                      Details
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="transaction-content-separator">
            </div>
            <div class="refund-placeholder">
            </div>
            <div class="item-list">
              <div class="mobile-transaction-expanded-row-item">
                <table class="item-info">
                  <tbody>
                    <tr>
                      <td class="product-image-container">
                        <img class="product-image" src="https://contestimg.wish.com/api/image/fetch?contest_id=591598e9bc42212e22635154&w=150&h=200&s=1" />
                      </td>
                      <td class="product-details">
                        <table class="ellipsized-table">
                          <tbody>
                            <tr>
                              <td class="ellipsized-content product-title-text">S~XXXXXL Plus Size Women's Fashion Chiffon Shirt V-neck Long Sleeve Loose Tops T Shirt</td>
                            </tr>
                            <tr>
                              <td class="ellipsized-content product-sub-text">Store: guangzhou yinmen co.,ltd</td>
                            </tr>
                            <tr>
                              <td class="ellipsized-content product-sub-text">Quantity: 1</td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="order-information-header">
                          <div class="order-state main-color">Arriving by Dec 18, 2017</div>
                          <div class="order-details">
                          </div>
                          <div class="order-tracking-number">Tracking #: 83670603769</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="order-flow-box">
                  <div class="order-flow-title">
                    Your Order
                  </div>
                  <table class="order-flow">
                    <tbody>
                      <tr>
                      </tr>
                      <tr class="order-flow-overall">
                        <td class="order-progress-spacer" style="width: 30%;">
                        </td>
                        <td>
                          <table class="order-progress-text">
                            <tbody>
                              <tr class="order-processing">
                                <td class="blue-progress-bar-cell">
                                  <div class="blue-progress-bar main-color-background" style="height: 135px;">
                                  </div>
                                  <div class="tracking-dot">
                                  </div>
                                  <div class="gray-progress-bar-background">
                                  </div>
                                </td>
                                <td>
                                  <span>Processing</span>
                                </td>
                              </tr>
                              <tr class="order-shipping">
                                <td>
                                  <div class="tracking-dot">
                                  </div>
                                </td>
                                <td>
                                  <span>Shipping</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="order-process-deliver-divider">
                                  </div>
                                </td>
                              </tr>
                              <tr class="order-almost">
                                <td>
                                  <div class="tracking-dot">
                                  </div>
                                </td>
                                <td>
                                  <span style="font-weight: bold;">
                                    Almost there!
                                  </span>
                                </td>
                              </tr>
                              <tr class="order-arriving">
                                <td>
                                  <div class="tracking-dot">
                                  </div>
                                </td>
                                <td class="arrival-message main-color">
                                  Arriving by Dec 18, 2017
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td class="order-progress-spacer" style="width: 10%;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="sms-div">
                  <div class="success-msg">
                    You will receive text notifications about your delivery and promotions.*
                  </div>
                </div>
                <div class="track-button blue-button touchable">
                  Where's My Package?
                </div>
                <div class="blue-button touchable return-center-button">
                  Continue Return Process
                </div>
              </div>
              <div class="mobile-transaction-expanded-row-item">
                <table class="item-info">
                  <tbody>
                    <tr>
                      <td class="product-image-container">
                        <img class="product-image" src="https://contestimg.wish.com/api/image/fetch?contest_id=591598e9bc42212e22635154&w=150&h=200&s=2" />
                      </td>
                      <td class="product-details">
                        <table class="ellipsized-table">
                          <tbody>
                            <tr>
                              <td class="ellipsized-content product-title-text">S~XXXXXL Plus Size Women's Fashion Chiffon Shirt V-neck Long Sleeve Loose Tops T Shirt</td>
                            </tr>
                            <tr>
                              <td class="ellipsized-content product-sub-text">Store: guangzhou yinmen co.,ltd</td>
                            </tr>
                            <tr>
                              <td class="ellipsized-content product-sub-text">Quantity: 1</td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="order-information-header">
                          <div class="order-state main-color">Cancelled</div>
                          <div class="order-cancelled-msg">
                            Your order was cancelled.
                            <br/>
                            Depending on your card processor, the charge may be removed from your statement entirely. If you have any questions, please contact your card issuer for further information.
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="sms-div">
                </div>
                <div class="blue-button touchable contact-button" @click="goTo('/contact-us')">
                  Contact Support
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="mobile-page-state-loading" v-show="isLoading">
          <div class="page-state-loading-icon"></div>
          Loading
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../assets/css/transaction.css';
  .mobile-transaction-expanded-row .transaction-separator {
      background-image: url("../assets/images/zigzag.png?v=13");
      background-repeat: repeat-x;
      background-size: 18px 10px;
      text-align: center;
      height: 10px
  }
  #transactionPage {
    margin-top: 64px;
    color: #777;
  }
  .mobile-page-state-loading, .mobile-page-state-default-loading, .mobile-page-state-error, .mobile-page-state-no-items {
      /*position: absolute;*/
      position: relative;
      top: 50%;
      left: 50%;
      width: 200px;
      padding: 15px;
      margin-left: -100px;
      margin-top: -25px;
      font-size: 14px;
      text-align: center;
      color: #999;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  .mobile-page-state-loading .page-state-loading-icon, .mobile-page-state-default-loading .page-state-loading-icon, .mobile-page-state-error .page-state-loading-icon, .mobile-page-state-no-items .page-state-loading-icon {
      background-image: url(../assets/images/ajax_loader_small.gif?v=13);
      background-size: 32px 32px;
      background-position: center top;
      background-repeat: no-repeat;
      width: 100%;
      height: 32px;
      margin-bottom: 15px;
  }

</style>

<script>
import MyHeader from '../components/header'

export default {

  name: 'transaction',
  components: { MyHeader },
  data () {
    return {
      pagination: {
        params: {
          start: 1, // 分页
          max: 5 // pgageSize
        },
        total: null
      },
      orders: [], // 订单列表
      isLoading: false, // 是否在加载
      noMoreProducts: false // 是否没有更多的产品
    }
  },
  created () {
    this.fetch()
  },
  mounted () {
    window.addEventListener('scroll', this.loadMore)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.loadMore)  // 消除滚动事件
  },
  methods: {
    fetch () {
      this.isLoading = true
      this.$axios(this.ApiList.orderList, {
        params: this.pagination.params
      })
        .then((res) => {
          let data = res.data
          this.isLoading = false
          this.orders = this.orders.concat(data.orders)
          this.pagination.total = data.count
          if (this.orders.length >= this.pagination.total) {
            this.noMoreProducts = true
          } else {
            this.pagination.params.start++
          }
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
        })
    },
    loadMore () { // 滚动加载
      let clientHeight = document.documentElement.clientHeight // 视口宽度
      let scrollTop = document.documentElement.scrollTop
      let scrollHeight = document.documentElement.scrollHeight
      if (scrollHeight - (clientHeight + scrollTop) < 200 && !this.isLoading && !this.noMoreProducts) {
        this.fetch()
      }
    },
    viewDetail (orderId) {
      this.$router.push({path: `/transaction/${orderId}`})
    },
    packageTrack (trackId) {
      this.$router.push({path: `/transaction/track/${trackId}`})
    },
    goTo (path) {
      this.$router.push({path: path})
    },
    showDetail (proId) { // 展示商品详情
      this.$router.push({path: `/product/${proId}`})
    }
  }
}
</script>

