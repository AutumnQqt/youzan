import Address from '@/modules/js/addressService'
export default {
  data() {
    return {
      adressList: null,
      type: this.$route.params.type,
      addressData: require('@/modules/js/address.json'),
      id: '',
      name: '',
      tel: '',
      address: '',
      provinceValue: -1,
      cityValue: -1,
      districtValue: -1,
      isDefault: false,
      provinceData: null,
      cityData: null,
      districtData: null,
    };
  },
  created() {
    this.provinceData = this.addressData.list
    let ad = this.$route.params.instance

    if (ad) {
      this.id = ad.id
      this.name = ad.name
      this.tel = ad.tel
      this.address = ad.address
      this.provinceValue = parseInt(ad.provinceValue)
      this.cityValue = parseInt(ad.cityValue)
      this.districtValue = parseInt(ad.districtValue)
    }

  },
  methods: {
    save() {
      let { name, tel, address, cityValue, districtValue, provinceValue } = this
      if (!name) {
        alert('请输入姓名')
        return
      } else if (!tel || tel.length !== 11) {
        alert('请输入正确的电话号码')
        return
      } else if (cityValue === -1) {
        alert('请选择所在省份')
        return
      } else if (districtValue === -1) {
        alert('请选择所在城市')
        return
      } else if (provinceValue === -1) {
        alert('请选择所在地区')
        return
      } else if (!address) {
        alert('请输入街道信息')
        return
      } else {
        let data = { name, tel, address, cityValue, districtValue, provinceValue }
        if (this.type === 'add') {
          Address.add(data).then(res => {
            this.$router.go(-1)
          })
        } else {
          Address.update(data).then(res => {
            this.$router.go(-1)
          })
        }
      }
    },
    setDefault() {
      Address.setDefault(this.id)
    },
    remove() {
      if (window.confirm('确认删除？')) {
        Address.remove(this.id).then(res => {
          this.$router.go(-1)
        }).catch(err => {
          alert('删除失败！')
        })
      }
    }
  },
  watch: {
    provinceValue() {
      this.cityValue = -1
      this.districtValue = -1
      if (parseInt(this.provinceValue) === -1) {
        this.cityData = null
      } else {
        let index = this.addressData.list.findIndex(province => {
          return province.value === this.provinceValue
        })
        this.cityData = this.addressData.list[index].children
      }
    },
    cityValue() {
      this.districtValue = -1
      if (parseInt(this.cityValue) === -1) {
        this.districtData = null
      } else {
        let index = this.cityData.findIndex(city => {
          return city.value === this.cityValue
        })
        this.districtData = this.cityData[index].children
      }
    }
  }
};