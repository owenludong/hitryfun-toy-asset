export default {
  install (Vue) {
    Vue.prototype.ApiList = {
      'register': '/shop/new/customer/register', // 注册
      'login': '/shop/new/customer/login', // 登录
      'logout': '/shop/new/customer/logout', // 退出 post
      'productList': '/shop/new/index', // 产品列表
      'productPage': '/shop/new/products', // 产品分页列表
      'productDetail': '/shop/new/product/detail/', // 产品详情
      'cart': '/shop/new/cart/displayCart', // 购物车
      'cartDelete': '/shop/new/cart/removeShoppingCartItem', // 删除购物车里面的某个商品
      'cartUpdate': '/shop/new/cart/updateShoppingCartItem', // 修改购物车里面的某个商品数量
      'cartAdd': '/shop/new/cart/addShoppingCartItem', // 添加商品到购物车
      'shippingAddress': '/shop/new/order/shippingAddress', // 收货地址
      'UpdateshippingAddress': '/shop/new/order/addOrUpdateShippingAddress', // 更新收获地址
      'Updatepaymethod': '/shop/new/order/addOrUpdatePayMethod', // 更新支付方式
      'autoComplete': '/shop/new/search/autocomplete', // 搜索自动补全接口
      'search': '/shop/new/search', // 搜索
      'orderList': '/shop/new/orders', // 订单列表 get start max
      'orderDetail': '/shop/new/order/', // 订单详情 get
      'changePassword': '/shop/new/customer/password-change', //  post
      'changeEmail': '/shop/new/customer/email-change', //  post
      'contact': '/shop/new/customer/contact', //  post 帮助我们
      'paypalbuy': '/shop/new/order/payment/init/PAYPAL', //  paypal支付接口 post
      'sofortpaybuy': '/shop/new/order/payment/init/SOFORT', //  sofortpay支付接口 post
      'creditcardbuy': '/shop/new/order/CREDITCARD/commit/', //  信用卡支付接口 post
      'applyProm': '/shop/new/order/prom/apply', // 计算促销码的价格
      'paySuccess': '/shop/new/order/commitPreAuthorized', //  支付成功接口
      'personInfo': '/shop/new/customer/personInfo',
      'facebookAuthUrl': '/shop/oauth/authurl/facebook/mobile', // 获取fb授权地址
      'facebookAuthCallback': '/shop/oauth/facebook/callback' // fb oauth回掉
    }
    Vue.prototype.getApiList = function (_this, type) {
      return Vue.prototype.ApiList[type]
    }
  }
}
