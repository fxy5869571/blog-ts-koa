import Models from '../models/'
const { Info } = Models
export default class InfoHelper {
  public static findInfo = async () => await Info.find({})
}
