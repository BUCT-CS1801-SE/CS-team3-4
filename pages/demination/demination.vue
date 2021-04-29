<template>
	
	<view>
	
	<view class="tit_hotcity">国内热门城市</view>
		<view>
			<scroll-view class="scroll-view_H"  scroll-x="true" @scroll="scroll" scroll-left="120" >
			<view class="hot_city_item" v-for="(value, key) in hotcity_listdata" :key="key" @click="goDetail(value)">
			<image :src="value.img"></image>
			<text>{{value.city_name}}</text>
			</view>
			</scroll-view>
		
		
		</view>
	
		
	<view class="city">
		
		
		
		<view class="tit">所有城市</view>
		
		<view class="citys_list">
			<view v-for="(value, key) in listdata" :key="key" @click="goDetail(value)">
			<view class="city_item">
			<image :src="value.img"></image>
			<text>{{value.city_name}}</text>
		</view>
		</view>
		</view>
		
		
		</view>
		
			<button @click="callus">没找到想去的国家？请联系我们</button>
		
		</view>
		
		
</template>

<script>
	export default {
		data() {
			return {
				hotcity_listdata:[
					{
						img:"../../static/icon/BeiJing.jpg",
						city_name:"北京"
					},
					{
						img:"../../static//icon/ShangHai.jpg",
						city_name:"上海"
					},
					{
						img:"../../static//icon/GuangZhou.jpg",
					city_name:"广州"
					},
					{
						img:"../../static/icon/NanJing.jpg",
					city_name:"南京"
					}
				],
				listdata:[
					{
						img:"../../static/icon/BeiJing.jpg",
						city_name:"北京"
					},
					{
						img:"../../static//icon/ShangHai.jpg",
						city_name:"上海"
					},
					{
						img:"../../static//icon/GuangZhou.jpg",
					city_name:"广州"
					},
					{
						img:"../../static/icon/NanJing.jpg",
					city_name:"南京"
					}
				],
				scrollTop: 0,
				old: {
					scrollTop: 0,
					}
					};
			},
			
	/*	onLoad() {

		},
		
		},*/
		methods: {
			goDetail: function(e) {
			    let detail = {
			       // img:e.img,
					city_name:e.city_name
			    };
			    uni.navigateTo({
			        url: '../map-list/map-list?details=' + encodeURIComponent(JSON.stringify(detail))
			    });
			},
			callus(){
				uni.switchTab({
					url:'/pages/mine/mine'
				})
			},
		      
			    scroll: function(e) {
			  	console.log(e)
			  	this.old.scrollTop = e.detail.scrollTop
			  },
			  onNavigationBarButtonTap(e) {
			      uni.navigateTo({
			          url: "./cityselect/cityselect"
					   });     
			  },
		}
	}
</script>

<style>

.city
{
	background: #eee;
	overflow: hidden;
	margin-top: 10px;
	}
	
	

.tit{
	height:50px;
	line-height: 50px;
	color:#b50e03;
	text-align:center;
	letter-spacing: 20px;
	background: #fff;
	margin: 7rpx 0;
}
.tit_hotcity{
	height:50px;
	line-height: 50px;
	color:#333333;
	text-align:left;
	letter-spacing: 0px;
	background:#FFFFFF;
	font-size: 15px;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	margin: 7rpx 0;
	font-feature-settings:;
}
.citys_list{
	padding: 0 5rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.city_item
{
	background: #fff;
	width:355rpx;
	margin:15rpx 0 ;
	padding: 10rpx;
	box-sizing: border-box;	
	
}
.hot_city_item
{
	background:#FFFFFF;
	width:355rpx;
	margin:15rpx 0 ;
	padding: 10rpx;
	box-sizing: border-box;	
	display: inline-block;
}
.scroll-view-item_H {
			display: inline-block;
			width: 100%;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
			font-size: 36rpx;
		}
.cityname{
	font-size: 28rpx;
	line-height: 50rpx;
	padding-bottom:30rpx;
	padding-top:20rpx;
	
}
image{
	width:100%;
	height:100px;
	display: block;
	margin: auto;
}
.scroll-view_H {
			white-space: nowrap;
			width: 100%;
		}



	
</style>
