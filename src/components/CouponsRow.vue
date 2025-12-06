<template>
  <div class="cp-coupons">
    <div
      v-for="(coupon, i) in coupons"
      :key="i"
      class="cp-coupon"
      @click="copyCode(coupon.code, i)"
    >
      <div class="cp-coupon-body">
        <strong>{{ coupon.title }}</strong>
        <p>{{ coupon.desc }}</p>
        <span class="cp-code">CODE: {{ coupon.code }}</span>
      </div>

      <!-- 复制后提示气泡（保持原样） -->
      <transition name="fade">
        <div v-if="copiedIndex === i" class="cp-toast">Copied!</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponsRow',
  data() {
    return {
      copiedIndex: null,
      coupons: [
        { title: this.$t('couponoff5title'),  desc: this.$t('couponoff5desc'), code: "OFF5"  },
        { title: this.$t('couponoff10title'), desc: this.$t('couponoff10desc'), code: "OFF10" },
        { title: this.$t('couponoff15title'), desc: this.$t('couponoff15desc'), code: "OFF15" }
      ]
    };
  },
  methods: {
    async copyCode(code, index) {
      try {
        await navigator.clipboard.writeText(code);
        this.copiedIndex = index;
        setTimeout(() => (this.copiedIndex = null), 1000); // 动画1秒消失
      } catch (err) {
        alert('Copied: ' + code);
      }
    },
  },
};
</script>

<style scoped>
/* 容器更矮 + 不换行；允许纵向可见以显示提示气泡 */
.cp-coupons {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: nowrap;              /* 三张一行 */
  margin: 10px 8px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.04);
  padding: 3px 0;                 /* 总体高度更矮 */
  overflow-x: auto;               /* 窄屏时可横滑 */
  overflow-y: visible;            /* ✅ 不裁剪纵向浮层 */
  position: relative;
}

/* 卡片更矮，略加宽以稳住三张一行 */
.cp-coupon {
  flex: 0 0 31.5%;                /* 计算后不会跨行 */
  background: linear-gradient(180deg, #fca5a5 0%, #f87171 100%);
  color: #fff;
  border-radius: 8px;
  position: relative;             /* ✅ 让气泡绝对定位到卡片内部 */
  text-align: center;
  padding: 3px 4px 5px;           /* 上下间距更小 → 更矮 */
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: visible;              /* ✅ 卡片内元素不被裁剪 */
}
.cp-coupon:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.cp-coupon-body strong {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0;
}
.cp-coupon-body p {
  font-size: 0.65rem;
  margin: 0 0 1px;
  opacity: 0.9;
  line-height: 1.1;
}
.cp-code {
  display: inline-block;
  background: #fff;
  color: #d43f3f;
  font-size: 0.58rem;
  font-weight: 600;
  border-radius: 3px;
  padding: 1px 5px;
  letter-spacing: 0.3px;
}

/* 切口 */
.cp-coupon::before,
.cp-coupon::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #f3f4f6;
  border-radius: 50%;
}
.cp-coupon::before { left: -3px; }
.cp-coupon::after  { right: -3px; }

/* ✅ Copied! 气泡：移到卡片内部顶部居中，避免被任何 overflow 裁剪 */
.cp-toast {
  position: absolute;
  top: 6px;                       /* ✅ 不再用负数，确保在卡片内部 */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.78);
  color: #fff;
  font-size: 0.55rem;
  padding: 2px 6px;
  border-radius: 4px;
  z-index: 10;                    /* 保证在卡片之上 */
  pointer-events: none;           /* 不阻塞点击 */
  animation: floatIn 0.25s ease both;
}
@keyframes floatIn {
  from { opacity: 0; transform: translate(-50%, -4px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
}

/* 过渡（保持你原来的名字 fade） */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 移动端微调 */
@media (max-width: 480px) {
  .cp-coupon {
    flex: 0 0 31.5%;
    padding: 3px 3px 5px;
  }
  .cp-coupon-body strong { font-size: 0.78rem; }
  .cp-code { font-size: 0.55rem; }
}
</style>
