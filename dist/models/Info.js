"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const InfoSchema = new mongoDB_1.Schema({
    // 访问次数
    access: { type: Number, default: 0 },
    accessData: Array,
    // 作者头像
    authorImg: String,
    // 数据
    data: Array,
    // github
    github: String,
    // 作者名字
    name: String,
    // 介绍自己
    present: String,
});
const Info = mongoDB_1.DB.model('Info', InfoSchema);
exports.default = Info;
//# sourceMappingURL=Info.js.map