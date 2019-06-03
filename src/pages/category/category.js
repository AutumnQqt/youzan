import 'css/common.css'
import './category.css'
import Foot from '@/components/Foot'
import Vue from 'vue'
import url from 'js/api'
import axios from 'axios'

export default new Vue({
  el: '#app',
  data: {
    topLists: null,
    rankLists: null,
    subLists: null,
    curIndex: 0
  },
  mounted() {
    this.getTopList()
    this.getRank()
    this.getSubLists()
  },
  components: {
    Foot
  },
  methods: {
    getTopList() {
      axios.get(url.topLists).then(res => {
        this.topLists = res.data.lists
      }).catch(err => {
        console.log(err)
      })
    },
    getRank() {
      axios.get(url.rankLists).then(res => {
        this.rankLists = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    getSubLists() {
      axios.get(url.subLists).then(res => {
        this.subLists = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    handle(index) {
      this.curIndex = index
    },
    locaSearch(list){
      location.href=`search.html?id=${list.id}&keyword=${list.name}`
    }
  }
})