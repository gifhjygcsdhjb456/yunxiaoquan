'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	let {
		phone,
		reason,
		extremeMsg
	} = event;
	//event为客户端上传的参数
	return await db.collection("tipOff").add({
		addip: context.CLIENTIP,
		posttime: Date.now(),
		phone,
		reason,
		extremeMsg
	})
};