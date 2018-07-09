import { Context } from 'koa'
import DBHelper from '../DBHelper'
const { SayHelper } = DBHelper
export default class UserController {
  public static async addSay(ctx: Context) {
    const response = await SayHelper.addSay(ctx.request.body)
    ctx.body = response
  }
  public static async deleteSay(ctx: Context) {
    const response = await SayHelper.deleteSay(ctx.request.body)
    ctx.body = response
  }
  public static async findSay(ctx: Context) {
    const response = await SayHelper.findSay()
    if (response) {
      ctx.body = response
    }
  }
}
