<template>
	<view class="box">
		<!-- <u-skeleton :loading="!listArr.length" avatar rows="3" rowsWidth="80%"></u-skeleton> -->
		<view v-if="nodata">
			<u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png"></u-empty>
		</view>

		<view v-else class="content">
			<view @click="goDetail(item._id)" class="item" v-for="item in listArr" :key="item._id">
				<view class="text">
					<view class="title">{{ item.title }}</view>
					<view class="info">
						<text>{{ item.author }}</text>
						<text>
							<uni-dateformat :date="item.posttime" :threshold="[60000, 3600000]" format="MM-dd"></uni-dateformat>
						</text>
					</view>
				</view>

				<view class="pic">
					<image v-if="item.picurls && item.picurls.length" mode="aspectFill" :src="item.picurls[0]"></image>
					<image v-else mode="aspectFill" src="../../static/images/nopic.jpg"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			listArr: [],
			nodata: false
		};
	},
	onLoad() {
		this.getData();
	},
	onShow() {
		this.getData();
	},
	//下拉刷新
	onPullDownRefresh() {
		this.listArr = [];
		this.getData();
	},
	methods: {
		getData() {
			uni.showLoading({
				title: '加载中'
			});
			uniCloud
				.callFunction({
					name: 'art_get_all',
					data: {
						skip: 0
					}
				})
				.then((res) => {
					this.listArr = res.result.data;
				})
				.finally(() => {
					if (!this.listArr.length) {
						this.nodata = true;
					}
					uni.hideLoading();
					uni.stopPullDownRefresh();
				});
		},
		goDetail(id) {
			uni.navigateTo({
				url: `/pages/articleDetail/articleDetail?id=${id}`
			});
		}
	}
};
</script>

<style lang="scss">
.box {
	.content {
		padding: 30rpx;
		.item {
			display: flex;
			justify-content: space-between;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #eee;
			.text {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-right: 20rpx;
				.title {
					font-size: 35rpx;
					color: #333;
					text-align: justify;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.info {
					font-size: 28rpx;
					color: #888;
					text {
						padding-right: 20rpx;
					}
				}
			}
			.pic {
				width: 260rpx;
				height: 180rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.add {
		width: 150rpx;
		height: 150rpx;
		border-radius: 75rpx;
		background-color: #2b9939;
		position: absolute;
		bottom: 100rpx;
		right: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
