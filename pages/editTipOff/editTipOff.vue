<template>
	<view class="content">
		<view>
			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
				<u-form-item label="举报号码" labelWidth="160rpx" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.phone" color="#9e9e9e" maxlength="15" border="none"></u--input>
				</u-form-item>

				<u-form-item
					label="举报原因"
					labelWidth="160rpx"
					prop="userInfo.reason"
					borderBottom
					@click="
						showSex = true;
						hideKeyboard();
					"
					ref="item1"
				>
					<u--input v-model="model1.userInfo.reason" color="#9e9e9e" disabled disabledColor="#ffffff" placeholder="请选择" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>

				<u-action-sheet
					:show="showSex"
					:actions="actions"
					title="举报类型"
					description="请选择真实的举报原因"
					@close="showSex = false"
					@select="reasonSelect"
				></u-action-sheet>

				<u-form-item label="备注" labelWidth="160rpx" prop="userInfo.extremeMsg" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.extremeMsg" color="#9e9e9e" border="none" placeholder="请填写备注"></u--input>
				</u-form-item>
			</u--form>
			<u-button @click="submit" size="large" type="primary" shape="circle" customStyle="margin:100rpx auto; width:400rpx; height:80rpx;">提交</u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSex: false,
			model1: {
				userInfo: {
					phone: '',
					reason: '',
					extremeMsg: ''
				}
			},
			actions: [
				{
					name: '广告传媒'
				},
				{
					name: '教育培训'
				},
				{
					name: '电商客服'
				},
				{
					name: '金融保险'
				},
				{
					name: '工商财税'
				},
				{
					name: '其他类型'
				}
			],
			rules: {
				'userInfo.phone': {
					type: 'string',
					required: true,
					min: 5,
					max: 15,
					message: '请填写号码',
					trigger: ['blur', 'change']
				},
				'userInfo.reason': {
					type: 'string',
					required: true,
					message: '请选择举报原因',
					trigger: ['blur', 'change']
				}
			},
			radio: '',
			switchVal: false
		};
	},
	onLoad(e) {
		if (e) {
			this.model1.userInfo.phone = e.phone;
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		reasonSelect(e) {
			this.model1.userInfo.reason = e.name;
			this.$refs.uForm.validateField('userInfo.reason');
		},
		submit() {
			this.$refs.uForm
				.validate()
				.then((res) => {
					// uni.$u.toast('校验通过');
				})
				.catch((errors) => {
					uni.$u.toast('校验失败');
				});
			// console.log(this.model1.userInfo);
			this.addTipOff(this.model1.userInfo);
		},
		addTipOff(userInfo) {
			uniCloud
				.callFunction({
					name: 'tipOff-add',
					data: {
						phone: userInfo.phone,
						reason: userInfo.reason,
						extremeMsg: userInfo.extremeMsg
					}
				})
				.then((res) => {
					uni.showToast({
						title: '提交成功'
					});
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/tipOff/tipOff'
						});
					}, 800);
				});
		}
	}
};
</script>

<style lang="scss">
.content {
	padding: 30rpx 20rpx;
}
</style>
