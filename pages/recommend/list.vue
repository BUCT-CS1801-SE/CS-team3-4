<template>
	
	<view class="home">
		<view class="banner-contain">
			<swiper circular indicator-dots>
				<swiper-item  v-for="item in exhibitionData" :key="item.pk" @click="goDetail_exhib(item)">
				<!-- 	<image :src="item.cover"></image> -->
				<!-- 	<view class="banner"> -->
						 <view class="banner-title" >{{item.fields.exhibitiontheme}}</view>
						 <image class="banner-img" :src="item.fields.exhibition_picture"></image>
					  <!--  <view class="banner-title">{{item.title}}</view> -->
					<!-- </view> -->
				</swiper-item>
			</swiper>
		</view>
		
		
		
		
		<view class="uni-title uni-common-mt" >
			展品推荐
			<text>\n横向布局</text>
		</view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120" >
				<!-- <view id="demo1" class="scroll-view-item_H uni-bg-red">展览111</view>
				<view id="demo2" class="scroll-view-item_H uni-bg-green">展览2</view>
				<view id="demo3" class="scroll-view-item_H uni-bg-blue">展览3</view> -->
				<view class="scroll-view-item_H" v-for="item in collectionData" :key="item.pk" @click="goDetail_coll(item)">
					<view class="banner" >
					    <image class="banner-img" :src="item.fields.collectionimage"></image>
					    <view class="banner-title">{{item.fields.collectionname}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view>
			<view class="uni-title uni-common-mt" >
				新闻
				<text>\n纵向布局</text>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="value in newsData" :key="value.pk" v-on:click="goDetail_news(value)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.fields.imageurl"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{ value.fields.newstitle }}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ value.fields.positive_negative }}</text>
								<text>{{ value.fields.newstime}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
 
<script>
    
    export default {
        data() {
            return {
                newsData: [
					// {
     //                    id: "109121",                       
     //                    title: "湖南省博物馆大型剧院展览：只有你想不到",
     //                    author_name: "徐子",
     //                    cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
     //                    published_at: "2019-12-30 15:20:00"
     //                },
     //                {
     //                    id: "109122",                       
     //                    title: "北京火车博物馆：工业革命后的尘埃？",
     //                    author_name: "半佛仙人",
     //                    cover: "https://img.36krcdn.com/20191230/v2_02c342a62f91498b99c7f2b5aa22ff1c_img_png",
     //                    published_at: "2019-12-30 15:22:00"
     //                },
     //                {
     //                    id: "109123",
     //                    title: "「北京心里博物馆：2019我为什么还在坚持",
     //                    author_name: "燃财经",
     //                    cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
     //                    published_at: "2019-12-30 15:26:00"
     //                },
     //                {
     //                    id: "109124",
     //                    title: "如何理财？北京理财展馆会告诉你！",
     //                    author_name: "36氪的朋友们",
     //                    cover: "https://img.36krcdn.com/20191230/v2_037f7f799f504a60a848b52fa913ab65_img_png",
     //                    published_at: "2019-12-30 15:29:00"
     //                },
					// {
					//         id: "109125",                       
					//         title: "湖南省博物馆大型剧院展览：只有你想不到",
					//         author_name: "徐子",
					//         cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
					//         published_at: "2019-12-30 15:20:00"
					//     }
                ],
			//展览必须：图片，id 和博物馆id
				exhibitionData: [
					// {
				//         id: "109121",                       
				//         title: "湖南省博物馆大型剧院展览：只有你想不到",
				//         author_name: "徐子",
				//         cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
				//         published_at: "2019-12-30 15:20:00"
				//     },
				//     {
				//         id: "109122",                       
				//         title: "北京火车博物馆：工业革命后的尘埃？",
				//         author_name: "半佛仙人",
				//         cover: "https://img.36krcdn.com/20191230/v2_02c342a62f91498b99c7f2b5aa22ff1c_img_png",
				//         published_at: "2019-12-30 15:22:00"
				//     },
				//     {
				//         id: "109123",
				//         title: "「北京心里博物馆：2019我为什么还在坚持",
				//         author_name: "燃财经",
				//         cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
				//         published_at: "2019-12-30 15:26:00"
				//     }
				],
				collectionData: [],
				// [ 
				// 	    {
				// 	        id: "109127",
				// 	        title: "「北京心里博物馆：2019我为什么还在坚持",
				// 	        author_name: "燃财经",
				// 	        cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
				// 	        published_at: "2019-12-30 15:26:00"
				// 	    },
				// 	    {
				// 	        id: "109128",
				// 	        title: "如何理财？北京理财展馆会告诉你！",
				// 	        author_name: "36氪的朋友们",
				// 	        cover: "https://img.36krcdn.com/20191230/v2_037f7f799f504a60a848b52fa913ab65_img_png",
				// 	        published_at: "2019-12-30 15:29:00"
				// 	    }
				// ],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
            };
        },
        onLoad() {
			this.getexhibition();
			this.getcollection();
			this.getnews();
        },
        methods: {
			getexhibition(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/exhibitionAll",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log("exhibitionAll",res.data.data.items);
					this.exhibitionData=res.data.data.items.slice(1,5);
					console.log("exhibitionData",this.exhibitionData);
					// })
					}
				})
			},
			getcollection(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/collection_All",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log(res);
					this.collectionData=res.data.data.items.slice(1,5);
					console.log("collectionData",this.collectionData);
					// })
					}
				})
			},
			getnews(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/news",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log("news",res);
					this.newsData=res.data.slice(300,312);
					console.log("newsData",this.newsData);
					// })
					}
				})
			},
            goDetail_coll: function(e) {
             
                uni.navigateTo({
                    url: '../collection/collection?pk=' + e.pk
                });
            },
			goDetail_exhib: function(e) {
				
				uni.navigateTo({
				    url: '../exhibition/exhibition?pk=' + e.pk
				});
			},
			goDetail_news: function(e) {
				
				let detail = {
				    author_name: e.fields.mueseumid,
				    cover: e.fields.imageurl,
				    id: e.pk,
				    
				    published_at: e.fields.newstime,
				    title: e.fields.newstitle,
					maintext:e.fields.newsmaintext,
				};
				console.log(this.detail);
				uni.navigateTo({
				    url: '../details/details?detailDate=' + encodeURIComponent(JSON.stringify(detail))
				});
			},
			scroll: function(e) {
				console.log(e,'list')
				this.old.scrollTop = e.detail.scrollTop
			},
			
        }
    };
