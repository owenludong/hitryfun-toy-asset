<template>
  <div>
    <transition name="zoom-fade" appear>
      <div class="modern-confirmation-modal" v-if="isShow">
        <div class="modern-confirmation-modal-pane">
          <div class="header">
            <i class="wconfont wm-guanbi" @click="handleAction('cancel')"></i>
          </div>
          <div class="content">
            <div class="title" v-if="title">
              {{title}}
            </div>
            <div class="message" v-if="message">
              {{message}}
            </div>
            <a class="cancel main-color-background" v-if="showConfirmBtn" @click="handleAction('confirm')">
              {{confirmText}}
            </a>
            <a class="confirm main-color" v-if="showCancelBtn" @click="handleAction('cancel')">
              {{cancelText}}
            </a>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal-fade" appear>
      <div class="luoji-modal" v-if="isShow"></div>
    </transition>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'luoji-confirm',
    data () {
      return {
        message: '',
        title: '',
        isShow: true,
        showConfirmBtn: true, // 确认按钮
        showCancelBtn: true, // 取消按钮
        confirmText: 'Yes', // 取消按钮
        cancelText: 'No', // 取消按钮
      }
    },
    methods: {
      handleAction (type) {
        if (type === 'cancel') {
          this.fail()
        } else {
          console.log('确认')
          this.success()
        }
      },
      close () {
        this.isShow = false
        setTimeout(() => {
          this.$destroy()
          this.$el.remove()
        }, 500)
      }
    }
  }
</script>

<style scoped="">
  @import '../../plugins.css';
</style>
