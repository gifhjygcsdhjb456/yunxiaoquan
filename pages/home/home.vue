<template>
	<view class="box">
		<view class="top">
			<view class="logo">防诈宝</view>
			<view class="swiper">
				<u-swiper :list="list3" interval="8000" imgMode="scaleToFill" height="400rpx" indicator indicatorMode="line" circular></u-swiper>
			</view>
		</view>
		<view class="xia">
			<view class="bottom">
				<view class="item" @click="goInterceptSetting">
					<view class="iconfont icon-jichulanjieshezhi"></view>
					<text>拦截设置</text>
				</view>
				<view class="item" @click="goInterceptLog">
					<view class="iconfont icon-guankongjilu"></view>
					<text>拦截记录</text>
				</view>

				<view class="item" @click="goTipOff">
					<view class="iconfont icon-jubao-"></view>
					<text>投诉举报</text>
				</view>

				<view class="item" @click="goBlackList">
					<view class="iconfont icon-kttx"></view>
					<text>黑名单</text>
				</view>

				<view class="item" @click="goWhiteList">
					<view class="iconfont icon-baimingdan"></view>
					<text>白名单</text>
				</view>
				<view class="item" @click="goFeedback">
					<view class="iconfont icon-fankuiyijianfankui-xianxing"></view>
					<text>意见反馈</text>
				</view>
			</view>
			<view class="safe" @click="toArticleList">
				<view class="left">
					<view class="title">
						<view class="icon">
							<u-icon name="search" size="28" color="#00A6E8"></u-icon>
						</view>
						<view class="text">安全专区</view>
					</view>
					<view class="pic">
						<image src="/static/images/face.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="right">
					<view class="title">诈骗无处遁形，安全从心开始</view>
					<view class="info">管好你的钱、管好你的卡、管好你的验证码！</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import permision from '@/js_sdk/wa-permission/permission.js';
import { store, mutations } from '@/uni_modules/uni-id-pages/common/store.js';
export default {
	data() {
		return {
			list3: [
				'../../static/images/3.png'
				// , '../../static/images/1.png', '../../static/images/2.png'
			]
		};
	},
	computed: {
		userInfo() {
			return store.userInfo;
		},
		hasLogin() {
			return store.hasLogin;
		}
	},
	methods: {
		toArticleList() {
			uni.navigateTo({
				url: '/pages/articles/articles'
			});
		},
		//拦截设置
		async goInterceptSetting() {
			if (this.goLoginPage()) return;
			uni.navigateTo({
				url: '/pages/interceptSet/interceptSet'
			});
		},
		//拦截记录
		goInterceptLog() {
			if (this.goLoginPage()) return;
			uni.navigateTo({
				url: '/pages/interceptLog/interceptLog'
			});
		},
		//投诉举报
		goTipOff() {
			if (this.goLoginPage()) return;
			uni.navigateTo({
				url: '/pages/tipOff/tipOff'
			});
		},
		//黑名单
		goBlackList() {
			if (this.goLoginPage()) return;
			uni.navigateTo({
				url: '/pages/blackList/blackList'
			});
		},
		//白名单
		goWhiteList() {
			if (this.goLoginPage()) return;
			uni.navigateTo({
				url: '/pages/whiteList/whiteList'
			});
		},
		//意见反馈
		goFeedback() {
			if (this.goLoginPage()) return;
			uni.navigateTo({
				url: '/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback'
			});
		},
		goLoginPage() {
			if (!this.hasLogin) {
				uni.showToast({
					title: '未登录',
					icon: 'none'
				});
				return true;
			}
			return false;
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	// min-height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding-bottom: 30rpx;
	.top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to bottom right, #0465d4, #0091d4, #00bfff, #00e9f9);
		min-height: 700rpx;
		overflow: hidden;
		.logo {
			color: #fff;
			font-size: 40rpx;
			margin-bottom: 30rpx;
		}
		.swiper {
			width: 88%;
			border-radius: 15rpx;
			overflow: hidden;
		}
	}
	.xia {
		padding-top: 10rpx;
		flex: 1;

		.bottom {
			box-shadow: 0px 0px 15px 0px #e5e5e5;
			margin: 50rpx auto;
			width: 88%;
			// width: 100%;
			background-color: #fff;
			border-radius: 30rpx;
			padding-top: 70rpx;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			// transform: translateY(-25rpx);
			justify-content: space-around;
			.item {
				width: 200rpx;
				height: 130rpx;
				margin-bottom: 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.iconfont {
					font-size: 60rpx;
					// color: #666666;
					color: #0277d4;
				}
				text {
					line-height: 60rpx;
					color: #747474;
				}
			}
		}

		.safe {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 0 auto;
			box-shadow: 0px 0px 15px 0px #e5e5e5;
			width: 88%;
			border-radius: 20rpx;
			padding: 15rpx;
			height: 300rpx;
			.left {
				// background-color: red;
				align-items: center;
				flex-direction: column;
				display: flex;
				width: 50%;
				height: 100%;
				margin-right: 40rpx;

				.title {
					display: flex;
					.text {
						margin-left: 10rpx;
						color: #00a6e8;
					}
				}
				.pic {
					width: 220rpx;
					height: 220rpx;
					border-radius: 30rpx;
					overflow: hidden;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.right {
				display: flex;
				flex-direction: column;
				.title {
				}
				.info {
					margin-top: 20rpx;
					font-size: 25rpx;
					color: #b0b0b0;
				}
			}
		}
	}
}
</style>
