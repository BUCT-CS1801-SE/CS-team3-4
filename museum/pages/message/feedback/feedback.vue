<template>
    <view class="page">
        <view class="feedback-body" >
            <textarea placeholder="请输入..." style="border-bottom:1px solid   #F1F1F3;" v-model="sendDate.content" class="feedback-textare" />
        </view>

        <view class='feedback-title'>
            <text>QQ/邮箱</text>
        </view>
        <view class="feedback-body">
            <input class="feedback-input" v-model="sendDate.contact" placeholder="(选填,方便我们联系你 )" />
        </view>
        <view class='feedback-title feedback-star-view'>
            <text>环境评分</text>
            <view class="feedback-star-view">
                <text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.score ? 'active' : ''" @tap="chooseStar1(value)"></text>
            </view>
        </view>
		<view class='feedback-title feedback-star-view'>
		    <text>展览评分</text>
		    <view class="feedback-star-view">
		        <text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.score2 ? 'active' : ''" @tap="chooseStar2(value)"></text>
		    </view>
		</view>
		<view class='feedback-title feedback-star-view'>
		    <text>服务评分</text>
		    <view class="feedback-star-view">
		        <text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.score3 ? 'active' : ''" @tap="chooseStar3(value)"></text>
		    </view>
		</view>
		<!-- 提交评论 -->
        <button type="default" class="feedback-submit" @tap="send">提交</button>

    </view>
</template>

<script src = './feedback.js'>
</script>

<style>
@import 'feedback.css';
</style>
