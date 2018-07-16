import { Collect } from '../models/'

interface IPayload {
  pageSize: string
  pageIndex: string
}
export default class CollectHelper {
  public static findCollect = async (payload: IPayload) => {
    const { pageIndex, pageSize } = payload
    const Skip =
      Number.parseInt(pageIndex) * Number.parseInt(pageSize) -
      Number.parseInt(pageSize)
    const collect = await Collect.find({})
      .sort({ create_at: -1 })
      .limit(Number.parseInt(pageSize))
      .skip(Skip)
    const total = await Collect.count({})
    return { collect, total }
  }
  public static deleteCollect = async (payload: object) => {
    const response = await Collect.remove(payload)
    if (response.ok === 1) {
      return { message: '删除成功' }
    } else {
      return { message: '删除失败', type: 'error' }
    }
  }
  public static addCollect = async (say: object) => {
    const response = await Collect.create({ ...say, create_at: Date.now() })
    if (response) {
      return { message: '添加收藏成功' }
    }
  }
}
