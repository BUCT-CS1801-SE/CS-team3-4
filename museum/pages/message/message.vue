<template>
	<view class="museum_yrn">
		<!-- 头部模块 -->
		<view class="musuemPicture_yrn">
			<!-- 背景图片 -->
			<view class="exhShow_yrn" :style="{backgroundImage: 'url(' + (array_yrn.image_yrn) + ')'}"></view>
			<view class="musuemTitle_yrn" v-for="item in museumInfo" :key="item.pk">
				<text class="title_yrn">{{item.fields.museumname}}</text>
				<p class="p_yrn">{{array_yrn.p_yrn}}</p>
			</view>
		</view>
		<!-- 导航 -->
		<view class="navigation_yrn">
		    <view class="navigation_ul_yrn">
		        <view class="navigation_li_yrn"><a href="#intro_yrn">简介</a></view>
		        <view class="navigation_li_yrn"><a href="#explain_qj">讲解</a></view>
		        <view class="navigation_li_yrn"><a href="#collection_qj">藏品</a></view>
		        <view class="navigation_li_yrn"><a href="#exhibition_qj">展览</a></view>
		    </view>
		</view>
		<!-- 简介 -->
		<view class="introduction_yrn" v-for="item in museumInfo" :key="item.pk">
			<h5 id="intro_yrn">简介</h5>
			<p :class="[showMoreMsg_qj.showJud_qj?'introductionshow_qj':'introductionhide_qj']">{{item.fields.introduction}}</p>
			<!-- 展开 收起部分 -->
			<view class="introCenter_qj">
				<view class="introCenterMsg_qj" @tap="showMore_qj()">{{showMoreMsg_qj.showTxt_qj}}<i :class="[showMoreMsg_qj.showJud_qj?'fa fa-angle-up':'fa fa-angle-down']"></i></view>
			</view>
		</view>
		
		<!-- 讲解模块 -->
		<view class="card_qj">
			<view id="explain_qj">
		        <h5>讲解</h5>
		    </view>
			<view class="guideIntro_qj">
				<view class="guideLeft_qj">
		            <!-- 静态请求图片 不能改为image-->
					<img src="/static/guide01.png" alt="讲解员">
		            <text>{{array_yrn.guideName_qj}}
					    <text class="guideLogo_qj">{{array_yrn.guideTag_qj}}</text>
					</text>
		        </view>
				<view class="guideRight_qj">
					<button class="unlock_qj" @tap="goExplain_yrn()">听讲解</button>
					<button class="unlock_yrn" @tap="goFeed_yrn()">评论</button>
				</view>
		    </view>
		</view>
		
		<!-- 讲解录制 -->
		<view class="recordExplain_qj">
			<i class="fa fa-microphone" aria-hidden="true" @tap="goRecord_yrn()"> 我也要为大家讲一段</i>
		</view>
		
		<!-- 后端渲染-藏品模块 -->
		<view class="card_qj" v-if="collectionList.length>0">
			<view id="collection_qj">
			    <h5>藏品展示</h5>
			</view>
			<view class="picContent_qj">
				<view class="picContent_ul_qj">
					<view class="picContent_li_qj" v-for="item in collectionList" :key="item.pk" @click="goCollectionInfo(item.pk)">
						<image :src="item.fields.collectionimage"><br>{{item.fields.collectionname}}</image>
					</view>
				</view>
			</view>
		</view>

		<!-- 后端渲染-展览模块 -->
		<view class="card_qj" v-if="exhibitionList.length>0">
			<view id="exhibition_qj">
			    <h5>相关展览</h5>
			</view>
			<view class="picContent_qj">
				<view class="picContent_ul_qj">
					<view class="picContent_li_qj" v-for="item in exhibitionList" :key="item.pk" @click="goExhibitionInfo(item.pk)">
						<image :src="item.fields.exhibition_picture"><br>{{item.fields.exhibitiontheme}}</image>
					</view>
				</view>
			</view>
		</view>
		<comments :comments="comments"></comments>
	</view>
</template>

<script src = './message.js'>
</script>

<style>
@import 'message.css';
</style>
