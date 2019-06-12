import qs from 'qs'
import url from './api'
import fetch from './fetch'

class Address {
  static getList(){
    return fetch(url.addressList)
  }
  static add(data){
    console.log(data)
    return fetch(url.addressAdd,qs.stringify(data))
  }
  static remove(id){
    return fetch(url.addressRemove,qs.stringify({id}))
  }
  static update(data){
    return fetch(url.addressUpdate,qs.stringify(data))
  }
  static setDefault(id){
    return fetch(url.setDefault,qs.stringify({id}))
  }
}

export default Address