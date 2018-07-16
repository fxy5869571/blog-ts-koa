import { Context } from 'koa'
import DBHelper from '../DBHelper'
const { findInfo } = DBHelper.InfoHelper
export default class InfoController {
  public static async findInfo(ctx: Context) {
    const Info = await findInfo()
    ctx.body = Info
  }
}
