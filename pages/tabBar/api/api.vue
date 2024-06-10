<template>
	<view class="">
		<view v-if="isLoggedIn">
			<view class="btn-gel">
				<image class="var2" style="width: 130rpx; height: 130rpx ;" src="../../../static/登录成功.png" />
				<view class="profile-container1">
					<view class="var1">
						Hi~欢迎回来
					</view><text class="">用户：{{username}}</text>
				</view>
			</view>
			<view class="lieb1">
				<view class="list-container">
					<view class="list-item" @click="jumpToPage">
						<image src="../../../static/城市服务.png" style="width: 20px; height: 20px;" mode=""></image>
						<text>服务</text>
					</view>
					<view class="list-item" @click="shanGbao">
						<image src="../../../static/我的上报.png" style="width: 20px; height: 20px;" mode=""></image>
						<text>我的上报</text>
					</view>
					<view class="list-item">
						<image src="../../../static/设置.png" style="width: 20px; height: 20px;" mode=""></image>
						<text>设置</text>
					</view>
					<view class="list-item" @click="seCede">
						<image src="../../../static/退出.png" style="width: 20px; height: 20px; " mode=""></image>
						<text>退出登录</text>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="btn-ge">
				<image class="var2" style="width: 130rpx; height: 130rpx; margin-top: 10px;"
					src="../../../static/我的2.png" mode="">
				</image>
				<view class="profile-container">
					<view class="var1">Hi~欢迎回来</view>
					<button class="login-lob" @click="goDetailpage('dl')">登录</button>
				</view>
			</view>
			<view class="lieb1">
				<view class="list-container">
					<view class="list-item" @click="denGlu">
						<image src="../../../static/城市服务.png" style="width: 20px; height: 20px;" mode=""></image>
						<text>服务</text>
					</view>
					<view class="list-item" @click="denGlu">
						<image src="../../../static/我的上报.png" style="width: 20px; height: 20px;" mode=""></image>
						<text>我的上报</text>
					</view>
					<view class="list-item">
						<image src="../../../static/设置.png" style="width: 20px; height: 20px;" mode=""></image>
						<text>设置</text>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				isLoggedIn: false,
				username: ''
			}
		},
		onLoad() {
			const username = uni.getStorageSync('serverData');
			this.username = username;
			if (uni.getStorageSync('isLoggedIn') === true) {
				this.isLoggedIn = true;

			} else {
				this.isLoggedIn = false;
			}
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
			async seCede() {
				console.log('在');
				const res = await uni.showModal({
					title: '提示',
					content: '是否退出',
					success: (res) => {
						if (res.confirm) {
							uni.clearStorageSync();
							setTimeout(() => {
								uni.reLaunch({
									url: '/pages/tabBar/component/component',
								});
							}, 1000);
							uni.showToast({
								title: '退出成功'
							});
						} else if (res.cancel) {
							console.log('用户点击了取消');
						}
					}
				});
			},
			denGlu() {
				if (uni.getStorageSync('isLoggedIn') != true) {
					uni.showModal({
						title: '提示',
						content: '请先登录',
						success: function(res) {
							if (res.confirm) {
								uni.switchTab({
									url: '',
								});
							} else if (res.cancel) {
								uni.switchTab({
									url: '',
								});
							}
						}
					});
				} else {
					this.fetchData();
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

			shanGbao() {
				uni.showToast({
					title: '暂无上报数据',
					icon: 'none',
					duration: 2000
				});
			}
		}
	}
</script>

<style>
	.profile-container {
		float: left;
		margin: 15px;
	}

	.profile-container1 {
		float: left;
		margin: 15px;
	}

	.btn-gel {
		background-image: url('../../../static/背景图.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 300rpx;
		width: 100%;
	}

	.btn-ge {
		background-image: url('../../../static/背景图.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 300rpx;
		width: 100%;
	}

	.var1 {
		margin-bottom: 10px;

	}

	.var2 {
		float: left;
		margin-top: 15px;
		margin-left: 20px;
	}

	.login-lob {
		width: 100px;
		height: 40px;
		color: #ffffff;
		line-height: 40px;
		text-align: center;
		background-color: #ff0000;
		border-radius: 20px;
		border: none;
		font-size: 16px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.list-container {
		padding: 10px;
	}

	.list-item {
		background-color: #ffffff;
		margin-bottom: 8px;
		padding: 10px;
		border-radius: 4px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

	}

	.list-item text {
		font-size: 16px;
		text-align: center;
		margin-left: 10px;
		color: #333;
	}
</style>
