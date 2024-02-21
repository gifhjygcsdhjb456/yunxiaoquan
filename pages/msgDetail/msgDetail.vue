<template>
	<view class="box">
		<view class="date">{{ dataObj.sendDate }}</view>
		<view class="content">
			{{ dataObj.content }}
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dataObj: {}
		};
	},
	onLoad(e) {
		let obj = decodeURIComponent(e.data);
		this.dataObj = JSON.parse(obj);
		uni.setNavigationBarTitle({
			title: this.dataObj.telphone
		});
	}
};
</script>

<style lang="scss">
.box {
	padding: 40rpx 30rpx;
	margin: 10rpx auto;
	.date {
		font-size: 30rpx;
		color: #a2a2a2;
		text-align: center;
	}
	.content {
		height: 100%;
		padding: 30rpx;
		width: 80%;
		margin: 25rpx auto;
		background-color: #eee;
		font-size: 35rpx;
		line-height: 1.8rem;
		text-align: justify;
		border-radius: 10rpx;
	}
}
</style>
