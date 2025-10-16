import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import ProductDetailPage from '@/pages/productDetail'
import SearchPage from '@/pages/search'
import CartPage from '@/pages/cart'
import ShippingPage from '@/pages/shipping'
import PaymentPage from '@/pages/payment'
import TransactionPage from '@/pages/transaction'
import TrackPage from '@/pages/track'
import TransactionDetailPage from '@/pages/transactionDetail'
import SignInPage from '@/pages/signin'
import SignUpPage from '@/pages/signup'
import ForgotPasswordPage from '@/pages/forgotPassword'
import ContactUsPage from '@/pages/contactUs'
import SettingPage from '@/pages/settings'
import ChangeEmail from '@/pages/changeEmail'
import ChangePassword from '@/pages/changePassword'
import ConfirmPayPage from '@/pages/confirmPay'
import PayLoadingPage from '@/pages/payloading'
import NotFoundPage from '@/pages/404'
import OauthCallBackPage from '@/pages/oauthCallback'

Vue.use(Router)
// Router.prototype.goBack = function () {
//   this.isBack = true
//   window.history.go(-1)
// }
const routers = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Browse',
      component: IndexPage
    },
    {
      path: '/product/:id',
      name: 'Details',
      component: ProductDetailPage
    },
    {
      path: '/product-detail/:id',
      name: 'ProductDetails',
      component: ProductDetailPage
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '/search/:text',
      name: 'searchResult',
      component: IndexPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartPage
    },
    {
      path: '/shipping',
      name: 'Shipping',
      component: ShippingPage
    },
    {
      path: '/payment',
      name: 'Billing',
      component: PaymentPage
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: TransactionPage
    },
    {
      path: '/transaction/:tid',
      name: 'transactionDetail',
      component: TransactionDetailPage
    },
    {
      path: '/purchase-confirmation/:tid',
      component: TransactionDetailPage,
      name: 'order-confirm'
    },
    {
      path: '/transaction/track/:id',
      name: 'track',
      component: TrackPage
    },
    {
      path: '/login',
      name: 'Sign In',
      component: SignInPage
    },
    {
      path: '/signup',
      name: 'Create Account',
      component: SignUpPage
    },
    {
      path: '/forgotPassword',
      name: 'Forgot Password',
      component: ForgotPasswordPage
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUsPage
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingPage
    },
    {
      path: '/settings/change-email',
      name: 'Change Email',
      component: ChangeEmail
    },
    {
      path: '/settings/change-password',
      name: 'Change Password',
      component: ChangePassword
    },
    {
      path: '/shop/new/:paymethod/checkout/:type',
      component: ConfirmPayPage,
      name: 'ConfirmPay'
    },
    {
      path: '/pay-loading',
      component: PayLoadingPage,
      name: 'pay-loading'
    },
    {
      path: '*',
      component: NotFoundPage,
      name: 'notFound'
    },
    {
      path: '/shop/oauth/:site/callback',
      component: OauthCallBackPage,
      name: 'oauthCallback'
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 路由跳转到其他页面时候，在最顶部；如果是浏览器前进后退，就在原来位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

routers.beforeEach((to, from, next) => {
  // to.name 去掉空格
  document.body.id = to.name.replace(' ', '')
  next()
})

export default routers
