import { DB, Schema } from '../mongoDB'

const saySchema = new Schema({
  // 发表时间
  create_at: { type: Date, default: Date.now() },
  // 说说
  say: String,
})
const say = DB.model('say', saySchema)

export default say
