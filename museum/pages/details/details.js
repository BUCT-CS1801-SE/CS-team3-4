export default {
    data() {
        return {}
    },
    onLoad(event) {
        console.log(event,'outdetail');
        this.banner = JSON.parse(decodeURIComponent(event.detailDate));
        //详情标题
        uni.setNavigationBarTitle({
            title: this.banner.title
        });
    },
    methods: {
    }
}