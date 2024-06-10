<template>
	<view>
		<view class="news-header">
			<text class="news-title">新闻头条</text>
		</view>
		<view class="news-list">
			<view v-for="item in newsList" :key="item.id" class="news-item">
				<text class="news-title">{{ item.title }}</text>
				<text class="news-subtitle">{{ item.author_name }}</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {

				newsList: []
			};
		},
		onLoad() {
			this.fetchNews();
		},
		methods: {
			fetchNews() {
				const url = 'http://v.juhe.cn/toutiao/index?type=头条&key=3f91bd073d07db4fab60fb6926e54e6d';
				uni.request({
					url: url,
					method: 'GET',
					success: (res) => {
						if (res.statusCode === 200) {
							if (res.data.error_code === 0) {
								this.newsList = res.data.result.data;
							} else {
								console.error('请求失败：', res.data.reason);
							}
						} else {
							console.error('请求失败，状态码：', res.statusCode);
						}
					},
					fail: (err) => {
						console.error('请求失败：', err);
					}
				});
			}
		}
	};
</script>

<style>
	/* 基础样式 */
	page {
		font-family: 'Arial', sans-serif;
		background-color: #f4f4f4;
		color: #333;
	}

	/* 新闻标题区域样式 */
	.news-header {
		background-color: #ff5500;

		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	}

	.news-title {
		font-size: 24px;
		font-weight: bold;
		color: #333;
	}

	.news-list {
		margin-top: 10px;
	}

	/* 单个新闻项样式 */
	.news-item {
		background-color: #ffffff;
		margin-bottom: 10px;
		padding: 15px;
		border-bottom: 1px solid #eaeaea;
		cursor: pointer;
		/* 当鼠标悬停时显示手指图标 */
	}

	/* 新闻标题样式 */
	.news-title {
		font-size: 18px;
		color: #333;
		margin-bottom: 5px;
	}

	/* 新闻副标题样式 */
	.news-subtitle {
		float: right;
		font-size: 14px;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		/* 控制文本行数 */
		-webkit-box-orient: vertical;
	}

	/* 新闻项点击时的样式 */
	.news-item:active {
		background-color: #f9f9f9;
	}
</style>
