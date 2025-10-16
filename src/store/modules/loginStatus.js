const state = {
  isLogin: '',
  account: {
    userName: '',
    email: ''
  }
}
const getters = {
  getLoginStatus: state => state.isLogin,
  getAccount: state => state.account,
}
const mutations = {
  changeLoginStatus (state, loginStatus) {
    state.isLogin = loginStatus.isLogin
    if (loginStatus.isLogin) {
      state.account.userName = loginStatus.account.userName
      state.account.email = loginStatus.account.email
    } else {
      state.account.userName = null
      state.account.email = null
    }
  }
}

export default {
  state,
  getters,
  mutations
}
