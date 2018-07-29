import { Context } from 'koa'
import DBHelper from '../DBHelper'
const { UserHelper } = DBHelper
export default class UserController {
  public static async updateUser(ctx: Context) {
    const response = await UserHelper.updateUser()
    ctx.body = response
  }
  public static async login(ctx: Context) {
    const response = await UserHelper.findUser(ctx.request.body)

    if (response) {
      ctx.body = response
    }
  }
}
