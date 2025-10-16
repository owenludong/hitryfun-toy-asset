<template>
  <div>
    <div>
    <my-header></my-header>
    <div class="mobile-contest-page" v-show="!isFirstLoading || hasPlayVideo">
      <div class="contest-image-container" :style="{ height: clientWidth}">
        <div class="mobile-contest-image" :style="{ height: clientWidth,width: clientWidth}">
          <div class="photo-slide-container" :style="{ height: clientWidth, width: clientWidth}">



            <!-- <div class="image-wrapper-cell" style="left: 0px;" :style="{ height: clientWidth,width: clientWidth,lineHeight: clientWidth}">
              <img class="contest-imgs" id="0photo-id" src="https://contestimg.wish.com/api/webimage/568260f88a90b4244ff247f5-13-large.jpg" style="vertical-align: middle; margin-bottom: 3px; height: 100%;" :style="{ maxHeight: clientWidth, maxWidth: clientWidth, lineHeight: clientWidth}"/>
            </div> -->
            <!-- <mt-swipe :show-indicators="false">
              <mt-swipe-item v-for="img in detail.images">
                <div class="image-wrapper-cell" style="left: 0px;" :style="{ height: clientWidth,width: clientWidth,lineHeight: clientWidth}">
                  <img class="contest-imgs" id="0photo-id" src="https://contestimg.wish.com/api/webimage/568260f88a90b4244ff247f5-13-large.jpg" style="vertical-align: middle; margin-bottom: 3px; height: 100%;" :style="{ maxHeight: clientWidth, maxWidth: clientWidth, lineHeight: clientWidth}"/>
                </div>
              </mt-swipe-item>
            </mt-swipe> -->
            <h-video v-show="hasPlayVideo && currentImgIndex === 1" ref="video" @on-error="onError" @on-cancel="onCancel"></h-video>
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(img,index) in detail.images" :key="index">
                  <div class="image-wrapper-cell" style="left: 0px;"  :style="{ height: clientWidth,width: clientWidth,lineHeight: clientWidth}">
                    <img class="contest-imgs" id="0photo-id" :src="img" style="vertical-align: middle; margin-bottom: 3px; height: 100%;" :style="{ maxHeight: clientWidth, maxWidth: clientWidth, lineHeight: clientWidth}"/>
                    <span  class="video-play-img"  v-show="hasVideo && currentImgIndex === 1">
                      <img src="../assets/images/play-video.png" @click="playVideo()" style="vertical-align: middle "/>
                      <!--视频时间-->
                      <!--<span class="video-time">0'40''</span>-->
                    </span>
                  </div>
                </swiper-slide>
                <!-- <swiper-slide>
                  <div class="image-wrapper-cell" style="left: 0px;" :style="{ height: clientWidth,width: clientWidth,lineHeight: clientWidth}">
                    <img class="contest-imgs" id="0photo-id" src="https://contestimg.wish.com/api/webimage/543c8b127541ce3172f44f88-1-large.jpg" style="vertical-align: middle; margin-bottom: 3px; height: 100%;" :style="{ maxHeight: clientWidth, maxWidth: clientWidth, lineHeight: clientWidth}"/>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="image-wrapper-cell" style="left: 0px;" :style="{ height: clientWidth,width: clientWidth,lineHeight: clientWidth}">
                    <img class="contest-imgs" id="0photo-id" src="https://contestimg.wish.com/api/webimage/543c8b127541ce3172f44f88-2-large.jpg" style="vertical-align: middle; margin-bottom: 3px; height: 100%;" :style="{ maxHeight: clientWidth, maxWidth: clientWidth, lineHeight: clientWidth}"/>
                  </div>
                </swiper-slide> -->

            </swiper>
          </div>
        </div>
        <div class="mobile-contest-extra-photos black-pill-button" v-show="!hasPlayVideo || currentImgIndex !== 1">
          <span class="extra-photos-text">
            <span class="image-index">{{currentImgIndex}}</span>/{{detail.images.length}}
          </span>
        </div>
        <!-- <div class="share-button">
          <img class="share-button-img" src="https://main.cdn.wish.com/803e2d9bedb9/img/msite/v3/share.png" />
        </div> -->
      </div>
      <!-- 描述 -->
      <div class="mobile-contest-info-container">
        <div class="mobile-contest-info">
          <div>
            <div class="mobile-contest-name">
              {{detail.name}}
            </div>
            <!-- <div class="product-rating-stars">
              <img class="rating-star" src="//main.cdn.wish.com/803e2d9bedb9/img/stars/wish_fullstar_16.png?v=13" />
              <img class="rating-star" src="//main.cdn.wish.com/803e2d9bedb9/img/stars/wish_fullstar_16.png?v=13" />
              <img class="rating-star" src="//main.cdn.wish.com/803e2d9bedb9/img/stars/wish_fullstar_16.png?v=13" />
              <img class="rating-star" src="//main.cdn.wish.com/803e2d9bedb9/img/stars/wish_fullstar_16.png?v=13" />
              <img class="rating-star" src="//main.cdn.wish.com/803e2d9bedb9/img/stars/wish_emptystar_16.png?v=13" />
            </div>
            <span class="contest-rating-count blue-small-text main-color">
              (6854)
            </span> -->
          </div>
        </div>
      </div>
      <!-- item specification -->
      <div class="mobile-contest-separator"></div>
      <!-- <div class="contest-product-details-container" @click="toggleDescr('#spec')" :class="{open: isShow['#spec']}">
        <div class="contest-product-details-text title-text">
          Item Specification
        </div>
        <span class="arrow-img-container">
          <i class="wconfont wm-arrow-down"></i>
        </span>
      </div> -->
      <div class="item-content" id="spec">
        <div class="item-detail-content">
          这里是spec
        </div>
      </div>
      <div class="mobile-contest-separator"></div>
      <!-- description -->
      <div class="contest-product-details-container" @click="toggleDescr('#descr')" :class="{open: isShow['#descr']}">
        <span class="contest-product-details-text title-text">
          Description
        </span>
        <span class="arrow-img-container">
          <i class="wconfont wm-arrow-down"></i>
        </span>
      </div>
      <div class="item-content" id="descr">
        <div class="item-detail-content" v-html="detail.description">
          <!-- {{detail.description}} -->
        </div>
      </div>
      <div class="mobile-contest-separator"></div>
      <!-- shipping -->
      <div class="contest-product-details-container" @click="toggleDescr('#ship')" :class="{open: isShow['#ship']}">
        <span class="contest-product-details-text title-text">
          Shipping Information
        </span>
        <span class="arrow-img-container">
          <i class="wconfont wm-arrow-down"></i>
        </span>
      </div>
      <div class="item-content" id="ship">
        <div class="item-detail-content">
          Free Shipping.  Ships to Worldwide <br/><br/>
          <!--
          <p style="font-family:courier">Estimated Arrival:</p>
          <p>Europe:&nbsp;  3 ~ 10 Days</p>
          <p>USA:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 ~ 12 Days </p>
          <p>OTHER:&nbsp;   7 ~ 20 Days </p>-->
        </div>
      </div>
      <div class="mobile-contest-separator"></div>
      <!-- 底部 -->
      <div class="bottom-padding-space" style="height: 56px; display: block;">
      </div>
      <div class="contest-price-banner-bottom" style="display: block;">
        <div class="contest-price">
          <span class="contest-real-price">
            {{detail.symbol}}{{detail.productPrice}}
          </span>
          <span class="contest-retail-price" v-show="detail.discounted">
            {{detail.symbol}}{{detail.originalPrice}}
          </span>
          <span class="banner-currency-subscript">
            {{detail.currencyCode}}
          </span>
        </div>
        <div class="contest-buy-button contest-bottom-button" @click="buy">Buy</div>
        <div class="contest-sold-out-button contest-bottom-button" style="display: none;">SOLD OUT</div>
      </div>
      <!-- 遮罩 -->
      <div :class="{'show-mask': isShowMask }">
        <div class="mask"></div>
        <div class="loading">
          <mt-spinner type="snake" color="#8dd9bf" :size="60"></mt-spinner>
        </div>
      </div>
      <!-- 底部的购物 -->
      <mt-popup
        v-model="popupVisible"
        position="bottom">
        <div class="popuo-goods">
          <div class="header">Thank you</div>
          <div class="content">
            <div class="content-img">
              <img :src="detail.mainImage" height="120" width="120">
            </div>
            <div class="content-text">
              <div class="added">Items Added to Cart!</div>
              <div class="saved" v-show="detail.discounted">Your Savings: {{detail.symbol}}{{detail.originalPrice - detail.productPrice}}</div>
            </div>
          </div>
        </div>
      </mt-popup>
      <!-- 底部的多sku选择 -->
      <mt-popup
        v-model="isSkuPopupShow"
        position="bottom">
        <div id="selectSKu">
          <div id="skuTitle" class="sku-style">
            <div class="left-item wconfont wm-huitui" v-show="currentSku.step === 'end'" @click="backToSize"></div>
            <div class="content">Select {{currentSku.type}}</div>
            <div class="right-item wconfont wm-guanbi" @click="hideSkuPopup"></div>
          </div>
          <div id="skuContainer">
            <!-- <div class="sku-style" >
              <div class="left-item"></div>
              <div class="content" >xl</div>
              <div class="right-item price" >$we</div>
            </div> -->
            <div class="sku-style" v-for="sku in currentSku.list" @click="selectSku(sku)" v-show="colorStatus.existence || sizeStatus.existence">
              <!-- 新增缩略图：优先显示 sku.img（在 fetch 中已经赋值） -->
              <div class="left-item">
                <img v-if="sku.img" :src="sku.img" class="sku-thumb" />
                <div v-else class="sku-thumb placeholder"></div>
              </div>
              <div class="content" :class="{skuless: sku.quantity <= 0, 'all-capital': currentSku.type==='size', 'first-capital': currentSku.type==='color'}">{{sku[currentSku.type]}}</div>
              <div class="right-item price" v-show="currentSku.step === 'end' && sku.quantity > 0">{{detail.symbol}}{{sku.price}}</div>
            </div>
          </div>

        </div>
      </mt-popup>
    </div>
    <!-- <my-loading v-show="isFirstLoading"></my-loading> -->
    <div v-show="isFirstLoading"  class="circle-loading">
      <mt-spinner type="snake" color="#8dd9bf" :size="60"></mt-spinner>
    </div>
    </div>

  </div>

