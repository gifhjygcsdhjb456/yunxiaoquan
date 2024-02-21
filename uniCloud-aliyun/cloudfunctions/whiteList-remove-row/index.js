const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	let {
		id
	} = event;
	return await db.collection("whiteList").doc(id).update({
		delState: true,
		delip: dbCmd.push(context.CLIENTIP)
	})
};