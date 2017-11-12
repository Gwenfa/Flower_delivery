<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <button @click="change()">淡出</button> -->
    <mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="home" class="active_home" @click.native="showActive(1)" >
    <img slot="icon"  v-show="active!=1" src="//img02.hua.com/m/icon/home_icon_new.png">
    <img class="activeimg" slot="icon"  v-show="active===1" src="//img02.hua.com/m/icon/home_icon_click_new.png">
    <router-link to="/home">首页</router-link>
  </mt-tab-item>
  <mt-tab-item id="classify" class="active_classify" @click.native="showActive(2)">
    <img slot="icon" v-show="active!=2" src="//img02.hua.com/m/icon/classify_icon_new.png">
    <img slot="icon"  v-show="active===2" src="//img02.hua.com/m/icon/classify_icon_click_new.png">
    <router-link to="/classify">分类</router-link>
  </mt-tab-item>
  <mt-tab-item id="shoppingcart" @click.native="showActive(3)">
    <img slot="icon"  v-show="active!=3" src="//img02.hua.com/m/icon/cart_icon_new.png">
    <img slot="icon"  v-show="active===3" src="//img02.hua.com/m/icon/cart_icon_click_new.png">
    <router-link to="/shoppingcart">购物车</router-link>
  </mt-tab-item>
  <mt-tab-item id="mine" @click.native="showActive(4)">
    <img slot="icon" v-show="active!=4" src="//img02.hua.com/m/icon/my_icon_new.png">
    <img slot="icon"  v-show="active===4" src="//img02.hua.com/m/icon/my_icon_click_new.png">
    <router-link to="/mine">我的</router-link>
  </mt-tab-item>
</mt-tabbar>
<!--     <div class="tab">
  <div class="tab_item">      
      <span class="catalogue">
         <img src="//img02.hua.com/m/icon/classify_icon_new.png" alt="分类">
      </span>
    <router-link to="/home" @click="change()">
    首页
    </router-link>
  </div>
  <div class="tab_item">
     <router-link to="/classify">分类</router-link>
  </div>
  <div class="tab_item">
    <router-link to="/shoppingcart">购物车</router-link>
  </div>
   <div class="tab_item">
    <router-link to="/mine">我的</router-link>
  </div>
</div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'app',
   data () {
    return {
        selected:"home",
        active:1
    }
  },
  methods:{
    change:function(){
      // alert("hello")
      $("img").attr("src","//img02.hua.com/m/icon/home_icon_click_new.png");
    },
    showActive:function(index){
      $(".active_classify").removeClass('is-selected');
      $(".active_classify img").attr("src","//img02.hua.com/m/icon/classify_icon_new.png");
      this.active=index;
      if(index===1){
        this.$router.push('/home');
        $(".active_home img").attr("src","//img02.hua.com/m/icon/home_icon_click_new.png");
      }
      if(index===2){
        this.$router.push('/classify');
        $(".active_home img").attr("src","//img02.hua.com/m/icon/home_icon_new.png");
        $(".active_classify").addClass('is-selected');
        $(".active_classify img").attr("src","//img02.hua.com/m/icon/classify_icon_click_new.png");
      }
      if(index===3)
        this.$router.push('/shoppingcart');
      if(index===4)
        this.$router.push('/classify');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#app .tab{
  display: flex;
  justify-content: space-between;
  width:100%;
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  background-color: rgba(250,250,250,1);
  border-top: 1px solid #ddd;
}
#app .tab_item{
  flex:1;
  text-align: center;
  
}
#app .tab_item a{
  font-size: 0.5rem
}

.mint-tab-item-label a{
    color: #494949;
  }
.is-selected .mint-tab-item-label a{
   color: #fe6600;
}
</style>
