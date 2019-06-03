import './index.css'
import 'css/common.css'
import Vue from 'vue'
import url from 'js/api'
import axios from 'axios'
import Mint from 'mint-ui'
import Foot from '@/components/Foot'
import Swip from '@/components/Swip'
import mixin from '@/modules/js/mixins.js'

Vue.use(Mint)
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

export default new Vue({
  el:'#app',
  data:{
    hotLists:null,
    loading:true,
    pageNum:1,
    pageSize:6,
    allLoaded:false,
    bannerLists:null
  },
  created(){
    this.loadData()
  },
  mounted(){
    this.loadBanner()
  },
  methods:{
    loadData(){
      if(this.allLoaded) return
      this.loading = true;
      axios.get(url.hotLists,{
        pageNum:this.pageNum,
        pageSize:this.pageSize
      }).then(res=>{
        var curLists = res.data.lists
        if(curLists.length < this.pageSize){
          this.allLoaded = true
        }
        if(this.hotLists){
          this.hotLists = this.hotLists.concat(curLists)
        }else{
          this.hotLists = curLists
        }
        this.loading = false;
        this.pageNum += 1
      }).catch(err=>{
        console.log(err)
      })
    },
    loadBanner(){
      axios.get(url.banner).then(res=>{
        this.bannerLists = res.data.lists
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  components:{
    Foot,
    Swip
  },
  mixins:[mixin]
})