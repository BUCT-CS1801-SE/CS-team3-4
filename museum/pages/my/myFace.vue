<template>
	<view class="pageFill_yym">
		<view class="pendingWapper_yym">
			<image id="face" :src="tempFace" class="pendingFace_yym" mode="scaleToFill"></image>
		</view>
		
		<view class="notice_yym">
			<view class="noticeWords_yym">
				* 请从相册中选择等比宽高的图片噢~
			</view>
		</view>
		
		<view class="footerOpertor_yym">
			<view class="opertorWords_yym" @click="changePendingFace">
				重新选择
			</view>
			<view class="opertorWords_yym" @click="upload">
				确认上传
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tempFace: ""
			};
		},
		onLoad(params) {
			var tempFilePath = params.tempFilePath;
			this.tempFace = tempFilePath;
		},
		methods: {
			// 重新选择头像
			changePendingFace() {
				var me = this;
				uni.chooseImage({
					count: 1,
					sizeType: ["compressed"],
					sourceType: ["album"],
					success(res) {
						// 获得临时路径
						var tempFilePath = res.tempFilePaths[0];
						me.tempFace = tempFilePath;
					}
				})
			},
			upload() {
				var me = this;
				var globalUser = me.getGlobalUser("globalUser");
				
				uni.showLoading({
					mask: true,
					title: "上传中，请稍后"
				});
				
				uni.uploadFile({
					url: me.serverUrl + "/user/uploadFace?userId=" + globalUser.id,
					filePath: me.tempFace,
					name: "file",
					header: {
						"headerUserId": globalUser.id,
						"headerUserToken": globalUser.userUniqueToken
					},
					success(res) {
						// debugger;
						var resDataStr = res.data;
						// console.log(typeof(resDataStr));
						var resData = JSON.parse(resDataStr);
						// console.log(typeof(resData));
						if (resData.status == 200) {
							// 获得最新的用户数据
							var userInfo = resData.data;
							uni.setStorageSync("globalUser", userInfo);
							uni.navigateBack({
								delta: 1
							})
						} else if (resData.status == 502 || resData.status == 500) {
							uni.showToast({
								title: res.data.msg,
								image: "../../static/icos/error.png",
								duration: 2000
							})
						}
					},
					complete() {
						uni.hideLoading();
					}
				});
				
			}
		}
	}
</script>

<style>
/* 页面铺满屏幕 */
.pageFill_yym {
	width:100%;
	height: 100%;
	position: absolute;
	background: black;
}

.pendingWapper_yym {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	margin-top: 40upx;
}
.pendingFace_yym {
	width: 600upx;
	height: 600upx;
}

.notice_yym {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}

.noticeWords_yym {
	color: gray;
	font-size: 13px;
	margin-top: 30upx;
	width: 600upx;
}

/* 底部操作 start */
.footerOpertor_yym {
	position: fixed;
	bottom: 0;
	
	border-top: #515050 solid 1px;
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	padding: 30upx;
}
.opertorWords_yym {
	color: #e8e5e5;
	font-size: 16px;
	width: 200upx;
}
/* 底部操作 end */
</style>
