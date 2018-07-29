import * as koa from 'koa'
import * as koaBodyparser from 'koa-bodyparser'
import * as jwt from 'koa-jwt'
import { admin } from './config'
import errorHandle from './middleware/errorHandle'
import * as mongoDB from './mongoDB'
import router from './router'

const app = new koa()

mongoDB.connect()
app
  .use(errorHandle)
  .use(
    jwt({ secret: admin }).unless({
      path: [/\/get/, '/api/login', '/api/update-user'],
    })
  )
  .use(koaBodyparser())
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(8001)
