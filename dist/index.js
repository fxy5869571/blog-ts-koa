"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const koaBodyparser = require("koa-bodyparser");
const jwt = require("koa-jwt");
const config_1 = require("./config");
const errorHandle_1 = require("./middleware/errorHandle");
const mongoDB = require("./mongoDB");
const router_1 = require("./router");
const app = new koa();
mongoDB.connect();
app
    .use(errorHandle_1.default)
    .use(jwt({ secret: config_1.admin }).unless({
    path: [/\/get/, /\/login/, '/update-user'],
}))
    .use(koaBodyparser())
    .use(router_1.default.routes())
    .use(router_1.default.allowedMethods());
app.listen(8001);
//# sourceMappingURL=index.js.map