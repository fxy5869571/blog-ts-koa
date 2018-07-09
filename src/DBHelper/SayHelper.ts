import { Say } from '../models/'
export default class SayHelper {
  public static findSay = async () => {
    const say = await Say.find({})
    const total = await Say.count({})
    return { say, total }
  }
  public static deleteSay = async (payload: object) => {
    const response = await Say.remove(payload)
    if (response.ok === 1) {
      return { message: '删除成功' }
    } else {
      return { message: '删除失败', type: 'error' }
    }
  }
  public static addSay = async (say: object) => {
    const response = await Say.create({ ...say, create_at: Date.now() })
    if (response) {
      return { message: '说说发表成功' }
    }
  }
}
