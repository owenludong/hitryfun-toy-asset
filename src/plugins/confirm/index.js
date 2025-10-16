import Vue from 'vue'
import Message from './src/main.vue'
function merge (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {}
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}

Message.installMessage = function (options) {
  if (options === undefined || options === null) {
    options = {
      message: '',
      title: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options,
      title: ''
    }
  }
  var NewMessage = Vue.extend(Message)
  console.log(NewMessage)
  var component = new NewMessage().$mount()
  document.querySelector('body').appendChild(component.$el)

  merge(component.$data, options)
  return new Promise((resolve, reject) => {
    component.success = () => {
      component.close()
      resolve('confirm') // 再执行自定义函数
    }
    component.fail = () => {
      component.close()
      reject(new Error('点击取消按钮')) // 再执行自定义函数
    }
  })
}

export default Message
