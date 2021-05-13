<template>
	<view class="pageFill_yym">
		<view class="info-list">
			
			<!-- 头像 -->
			<view class="itemWapper_yym faceLineUpbottom_yym" @click="operator_yym">
				<view class="infoWords_yym">头像</view>
				
				<view class="rightWapper_yym">
					<!--<image :src="globalUser.faceImage" class="face"></image>-->
					<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face_yym"></image>
					<view class="arrowBlock_yym">
						<image src="../../static/my/left-gray-arrow.png" class="arrowIco_yym"></image>
					</view>
				</view>
			</view>
			
			<view class="lineTop_yym">
				<view class="line_yym"></view>
			</view>
			
			<!-- 昵称 -->
			<view class="itemWapper_yym" @click="modifyNickname_yym">
				<view class="infoWords_yym">昵称</view>
				
				<view class="rightWapper_yym">
					<view class="grayFields_yym">
						{{globalUser.nickname}}
						计科1801
					</view>
					<view class="arrowBlock_yym">
						<image src="../../static/my/left-gray-arrow.png" class="arrowIco_yym"></image>
					</view>
				</view>
			</view>
			
			<view class="lineTop_yym">
				<view class="line_yym"></view>
			</view>
			
			<!-- 生日 -->
			<view class="itemWapper_yym" @click="modifyBirthday_yym">
				<view class="infoWords_yym">生日</view>
				
				<view class="rightWapper_yym">
					<view class="grayFields_yym">
						{{globalUser.birthday}}
						2020-5-10
					</view>
					<view class="arrowBlock_yym">
						<image src="../../static/my/left-gray-arrow.png" class="arrowIco_yym"></image>
					</view>
				</view>
			</view>
			
			<view class="lineTop_yym">
				<view class="line_yym"></view>
			</view>
			
			<!-- 性别 -->
			<view class="itemWapper_yym" @click="modifySex_yym">
				<view class="infoWords_yym">性别</view>
				
				<view class="rightWapper_yym">
					<view class="grayFields_yym">
						
						<view v-if="globalUser.sex == 1">
							男
						</view>
						<view v-else-if="globalUser.sex == 0">
							女
						</view>
						<view v-else>
							未选择
						</view>
						
					</view>
					<view class="arrowBlock_yym">
						<image src="../../static/my/left-gray-arrow.png" class="arrowIco_yym"></image>
					</view>
				</view>
			</view>
			<!-- 修改密码-->
			<view class="itemWapper_yym" @click="modifyPassWord_yym">
				<view class="infoWords_yym">修改密码</view>
				
				<view class="rightWapper_yym">
					<view class="arrowBlock_yym">
						<image src="../../static/my/left-gray-arrow.png" class="arrowIco_yym"></image>
					</view>
				</view>
			</view>
			
			
		</view>
		
		<view class="footerWapper_yym">
			<view class="footerWords_yym" @click="cleanStorage_yym">
				清理缓存
			</view>
			<view class="footerWords_yym" style="margin-top: 10upx;" @click="logout_yym">
				退出登录
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser: {}
			};
		},
		onShow() {
			var me = this;
			var globalUser = me.getGlobalUser("globalUser");
			me.globalUser = globalUser;
		},
		methods: {
			modifySex_yym() {
				uni.navigateTo({
					url: "../my/mySex"
				})
			},
			modifyBirthday_yym() {
				uni.navigateTo({
					url: "../my/myBirthday"
				})
			},
			modifyNickname_yym() {
				uni.navigateTo({
					url: "../my/myNickname"
				})
			},
			modifyPassWord_yym() {
				uni.navigateTo({
					url: "../my/myPassword"
				})
			},
			operator_yym() {
				var me = this;
				var globalUser = me.getGlobalUser("globalUser");
				uni.showActionSheet({
					itemList: ["查看我的头像", "从相册选择上传"],
					success(res) {
						var index = res.tapIndex;
						if (index == 0) {
							// 预览头像
							var faceArr = [];
							faceArr.push(globalUser.faceImage);
							uni.previewImage({
								urls: faceArr,
								current: faceArr[0]
							})
						} else if (index == 1) {
							// 选择上传头像
							uni.chooseImage({
								count: 1,
								sizeType: ["compressed"],
								sourceType: ["album"],
								success(res) {
									// 获得临时路径
									var tempFilePath = res.tempFilePaths[0];
									// #ifdef H5
									uni.navigateTo({
										url: "../myFace/myFace?tempFilePath=" + tempFilePath
									})
									// #endif
									// #ifndef H5
									uni.navigateTo({
										url: "../faceCrop/faceCrop?tempFilePath=" + tempFilePath
									})
									// #endif
								}
							})
							
						}
					}
				})
			},
			cleanStorage_yym() {
				uni.clearStorageSync();
				uni.showToast({
					title: "清理缓存成功",
					mask: false,
					duration: 1500
				})
			},
			logout_yym() {
										uni.showToast({title: '退出登录成功！',
									                   icon: 'none',
													   success: () => {
							                    setTimeout(() => {//uni.switchTab可跳转tabBar路径
							                        uni.navigateTo({//uni.navigateTo用于跳转非 tabBar 的页面的路径
							                                url: "../login/login",//设置跳转路径，可传参，例如../recommend/list？useremail=''&password=''
							                                success: res => {},//在list.vue的export default中onLoad用来接收参数
							                                fail: () => {},
							                                complete: () => {}
							                            });	
							                    }, 1500);
							           }});
								
							
							/* var globalUser = this.getGlobalUser("globalUser");
							var serverUrl = this.serverUrl;
							uni.request({
								url: serverUrl + '/user/logout?userId=' + globalUser.id,
								method: "POST",
								success: (res) => {
									// 获取真实数据之前，务必判断状态是否为200
									if (res.data.status == 200) {
										// 如果服务器返回200，代表用户在服务端退出登录成功
										uni.removeStorageSync("globalUser");
										uni.switchTab({
											url: "../me/me"
										})
									}
								}
							}); */
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
	
	.infoList_yym {
		/* margin-top: 20upx; */
		padding: 0upx 30upx;
	}
	
	.infoWords_yym {
		color: #333333;
		font-size: 16px;
		width: 25%;
		line-height: 80upx;
		/* font-weight: bold; */
	}
	
	.face_yym {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}
	
	.arrowBlock_yym {
		margin-left: 10upx;
		line-height: 86upx;
	}
	
	.arrowIco_yym {
		width: 30upx;
		height: 30upx;
	}
	
	.itemWapper_yym {
		display: flex;
		margin-top: 20upx;
		margin-left: 20upx;
		flex-direction: row;
		justify-content: flex-start;
	}
	
	.faceLineUpbottom_yym {
		margin-top: 20upx;
		/* margin-bottom: 20upx; */
		padding-top: 20upx;
		padding-bottom: 20upx;
	}
	
	.rightWapper_yym {
		width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	
	.grayFields_yym {
		font-size: 14px;
		color: darkgray;
		line-height: 80upx;
	}
	
	/* 底部操作 start */
	.footerWapper_yym {
		position: fixed;
		bottom: 0;
		
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.footerWords_yym {
		text-align: center;
		background-color: white;
		padding: 20upx;
		
		color: #333333;
		font-size: 16px;
	}
	/* 底部操作 end */
</style>
