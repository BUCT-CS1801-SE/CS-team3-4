import choose from "../../../components/image/choose.vue"
import compress from "../../../components/image/compress.vue"

export default {
    name:'newsPublish',
    components:{
        choose,
        compress
    },
    data() {
        return {
            isYasuo:true,
            count:6,
            maxwh:280,
            quality:1, 
            
            msgContents: ["界面显示错乱", "启动缓慢，卡出翔了", "UI无法直视，丑哭了", "偶发性崩溃"],
            stars: [1, 2, 3, 4, 5],
            imgList: [],
            sendDate: {
                score: 0,
                score2: 0,
                score3: 0,
                content: "",
                contact: "",
                museumid:0,
            }
        }
    },
    onLoad(events) {
        this.sendDate.museumid=events.museumid;
        console.log("this.sendDate.museumid",this.sendDate.museumid);
    },
    methods: {
    
        fileChange(e){
            this.imgList=e;
            
        },
        chooseStar1(e) { //点击评星
            this.sendDate.score = e;
        },
        chooseStar2(e) { //点击评星
            this.sendDate.score2 = e;
        },
        chooseStar3(e) { //点击评星
            this.sendDate.score3 = e;
        },
        
        send() { //发送提交
                console.log(this.sendDate);
            uni.request({
                url:"http://47.93.50.106/commentadd",
                data:{
                    userid:10,
                    museumid:this.sendDate.museumid,  
                    commentdate: new Date().toISOString().slice(0, 10), 
                    sentianalysis_environment:this.sendDate.score , 
                    sentianalysis_exhibit:this.sendDate.score2, 
                    sentianalysis_service:this.sendDate.score3,
                    // city:"湖南
                    status:1,
                    comment:this.sendDate.content,
                    },
                
                success:res=>{
                console.log("chenggonghuoqu",res);
                // })
                }
            })
            
        }
    }
}