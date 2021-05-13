<template>
	<view style="padding: 20upx;">
		<view class="user-set-about-t u-f-ajc u-f-column animated fadeIn fast">
			<image src="../../static/login/loginhead_hgq.jpg" 
			mode="widthFix" lazy-load></image>
			<view>博物馆信息服务子系统</view>
			<view>博物馆导览子系统</view>
			<view>version 1.0.0</view>
		</view>
		<block v-for="(item,index) in list" :key="index">
			<home-list-item :item="item"
			:index="index"></home-list-item>
		</block>
	</view>
</template>

<script>
	import homeListItem from "../../components/home-list-item.vue";
	export default {
		components:{
			homeListItem
		},
		data() {
			return {
				list:[
					{ icon:"",name:"新版本检测",clicktype:"",url:"" },
					{ icon:"",name:"",clicktype:"",url:"" },
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user-set-about-t{
	padding: 40upx 0;
}
.user-set-about-t>image{
	margin-top: 50upx;
	margin-bottom: 30upx;
	width: 65%;
}
.user-set-about-t>view{
	color: #CCCCCC;
}
</style>
