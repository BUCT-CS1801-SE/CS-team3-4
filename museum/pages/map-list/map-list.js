export default {
    data() {
        return {
            longitude1: 116.403414,
            latitude1: 39.924091,
            scale: 12,
            mainCur: 0,
            verticalNavTop: 0,
            TabCur: 0,
            markers: [],//存储具体经纬度等
            includepoints:[],//，存储缩放使得内部所有点均能显示只存经纬度
            //从数据库获取博物馆名称和中文地址,id,图片后，存在chinaLocation中
            chinaLocation: [
                {
                    id:11,
                    museumname:"故宫博物院",
                    Location:"北京市故宫博物院",
                    cover:"../../static/logo.png"
                },
                {
                    id:22,
                    museumname:"天坛",
                    Location:"北京市天坛",
                    cover:"../../static/logo.png"
                },
                {
                    id:33,
                    museumname:"北海公园",
                    Location:"北京市北海公园",
                    cover:"../../static/logo.png"
                },
                {
                    id:44,
                    museumname:"松山国家森林公园",
                    Location:"北京市延庆区松山国家森林公园",
                    cover:"../../static/logo.png"
                },
                {
                    id:55,
                    museumname:"十三陵水库",
                    Location:"北京市十三陵水库",
                    cover:"../../static/logo.png"
                },
                {
                    id:66,
                    museumname:"地坛",
                    Location:"北京市地坛",
                    cover:"../../static/logo.png"
                },
                {
                    id:77,
                    museumname:"蟒山国家森林公园",
                    Location:"北京市蟒山国家森林公园",
                    cover:"../../static/logo.png"
                },
                {
                    id:88,
                    museumname:"鸟巢",
                    Location:"北京市鸟巢",
                    cover:"../../static/logo.png"
                },
                {
                    id:99,
                    museumname:"水立方",
                    Location:"北京市水立方",
                    cover:"../../static/logo.png"
                }
            ]
        };
    },
    onLoad(event) {
        //不同平台event结构不一样，请用console.log()查看具体形式
        console.log("barName:",event);
        this.banner = JSON.parse(decodeURIComponent(event.details));
        console.log("barchinaName:",this.banner.city_name);
        //详情标题 接受的banner只有一个city_name从前页面传来
        uni.setNavigationBarTitle({
            title: this.banner.city_name
        });
        
        this.getlocations(this.banner.city_name);
        
    },
    /*onLoad(){
        
        this.get();
        
    },*/
    methods: {
        goDetail: function(e) {
            uni.navigateTo({
                url: '../message/message?museumid=' + e.museumid
            });
        },
        goDetail2: function(event) {
            console.log("godetail.e",event);
            let museumid1=this.chinaLocation[event.detail.markerId].museumid;
           
            uni.navigateTo({
                url: '../message/message?museumid=' + museumid1
            });
        },
        async getlocations(e){
            let i=0;
            // console.log(typeof(this.chinaLocation));
            // console.log("this.chinaLocation.length",this.chinaLocation.length);
            // console.log("this.bannercityname",e);
            // let res1=await uni.request({
            //     url:"http://47.93.50.106/api/citymuseum",
            //     data:{
            //         city:e,
            //     },
            // })
            // console.log("res1",res1);
            // this.chinaLocation=res1[1].data;
            // console.log("this.chinalocafterres1",this.chinaLocation);
            

             //将chinaLocation里的中文字符串地址转化为经纬度
            for (i = 0; i < this.chinaLocation.length; i++) {
                console.log(i);
                console.log(encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)));
                let res=await uni.request({
                  //腾讯采用gcj02坐标系，百度默认返回bd09坐标系，因此需要修改默认值
                    //url:"http://api.map.baidu.com/geocoding/v3/?address="+encodeURIComponent(JSON.stringify(this.chinaLocation[i].Location)).slice(3,-3)+"&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
                    url:"http://api.map.baidu.com/geocoding/v3/?address=" + "北京故宫博物馆" + "&output=json&ak=jCjli8kbCMiT6j1j9oPXaq3HYomad338&ret_coordtype=gcj02ll",
                })
                // console.log(res);
                // console.log(res[1].data.result.location.lat);
                // console.log("------------------------------------------");
                    //将得到的经纬度push进markers数组里
                let item=this.markers.push({
                    longitude:res[1].data.result.location.lng ,
                    latitude: res[1].data.result.location.lat,
                    iconPath: '../../static/icon/DW.png',
                    label: {
                        content:this.chinaLocation[i].museumname,
                    },
                    width: 20,
                    height: 30,
                    id:this.markers.length,//不知道为什么用i来赋值就全都是最终的长度 nmd
                //	name:this.chinaLocation[i].museumname,//问题就在这
                })
                
                let item2=this.includepoints.push({//push进includepoints中使得地图初始显示包含这些点
                    longitude:res[1].data.result.location.lng ,
                    latitude: res[1].data.result.location.lat,
                })
            }
        },
        TabSelect(e) {
            this.tabCur = e.currentTarget.dataset.markerId;
            this.mainCur = e.currentTarget.dataset.markerId;
            this.verticalNavTop = (e.currentTarget.dataset.markerId - 1) * 50
        },
        VerticalMain(e) {
            // #ifdef MP-ALIPAY
               return false  //支付宝小程序暂时不支持双向联动 
            // #endif
            let that = this;
            let tabHeight = 0;
            if (this.load) {
                for (let i = 0; i < this.markers.length; i++) {
                    let view = uni.createSelectorQuery().select("#main-" + this.markers[i].id);
                    view.fields({
                        size: true
                    }, data => {
                        this.markers[i].top = tabHeight;
                        tabHeight = tabHeight + data.height;
                        this.markers[i].bottom = tabHeight;
                    }).exec();
                }
                this.load = false
            }
            let scrollTop = e.detail.scrollTop + 10;
            for (let i = 0; i < this.markers.length; i++) {
                if (scrollTop > this.markers[i].top && scrollTop < this.markers[i].bottom) {
                    this.verticalNavTop = (this.markers[i].id - 1) * 50
                    this.tabCur = this.markers[i].id
                    console.log(scrollTop)
                    return false
                }
            }
        },
        
    }
    
}