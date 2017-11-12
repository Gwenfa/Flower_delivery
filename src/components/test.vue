<template>
  <div class="test">
<mt-header fixed title="fixed top"></mt-header>
<div style="font-size:1rem">hello</div>

<mt-tab-container v-model="selected">
  <mt-tab-container-item id="外卖">
    外卖
  </mt-tab-container-item>

  <mt-tab-container-item id="搜索">
   搜索
  </mt-tab-container-item>

  <mt-tab-container-item id="订单">
   订单
  </mt-tab-container-item>

  <mt-tab-container-item id="我的">
    我的
  </mt-tab-container-item>
</mt-tab-container>

<mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="外卖">
    <img slot="icon" src="">
    <router-link to="/waimai">外卖</router-link>
  </mt-tab-item>
  <mt-tab-item id="搜索">
    <img slot="icon" src="">
    <router-link to="/search">搜索</router-link>
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="">
    <router-link to="/order">订单</router-link>
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="">
    <router-link to="/Mine">我的</router-link>
  </mt-tab-item>
</mt-tabbar>
</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
        selected:"外卖" 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
