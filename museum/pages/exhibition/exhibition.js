export default {
    data() {
        return {				
            exhibitionInfo: [
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
            pk: 0,
        }			
    },
    methods: {
        // async getExhibitionInfo() {
        //     const res = await this.$myRequest({
        //         // url: "/collectionInfo/4535/",
        //         url: "/exhibitionInfo/"+this.pk+"/",
        //     })
        //     console.log(res)
        //     this.exhibitionInfo = res.data.data.items
        // } 
    },
    onLoad(options) {
        console.log(options)
        this.pk = options.pk
        this.getExhibitionInfo()
    }
}