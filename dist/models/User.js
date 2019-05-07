"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const userSchema = new mongoDB_1.Schema({
    // 密码
    password: String,
    // 用户名
    userName: String,
});
const user = mongoDB_1.DB.model('user', userSchema);
exports.default = user;
//# sourceMappingURL=User.js.map