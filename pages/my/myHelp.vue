<template>
	<view>
		<uni-collapse>
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item :title="item.title" :show-animation="true" :contentdata="item.content"></uni-collapse-item>
			</block>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components:{
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list:[
					{
						title:"如何找到博物馆？",
						content:"目的地页面选择城市"
					},
					{
						title:"怎样录制讲解?",
						content:"找到博物馆，在讲解栏下方进入我要为大家讲一段"
					},
					{
						title:"怎样评论讲解？",
						content:"找到博物馆，在讲解栏右上方进入评论"
					},
					{
						title:"怎样修改个人信息？",
						content:"我的页面，进入个人中心修改信息"
					},
				]
			}
		},
		methods: {
			openFeedback(){
				uni.navigateTo({
					url: '/pages/user-feedback/user-feedback',
				});
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
</style>
