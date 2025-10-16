<template>
    <div class="index-page">
      <my-header></my-header>
      <ul class="category-nav" v-show="isIndexPage">
        <!-- <li @click="searchByCategory()" class="category-name">ChrisTmas Decoration</li> -->
        <li v-for="item in categories" @click="searchByCategory(item, $event)" :class="{selected: currentCategory === item.name}" class="category-name">
        {{item.name}}
        <img src="../assets/images/hot32.png" width="20px" height="20px" v-show="item.showHot">
        </li>
      </ul>
      <!--<div class="promo-container">
         <img src="https://www.hitryfun.com/logo/header-adv-banner.jpg">
      </div>-->
      <iscroll-view class="scroll-view" ref="iscroll" @pullUp="pullUp" @pullDown="pullDown"  :options="scrollOptions">

        <!-- 视频介绍区域 - 仅在Popular类目显示 -->
       <div class="video-introduction" v-show="isIndexPage && currentCategory === 'Popular'">
         <div class="video-container">
           <video
             class="intro-video"
             controls
             muted
             playsinline
             poster="https://www.hitryfun.com/productImg/banner2.png"
             preload="metadata"
           >
             <source src="https://www.hitryfun.com/productImg/intro.mp4" type="video/mp4">
             Your browser does not support the video tag.
           </video>
         </div>
       </div>


        <div class="mobile-page-content ui-content" data-role="content" role="main">
          <div class="promo-container" v-show="showAdBanner">
           <img style="width:100%; height:80px;" src="https://www.hitryfun.com/logo/11-ad-mobile.jpg">
          </div>
          <div id="freegift-description" v-show="showFreeNotice">
            <img src="../assets/images/notice.png" style="left:10%; width:20px; height:20px; position:fixed"/>
            <span style="text-align:center">
               <p>The products here are not sold separately, <p/>
               <p>Choose any one when your order amount more than 11.11€.</p>
            </span>
          </div>
          <div class="mobile-page-state-content" v-if="products.length !== 0">
            <div class="mobile-feed-page">
              <div class="mobile-feed-container-show">
              <!--
               <div class="mobile-feed-item">
                <div class="mobile-feed-item-container-show" @click="showKR()">
                    <div class="feed-image-container-show" :style="{width: columnWidth, height: columnWidth}">
                      <div class="mobile-feed-item-image-show" style="background-size:100%" :style="{width: columnWidth, height: columnWidth,backgroundImage: `url('https://www.hitryfun.com/logo/kr_ad.gif')`}">
                      </div>
                      <div class="urgency-inventory-show">ad</div>
                    </div>
                    <div class="feed-item-details-section-show">
                      <div class="product-prices-show">
                        <div class="actual-price-show">Kissy Rose</div>
                      </div>
                      <div class="badge-details-show">
                        <img class="small-badge-show" src="https://www.hitryfun.com/logo/rec3.png" />
                      </div>
                      <div class="feed-number-bought-show">
                        Fashion Jewelry & Watches
                      </div>
                    </div>
                  </div>
                 </div>
               -->

                <div class="mobile-feed-item" v-for="product in products" @click="showDetail(product.id)">
                  <div class="mobile-feed-item-container-show">
                    <div class="feed-image-container-show" :style="{width: columnWidth, height: columnWidth}">
                      <div class="mobile-feed-item-image-show" :style="{width: columnWidth, height: columnWidth,backgroundImage: `url(${product.mainImage})`}">
                      </div>
                      <div class="discount-banner-show" v-show="product.discountRate && currentCategoryId === 301"> -{{product.discountRate}}% </div>
                      <!--<div class="urgency-inventory-show">Almost Gone!</div>-->
                    </div>
                    <div class="feed-item-details-section-show">
                      <div class="product-prices-show">
                        <div class="actual-price-show">{{product.symbol}}{{product.productPrice}}</div>
                        <div class="crossed-price-show" v-show="product.originalPrice">{{product.symbol}}{{product.originalPrice}}</div>
                      </div>
                      <div class="badge-details-show" v-show="product.rank > 100">
                        <img class="small-badge-show" src="https://www.hitryfun.com/logo/recommend.png" />
                      </div>
                      <!--
                      <div class="feed-number-bought-show">
                        {{product.rank}}+ bought this
                      </div>
                      -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="mobile-infinite-scroll-footer">
                <div class="footer-loading-view" v-show="isScrollLoading">
                  <img class="footer-loading-spinner" src="../assets/images/ajax_loader_small.gif?v=13" />
                  Loading
                </div>
                <!-- <div class="footer-click-more-view">Click to load more...</div> -->
                <div class="footer-no-more-view" v-show="noMoreProducts">No more items</div>
              </div>
            </div>
          </div>
          <div class="mobile-page-state-loading" style="display: none;">
            <div class="page-state-loading-icon">
            </div>
            Loading
          </div>
          <!-- 首次加载没有找到产品 -->
          <div class="mobile-page-state-no-items" v-if="products.length === 0 && !isFirstLoading">
            No products found
          </div>
          <div class="mobile-page-state-error default-hide" style="display: none;">
            Error loading
          </div>
          <!-- <my-loading v-show="isFirstLoading"></my-loading> -->
          <div v-show="isFirstLoading" class="circle-loading">
            <mt-spinner type="snake" color="#8dd9bf" :size="60"></mt-spinner>
          </div>
        </div>
      </iscroll-view>
    </div>
