<template>
  <div class="index-page">
    <my-header></my-header>

    <ul class="category-nav" v-show="isIndexPage">
      <li
        v-for="item in categories"
        :key="item.id"
        @click="searchByCategory(item, $event)"
        :class="{ selected: currentCategory === item.name }"
        class="category-name"
      >
        {{ item.name }}
        <img
          src="../assets/images/hot32.png"
          width="20px"
          height="20px"
          v-show="item.showHot"
        />
      </li>
    </ul>

    <div class="popular-content" v-if="currentCategoryId === 550">
      <HeroCarousel />
      <div class="cp-freeship-banner">
        🌎 {{ $t('freeShippingTips') }} ✨
      </div>
      <CouponsRow />
      <BestSellerGrid :list="bestSellers" />
      <RecommendScroller :list="recommendList" />

      <ReviewGallery />
      <FaqAccordion />
      <site-footer class="local-footer" />
    </div>

    <div v-else class="scroll-view">
      <div
        class="mobile-page-content ui-content"
        data-role="content"
        role="main"
        v-show="currentCategoryId !== 550"
      >
        <div class="mobile-page-state-content" v-if="products.length !== 0">
          <div class="mobile-feed-page">
            <div class="mobile-feed-container-show">
              <div
                class="mobile-feed-item"
                v-for="product in products"
                :key="product.id"
                @click="showDetail(product.id)"
              >
                <div class="feed-card">
                  <div class="cp-img-wrapper">
                    <img
                      class="feed-image"
                      :src="product.mainImage || placeholderImg"
                      :alt="product.name"
                    />
                    <span
                      v-if="[2500, 2460, 2461].includes(product.id)"
                      class="cp-badge"
                    >
                      Custom Link
                    </span>
                  </div>
                  <h3
                    class="feed-title"
                    :style="{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }"
                  >
                    {{ product.name || 'Custom Cat Squishy' }}
                  </h3>

                  <p class="feed-price">
                    <span class="current-price">
                      {{ formatPrice(product.productPrice) }}
                    </span>
                    <span class="old-price" v-if="product.originalPrice">
                      {{ formatPrice(product.originalPrice) }}
                    </span>
                  </p>

                </div>
              </div>
            </div>

            <div class="mobile-infinite-scroll-footer">
              <div class="footer-loading-view" v-show="isScrollLoading">
                <img
                  class="footer-loading-spinner"
                  src="../assets/images/ajax_loader_small.gif?v=13"
                />
                Loading
              </div>
              <div class="footer-no-more-view" v-show="noMoreProducts">
                No more items
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-page-state-loading" style="display: none;">
          <div class="page-state-loading-icon"></div>
          Loading
        </div>

        <div
          class="mobile-page-state-no-items"
          v-if="products.length === 0 && !isFirstLoading"
        >
          No products found
        </div>
        <div class="mobile-page-state-error default-hide" style="display: none;">
          Error loading
        </div>

        <div v-show="isFirstLoading" class="circle-loading">
          <mt-spinner type="snake" color="#8dd9bf" :size="60"></mt-spinner>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 样式保持不变 */
