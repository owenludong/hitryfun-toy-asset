<template>
  <div class="cp-carousel">
    <div
      class="cp-slides"
      :style="{ transform: 'translateX(-' + active * 100 + '%)' }"
    >
      <img
        v-for="(img, i) in imgs"
        :key="i"
        :src="img.src390"
        :srcset="img.src390 + ' 390w, ' + img.src780 + ' 780w'"
        sizes="100vw"
        width="780"
        height="430"
        fetchpriority="high"
        decoding="async"
        alt="Custom cat squishy banner"
      />
    </div>

    <!-- 如果以后想显示小圆点，取消注释即可 -->
    <!--
    <div class="cp-dots">
      <span
        v-for="(img, i) in imgs"
        :key="i"
        class="cp-dot"
        :class="{ active: i === active }"
      ></span>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: "HeroCarousel",
  data() {
    return {
      active: 0,

      // 这里就是你的 CDN 多分辨率 Banner
      imgs: [
        {
          src390: "https://www.calmpurr.com/img/banner/banner-390.webp",
          src780: "https://www.calmpurr.com/img/banner/banner-780.webp",
        }
      ]
    };
  },

  mounted() {
    setInterval(() => {
      this.active = (this.active + 1) % this.imgs.length;
    }, 3000);
  }
};
</script>

<style scoped>
.cp-carousel {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.cp-slides {
  display: flex;
  transition: transform 0.6s ease;
}

.cp-slides img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

/* 如果你启用小圆点，这些样式保留 */
.cp-dots {
  text-align: center;
  margin-top: 8px;
}
.cp-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d1d5db;
  margin: 0 3px;
}
.cp-dot.active {
  background: #a7e0c4;
}
</style>
