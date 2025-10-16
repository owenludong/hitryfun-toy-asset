import LuojiConfirm from './confirm/index.js'

const install = function (Vue) {
  Vue.component(LuojiConfirm.name, LuojiConfirm)

  Vue.prototype.$luoji_confirm = LuojiConfirm.installMessage
}
export default install
