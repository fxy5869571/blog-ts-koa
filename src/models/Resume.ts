import { DB, Schema } from '../mongoDB'

const ResumeSchema = new Schema({
  // 联系我
  contact: Schema.Types.Mixed,
  // 描述
  default: Schema.Types.Mixed,
  // 工作经历
  experience: Schema.Types.Mixed,
  // 个人信息
  info: Schema.Types.Mixed,
  // 技能栈
  skill: Schema.Types.Mixed,
  // 标题
  titleList: Schema.Types.Mixed,
  // 作品集
  works: Schema.Types.Mixed,
})
const Resume = DB.model('Resume', ResumeSchema)

export default Resume