</script>
<style lang="scss">
	.home {
		swiper{
			height: 380rpx;
			width:750rpx ;
		
		}
	}
	.uni-media-head-pictrue {
		height: 375rpx;
		width: 750rpx;
	}
	.list_row {
		height: 375rpx;
		width: 750rpx;
		background-color: #007AFF;
	}
    .uni-media-list-logo {
        width: 180upx;
        height: 140upx;
    }
 
    .uni-media-list-body {
        height: auto;
        justify-content: space-around;
    }
 
    .uni-media-list-text-top {
        height: 74upx;
        font-size: 28upx;
        overflow: hidden;
    }
 
    .uni-media-list-text-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
		.scroll-view_H {
			white-space: nowrap;			display: flex;
			width: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.scroll-view-item_H {
			display: inline-block;
			width: 70%;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
		.banner {
		    height: 360upx;
		    overflow: hidden;
		    position: relative;
		    background-color: #ccc;
		}
		.banner-img {
		    width: 100%;
			z-index: 1;
			position: relative;
		}
		.banner-title {
		    max-height: 84upx;
		     overflow:hidden;
		     position: absolute;
		    left: 11upx;
		    bottom: 30upx;
		    width: 70%;
		    font-size: 32upx;
		    font-weight: 400;
		    line-height: 42upx;
		    color: white;
		    z-index: 11;
		}
		.banner-contain{
			
			overflow: hidden;
			position: relative;
		}
</style>
 