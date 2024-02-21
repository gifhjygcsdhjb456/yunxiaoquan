<template>
	<view class="box">
		<view v-if="nodata">
			<u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/list.png"></u-empty>
		</view>

		<view class="big" v-else>
			<u-sticky bgColor="#fff">
				<u-tabs :list="navList" :scrollable="false" @change="changeNav"></u-tabs>
			</u-sticky>
			<view class="content">
				<view class="top">
					<u-divider textColor="#b0b0b0" lineColor="#b0b0b0" textSize="13" dashed text="此列表只显示3个月以内的记录"></u-divider>
				</view>
				<!-- 显示全部 -->
				<view v-if="curNavId == 0">
					<view class="item" v-for="item in msgList" @click="toMsgDetail(item)">
						<view class="avatar">
							<u-avatar icon="chat-fill"></u-avatar>
						</view>
						<view class="right">
							<view class="info">
								<view class="phone">
									<view class="num">
										{{ item.telphone }}
									</view>
									<text v-if="item.isSpamNote">疑似诈骗</text>
								</view>

								<view class="sendDate"><uni-dateformat :date="item.sendDate" :threshold="[60000, 3600000 * 24 * 7]" format="yy/MM/dd"></uni-dateformat></view>
								<!-- <view class="sendDate">{{ item.sendDate }}</view> -->
							</view>
							<view class="content">
								{{ item.content }}
							</view>
						</view>
					</view>
				</view>
				<!-- 只显示垃圾短信 -->
				<view v-else-if="curNavId == 1">
					<view v-if="item.isSpamNote" class="item" v-for="item in msgList" @click="toMsgDetail(item)">
						<view class="avatar">
							<u-avatar icon="chat-fill"></u-avatar>
						</view>
						<view class="right">
							<view class="info">
								<view class="phone">
									<view class="num">
										{{ item.telphone }}
									</view>
									<text v-if="item.isSpamNote">疑似诈骗</text>
								</view>

								<view class="sendDate"><uni-dateformat :date="item.sendDate" :threshold="[60000, 3600000 * 24 * 7]" format="yy/MM/dd"></uni-dateformat></view>
								<!-- <view class="sendDate">{{ item.sendDate }}</view> -->
							</view>
							<view class="content">
								{{ item.content }}
							</view>
						</view>
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
			loading: true,
			curNavId: 0,
			navList: [
				{
					name: '全部',
					id: '0'
				},
				{
					name: '垃圾',
					id: '1'
				}
			],
			// {发送人号码:telphone,短信内容:content,短信类型:type,发送日期：sendDate,是否垃圾：isSpamNote}
			msgList: []
		};
	},
	onLoad() {
		this.getMsgs();
	},
	methods: {
		parseTime,
		changeNav(item) {
			this.curNavId = item.id;
		},
		//判断是否为垃圾信息
		checkMsg(content) {
			return new Promise((resolve, reject) => {
				uni.request({
					url: ' http://101.37.23.154:5000/identify',
					header: {
						'content-type': 'application/json'
					},
					timeout: 60000,
					method: 'POST' || 'GET',
					data: {
						content
					},
					success: (res) => {
						resolve(res);
					},
					fail: (err) => {
						reject(err);
					}
				});
			});
		},
		async getMsgs() {
			//检查授权
			var result = await permision.requestAndroidPermission('android.permission.READ_SMS');
			var strStatus;
			if (result == 1) {
				strStatus = '已获得授权';
			} else {
				uni.showToast({
					title: '读短信权限未开启',
					icon: 'none'
				});
				setTimeout(() => {
					uni.hideToast();
				}, 2000);
				this.nodata = true;
			}
			var main = plus.android.runtimeMainActivity();
			var Uri = plus.android.importClass('android.net.Uri');
			var ContactsContract = plus.android.importClass('android.provider.ContactsContract');
			var uri = Uri.parse('content://sms/');
			var cr = main.getContentResolver();
			plus.android.importClass(cr);
			var cur = cr.query(uri, null, null, null, null);
			plus.android.importClass(cur);
			cur.moveToFirst();

			uni.showLoading({
				title: '匹配短信记录中..'
			});

			// 这一块设置了拿到当前时间的前五分钟，默认是获取全部的短信信息
			// 小米系统默认拿到的不是全部短信信息，需要在权限中开启"通知类短信"这个权限才能拿到全部
			let newdata = new Date().getTime();
			// 拿到当前时间的前五分钟
			let fiveMinsAgo = new Date(newdata - 3 * 30 * 24 * 60 * 60 * 1000).getTime();
			var selection = 'date > ' + fiveMinsAgo;
			var cur = cr.query(uri, null, selection, null, null);

			while (cur.moveToNext()) {
				let newObj = {};
				// 发送人号码
				var index_Address = cur.getColumnIndex('address');
				var address = cur.getString(index_Address);
				newObj.telphone = address;
				// console.log('发送人号码:' + address);
				//短信内容
				var index_Body = cur.getColumnIndex('body');
				var body = cur.getString(index_Body);
				newObj.content = body;
				// console.log('短信内容:' + body);
				//判断是否为垃圾短信
				newObj.isSpamNote = false;
				this.checkMsg(newObj.content).then((res) => {
					// console.log(res.data.value);
					if (res.data.value == '这条短信是垃圾短信。') newObj.isSpamNote = true;
				});

				//短信类型1接收 2发送
				var index_Type = cur.getColumnIndex('type');
				var type = cur.getString(index_Type);
				newObj.type = type;
				// console.log('短信类型:' + type);
				// 发送日期
				var smsDate = cur.getString(cur.getColumnIndex('date'));
				smsDate = this.parseTime(smsDate);
				newObj.sendDate = smsDate;
				// console.log('发送日期:' + smsDate);
				this.msgList.push(newObj);
			}

			if (!this.msgList.length) {
				this.nodata = true;
			}
			cur.close();
			uni.hideLoading();
		},
		toMsgDetail(item) {
			let orderData = JSON.stringify(item);
			let newStr = orderData.replace(/%/g, '%25');
			uni.navigateTo({
				url: `/pages/msgDetail/msgDetail?data=${encodeURIComponent(newStr)}`
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	padding: 15rpx 40rpx;

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 40rpx 0;
		height: 130rpx;
		.right {
			width: 83%;
			height: 100%;
			display: flex;
			// align-items: center;
			flex-direction: column;
			justify-content: space-between;
			.info {
				display: flex;
				width: 100%;
				align-items: center;
				justify-content: space-between;
				.phone {
					font-size: 28rpx;
					display: flex;
					align-items: center;
					.num {
						margin-right: 10rpx;
					}
					text {
						color: #e3342b;
						font-size: 26rpx;
					}
				}
				.sendDate {
					font-size: 28rpx;
					color: #ababab;
				}
			}
			.content {
				padding: 0;
				font-size: 28rpx;
				color: #ababab;
				text-align: justify;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden; //溢出内容隐藏
				text-overflow: ellipsis; //文本溢出部分用省略号表示
				display: -webkit-box; //特别显示模式
				-webkit-line-clamp: 2; //行数
				line-clamp: 2;
				-webkit-box-orient: vertical; //盒子中内容竖直排列
			}
		}
	}
}
</style>
