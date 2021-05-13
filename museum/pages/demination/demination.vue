<template>
	
	<view>
	
		<view class="tit">热门城市</view>
		
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
			
		<button @click="callus">没找到想去的城市？请联系我们</button>
		
	</view>
		
		
</template>

<script src = "./demination.js"></script>

<style>
@import 'demination.css';	
</style>
