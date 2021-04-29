<template>
	<view>
	<!-- 导航栏 -->
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
			<view class="cu-item flex-sub" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
			 :data-id="index">
				{{item.name}}
			</view>
			</view>
		</scroll-view>
	
	
		<view class="VerticalBox">
			
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:100vh"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
			 
			 
				<view class="padding-top padding-lr" id="main-0">
					<!-- 排行榜头 -->
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> 藏品榜</view>
					</view>
					
					<!-- 排行榜内容 -->
					<view class="cu-list menu-avatar" >
						<!-- 排行榜第一项 -->
						<view class="cu-item" v-for="(item1,index) in list2" :key="index" >
							<view class="cu-avatar round lg" style="font-size:40px;">
								{{index+1}}
							</view>
							<view class="content">
								<view class="text-grey">{{item1.museumname}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item1.museumname}}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">{{item1.city}}</view>
								<view class="cu-tag round bg-grey sm">{{item1.colllectionnum}}</view>
							</view>
	
						</view>
						
					</view>
				</view>
				
				<view class="padding-top padding-lr" id="main-1">
					<!-- 排行榜头 -->
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> 展览榜</view>
					</view>
					
					<!-- 排行榜内容 -->
					<view class="cu-list menu-avatar" >
						<!-- 排行榜第一项 -->
						<!-- 排行榜第一项 -->
						<view class="cu-item" v-for="(item1,index) in list3" :key="index" >
							<view class="cu-avatar round lg" style="font-size:40px;">
								{{index+1}}
							</view>
							<view class="content">
								<view class="text-grey">{{item1.name}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item1.name}}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">{{item1.city}}</view>
								<view class="cu-tag round bg-grey sm">{{item1.num}}</view>
							</view>
							
						</view>
						
					</view>
				</view>
				<view class="padding-top padding-lr" id="main-2">
					<!-- 排行榜头 -->
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> 新闻榜</view>
					</view>
					
					<!-- 排行榜内容 -->
					<view class="cu-list menu-avatar" >
						<!-- 排行榜第一项 -->
						<!-- 排行榜第一项 -->
						<view class="cu-item" v-for="(item1,index) in list4" :key="index" >
							<view class="cu-avatar round lg" style="font-size:40px;">
								{{index+1}}
							</view>
							<view class="content">
								<view class="text-grey">{{item1.name}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item1.name}}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">{{item1.city}}</view>
								<view class="cu-tag round bg-grey sm">{{item1.num}}</view>
							</view>
							
						</view>
						
					</view>
				</view>
				
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				list: [{
					id:0,
					name:"藏品榜",
				},
				{
					id:1,
					name:"展览榜",
				},
				{
					id:2,
					name:"新闻榜",
				}],
				list1: [{
					id:0,
					name:"北京故宫博物院",
					intro:"位于北京东城区长安街10号",
					city:"北京",
					loc:"东城",
				},
				{
					id:1,
					name:"湖南省博物院",
					intro:"位于湖南省长沙市天心区韶山路10号",
					city:"长沙",
					loc:"天心",
				},
				{
					id:2,
					name:"军事博物馆",
					intro:"位于北京朝阳区长安街10号",
					city:"北京",
					loc:"朝阳",
				},
				{
					id:3,
					name:"国家博物院",
					intro:"位于北京东城区长安街10号",
					city:"北京",
					loc:"东城",
				}],
				list2:[],
				list3:[],
				list4:[],
				mainCur: 0,
				verticalNavTop: 0,
				load: true
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.getlist1();
			 this.getlist2();
			 this.getlist3();
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			getlist1(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/collectionrank",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log("collectionrank",res);
					this.list2=res.data;
					console.log("list2",this.list2);
					// })
					}
				})
			},
			getlist2(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/Exhibitionrank",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log(res);
					this.list3=res.data;
					console.log("list3",this.list3);
					// })
					}
				})
			},
			getlist3(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/Newsrank",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log(res);
					this.list4=res.data;
					console.log("list4",this.list4);
					// })
					}
				})
			},
			godetail(){
				console.log("godetails");
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						// console.log(scrollTop)
						return false
					}
				}
			}
			
		}
	}
</script>

<style>
.ordernum {
	font-size: 100px;
}
</style>
