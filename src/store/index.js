import Vuex from 'vuex'
import Vue from 'vue'
import LoginStatus from './modules/loginStatus'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    LoginStatus
  }
})
