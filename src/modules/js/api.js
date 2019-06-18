// var host = 'http://rap2api.taobao.org/app/mock/7058/'
// var host = 'http://rap2api.taobao.org/app/mock/177712/'
// var host = 'http://yapi.demo.qunar.com/mock/69353/'
var host = 'https://easy-mock.com/mock/5cee34b56cd1db2fd269b2a4/'
var url = {
  // 首页
  hotLists: 'index/hotLists',
  banner: 'index/banner',
  // 分类页
  topLists: 'category/topList',
  rankLists: 'category/rank',
  subLists: 'category/subList',
  searchLists: 'search/list',
  // 商品详情页
  goods: 'goods/details',
  // 购物车
  cartLists: 'cart/list',
  cartAdd: 'cart/add',
  cartReduce: 'cart/reduce',
  cartMrremove: 'cart/mrremove',
  cartRemove: 'cart/remove',
  //个人地址
  addressList: 'address/list',
  addressAdd: 'address/add',
  addressRemove: 'address/remove',
  addressUpdate: 'address/update',
  addressSetDefault: 'address/setDefault'

}
for (var key in url) {
  url[key] = host + url[key]
}

export default url
