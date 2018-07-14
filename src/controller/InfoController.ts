import { Context } from 'koa'
import DBHelper from '../DBHelper'
const { findInfo, findResume } = DBHelper.InfoHelper
export default class InfoController {
  public static async findInfo(ctx: Context) {
    const Info = await findInfo()
    ctx.body = Info
  }
  public static async findResume(ctx: Context) {
    const Resume = await findResume()
    ctx.body = Resume[0]
  }
}
