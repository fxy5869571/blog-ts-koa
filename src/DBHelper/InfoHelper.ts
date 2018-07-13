import { Info, Resume } from '../models/'
export default class InfoHelper {
  public static findInfo = async () => {
    const info: any = await Info.find({})
    await Info.update({ _id: info[0]._id }, { access: ++info[0].access })
    return info
  }
  public static findResume = async () => {
    const response = await Resume.find({})
    return response
  }
}
