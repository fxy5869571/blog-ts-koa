import { DB, Schema } from '../mongoDB'

const CollectSchema = new Schema({
  // 收藏内容
  content: String,
  // 创建时间
  create_at: Date,
  // 收藏标签
  tag: Object,
  // 收藏标题
  title: String,
})
const Collect = DB.model('collect', CollectSchema)

export default Collect
