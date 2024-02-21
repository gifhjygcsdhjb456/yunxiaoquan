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
			title="白名单"
			@clickRight="addPhone"
		/>
		<view v-if="nodata">
			<u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png"></u-empty>
		</view>
		<view v-else class="content">
			<view class="item" v-for="item in listArr">
				<view class="number">
					{{ item.phone }}
				</view>
				<view class="delete" @click="removePhone(item._id)">
					<u-icon name="trash" color="#c63b0c" size="25"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			nodata: false,
			listArr: []
		};
	},
	onLoad() {
		this.getWhiteList();
	},
	onShow() {
		this.getWhiteList();
	},
	onPullDownRefresh() {
		listArr = [];
		this.getWhiteList();
	},

	methods: {
		removePhone(id) {
			console.log(id);
			uni.showModal({
				title: '确认删除',
				content: '删除后将不可恢复',
				success: (res) => {
					if (res.confirm) {
						uniCloud
							.callFunction({
								name: 'whiteList-remove-row',
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
								this.getWhiteList();
							});
					}
				}
			});
		},
		getWhiteList() {
			uni.showLoading({
				title: '加载中'
			});
			uniCloud
				.callFunction({
					name: 'whiteList-get-all',
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
		//上传至白名单列表
		addToList(phone) {
			uniCloud
				.callFunction({
					name: 'whiteList-add',
					data: {
						phone: phone
					}
				})
				.then((res) => {
					uni.showToast({
						title: '添加成功',
						mask: true
					});
					this.getWhiteList();
				});
		},
		addPhone() {
			uni.showModal({
				title: '添加至白名单',
				editable: true,
				placeholderText: '请输入电话号码',
				cancelColor: '#00B8F9',
				confirmColor: '#00B8F9',
				mask: true,
				success: (res) => {
					if (res.confirm) {
						console.log(res.content);
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
	padding: 40rpx;
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
