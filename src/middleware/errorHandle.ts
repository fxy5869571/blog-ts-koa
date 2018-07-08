import { Context } from 'koa'

const errorHandle = async (ctx: Context, next: any) => {
  return next().catch((err: any) => {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        message: '游客只有浏览的权限',
        type: 'error',
      }
    } else {
      throw err
    }
  })
}
export default errorHandle
