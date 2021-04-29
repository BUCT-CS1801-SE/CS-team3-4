<template>
	<view class="pageFill_yym">	
		<view class="header_yym">
			<view v-if="userIsLogin">
				<!--<image :src="userInfo.faceImage" class="face"></image>用户登录->用户头像-->
				<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face_yym"></image>
			</view>
			<view v-else>
				<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face_yym"></image>
			</view>
		
		<view class="infoWapper_yym" v-if="userIsLogin">
			<view class="nickname_yym">
				<!--{{userInfo.nickname}}-->
				No.4小组
			</view>
			<view class="navInfo_yym">ID：<!--{{userInfo.id}}-->0001</view>
			</view>
			<view v-else>
				<navigator url="../login/login">
					<view class="nickname_yym registLogin_yym">
						注册/登录
					</view>
				</navigator>
			</view>
		</view>
		
	
		<view class="body_yym">
			<view v-if="userIsLogin">
				<block v-for="(item,index) in list" :key="index">
					<home-list-item :item="item"
					:index="index"></home-list-item>
				</block>
			</view>
			
		</view>
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
				userIsLogin: true,
				userInfo: {},
				list:[
					{ icon:"",name:"个人中心",clicktype:"navigateTo",url:"../../pages/my/myInfo" },
					{ icon:"",name:"我的讲解",clicktype:"navigateTo",url:"../../pages/my/myExplanation" },
					{ icon:"",name:"清除缓存",clicktype:"clear",url:"" },
					{ icon:"",name:"常见问题",clicktype:"navigateTo",url:"../../pages/my/myHelp" },
					{ icon:"",name:"关于我们",clicktype:"navigateTo",url:"../../pages/my/myAbout" },
				]
			}
		},
		methods: {
			
		},
		onShow() {
					var me = this;
					// 用户状态的切换
		// 			var userInfo = uni.getStorageSync("globalUser");
		// 			if (userInfo != null && userInfo != "" && userInfo != undefined) {
		// 				me.userIsLogin = true;
		// 				me.userInfo = userInfo;
		// 			} else {
		// 				me.userIsLogin = false;
		// 				me.userInfo = {};
		// 			}

					// 使用挂载方法获取用户数据
					var userInfo = me.getGlobalUser("globalUser");
					if (userInfo != null) {
						me.userIsLogin = true;
						me.userInfo = userInfo;
					} else {
						me.userIsLogin = false;
						me.userInfo = {};
					}
				}
	}
</script>

<style>
	.pageFill_yym {
		width:100%;
		height: 100%;
		background-color: #f7f7f7;
	}
	
	/* 头部个人信息 start */
	.header_yym{
		/* #ifdef MP */
		padding: 0upx 30upx 40upx 30upx;
		/* #endif */
		/* #ifndef MP */
		padding: 120upx 30upx 40upx 30upx;
		/* #endif */
		background-color: #DDD5AF;
		
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	
	.face_yym {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		flex-shrink: 0;
	}
	
	.infoWapper_yym {
		width: 80%;
		margin-left: 40upx;
		display: flex;
		flex-direction: column;
	}
	.nickname_yym {
		color: #6a5018;
		font-size: 18px;
		font-weight: bold;
	}
	.registLogin_yym {
		margin-left: 60upx;
		margin-top: 30upx;
	}
	
	
	.navInfo_yym {
		color: #a38e62;
		font-size: 14px;
		margin-top: 10upx;
	}
	
	.setWapper_yym {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		width: 15%;
	}
	/* 头部个人信息 end */
	
	/* 下面的选项 */
	.body_yym {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

</style>
