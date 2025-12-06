<template>
  <section class="cp-recommend">
    <h2 class="cp-section-title">{{ $t('recommendforyou') }}</h2>
    <div class="cp-scroll">
      <div v-for="(item, i) in list" :key="i" class="cp-item" @click="showDetail(item.id)">
        <img :src="item.mainImage || placeholder(i)" :alt="item.name" />
        <h3 class="cp-item-title" :style="{display: '-webkit-box', WebkitLineClamp: 2,WebkitBoxOrient: 'vertical',overflow: 'hidden',textOverflow: 'ellipsis'}">{{ item.name || 'Recommended ' + (i + 1) }}</h3>

        <p class="cp-price">
          {{ formatPrice(item.productPrice) }}
          <span v-if="item.originalPrice" class="cp-old-price">
            {{ formatPrice(item.originalPrice) }}
          </span>
        </p>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecommendScroller',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // ✅ 新增：价格格式化方法 (统一逻辑)
    formatPrice(basePrice) {
      if (basePrice === null || basePrice === undefined) return '';

      const currency = localStorage.getItem('currency') || 'EUR';
      const rate = parseFloat(localStorage.getItem('currencyRate')) || 1;

      let finalPrice = basePrice * rate;

      // 非欧元强制 .99 结尾
      if (currency !== 'EUR') {
        finalPrice = Math.floor(finalPrice) + 0.99;
      }

      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(finalPrice);
    },

    placeholder(i) {
      const c = ['#f6fffa', '#fff4f2', '#f0fdfa'][i % 3];
      return (
        'data:image/svg+xml;utf8,' +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
             <rect width="300" height="300" fill="${c}"/>
             <text x="50%" y="50%" text-anchor="middle" font-size="18" fill="#666">Rec${i + 1}</text>
           </svg>`
        )
      );
    },
    // 显示商品详情
    showDetail (id) {
      this.$router.push({path: `/product/${id}`})
    },
  },
};
</script>

<style scoped>
.cp-recommend {
  padding: 14px;
}

/* 标题样式 */
.cp-section-title {
  font-family: "Poppins", "Helvetica Neue", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin: 24px 0 14px;
  position: relative;
}
.cp-section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #9dd6c2, #7fb0d1);
  border-radius: 2px;
  margin: 8px auto 0;
}

/* 横向滚动容器 */
.cp-scroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 6px;
  scroll-padding: 6px;
}

/* 单个产品卡片（宽度优化） */
.cp-item {
  flex: 0 0 58%;
  max-width: 58%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  scroll-snap-align: center;
  padding-bottom: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.cp-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.cp-item img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

/* 🌿 柔和文艺风标题样式 */
.cp-item-title {
  margin: 6px 8px 2px;
  font-family: "Georgia", "Times New Roman", "PingFang SC", "Songti SC", serif;
  font-weight: 500;
  color: #444;
  font-size: 0.95rem;
  line-height: 1.35;
  letter-spacing: 0.3px;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important; /* ✅ 缺失的关键属性 */
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease, transform 0.3s ease;
}
.cp-item-title:hover {
  color: #222;
  transform: scale(1.02);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* 价格样式 */
.cp-price {
  color: #ef4444;
  font-weight: bold;
  font-size: 0.85rem;
  margin-top: 2px;
}

/* ===== 自适应优化 ===== */
@media (min-width: 768px) {
  .cp-item {
    flex: 0 0 35%;
    max-width: 35%;
  }
}

.cp-old-price {
  color: #999;
  font-weight: normal;
  font-size: 0.8rem;
  text-decoration: line-through;
  margin-left: 6px;
  vertical-align: middle;
  opacity: 0.8;
}
</style>
