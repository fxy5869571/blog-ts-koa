import { Context } from 'koa'
import DBHelper from '../DBHelper'
const { InfoHelper } = DBHelper
export default class InfoController {
  public static async findInfo(ctx: Context) {
    const Info = await InfoHelper.findInfo()
    ctx.body = Info[0]
  }
}