</template>

<style lang="scss" scoped>
  .scroll-view {
    /* -- Attention: This line is extremely important in chrome 55+! -- */
    touch-action: none;
    /* -- Attention-- */
    position: fixed;
    top: 86px;  // 固定为86px，不再动态变化
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background:#F8FAFB;
    z-index: 10;  // 新增：设置为较低层级
  }
  .mobile-infinite-scroll-footer {
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-size: 13px;
      font-weight: normal;
      color: #999;
      width: 100%;
      clear: both;
      .footer-loading-spinner {
          width: 20px;
          height: 20px;
          margin-right: 10px;
          vertical-align: middle;
      }
  }
  .mobile-feed-item {
    width: calc(50% - 8px);
  }
  @media (min-width: 640px) {
    .mobile-feed-item {
      width: calc(33.3% - 8px);
    }
  }
  @media (min-width: 1000px) {
    .mobile-feed-item {
      width: calc(25% - 8px);
    }
  }
  .index-page {
    margin-top: 44px;
  }
  .category-nav {
  z-index: 100;     // 新增：确保在最上层
    display: block;
    height: 42px;
    white-space: nowrap;
    vertical-align: middle;
    overflow: hidden;
    overflow-x: auto;
    font-size: 14px;
    background-color: #8dd9bf;
    padding-left: 10px;
    padding-right: 10px;
    .category-name {
      display: inline-block;
      padding: 0 20px 0 20px;
      height: 42px;
      line-height: 42px;
      vertical-align: middle;
      text-align: center;
      color: #Fff;
      opacity: 0.7;
    }
    .selected {
      height: 43px;
      border-bottom: 5px solid white;
      opacity: 1;
    }
  }

  .video-introduction {
    width: 100%;
    background-color: #fff;
    padding: 10px;
    position: relative;  // 改为 relative
    z-index: 1;  // 降低层级

    .video-container {
      height: 270px;  // 改为300px

      .intro-video {
        width: 100%;
        height: 270px;  // 修改：固定视频高度为200px
        border-radius: 8px;
        object-fit: cover;  // 新增：保持视频比例裁剪
      }
    }
  }

  .mobile-page-content {
    min-height: 500px;
    color: #777;
    padding: 0px;
    text-shadow: none;
    border-width: 0;
    overflow: visible;
    overflow-x: hidden;
    .mobile-page-state-content {
      height: 100%;
      .mobile-feed-promo-container {
        width: 100%;
      }
      .mobile-feed-container-show {
          width: 100%;
          box-sizing: border-box;
          padding: 8px 8px 0 0px;
      }
      .mobile-feed-table-show {
        margin: 0 auto;
      }
      .feed-column-show {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 8px;
        vertical-align: top;
      }
      .mobile-feed-item {
        margin-bottom: 6px;
        background-color: #fff;
        display: inline-block;
        margin-left: 8px;
        float: left;
        padding:0 5px;
      }
      .mobile-feed-item-container-show {
        margin-bottom: 16px;
        background-color: #fff;
        font-family: Roboto;
      }
      .urgency-inventory-show {
          position: absolute;
          bottom: 0px;
          right: 0px;
          height: 20px;
          line-height: 20px;
          border-top-left-radius: 2px;
          border-bottom-right-radius: 2px;
          color: #fff;
          background-color: #3c4646;
          font-size: 12px;
          font-weight: bold;
          padding: 0px 4px;
      }
      .feed-image-container-show {
          background-size: 20px 20px;
          background-image: url(../assets/images/blue_spin.png?v=13);
          background-repeat: no-repeat;
          background-position: center center;
          position: relative;
      }
      .mobile-feed-item-image-show {
          border-radius: 2px;
          background-size: contain;
          background-repeat: no-repeat;  /* 也建议加上 */
          background-position: center;
      }
      .authorized-brand-logo-show {
          position: absolute;
          right: 0;
          top: 0;
          height: 20px;
      }
      .discount-banner-show {
          position: absolute;
          font-size: 12px;
          font-weight: bold;
          padding: 0px 4px 0px 4px;
          height: 20px;
          line-height: 20px;
          color: #fff;
          top: 0;
          left: 0;
          border-top-left-radius: 2px;
          border-bottom-right-radius: 2px;
          background-color: #3c4646;
      }
      .feed-item-details-section-show {
          background-color: #fff;
          overflow: hidden;
          margin-top: 8px;
          font-size: initial;
      }
      .product-prices-show {
          display: inline-block;
          margin-bottom: 4px;
          height: 18px;
      }
      .actual-price-show {
          display: inline-block;
          color: #3c4646;
          font-weight: normal;
          font-size: 14px;
      }
      .crossed-price-show {
          display: inline-block;
          text-decoration: line-through;
          font-size: 12px;
          color: #959f9f;
      }
      .badge-details-show {
          float: right;
        .small-badge-show {
            height: 18px;
        }
      }
      .feed-number-bought-show {
          height: 13px;
          text-align: left;
          font-size: 10px;
          color: #959f9f;
          display: block;
      }
    }
  }
  .mobile-feed-footer-view-show {
    .mobile-infinite-scroll-footer {
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-size: 13px;
      font-weight: normal;
      color: #999;
      width: 100%;
      .footer-loading-spinner {
          width: 30px;
          height: 20px;
          padding-right: 10px;
          vertical-align: middle;
      }
    }
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
      table-layout: fixed;
  }
  .mobile-page-state-loading, .mobile-page-state-default-loading, .mobile-page-state-error, .mobile-page-state-no-items {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      padding: 15px;
      margin-left: -100px;
      font-size: 14px;
      text-align: center;
      color: #999;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  .mobile-page-state-loading .page-state-loading-icon, .mobile-page-state-default-loading .page-state-loading-icon, .mobile-page-state-error .page-state-loading-icon, .mobile-page-state-no-items .page-state-loading-icon {
      background-image: url(../assets/images/loading1.gif);
      background-size: 64px 64px;
      background-position: center top;
      background-repeat: no-repeat;
      width: 100%;
      height: 64px;
      margin-bottom: 15px;
  }
  ::-webkit-scrollbar {
    display:none
  }
  #freegift-description {
    font-family: "Work Sans",sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #F7F7F7;
    border-bottom: 1px solid #e9e9e9;
    line-height: 20px;
    font-size: 12px;
    float: right;
    width: 100%;
    margin-bottom: 16px;
  }
