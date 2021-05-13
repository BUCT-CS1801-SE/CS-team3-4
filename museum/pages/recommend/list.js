export default {
    data() {
        return {
            newsData: [
                {
                    id: "109121",                       
                    title: "湖南省博物馆大型剧院展览：只有你想不到",
                    author_name: "徐子",
                    cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
                    published_at: "2019-12-30 15:20:00"
                },
                {
                    id: "109122",                       
                    title: "北京火车博物馆：工业革命后的尘埃？",
                    author_name: "半佛仙人",
                    cover: "https://img.36krcdn.com/20191230/v2_02c342a62f91498b99c7f2b5aa22ff1c_img_png",
                    published_at: "2019-12-30 15:22:00"
                },
                {
                    id: "109123",
                    title: "「北京心里博物馆：2019我为什么还在坚持",
                    author_name: "燃财经",
                    cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
                    published_at: "2019-12-30 15:26:00"
                },
                {
                    id: "109124",
                    title: "如何理财？北京理财展馆会告诉你！",
                    author_name: "36氪的朋友们",
                    cover: "https://img.36krcdn.com/20191230/v2_037f7f799f504a60a848b52fa913ab65_img_png",
                    published_at: "2019-12-30 15:29:00"
                },
                {
                        id: "109125",                       
                        title: "湖南省博物馆大型剧院展览：只有你想不到",
                        author_name: "徐子",
                        cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
                        published_at: "2019-12-30 15:20:00"
                    }
            ],
        //展览必须：图片，id 和博物馆id
            exhibitionData: [
                {
                    id: "109121",                       
                    title: "湖南省博物馆大型剧院展览：只有你想不到",
                    author_name: "徐子",
                    cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
                    published_at: "2019-12-30 15:20:00"
                },
                {
                    id: "109122",                       
                    title: "北京火车博物馆：工业革命后的尘埃？",
                    author_name: "半佛仙人",
                    cover: "https://img.36krcdn.com/20191230/v2_02c342a62f91498b99c7f2b5aa22ff1c_img_png",
                    published_at: "2019-12-30 15:22:00"
                },
                {
                    id: "109123",
                    title: "「北京心里博物馆：2019我为什么还在坚持",
                    author_name: "燃财经",
                    cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
                    published_at: "2019-12-30 15:26:00"
                }
            ],
            collectionData:
            [ 
				{
					id: "109127",
					title: "「北京心里博物馆：2019我为什么还在坚持",
					author_name: "燃财经",
					cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
					published_at: "2019-12-30 15:26:00"
				},
				{
					id: "109128",
					title: "如何理财？北京理财展馆会告诉你！",
					author_name: "36氪的朋友们",
					cover: "https://img.36krcdn.com/20191230/v2_037f7f799f504a60a848b52fa913ab65_img_png",
					published_at: "2019-12-30 15:29:00"
				}
            ],
            scrollTop: 0,
            old: {
                scrollTop: 0
            }
        };
    },
    onLoad() {
        // this.getexhibition();
        // this.getcollection();
        // this.getnews();
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
                author_name: e.author_name,
                cover: e.cover,
                id: e.pk,
                
                published_at: e.published_at,
                title: e.title,
                //maintext:e.fields.newsmaintext,
            };
            console.log(this.detail);
            uni.navigateTo({
                url: '../details/details?detailDate=' + encodeURIComponent(JSON.stringify(detail))
            });
        },
        // goDetail_news: function(e) {
            
        //     let detail = {
        //         author_name: e.fields.mueseumid,
        //         cover: e.fields.imageurl,
        //         id: e.pk,
                
        //         published_at: e.fields.newstime,
        //         title: e.fields.newstitle,
        //         maintext:e.fields.newsmaintext,
        //     };
        //     console.log(this.detail);
        //     uni.navigateTo({
        //         url: '../details/details?detailDate=' + encodeURIComponent(JSON.stringify(detail))
        //     });
        // },
        scroll: function(e) {
            console.log(e,'list')
            this.old.scrollTop = e.detail.scrollTop
        },
        
    }
};