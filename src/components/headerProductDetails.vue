<template>
  <div id="parentDiv">
    <div class="fade-layer" v-show="isFading">
      <div class="loader-cat">
        <div class="loader-shadow"></div>
        <img src="https://www.calmpurr.com/img/logo/logo-tou6.webp">
      </div>
    </div>

    <div id="header" class="detail-header">
      <div class="menu">
        <div class="go-back-button" @click="goBack"></div>

        <div class="page-name">
          {{ pageTitle }}
        </div>
      </div>

      <ul class="right-btn">

        <li class="currency-button-container" @click="showCurrencySheet = true"></li>

        <li
          class="lang-button-container inline-block"
          @click="showLangSheet = true"
        ></li>

        <li
          class="cart-button-container inline-block"
          :class="{ 'bounce': isCartZoom }"
          @click="goCart"
          v-show="isLogin"
        >
          <span class="cart-quantity" v-show="cartCount !== 0">{{ cartCount }}</span>
        </li>

      </ul>
    </div>

    <div class="lang-overlay" v-if="showLangSheet" @click="showLangSheet = false">
      <div class="lang-panel" @click.stop>
        <div class="lang-title">Select Language</div>

        <div class="lang-item" @click="changeLang('en')">
          <span class="flag">🇬🇧</span>
          <span>English</span>
        </div>

        <div class="lang-item" @click="changeLang('de')">
          <span class="flag">🇩🇪</span>
          <span>Deutsch</span>
        </div>

        <div class="lang-item" @click="changeLang('fr')">
          <span class="flag">🇫🇷</span>
          <span>Français</span>
        </div>

        <div class="lang-item" @click="changeLang('es')">
          <span class="flag">🇪🇸</span>
          <span>Español</span>
        </div>

        <div class="lang-cancel" @click="showLangSheet = false">
          Cancel
        </div>
      </div>
    </div>

    <div class="lang-overlay" v-if="showCurrencySheet" @click="showCurrencySheet = false">
      <div class="lang-panel" @click.stop>
        <div class="lang-title">{{ $t('selectCurrency') }}</div>

        <div class="lang-item"
             v-for="item in currencyActions"
             :key="item.code"
             @click="changeCurrency(item.code)">
          <span class="flag">{{ item.symbol }}</span>
          <span>{{ item.name }} ({{ item.code }})</span>
        </div>

        <div class="currency-note">
          {{ $t('currencyChangeTips') }}
        </div>

        <div class="lang-cancel" @click="showCurrencySheet = false">
          Cancel
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  /* 🌐 右上角语言按钮（地球图标） */
  .lang-button-container {
    width: 44px;
    height: 44px;
    background-image: url('data:image/svg+xml;utf8,<svg fill="none" stroke="%23333333" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 010 20"/><path d="M12 2a15 15 0 000 20"/></svg>');
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  /* ✅ 修改：币种按钮样式 */
  .currency-button-container {
    width: 44px;
    height: 44px;
    /* 深色线条图标 (适配白底 Header) */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="%23333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>');
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    margin-right: 0;
  }

  /* 🔹 遮罩层 */
  .lang-overlay {
    position: fixed;
    left: 0; top: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 2000;
  }

  /* 🔹 弹层主体 */
  .lang-panel {
      width: 92%;
      margin-bottom: 20px;
      background: #fff;
      border-radius: 16px;
      padding: 16px 0;
      box-shadow: 0 8px 28px rgba(0,0,0,0.2);
      animation: slideUp 0.25s ease-out;

      /* 限制最大高度，超出显示滚动条 */
      max-height: 60vh;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .lang-title {
    text-align: center; font-size: 16px; padding-bottom: 12px;
    font-weight: 600; color: #333;
  }

  .lang-item {
    display: flex; align-items: center;
    /* gap: 10px; 已删除，改为固定宽度控制 */
    padding: 14px 20px; font-size: 15px;
    border-bottom: 1px solid #f1f1f1; cursor: pointer;
  }
  .lang-item:last-child { border-bottom: none; }

  /* ✅ 修改：固定宽度 flag，确保对齐 */
  .lang-item .flag {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    display: inline-block;
    width: 45px;        /* 关键：给符号预留足够且固定的宽度 */
    text-align: left;
    flex-shrink: 0;
  }


  /* 币种结算提示样式 */
  .currency-note {
    font-size: 12px;
    color: #999999;
    text-align: center;
    padding: 12px 16px 0;
    line-height: 1.4;
  }

  /* 修改原有的 lang-cancel */
  .lang-cancel {
    text-align: center;
    padding: 12px 0;
    font-size: 15px;
    color: #555;
    background: #fff;
    border-radius: 12px;
    margin-top: 12px;
    margin-bottom: 4px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }

  .bounce { animation: pulsate 1500ms 1 alternate ease-in-out; }
  @keyframes pulsate {
    0%   { transform: scale(1) }
    15%  { transform: scale(1.6) }
    30%  { transform: scale(1) }
    50%  { transform: scale(1.4) }
    68%  { transform: scale(1) }
    83%  { transform: scale(1.2) }
    100% { transform: scale(1) }
  }

  .page-wrap, #app, .main-content { padding-top: 48px; }

  #header.detail-header {
    position: fixed; top: 0; left: 0; right: 0;
    height: 48px; display: flex; align-items: center;
    padding-left: 12px; padding-right: 12px;
    box-sizing: border-box; z-index: 1000;
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
  }

  #header .menu {
    height: 44px; flex: 1; display: flex; align-items: center;
  }

  #header .go-back-button {
    background-repeat: no-repeat;
    background-image: url(../assets/images/header_go_back_icon.png);
    background-size: 32px;
    width: 44px; height: 44px;
    background-position: 6px center; cursor: pointer;
    filter: brightness(0) saturate(100%);
    opacity: 0.9;
  }

  #header .page-name {
    flex: 1; text-align: center;
    max-width: calc(100% - 44px);
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    font-size: 15px; font-weight: 500; color: #333; line-height: 1;
  }

  .right-btn {
    text-align: right; height: 44px;
    display: flex; align-items: center;
  }

  .right-btn .cart-button-container {
    width: 44px; height: 44px;
    background-size: 32px; background-position: 6px center;
    position: relative; z-index: 1; cursor: pointer;
  }
  .right-btn .cart-button-container::before {
    content: ''; position: absolute; left: 0; top: 0;
    width: 44px; height: 44px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h2l2 10h10l2-8H7"/><circle cx="10" cy="18" r="1.4"/><circle cx="18" cy="18" r="1.4"/></svg>');
    background-repeat: no-repeat;
    background-size: 28px; background-position: 8px center;
  }

  .right-btn .cart-quantity {
    padding: 3px; font-size: 9px; position: absolute;
    right: 4px; top: 4px; color: #FFF;
    background: rgb(236, 97, 96);
    border-radius: 9px; text-align: center;
  }

  .fade-layer {
    position: fixed; left: 0; top: 0; right: 0; bottom: 0;
    background: #ffffff; z-index: 999999;
    display: flex; align-items: center; justify-content: center;
    animation: fadeOut 0.2s ease-out forwards;
  }
  @keyframes fadeOut { from { opacity: 0; } to { opacity: 1; } }

  .loader-cat { position: relative; width: 80px; height: 80px; }
  .loader-cat img {
    width: 64px; height: 64px; border-radius: 50%;
    animation: catJump 0.9s infinite ease-in-out;
    display: block; margin: 0 auto;
  }
  .loader-shadow {
    position: absolute; bottom: 4px; left: 50%;
    width: 40px; height: 10px;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,0.22), rgba(0,0,0,0));
    opacity: 0.35; border-radius: 50%;
    animation: shadowScale 0.9s infinite ease-in-out;
  }
  @keyframes catJump {
    0% { transform: translateY(0); } 30% { transform: translateY(-14px); }
    60% { transform: translateY(0); } 100% { transform: translateY(0); }
  }
  @keyframes shadowScale {
    0% { transform: translateX(-50%) scaleX(1); opacity: 0.35; }
    30% { transform: translateX(-50%) scaleX(0.7); opacity: 0.18; }
    60% { transform: translateX(-50%) scaleX(1); opacity: 0.35; }
    100% { transform: translateX(-50%) scaleX(1); opacity: 0.35; }
  }
  body.loaded { animation: fadeIn 0.3s ease-out; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>

<script>
import Bus from '../_common/js/bus'

export default {
  name: 'header',

  data () {
    return {
      showLangSheet: false,
      showCurrencySheet: false,
      currentCurrency: localStorage.getItem('currency') || 'EUR',
      // ✅ 币种列表：名称已清理 (去掉重复符号)，汇率更新至 2025.12
      currencyActions: [
        // --- 核心币种 ---
        { code: 'EUR', name: 'Euro', symbol: '€', rate: 1.0 },
        { code: 'USD', name: 'US Dollar', symbol: '$', rate: 1.16 },
        { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.87 },
        { code: 'SAR', name: 'Saudi Riyal', symbol: 'SR', rate: 4.35 },
        { code: 'AED', name: 'UAE Dirham', symbol: 'AED', rate: 4.27 },

        // --- 美洲 ---
        { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rate: 1.61 },
        { code: 'MXN', name: 'Mexican Peso', symbol: '$', rate: 21.18 },
        { code: 'COP', name: 'Colombian Peso', symbol: '$', rate: 4425.0 },
        { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', rate: 6.19 },

        // --- 亚洲 & 中东 ---
        { code: 'INR', name: 'Indian Rupee', symbol: '₹', rate: 104.55 },
        { code: 'PHP', name: 'Philippine Peso', symbol: '₱', rate: 68.73 },
      ],
      isFading: false,
      currentLang: localStorage.getItem('lang') || 'en',
      langActions: [
        { name: 'English', method: () => this.changeLang('en') },
        { name: 'Deutsch', method: () => this.changeLang('de') },
        { name: 'Español', method: () => this.changeLang('es') },
        { name: 'Français', method: () => this.changeLang('fr') }
      ],
      isCartZoom: false,
      cartCount: null
    }
  },

  methods: {
    changeCurrency(code) {
      const selectedCurrency = this.currencyActions.find(c => c.code === code);
      const rate = selectedCurrency ? selectedCurrency.rate : 1;

      localStorage.setItem('currency', code);
      localStorage.setItem('currencyRate', rate);

      this.currentCurrency = code;
      this.showCurrencySheet = false;
      this.isFading = true;
      setTimeout(() => {
        window.location.reload();
      }, 250);
    },

    changeLang (lang) {
      localStorage.setItem('lang', lang)
      this.currentLang = lang
      this.showLangSheet = false
      this.isFading = true
      setTimeout(() => {
        window.location.reload()
      }, 250)
    },
    signIn () {
      this.$router.push({ path: '/login' })
    },
    fetch () {
      this.$axios(this.ApiList.cart)
        .then((response) => {
          const cartInfo = response.data.carts
          let total = 0
          for (let i = 0; i < cartInfo.cartItems.length; i++) {
            total += cartInfo.cartItems[i].quantity
          }
          this.cartCount = total
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goCart () {
      this.$router.push({ path: '/cart' })
    },
    goBack() {
      this.$router.push({ path: '/' })
    }
  },

  watch: {
    showLangSheet (val) {
      const tg = document.querySelector('.telegram-btn')
      const wa = document.querySelector('.whatsapp-btn')
      if (tg) tg.style.visibility = val ? 'hidden' : 'visible'
      if (wa) wa.style.visibility = val ? 'hidden' : 'visible'
    },
     // ✅ 监听币种弹窗：隐藏悬浮的 Telegram/WhatsApp 按钮
     showCurrencySheet(val) {
       const tg = document.querySelector('.telegram-btn');
       const wa = document.querySelector('.whatsapp-btn');
       if (tg) tg.style.visibility = val ? 'hidden' : 'visible';
       if (wa) wa.style.visibility = val ? 'hidden' : 'visible';
     }
  },

  created () {
    if (!localStorage.getItem('currencyRate')) {
      const current = this.currencyActions.find(c => c.code === this.currentCurrency);
      const rate = current ? current.rate : 1;
      localStorage.setItem('currencyRate', rate);
    }

    if (!localStorage.getItem('lang')) {
      const navLang = navigator.language.toLowerCase()
      if (navLang.includes('fr')) {
        this.changeLang('fr')
      } else if (navLang.includes('de')) {
        this.changeLang('de')
      } else if (navLang.includes('es')) {
        this.changeLang('es')
      } else {
        this.changeLang('en')
      }
    }

    this.fetch()

    Bus.$on('cart-refresh', () => {
      this.fetch()
    })
    Bus.$on('cart-zoom', () => {
      this.isCartZoom = true
      setTimeout(() => {
        this.isCartZoom = false
      }, 2000)
    })
  },

  computed: {
    isLogin () {
      return this.$store.getters.getLoginStatus
    },
    pageTitle () {
      const key = 'header' + this.$route.name
      const translated = this.$t ? this.$t(key) : key
      if (translated === key) {
        return this.$route.name
      }
      return translated
    }
  }
}
</script>
