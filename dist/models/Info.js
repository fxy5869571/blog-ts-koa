"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const InfoSchema = new mongoDB_1.Schema({
    // 文章数量
    ArticleNum: Number,
    // 作者头像
    authorImg: String,
    // 文章类型
    classList: Array,
    // github
    github: String,
    // 作者名字
    name: String,
    // 介绍自己
    present: String,
    // 标签数组
    tag: Array,
});
const Info = mongoDB_1.DB.model('Info', InfoSchema);
exports.default = Info;
//# sourceMappingURL=Info.js.map