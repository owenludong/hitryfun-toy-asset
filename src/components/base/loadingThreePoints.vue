<template>
  <div class="mobile-page-state-default-loading">
    <div class="wish-loader">
      <div class="circle1 main-color-background">
      </div>
      <div class="circle2 main-color-background">
      </div>
      <div class="circle3 main-color-background">
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  name: 'loadingCircle',

  data () {
    return {

    };
  }
};
</script>
<style lang="css" scoped="">
  .mobile-page-state-loading, .mobile-page-state-default-loading, .mobile-page-state-error, .mobile-page-state-no-items {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      padding: 15px;
      margin-left: -100px;
      margin-top: -25px;
      font-size: 14px;
      text-align: center;
      color: #999;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  .wish-loader {
      margin: 0 auto;
      width: 70px;
      text-align: center;
  }
  .main-color-background {
      background: #2FB7EC !important;
  }
  .wish-loader>div {
      width: 8px;
      height: 8px;
      margin: 0 2px;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;
      animation: sk-bouncedelay 1s infinite ease-in-out both;
  }
  .wish-loader .circle1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
  }
  @keyframes sk-bouncedelay {
      0%,90%,100% {
          -webkit-transform: scale(0);
          transform: scale(0)
      }

      50% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }
  }
</style>
