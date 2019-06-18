import "./components/member_base.css"
import "./components/member.css"

import Vue from 'vue'
import rt from './router/index.js'
import store from './store/index.js'



var app = new Vue({
  el: '#app',
  router:rt,
  store
})