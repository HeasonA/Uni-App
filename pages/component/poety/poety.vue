<template>
	<view class="consultation-page">
		<view class="page-header">
			<text class="title">事务咨询</text>
		</view>
		<view class="consultation-form">
			<input class="input-item" type="text" v-model="name" placeholder="姓名" />
			<input class="input-item" type="text" v-model="phone" placeholder="电话" />
			<textarea class="input-item" v-model="content" placeholder="咨询内容"></textarea>
			<button class="submit-btn" @click="submitConsultation">提交咨询</button>
			<uni-toast ref="toast"></uni-toast>
		</view>
		<view class="customer-service-info">
			<text class="info-title">客服信息</text><br>
			<text class="info-item">电话: 123-456-7890</text><br>
			<text class="info-item">邮箱: service@example.com</text>
			<button class="online-service-btn" @click="openOnlineService">在线咨询</button>
		</view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				isLoggedIn: false,
				name: '',
				phone: '',
				content: ''
			};
		},
		onLoad() {
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
								url: '/pages/tabBar/component/component',
							});
						}
					}
				});

			}
		},
		methods: {
			submitConsultation() {
				uni.showToast({
					title: '提交成功，感谢您的反馈',
				});
				this.name = '';
				this.phone = '';
				this.content = '';
				this.showSuccessToast();

			},
			openOnlineService() {
				uni.showToast({
					title: '当前访问人数过多，稍后再试',
					icon: 'none',
				});
				console.log('打开在线咨询');
			}
		}
	};
</script>

<style>
	.consultation-page {
		padding: 20px;
		background-color: #fff;
	}

	.page-header .title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.consultation-form {
		margin-bottom: 20px;
	}

	.input-item {
		width: 100%;
		padding: 10px;
		margin-bottom: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		outline: none;
	}

	.submit-btn {
		background-color: #007bff;
		color: white;
		padding: 10px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.submit-btn:hover {
		background-color: #0056b3;
	}

	.customer-service-info {
		border-top: 1px solid #eee;
		padding-top: 20px;
	}

	.info-title {
		font-size: 18px;
		font-weight: bold;
	}

	.info-item {
		margin-bottom: 10px;
	}

	.online-service-btn {
		background-color: #28a745;
		color: white;
		padding: 10px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.online-service-btn:hover {
		background-color: #1c7430;
	}
</style>
