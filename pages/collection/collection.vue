<template>
	<view>
		<view class="exhMessage_yrn" v-for="item in collectionInfo" :key="item.pk">
			<!-- 动态绑定背景图片 -->
			<view class="exhShow_yrn" :style="{backgroundImage: 'url(' + (item.fields.collectionimage) + ')'}"></view>
			
			<!-- 展览信息 -->
			<view class="uni-title uni-common-mt exhTitle1_yrn">{{item.fields.collectionname}}</view>
			<view class="exhIntroCard_yrn">
				<p v-html="item.fields.collectionintroduction"></p>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {	
				collectionInfo: [],
				ppk: 0,
			}
		},
		methods: {
			async getCollectionInfo() {
				const res = await this.$myRequest({
					// url: "/collectionInfo/4535/",
					url: "/collectionInfo/"+this.ppk+"/",
				})
				// console.log(res)
				this.collectionInfo = res.data.data.items
			} 
		},
		onLoad(options) {
			// console.log(options)
			this.ppk = options.pk
			this.getCollectionInfo()
		}
	}
</script>

<style>
.exhMessage_yrn{
	margin: 0 auto;
	max-width: 800rpx;
}
.exhShow_yrn{
	background-repeat: no-repeat;
	background-size: 100% 100%;
	max-width: 800rpx;
    margin: 0 auto;
	height: 400rpx;
}
.exhTitle1_yrn{
	font-size: 45rpx;
	margin: auto 15rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
}
.exhIntroCard_yrn p{
	margin: auto 15rpx;
	font-size: 30rpx;
}
</style>
