<template>
	<view class="content">
		<view class="hand">
			<view class="dataInfo">
				<view class="dataList" @click="navIndex = index" v-for="(item,index) in dataInfo" :key='item.titleId'>
					<text :class="navIndex==index?'activite':''">{{item.title}}</text>
				</view>
			</view>
		</view>
		<!-- 内容切换开始 -->
		<view class="main">
			<view class="htmlContent" v-if="navIndex==0">
				<view class="table-container">
					<!-- 表头 -->
					<view class="table-row table-header">
						<view class="table-cell">用户名</view>
						<view class="table-cell">积分</view>
					</view>
					<!-- 表数据 -->
					<view class="table-row" v-for="(user, index) in userData" :key="index">
						<view class="table-cell">{{ user.name }}</view>
						<view class="table-cell">{{ user.points }}</view>
					</view>
				</view>

			</view>
			<view class="jsContent" v-if="navIndex==1">
				<view class="item-list">
					<text>暂无数据</text>
				</view>
			</view>
			<view class="cssContent" v-if="navIndex==2">
				<view class="table-container">
					<text class="text5">积分兑换表:</text>
					<table class="table">

						<tr>
							<th>积分</th>
							<th>奖励</th>
							<th>兑换说明</th>
						</tr>
						<tr>
							<td>150</td>
							<td>代金券</td>
							<td>可兑换相同价位商品</td>
						</tr>
						<tr>
							<td>200</td>
							<td>代金券</td>
							<td>可兑换相同价位商品</td>
						</tr>
						<tr>
							<td>500</td>
							<td>小礼品</td>
							<td>兑换小礼品一份</td>
						</tr>
						<tr>
							<td>1000</td>
							<td>中礼品</td>
							<td>兑换中礼品一份，价值更高</td>
						</tr>
						<tr>
							<td>2000</td>
							<td>大礼品</td>
							<td>兑换大礼品一份，价值最高</td>
						</tr>
					</table>
					<text class="text7">本活动的最终解释权由武汉XXXX所有。</text>
				</view>
			</view>

		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userData: [],
				navIndex: 0,
				dataInfo: [{
						title: '热心市民',
						titleId: 1
					},
					{
						title: '街道排行',
						titleId: 2
					},
					{
						title: '积分兑换',
						titleId: 3
					}
				],

			}
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
			} else {
				this.fetchData();
			}
		},
		methods: {
			fetchData() {
				uni.request({
					url: 'http://localhost:4000/api/isp',
					method: 'GET',
					success: (res) => {
						if (res.data && res.data.success) {
							this.userData = res.data.data;
						} else {
							console.error('从服务器获取数据失败');
						}
					},
					fail: (err) => {
						console.error('网络请求失败', err);
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		padding: 20rpx;
	}

	.hand .dataInfo {
		display: flex;
		justify-content: space-between;
		text-align: center;
	}

	.hand .dataInfo .dataList {
		flex: 1;
		border-right: 1px solid #bcbcbc;
		border-top: 1px solid #bcbcbc;
	}

	.hand .dataInfo .dataList:first-child {
		border-left: 1px solid #bcbcbc;
	}

	.hand .dataInfo .dataList text {
		font-size: 30rpx;
		color: grey;
		background-color: #ffffff;
		display: block;
		line-height: 70rpx;
	}

	.hand .dataInfo .dataList text.activite {
		background-color: red;
		color: #fff;
	}

	.main {
		border: 1px solid #bcbcbc;
		height: 100%;
	}

	.main .htmlContent,
	.cssContent,
	.jsContent,
	.vueContent text {
		font-size: 40rpx;
		color: #0F254E;
		display: block;
		padding: 20rpx;
	}

	.table-container {
		display: flex;
		flex-direction: column;
	}

	.table-row {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border-bottom: 1px solid #eee;
	}

	.table-header {
		font-weight: bold;
		background-color: #ff0000;
	}

	.table-cell {
		flex: 1;
		text-align: center;
	}

	.container {
		padding: 20px;
	}

	.table {
		width: 100%;
		border-collapse: collapse;
	}

	.table th,
	.table td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	.table th {
		background-color: #f2f2f2;
	}

	.table-container {
		display: flex;
		justify-content: center;
		margin: 20px;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	.table th,
	.table td {
		border: 1px solid #ddd;
		padding: 8px;
	}

	.table th {
		background-color: #ff0000;
		color: white;
	}

	.table tr:nth-child(even) {
		background-color: #f2f2f2;

	}

	.text5 {
		line-height: 2;

	}

	.text7 {

		font-size: 12px;
		/* 较小的字体大小 */
		color: #969696;
		/* 接近白色的浅灰色 */

	}

	.item-list {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
		font-size: 30px;

		color: #969696;
	}
</style>
