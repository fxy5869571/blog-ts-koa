import { DB, Schema } from '../mongoDB'

const ReptileSchema = new Schema({
  content: String,
  title: String,
})
const Reptile = DB.model('book', ReptileSchema)

export default Reptile
