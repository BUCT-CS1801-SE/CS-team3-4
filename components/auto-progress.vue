<template>
	<view>
		<view class='audioPlayer'>
			<view class='player'>
				<!-- <image :src='item.coverimg' class='audioBack'></image> -->
				<view class='audioControls'>
					<view class='flex'>
						<view class='bottom' @tap='playAudio(musicData[current],current)'>
							<!-- 按钮 -->
							<view v-if="musicData[current].isPlayAudio" class="iconfont">
								&#xe608;
							</view>
							<view v-else class="iconfont">
								&#xe613;
							</view>
						</view>
						<view class='slider'>
							<slider @change='sliderChange' activeColor='red' block-size="12" :value='musicData[current].audioTime' />
						</view>
						<view class='time'>
							{{musicData[current].showTime1}}/{{musicData[current].showTime2}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	const innerAudioContext = wx.createInnerAudioContext();
	export default {
		data() {
			return {

			}
		},
		props: {
			musicData: Array,
			current: ''
		},
		methods: {
			//初始化播放器，获取duration
			Initialization() {
				var vm = this;
				vm.musicData.forEach((item, index) => {
					if (item.audiosrc.length != 0) {
						//设置src
						innerAudioContext.src = item.audiosrc;

						//运行一次
						innerAudioContext.play();
						innerAudioContext.pause();
						innerAudioContext.onCanplay(() => {
							//初始化duration
							innerAudioContext.duration
							setTimeout(function() {
								//延时获取音频真正的duration
								var duration = innerAudioContext.duration;
								var min = parseInt(duration / 60);
								var sec = parseInt(duration % 60);
								if (min.toString().length == 1) {
									min = `0${min}`;
								}
								if (sec.toString().length == 1) {
									sec = `0${sec}`;
								}
								item.audioDuration = innerAudioContext.duration
								// t.showTime2 = `${min}:${sec}`
							}, 1000)
						})
					}
				});


			},
			//拖动进度条事件
			sliderChange(e) {
				var vm = this;
				console.log('111',vm.musicData,current);
				// vm.musicData.forEach((item, index) => {
				innerAudioContext.src = musicData[current].audiosrc;
				//获取进度条百分比
				var value = e.detail.value;
				musicData.audioTime = value
				var duration = musicData[current].audioDuration;
				//根据进度条百分比及歌曲总时间，计算拖动位置的时间
				value = parseInt(value * duration / 100);
				//更改状态
				musicData[current].audioSeek = value,
					musicData[current].isPlayAudio = true
				//调用seek方法跳转歌曲时间
				innerAudioContext.seek(value);
				//播放歌曲
				innerAudioContext.play();
				// })
			},
			//播放、暂停按钮
			playAudio(item, index) {
				//获取播放状态和当前播放时间
				let isPlayAudio = item.isPlayAudio;
				let seek = item.audioSeek;
				innerAudioContext.pause();
				// 更改播放状态
				item.isPlayAudio = !item.isPlayAudio;

				if (!item.isPlayAudio) {
					// 暂停
					item.audioSeek = innerAudioContext.currentTime;
					console.log(innerAudioContext.currentTime);
				} else {
					//如果在暂停，获取播放时间并继续播放
					innerAudioContext.src = item.audiosrc;
					if (innerAudioContext.duration != 0) {
						item.audioDuration = innerAudioContext.duration
					}
					//跳转到指定时间播放
					innerAudioContext.seek(seek);
					innerAudioContext.play();

					// 将其他的播放器暂停false，当前的播放器状态设置为true
					this.musicData.forEach((ite, ind) => {
						ite.isPlayAudio = false;
					});
					item.isPlayAudio = true;
					innerAudioContext.duration
					console.log("bbb", item);
					setTimeout(function() {
						//延时获取音频真正的duration
						let duration = innerAudioContext.duration;
						console.log('总时间', duration);
						let min = parseInt(duration / 60);
						let sec = parseInt(duration % 60);
						if (min.toString().length == 1) {
							min = `0${min}`;
						}
						if (sec.toString().length == 1) {
							sec = `0${sec}`;
						}
						item.audioDuration = innerAudioContext.duration;
						item.showTime2 = `${min}:${sec}`
					}, 1000)
				}

			},
			loadaudio() {
				var vm = this;
				//设置一个计步器
				this.durationIntval = setInterval(function() {
					vm.musicData.forEach((item, index) => {
						if (item.isPlayAudio == true) {
							var seek = item.audioSeek;
							var duration = innerAudioContext.duration;
							var time = item.audioTime;
							time = parseInt(100 * seek / duration);
							//当歌曲在播放时，每隔一秒歌曲播放时间+1，并计算分钟数与秒数
							var min = parseInt((seek + 1) / 60);
							var sec = parseInt((seek + 1) % 60);
							//填充字符串，使3:1这种呈现出 03：01 的样式
							if (min.toString().length == 1) {
								min = `0${min}`;
							}
							if (sec.toString().length == 1) {
								sec = `0${sec}`;
							}
							var min1 = parseInt(duration / 60);
							var sec1 = parseInt(duration % 60);
							if (min1.toString().length == 1) {
								min1 = `0${min1}`;
							}
							if (sec1.toString().length == 1) {
								sec1 = `0${sec1}`;
							}
							//当进度条完成，停止播放，并重设播放时间和进度条
							if (time >= 100) {
								innerAudioContext.stop();
								item.audioSeek = 0
								item.audioTime = 0
								item.audioDuration = duration
								item.isPlayAudio = false
								item.showTime1 = `00:00`
								return false;
							}
							//正常播放，更改进度信息，更改播放时间信息
							item.audioSeek = seek + 1,
								item.audioTime = time,
								item.audioDuration = duration,
								item.showTime1 = `${min}:${sec}`,
								item.showTime2 = `${min1}:${sec1}`
						}

					})
				}, 1000)
			},
		},
		onShow: function() {
			this.Initialization();
			this.loadaudio();
		},
		onUnload: function() {
			//卸载页面，清除计步器
			clearInterval(this.durationIntval);
		}

	}
</script>
<style lang="scss">
	.flex {
		display: flex;
		height: 100%;
		line-height: 60upx;
		overflow: hidden;
		box-sizing: border-box;
	}

	.audioPlayer {
		width: 100%;
		height: 60upx;
		// margin-bottom: 30rpx;
		box-sizing: border-box;
		// padding: 20rpx 30rpx;
	}

	.player {
		width: 100%;
		height: 100%;
		position: relative;
		display: inline-block;
		// margin-left: 20upx;
	}

	.audioBack {
		width: 100%;
		height: 100%;
	}

	.audioControls {
		width: 100%;
		height: 60rpx;
		// background: black;
		opacity: .8;
		position: absolute;
		bottom: 0;
		color: white;
		font-size: 6pt;
		line-height: 60rpx;
		text-align: center;
	}

	.audioControls .bottom {
		width: 60rpx;
		height: 100%;

		.iconfont {
			font-size: 60upx;
			display: inline-block;
			line-height: 67upx;
		}
	}



	.audioControls .slider {
		width: 520rpx;
		height: 100%;
		margin: -5upx 2upx 0upx 2upx;
	}

	.slider slider {
		width: 95%;
		margin-left: 4%;
		margin-right: 0;
	}

	.audioControls .time {
		width: 170upx;
		height: 100%;
		margin-top: 8upx;
	}
</style>
