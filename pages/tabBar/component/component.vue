<template>
	<view class="page">
		<view class="swiper-container">
			<swiper class="swiper" autoplay="true" indicator-dots="true" indicator-color="white" interval="5000"
				duration="2500" circular="true">
				<swiper-item>
					<image src="../../../static/轮播图7.jpg" class="swiper-image"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../../static/轮播图8.jpg" class="swiper-image"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../../static/轮播图9.jpg" class="swiper-image"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="marquee-container">
			<text class="marquee-text">暂时未有公告，请持续关注。</text>
		</view>
		<view class="forre">
			<view class="text-stu1" @click="jumpToPage">
				<image src="../../../static/需求管理.png" class="sclg-sw"></image>
				<text class="texe1">查询服务</text>
			</view>
			<view class="text-stu2" @click="jumpToPages">
				<image src="../../../static/电话服务.png" class="sclg-sw"></image>
				<text class="texe1">市民热线</text>
			</view>
		</view>
		<view class="">
			<scroll-view scroll-y="true" style="height: 100%;">
				<view class="f1">
					<view class="scroll-item" @click="goDetailpage('view')"><text class="custom-font">城市地图</text></view>
					<view class="scroll-item-1" @click="goDetailpage('lianjie')"><text class="custom-font">新闻热点</text>
					</view>
				</view>
				<view class="f1">
					<view class="scroll-item-2" @click="goDetailpage('poety')"><text class="custom-font">城市事务咨询</text>
					</view>
					<view class="scroll-item-3" @click="goDetailpage('reward')">
						<image src="../../../static/积分配置.png" class="sclg-sw"></image>
						<text class="texe1">积分获取</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			goDetailpage(e) {
				if (typeof e === 'string') {
					uni.navigateTo({
						url: `/pages/component/${e}/${e}`
					});
				} else if (typeof e === 'object' && e.url) {

					uni.navigateTo({
						url: e.url
					});
				} else {
					console.error('Invalid parameter type for navigation.');
				}
			},
			async jumpToPage() {
				const confirm = await uni.showLoading({
					title: '正在加载，请稍后',
					mask: true,
				});
				setTimeout(() => {
					uni.hideLoading();
				}, 2000);
			},

			async jumpToPages() {
				const res = await uni.showModal({
					title: '提示',
					content: '是否允许拨打电话',
					success: (res) => {
						if (res.confirm) {
							uni.navigateTo({
								url: ''
							});
						} else if (res.cancel) {
							console.log('用户点击了取消');
						}
					}
				});
			},

		}
	}
</script>

<style>
	.swiper-container {
		width: 100%;
		height: auto;
	}

	.swiper-image {
		width: 100%;
		display: block;
	}

	.scroll-item {

		position: relative;
		border-radius: 10px;
		background-image: url('../../../static/地图.png');
		background-size: cover;
		background-repeat: no-repeat;
		display: inline-block;
		width: 50px;
		height: 50px;
		padding: 50px;
		margin: 15px;
		background-color: #5500ff;
		text-align: center;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);

	}

	.scroll-item-1 {
		position: relative;
		border-radius: 10px;
		background-image: url('../../../static/校园.png');
		background-size: cover;
		background-repeat: no-repeat;
		display: inline-block;
		width: 50px;
		height: 50px;
		padding: 50px;
		margin: 15px;
		background-color: #55aaff;
		text-align: center;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
	}

	.scroll-item-2 {
		position: relative;
		border-radius: 10px;
		background-image: url('../../../static/客服办公.png');
		background-size: cover;
		background-repeat: no-repeat;
		display: inline-block;
		width: 50px;
		height: 50px;
		padding: 50px;
		margin: 20px;
		background-color: #5555ff;
		text-align: center;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
	}


	.custom-font {
		position: absolute;
		right: 65rpx;
		top: 10px;
		font-size: 17px;
		font-weight: bold;
		color: #ffffff;
	}


	.text-stu1 {
		flex: 1;
		width: 150px;
		height: 50px;
		background-image: linear-gradient(45deg, #335c8d, #a8c0ff);
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
		margin: 15px;
		border-radius: 10px;
	}

	.text-stu2 {
		flex: 1;
		width: 150px;
		height: 50px;
		background-image: linear-gradient(45deg, #ff7e5f, #feb47b);
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
		margin: 15px;
		border-radius: 10px;

	}

	.scroll-item-3 {
		width: 150px;
		height: 50px;
		background-image: linear-gradient(45deg, #ff0000, #ffa500);
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
		margin-top: 20px;
		margin-right: 20px;
		border-radius: 10px;

	}

	.texe1 {
		position: absolute;
		margin-top: 15px;
		margin-left: 10px;
		font-size: 16px;
		color: #ffffff;

	}

	.f1 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		align-items: flex-start;
	}

	.forre {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.sclg-sw {
		margin-left: 20px;
		margin-top: 10px;
		width: 35px;
		height: 35px;
	}

	.marquee-container {
		overflow: hidden;
		position: relative;
		white-space: nowrap;
		border: 1px solid #ddd;
		width: 100%;
	}

	.marquee-text {
		display: inline-block;
		padding: 10px;
		font-size: 16px;
		white-space: nowrap;
		animation: marquee 10s linear infinite;
	}

	@keyframes marquee {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(-100%);
		}
	}
</style>
