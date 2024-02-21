const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	let {
		skip = 0
	} = event
	return await db.collection("blackList").where({
		delState: dbCmd.neq(true)
	}).orderBy("posttime", "desc").skip(skip).get();
};