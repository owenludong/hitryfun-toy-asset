<template>
  <div>
    <my-header></my-header>
    <div class="mobile-transaction-tracking" id="trackPage">
      <div class="page-title">
        Track Package
      </div>
      <table class="item-info" v-for="product in orderDetail.products">
        <tbody>
          <tr>
            <td class="product-image-container">
              <img class="product-image" :src="product.image" width="150" height="200" @click="showDetail(product.product.id)"/>
            </td>
            <td class="product-details">
              <table class="ellipsized-table">
                <tbody>
                  <tr>
                    <td class="ellipsized-content product-title-text">
                      {{product.name}}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="ellipsized-table">
                <tbody>
                  <!-- <tr>
                    <td class="ellipsized-content product-sub-text">
                      Store: guangzhou yinmen co.,ltd
                    </td>
                  </tr> -->
                </tbody>
              </table>
              <table class="ellipsized-table">
                <tbody>
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
                <div class="order-details">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="tracking-header">
        <tbody>
          <tr>
            <td class="header-text">
              <div class="tracking-line">
                Tracking #:  {{orderDetail.trackNo}}
              </div>
            </td>
            <!-- <td class="header-link">
              <span class="header-link-text">
                Carrier Site
              </span>
            </td> -->
          </tr>
        </tbody>
      </table>
      <!-- <div class="loading-tracking-box" style="display: none;">
        Loading Tracking Details...
      </div> -->
      <div class="tracking-history-box" id="YQContainer">
      </div>
      <div class="question-box">
        <div class="have-questions">
          Have Questions?
        </div>
        If you still have questions after reading the description and information above, click here to contact support.
      </div>
      <!--
      <div class="guarantee-placeholder">
        <div class="guarantee">
          <table class="guarantee-table mobile-guarantee">
            <tbody>
              <tr>
                
                <td class="guarantee-seal-container">
                  <img class="guarantee-seal" src="http://www.wish.com/static/img/ic_guarantee_wish.png">
                  </img>
                </td>
                <td class="guarantee-text">
                  We have your back! You never have to worry when you shop on Hitryfun.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>-->
      <div class="gray-button order-details-button touchable" @click="viewOrderDetail">
        View Order Details
      </div>
      <router-link class="gray-button all-orders-button touchable" tag="div" to="/transaction">
        View All Orders
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/css/track';
  #trackPage {
    margin-top: 64px;
    color: #777;
    line-height: 1.3;
  }
</style>

<script>
import MyHeader from '../components/header'

export default {

  name: 'track',
  components: { MyHeader },
  data () {
    return {
      tid: '',
      transactionId: '',
      // tid: '', // 单号
      hasTid: false, // 是否获取到了tid的值
      orderDetail: {} // 订单详情
    }
  },
  created () {
    this.transactionId = this.$route.params.id
    this.fetch()
  },
  watch: {
    hasTid (val, oldVal) {
      console.log(val)
      if (val) {
        this.build17Info()
      }
    }
  },
  methods: {
    fetch () {
      this.$axios(this.ApiList.orderDetail + `${this.transactionId}`)
        .then((res) => {
          this.orderDetail = res.data.order
          this.tid = this.orderDetail.trackNo
          this.hasTid = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    viewOrderDetail () {
      this.$router.push({path: `/transaction/${this.transactionId}`})
    },
    build17Info () {
      let YQV5 = window.YQV5
      YQV5.trackSingle({
        // 必须，指定承载内容的容器ID。
        YQ_ContainerId: 'YQContainer',
        // 可选，指定查询结果高度，最大为800px，默认为560px。
        YQ_Height: 560,
        // 可选，指定运输商，默认为自动识别。
        YQ_Fc: '0',
        // 可选，指定UI语言，默认根据浏览器自动识别。
        YQ_Lang: 'en',
        // 必须，指定要查询的单号。
        YQ_Num: this.tid
      })
    },
    showDetail (proId) { // 展示商品详情
      this.$router.push({path: `/product/${proId}`})
    }
  }
}
</script>

