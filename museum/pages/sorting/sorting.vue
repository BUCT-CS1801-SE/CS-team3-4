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
						<view class="cu-item" v-for="(item1,index) in list1" :key="index" >
							<view class="cu-avatar round lg" style="font-size:40px;">
								{{index+1}}
							</view>
							<view class="content">
								<view class="text-grey">{{item1.name}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										{{item1.intro}}
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

<script src = "./sorting.js">
</script>

<style>
@import 'sorting.css';
</style>
