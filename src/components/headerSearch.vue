<template>
  <div id="header">
    <div class="menu">
      <div class="menu-button-container" @click="showMenu" v-show="isLogin"></div>
      <div class="go-back-button" @click="goBack" v-show="!isLogin"></div>
    </div>
    <ul class="right-btn search-mode">
      <li class="search-button-container inline-block"><a class="search-button ui-link"></a></li>
      <li class="inline-block search-input">
        <input type="text" placeholder="Search" v-model.trim="searchText" @keyup.13="submit" @keyup="autoComplete($event)" @blur="changeInputStyle('blur')" @focus="changeInputStyle('focus')">
        <div class="cancel-button" @click="clearInput" v-show="searchText"></div>
      </li>
      <li class="search-tip" v-show="searchActive">
        <span class="typeahead-autocomplete" v-for="suggest in suggestions" @click="searchItem(suggest)">
          <span>{{suggest}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .typeahead-autocomplete {
      width: 100%;
      background: #fff;
      color: #333333;
      padding: 20px 0px 20px 10px;
      text-align: left;
      display: block;
      border-top: 1px solid #fafafa;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .typeahead-autocomplete:active {
      background: #ddd;
  }
  .search-tip {
    background-color: #FFFFFF;
    width: 100%;
    position: absolute;
    z-index: 3;
    font-size: 11px;
    overflow: hidden;
    box-shadow: -4px 4px 6px -3px #000;
    border-radius: 2px;

  }
  .cancel-button {
      display: block;
      display: inline-block;
      overflow: hidden;
      background-repeat: no-repeat;
      background-image: url(../assets/images/header_search_cancel_icon.png);
      width: 44px;
      height: 44px;
      background-size: 32px;
      background-position: 6px center;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
      color: rgba(255, 255, 255, 0.5);
  }
  .search-input {
    width: calc(100% - 50px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    input {
      vertical-align: bottom;
      border: none;
      height: 44px;
      background: #8dd9bf;
      outline: none;
      font-size: 20px;
      // font-weight: bold;
      padding-left: 6px;
      padding-right: 6px;
      width: calc(100% - 50px);
      color: #fff;
    }
  }
  .bounce {
    animation: pulsate 1500ms 1 alternate ease-in-out;
  }
  @keyframes pulsate {
      0% {
          transform: scale(1)
      }

      15% {
          transform: scale(1.6)
      }

      30% {
          transform: scale(1)
      }

      50% {
          transform: scale(1.4)
      }

      68% {
          transform: scale(1)
      }

      83% {
          transform: scale(1.2)
      }

      100% {
          transform: scale(1)
      }
  }
  #header {
    // height: 44px;
    color: #ffffff;
    width: 100%;
    background-color: #8dd9bf;
    // font-size: getRem108(44);
    padding-left: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: fixed;
    top: 0;
    z-index: 100;
    box-sizing: border-box;
    .wm-header {
      margin-right: 10px;
    }
    .menu {
      height: 44px;
      line-height: 44px;
      div {
        display: inline-block
      }
      .menu-button-container {
        background-repeat: no-repeat;
        background-image: url(../assets/images/menu.png);
        background-size: 32px;
        width: 44px;
        height: 44px;
        background-position: 6px center;
      }
      .go-back-button {
        background-repeat: no-repeat;
        background-image: url(../assets/images/header_go_back_icon.png);
        background-size: 32px;
        width: 44px;
        height: 44px;
        background-position: 6px center;
      }
      .page-name {
        vertical-align: top;
        font-size: 18px;
      }
    }
    .right-btn {
      position: absolute;
      top: 10px;
      right: 16px;
      width: 200px;
      text-align: right;
      height: 44px;
      .cart-button-container {
        background: url(../assets/images/header-cart-icon.png) no-repeat;
        width: 44px;
        height: 44px;
        background-size: 32px;
        background-position: 6px center;
        position: relative;
        // right: 124px;
        // top: 10px;
        z-index: 1;
      }
      .cart-quantity  {
        padding: 3px;
        font-size: 9px;
        position: absolute;
        right: 4px;
        top: 4px;
        color: #FFF;
        background: rgb(236, 97, 96);
        border-radius: 9px;
        width: 18px;
        height: 18px;
        text-align: center;
      }
      .search-button-container {
        // position: absolute;
        // right: 16px;
        // top: 10px;
        z-index: 1;
        .search-button {
            display: block;
            display: inline-block;
            overflow: hidden;
            background-repeat: no-repeat;
            background-image: url(../assets/images/header_search_icon.png);
            width: 44px;
            height: 44px;
            background-size: 32px;
            background-position: 6px center;
        }
      }
      .category-button-container {
        // position: absolute;
        // right: 70px;
        // top: 10px;
        z-index: 1;
        width: 44px;
        height: 44px;
        background-repeat: no-repeat;
        background-image: url(../assets/images/category.png);
        background-size: 32px;
        background-position: 6px center;
      }
    }
    .search-mode {
      width: 70%;
      text-align: left;
    }
  }
</style>

<script>
import Bus from '../_common/js/bus'
import qs from 'qs'

export default {

  name: 'header',

  data () {
    return {
      currentName: '',
      searchText: '', // 搜索内容
      searchHistory: [], // 搜索历史记录
      suggestions: [], // 搜索建议匹配
      searchActive: false, // search框是否处于激活状态
    }
  },
  methods: {
    changeInputStyle (type) {
      if (type === 'focus') {
        this.searchActive = true
      } else {
        this.searchActive = false
      }
    },
    autoComplete (e) { // 请求自动补全接口
      if (e.keyCode === 13) {
        this.submit()
        return
      }
      if (this.searchText !== '') {
        let data = {
          q: this.searchText
        }
        window.clearTimeout(this.searchTimeout)
        this.searchTimeout = setTimeout(() => {
          this.$axios.post(this.ApiList.autoComplete, qs.stringify(data))
            .then((res) => {
              console.log(res)
              this.suggestions = res.data.keywords
            })
            .catch((err) => {
              console.log(err)
            })
        }, 200)
      }
    },
    goBack () {
      window.router = this.$router
      this.$router.back(-1)
    },
    showMenu () {
      Bus.$emit('show-menu')
    },
    clearInput () {
      this.searchText = ''
    },
    searchItem (item) { // 搜索
      this.searchText = item
      this.submit()
    },
    submit () {
      if (this.searchText === '') {
        return
      } else {
        // search重复判断
        this.searchHistory.unshift(this.searchText)
        window.localStorage.searchHistory = JSON.stringify(this.searchHistory)
        this.$router.push({path: `/search/${this.searchText}`})
      }
    }
  },
  created () {
    if (window.localStorage.hasOwnProperty('searchHistory')) {
      this.searchHistory = JSON.parse(window.localStorage.searchHistory)
    }
  },
  watch: {
  },
  computed: {
    isLogin () {
      return this.$store.getters.getLoginStatus
    }
  }
}
</script>
