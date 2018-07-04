import { DB, Schema } from '../mongoDB'

const ArticleSchema = new Schema({
  // 简介
  abstract: String,
  // 访问次数
  access: { type: Number, default: 0 },
  // 内容
  content: String,
  // 创建时间
  create_at: { type: Date, default: Date.now() },
  // 文章标签
  tag: String,
  // 标题
  title: String,
  // 文章类型
  type: String,
})
const Article = DB.model('Article', ArticleSchema)

export default Article