.scroll-view { background: #f8fafb; }
.local-footer { position: static; margin-top: 12px; background: #f7f7f7; border-top: 1px solid #e5e7eb; }
.popular-content { position: relative; background: #fff; padding: 12px 0 0px; min-height: calc(100vh - 86px); }
.mobile-infinite-scroll-footer { text-align: center; height: 60px; line-height: 60px; font-size: 13px; font-weight: normal; color: #999; width: 100%; clear: both; .footer-loading-spinner { width: 20px; height: 20px; margin-right: 10px; vertical-align: middle; } }
.index-page { margin-top: 44px; }
.category-nav { z-index: 100; display: block; height: 42px; white-space: nowrap; vertical-align: middle; overflow: hidden; overflow-x: auto; font-size: 14px; background-color: #8dd9bf; padding-left: 10px; padding-right: 10px; .category-name { display: inline-block; padding: 0 20px; height: 42px; line-height: 42px; vertical-align: middle; text-align: center; color: #fff; opacity: 0.7; } .selected { height: 43px; border-bottom: 5px solid #fff; opacity: 1; } }
.intro-image { width: 100%; height: auto; border-radius: 10px; object-fit: cover; }
.video-introduction { width: 100%; background-color: #fff; padding: 10px; position: relative; z-index: 1; .video-container { height: auto; min-height: 100vh; .intro-video { width: 100%; height: 270px; border-radius: 8px; object-fit: cover; } } }
.mobile-page-content { display: block; color: #777; padding: 0; text-shadow: none; border-width: 0; overflow: hidden; overflow-x: hidden; .mobile-page-state-content { height: 100%; .mobile-feed-promo-container { width: 100%; } .mobile-feed-table-show { margin: 0 auto; } .feed-column-show { box-sizing: border-box; padding-left: 8px; vertical-align: top; } .mobile-feed-item { margin: 0; background-color: transparent; display: block; float: none; padding: 0; } .authorized-brand-logo-show { position: absolute; right: 0; top: 0; height: 20px; } .feed-number-bought-show { height: 13px; text-align: left; font-size: 10px; color: #959f9f; display: block; } } }
.mobile-feed-footer-view-show { .mobile-infinite-scroll-footer { text-align: center; height: 60px; line-height: 60px; font-size: 13px; font-weight: normal; color: #999; width: 100%; .footer-loading-spinner { width: 30px; height: 20px; padding-right: 10px; vertical-align: middle; } } }
table { border-collapse: collapse; border-spacing: 0; table-layout: fixed; }
.mobile-page-state-loading, .mobile-page-state-default-loading, .mobile-page-state-error, .mobile-page-state-no-items { position: absolute; top: 50%; left: 50%; width: 200px; padding: 15px; margin-left: -100px; font-size: 14px; text-align: center; color: #999; box-sizing: border-box; }
.mobile-page-state-loading .page-state-loading-icon, .mobile-page-state-default-loading .page-state-loading-icon, .mobile-page-state-error .page-state-loading-icon, .mobile-page-state-no-items .page-state-loading-icon { background-image: url(../assets/images/loading1.gif); background-size: 64px 64px; background-position: center top; background-repeat: no-repeat; width: 100%; height: 64px; margin-bottom: 15px; }
::-webkit-scrollbar { display: none; }
#freegift-description { font-family: 'Work Sans', sans-serif; font-weight: 400; font-style: normal; background-color: #f7f7f7; border-bottom: 1px solid #e9e9e9; line-height: 20px; font-size: 12px; float: right; width: 100%; margin-bottom: 16px; }
.mobile-feed-container-show { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; padding: 14px 14px 14px 18px; box-sizing: border-box; background-color: #f8fafb; }
@media (min-width: 640px) { .mobile-feed-container-show { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1000px) { .mobile-feed-container-show { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 480px) { .mobile-feed-container-show { grid-template-columns: repeat(2, 1fr); gap: 10px; padding: 10px; } .feed-title { font-size: 0.85rem; } }
.mobile-feed-item { cursor: pointer; }
.feed-card { background: #fff; border-radius: 12px; box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08); overflow: hidden; text-align: center; transition: transform 0.2s ease, box-shadow 0.2s ease; padding-bottom: 10px; }
.feed-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12); }
.feed-image { width: 100%; height: auto; aspect-ratio: 1 / 1; object-fit: cover; border-bottom: 1px solid #f0f0f0; background-color: #fafafa; }
.feed-title { margin: 8px 10px 4px; font-family: 'Georgia', 'Times New Roman', 'PingFang SC', 'Songti SC', serif; font-weight: 500; color: #444; font-size: 0.95rem; line-height: 1.35; letter-spacing: 0.3px; display: -webkit-box !important; -webkit-line-clamp: 2 !important; -webkit-box-orient: vertical !important; overflow: hidden; text-overflow: ellipsis; transition: color 0.3s ease, transform 0.3s ease; }
.feed-title:hover { color: #222; transform: scale(1.02); text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); }
.feed-price { color: #ef4444; font-weight: bold; font-size: 0.9rem; margin: 2px 0; }
.feed-price .old-price { color: #959f9f; text-decoration: line-through; font-size: 0.8rem; font-weight: normal; margin-left: 6px; }
.cp-img-wrapper { position: relative; }
.cp-badge { position: absolute; top: 6px; left: 6px; background: linear-gradient(135deg, #9dd6c2, #7fb0d1); color: #fff; font-size: 0.7rem; font-weight: 600; padding: 3px 6px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15); }
.cp-freeship-banner { background: linear-gradient(90deg, #a8e0c4, #9dd6c2); color: #ffffff; font-weight: 600; font-size: 0.9rem; text-align: center; padding: 8px 0; border-radius: 10px; margin: 10px 14px 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); letter-spacing: 0.3px; }
</style>

<script>
import MyHeader from '../components/header'
import MyLoading from '../components/base/loadingThreePoints'
import SiteFooter from '@/components/SiteFooter.vue'
import $ from 'jquery'
import qs from 'qs'
import Bus from '../_common/js/bus'
import HeroCarousel from '@/components/HeroCarousel.vue'
import CouponsRow from '@/components/CouponsRow.vue'
import BestSellerGrid from '@/components/BestSellerGrid.vue'
import RecommendScroller from '@/components/RecommendScroller.vue'
import ReviewGallery from '@/components/ReviewGallery.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'

window.PointerEvent = undefined

// ⭐ 模块级变量
let indexScrollY = 0

export default {
  name: 'index',
  components: {
    MyHeader,
    MyLoading,
    HeroCarousel,
    CouponsRow,
    BestSellerGrid,
    RecommendScroller,
    ReviewGallery,
    FaqAccordion,
    SiteFooter
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$nextTick(() => {
        window.scrollTo(0, indexScrollY || 0)
      })
    })
  },

  beforeRouteLeave (to, from, next) {
    indexScrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    next()
  },

  watch: {
    currentCategoryId (newVal, oldVal) {
      if (newVal === 550 && oldVal !== 550) {
        this.fetchBestSellers()
        this.fetchRecommend()
      }
    }
  },

  mounted () {
    if (this.currentCategoryId === 550) {
      this.fetchBestSellers()
      this.fetchRecommend()
    }

    this.$nextTick(() => {
      const video = document.querySelector('.intro-video')
      if (video) {
        video.muted = true
        video.volume = 0
      }
    })

    window.addEventListener('scroll', this.handleWindowScroll, {
      passive: true
    })
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleWindowScroll)
  },

  data () {
    return {
      // Index 不需要存储汇率表了，直接读取 Storage
      loadMoreThreshold: 200,
      loadTimer: null,
      bestSellers: [],
      recommendList: [],
      isBestLoading: false,
      isRecLoading: false,
      slidePosition: 120,
      showFreeNotice: false,
      currentCategory: 'Popular',
      currentCategoryId: 550,
      categories: [
        { name: this.$t('categoryPopular'), id: 550 },
        { name: this.$t('categoryCustom'), id: 603, showHot: true },
        { name: this.$t('categoryFat'), id: 600 },
        { name: this.$t('categorySlim'), id: 601 },
        { name: this.$t('categoryMini'), id: 602 }
      ],
      isIndexPage: true,
      pagination: {
        params: { start: 1, max: 15, categoryId: 550 },
        total: 999
      },
      searchPagination: {
        params: { start: 1, max: 15, q: '' },
        total: 999
      },
      isScrollLoading: false,
      showAdBanner: false,
      isFirstLoading: true,
      noMoreProducts: false,
      products: [],
      placeholderImg: ''
    }
  },

  created () {
    this.fetch()
    Bus.$on('reload-product', this.fetch)
  },

  methods: {
    // ✅ 关键方法：读取 Storage 并强制 .99
    formatPrice(basePrice) {
      if (basePrice === null || basePrice === undefined) return '';

      const currency = localStorage.getItem('currency') || 'EUR';
      // 如果读取不到汇率，默认是 1
      const rate = parseFloat(localStorage.getItem('currencyRate')) || 1;

      let finalPrice = basePrice * rate;

      // 强制以 .99 结尾的逻辑
      // 只有当不是基础货币(EUR)时才处理？或者全部处理？
      // 根据您的描述“换算成其他币种的时候”，我这里加了判断。
      // 如果您希望欧元也变 .99，请删掉 `if (currency !== 'EUR')`
      if (currency !== 'EUR') {
        finalPrice = Math.floor(finalPrice) + 0.99;
      }

      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        // 强制 2 位小数，确保 .99 即使在日元下也能显示
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(finalPrice);
    },

    async fetchBestSellers () {
      this.isBestLoading = true
      try {
        const res = await this.$axios(this.ApiList.productPage, {
          params: { categoryId: 650, max: 8, start: 1 }
        })
        this.bestSellers =
          res && res.data && res.data.products ? res.data.products : []
      } catch (e) {
        console.error('BestSellers load error', e)
      } finally {
        this.isBestLoading = false
      }
    },

    async fetchRecommend () {
      this.isRecLoading = true
      try {
        const res = await this.$axios(this.ApiList.productPage, {
          params: { categoryId: 651, max: 6, start: 1 }
        })
        this.recommendList =
          res && res.data && res.data.products ? res.data.products : []
      } catch (e) {
        console.error('Recommend load error', e)
      } finally {
        this.isRecLoading = false
      }
    },

    handleWindowScroll () {
      if (this.currentCategoryId === 550) return
      if (this.isScrollLoading || this.noMoreProducts) return

      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight || 0
      const docHeight =
        document.documentElement.scrollHeight ||
        document.body.scrollHeight ||
        0

      const distanceToBottom = docHeight - (scrollTop + windowHeight)

      if (distanceToBottom < this.loadMoreThreshold) {
        clearTimeout(this.loadTimer)
        this.loadTimer = setTimeout(() => {
          if (!this.isScrollLoading && !this.noMoreProducts) {
            this.loadMore()
          }
        }, 80)
      }
    },

    showDetail (id) {
      this.$router.push({ path: `/product/${id}` })
    },

    showKR () {
      window.location.href = 'https://www.kissyrose.com'
    },

    async loadMore () {
      if (this.isScrollLoading || this.noMoreProducts) return
      this.isScrollLoading = true
      try {
        if (this.isIndexPage) {
          const res = await this.$axios(this.ApiList.productPage, {
            params: this.pagination.params
          })
          const data = res.data
          if (Array.isArray(data.products) && data.products.length > 0) {
            this.products = this.products.concat(data.products)
            this.pagination.total = data.count || this.pagination.total
            if (this.products.length >= this.pagination.total) {
              this.noMoreProducts = true
            } else {
              this.pagination.params.start++
            }
          } else {
            this.noMoreProducts = true
          }
        } else {
          await this.fetchBySearch('scroll')
        }
      } catch (err) {
        console.log('loadMore error:', err)
      } finally {
        this.isScrollLoading = false
      }
    },

    searchByCategory (category, e) {
      if (this.currentCategoryId === category.id) {
        return
      }

      this.currentCategory = category.name
      this.currentCategoryId = category.id

      const slideOffsetLeft = e.target.offsetLeft
      const slideScrollLeft = $('.category-nav').scrollLeft()
      const fixedLeft = slideScrollLeft + this.slidePosition

      if (slideOffsetLeft > fixedLeft) {
        const toScroll = slideOffsetLeft - fixedLeft
        $('.category-nav').animate(
          { scrollLeft: slideScrollLeft + toScroll + 'px' },
          200
        )
      } else {
        const toScroll = fixedLeft - slideOffsetLeft
        $('.category-nav').animate(
          { scrollLeft: slideScrollLeft - toScroll + 'px' },
          200
        )
      }

      this.pagination.params.start = 1
      this.noMoreProducts = false
      this.products = []

      if (category.id && category.id > 0) {
        this.pagination.params.categoryId = category.id
      } else {
        this.pagination.params.categoryId = null
      }

      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })

      this.fetch()
    },

    goDetail () {
      this.$router.push({ path: '/product/999' })
    },

    fetch () {
      if (this.currentCategoryId === 550) {
        this.isFirstLoading = false
        this.isIndexPage = true
        return
      }

      this.isFirstLoading = true
      this.products = []

      if (this.$route.name !== 'Browse') {
        this.isIndexPage = false
        this.searchPagination.params.q = this.$route.params.text
        this.fetchBySearch('first')
      } else {
        if (
          this.pagination.params.categoryId &&
          this.pagination.params.categoryId === 300
        ) {
          this.showFreeNotice = true
        } else {
          this.showFreeNotice = false
        }

        this.isIndexPage = true

        this.$axios(this.ApiList.productPage, {
          params: this.pagination.params
        })
          .then(res => {
            const data = res.data
            this.isFirstLoading = false
            this.products = this.products.concat(data.products)
            this.pagination.total = data.count
            if (this.products.length >= this.pagination.total) {
              this.noMoreProducts = true
            } else {
              this.pagination.params.start++
            }
          })
          .catch(err => {
            this.isFirstLoading = false
            console.log(err)
          })
      }
    },

    fetchBySearch (type) {
      this.$axios
        .post(this.ApiList.search, qs.stringify(this.searchPagination.params))
        .then(res => {
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
        .catch(err => {
          console.log('search err', err)
          if (type === 'first') {
            this.isFirstLoading = false
          } else {
            this.isScrollLoading = false
          }
          this.$toast({
            message: err.data && err.data.msg,
            position: 'middle'
          })
        })
    }
  }
}
</script>
