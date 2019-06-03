// var host = 'http://rap2api.taobao.org/app/mock/7058/'
// var host = 'http://rap2api.taobao.org/app/mock/177712/'
var host = 'http://yapi.demo.qunar.com/mock/69353/'
var url = {
  // 首页
  hotLists: 'index/hotLists',
  banner: 'index/banner',
  // 分类页
  topLists: 'category/topList',
  rankLists: 'category/rank',
  subLists: 'category/subList',
  searchLists: 'search/list'
}
for (var key in url) {
  url[key] = host + url[key]
}

export default url
