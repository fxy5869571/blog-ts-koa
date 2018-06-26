import { DB, Schema } from '../mongoDB'

const testSchema = new Schema({
  // 联系我
  title: Number,
})
const test = DB.model('test', testSchema)

export default test
