"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const koaBodyparser = require("koa-bodyparser");
const jwt = require("koa-jwt");
const cors = require("koa2-cors");
const config_1 = require("./config");
const errorHandle_1 = require("./middleware/errorHandle");
const mongoDB = require("./mongoDB");
const router_1 = require("./router");
const app = new koa();
mongoDB.connect();
app
    .use(cors({
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    allowMethods: ['GET', 'POST', 'DELETE'],
    credentials: true,
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    origin: () => '*',
}))
    .use(errorHandle_1.default)
    .use(jwt({ secret: config_1.admin }).unless({
    path: [/\/get/, '/api/login', '/api/update-user', '/api/reptile'],
}))
    .use(koaBodyparser())
    .use(router_1.default.routes())
    .use(router_1.default.allowedMethods());
app.listen(8001);
//# sourceMappingURL=index.js.map