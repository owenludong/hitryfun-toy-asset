<template>
  <div class="cp-detail-coupons">
    <div
      v-for="(c, i) in coupons"
      :key="i"
      class="cp-detail-coupon"
      @click="copy(c.code, i)"
    >
      <div class="cp-main">
        <div class="cp-title">{{ c.title }}</div>
        <div class="cp-code">{{ $t('code') }}: {{ c.code }}</div>
        <div class="cp-desc">{{ c.desc }}</div>
      </div>

      <!-- Copied 提示 -->
      <transition name="fade">
        <div v-if="copiedIndex === i" class="cp-toast">
          Copied!
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "CouponsRowDetail",
  data() {
    return {
      copiedIndex: null,
      coupons: [
        { title: this.$t('couponoff5title'),  desc: this.$t('couponoff5desc'), code: "OFF5"  },
        { title: this.$t('couponoff10title'), desc: this.$t('couponoff10desc'), code: "OFF10" },
        { title: this.$t('couponoff15title'), desc: this.$t('couponoff15desc'), code: "OFF15" }
      ],
    };
  },
  methods: {
    async copy(code, idx) {
      try {
        await navigator.clipboard.writeText(code);
        this.copiedIndex = idx;
        setTimeout(() => (this.copiedIndex = null), 900);
      } catch (e) {
        alert("Copied: " + code);
      }
    },
  },
};
</script>

<style scoped>
/* 整排和标题一样左右 16px，居中对称、无滚动条 */
.cp-detail-coupons {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin: 10px 16px 12px;
}

/* 每个卡片平均分 1/3 宽，变矮一点 */
.cp-detail-coupon {
  flex: 1 1 0;
  min-width: 0;
  background: #fff7ec;
  border: 1px solid #f2d7b6;
  border-radius: 12px;
  padding: 8px 6px 6px;
  position: relative;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-align: center;
}

.cp-detail-coupon:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* 让三行文字都居中、靠一起，整体看起来更低矮 */
.cp-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.cp-title {
  font-size: 13px;
  font-weight: 700;
  color: #d47b25;
}

.cp-code {
  background: #ffffff;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: 600;
  color: #d47b25;
}

.cp-desc {
  font-size: 11px;
  color: #555;
}

/* Copied 提示，完全浮在卡片上方，不会被遮一半 */
.cp-toast {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.78);
  color: #fff;
  padding: 2px 6px;
  font-size: 10px;
  border-radius: 4px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 5;
}

/* 进入/离开淡入淡出 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 小屏再稍微压一压高度 */
@media (max-width: 414px) {
  .cp-detail-coupon {
    padding: 6px 4px 5px;
  }
  .cp-title {
    font-size: 12px;
  }
  .cp-code,
  .cp-desc {
    font-size: 10px;
  }
}
</style>
