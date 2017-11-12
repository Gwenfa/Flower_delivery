<template>
<div class="classify">
<mt-search v-model="value" cancel-text="" placeholder="搜索鲜花、蛋糕、礼品"></mt-search>
	<div class="categories">
		<div class="left_list" style="height: 477px;">
				<ul class="c_tab">
					<li class="active">热门推荐</li>
					<li>鲜花</li>
					<li>永生花</li>
					<li>蛋糕</li>
					<li>巧克力</li>
					<li>特色礼品</li>
					<li>品牌公仔</li>
					<li>礼篮</li>
					<li>绿植花卉</li>
				</ul>
		</div>
		<div class="right_main" style="height: 477px;">
			<div class="type active">
				<div class="top_banner">
					<a href="//m.hua.com/theme/tianxiezuo/">
						<img src="//img02.hua.com/m/remind/all_xz_tx.jpg" alt="天蝎座">
						<div class="layer_text">
							<p>天蝎•献给你身边的天蝎座</p>
						</div>
					</a>
				</div>
				<div class="product">
					<p class="title">大家都在找</p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/flower/">
									<img src="//img02.hua.com/app/api/flower/huacai/rose.png" alt="鲜花">
									<p>鲜花</p>
								</a>
							</li>
							<li>
								<a href="/businessFlower/">
									<img src="//img02.hua.com/app/api/flower/yongtu/kaiye.png" alt="">
									<p>商务鲜花</p>
								</a>
							</li>
							<li>
								<a href="/yongshenghua/">
									<img src="//img02.hua.com/app/api/use/yongshenghua.png" alt="">
									<p>永生花</p>
								</a>
							</li>
							<li>
								<a href="/cake/">
									<img src="//img02.hua.com/app/api/use/dangao.png" alt="">
									<p>蛋糕</p>
								</a>
							</li>
                                                        <li>
								<a href="/gifts/Chocolates/">
									<img src="//img02.hua.com/app/api/gift/jinkouqiaokeli.png" alt="">
									<p>巧克力</p>
								</a>
							</li>
							<li>
								<a href="/gifts/">
									<img src="//img02.hua.com/app/api/use/lipin.png" alt="">
									<p>特色礼品</p>
								</a>
							</li>
							<li>
								<a href="/toys/">
									<img src="//img02.hua.com/app/api/use/gongzai.png" alt="">
									<p>品牌公仔</p>
								</a>
							</li>
							<li>
								<a href="/giftsBasket/">
									<img src="//img02.hua.com/app/api/use/lilan.png" alt="">
									<p>礼篮</p>
								</a>
							</li>
							<li>
								<a href="/plant/">
									<img src="//img02.hua.com/app/api/use/lvzhi.png" alt="">
									<p>绿植花卉</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="type">
				<div class="top_banner">
					<a href="/product/9012221.html">
						<img src="//img02.hua.com/m/remind/all_cla_ban_business flower.jpg?" alt="">
						<div class="layer_text">
							<p>浪漫告白·卡罗拉红玫瑰11枝 ¥235</p>
						</div>
					</a>
				</div>
				<div class="product">
					<p class="title">用途<a href="/home/xianhuapaihang" style="float:right;color:#232323;">鲜花排行榜 &gt;</a></p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/flower/">
									<img src="//img02.hua.com/m/icon/more_btn.png" alt="" class="quanbu">
									<p>全部</p>
								</a>
							</li>
							<li>
								<a href="/aiqingxianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/aiqing.png" alt="">
									<p>爱情鲜花</p>
								</a>
							</li>
							<li>
								<a href="/youqingxianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/youqing.png" alt="">
									<p>友情鲜花</p>
								</a>
							</li>
							<li>
								<a href="/shengrixianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/birthday.png" alt="">
									<p>生日鲜花</p>
								</a>
							</li>
							<li>
								<a href="/songzhangbeixianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/zhangbei.png" alt="">
									<p>问候长辈</p>
								</a>
							</li>
							<li>
								<a href="/songlaoshixianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/repayteacher.png" alt="">
									<p>回报老师</p>
								</a>
							</li>
							<li>
								<a href="/zhufuqinghexianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/wishes.png" alt="">
									<p>祝福庆贺</p>
								</a>
							</li>
							<li>
								<a href="/hunqingxianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/weddingcelebration.png" alt="">
									<p>婚庆鲜花</p>
								</a>
							</li>
							<li>
								<a href="/tanbingweiwenxianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/sympathy.png" alt="">
									<p>探病慰问</p>
								</a>
							</li>
							<li>
								<a href="/shengzizhuhexianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/childbirth.png" alt="">
									<p>生子祝贺</p>
								</a>
							</li>
							<li>
								<a href="/daoqianxianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/daoqian.png" alt="">
									<p>道歉鲜花</p>
								</a>
							</li>
							<li>
								<a href="/jiajuxianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/household.png" alt="">
									<p>家居鲜花</p>
								</a>
							</li>
							<li>
								<a href="/aisixianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/aisi.png" alt="">
									<p>哀思鲜花</p>
								</a>
							</li>
							<li>
								<a href="/BusinessFlower/kaiyehualan/">
									<img src="//img02.hua.com/app/api/flower/yongtu/kaiye.png" alt="">
									<p>开业花篮</p>
								</a>
							</li>
							<li>
								<a href="/BusinessFlower/meetingflower/">
									<img src="//img02.hua.com/app/api/flower/yongtu/conference.png" alt="">
									<p>公司及会议鲜花</p>
								</a>
							</li>
							<li>
								<a href="/BusinessFlower/liyiflower/">
									<img src="//img02.hua.com/app/api/flower/yongtu/ceremony.png" alt="">
									<p>礼仪鲜花</p>
								</a>
							</li>
							<li>
								<a href="/jingpinxianhua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/jingpin.png" alt="">
									<p>精品鲜花</p>
								</a>
							</li>
							<li>
								<a href="/xianggangsonghua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/hongkong.png" alt="">
									<p>香港送花</p>
								</a>
							</li>
							<li>
								<a href="/taiwansonghua/">
									<img src="//img02.hua.com/app/api/flower/yongtu/taiwan.png" alt="">
									<p>台湾送花</p>
								</a>
							</li>
						</ul>
					</div>
					<p class="title">花材</p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/meigui/">
									<img src="//img02.hua.com/app/api/flower/huacai/rose.png" alt="">
									<p>玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/hongmeigui/">
									<img src="//img02.hua.com/app/api/flower/huacai/redrose.png" alt="">
									<p>红玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/fenmeigui/">
									<img src="//img02.hua.com/app/api/flower/huacai//pinkrose.png" alt="">
									<p>粉玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/baimeigui/">
									<img src="//img02.hua.com/app/api/flower/huacai/whiterose.png" alt="">
									<p>白玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/xiangbinmeigui/">
									<img src="//img02.hua.com/app/api/flower/huacai/xiangbinrose.png" alt="">
									<p>香槟玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/zimeigui/">
									<img src="//img02.hua.com/app/api/flower/huacai/purplerose.png" alt="">
									<p>紫玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/lanmeigui/">
									<img src="//img02.hua.com/app/api/flower/huacai/bluerose.png" alt="">
									<p>蓝玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/huangmeigui/">
									<img src="//img02.hua.com/app/api/flower/huacai/yellowrose.png" alt="">
									<p>黄玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/kangnaixin/">
									<img src="//img02.hua.com/app/api/flower/huacai/kangnaixin.png" alt="">
									<p>康乃馨</p>
								</a>
							</li>
							<li>
								<a href="/yujinxiang/">
									<img src="//img02.hua.com/app/api/flower/huacai/yujinxiang.png" alt="">
									<p>郁金香</p>
								</a>
							</li>
							<li>
								<a href="/baihe/">
									<img src="//img02.hua.com/app/api/flower/huacai/baihe.png" alt="">
									<p>百合</p>
								</a>
							</li>
							<li>
								<a href="/fulang/">
									<img src="//img02.hua.com/app/api/flower/huacai/fulang.png" alt="">
									<p>扶郎</p>
								</a>
							</li>
							<li>
								<a href="/matilian/">
									<img src="//img02.hua.com/app/api/flower/huacai/baihe.png" alt="">
									<p>马蹄莲</p>
								</a>
							</li>
							<li>
								<a href="/xiangrikui/">
									<img src="//img02.hua.com/app/api/flower/huacai/xiangrikui.png" alt="">
									<p>向日葵</p>
								</a>
							</li>
						</ul>
					</div>
					<p class="title">类别</p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/huashu/">
									<img src="//img02.hua.com/app/api/flower/leibie/chuanqinghuashu.png" alt="">
									<p>传情花束</p>
								</a>
							</li>
							<li>
								<a href="/hualan/">
									<img src="//img02.hua.com/app/api/flower/leibie/jingzhihualan.png" alt="">
									<p>精致花篮</p>
								</a>
							</li>
							<li>
								<a href="/pingchahua/">
									<img src="//img02.hua.com/app/api/flower/leibie/pingchahua.png" alt="">
									<p>瓶插花</p>
								</a>
							</li>
							<li>
								<a href="/tesexianhua/">
									<img src="//img02.hua.com/app/api/flower/leibie/tesehuali.png" alt="">
									<p>特色花礼</p>
								</a>
							</li>
							<li>
								<a href="/hezhuanghua/">
									<img src="//img02.hua.com/app/api/flower/leibie/chuangyihuahe.png" alt="">
									<p>创意花盒</p>
								</a>
							</li>
							<li>
								<a href="/xianhualilan/">
									<img src="//img02.hua.com/app/api/flower/leibie/xianhualilan.png" alt="">
									<p>鲜花礼篮</p>
								</a>
							</li>
						</ul>
					</div>
					<p class="title">颜色</p>
					<div class="pro_color_list">
						<ul>
							<li>
								<a href="/hongsexianhua/">
									<img src="//img02.hua.com/app/color_03.png" alt="">
									<p>红色</p>
								</a>
							</li>
							<li>
								<a href="/fensexianhua/">
									<img src="//img02.hua.com/app/color_05.png" alt="">
									<p>粉色</p>
								</a>
							</li>
							<li>
								<a href="/xiangbinsexianhua/">
									<img src="//img02.hua.com/app/color_07.png" alt="">
									<p>香槟色</p>
								</a>
							</li>
							<li>
								<a href="/huangsexianhua/">
									<img src="//img02.hua.com/app/color_09.png" alt="">
									<p>黄色</p>
								</a>
							</li>
							<li>
								<a href="/baisexianhua/">
									<img src="//img02.hua.com/app/color_11.png" alt="">
									<p>白色</p>
								</a>
							</li>
							<li>
								<a href="/zisexianhua/">
									<img src="//img02.hua.com/app/color_13.png" alt="">
									<p>紫色</p>
								</a>
							</li>
							<li>
								<a href="/lansexianhua/">
									<img src="//img02.hua.com/app/color_15.png" alt="">
									<p>蓝色</p>
								</a>
							</li>
						</ul>
					</div>
					<p class="title">价格</p>
					<div class="pro_color_list">
						<ul>
							<li>
								<a href="/tejiaxianhua/">
									<p>特价鲜花</p>
								</a>
							</li>
							<li>
								<a href="/xianhuajiage/0-150/">
									<p>150元以下</p>
								</a>
							</li>
							<li>
								<a href="/xianhuajiage/150-250/">
									<p>150-250元</p>
								</a>
							</li>
							<li>
								<a href="/xianhuajiage/250-350/">
									<p>250-350元</p>
								</a>
							</li>
							<li>
								<a href="/xianhuajiage/350-550/">
									<p>350-550元</p>
								</a>
							</li>
							<li>
								<a href="/xianhuajiage/550-800/">
									<p>550-800元</p>
								</a>
							</li>
							<li>
								<a href="/xianhuajiage/800-99999/">
									<p>800元以上</p>
								</a>
							</li>
						</ul>
					</div>
					<p class="title">枝数</p>
					<div class="pro_num_list">
						<ul>
							<li>
								<a href="/jiuduomeigui/">
									<p>9枝</p>
								</a>
							</li>
							<li>
								<a href="/shiduomeigui/">
									<p>10枝</p>
								</a>
							</li>
							<li>
								<a href="/shiyiduomeigui/">
									<p>11枝</p>
								</a>
							</li>
							<li>
								<a href="/shierduomeigui/">
									<p>12枝</p>
								</a>
							</li>
							<li>
								<a href="/shiliuduomeigui/">
									<p>16枝</p>
								</a>
							</li>
							<li>
								<a href="/shibaduomeigui/">
									<p>18枝</p>
								</a>
							</li>
							<li>
								<a href="/shijiuduomeigui/">
									<p>19枝</p>
								</a>
							</li>
							<li>
								<a href="/ershiduomeigui/">
									<p>20枝</p>
								</a>
							</li>
							<li>
								<a href="/ershierduomeigui/">
									<p>22枝</p>
								</a>
							</li>
							<li>
								<a href="/ershijiuduomeigui/">
									<p>29枝</p>
								</a>
							</li>
							<li>
								<a href="/sanshisanduomeigui/">
									<p>33枝</p>
								</a>
							</li>
							<li>
								<a href="/sanshiliuduomeigui/">
									<p>36枝</p>
								</a>
							</li>
							<li>
								<a href="/wushiduomeigui/">
									<p>50枝</p>
								</a>
							</li>
							<li>
								<a href="/liushiliuduomeigui/">
									<p>66枝</p>
								</a>
							</li>
							<li>
								<a href="/jiushijiuduomeigui/">
									<p>99枝以上</p>
								</a>
							</li>
						</ul>
					</div>
				</div>

			</div>

			<div class="type">
				<div class="top_banner">
					<a href="/product/1073116.html">
						<img src="//img02.hua.com/m/remind/all_cla_ban_freflowers.jpg" alt="">
						<div class="layer_text">
							<p>永生花盒·维多利亚的花园 ¥329</p>
						</div>
					</a>
				</div>
				<div class="product">
					<p class="title">永生花<a href="/home/YongShengHuaPaiHang" style="float:right;color:#232323;">永生花排行榜 &gt;</a></p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/yongshenghua/">
									<img src="//img02.hua.com/m/icon/more_btn.png" alt="" class="quanbu">
									<p>全部</p>
								</a>
							</li>
							<li>
								<a href="/yongshenghua/yongshenghua_box.html">
									<img src="//img02.hua.com/app/api/yongshenghua/jingdianhuahe.png" alt="">
									<p>经典花盒</p>
								</a>
							</li>
							<li>
								<a href="/yongshenghua/yongshenghua_large.html">
									<img src="//img02.hua.com/app/api/yongshenghua/juxingmeigui.png" alt="">
									<p>巨型玫瑰</p>
								</a>
							</li>
							<li>
								<a href="/yongshenghua/yongshenghua_lavender.html">
									<img src="//img02.hua.com/app/api/yongshenghua/xunyicao.png" alt="">
									<p>薰衣草</p>
								</a>
							</li>
							<li>
								<a href="/livingflower/">
									<img src="//img02.hua.com/app/api/yongshenghua/livingflower.png" alt="">
									<p>永生瓶花</p>
								</a>
							</li>
							<li>
								<a href="/yongshenghua/yongshenghua_characteristic.html">
									<img src="//img02.hua.com/app/api/yongshenghua/specialysh.png" alt="">
									<p>特色永生花</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="type">
				<div class="top_banner">
					<a href="/cake/">
						<img src="//img02.hua.com/m/remind/all_cla_ban_cake.jpg" alt="">
						<div class="layer_text">
							<p>美味蛋糕·让生活充满甜蜜</p>
						</div>
					</a>
				</div>
				<div class="product">
					<p class="title">精选品牌蛋糕</p>
					<div class="pro_list">
                        <ul>
                        	<li>
								<a href="/cake/">
									<img src="//img02.hua.com/m/icon/more_btn.png" alt="" class="quanbu">
									<p>全部</p>
								</a>
							</li>
				                <li>
				                    <a href="/gansodangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/ganso.png" alt="">
				                        <p>元祖</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/incakedangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/incake.png" alt="">
				                        <p>INCAKE</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/xfxbdangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/xingfuxibing.png" alt="">
				                        <p>幸福西饼</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/croissantsdangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/kesongfang.png" alt="">
				                        <p>可颂坊</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/lecakedangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/lecake.png" alt="">
				                        <p>诺心</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/micamikadangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/micamika.png" alt="">
				                        <p>米卡米卡</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/vcakedangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/vcake.png" alt="">
				                        <p>Vcake</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/waffleboydangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/waffleboy.png" alt="">
				                        <p>窝夫小子</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/yipinxuandangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/yipinxuan.png" alt="">
				                        <p>一品轩</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/mcakedangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/mcake.png" alt="">
				                        <p>Mcake</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/mzmkdangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/mzmk.png" alt="">
				                        <p>美滋每客</p>
				                    </a>
				                </li>
				                <li>
				                    <a href="/boncakedangao/">
				                        <img src="//img02.hua.com/app/api/cake/brand/boncake.png" alt="">
				                        <p>BONCAKE</p>
				                    </a>
				                </li>
                            <li>
                                <a href="/faxinidangao/">
                                    <img src="//img02.hua.com/pc/pimg/cake_brand_s_fxn.png" alt="">
                                    <p>法西妮蛋糕</p>
                                </a>
                            </li>
                            <li>
                                <a href="/heartcheesedangao/">
                                    <img src="//img02.hua.com/app/api/cake/brand/xinzhihe.jpg" alt="">
                                    <p>心之和蛋糕</p>
                                </a>
                            </li>
            				</ul>
						</div>
					<p class="title">按城市选购</p>
					<div class="pro_num_list">
						<ul>
							<li>
								<a href="/cake/beijingdangao/">
									<p>北京</p>
								</a>
							</li>
							<li>
								<a href="/cake/shanghaidangao/">
									<p>上海</p>
								</a>
							</li>
							<li>
								<a href="/cake/shenzhendangao/">
									<p>深圳</p>
								</a>
							</li>
							<li>
								<a href="/cake/guangzhoudangao/">
									<p>广州</p>
								</a>
							</li>
							<li>
								<a href="/cake/chongqingdangao/">
									<p>重庆</p>
								</a>
							</li>
							<li>
								<a href="/cake/chengdudangao/">
									<p>成都</p>
								</a>
							</li>
							<li>
								<a href="/cake/shenyangdangao/">
									<p>沈阳</p>
								</a>
							</li>
							<li>
								<a href="/cake/qingdaodangao/">
									<p>青岛</p>
								</a>
							</li>
							<li>
								<a href="/cake/daliandangao/">
									<p>大连</p>
								</a>
							</li>
							<li>
								<a href="/cake/hangzhoudangao/">
									<p>杭州</p>
								</a>
							</li>
							<li>
								<a href="/cake/nanjingdangao/">
									<p>南京</p>
								</a>
							</li>
							<li>
								<a href="/cake/suzhoudangao/">
									<p>苏州</p>
								</a>
							</li>
							<li>
								<a href="/cake/jinandangao/">
									<p>济南</p>
								</a>
							</li>
							<li>
								<a href="/cake/tianjindangao/">
									<p>天津</p>
								</a>
							</li>
							<li>
								<a href="/cake/changshadangao/">
									<p>长沙</p>
								</a>
							</li>
							<li>
								<a href="/cake/wuhandangao/">
									<p>武汉</p>
								</a>
							</li>
							<li>
								<a href="/cake/zhengzhoudangao/">
									<p>郑州</p>
								</a>
							</li>
							<li>
								<a href="/cake/guiyangdangao/">
									<p>贵阳</p>
								</a>
							</li>
							<li>
								<a href="/cake/nanchangdangao/">
									<p>南昌</p>
								</a>
							</li>
							<li>
								<a href="/cake/hefeidangao/">
									<p>合肥</p>
								</a>
							</li>
							<li>
								<a href="/cake/">
									<p>更多</p>
								</a>
							</li>
						</ul>
					</div>
					<p class="title">全国配送蛋糕</p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/cake/xiannaidangao/">
									<img src="//img02.hua.com/app/api/cake/xiannai.png" alt="">
									<p>鲜奶蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/shuiguodangao/">
									<img src="//img02.hua.com/app/api/cake/shuiguo.png" alt="">
									<p>水果蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/shengxiaodangao/">
									<img src="//img02.hua.com/app/api/cake/shengxiao.png" alt="">
									<p>生肖蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/qinglvdangao/">
									<img src="//img02.hua.com/app/api/cake/qingren.png" alt="">
									<p>情侣蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/hunqingdangao/">
									<img src="//img02.hua.com/app/api/cake/hunqing.png" alt="">
									<p>婚庆蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/ertongdangao/">
									<img src="//img02.hua.com/app/api/cake/ertong.png" alt="">
									<p>儿童蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/oushidangao/">
									<img src="//img02.hua.com/app/api/cake/oushi.png" alt="">
									<p>欧式蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/jieqingdangao/">
									<img src="//img02.hua.com/app/api/cake/jieqing.png" alt="">
									<p>节庆蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/zhushoudangao/">
									<img src="//img02.hua.com/app/api/cake/zhushou.png" alt="">
									<p>祝寿蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/musidangao/">
									<img src="//img02.hua.com/app/api/cake/musi.png" alt="">
									<p>慕斯蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/wutangdangao/">
									<img src="//img02.hua.com/app/api/cake/wutang.png" alt="">
									<p>无糖蛋糕</p>
								</a>
							</li>
							<li>
								<a href="/cake/qiaokelidangao/">
									<img src="//img02.hua.com/app/api/cake/qiaokeli.png" alt="">
									<p>巧克力蛋糕</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="type">
				<div class="top_banner">
					<a href="/product/1207010.html">
						<img src="//img02.hua.com/m/remind/all_cla_ban__choclate.jpg" alt="">
						<div class="layer_text">
							<p>巧克巧蔻定制16粒装手工夹心巧克力 ¥258</p>
						</div>
					</a>
				</div>
				<div class="product">
					<p class="title">巧克力分类<a href="/home/QiaoKeLiPaiHang" style="float:right;color:#232323;">巧克力排行榜 &gt;</a></p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/gifts/chocolates/">
									<img src="//img02.hua.com/m/icon/more_btn.png" alt="" class="quanbu">
									<p>全部</p>
								</a>
							</li>
                            <li>
                                <a href="/jinkouqiaokeli/">
                                    <img src="//img02.hua.com/app/api/qiaokeli/cailler.png" alt="">
                                    <p>进口巧克力</p>
                                </a>
                            </li>
							<li>
								<a href="/qiaokeli/">
									<img src="//img02.hua.com/app/api/qiaokeli/qiaoluo.png" alt="">
									<p>巧罗巧克力</p>
								</a>
							</li>
							<li>
								<a href="/lindtchocolate/">
									<img src="//img02.hua.com/app/api/qiaokeli/ruishilian.png" alt="">
									<p>瑞士莲巧克力</p>
								</a>
							</li>
                            <li>
                                <a href="/qiaokouqiaokeli/">
                                    <img src="//img02.hua.com/app/api/qiaokeli/qiaokouqiaokeli.png" alt="">
                                    <p>巧蔻巧克力</p>
                                </a>
                            </li>
						</ul>
					</div>
				</div>
			</div>

			<div class="type">
				<div class="top_banner">
					<a href="/product/1085009.html">
						<img src="//img02.hua.com/m/remind/all_cla_ban_gift.jpg?" alt="">
						<div class="layer_text">
							<p>特色礼品·小熊拥抱香氛礼盒 ¥89</p>
						</div>
					</a>
				</div>
				<div class="product">
					<p class="title">礼品类别<a href="/home/LiPinPaiHang" style="float:right;color:#232323;">特色礼品排行榜 &gt;</a></p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/gifts/">
									<img src="//img02.hua.com/m/icon/more_btn.png" alt="" class="quanbu">
									<p>全部</p>
								</a>
							</li>
							<li>
								<a href="/shuijingneidiao/">
									<img src="//img02.hua.com/app/api/gift/neidiao.png" alt="">
									<p>水晶内雕</p>
								</a>
							</li>
							<li>
								<a href="/livingflower/">
									<img src="//img02.hua.com/app/api/gift/yongshenghua.png" alt="">
									<p>永生瓶花</p>
								</a>
							</li>
							<li>
								<a href="/jinmeigui/">
									<img src="//img02.hua.com/app/api/gift/jinbohua.png" alt="">
									<p>金箔花</p>
								</a>
							</li>
							<li>
								<a href="/yinyuehe/">
									<img src="//img02.hua.com/app/api/gift/yinyuehe.png" alt="">
									<p>音乐盒</p>
								</a>
							</li>
							<li>
								<a href="/bestlife/">
									<img src="//img02.hua.com/app/api/gift/baozhen.png" alt="">
									<p>睡枕/抱枕</p>
								</a>
							</li>
							<li>
								<a href="/huazhuangjing/">
									<img src="//img02.hua.com/app/api/gift/huazhuangjing.png" alt="">
									<p>化妆镜</p>
								</a>
							</li>

							<li>
								<a href="/shoushi/">
									<img src="//img02.hua.com/app/api/gift/shoushi.png" alt="">
									<p>首饰</p>
								</a>
							</li>

                            <li>
                                <a href="/TangleTeezerHairbrushs/">
                                    <img src="//img02.hua.com/app/api/gift/TangleTeezerHairbrushs.png" alt="">
                                    <p>TangleTeezer</p>
                                </a>
                            </li>
                            <li>
                                <a href="/Giftstalk/">
                                    <img src="//img02.hua.com/app/api/gift/Giftstalk.png" alt="">
                                    <p>Giftstalk精选</p>
                                </a>
                            </li>
                            <li>
                                <a href="/naileasy/">
                                    <img src="//img02.hua.com/app/api/gift/naileasy.png" alt="">
                                    <p>naileasy指甲油</p>
                                </a>
                            </li>
							<li>
								<a href="/kingkingxiangxun/">
									<img src="//img02.hua.com/app/api/gift/xiangxun.png" alt="">
									<p>香薰</p>
								</a>
							</li>
						       <li>
								<a href="/dengshi/">
									<img src="//img02.hua.com/app/api/gift/chuangyigift.png" alt="">
									<p>创意礼品</p>
								</a>
						       </li>
                                                       <li>
								<a href="/toys/">
									<img src="//img02.hua.com/app/api/gift/hellokitty.png" alt="">
									<p>品牌公仔</p>
								</a>
							</li>

							<li>
								<a href="/gifts/Chocolates/">
									<img src="//img02.hua.com/app/api/gift/jinkouqiaokeli.png" alt="">
									<p>品牌巧克力</p>
								</a>
							</li>

							<li>
								<a href="/qiyetuangou/gift_card.html">
									<img src="//img02.hua.com/app/api/gift/lipincard.png" alt="">
									<p>礼品卡</p>
								</a>
							</li>
							<li>
								<a href="/duorouzhiwupenzai/">
									<img src="//img02.hua.com/app/api/gift/duorou.png" alt="">
									<p>多肉植物盆栽</p>
								</a>
							</li>

							
						</ul>
					</div>
					<p class="title">礼品用途</p>
					<div class="pro_color_list">
						<ul>
							<li>
								<a href="/a_birthday/">
									<p>生日礼品</p>
								</a>
							</li>
							<li>
								<a href="/yuehuiliwu/">
									<p>约会/求爱</p>
								</a>
							</li>
							<li>
								<a href="/jiehunliwu/">
									<p>结婚礼品</p>
								</a>
							</li>
							<li>
								<a href="/ganxiezhufuliwu/">
									<p>感谢/祝福</p>
								</a>
							</li>
							<li>
								<a href="/baifangtanwangliwu/">
									<p>拜访探望</p>
								</a>
							</li>
							<li>
								<a href="/jiehunjinianriliwu/">
									<p>结婚纪念日</p>
								</a>
							</li>
							<li style="border-right:none">
								<a href="/qiaoqianliwu/">
									<p>乔迁礼品</p>
								</a>
							</li>
							<li style="border:1px solid #ccc;border-top:none;">
								<a href="/jiajuliwu/">
									<p>家居礼品</p>
								</a>
							</li>
						</ul>
					</div>
					<p class="title">礼品价格</p>
					<div class="pro_color_list">
						<ul>
							<li>
								<a href="/liwujiage/0-80/">
									<p>80元以下</p>
								</a>
							</li>
							<li>
								<a href="/liwujiage/80-150/">
									<p>80-150元</p>
								</a>
							</li>
							<li style="border-bottom:1px solid #ccc;">
								<a href="/liwujiage/150-300/">
									<p>150-300元</p>
								</a>
							</li>
							<li>
								<a href="/liwujiage/300-500/">
									<p>300-500元</p>
								</a>
							</li>
							<li style="border-right:1px solid #ccc;">
								<a href="/liwujiage/500-99999/">
									<p>500元以上</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="type">
				<div class="top_banner">
					<a href="/product/1090038.html">
						<img src="//img02.hua.com/m/remind/all_cla_ban_doll.jpg?" alt="">
						<div class="layer_text">
							<p>公仔创意花束·兔子小姐 ¥139</p>
						</div>
					</a>
				</div>
				<div class="product">
					<p class="title">品牌公仔分类<a href="/home/GongZaiPaiHang" style="float:right;color:#232323;">品牌公仔排行榜 &gt;</a></p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/toys/">
									<img src="//img02.hua.com/m/icon/more_btn.png" alt="" class="quanbu">
									<p>全部</p>
								</a>
							</li>
							<li>
								<a href="/HelloKitty/">
									<img src="//img02.hua.com/app/api/doll/hello-kitty.png" alt="">
									<p>Hello Kitty</p>
								</a>
							</li>
							<li>
								<a href="/doge/">
									<img src="//img02.hua.com/app/api/doll/katong.png" alt="">
									<p>Doge神烦狗</p>
								</a>
							</li>
							<li>
								<a href="/bestlife/">
									<img src="//img02.hua.com/app/api/doll/bestlife.png" alt="">
									<p>bestlife</p>
								</a>
							</li>
							<li>
								<a href="/katonghuashu/">
									<img src="//img02.hua.com/app/api/doll/katonghuashu.jpg" alt="">
									<p>卡通花束</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="type">
				<div class="top_banner">
					<a href="/product/9012214.html">
						<img src="//img02.hua.com/m/remind/all_cla_gift busket.jpg" alt="">
						<div class="layer_text">
							<p>温情礼篮·愿祝福常相伴 ¥338</p>
						</div>
					</a>
				</div>
				<div class="product">
					<p class="title">礼篮</p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/giftsBasket/">
									<img src="//img02.hua.com/app/api/baskets/baskets.png" alt="">
									<p>礼篮</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="type">
				<div class="top_banner">
					<a href="/plant/greenplant/"><img src="//img02.hua.com/app/api/plant/plant_banner.png" alt=""></a>
				</div>
				<div class="product">
					<p class="title">绿植花卉</p>
					<div class="pro_list">
						<ul>
							<li>
								<a href="/Plant/">
									<img src="//img02.hua.com/m/icon/more_btn.png" alt="" class="quanbu">
									<p>全部</p>
								</a>
							</li>
							<li>
								<a href="/plant/greenplant/">
									<img src="//img02.hua.com/app/api/plant/lvzhi.png" alt="">
									<p>绿色植物</p>
								</a>
							</li>
							<li>
								<a href="/plant/potflower/">
									<img src="//img02.hua.com/app/api/plant/pengzai.png" alt="">
									<p>盆栽花卉</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>	
		</div>

	</div>
