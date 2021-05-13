<template>
	<view class="home">
		<view class="banner-contain">
			<swiper circular indicator-dots autoplay="true">
				<swiper-item  v-for="item in exhibitionData" :key="item.pk" @click="goDetail_exhib(item)">
					<!-- <image :src="item.cover"></image>
				 		<view class="banner"> -->
						<view class="banner-title" >{{item.title}}</view>
						<image class="banner-img" :src="item.cover"></image>
					   <!-- <view class="banner-title">{{item.title}}</view>
					</view> -->
				</swiper-item>
			</swiper>
		</view>
		
		<view class="uni-title uni-common-mt" >
			展品推荐<br/>
		</view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120" >
				<!-- <view id="demo1" class="scroll-view-item_H uni-bg-red">展览1</view>
				<view id="demo2" class="scroll-view-item_H uni-bg-green">展览2</view>
				<view id="demo3" class="scroll-view-item_H uni-bg-blue">展览3</view> -->
				<view class="scroll-view-item_H" v-for="item in collectionData" :key="item.pk" @click="goDetail_coll(item)">
					<view class="banner" >
					    <image class="banner-img" :src="item.cover"></image>
					    <view class="banner-title">{{item.author_name}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view>
			<view class="uni-title uni-common-mt" >
				新闻<br/>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="item in newsData" :key="item.pk" v-on:click="goDetail_news(item)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="item.cover"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{ item.title }}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ item.author_name }}</text>
								<text>{{ item.published_at }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>
 
<script src = './list.js'>
</script>

<style lang="scss">
@import 'list.css';
</style>
 