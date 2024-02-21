<template>
	<view class="detail">
		<view v-if="loadState">
			<view class="title">{{ detail.title }}</view>
			<view class="info">
				<text>{{ detail.author }}</text>
				<text>
					<uni-dateformat :date="detail.posttime" format="yyyy年MM月dd日 hh:mm:ss"></uni-dateformat>
				</text>
			</view>
			<view class="content">
				<u-parse :content="detail.content" :tagStyle="tagStyle"></u-parse>
			</view>
		</view>

		<view v-else>
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>

<script>
let id;
export default {
	data() {
		return {
			detail: {},
			loadState: false,
			tagStyle: {
				p: 'line-height:1.7em;font-size:16px;padding-bottom:10rpx',
				img: 'margin:10rpx 0'
			}
		};
	},
	onLoad(e) {
		id = e.id;
	},
	onShow() {
		this.getDetail();
	},
	methods: {
		getDetail() {
			uniCloud
				.callFunction({
					name: 'art_get_row',
					data: {
						id
					}
				})
				.then((res) => {
					this.detail = res.result.data[0];
					this.loadState = true;
					uni.setNavigationBarTitle({
						title: this.detail.title
					});
				})
				.catch(() => {
					uni.showToast({
						icon: 'error',
						title: '数据有误'
					});
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/articles/articles'
						});
					}, 800);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.detail {
	padding: 30rpx;
	.title {
		font-size: 50rpx;
		color: #000;
		text-align: justify;
		line-height: 1.4em;
	}
	.info {
		font-size: 30rpx;
		color: #666;
		padding: 30rpx 0 60rpx;
		text {
			padding-right: 30rpx;
		}
	}
	.content {
		font-size: 36rpx;
		line-height: 1.7em;
	}
	.picurls {
		padding-top: 50rpx;
		image {
			width: 100%;
			display: block;
			margin-bottom: 30rpx;
		}
	}
	.btnGroup {
		padding: 50rpx 0;
		button {
			margin-right: 30rpx;
		}
	}
}
</style>
