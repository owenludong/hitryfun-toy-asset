<template>
  <section class="cp-faq">
    <h2 class="cp-section-title">{{ $t('faq') }}</h2>
    <div
      v-for="(item, i) in faqList"
      :key="i"
      class="cp-faq-item"
      :class="{ active: active === i }"
    >
      <div class="cp-faq-q" @click="toggle(i)">
        {{ item.q }}
        <span>{{ active === i ? '-' : '+' }}</span>
      </div>
      <transition name="fade">
        <div v-show="active === i" class="cp-faq-a">
          {{ item.a }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqAccordion',
  data() {
    return {
      active: null,
      faqList: [
        {
          q: this.$t('faq1'),
          a: this.$t('faq1answer'),
        },
        {
          q: this.$t('faq2'),
          a: this.$t('faq2answer'),
        },
        {
          q: this.$t('faq3'),
          a: this.$t('faq3answer'),
        },
        {
          q: this.$t('faq4'),
          a: this.$t('faq4answer'),
        },
        {
          q: this.$t('faq5'),
          a: this.$t('faq5answer'),
        },
      ],
    };
  },
  methods: {
    toggle(i) {
      this.active = this.active === i ? null : i;
    },
  },
};
</script>

<style scoped>
.cp-faq {
  padding: 18px 14px;
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
}

/* 标题统一风格 */
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

/* FAQ 内容 */
.cp-faq-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 6px 0;
  transition: background 0.3s ease;
}

/* 问题区块（淡灰背景） */
.cp-faq-q {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Georgia", "Times New Roman", "PingFang SC", "Songti SC", serif;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
  color: #333;
  line-height: 1.6;
  padding: 10px 12px;
  border-radius: 8px;
  background: #f3f5f6;
  transition: all 0.25s ease;
}
.cp-faq-q:hover {
  background: #edf1f2;
  color: #222;
  transform: scale(1.01);
}
.cp-faq-q span {
  font-size: 1rem;
  color: #7fb0d1;
  margin-left: 6px;
}

/* 展开状态背景略深 */
.cp-faq-item.active .cp-faq-q {
  background: #eaf2f1;
  color: #222;
}

/* 答案区块 */
.cp-faq-a {
  font-family: "Georgia", "Times New Roman", "PingFang SC", "Songti SC", serif;
  color: #444;
  padding: 8px 12px 10px;
  font-size: 0.9rem;
  line-height: 1.6;
  letter-spacing: 0.2px;
  white-space: pre-line;
  background: #fff;
  border-radius: 8px;
  margin-top: 4px;
  transition: background 0.3s ease;
}

/* 展开淡入动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
