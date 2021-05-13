export default {
    data() {
        return {
            hotcity_listdata:[
                {
                    img:"../../static/icon/BeiJing.jpg",
                    city_name:"北京"
                },
                {
                    img:"../../static//icon/ShangHai.jpg",
                    city_name:"上海"
                },
                {
                    img:"../../static//icon/GuangZhou.jpg",
                    city_name:"广州"
                },
                {
                    img:"../../static/icon/NanJing.jpg",
                    city_name:"南京"
                }
            ],
            listdata:[
                {
                    img:"../../static/icon/BeiJing.jpg",
                    city_name:"北京"
                },
                {
                    img:"../../static//icon/ShangHai.jpg",
                    city_name:"上海"
                },
                {
                    img:"../../static//icon/GuangZhou.jpg",
                    city_name:"广州"
                },
                {
                    img:"../../static/icon/NanJing.jpg",
                    city_name:"南京"
                }
            ],
            scrollTop: 0,
            old: {
                scrollTop: 0,
            }
        };
    },
        
/*	onLoad() {

    },
    
    },*/
    methods: {
        goDetail: function(e) {
            let detail = {
               // img:e.img,
                city_name:e.city_name
            };
            uni.navigateTo({
                url: '../map-list/map-list?details=' + encodeURIComponent(JSON.stringify(detail))
                // url: '../map-list/map-list?details=北京'
            });
        },
        callus(){
            uni.switchTab({
                url:'/pages/mine/mine'
            })
        },
          
        scroll: function(e) {
            console.log(e)
            this.old.scrollTop = e.detail.scrollTop
        },
        onNavigationBarButtonTap(e) {
            uni.navigateTo({
                url: "./cityselect/cityselect"
            });     
        },
    }
}