</template>
<style lang="scss" scoped>
  @import "../assets/css/mintui.css";
  // #selectSKu .content {
  //   text-transform: capitalize;
  // }

  /* SKU 列表里缩略图样式 */
  .sku-style {
    padding: 10px 10px;
    line-height: 30px;
    position: relative;
    display: flex;
    align-items: center;
  }

  /* 左侧缩略图容器（占位） */
  .sku-style .left-item {
    width: 64px;         /* 根据需要调整 */
    height: 48px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 真正的缩略图 */
  .sku-thumb {
    width: 64px;
    height: 48px;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid #eee;
  }

  /* 缩略图占位样式（无图时显示灰色框） */
  .sku-thumb.placeholder {
    background: #f5f5f5;
    width: 64px;
    height: 48px;
    border-radius: 4px;
    border: 1px dashed #e8e8e8;
  }

  /* 保持原有 content 样式，但让它左对齐并填满剩余空间 */
  .sku-style .content {
    text-align: left;
    flex: 1;
    padding-right: 12px;
  }

  .play-img{
    position: absolute;
    left:0;
    right:0;
    bottom:50px;
    margin:auto;
    cursor: pointer;
    z-index: 99;
  }
  .all-capital {
    text-transform: uppercase;
  }
  .first-capital {
    text-transform: capitalize;
  }
  #skuTitle {
    border-bottom: 2px solid rgb(232, 232, 232);
    .content {
      font-weight: bold;
      text-transform: capitalize;
    }
  }
  #skuContainer {
    height: 250px;
    overflow-y: auto;
    .sku-style {
      font-weight: 300;
    }
    .price {
      color: rgb(234, 156, 81)
    }
    .skuless {
      color: rgb(168, 168, 168);
      text-decoration: line-through;
    }
  }
  .sku-style {
    padding: 10px 10px;
    line-height: 30px;
    position: relative;
    .left-item {
      position: absolute;
      left: 10px;
      top: 10px;
    }
    .content {
      text-align: center;
    }
    .right-item {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .swiper-container {
    // width: 100%;
    height: 100%;
    // margin-left: auto;
    // margin-right: auto;
  }
  .mobile-contest-page .mobile-contest-extra-photos .extra-photos-text {
      vertical-align: middle;
      font-size: 13px;
      font-weight: bold;
      color: #ffffff;
  }
  .mint-popup-bottom {
    width: 100%;
  }
  .popuo-goods {
    .header {
      text-align: center;
      padding: 10px;
    }
    .content {
      padding: 10px;
    }
    .content-img, .content-text {
      display: inline-block;
    }
    .content-text {
      vertical-align: top;
      margin-left: 20px;
      margin-top: 10px;
      .added {
        font-size: 18px;
      }
      .saved {
        font-size: 12px;
        margin-top: 20px;
      }
    }
  }
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
  .contest-product-details-container.open .arrow-img-container {
    transform: rotate(-180deg);
  }
  .item-detail-content {
    padding: 0 16px 16px 16px;
    font-weight: 300;
    font-size: 14px;
  }
  #descr .item-detail-content {
    white-space: pre-wrap;
  }
  .item-content {
    overflow: hidden;
    transition: height .5s;
    height: 0;
  }
  .mobile-contest-page .contest-price-banner-bottom .contest-buy-button:active {
      opacity: 0.7;
  }
  .mobile-contest-page{
      margin-top: 64px;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
      table-layout: fixed;
  }

  .mobile-contest-page .contest-image-container {
      position: relative;
      width: 100%;
  }

  .mobile-contest-page .contest-image-container .mobile-contest-image {
      margin: 0 auto;
      overflow: hidden;
  }
  .mobile-contest-page .contest-image-container .share-button .share-button-img {
      height: 24px;
  }
  .black-pill-button {
      height: 30px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
      font-weight: bold;
      text-align: center;
      text-shadow: none;
      background-color: #000;
      border: 1px solid #bbb;
      color: #ffffff;
      cursor: pointer;
      zoom: 1;
      filter: alpha(opacity=70);
      -moz-opacity: 0.7;
      -khtml-opacity: 0.7;
      opacity: 0.7;
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
  }

  .mobile-contest-page .mobile-contest-extra-photos {
      line-height: 28px;
      padding: 0px 10px;
      font-size: 0px;
      z-index: 2
  }

  .mobile-contest-page .mobile-contest-extra-photos {
      position: absolute;
      top: 16px;
      right: 16px;
      margin: 5px;
  }

  .mobile-contest-page .contest-image-container .share-button {
      width: 46px;
      height: 46px;
      border-radius: 46px;
      border-width: 1px;
      border-style: solid;
      border-color: #F3F8F8;
      background-color: white;
      position: absolute;
      right: 16px;
      bottom: -24px;
      text-align: center;
      line-height: 52px;
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
  }

  .photo-slide-container {
      position: relative;
      overflow: hidden;
  }

  .photo-slide-container .image-wrapper-cell {
      text-align: center;
      overflow: hidden;
      position: absolute;
      display: inline-block;
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
  }

  .mobile-contest-page .mobile-contest-info-container .mobile-contest-info {
      margin-top: 16px;
      margin-left: 16px;
      margin-right: 16px;
  }

  .mobile-contest-page .mobile-contest-info-container .mobile-contest-info #product-viewing-div {
      font-size: 14px;
      color: #E14D4C;
  }

  .mobile-contest-page .mobile-contest-info-container .mobile-contest-info #product-viewing-div #product-viewing-img {
      height: 18px;
      vertical-align: middle;
      float: left;
      margin-right: 4px;
  }

  .mobile-contest-page .mobile-contest-info-container .mobile-contest-info .mobile-contest-name {
      padding-top: 16px;
      padding-bottom: 16px;
      font-size: 16px;
      font-weight: normal;
      color: #3C4646;
  }

  .mobile-contest-page .mobile-contest-info-container .mobile-contest-info .product-rating-stars, .mobile-contest-page .mobile-contest-info-container .mobile-contest-info .merchant-rating-stars {
      display: inline-block;
      font-size: 0px;
      vertical-align: middle;
  }

  .mobile-contest-page .mobile-contest-info-container .mobile-contest-info .product-rating-stars .rating-star, .mobile-contest-page .mobile-contest-info-container .mobile-contest-info .merchant-rating-stars .rating-star {
      width: 16px;
      height: 16px;
      line-height: 16px;
      margin-right: 4px;
  }

  .main-color {
      color: #2FB7EC !important;
  }

  .mobile-contest-page .blue-small-text {
      font-size: 14px !important;
  }

  .mobile-contest-page .mobile-contest-info-container .mobile-contest-info .contest-rating-count {
      margin-left: 8px;
      vertical-align: middle;
  }

  .mobile-contest-page .mobile-contest-separator {
      // height: 24px;
      border-bottom: solid;
      border-color: #F3F8F8;
      border-width: 3px;
  }

  .mobile-contest-page .review-title-container {
      margin-top: 16px;
      margin-left: 16px;
      margin-right: 16px;
  }

  .mobile-contest-page .title-text {
      font-size: 16px;
      font-weight: bold;
      color: #3C4646;
  }

  .mobile-contest-page .review-title-container .review-title {
      float: left;
  }

  .mobile-contest-page .review-title-container .view-more {
      float: right;
  }

  .mobile-contest-page .rating-section {
      margin-top: 16px;
      margin-left: 16px;
      margin-right: 16px;
  }

  .mobile-contest-page .rating-section .user-img-container {
      float: left;
      margin-right: 8px;
      vertical-align: middle;
      display: inline-block;
  }

  .mobile-contest-page .rating-section .rating-content-container {
      display: inline-block;
      vertical-align: middle;
      float: left;
      width: calc(100vw - 80px);
      position: relative;
  }

  .main-color-background-opacity-30 {
      background: rgba(47, 183, 236, 0.3) !important;
  }

  .mobile-contest-page .rating-section .user-img-container .fake-circle {
      width: 40px;
      height: 40px;
      border-radius: 40px;
      text-align: center;
      line-height: 40px;
      font-family: roboto;
      font-weight: bold;
      font-size: 20px;
      color: #2FB7EC;
  }

  .mobile-contest-page .rating-section .rating-content-container .rating-user-name {
      font-size: 14px;
      color: #3C4646;
      font-weight: bold;
  }

  .mobile-contest-page .rating-section .rating-content-container .rating-stars {
      top: 0px;
      right: 0px;
      position: absolute;
  }

  .mobile-contest-page .rating-section .rating-content-container .rating-stars .star-img {
      float: left;
      width: 16px;
      height: 16px;
      padding-right: 4px;
  }

  .mobile-contest-page .rating-section .rating-content-container .rating-date {
      font-size: 14px;
      color: #959F9F;
  }

  .mobile-contest-page .rating-section .rating-content-container .rating-content {
      font-size: 14px;
      color: #3C4646;
  }

  .mobile-contest-page .sizing-title {
      padding-top: 24px;
      padding-bottom: 16px;
      padding-left: 16px;
  }

  .mobile-contest-page .sizing-container {
      padding-left: 16px;
      padding-right: 16px;
  }

  .mobile-contest-page .sizing-container .sizing-name {
      display: inline-block;
      color: #3C4646;
      font-size: 14px;
      width: 90px;
  }

  .mobile-contest-page .sizing-container .sizing-bar {
      display: inline-block;
      vertical-align: middle;
      height: 11px;
      border-radius: 11px;
      width: calc(100vw - 128px);
      background-color: #F3F3F8;
      position: relative;
      overflow: hidden;
  }

  .mobile-contest-page .sizing-container .sizing-bar .sizing-bar-filled {
      position: absolute;
      top: 0px;
      left: -5%;
      height: 11px;
      background-color: #2FB7EC;
      border-radius: 11px;
  }

  .mobile-contest-page .sizing-subtitle {
      margin-top: 16px;
      margin-right: 16px;
      float: right;
      font-size: 12px;
      color: #B0BFBF;
  }

  .mobile-contest-page .store-info-title-container {
      margin-top: 24px;
      margin-left: 16px;
      margin-right: 16px;
  }

  .mobile-contest-page .store-info-title-container .store-info-title {
      float: left;
  }

  .mobile-contest-page .store-info-title-container .view-store-info {
      float: right;
  }

  .mobile-contest-page .store-info-container {
      font-size: 14px;
      margin-left: 16px;
      margin-right: 16px;
      margin-top: 16px;
  }

  .mobile-contest-page .store-info-container .store-img-container {
      margin-right: 8px;
      display: inline-block;
      vertical-align: middle;
  }

  .mobile-contest-page .store-info-container .store-detail-container {
      display: inline-block;
      vertical-align: middle;
      width: calc(100vw - 90px);
  }

  .mobile-contest-page .store-info-container .store-img-container .store-img {
      vertical-align: middle;
      width: 40px;
      height: 40px;
  }

  .mobile-contest-page .store-info-container .store-detail-container .store-name {
      font-weight: bold;
      color: #3C4646;
      margin-bottom: 8px;
  }

  .mobile-contest-page .store-info-container .store-detail-container .store-feedback {
      color: #959F9F;
  }

  .mobile-contest-page .contest-product-details-container {
      // margin-left: 16px;
      // margin-right: 16px;
      // margin-top: 24px;
      display: block;
      padding: 24px 16px;
  }

  .mobile-contest-page .contest-product-details-container .contest-product-details-text {
      display: inline-block;
  }

  .mobile-contest-page .contest-product-details-container .arrow-img-container {
      float: right;
      display: inline-block;
      transition: transform .3s;
  }

  .mobile-contest-page .contest-product-details-container .arrow-img-container .arrow-img {
      width: 12px;
      height: 12px;
  }

  .mobile-contest-page .contest-price-banner-bottom {
      width: 100%;
      height: 56px;
      position: fixed;
      background-color: #1B2020;
      bottom: 0px;
      z-index: 10;
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
  }

  .mobile-contest-page .contest-price-banner-bottom .contest-price {
      display: inline-block;
      margin-left: 16px;
      font-family: roboto;
      height: 56px;
      line-height: 56px;
  }

  .mobile-contest-page .contest-price-banner-bottom .contest-bottom-button {
      display: inline-block;
      height: 40px;
      border-radius: 2px;
      font-weight: bold;
      font-size: 14px;
      color: white;
      background-color: #EA9C51;
      width: 96px;
      text-align: center;
      line-height: 40px;
      position: absolute;
      top: 8px;
      right: 16px;
  }

  @media (min-width: 350px) {
      .mobile-contest-page .contest-price-banner-bottom .contest-bottom-button {
          width: 140px;
      }
  }

  .mobile-contest-page .contest-price-banner-bottom .contest-price .contest-real-price {
      color: #EA9C51;
      font-size: 18px;
      font-weight: bold;
      margin-right: 8px;
  }

  @media (min-width: 350px) {
      .mobile-contest-page .contest-price-banner-bottom .contest-price .contest-real-price {
          font-size: 24px;
      }
  }

  .mobile-contest-page .contest-price-banner-bottom .contest-price .contest-retail-price {
      text-decoration: line-through;
      font-size: 18px;
      color: #B0BFBF;
  }

  @media (min-width: 350px) {
      .mobile-contest-page .contest-price-banner-bottom .contest-price .contest-retail-price {
          font-size: 20px;
      }
  }

  .mobile-contest-page .contest-price-banner-bottom .contest-price .banner-currency-subscript {
      display: inline-block;
      color: #4e5867;
      font-size: 9px;
      font-weight: normal;
      margin-left: 1px;
  }

  .mobile-contest-page .contest-price-banner-bottom .contest-sold-out-button {
      // opacity: 0.7;
      display: none;
      background: rgb(213,213,213);
  }

  .main-color-background {
      background: #2FB7EC !important;
  }

  .mobile-contest-page .mobile-contest-menu {
      top: 64px;
      position: fixed;
      z-index: 999;
      color: white;
      width: 100%;
      height: 48px;
      font-size: 14px;
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
  }

  .mobile-contest-page .mobile-contest-menu li {
      display: block;
      float: left;
      text-align: center;
      padding-left: 16px;
      padding-right: 16px;
      height: 48px;
      line-height: 48px;
      opacity: 0.6;
  }

  .mobile-contest-page .mobile-contest-menu .selected-tab {
      border-bottom-width: 4px;
      border-bottom-color: white;
      border-bottom-style: solid;
      font-weight: bold;
      opacity: 1;
      height: 44px;
  }

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

  .mobile-page-state-loading .page-state-loading-icon, .mobile-page-state-default-loading .page-state-loading-icon, .mobile-page-state-error .page-state-loading-icon, .mobile-page-state-no-items .page-state-loading-icon {
      background-image: url(../assets/images/ajax_loader_small.gif?v=13);
      background-size: 32px 32px;
      background-position: center top;
      background-repeat: no-repeat;
      width: 100%;
      height: 32px;
      margin-bottom: 15px;
  }

  .wish-loader {
      margin: 0 auto;
      width: 70px;
      text-align: center;
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

  .wish-loader .circle2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
  }
