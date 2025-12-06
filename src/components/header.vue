<template>
<div id="parentDiv">
  <div class="fade-layer" v-show="isFading">
    <div class="loader-cat">
      <div class="loader-shadow"></div>
      <img src="https://www.calmpurr.com/img/logo/logo-tou6.webp">
    </div>
  </div>
  <div id="header" :class="{ isMenu: isMenu && isLogin }">
    <div class="menu" :class="{ 'is-home': showLogo }">
      <div class="menu-button-container" v-show="isMenu&isLogin"  @click="showAsideMenu"></div>
      <div class="go-back-button" v-show="!isMenu" @click="goBack"></div>

      <div class="page-name"  v-if="titleName?titleName:$route.name=='Browse'">
         <img id="logo" src="https://www.calmpurr.com/img/logo/logo-tou6.webp" v-show="showLogo" @click="goHome" style="cursor: pointer">
      </div>

      <div class="page-name" v-else>
        {{ pageTitle }}
      </div>
    </div>

    <ul class="right-btn">

      <li class="currency-button-container" @click="showCurrencySheet = true"></li>

      <li class="lang-button-container" @click="showLangSheet = true"></li>

      <li class="cart-button-container" :class="{'bounce' : isCartZoom }" @click="goCart" v-show="isLogin">
        <span class="cart-quantity" v-show="cartCount !== 0">{{cartCount}}</span>
      </li>

      <li class="sign-button-container" @click="signIn" v-show="!isLogin"></li>

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
  /* ✅ 右侧按钮组样式：Flex布局，防止错位 */
  .right-btn {
    height: 44px;
    display: flex;          /* 关键：弹性布局 */
    align-items: center;    /* 垂直居中 */
    justify-content: flex-end; /* 靠右对齐 */
    flex-shrink: 0;         /* 关键：禁止被压缩 */
    min-width: auto;
    padding-left: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
    }

    /* 币种按钮样式 */
    .currency-button-container {
      width: 44px;
      height: 44px;
      cursor: pointer;
      margin-right: 0;

      /* 白色线条图标 (适配绿色 Header) */
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>');
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: center;
    }

    .lang-button-container {
      width: 44px;
      height: 44px;
      background-image: url('data:image/svg+xml;utf8,<svg fill="none" stroke="%23ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 010 20"/><path d="M12 2a15 15 0 000 20"/></svg>');
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }

    .cart-button-container {
      background: url(../assets/images/header-cart-icon.png) no-repeat;
      width: 44px;
      height: 44px;
      background-size: 32px;
      background-position: center;
      position: relative;
      z-index: 1;
    }

    .cart-quantity  {
      padding: 3px;
      font-size: 9px;
      position: absolute;
      right: 4px;
      top: 4px;
      color: #FFF;
      background: rgb(236, 97, 96);
      border-radius: 9px;
      text-align: center;
    }

    .sign-button-container {
      z-index: 1;
      width: 44px;
      height: 44px;
      background-repeat: no-repeat;
      background-image: url(../assets/images/profile.png);
      background-size: 32px;
      background-position: center;
    }
  }

  /* LOGO 样式 */
  #logo {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    height: 60px;
    line-height: 1;
    cursor: pointer;
    z-index: 10;
    -webkit-tap-highlight-color: transparent;

    img {
      height: 100%;
      width: auto;
      pointer-events: none;
      display: block;
    }
  }

  /* 菜单容器 */
  .menu {
    position: relative;
    height: 44px;
    line-height: 44px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .menu-button-container {
      background-repeat: no-repeat;
      background-image: url(../assets/images/menu.png);
      background-size: 32px;
      width: 44px;
      height: 44px;
      background-position: 6px center;
    }
    .go-back-button {
      background-repeat: no-repeat;
      background-image: url(../assets/images/header_go_back_icon.png);
      background-size: 32px;
      width: 44px;
      height: 44px;
      background-position: 6px center;
    }
    .page-name {
      vertical-align: top;
      max-width: calc(100% - 50px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
    }
  }

  #header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    z-index: 1000;
    overflow: visible;
    background-color: #8dd9bf;
  }

  .page-wrap, #app, .main-content {
    padding-top: 48px;
  }

  /* 弹层和动画相关 */
  .fade-layer {
    position: fixed;
    left: 0; top: 0; right: 0; bottom: 0;
    background: #ffffff;
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeOut 0.2s ease-out forwards;
  }
  @keyframes fadeOut {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* 小猫动画 */
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
    0%   { transform: translateY(0); }
    30%  { transform: translateY(-14px); }
    60%  { transform: translateY(0); }
    100% { transform: translateY(0); }
  }
  @keyframes shadowScale {
    0%   { transform: translateX(-50%) scaleX(1); opacity: 0.35; }
    30%  { transform: translateX(-50%) scaleX(0.7); opacity: 0.18; }
    60%  { transform: translateX(-50%) scaleX(1); opacity: 0.35; }
    100% { transform: translateX(-50%) scaleX(1); opacity: 0.35; }
  }

  /* 弹窗通用样式 */
  .lang-overlay {
    position: fixed; left: 0; top: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.45);
    display: flex; justify-content: center; align-items: flex-end;
    z-index: 2000;
  }
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
    /* gap: 10px; 已删除，依靠 width 控制间距 */
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
      0% { transform: scale(1) }
      15% { transform: scale(1.6) }
      30% { transform: scale(1) }
      50% { transform: scale(1.4) }
      68% { transform: scale(1) }
      83% { transform: scale(1.2) }
      100% { transform: scale(1) }
  }
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
      // ✅ 提示文案字典
      currencyNoteText: {
        en: 'Reference only. Transactions are settled in Euro (€).',
        de: 'Nur zur Orientierung. Die Zahlung erfolgt in Euro (€).',
        fr: 'À titre indicatif. Le règlement s\'effectue en Euro (€).',
        es: 'Solo como referencia. El pago se procesará en Euro (€).'
      },
      isFading: false,
      currentLang: localStorage.getItem('lang') || 'en',
      langActions: [
        { name: 'English', method: () => this.changeLang('en') },
        { name: 'Deutsch', method: () => this.changeLang('de') },
        { name: 'Español', method: () => this.changeLang('es') },
        { name: 'Français', method: () => this.changeLang('fr') }
      ],
      isMenu: '',
      menuItems: ['Browse', 'transaction', 'transactionDetail', 'Settings'],
      isPageName: '',
      PageItems: ['Browse', 'Details', 'searchResult', 'Settings'],
      isCategoryMenu: '',
      categoryItems: ['Browse'],
      isSearchMenu: '',
      searchItems: ['Browse', 'Details', 'searchResult'],
      titleName: '',
      isCartZoom: false,
      cartCount: null,
      showLogo: 'y'
    }
  },
  methods: {
    goHome() {
      if (this.$route.path === '/') {
        window.location.reload();
      } else {
        this.$router.push('/');
      }
    },
    // 币种切换
    changeCurrency(code) {
      // 找到选中的币种对象
      const selectedCurrency = this.currencyActions.find(c => c.code === code);
      const rate = selectedCurrency ? selectedCurrency.rate : 1;

      // 写入 Storage
      localStorage.setItem('currency', code);
      localStorage.setItem('currencyRate', rate); // 关键：把汇率存进去

      this.currentCurrency = code;
      this.showCurrencySheet = false;
      this.isFading = true;
      setTimeout(() => {
        window.location.reload();
      }, 250);
    },
    // 语言切换
    changeLang(lang) {
      localStorage.setItem('lang', lang);
      this.currentLang = lang;
      this.showLangSheet = false;
      this.isFading = true;
      setTimeout(() => {
        window.location.reload();
      }, 250);
    },
    signIn () {
      this.$router.push({path: '/login'})
    },
    fetch () {
      this.$axios(this.ApiList.cart)
        .then((response) => {
          let cartInfo = response.data.carts
          let total = 0
          for (var i = 0; i < cartInfo.cartItems.length; i++) {
            total += cartInfo.cartItems[i].quantity
          }
          this.cartCount = total
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goCart () {
      this.$router.push({path: '/cart'})
    },
    showAsideMenu () {
      Bus.$emit('show-menu')
    },
    showCategoryMenu () {
      Bus.$emit('show-category')
    },
    changeTitleName () {
      switch (this.$route.name) {
        case 'searchResult':
          this.titleName = this.$route.params.text
          break
      }

      if (this.$route.name === 'Browse') {
          this.showLogo = true
        } else {
          this.showLogo = false
        }

      if (this.menuItems.indexOf(this.$route.name) > -1) {
        this.isMenu = true
      } else {
        this.isMenu = false
      }

      if (this.categoryItems.indexOf(this.$route.name) > -1) {
        this.isCategoryMenu = true
      } else {
        this.isCategoryMenu = false
      }

      if (this.PageItems.indexOf(this.$route.name) > -1) {
        this.isPageName = true
      } else {
        this.isPageName = false
      }

      if (this.searchItems.indexOf(this.$route.name) > -1) {
        this.isSearchMenu = true
      } else {
        this.isSearchMenu = false
      }
    },
    goBack () {
      if (window.history.length <= 1) {
        this.$router.push({path:'/'})
        return false
      } else {
        this.$router.back(-1)
      }
      setTimeout(() => {
        this.$router.push({path:'/'})
      },500)

    },
    search () {
      this.$router.push({path: '/search'})
    }
  },
  watch: {
    showLangSheet(val) {
      const tg = document.querySelector('.telegram-btn');
      const wa = document.querySelector('.whatsapp-btn');
      if (tg) tg.style.visibility = val ? 'hidden' : 'visible';
      if (wa) wa.style.visibility = val ? 'hidden' : 'visible';
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
      const navLang = navigator.language.toLowerCase();
      if (navLang.includes('fr')) {
        this.changeLang('fr');
      }else if (navLang.includes('de')) {
        this.changeLang('de');
      } else if (navLang.includes('es')) {
        this.changeLang('es');
      } else {
        this.changeLang('en');
      }
    }
    this.changeTitleName()
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
        const key = 'header' + this.$route.name;
        const translated = this.$t ? this.$t(key) : key;
        if (translated === key) {
          return this.$route.name;
        }
        return translated;
      }
  }
}
</script>
