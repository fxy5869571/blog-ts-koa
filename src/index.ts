import * as koa from 'koa'
import * as koaBodyparser from 'koa-bodyparser'
import * as jwt from 'koa-jwt'
import { admin } from './config'
import errorHandle from './middleware/errorHandle'
import * as mongoDB from './mongoDB'
import router from './router'

const app = new koa()

mongoDB.connect()
app.use(
  jwt({ secret: admin }).unless({ path: [/\/get/, /\/login/, '/update-user'] })
)
app.use(koaBodyparser())
app.use(errorHandle)
app.use(router.routes()).use(router.allowedMethods())
app.listen(8001)
