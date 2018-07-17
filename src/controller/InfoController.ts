import { Context } from 'koa'
import DBHelper from '../DBHelper'
const { findInfo, findAdminInfo } = DBHelper.InfoHelper
export default class InfoController {
  public static async findInfo(ctx: Context) {
    const Info = await findInfo()
    ctx.body = Info
  }
  public static async findAdminInfo(ctx: Context) {
    const AdminInfo = await findAdminInfo()
    ctx.body = AdminInfo
  }
}
