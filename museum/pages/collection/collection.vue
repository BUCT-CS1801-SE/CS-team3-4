<template>
	<view>
		<view class="exhMessage_yrn" v-for="item in collectionInfo" :key="item.pk">
			<!-- 动态绑定背景图片 -->
			<view class="exhShow_yrn" :style="{backgroundImage: 'url(' + (item.cover) + ')'}"></view>
			
			<!-- 展览信息 -->
			<view class="uni-title uni-common-mt exhTitle1_yrn">{{item.author_name}}</view>
			<view class="exhIntroCard_yrn">
				<p v-html="item.title"></p>
			</view>
		</view>
	</view>
	
</template>

<script src="./collection.js"></script>

<style>
@import 'collection.css';
</style>
