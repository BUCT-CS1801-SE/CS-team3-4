<template>
	<view class="pageFill_yym">
		<form @submit="formSubmitBirthday">
			<view class="page-block" style="margin-top: 20upx;">
				<picker mode="date" @change="dateChange">
					<view class="birthday_yym">{{birthday}}</view>
				</picker>
			</view>
			
			<button type="primary" form-type="submit" class="submitBtn_yym">提交</button>
			
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				birthday: "1999-5-22",
				globalUser: {}
			};
		},
		onLoad() {
			var me = this;
			var globalUser = me.getGlobalUser("globalUser");
			me.globalUser = globalUser;
			me.birthday = globalUser.birthday;
		},
		methods: {
			dateChange(e) {
				this.birthday = e.detail.value;
			},
			formSubmitBirthday() {
				var me = this;
				var birthday = me.birthday;
				
				uni.request({
					url: me.serverUrl + "/user/modifyUserinfo",
					data: {
						"userId": me.globalUser.id,
						"birthday": birthday
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

.birth-input {
	height: 80upx;
	line-height: 40upx;
	padding-left: 20upx;
}

.birthday_yym {
	height: 80upx;
	padding-left: 20upx;
	padding-top: 30upx;
}

.submitBtn_yym {
	width: 95%;
	margin-top: 40upx;
	background-color: #4A81AA;
}
</style>
