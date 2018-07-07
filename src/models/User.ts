import { DB, Schema } from '../mongoDB'

const userSchema = new Schema({
  // 密码
  password: String,
  // 用户名
  userName: String,
})
const user = DB.model('user', userSchema)

export default user
