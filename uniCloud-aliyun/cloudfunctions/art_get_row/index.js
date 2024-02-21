const db = uniCloud.database()
exports.main = async (event, context) => {
	let {
		id
	} = event
	//返回数据给客户端
	return await db.collection('articles').doc(id).get()
};