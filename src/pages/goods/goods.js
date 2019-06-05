import '@/modules/css/common.css'
import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_transform.css'

import Vue from 'vue'
import axios from 'axios'
import url from '@/modules/js/api.js'
import mixin from '@/modules/js/mixins.js'
import qs from 'qs'
import Swip from '@/components/Swip'

var id = parseInt(qs.parse(location.search.split('?')[1]).id)

new Vue({
  el: '#app',
  data: {
    id,
    goodLists: null,
    bannerList: null,
    showCart: false,
    disabled: true,
    skuValue: 1,
    skuSuccess:false,
    showGlobalCart:false
  },
  created() {
    this.getGoodLists()
  },
  methods: {
    getGoodLists() {
      axios.get(url.goods, {
        id
      }).then(res => {
        this.goodLists = res.data.data
        this.bannerList = this.goodLists.imgs

        this.bannerList.forEach((value, key) => {
          this.bannerList[key] = {
            'clickUrl': 'javascript:void(0);',
            'img': value
          }
        })
      })
    },
    handleCart() {
      this.showCart = this.showCart === true ? false : true
      if(this.showCart){
        document.documentElement.style.overflow = 'hidden'
      }else{
        document.documentElement.style.overflow = 'auto'
      }
    },
    handleSku(num) {
      this.skuValue = document.querySelector('#txt').value
      this.skuValue = parseInt(this.skuValue) + num

      if (this.skuValue === 1 || this.skuValue < 1) {
        this.disabled = true
        this.skuValue = 1
      } else {
        this.disabled = false
      }
    },
    submitSku(){
      this.skuSuccess = true
      this.showGlobalCart = true
      this.showCart = false
      setTimeout(()=>{
        this.skuSuccess = false
      },600)
      document.documentElement.style.overflow = 'auto'
    }
  },
  mixins: [mixin],
  components: {
    Swip
  }
})