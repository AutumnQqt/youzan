import './search.css'
import '@/modules/css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from '@/modules/js/api.js'
import qs from 'qs'
import Velocity from 'velocity-animate'

import mixin from '@/modules/js/mixins.js'
import Mint from 'mint-ui'
Vue.use(Mint)
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

var app = new Vue({
  el: '#app',
  data: {
    id: 0,
    keyword: '',
    searchLists: null,
    toTop: false,
    loading: true,
    allLoaded: false,
    pageNum: 1,
    pageSize: 6
  },
  created() {
    this.id = parseInt(qs.parse(location.search.split('?')[1]).id) || 0
    this.keyword = qs.parse(location.search.split('?')[1]).keyword
    this.getSearchList()
  },
  methods: {
    getSearchList() {      
      if (this.allLoaded) return
      this.loading = true
      axios.get(url.searchLists, {
        id: this.id,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        var curLists = res.data.lists
        if (curLists.length < this.pageSize) {
          this.allLoaded = true
        }
        if (this.searchLists) {
          this.searchLists = this.searchLists.concat(curLists)
        } else {
          this.searchLists = res.data.lists
        }
        this.pageNum += 1
        this.loading = false
      })
    },
    showToTop(event) {
      if (document.documentElement.scrollTop > 100) {
        this.toTop = true
      } else {
        this.toTop = false
      }
    },
    goToTop() {
      Velocity(document.documentElement, 'scroll', { duration: 1000 });
      this.toTop = false
    }
  },
  mixins: [mixin]

})