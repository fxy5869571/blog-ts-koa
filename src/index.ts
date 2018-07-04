import * as koa from 'koa'
import * as koaBodyparser from 'koa-bodyparser'
import * as mongoDB from './mongoDB'
import router from './router'
const app = new koa()
mongoDB.connect()
app.use(koaBodyparser())
app.use(router.routes()).use(router.allowedMethods())
app.listen(8001)
