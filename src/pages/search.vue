<template>
  <div>
    <my-header></my-header>
    <div id="searchPage">
      <!-- 历史搜索标题 -->
      <div class="header">
        <div class="historry">Search History</div>
        <!-- <div class="view-all">VIew All</div> -->
      </div>
      <!-- 历史搜索内容 -->
      <ul class="history-list">
        <li v-for="item in searchHistory" @click="submit(item)">{{item}}</li>
        <!-- <li @click="submit">256 gb micro sd card</li>
        <li>watches</li> -->
      </ul>
      <div class="no-search-history" v-if="searchHistory.length === 0">no search history</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .no-search-history {
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 13px;
    font-weight: normal;
    color: #999;
    width: 100%;
  }
  #searchPage {
    margin-top: 64px;
    .header {
      background: rgb(243,243,248);
      padding: 16px 16px;
      display: flex;
      align-items: center;
      .historry {
        flex: 1;
        font-weight: bold;
      }
      .view-all {
        font-size: 12px;
      }
    }
    .history-list {
      li {
        padding: 16px;
      }
      li:active {
        background: #ddd;
      }
    }
  }
</style>

<script>
import MyHeader from '../components/headerSearch'

export default {

  name: 'search',
  components: { MyHeader },
  data () {
    return {
      searchHistory: [] // 搜索历史
    }
  },
  created () {
    if (window.localStorage.hasOwnProperty('searchHistory')) {
      this.searchHistory = JSON.parse(window.localStorage.searchHistory)
    }
  },
  methods: {
    submit (key) {
      this.$router.push({path: `/search/${key}`})
    }
  }
}
</script>

