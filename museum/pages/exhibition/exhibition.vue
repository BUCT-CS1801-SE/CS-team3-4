<template>
	<view>
		<view class="exhMessage_qj" v-for="item in exhibitionInfo" :key="item">
			<!-- 动态绑定背景图片 -->
			<view class="exhShow_qj" :style="{backgroundImage: 'url(' + (item.cover) + ')'}"></view>
			
			<!-- 展览信息 -->
			<view class="uni-title uni-common-mt exhTitle1_qj">{{item.author_name}}</view>
			<view class="exhIntroCard_qj">
				<p v-html="item.title"></p>
			</view>
		</view>
	</view>
</template>

<script src = "./exhibition.js">
</script>

<style>
@import 'exhibition.css';
</style>
