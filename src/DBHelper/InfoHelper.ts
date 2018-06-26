import Models from '../models/'
const { Info, Resume } = Models
export default class InfoHelper {
  public static findInfo = async () => await Info.find({})
  public static findResume = async () => {
    const response = await Resume.find({})
    return response
  }
}
