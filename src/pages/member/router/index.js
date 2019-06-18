import Vue from 'vue'
import member from '../components/member'
import address from '../components/address'
import all from '../components/all'
import form from '../components/address_edit'

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
      component: () => import('../components/address_edit.vue')
      // component:require('../components/address_edit.vue').default
    }]
  }]
})

export default rt