</style>

<script>
import MyHeader from '../components/header'
import MyLoading from '../components/base/loadingThreePoints'
import $ from 'jquery'
import qs from 'qs'
import Bus from '../_common/js/bus'
window.PointerEvent = undefined
export default {

  name: 'index',
  components: { MyHeader, MyLoading },
  mounted () {
      this.$nextTick(() => {
        const video = document.querySelector('.intro-video')
        if (video) {
          video.muted = true
          video.volume = 0
        }
        // 绑定滚动监听
        this.bindScrollListener()
      })
    },
  data () {
    return {
      // 新增：提前加载的阈值配置
      loadMoreThreshold: 1000, // 距离底部800px时开始加载（可调整这个值）

      // 把原来写在 :options 里的配置提取出来
      scrollOptions: {
        mouseWheel: true,
        useTransition: false,
        bounceTime: 100,
        click: this.iScrollClick(),
        probeType: 3 // 新增：实时监听滚动位置
      },
      column: null, // 图片展示列数
      columnWidth: null, // 每列的宽度(除去padding 8)
      slidePosition: 120, // 位置中心点
      showFreeNotice: false,
      currentCategory: 'Popular',
      currentCategoryId: 452,
      categories: [
          {
            name: 'Popular',
            id: 452
          },
          {
            name: 'Makeup Organizer',
            id: 500
          },
          {
            name: 'Food Container',
            id: 502
          },
          {
            name: 'Trash Can',
            id: 503
          },
          {
            name: 'Countertop Organizer',
            id: 504
          },
          {
            name: 'Storage Box',
            id: 505
          }
      ],
      isIndexPage: '', // 是否是主页还是搜索结果页面
      pagination: {
        params: {
          start: 1, // 分页开始的页数
          max: 15, // 每页最多个数
          categoryId: 452 // 类目id
        },
        total: 999 // 产品总个数
      },
      searchPagination: { // 搜索分页
        params: {
          start: 1, // 分页开始的页数
          max: 15, // 每页最多个数
          q: '' // 搜索的内容
        },
        total: 999 // 产品总个数
      },
      isScrollLoading: false, // 是否在滚动加载
      showAdBanner: false,
      isFirstLoading: true, // 是否首次加载（区别于滚动加载） 3个点的loading
      noMoreProducts: false, // 是否没有更多的产品
      products: [], // 产品列表
    }
  },
  updated () {
    // window.addEventListener('scroll', this.loadMore)
    // window.addEventListener('resize', this.resizeChange)
    console.log('updated');
    // setTimeout(function(){
      this.$refs.iscroll.refresh()
    // },1000);
  },
  beforeDestroy () {
    // window.removeEventListener('scroll', this.loadMore)  // 消除滚动事件
    // window.removeEventListener('resize', this.resizeChange)
    if (this.$refs.iscroll && this.$refs.iscroll.iscroll) {
      this.$refs.iscroll.iscroll.off('scroll', this.handleScroll)
      console.log('✅ scroll 事件已解绑')
    }
  },
  created () {
    this.fetch()
    Bus.$on('reload-product', this.fetch)
    // 4列 > 1000 >3列 > 640 > 2列
    let deviceWidth = document.documentElement.clientWidth
    if (deviceWidth >= 1000) {
      this.column = 4
    } else if (deviceWidth >= 640) {
      this.column = 3
    } else {
      this.column = 2
    }
    // 计算每列的宽度: 8 左边padding, 16 右边padding
    this.columnWidth = (deviceWidth  - 8 - 16) / this.column - 8 + 'px'
  },
  methods: {

    bindScrollListener() {
      //console.log('=== 开始绑定滚动监听 ===')

      setTimeout(() => {
        if (this.$refs.iscroll && this.$refs.iscroll.iscroll) {
          const iscroll = this.$refs.iscroll.iscroll
          //console.log('✅ iscroll 实例获取成功')
          //console.log('probeType:', iscroll.options.probeType)

          // 监听滚动事件
          iscroll.on('scroll', this.handleScroll)
          //console.log('✅ scroll 事件绑定成功')
        } else {
          //console.log('❌ iscroll 实例不存在')
        }
      }, 500) // 等待 iscroll 初始化完成
    },

    handleScroll() {
      const iscroll = this.$refs.iscroll.iscroll
      const currentY = iscroll.y
      const maxScrollY = iscroll.maxScrollY
      const distanceToBottom = Math.abs(currentY - maxScrollY)

      //console.log('滚动中 - 距离底部:', distanceToBottom, 'px')

      // 当距离底部小于阈值时，触发加载
      if (distanceToBottom < this.loadMoreThreshold &&
          !this.isScrollLoading &&
          !this.noMoreProducts) {
        //console.log('✅ 触发提前加载')
        this.loadMore()
      }
    },

    pullUp(){
      console.log('pullup');
      this.loadMore();
    },
    pullDown(){
      console.log('pulldown');
    },
    // 显示商品详情
    showDetail (id) {
      this.$router.push({path: `/product/${id}`})
    },
    showKR () {
      window.location.href = 'https://www.kissyrose.com'
    },
    iScrollClick(){
      if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
      if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
      if (/Silk/i.test(navigator.userAgent)) return false;
      if (/Android/i.test(navigator.userAgent)) {
        var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
        return parseFloat(s[0]+s[3]) < 44 ? false : true
      }
    },
    loadMore () { // 滚动加载
      console.log('滚动加载')
      // let clientHeight = document.documentElement.clientHeight // 视口宽度
      // let scrollTop = document.documentElement.scrollTop
      // let scrollHeight = document.documentElement.scrollHeight
      // if (scrollHeight - (clientHeight + scrollTop) < 200 && !this.isScrollLoading && !this.noMoreProducts) {
      if (!this.isScrollLoading && !this.noMoreProducts) {
        this.isScrollLoading = true
        if (this.isIndexPage) {
          this.$axios(this.ApiList.productPage, {
            params: this.pagination.params
          })
            .then((res) => {
              let data = res.data
              this.isScrollLoading = false
              this.products = this.products.concat(data.products)
              this.pagination.total = data.count
              if (this.products.length >= this.pagination.total) {
                this.noMoreProducts = true
              } else {
                this.pagination.params.start++
              }
              this.$refs.iscroll.refresh()
            })
            .catch((err) => {
              this.isScrollLoading = false
              console.log(err)
            })
        } else {
          this.fetchBySearch('scroll')
        }
      }
    },
    searchByCategory (category, e) { // 目标位置定在距离左边120px
      if (this.currentCategory === category.name) {
        return
      }
      this.currentCategory = category.name
      this.currentCategoryId = category.id
      let slideOffsetLeft = e.target.offsetLeft // 点击元素距离父元素左边的距离
      let slideScrollLeft = $('.category-nav').scrollLeft() // 类目往左滚动距离
      let fixedLeft = slideScrollLeft + this.slidePosition // 固定的点距离父元素左边距离
      if (slideOffsetLeft > fixedLeft) {
        // 在固定距离右边
        let toScroll = slideOffsetLeft - fixedLeft
        $('.category-nav').animate({scrollLeft: slideScrollLeft + toScroll + 'px'}, 200)
      } else {
        // 在固定距离左边
        let toScroll = fixedLeft - slideOffsetLeft
        $('.category-nav').animate({scrollLeft: slideScrollLeft - toScroll + 'px'}, 200)
      }
      this.pagination.params.start = 1
      this.noMoreProducts = false
      if (category.id && category.id > 0) {
          this.pagination.params.categoryId = category.id
        } else {
          this.pagination.params.categoryId = null
        }
      this.fetch()
    },
    goDetail () { // 跳转到商品详情页
      this.$router.push({path: '/product/999'})
    },
    fetch () { // 请求产品列表数据
      console.log(this.$route)
      this.isFirstLoading = true
      // return
      this.products = []
      if (this.$route.name !== 'Browse') {
        this.isIndexPage = false
        this.searchPagination.params.q = this.$route.params.text
        this.fetchBySearch('first')
      } else {
        /* if (!this.pagination.params.categoryId || this.pagination.params.categoryId === null || this.pagination.params.categoryId === 0) {
          this.showAdBanner = true
        } else {
          this.showAdBanner = false
        } */
        if (this.pagination.params.categoryId && this.pagination.params.categoryId === 300) {
          this.showFreeNotice = true
        } else {
          this.showFreeNotice = false
        }
        this.isIndexPage = true
        this.$axios(this.ApiList.productPage, {
          params: this.pagination.params
        })
          .then((res) => {
            // window.addEventListener('scroll', this.loadMore)
            let data = res.data
            this.isFirstLoading = false
            this.products = this.products.concat(data.products)
            this.pagination.total = data.count
            if (this.products.length >= this.pagination.total) {
              this.noMoreProducts = true
            } else {
              this.pagination.params.start++
            }
          })
          .catch((err) => {
            // window.addEventListener('scroll', this.loadMore)
            this.isFirstLoading = false
            console.log(err)
          })
      }
    },
    fetchBySearch (type) { // 搜索加载
      this.$axios.post(this.ApiList.search, qs.stringify(this.searchPagination.params))
        .then((res) => {
          // window.addEventListener('scroll', this.loadMore)
          console.log(res)
          if (type === 'first') {
            this.isFirstLoading = false
          } else {
            this.isScrollLoading = false
          }
          if (res.data.products) {
            if (type === 'first') {
              this.products = res.data.products
            } else {
              this.products = this.products.concat(res.data.products)
            }
            if (res.data.products.length === res.data.count) {
              this.noMoreProducts = true
            } else {
              this.noMoreProducts = false
              this.searchPagination.params.start++
            }
          } else {
            this.noMoreProducts = true
          }
        })
        .catch((err) => {
          console.log('search eerr')
          console.log(err)
          if (type === 'first') {
            this.isFirstLoading = false
          } else {
            this.isScrollLoading = false
          }
          this.$toast({
            message: err.data.msg,
            position: 'middle'
            // duration: -1
          })
        })
    }
  }
}
</script>

