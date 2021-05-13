<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="">
                {{title}}
            </view>
            <!-- 评论区 start -->
            <view class="uni-comment">
                <!-- <view class="uni-comment-list" v-for="(item,idx) in comments" :key="idx">
                    <view class="uni-comment-face">
                        <image src="../../static/logo.png" mode="widthFix"></image>
                    </view>
                    <view class="uni-comment-body">
                        <view class="uni-comment-top">
                            <text>用户{{item.fields.userid}}</text>
                        </view>
                        <view class="uni-comment-content">{{item.fields.comment}}</view>
                        <view class="uni-comment-date">
                            <view>{{item.fields.commentdate}}</view>
                            
                        </view>
                    
                    </view>
                </view> -->
                <view class="uni-comment-list" v-for="(item,idx) in comments" :key="idx">
                    <view class="uni-comment-face">
                        <image src="../../static/logo.png" mode="widthFix"></image>
                    </view>
                    <view class="uni-comment-body">
                        <view class="uni-comment-top">
                            <text>用户:{{item.name}}</text>
                        </view>
                        <view class="uni-comment-content">{{item.content}}</view>
                        <view class="uni-comment-date">
                            <view>{{item.time}}</view>
                            
                        </view>
                    
                    </view>
                </view>
            </view>
            <!-- 评论区 end -->
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            comments: {
                type: Array,
                default: function() {
                    return [{
                        // src: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
                        // name: '小明',
                        // content: '抢个沙发',
                        // time: '12/5 11:23',
                        // reply: []
                    }]
                }
            }
        },
        data() {
            return {
                title: "评论",
                index: 0
            }
        },
        methods: {
            tapReply(e, idx) {
                if (this.index != idx) {
                    this.index = idx
                    // console.log(e)
                }else{
                    this.index=null
                }
            }
        }
    }
</script>

<style>
    .uni-comment-list {

        background:rgba(0,0,0,0.1);
        padding:0 10upx;
    }

    .uni-comment-body {
        background: rgb(240, 240, 240);
        padding: 0 10upx;
    }

    .uni-comment-face {
        background: #FFFFFF;
    }

    .uni-comment-content {
        background: #EEEEEE;
        padding:0 10upx;
    }
</style>
