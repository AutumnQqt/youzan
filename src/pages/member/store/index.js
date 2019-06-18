import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Address from '@/modules/js/addressService.js'

const store = new Vuex.Store({
  state: {
    lists: null
  },
  mutations: {
    getList(state, lists) {
      state.lists = lists
    },
    add(state, data) {
      state.lists.push(data)
    },
    update(state, instance) {
      let index = state.lists.findIndex(item => {
        return item.id === instance.id
      })
      state.lists.splice(index, 1, instance.data)
    },
    remove(state, id) {
      let index = state.lists.findIndex(item => {
        return item.id === id
      })
      state.lists.splice(index, 1)
    },
    setDefault(state, id) {
      let index = state.lists.findIndex(item=>{
        return item.id === id
      })
      state.lists.forEach(ele => {
        ele.isDefault = false
      });
      state.lists[index].isDefault = true
    }
  },
  actions: {
    getList({ commit }) {
      Address.getList().then(res => {
        commit('getList', res.data.lists)
      })
    },
    add({ commit }, data) {
      Address.add(data).then(res => {
        commit('add', data)
      })
    },
    update({ commit }, instance) {
      Address.update(instance.data).then(res => {
        commit('update', instance)
      })
    },
    remove({ commit }, id) {
      Address.remove(id).then(res => {
        commit('remove', id)
      }).catch(err => {
        alert(err)
      })
    },
    setDefault({ commit }, id) {
      Address.setDefault(id).then(() => {
        commit('setDefault',id)
      }).catch(err => {
        console.log(err)
      })
    }
  }
})

export default store