</div>
</template>
<script>
export default {
	data(){
		return{
			value:""
		}
	},
    //这里可以用created或mounted
    mounted() {
        this.changeIcon()
    },
    methods: {
        changeIcon(){
        	$(".c_tab>li").click(function(){
					$(".c_tab>li").removeClass("active").eq($(this).index()).addClass("active");
					$(".right_main>div").hide().eq($(this).index()).show();
				})
        },
    }
}
</script>
<style>
.mint-search {
    height: auto;
    overflow: hidden;
}
.mint-searchbar{
    background-color: rgba(245,245,245,.9);
}

.mint-searchbar-inner .mintui-search{
	position: absolute;
    right: 22px;
    color: #333;
    padding-top: 5px;
    font-size: 14px;
}
input[type="search" i] {
    margin-right: 15px;
}
.left_list {
    width: 25%;
    float: left;
    overflow-y: scroll;
    background-color: rgba(245,245,245,.9);
    position: fixed;
}
.left_list ul li {
    line-height: 48px;
    text-align: center;
    font-size: 0.6rem
}
.left_list ul li.active {
    background-color: #fff;
    border-right: none;
    color: #f60;
}
.right_main {
	/*height: 477px;*/
    margin-left: 25%;
    width: 75%;
    padding: 8px 8px;
    overflow-y: scroll;
    font-size: 12px;
    box-sizing: border-box;
}
.right_main div.type{
	display: none;
}
.right_main div.active{
	display: block;
}
.right_main .top_banner {
    width: 100%;
    position: relative;
}
.right_main .top_banner img {
    width: 100%;
    display: block;
}
.layer_text {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
}
.layer_text p {
    color: #fff;
    position: absolute;
    top: 50%;
    margin-top: -6px;
    text-align: center;
    width: 100%;
}
.right_main .product .title {
    margin-top: 19px;
    margin-bottom: 21px;
    font-size: 12px;
    text-align: left;
}
.right_main .pro_list ul, .right_main .pro_color_list ul {
    overflow: hidden;
}
.right_main .pro_list li {
    float: left;
    width: 33.3%;
    height: 7em;
    text-align: center;
}
.right_main .pro_list img {
    width: 56px;
    display: block;
    margin: 0 auto;
}
.right_main .pro_list p {
    margin: 3px 0 5px 0;
    font-size: 10px;
}
.right_main .pro_color_list li, .right_main .pro_num_list li {
    float: left;
    width: 33.3%;
    text-align: center;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    padding: 13px 8px;
}
.right_main .pro_color_list li:nth-child(7) {
    border-top: none;
}
.right_main .pro_color_list li:nth-child(4), .right_main .pro_color_list li:nth-child(5), .right_main .pro_color_list li:nth-child(6), .right_main .pro_color_list li:nth-child(7) {
    border-bottom: 1px solid #ddd;
}
.right_main .pro_color_list li:nth-child(3), .right_main .pro_color_list li:nth-child(6), .right_main .pro_color_list li:nth-child(7) {
    border-right: 1px solid #ddd;
}
.right_main .pro_num_list li:nth-child(n+13) {
    border-bottom: 1px solid #ddd;
}
.right_main .pro_num_list li:nth-child(3n) {
    border-right: 1px solid #ddd;
}

</style>