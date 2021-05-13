export default {
    data() {
        return {	
            collectionInfo: [
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
            ppk: 0,
        }
    },
    methods: {
        // async getCollectionInfo() {
        //     const res = await this.$myRequest({
        //         // url: "/collectionInfo/4535/",
        //         url: "/collectionInfo/"+this.ppk+"/",
        //     })
        //     // console.log(res)
        //     this.collectionInfo = res.data.data.items
        // } 
    },
    onLoad(options) {
        // console.log(options)
        this.ppk = options.pk
        this.getCollectionInfo()
    }
}