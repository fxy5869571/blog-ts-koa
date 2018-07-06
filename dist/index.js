"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const koaBodyparser = require("koa-bodyparser");
const mongoDB = require("./mongoDB");
const router_1 = require("./router");
const app = new koa();
mongoDB.connect();
app.use(koaBodyparser());
app.use(router_1.default.routes()).use(router_1.default.allowedMethods());
app.listen(8001);
//# sourceMappingURL=index.js.map