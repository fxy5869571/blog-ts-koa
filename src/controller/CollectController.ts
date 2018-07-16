import { Context } from 'koa'
import DBHelper from '../DBHelper'
const { CollectHelper } = DBHelper
export default class CollectController {
  public static async addCollect(ctx: Context) {
    const response = await CollectHelper.addCollect(ctx.request.body)
    ctx.body = response
  }
  public static async deleteCollect(ctx: Context) {
    const response = await CollectHelper.deleteCollect(ctx.request.body)
    ctx.body = response
  }
  public static async findCollect(ctx: Context) {
    const response = await CollectHelper.findCollect(ctx.query)
    if (response) {
      ctx.body = response
    }
  }
}
