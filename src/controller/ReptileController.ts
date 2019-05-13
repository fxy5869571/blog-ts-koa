import { Context } from 'koa'
import DBHelper from '../DBHelper'

const { ReptileHelper } = DBHelper

export default class ReptileController {
  public static async reptile(ctx: Context) {
    const response = await ReptileHelper.reptile()
    ctx.body = response
  }
}
