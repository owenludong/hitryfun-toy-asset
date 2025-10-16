<template>
  <div :class="{ 'show-category': isShowMenu}">
    <div id="category-aside">
      <!-- <div class="mask"></div> -->
      <div class="category-aside-container" >
        <div class="category-header">
          <!-- <i class="fa fa-arrow-left"></i> -->
          <svg class="wm category-back" aria-hidden="true" v-show="currentLevel !== 0" @click="goback">
            <use xlink:href="#wm-huitui"></use>
          </svg>
          Refine
        </div>
        <div class="category-content">
          <div class="category-aside-item" v-for="item in categories" @click="nextCategory(item)">
            <span>{{item.name}}</span>
            <span v-show="currentLevel === 0" class="selected-categories">{{selectedCategoriesString}}</span>
            <svg class="wm" aria-hidden="true" v-show="item.hasChildren">
                <use xlink:href="#wm-arrow-right"></use>
            </svg>
            <!-- <i class="fa fa-chevron-right" v-show="item.hasChildren"></i> -->
            <!-- <i class="fa fa-check" v-show="item.isSelected"></i> -->
            <svg class="wm category-select" aria-hidden="true" v-show="item.isSelected">
                <use xlink:href="#wm-gou"></use>
            </svg>
          </div>
        </div>
        <div class="category-foot">
          <div class="category-foot-btn clear-btn" @click="clearAll">Clear all</div>
          <div class="category-foot-btn apply-btn" @click="apply">Apply</div>
        </div>
      </div>
    </div>
    <div class="menu-mask" @click="hideMenu" ></div>
  </div>
</template>
<style lang="scss" scoped>
  .selected-categories {
    height: 100%;
    padding-left: 8px;
    padding-right: 30px;
    color: rgb(47, 183, 236);
    font-weight: 300;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: auto;
  }
  .category-select {
    color: #8dd9bf;
  }
  .menu-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: #000;
    z-index: 900;
    visibility: hidden;
    transition: opacity 2s;
  }

  .category-aside-container {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    z-index: 1000;
    background: #fff;
    transform: translateX(100%);
    transition: transform 0.5s;
  }
  .category-header {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid rgb(168, 168, 168);
    color: rgb(60, 70, 70);
    padding-left: 8px;
    padding-right: 8px;
  }
  .category-back {
    position: absolute;
    top: 15px;
    left: 8px;
  }
  .category-content {
    height: 100%;
    overflow-y: auto;
  }
  .category-aside-item {
    padding-left: 8px;
    padding-right: 8px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgb(247, 247, 247);
    color: rgb(60, 70, 70);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .category-aside-item .fa {
    line-height: 40px;
  }
  .category-aside-item .fa-chevron-right {
    color: rgb(168, 168, 168);
  }
  .category-aside-item .fa-check {
    color: rgb(47, 183, 236);
  }
  .category-foot {
    position: absolute;
    bottom: 0;
    padding: 8px;
    color: #fff;
    background-color: #fff;
    width: 100%;
  }
  .category-foot-btn {
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    float: left;
    border-radius: 4px;
  }
  .clear-btn {
    background: rgb(213, 213, 213);
    width: 30%;
  }
  .apply-btn {
    background: rgb(47, 183, 236);
    margin-left: 8px;
    width: 56%;
  }
  .category-foot-btn:hover {
    zoom: 1;
    filter: alpha(opacity=80);
    -moz-opacity: 0.8;
    -khtml-opacity: 0.8;
    opacity: 0.8;
  }
  .show-category .category-aside-container {
    transform: translateX(0);
  }
  .show-category .menu-mask {
    visibility: visible;
    opacity: 0.5;
  }
</style>
<script>
import Bus from '../_common/js/bus'
import Category from '../assets/js/category'
export default {

  name: 'asideCategory',

  data () {
    return {
      isShowMenu: false,
      categories: [],
      currentLevel: 0, // 层级 一开始是0层 每次点击下一个，层级就+1
      selectedCategories: [] // 选中的category
      // selectedCategoriesString: '' // 被选中的category的字符串组合
    }
  },
  created () {
    this.categories = Category
    Bus.$on('show-category', () => {
      this.isShowMenu = true
    })
  },
  computed: {
    selectedCategoriesString () {
      return this.selectedCategories.join('，')
    }
  },
  methods: {
    apply () { // 重新请求产品接口
      Bus.$emit('reload-product')
      this.hideMenu()
    },
    clearAll () { // 清空该大类目下的选中的搜素条件
      this.selectedCategories = []
      _.each(Category[0].children, (n, k) => {
        n.isSelected = false
      })
      Bus.$emit('reload-product')
      this.hideMenu()
    },
    hideMenu () {
      this.isShowMenu = false
    },
    nextCategory (item) {
      if (item.hasChildren) {
        this.currentLevel++
        this.categories = item.children
      } else {
        item.isSelected = !item.isSelected
        this.selectedCategories = []
        _.each(Category[0].children, (n, k) => {
          if (n.isSelected) {
            this.selectedCategories.push(n.name)
          }
        })
        Bus.$emit('reload-product')
      }
    },
    goback () { // 回到上一个层级
      this.categories = Category
      this.currentLevel--
    },
  },
  watch: {
    isShowMenu (newVal, val) {
      if (!newVal) {
        this.currentLevel = 0
        this.categories = Category
      }
    }
  }
}
</script>


