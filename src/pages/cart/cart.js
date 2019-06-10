import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import Velocity from 'velocity-animate'
import Cart from '@/modules/js/cartService.js'

export default new Vue({
  el: '#app',
  data: {
    cartLists: null,
    edited: false,
    editedShop: null,
    editedIndex: -1,
    removePopup: false,
    touchStartX: 0,
    touchIndex: -1,
    left: '0px'
  },
  created() {
    this.getCartLists()
  },
  computed: {
    allcheck: {
      get() {
        if (this.cartLists && this.cartLists.length) {
          return this.cartLists.every(shop => {
            return shop.checked
          })
        }
        return false
      },
      set(newVal) {
        this.cartLists.forEach(shop => {
          shop.checked = newVal
          shop.goodsList.forEach(good => {
            good.checked = newVal
          })
        })
      }
    },
    checkLists() {
      let arr = []
      if (this.cartLists && this.cartLists.length) {
        this.cartLists.forEach(shop => {
          shop.goodsList.forEach(good => {
            if (good.checked) {
              arr.push(good)
            }
          })
        })
      }
      return arr
    },
    removeLists: {
      get() {
        let arr = []
        if (this.cartLists && this.cartLists.length) {
          this.cartLists.forEach(shop => {
            shop.goodsList.forEach(good => {
              if (good.removed) {
                arr.push(good)
              }
            })
          })
        }
        return arr
      },
      set() {

      }
    },
    getTotal() {
      var total = 0
      if (this.selectLists && this.selectLists.length) {
        this.selectLists.forEach(good => {
          total += good.price * good.number
        })
      }
      return total
    },
    removeMsg() {
      if (this.removeLists.length > 1) {
        return `确定将所选 ${this.removeLists.length} 个商品删除？`
      } else {
        return '确定要删除该商品吗？'
      }
    }
  },
  methods: {
    getCartLists() {
      Cart.getList().then(res => {
        var list = res.data.cartList
        list.forEach(shop => {
          shop.checked = false
          shop.edited = false
          shop.editMsg = '编辑'
          shop.removed = false
          shop.goodsList.forEach(good => {
            good.checked = false
            good.removed = false
          })
        });
        this.cartLists = list
      })
    },
    handleEdit(shops, shopIndex) {
      this.editedShop = shops
      this.editedIndex = shopIndex
      shops.edited = !shops.edited
      this.edited = !this.edited
      this.cartLists.forEach(shop => {
        shop.editMsg = shops.edited ? '' : '编辑'
        shops.editMsg = shops.edited ? '完成' : '编辑'
        shops.removed = false
        shop.goodsList.forEach(good => {
          good.removed = false
        })
      })
    },
    goodsChecked(goods, shops) {
      goods.checked = !goods.checked
      if (shops.checked === true) {
        shops.checked = false
      } else {
        shops.checked = true
        shops.goodsList.forEach(good => {
          if (good.checked === false) {
            shops.checked = false
          }
        })
      }
    },
    shopsChecked(shops) {
      shops.checked = !shops.checked
      shops.goodsList.forEach(good => {
        good.checked = shops.checked
      })
    },
    allChecked() {
      this.allcheck = !this.allcheck
    },
    goodsRemoved(goods, shops) {
      goods.removed = !goods.removed
      var allRemoved = shops.goodsList.every(good => {
        return good.removed
      })
      if (allRemoved) {
        shops.removed = true
      } else {
        shops.removed = false
      }
    },
    shopsRemoved(shops) {
      shops.removed = !shops.removed

      shops.goodsList.forEach(good => {
        good.removed = shops.removed
      })

    },
    reduce(goods) {
      Cart.reduce(goods.id).then(res => {
        goods.number -= 1
        if (goods.number <= 1) {
          goods.number = 1
        }
      }).catch(err => {
        console.log(err)
      })
    },
    add(goods) {
      Cart.add(goods.id).then(res => {
        goods.number += 1
      }).catch(err => {
        console.log(err)
      })
    },
    removeHandle() {
      this.removePopup = true
    },
    removeConfirm() {
      if (this.removeLists.length === 1) {
        Cart.remove(this.removeLists[0].id).then(res => {
          this.remove()
        })
      } else {
        let ids = []
        this.removeLists.forEach(good => {
          ids.push(good.id)
        })
        Cart.mrremove(ids).then(res => {
          this.remove()
        }).catch(err => { console.log(err) })
      }

      Velocity(document.querySelectorAll('.touch'), {
        marginLeft: '0px'
      }, {
          duration: 0,
        });
    },
    remove() {
      let arr = []
      this.editedShop.goodsList.forEach(good => {
        if (!good.removed) {
          arr.push(good)
        }
      })
      this.editedShop.goodsList = arr
      if (!arr.length) {
        this.cartLists.splice(this.editedIndex, 1)
      }
      this.edited = false
      this.editedShop.edited = false
      this.removePopup = false
      this.cartLists.forEach(shop => {
        shop.editMsg = '编辑'
      })
    },
    startTouch(e, goodsIndex, shopIndex) {
      this.touchIndex = -1
      this.touchStartX = e.changedTouches[0].clientX
      for (var i = 0; i < shopIndex; i++) {
        this.touchIndex += this.cartLists[i].goodsList.length
      }
      for (var n = 0; n <= goodsIndex; n++) {
        this.touchIndex++
      }
    },
    endTouch(e) {
      let temp = this.touchStartX - e.changedTouches[0].clientX

      if (temp > 30) {
        this.left = '-75px'
      } else if (temp < -30) {
        this.left = '0px'
      }

      Velocity(document.querySelectorAll('.touch')[this.touchIndex], {
        marginLeft: this.left
      }, {
          duration: 700,
          easing: "swing"
        });
    },
    removeSelf(shops, shopIndex, goods, goodsIndex) {
      this.removeLists.push(goods)
      this.editedShop = shops
      this.editedIndex = shopIndex
      goods.removed = true
      this.removeHandle()
    }
  }
})