// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import apiList from './api/apiList'
import axios from './api/axiosConfig'
import MintUI from 'mint-ui'
import _ from 'lodash'
import 'mint-ui/lib/style.css'
import store from './store'
import fastclick from 'fastclick'
import './assets/css/mintui.css'
import "./assets/css/standard.css"
import LuojiPlugins from './plugins/index.js'
import CookieApi from './_common/js/cookies.js'
import VideoPlayer from 'vue-video-player'
import IScrollView from 'vue-iscroll-view'
//import IScroll from 'iscroll'
// 改为使用 probe 版本：
import IScroll from 'iscroll/build/iscroll-probe.js'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
// import './plugins/plugins.css'

fastclick.attach(document.body)

import * as custom from './_common/js/filters.js'
// 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.prototype.$axios = axios
Vue.prototype.$cookieApi = CookieApi

Vue.use(IScrollView, IScroll)
Vue.use(LuojiPlugins)
Vue.use(VideoPlayer)
Vue.use(apiList)
Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
