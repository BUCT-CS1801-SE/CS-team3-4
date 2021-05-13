import Audio from '../../components/luch-audio/luch-audio.vue'
import comments from '../../components/comments/comments.vue'

export default {
    data() {
        return {
            array_yrn: {
                mode:'widthFix',
                image_yrn: 'https://www.dpm.org.cn/Uploads/Picture/2020/04/29/s5ea9744238b72.jpg',
                title_yrn: "博物馆",
                p_yrn: "",
                // explainTitle1_qj: "故宫博物馆讲解",
                // ppp_yrn: "暂无简介",
                guideName_qj: "  导游",
                guideTag_qj: "官方讲解"
            },
            current: {
                poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
                name: '博物馆讲解',
                author: '云锦',
                src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3'
            },
            picList_qj: {
                colName1: "一号坑",
                colName2: "车马俑",
                colName3: "立射俑",
                colName4: "跪射俑",
                exhName1: "展览一",
                exhName2: "展览二",
                exhName3: "展览三",
                exhName4: "展览四"
            },
            showMoreMsg_qj: {
                showJud_qj: false,
                showTxt_qj: "更多信息"
            },
            museumInfo: [],
            exhibitionList: [],
            collectionList: [],
            museumID: 7,
            comments: [{
                src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                name: '小明',
                content: '抢个沙发111',
                time: '12/5 11:23',
                reply: null
            }, {
                src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                name: '小刚',
                content: '还是你快呀',
                time: '12/5 11:23',
                reply: [{
                    src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                    name: '小明',
                    content: '再抢个沙发',
                    time: '12/5 11:23',
                    reply: []
                }, {
                    src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                    name: '小刚',
                    content: '还是你快呀',
                    time: '12/5 11:23',
                    reply: []
                }]
            }, {
                src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                name: '小溜溜',
                content: '晚了一步。被你们抢先了',
                time: '12/5 11:23',
                reply: [{
                    src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                    name: '小明',
                    content: '抢个小沙发',
                    time: '12/5 11:23',
                    reply: []
                }, {
                    src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                    name: '小刚',
                    content: '还是你快呀，又没抢到',
                    time: '12/5 11:23',
                    reply: []
                }]
            }],
            // commentts:[],
        }
    },
    components: {
        Audio,
        comments
    },
    methods: {
        showMore_qj: function() {
            this.showMoreMsg_qj.showJud_qj= !this.showMoreMsg_qj.showJud_qj
            this.showMoreMsg_qj.showTxt_qj= "继续阅读"
        },
        goDetail_qj: function() {
            uni.navigateTo({
                url: '../exhibition/exhibition'
            });
        },
        goDetail_yrn: function() {
            uni.navigateTo({
                url: '../collection/collection'
            });
        },
        goFeed_yrn: function() {
            uni.navigateTo({
                url:'/pages/message/feedback/feedback?museumid='+this.museumID,
            });
        },
        goExplain_yrn: function(){
            uni.navigateTo({
                url:'../explain/explain'
            });
        },
        goRecord_yrn:function(){
            uni.navigateTo({
                url:'../record/record'
            });
        },
        //获取博物馆信息
        async getMuseumInfo() {
            const res = await this.$myRequest({
                url: '/museumtest/' + this.museumID + '/'
            })
            // console.log(res)
            this.museumInfo = res.data.data.items
        },
        //获取展览信息
        async getExhibitionList() {
            const res = await this.$myRequest({
                url: '/exhibitiontest/' + this.museumID + '/'
            })
            console.log(res)
            this.exhibitionList = res.data.data.items
        },
        //获取藏品信息
        async getCollectionList() {
            const res = await this.$myRequest({
                url: '/collectiontest/' + this.museumID + '/'
            })
            // console.log(res)
            this.collectionList = res.data.data.items
        },
        //跳转到藏品页
        goCollectionInfo(pk) {
            uni.navigateTo({
                url: '../collection/collection?pk='+pk
            })
            // console.log(pk)
        },
        //跳转到展览页
        goExhibitionInfo(pk) {
            uni.navigateTo({
                url: '../exhibition/exhibition?pk='+pk
            })
            console.log(pk)
        },
        async getcomment() {
            console.log("this.museumID",this.museumID);
            // const res = await uni.request({
            //     url: "http://47.93.50.106/commentget",
            //     data:{
            //         museumid:this.museumID,
            //     }
            // })
			const res = {
                data: {
                    museumid: this.museumID,
                    content: "hello",
                    items: {
                        src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                        name: '小明',
                        content: '抢个沙发111',
                        time: '12/5 11:23',
                        reply: null
                    }
                }
            }
            console.log("comment:",res);
            // this.commentts = res[1].data.data.items;
                
            console.log("commentlist:",this.comments);
        },
        
        
    },
    onLoad(options) {
        if(options.museumid)
            this.museumID = options.museumid;
        this.getMuseumInfo();
        this.getExhibitionList();
        this.getCollectionList();
        this.getcomment();
    }
}