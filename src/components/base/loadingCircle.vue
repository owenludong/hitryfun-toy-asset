<template>
  <div :class="{'show-mask': isShowMask }">
    <div class="mask"></div>
    <div class="loading">
      <mt-spinner type="snake" color="#8dd9bf" :size="60"></mt-spinner>
    </div>
  </div>
</template>
<script>
  export default {

  name: 'loadingThreePoints',
  props: {
    isShowMask: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {

    };
  }
};
</script>
<style lang="css" scoped="">
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9f9f9;
    opacity: 0;
    z-index: 1000;
    text-shadow: 0 1px 0 #f3f3f3;
    visibility: hidden;
    transition: opacity .3s;
  }

  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    z-index: 20;
  }
  .show-mask .mask {
    visibility: visible;
    opacity: .5;
  }
  .show-mask .loading {
    display: block;
  }
</style>
