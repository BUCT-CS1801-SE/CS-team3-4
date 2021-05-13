<template>
	<view>
		<view><!--如果没有初始的经纬度也可以显示！所以我现在删掉他进行测试，如果不行的话后期再加上，同时我也删掉了scale，它可以自动决定缩放大小来显示所有点-->
			<map class="map" 
			:markers="markers"
			:scale="scale"
			:include-points="includepoints"
			@markertap="goDetail2"
			></map>
		</view>
		<view class="VerticalBox">
				<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:100vh"
				:scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in chinaLocation" :key="key" :id="'main-'+key" @click="goDetail(value)">
				<view class="uni-media-list">
					<!-- <image class="uni-media-list-logo"  src="../../static/test/logo.png"></image> -->
					<view class="cu-avatar round lg" style="font-size:40px;">
						{{key+1}}
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{ value.museumname }}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{ value.location }}</text>
						</view>
					</view>
				</view>
			</view>
			</scroll-view>
		</view>
	</view>
	
</template>

<script src = "./map-list.js">
</script>

<style>
@import 'map-list.css';
</style>
