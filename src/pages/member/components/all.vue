<template>
  <div class="container-bottom-menu" style="cursor:pointer;">
    <div class="container" style="min-height: 597px;">
      <div class="block-list address-list section section-first js-no-webview-block">
        <a
          class="block-item js-address-item address-item"
          v-for="list in addressList"
        >
          <div class="address-title">{{list.name}} {{list.tel}}</div>
          <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
          <router-link class="edit" :to="{name:'edit',params:{type:'edit',instance:list}}">
            <img src="https://b.yzcdn.cn/v2/image/pf/icon/m.png">修改
          </router-link>
        </a>
      </div>
      <div class="block stick-bottom-row center">
        <router-link
          class="btn btn-blue js-no-webview-block js-add-address-btn"
          :to="{path:'/address/edit',query:{type:'add'}}"
        >新增地址</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "./address_base.css";
import "./address.css";
import Address from "@/modules/js/addressService";
export default {
  data() {
    return {
      addressList: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      Address.getList()
        .then(res => {
          this.addressList = res.data.lists;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.address-list .address-item .edit {
  line-height: 14px;
  position: absolute;
  font-size: 12px;
  padding-left: 25px;
  color: #999;
  top: 20px;
  right: 15px;
}
.address-list .address-item img {
  width: 14px;
  height: 14px;
  margin-right: 3px;
  position: relative;
  top: 2px;
}
</style>
