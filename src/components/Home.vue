<template>
  <div class="home">
     <div class="swiper-container" id="banner">
        <div class="swiper-wrapper">  
            <div class="swiper-slide"><img width="100%" src="../../static/img/home/banner1.jpg"></div>  
            <div class="swiper-slide"><img width="100%" src="../../static/img/home/banner2.jpg"></div>  
            <div class="swiper-slide"><img width="100%" src="../../static/img/home/banner3.png"></div>  
        </div>  
        <!-- Add Pagination -->  
        <div class="swiper-pagination"></div>
    </div> 
         <mt-search v-model="value" cancel-text="" placeholder="搜索" @click.native="goSearch()"></mt-search>
		 <div class="login"> <a href="/Passport/Login/">登录</a></div>

  </div>
</template>

<script>
 import Swiper from 'swiper';
 import 'swiper/dist/css/swiper.min.css';

export default {
  name: 'hello', 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listImg: ["//img02.hua.com/slider/17_banner_d11_m.jpg","//img02.hua.com/slider/17_banner_tx_m.jpg","//img02.hua.com/slider/new_banner_yongganai.png"]
  }
},
  mounted() {
  	 var swiper = new Swiper('.swiper-container',{
        autoplay:true,  
        speed:1000,  
        loop:true,  
        pagination: '.swiper-pagination', 
        paginationClickable: true,
        paginationType : 'bullets',
        autoplayDisableOnInteraction:false,  
        touchMoveStopPropagation:false   
        /*effect: 'fade'*/});  
        },
   methods:{
   	goSearch(){
   		this.$router.push('/classify');
   		$('a').removeClass('is-selected');
   		$(".active_home img").attr("src","//img02.hua.com/m/icon/home_icon_new.png");
   		$(".active_classify").addClass('is-selected');
   		$(".active_classify img").attr("src","//img02.hua.com/m/icon/classify_icon_click_new.png");
   	}
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home .mint-search {
	position: absolute;
    top: 7px;
    right: 50px;
    height: auto;
}

.mint-search-list {
	display: none;
}
.home .mint-search .mint-searchbar {
    background:none;
    padding: 0;
}
.home .mint-searchbar-inner{
	border-radius: 5px;
	width: 165px;
}
.login{
	position: absolute;
    top: 15px;
    z-index: 999;
    font-size: 12px;
    right: 12px;
}
</style>
