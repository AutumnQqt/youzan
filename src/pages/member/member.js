import "./components/member_base.css"
import "./components/member.css"
import member from './components/member'
import address from './components/address'
import all from './components/all'
import form from './components/address_edit'
import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)

var rt = new router({
  routes: [{
    path: '/',
    component: member
  }, {
    path: '/address',
    component: address,
    
    children: [{
      path: '',
      component: all
    }, {
      name: 'edit',
      path: 'edit',
      component: form
    }]
  }]
})

var app = new Vue({
  el: '#app',
  router: rt
})