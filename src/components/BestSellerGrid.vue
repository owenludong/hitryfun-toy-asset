<template>
  <section class="cp-section">
    <h2 class="cp-section-title">{{ $t('bestseller') }}</h2>
    <div class="cp-grid">
      <div v-for="(item, i) in list" :key="i" class="cp-product" @click="showDetail(item.id)">
        <div class="cp-img-wrapper">
          <img :src="item.mainImage || placeholder(i)" :alt="item.name" />
          <span v-if="[2460, 2461].includes(item.id)" class="cp-badge">Custom Link</span>
        </div>
        <h3 class="cp-product-title" :style="{display: '-webkit-box', WebkitLineClamp: 2,WebkitBoxOrient: 'vertical',overflow: 'hidden',textOverflow: 'ellipsis'}">{{ item.name || 'Product ' + (i + 1) }}</h3>

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
  name: 'BestSellerGrid',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // ✅ 新增：价格格式化方法 (与 Index.vue 逻辑一致)
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
      const c = ['#f6fffa', '#f0fff4', '#ecfdf5', '#e0f2f1'][i % 4];
      return (
        'data:image/svg+xml;utf8,' +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
             <rect width="300" height="300" fill="${c}"/>
             <text x="50%" y="50%" text-anchor="middle" font-size="18" fill="#666">cat${i + 1}</text>
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
.cp-section {
  padding: 14px;
}

.cp-section h2 {
  margin: 0 0 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.cp-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.cp-product {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  text-align: center;
  padding-bottom: 8px;
}

.cp-product img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

/* === 🌸 柔和文艺风标题样式 === */
.cp-product-title {
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

.cp-product-title:hover {
  color: #222;
  transform: scale(1.02);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.cp-price {
  color: #ef4444;
  font-weight: bold;
  font-size: 0.85rem;
}

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

.cp-old-price {
  color: #999;
  font-weight: normal;
  font-size: 0.8rem;
  text-decoration: line-through;
  margin-left: 6px;
  vertical-align: middle;
  opacity: 0.8;
}
.cp-img-wrapper {
  position: relative;
}

.cp-badge {
  position: absolute;
  top: 6px;
  left: 6px;
  background: linear-gradient(135deg, #9dd6c2, #7fb0d1);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 6px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}
</style>
