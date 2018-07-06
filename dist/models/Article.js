"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const ArticleSchema = new mongoDB_1.Schema({
    // 简介
    abstract: String,
    // 访问次数
    access: { type: Number, default: 0 },
    // 内容
    content: String,
    // 创建时间
    create_at: Date,
    // 原创或转载
    nature: String,
    // 文章标签
    tag: Object,
    // 标题
    title: String,
    // 文章类型
    type: String,
});
const Article = mongoDB_1.DB.model('Article', ArticleSchema);
exports.default = Article;
//# sourceMappingURL=Article.js.map