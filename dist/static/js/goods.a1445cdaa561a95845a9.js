webpackJsonp([2],{"035s":function(t,s){},AeEs:function(t,s){},AnIW:function(t,s){},"Do/K":function(t,s){},HFfA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("035s"),i=(e.n(a),e("JWK+")),n=(e.n(i),e("pI1A")),o=(e.n(n),e("AeEs")),r=(e.n(o),e("AnIW")),c=(e.n(r),e("d7BR")),d=(e.n(c),e("Do/K")),u=(e.n(d),e("vOiu")),l=(e.n(u),e("7+uW")),f=e("mtWM"),h=e.n(f),p=e("TFhR"),m=e("a1DA"),v=e("mw3O"),w=e.n(v),g=e("MW8+"),b=parseInt(w.a.parse(location.search.split("?")[1]).id);new l.default({el:"#app",data:{id:b,goodLists:null,bannerList:null,showCart:!1,disabled:!0,skuValue:1,skuSuccess:!1,showGlobalCart:!1},created:function(){this.getGoodLists()},methods:{getGoodLists:function(){var t=this;h.a.get(p.a.goods,{id:b}).then(function(s){t.goodLists=s.data.data,t.bannerList=t.goodLists.imgs,t.bannerList.forEach(function(s,e){t.bannerList[e]={clickUrl:"javascript:void(0);",img:s}})})},handleCart:function(){this.showCart=!0!==this.showCart,this.showCart?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow="auto"},handleSku:function(t){this.skuValue=document.querySelector("#txt").value,this.skuValue=parseInt(this.skuValue)+t,1===this.skuValue||this.skuValue<1?(this.disabled=!0,this.skuValue=1):this.disabled=!1},submitSku:function(){var t=this;this.skuSuccess=!0,this.showGlobalCart=!0,this.showCart=!1,setTimeout(function(){t.skuSuccess=!1},600),document.documentElement.style.overflow="auto"}},mixins:[m.a],components:{Swip:g.a}})},"JWK+":function(t,s){},"MW8+":function(t,s,e){"use strict";e("mgS3");var a=e("DNVT"),i={name:"Swip",props:["bannerlists"],mounted:function(){new a.a(".swiper-container",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}})}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},this._l(this.bannerlists,function(t){return s("div",{staticClass:"swp-page swiper-slide"},[s("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[s("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),this._v(" "),s("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var o=e("VU/8")(i,n,!1,function(t){e("d4ZQ")},"data-v-f1832e04",null);s.a=o.exports},TFhR:function(t,s,e){"use strict";var a={hotLists:"index/hotLists",banner:"index/banner",topLists:"category/topList",rankLists:"category/rank",subLists:"category/subList",searchLists:"search/list",goods:"goods/details",cartLists:"cart/list",cartAdd:"cart/add",cartReduce:"cart/reduce",cartMrremove:"cart/mrremove",cartRemove:"cart/remove",addressList:"address/list",addressAdd:"address/add",addressRemove:"address/remove",addressUpdate:"address/update",addressSetDefault:"address/setDefault"};for(var i in a)a[i]="https://easy-mock.com/mock/5cee34b56cd1db2fd269b2a4/"+a[i];s.a=a},a1DA:function(t,s,e){"use strict";s.a={filters:{formatPrice:function(t){var s=t.toString().split(".")[1];return s?1===s.length?t+"0":t.toFixed(2):t+".00"}}}},d4ZQ:function(t,s){},d7BR:function(t,s){},mgS3:function(t,s){},pI1A:function(t,s){},vOiu:function(t,s){}},["HFfA"]);
//# sourceMappingURL=goods.a1445cdaa561a95845a9.js.map