<template>
	<view class="">
		<view class="container">
			<view class="photo-button" @click="paiZao">
				<image src="/static/上传拍照.png" style="width: 145px; height: 145px;" mode=""></image>
			</view>
		</view>
		<view class="forre">
			<view class="text-stu1" @click="paiZao">
				<image src="../../../static/查看照片.png" class="sclg-sw"></image>
				<text class="texe1">照片查看</text>
			</view>
			<view class="text-stu2" @click="xiangcHqu">
				<image src="../../../static/打开相册.png" class="sclg-sw"></image>
				<text class="texe1">相册获取</text>
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		data() {
			return {

			};
		},

		methods: {
			xiangcHqu() {
				if (uni.getStorageSync('isLoggedIn') != true) {
					uni.showModal({
						title: '提示',
						content: '请先登录',
						success: function(res) {
							if (res.confirm) {
								uni.switchTab({
									url: '/pages/tabBar/api/api',
								});
							} else if (res.cancel) {
								uni.switchTab({
									url: '/pages/tabBar/shangbao/shangbao',
								});
							}
						}
					});
				} else {
					uni.showModal({
						title: '提示',
						content: '是否允许打开相册',
						success: (res) => {
							if (res.confirm) {
								uni.showLoading({
									title: '正在加载，请稍后',
									mask: true,
								});
								setTimeout(() => {
									uni.hideLoading();
								}, 2000);
							} else if (res.cancel) {
								console.log('用户点击了取消');
							}
						}
					});
				}
			},

			paiZao() {
				if (uni.getStorageSync('isLoggedIn') != true) {
					uni.showModal({
						title: '提示',
						content: '请先登录',
						success: function(res) {
							if (res.confirm) {
								uni.switchTab({
									url: '/pages/tabBar/api/api',
								});
							} else if (res.cancel) {
								uni.switchTab({
									url: '/pages/tabBar/shangbao/shangbao',
								});
							}
						}
					});
				} else {
					uni.showLoading({
						title: '正在加载，请稍后',
						mask: true,
					});
					setTimeout(() => {
						uni.hideLoading();
					}, 2000);
				}
			}

		}
	};
</script>

<style>
	.photo-button {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: #39f;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 24px;
		cursor: pointer;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50vh;

	}

	.forre {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text-stu1 {
		flex: 1;
		width: 150px;
		height: 50px;
		background-image: linear-gradient(45deg, #a8c0ff, #335c8d);
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

	.sclg-sw {
		margin-left: 20px;
		margin-top: 10px;
		width: 35px;
		height: 35px;
	}

	.texe1 {
		position: absolute;
		margin-top: 15px;
		margin-left: 10px;
		font-size: 16px;
		color: #ffffff;

	}
</style>
