<template>
	<view class="content">
		<!-- 	<view class="item" @click="requestAndroidPermission('android.permission.READ_SMS')">
			<text>读取短信内容权限</text>
			<view class="state">
				<text v-if="readSms">已开启</text>
				<text v-else>未开启</text>
				<u-icon class="icon" name="arrow-right" color="#bfbfbf" size="18"></u-icon>
			</view>
		</view>
		<view class="item" @click="requestAndroidPermission('android.permission.RECEIVE_SMS')">
			<text>接收新短信权限</text>
			<view class="state">
				<text v-if="readNewSms">已开启</text>
				<text v-else>未开启</text>
				<u-icon class="icon" name="arrow-right" color="#bfbfbf" size="18"></u-icon>
			</view>
		</view> -->
		<view class="item" v-for="item in permisionObj" @click="gotoAppPermissionSetting()">
			<text>{{ item.name }}</text>
			<view class="state">
				<text v-if="item.state">已开启</text>
				<text v-else>未开启</text>
				<u-icon class="icon" name="arrow-right" color="#bfbfbf" size="18"></u-icon>
			</view>
		</view>
		<uses-permission android:name="android.permission.READ_PHONE_STATE" tools:remove="android:maxSdkVersion" />
	</view>
</template>

<script>
import permision from '@/js_sdk/wa-permission/permission.js';
import { gotoAppPermissionSetting } from '@/js_sdk/wa-permission/permission.js';
export default {
	data() {
		return {
			readSms: false,
			isIos: true,
			items: ['iOS', 'Android'],
			current: 0,
			permisionObj: [
				{
					permisionID: 'android.permission.READ_SMS',
					name: '读取短信内容权限',
					state: ''
				},
				{ permisionID: 'android.permission.RECEIVE_SMS', name: '接收新短信权限', state: '' },
				{ permisionID: 'android.permission.SEND_SMS', name: '发送短信权限', state: '' },
				{ permisionID: 'android.permission.READ_CONTACTS', name: '通讯录读取权限', state: '' },
				{
					permisionID: ['android.permission.READ_CALL_LOG'],
					name: '读写通话记录权限',
					state: ''
				}
				// {
				// 	permisionID: ['android.permission.READ_CALL_LOG', 'android.permission.WRITE_CALL_LOG', 'android.permission.CALL_PHONE'],
				// 	name: '读写通话记录权限',
				// 	state: ''
				// }

				// ,
				// {
				// 	permisionID: 'android.permission.RECORD_AUDIO',
				// 	name: '写入通话记录权限',
				// 	state: ''
				// }
			]
		};
	},
	onLoad() {
		// #ifdef APP-PLUS
		this.isIos = plus.os.name == 'iOS';
		// #endif
		this.getPermissionState();
		//获得通话权限
		plus.android.requestPermissions(['android.permission.READ_CALL_LOG', 'android.permission.WRITE_CALL_LOG', 'android.permission.CALL_PHONE'], (res) => {
			if (res.granted.length > 0) {
				console.log('已授权');
				this.permisionObj[4].state = true;
			} else {
				console.log('请先授权！');
				this.permisionObj[4].state = false;
			}
		});
	},
	methods: {
		gotoAppPermissionSetting,
		//检查系统权限状态
		getPermissionState() {
			this.permisionObj.forEach((item, index) => {
				this.requestAndroidPermission(item.permisionID, index);
			});
			if (this.permisionObj[0].state) {
				this.permisionObj[1].state = true;
				this.permisionObj[2].state = true;
			}
		},
		//读取短信内容
		async requestAndroidPermission(permisionID, index) {
			//判断iOS上是否给予权限，有权限返回true，否则返回false
			var result = await permision.requestAndroidPermission(permisionID);
			var strStatus;
			if (result == 1) {
				strStatus = '已获得授权';
				this.permisionObj[index].state = true;
			} else if (result == 0) {
				strStatus = '未获得授权';
				this.permisionObj[index].state = false;
			} else {
				console.log(index);
				strStatus = '被永久拒绝权限';
				this.permisionObj[index].state = false;
			}
			// uni.showModal({
			// 	content: permisionID + strStatus,
			// 	showCancel: false
			// });
		}
	}
};
</script>

<style lang="scss">
.content {
	height: 100vh;
	background-color: #f5f5f5;
	padding-top: 20rpx;
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: #888888;
		font-size: 38rpx;
		border-bottom: 1px solid #eee;
		padding: 20rpx 35rpx;
		height: 80rpx;
		background-color: #fff;
		.state {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.icon {
				margin-left: 12rpx;
			}
		}
	}
}
</style>
