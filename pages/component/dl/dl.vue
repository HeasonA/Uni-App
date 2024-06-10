<template>
	<view class="login-page">
		<view class="login-form">
			<input type="text" placeholder="用户名" v-model="username" />
			<input type="password" placeholder="密码" v-model="password" />
			<button @click="onLogin">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			onLogin() {
				if (!this.username) {
					uni.showToast({
						title: '用户名不能为空',
						icon: 'none'
					});
					return;
				} else if (!this.password) {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					})
				}
				uni.request({
					url: 'http://localhost:4000/api/data',
					method: 'POST',
					data: {
						username: this.username,
						password: this.password
					},
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						if (res.data.code === 0) {
							uni.showToast({
								title: '登录成功'
							});
							uni.setStorageSync('serverData', res.data.username);
							uni.setStorageSync('isLoggedIn', true);
							uni.switchTab({
								url: '/pages/tabBar/component/component'
							});
						} else {
							uni.showToast({
								title: '登录失败',
								icon: 'none'
							});
						}
					},

					fail: (err) => {
						console.log('登录请求失败', err);
						uni.showToast({
							title: '网络请求失败',
							icon: 'none'
						});
					}
				})
			}
		}
	}
</script>

<style>
	.login-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.login-form {
		width: 300px;
		padding: 20px;
		background-color: #ffffff;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.login-form input {
		width: 100%;
		padding: 10px;
		margin-bottom: 15px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.login-form button {
		width: 100%;
		padding: 10px;
		background-color: #007aff;
		color: white;
		border: none;
		border-radius: 5px;
	}
</style>
