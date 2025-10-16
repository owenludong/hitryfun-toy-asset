/**
 * http配置
 * https://www.npmjs.com/package/axios
 */
import router from '../router/index'
import store from '../store/index'
import axios from 'axios'
// axios.defaults.baseURL = '/api' // 以后改成真正的接口地址
axios.defaults.baseURL = 'https://api.hitryfun.com' // 以后改成真正的接口地址
//axios.defaults.baseURL = 'http://localhost'
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  // config.data = qs.stringify(config.data)
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// // Add a response interceptor
// axios.interceptors.response.use((response) => {
//   // Do something with response data
//   if (response.data.success) {
//     return response.data
//   } else {
//     return Promise.reject(response)
//   }
// }, (error) => {
//   // console.log(error)
//   // console.log(error.response)
//   if (error.response) {
//     // 不需要登录的路由 产品列表页面、产品详情页、搜索页、搜索结果页、退款政策
//     let notNessaryPath = ['Browse', 'Details', 'search', 'searchResult']
//     switch (error.response.status) {
//       case 401:
//         if (notNessaryPath.indexOf(router.currentRoute.name) === -1) {
//           console.log('未登录')
//           console.log(store)
//           // 跳转到登录页面
//           router.replace({
//             path: 'login',
//             query: {redirect: router.currentRoute.fullPath}
//           })
//         } else {
//           // 修改登录状态为未登录
//           console.log(store)
//           store.commit('changeLoginStatus', {
//             isLogin: false
//           })
//         }
//         break
//     }
//   }
//   // console.log(error.response.data.)
//   // Do something with response error
//   return Promise.reject(error.response.data)
// })
// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
  if (response.data.success) {
    return response.data
  } else {
    if (response.data.code === 'G0006') {
      // 不需要登录的路由 产品列表页面、产品详情页、搜索页、搜索结果页、退款政策
      let notNessaryPath = ['Browse', 'Details', 'search', 'searchResult']
      if (notNessaryPath.indexOf(router.currentRoute.name) === -1) {
        // 跳转到登录页面
        console.log(router)
        router.replace({
          path: '/signin',
          query: {redirect: router.currentRoute.fullPath}
        })
      } else {
        // vux状态修改
        store.commit('changeLoginStatus', {
          isLogin: false
        })
      }
    }
    return Promise.reject(response)
  }
}, (error) => {
  return Promise.reject(error.response.data)
})
export default axios
