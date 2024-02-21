<template>
	<view>
		<uni-nav-bar
			left-icon="left"
			@clickLeft="goBack()"
			statusBar="false"
			height="80rpx;"
			backgroundColor="#00B8F9"
			color="#ffffff"
			right-icon="plus"
			title="黑名单"
			@clickRight="addPhone"
		/>
		<view class="content">
			<view class="top">
				<view class="icon">
					<u-icon name="warning" color="#676767" size="35"></u-icon>
				</view>
				<view class="txt">
					<view class="title">删除来电记录</view>
					<view class="info">开启后将自动删除黑名单号码的来电记录</view>
				</view>
				<view class="btn">
					<u-switch v-model="value" size="20" disabled @change="change"></u-switch>
				</view>
			</view>

			<view class="item" v-for="item in listArr">
				<view class="number">
					{{ item.phone }}
				</view>
				<view class="delete" @click="removePhone(item._id)">
					<u-icon name="trash" color="#c63b0c" size="30"></u-icon>
				</view>
			</view>
		</view>

		<view v-if="nodata">
			<u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png"></u-empty>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			nodata: false,
			listArr: [],
			value: false //开关
		};
	},
	onLoad() {
		this.getBlackList();
	},
	onShow() {
		this.getBlackList();
	},

	methods: {
		change(e) {
			console.log('change', e);
		},
		removePhone(id) {
			uni.showModal({
				title: '确认删除',
				content: '删除后将不可恢复',
				success: (res) => {
					if (res.confirm) {
						uniCloud
							.callFunction({
								name: 'blackList-remove-row',
								data: {
									id: id
								}
							})
							.then((res) => {
								uni.showToast({
									title: '删除成功',
									icon: 'none',
									mask: true
								});
								this.getBlackList();
							});
					}
				}
			});
		},
		getBlackList() {
			uni.showLoading({
				title: '加载中'
			});
			uniCloud
				.callFunction({
					name: 'blackList-get-all',
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
				});
		},
		//上传至黑名单列表
		addToList(phone) {
			uniCloud
				.callFunction({
					name: 'blackList-add',
					data: {
						phone: phone
					}
				})
				.then((res) => {
					uni.showToast({
						title: '添加成功',
						mask: true
					});
					this.getBlackList();
				});
		},
		addPhone() {
			uni.showModal({
				title: '添加至黑名单',
				editable: true,
				placeholderText: '请输入电话号码',
				cancelColor: '#00B8F9',
				confirmColor: '#00B8F9',
				mask: true,
				success: (res) => {
					if (res.confirm) {
						console.log(res.content);
						//判断是否纯数字
						if (res.content == parseInt(res.content)) {
							// 使用parseFloat也可以
							console.log('当前str是一个纯数值字符串');
							this.addToList(res.content);
						} else {
							uni.showToast({
								title: '格式错误',
								icon: 'none'
							});
						}
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		goBack() {
			uni.reLaunch({
				url: '/pages/home/home'
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	padding: 20rpx 40rpx;
	.top {
		height: 130rpx;
		padding: 0rpx 10rpx;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.txt {
			.title {
			}
			.info {
				font-size: 28rpx;
				color: #8d8d8d;
			}
		}
	}
	.item {
		padding: 15rpx 30rpx;
		border-bottom: 1px solid #eee;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		.number {
			color: #a3a3a3;
			font-size: 40rpx;
		}
	}
}
</style>
