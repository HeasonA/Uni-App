<template>
	<view class="bat">
		<view class="search-container">
			<input class="shurk" type="text" v-model="searchKeyword" placeholder="输入搜索关键词" />
			<button class="annu" @click="searchPlace">搜索</button>
		</view>
		<view class="ditucss">
			<map class="ditucss2" :latitude="mapLatitude" :longitude="mapLongitude" :markers="markes"></map>
		</view>
		<view class="text">
			<text class="text-rew1">{{address }}</text><br />
			<text class="text-rew2">{{name }}</text>
		</view>
	</view>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				mapLatitude: 30.402468,
				mapLongitude: 114.436785,
				adcode: '420115',
				location: "",
				aMapKey: '87b6f2e72fa8bd853b782f74a11cd48b',
				address: '',
				name: '',
				pois: [],
				markes: [{
					latitude: 30.402468,
					longitude: 114.436785,
					iconPath: '../../../static/标记点.png',
				}]
			}
		},
		methods: {
			searchPlace() {
				const url = `https://restapi.amap.com/v3/place/text?` +
					`keywords=${encodeURIComponent(this.searchKeyword)}&` +
					`adcode=${this.adcode}&` +
					`key=${this.aMapKey}`;
				uni.request({
					url: url,
					method: 'GET',
					success: (res) => {
						if (res.statusCode === 200) {
							const data = res.data;
							// console.log(res.data);
							// console.log(data.pois[0].location);
							if (data.status === '1' && data.pois) {
								this.pois = data.pois;
								this.name = data.pois[0].name;
								this.address = data.pois[0].address;
								this.location = data.pois[0].location;
								const [long, lat] = this.location.split(',');
								// this.markes.latitude = parseFloat(lat);
								// this.markes.location = parseFloat(long);
								this.mapLongitude = parseFloat(long);
								this.mapLatitude = parseFloat(lat);

							} else {
								console.error('搜索结果错误:', data.info);
							}
						} else {
							console.error('请求失败，状态码:', res.statusCode);
						}

					},
					fail: (error) => {
						console.error('搜索失败:', error);
					}
				});
			},
			mounted() {
				this.searchPlace(); // 组件挂载后执行搜索
			}
		}
	};
</script>


<style>
	.bat {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding: 20px;
		background-color: #ffffff;
		width: 100%;
		box-sizing: border-box;
	}

	.search-container {
		position: relative;

		width: 100%;
		max-width: 600px;

		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}


	.shurk {
		flex-grow: 1;
		padding: 10px;
		font-size: 16px;
		border: 2px solid #cccccc;
		border-radius: 24px;
		margin-right: 10px;
	}

	.annu {
		padding: 5px 20px;
		font-size: 16px;
		color: #ffffff;
		background-color: #007bff;
		border: none;
		border-radius: 24px;
		cursor: pointer;
	}

	.annu:hover {
		background-color: #0056b3;
	}

	.ditucss {
		width: 100%;
		max-width: 600px;
		height: 250px;
		margin-bottom: 20px;
	}

	.ditucss2 {
		width: 100%;
		height: 100%;
	}

	.text {
		text-align: center;
		width: 100%;
		max-width: 600px;
	}

	.text-rew1 {
		font-size: 18px;
		color: #333333;
		margin-bottom: 10px;
	}

	.text-rew2 {
		font-size: 20px;
		color: #007bff;
		font-weight: bold;
	}
</style>
