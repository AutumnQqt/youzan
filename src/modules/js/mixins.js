var mixins = {
  filters: {
    formatPrice(price) {
      var small = price.toString().split(".")[1]
      if (!small) {
        return price + '.00'
      } else if (small.length === 1) {
        return price + '0'
      } else {
        return price.toFixed(2)
      }
    }
  }
}

export default mixins