</style>
<script>
// import $ from 'jquery'
import MyHeader from '../components/header'
import MyLoading from '../components/base/loadingThreePoints'
import Bus from '../_common/js/bus'
import qs from 'qs'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import hVideo from '../components/h-video'

let $ = function (ele) {
  return document.querySelector(ele)
}

export default {

  name: 'productDetail',
  components: { MyHeader, MyLoading, swiper, swiperSlide, hVideo },
  data () {
    return {
      hasVideo: false,
      hasPlayVideo: false,
      swiperOption: {
        // some swiper options/callbacks
        on: {
          slideChange: this.slideChange
        }
      },
      isShow: {
        '#descr': false,
        '#ship': false,
        '#spec': false
      },
      isShowMask: false, // 是否显示购买弹出的遮罩
      popupVisible: false, // 是否显示购买成功后的商品动画
      isFirstLoading: false, // 是否首次加载（区别于滚动加载） 3个点的loading
      detail: {
        images: []
      }, // 产品详情
      colorStatus: {
        colorValues: [], // color变种
        existence: false, // 是否存在color该变种
        isShow: false, // 颜色的sku展示和隐藏
        isSelected: true, // color的子sku是否选择
        value: null // 被选中的值
      },
      sizeStatus: {
        sizeValues: [], // size变种
        existence: false, // 是否存在size该变种
        isShow: false, // 尺寸的sku展示和隐藏
        isSelected: true, // size的子sku是否选择
        value: null // 被选中的值
      },
      currentSku: {
        type: '',
        list: [],
        step: '' // 当前选择sku到第几步 begin 和 end
      }, // 当前的sku的类型
      variationsCache: {}, // 用来存储改变后的变量
      sizeColorMap: {}, // 尺寸和颜色的映射
      prodcutId: '', // 产品id
      currentImg: '', // 当前放大的图片url
      currentImgIndex: 1, // 当前图片的下标
      clientWidth: '', // 设备宽度
      dataObject: '', // data对象
      isSkuPopupShow: false // 是否显示多sku
    }
  },
  created () {
    this.prodcutId = this.$route.params.id
    this.clientWidth = document.documentElement.clientWidth + 'px'
    this.fetch()
  },
  methods: {
    playVideo () {
      // 添加视屏
      this.hasPlayVideo = true
      // 视频位置调整
      let contestVideo = document.querySelector('.photo-slide-container')
      let domVideo = document.querySelector('.contest-video .video-player div')
      if (domVideo) {
        domVideo.setAttribute('style', 'height:' + contestVideo.clientHeight + 'px !important')
      }
      // 第一张图片隐藏
      this.$refs.mySwiper.$children[0].$el.firstChild.style = 'display:none'
      // 轮播中嵌入 视频
      this.$refs.mySwiper.$children[0].$el.appendChild(this.$refs.video.$el)
      // 播放视频
      let vdo = this.$refs.video.$refs.videoPlayer.$refs.video
      vdo.currentTime = 0
      vdo.play()
    },
    onCancel () {
      this.hasPlayVideo = false
      // 第一张图片展示
      this.$refs.mySwiper.$children[0].$el.firstChild.style = 'display:block'
      // 暂停视频
      let vdo = this.$refs.video.$refs.videoPlayer.$refs.video
      vdo.pause()
    },
    hideSkuPopup () { // 隐藏sku弹窗
      this.isSkuPopupShow = false
    },
    backToSize () { // 返回size选择的目录
      this.currentSku.step = 'begin'
      this.currentSku.type = 'size'
      this.currentSku.list = []
      var sizeList = this.sizeStatus.sizeValues
      for (var i = 0; i < sizeList.length; i++) {
        this.currentSku.list.push({
          size: sizeList[i]
        })
      }
    },
    selectSku (sku) {
      // 如果是第一步 ，那么需要跳转到第二部
      if (this.currentSku.step === 'begin') {
        this.currentSku.step = 'end'
        this.currentSku.type = 'color'
        this.sizeStatus.value = sku.size
        console.log(sku)
        // this.currentSku.list = this.sizeColorMap[sku.size]
        // 选择某个size后: 如果某个color存在并且quantity大于0就显示价格；否则就都是中划线
        // 拼接
        // 颜色分组[red,blue,green]
        // 看看red_xs是否有这个组合，没有的话，就给他push一个quantity:0
        // 动态生成的。
        let colorValues = this.colorStatus.colorValues
        let colorList = []
        for (var i = 0; i < colorValues.length; i++) {
          var key = colorValues[i] + '_' + sku.size
          if (this.variationsCache[key]) {
            colorList.push(this.variationsCache[key])
          } else {
            colorList.push({
              color: colorValues[i],
              quantity: 0
            })
          }
        }
        this.currentSku.list = colorList

      } else {
        // 如果是第二步 那么就先判断是否有库存 有库存的话 就将该物品加入购物车
        if (sku.quantity > 0) {
          this.currentVariation = sku
          this.isSkuPopupShow = false
          this.addToCart()
        }
      }

    },
    slideChange () {
      this.currentImgIndex = this.swiper.activeIndex + 1
      // 播放开启
      if (this.currentImgIndex === 1 && this.hasPlayVideo) {
        let vdo = this.$refs.video.$refs.videoPlayer.$refs.video
        vdo.play()
      }
      // 播放关闭
      if (this.currentImgIndex !== 1 && this.hasPlayVideo) {
        let vdo = this.$refs.video.$refs.videoPlayer.$refs.video
        vdo.pause()
      }
    },
    buy () {
      // 选择sku
      if (this.detail.variations && this.detail.variations.length) {
        this.isSkuPopupShow = true
        // 2个 sku都存在
        if (this.sizeStatus.existence && this.colorStatus.existence) {
          this.currentSku.type = 'size'
          this.currentSku.step = 'begin'
          // 获取到该sku的列表 （并且进行判断 某个size后面对应的color是否包含全部）
          this.currentSku.list = []
          var sizeList = this.sizeStatus.sizeValues
          for (var i = 0; i < sizeList.length; i++) {
            this.currentSku.list.push({
              size: sizeList[i]
            })
          }
          // this.currentSku.list = this.detail.sizeValues
          // 或者说和pc端的一样 展示全部的颜色和sku 没有的话 就用中划线
        }
        // 只存在一个sku
        if (this.sizeStatus.existence && !this.colorStatus.existence) {
          this.currentSku.type = 'size'
          this.currentSku.step = 'end'
          // 获取到该sku的列表
          this.currentSku.list = this.detail.variations
        }
        if (!this.sizeStatus.existence && this.colorStatus.existence) {
          this.currentSku.type = 'color'
          this.currentSku.step = 'end'
          // 获取到该sku的列表
          this.currentSku.list = this.detail.variations
        }
      } else {
        this.addToCart()
      }
    },
    addToCart () {
      // 判断是否登录 没登录就去登录
      if (!this.isLogin) {
        this.$router.replace({
          path: '/login',
          query: {redirect: this.$router.currentRoute.fullPath}
        })
        return
      }
      // 正真的进行购买
      this.isShowMask = true
      document.body.style.overflow = 'hidden'
      // 添加到购物车接口
      // 判断是否登录
      setTimeout(() => {
        let data = {
          'productId': this.detail.id,
          'quantity': 1 // wish是1 然后到购物车里面进行修改
        }
        if (this.detail.variations && this.detail.variations.length) {
          data.productAttributeId = this.currentVariation.id
        }
        this.$axios.post(this.ApiList.cartAdd, qs.stringify(data))
          .then((res) => {
            // 通知头部购物车进行更新
            Bus.$emit('cart-refresh')
            this.isShowMask = false
            document.body.style.overflow = ''
            this.popupVisible = true
            window.setTimeout(() => {
              this.popupVisible = false
            }, 1500)
          })
          .catch((err) => {
            this.isShowMask = false
            document.body.style.overflow = ''
            if (!err.data.success) {
              this.$messagebox({
                title: 'Oops!',
                message: err.data.msg,
                confirmButtonText: 'ok',
                confirmButtonHighlight: true
              })
            }
          })
        }, 500)

    },
    toggleDescr (ele) {
      this.isShow[ele] = !this.isShow[ele]
      var body = document.querySelector(ele)
      var height = body.getBoundingClientRect().height
      if (!!height) {
        body.style.height = height + 'px'
        var f = document.body.offsetHeight // 引起强制重绘，这样最新的样式就得到应用
        body.style.height = '0px'
      } else {
        body.style.height = 'auto'
        height = body.getBoundingClientRect().height
        body.style.height = '0'
        var f = document.body.offsetHeight
        // height = height > 200 ? 200 : height
        body.style.height = height + 'px'
      }
    },
    fetch () {
      this.$axios(this.ApiList.productDetail + this.prodcutId)
        .then((res) => {
          this.detail = res.data.product
          if (this.detail.video) {
            this.hasVideo = true
            this.$refs.video.playerOptions.sources.push({
              type: '',
              src: this.detail.video
            })
          }
          if (this.detail.images) {
            this.currentImg = this.detail.images[0]
          } else {
            this.detail.images = ['https://contestimg.wish.com/api/webimage/543c8b127541ce3172f44f88-1-large.jpg', 'https://contestimg.wish.com/api/webimage/543c8b127541ce3172f44f88-2-large.jpg']
          }
          if (!this.detail.mainImage) {
            this.detail.mainImage = 'https://contestimg.wish.com/api/webimage/562058beb92a7815fe7d3d86-large.jpg?cache_buster=a9f144ebd01cb6fe3e85dd0d73f407f5'
          }
          // 拼接sku的列表
          if (this.detail.variations && this.detail.variations.length) {
            // if (this.detail.colorValues && this.detail.colorValues.length) {
            //   this.colorStatus.existence = true
            // }
            // if (this.detail.sizeValues && this.detail.sizeValues.length) {
            //   this.sizeStatus.existence = true
            // }
            // if (this.colorStatus.existence && this.sizeStatus.existence) {
              // for (var i = 0; i < this.detail.sizeValues.length; i++) {
              //   this.sizeColorMap[this.detail.sizeValues[i]] = []
              // }
              var variations = this.detail.variations
              for (var i = 0; i < variations.length; i++) {
                // this.sizeColorMap[[variations[i].size]].push(variations[i])
                // === 标准化图片字段（优先顺序：image -> img -> picUrl -> detail.mainImage） ===
                variations[i].img = variations[i].image || variations[i].img || variations[i].picUrl || this.detail.mainImage || ''
                var key = variations[i].color + '_' + variations[i].size
                this.variationsCache[key] = variations[i]
                if (variations[i].color && this.colorStatus.colorValues.indexOf(variations[i].color) === -1) {
                  this.colorStatus.colorValues.push(variations[i].color)
                }
                if (variations[i].size && this.sizeStatus.sizeValues.indexOf(variations[i].size) === -1) {
                  this.sizeStatus.sizeValues.push(variations[i].size)
                }
              }
              if (this.colorStatus.colorValues && this.colorStatus.colorValues.length) {
                this.colorStatus.existence = true
              }
              if (this.sizeStatus.sizeValues && this.sizeStatus.sizeValues.length) {
                this.sizeStatus.existence = true
              }
            // }
          }
          //ssss
          // this.addToCart()
        })
        .catch((err) => {
          console.log(err)
          if (!err.data.success) {
            this.$messagebox({
              title: 'Oops!',
              message: err.data.msg,
              confirmButtonText: 'ok',
              confirmButtonHighlight: true
            })
          }
        })
    },
    onError () {
      this.hasVideo = false
      this.hasPlayVideo = false
    }
  },
  watch: {
    popupVisible (val, oldVal) {
      // 当关闭的时候 购物车放大
      console.log(val)
      if (!val) {
        Bus.$emit('cart-zoom')
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    isLogin () {
      return this.$store.getters.getLoginStatus
    }
  },
  mounted() {
    console.log(this.$refs.mySwiper)
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

