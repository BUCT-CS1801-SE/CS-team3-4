export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				list: [{
					id:0,
					name:"藏品榜",
				},
				{
					id:1,
					name:"展览榜",
				},
				{
					id:2,
					name:"新闻榜",
				}],
				list1: [{
					id:0,
					name:"北京故宫博物院",
					intro:"位于北京东城区长安街10号",
					city:"北京",
					loc:"东城",
				},
				{
					id:1,
					name:"湖南省博物院",
					intro:"位于湖南省长沙市天心区韶山路10号",
					city:"长沙",
					loc:"天心",
				},
				{
					id:2,
					name:"军事博物馆",
					intro:"位于北京朝阳区长安街10号",
					city:"北京",
					loc:"朝阳",
				},
				{
					id:3,
					name:"国家博物院",
					intro:"位于北京东城区长安街10号",
					city:"北京",
					loc:"东城",
				}],
				list2:[],
				list3:[],
				list4:[],
				mainCur: 0,
				verticalNavTop: 0,
				load: true
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.getlist1();
			 this.getlist2();
			 this.getlist3();
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			getlist1(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/collectionrank",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log("collectionrank",res);
					this.list2=res.data;
					console.log("list2",this.list2);
					// })
					}
				})
			},
			getlist2(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/Exhibitionrank",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log(res);
					this.list3=res.data;
					console.log("list3",this.list3);
					// })
					}
				})
			},
			getlist3(){
				uni.request({
				  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
					// url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
					url: "http://47.93.50.106/api/Newsrank",
					
					// //这里必须用箭头函数，其他函数形式会报错 wdnmd
					//远程调用记得注意异步的问题，所以会发送错误
					success:res=>{
					 console.log(res);
					this.list4=res.data;
					console.log("list4",this.list4);
					// })
					}
				})
			},
			godetail(){
				console.log("godetails");
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						// console.log(scrollTop)
						return false
					}
				}
			}
			
		}
	}