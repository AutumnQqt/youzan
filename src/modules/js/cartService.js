import fetch from './fetch.js'
import url from './api.js'
import qs from 'qs'

class Cart {
  static getList(){
    return fetch(url.cartLists)
  }

  static add(id) {
    return fetch(url.cartAdd, qs.stringify({ id, number: 1 }))
  }

  static reduce(id) {
    return fetch(url.cartReduce, qs.stringify({ id, number: -1 }))
  }

  static remove(id) {
    return fetch(url.cartRemove, qs.stringify({ id }))
  }

  static mrremove(ids) {
    return fetch(url.cartMrremove, qs.stringify(ids))
  }
}

export default Cart