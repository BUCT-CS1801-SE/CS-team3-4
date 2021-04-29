<template>
	<view class="pageFill_yym">
		<form @submit="formSubmitNickname">
			<view class="pageBlock_yym" style="margin-top: 20upx;">
				<input 
					type="text"
					name="nickname"
					:value="globalUser.nickname" 
					class="input_yym"
					placeholder="请输入昵称"
					placeholder-class="graywords_yym"
					maxlength="10"
					/>
			</view>
			<button type="primary" form-type="submit" class="submitBtn_yym">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser: {}
			};
		},
		onLoad() {
			var me = this;
			var globalUser = me.getGlobalUser("globalUser");
			me.globalUser = globalUser;
		},
		methods: {
			formSubmitNickname(e) {
				var me = this;
				var nickname = e.detail.value.nickname;
				uni.request({
					url: me.serverUrl + "/user/modifyUserinfo",
					data: {
						"userId": me.globalUser.id,
						"nickname": nickname
					},
					header: {
						"headerUserId": me.globalUser.id,
						"headerUserToken": me.globalUser.userUniqueToken
					},
					method: "POST",
					success(res) {
						var resData = res.data;
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
					}
				})
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
}

.graywords_yym {
	color:#808080;
}

.input_yym{
	height: 80upx;
	line-height: 80upx;
	margin-left: 40upx;
}

.submitBtn_yym {
	width: 95%;
	margin-top: 40upx;
	background-color: #4A81AA;
}
</style>
