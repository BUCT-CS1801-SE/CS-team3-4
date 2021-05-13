<template>
	<view class="pageFill_yym">
		<uni-card title="我的讲解1"  extra="额外信息" note="Tips">
		    <uni-steps :options="[{title: '待审核'}, {title: '审核通过'}, {title: '已发布'}]" :active="0"></uni-steps>		    
		</uni-card>
		<uni-card title="我的讲解2"  extra="额外信息" note="Tips">
		    <uni-steps :options="[{title: '待审核'}, {title: '审核通过'}, {title: '已发布'}]" :active="1"></uni-steps>		    
		</uni-card>
		<uni-card title="我的讲解3"  extra="额外信息" note="Tips">
		    <uni-steps :options="[{title: '待审核'}, {title: '审核通过'}, {title: '已发布'}]" :active="2"></uni-steps>		    
		</uni-card>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	
	export default {
	    components: {uniCard},
		components: {uniSteps}
	}
	
</script>

<style>
	.pageFill_yym {
		width:100%;
		height: 100%;
		position: absolute;
	}
</style>
