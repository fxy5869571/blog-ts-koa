import { Context } from 'koa'

const errorHandle = (ctx: Context, next: any) => {
  return next().catch((err: any) => {
    if (err.status === 401) {
      ctx.status = 200
      ctx.body = {
        message: '你没有登录或登录过期',
        type: 'error',
      }
    } else {
      throw err
    }
  })
}
export default errorHandle
