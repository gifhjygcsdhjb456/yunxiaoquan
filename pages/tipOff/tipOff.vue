<template>
	<view>
		<view v-if="nodata">
			<u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png"></u-empty>
		</view>
		<view v-else class="content">
			<view class="top">
				<u-divider textColor="#b0b0b0" lineColor="#b0b0b0" textSize="13" dashed text="此列表只显示前100条记录"></u-divider>
			</view>
			<view class="item" v-for="item in telphoneLog">
				<view class="left">
					<view class="phone">
						<view class="num">
							<text v-if="item.xm">{{ item.xm }}</text>
							<text v-else>{{ item.telphone }}</text>
						</view>
					</view>
					<view class="content">
						<text>{{ item.type }}</text>
						<text>{{ item.duration }}秒</text>
					</view>
				</view>

				<view class="right">
					<view class="sendDate"><uni-dateformat :date="item.date" :threshold="[60000, 3600000 * 24 * 1]" format="yy/MM/dd"></uni-dateformat></view>
					<!-- <view class="sendDate">{{ item.sendDate }}</view> -->
					<view class="icon" @click="goTipOff(item.telphone)">
						<u-icon name="info-circle" color="#2979ff" size="20"></u-icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { parseTime } from '@/utils/format.js';
import permision from '@/js_sdk/wa-permission/permission.js';
import { gotoAppPermissionSetting } from '@/js_sdk/wa-permission/permission.js';
export default {
	data() {
		return {
			nodata: false,
			telphoneLog: []
		};
	},
	onLoad() {
		this.getCalllog();
		//检查通话记录权限，没获得就弹窗请求权限
		this.needPermission().then((res) => {
			if (res) {
				this.readCallLogs()
					.then((ret) => {
						uni.setStorageSync('loga', ret);
					})
					.catch((err) => {
						uni.setStorageSync('loga', err);
					});
			}
		});
	},
	methods: {
		parseTime,
		goTipOff(phone) {
			uni.navigateTo({
				url: `/pages/editTipOff/editTipOff?phone=${phone}`
			});
		},
		async getCalllog() {
			//检查授权
			var result = await permision.requestAndroidPermission(['android.permission.READ_CALL_LOG', 'android.permission.WRITE_CALL_LOG', 'android.permission.CALL_PHONE']);
			var strStatus;
			if (result == 1) {
				strStatus = '已获得授权';
			} else {
				uni.showToast({
					title: '读通话记录权限未开启',
					icon: 'none'
				});
				setTimeout(() => {
					uni.hideToast();
				}, 5000);
				this.nodata = true;
			}

			var CallLog = plus.android.importClass('android.provider.CallLog');
			var Activity = plus.android.runtimeMainActivity();
			var ContentResolver = plus.android.importClass('android.content.ContentResolver');
			var resolver = Activity.getContentResolver();
			plus.android.importClass(resolver);
			var String = plus.android.importClass('java.lang.String');
			var cs = resolver.query(CallLog.Calls.CONTENT_URI, null, null, null, CallLog.Calls.DEFAULT_SORT_ORDER);

			uni.showLoading({
				title: '匹配通话记录中..'
			});
			var count = 0; // 记录多少条 用于处理循环跳出
			while (plus.android.invoke(cs, 'moveToNext')) {
				count++;
				console.log(count);
				let talist = {
					// 联系人姓名
					xm: plus.android.invoke(cs, 'getString', plus.android.invoke(cs, 'getColumnIndex', CallLog.Calls.CACHED_NAME)),
					telphone: plus.android.invoke(cs, 'getString', plus.android.invoke(cs, 'getColumnIndex', CallLog.Calls.NUMBER)),
					// 通话时长
					duration: plus.android.invoke(cs, 'getString', plus.android.invoke(cs, 'getColumnIndex', CallLog.Calls.DURATION)),
					date: plus.android.invoke(cs, 'getString', plus.android.invoke(cs, 'getColumnIndex', CallLog.Calls.DATE)),
					type: plus.android.invoke(cs, 'getString', plus.android.invoke(cs, 'getColumnIndex', CallLog.Calls.TYPE))
				};
				talist.date = this.parseTime(talist.date);
				switch (talist.type) {
					// 判断通话类型
					case '1':
						talist.type = ' 呼入 ';
						break;
					case '2':
						talist.type = ' 呼出 ';
						break;
					case '3':
						talist.type = ' 未接 ';
						break;
					default:
						talist.type = ' 挂断 ';
						break;
				}

				if (count > 100) {
					break;
				}
				this.telphoneLog.push(talist);
			}

			if (!this.telphoneLog.length) {
				this.nodata = true;
			}
			uni.hideLoading();
		},
		async needPermission() {
			// 需要的授权
			// #ifdef APP-PLUS
			if (plus.os.name != 'Android') {
				return;
			}
			return await new Promise((resolve, reject) => {
				let list = ['android.permission.READ_CALL_LOG'];
				for (let i = 0; i < list.length; i++) {
					plus.android.requestPermissions(
						[list[i]],
						function (e) {
							if (e.deniedAlways.length > 0) {
								resolve(false);
								return;
							}
							if (e.deniedPresent.length > 0) {
								resolve(false);
								return;
							}
						},
						function (e) {
							resolve(false);
						}
					);
				}

				resolve(true);
				return;
			});
			// #endif
		},
		async readCallLogs() {
			// 通话记录
			// #ifdef APP-PLUS

			uni.setStorageSync('CallLog', '开始获取');
			return await new Promise((resolve, reject) => {
				if (plus.os.name != 'Android') {
					// resolve("is not Android");
					return;
				}
				try {
					// 获取通话记录的主体代码 顺序不能够乱
					var CallLog = plus.android.importClass('android.provider.CallLog');
					var Activity = plus.android.runtimeMainActivity();
					var ContentResolver = plus.android.importClass('android.content.ContentResolver');
					var resolver = Activity.getContentResolver();
					plus.android.importClass(resolver);
					var String = plus.android.importClass('java.lang.String');
					var cs = resolver.query(CallLog.Calls.CONTENT_URI, null, null, null, CallLog.Calls.DEFAULT_SORT_ORDER);
					console.log('cs', cs);
					plus.android.importClass(cs); //*******
					console.log('开始');
					var content = [];
					var count = 0; // 记录多少条

					if (cs.moveToFirst()) {
						console.log('yes');
						while (cs.moveToNext()) {
							count++;
							// 号码
							var number = cs.getString(cs.getColumnIndex(CallLog.Calls.NUMBER));
							// 呼叫类型
							var type;
							switch (parseInt(cs.getString(cs.getColumnIndex(CallLog.Calls.TYPE)))) {
								// 判断通话类型
								case CallLog.Calls.INCOMING_TYPE:
									type = ' 呼入 ';
									break;
								case CallLog.Calls.OUTGOING_TYPE:
									type = ' 呼出 ';
									break;
								case CallLog.Calls.MISSED_TYPE:
									type = ' 未接 ';
									break;
								default:
									type = ' 挂断 ';
									break;
							}
							// 获取时间
							var date = cs.getString(cs.getColumnIndexOrThrow(CallLog.Calls.DATE));
							// var date = new Date(parseInt(cs.getString(cs.getColumnIndexOrThrow(CallLog.Calls.DATE))));
							// 联系人
							var Name_Col = cs.getColumnIndexOrThrow(CallLog.Calls.CACHED_NAME);
							var name = cs.getString(Name_Col);
							// 通话时间，单位:s
							var Duration_Col = cs.getColumnIndexOrThrow(CallLog.Calls.DURATION);
							var duration = cs.getString(Duration_Col);
							// 存入数组
							content.push({
								name: name, // 联系人的姓名
								mobile: number, // 联系人电话
								//callTime: formatDate (date), // 呼入或呼出时间
								callTime: this.parseTime(date), // 呼入或呼出时间
								talkTime: duration, // 通话时长
								type: type
							});
							// 查询 100 条 就跳出
							if (count > 100) {
								break;
							}
						}
					}
					resolve(content);
				} catch (e) {
					reject(e);
				}
			});
			// #endif
		}
	}
};
</script>

<style lang="scss">
.content {
	padding: 15rpx 40rpx;
	.item {
		padding: 15rpx 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 90rpx;
		border-bottom: 1px solid #eee;
		.left {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.phone {
				font-size: 32rpx;
				display: flex;
				align-items: center;
				.num {
					margin-right: 10rpx;
				}
			}
			.content {
				padding: 0;
				font-size: 28rpx;
				color: #ababab;
			}
		}

		.right {
			display: flex;
			align-items: center;
			width: 300rpx;
			.sendDate {
				font-size: 30rpx;
				margin: 15rpx;
				color: #ababab;
			}
		}
	}
}
</style>
