"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/");
const tagColors = [
    '#87d068',
    '#108ee9',
    '#6b61f0',
    '#f8a72a',
    '#fe5500',
    '#2db7f5',
];
class ArticleHelper {
}
// 分页查询文章
ArticleHelper.findArticles = (query) => __awaiter(this, void 0, void 0, function* () {
    const { pageSize, pageIndex } = query;
    const Skip = Number.parseInt(pageIndex) * Number.parseInt(pageSize) -
        Number.parseInt(pageSize);
    const articles = yield models_1.Article.find()
        .sort({ create_at: -1 })
        .limit(Number.parseInt(pageSize))
        .skip(Skip);
    const total = yield models_1.Article.count({}, (err, count) => {
        if (err) {
            return false;
        }
        else {
            return count;
        }
    });
    return { total, articles };
});
// 查询文章详情
ArticleHelper.findArticleById = (id) => __awaiter(this, void 0, void 0, function* () { return yield models_1.Article.findById(id); });
// 添加文章
ArticleHelper.createArticle = (article) => __awaiter(this, void 0, void 0, function* () {
    // 随机标签颜色
    const tag = {
        color: tagColors[Math.floor(Math.random() * 6)],
        title: article.tag,
    };
    const response = yield models_1.Article.create(Object.assign({}, article, { tag, create_at: new Date() }), (error, doc) => {
        if (error) {
            throw error;
        }
        else {
            return doc;
        }
    });
    return response;
});
// 删除文章
ArticleHelper.deleteArticleById = (id) => __awaiter(this, void 0, void 0, function* () {
    return yield models_1.Article.remove({ _id: id });
});
ArticleHelper.updateArticleById = (article) => __awaiter(this, void 0, void 0, function* () {
    const tag = {
        color: tagColors[Math.floor(Math.random() * 6)],
        title: article.tag,
    };
    const response = yield models_1.Article.update({ _id: article._id }, Object.assign({}, article, { tag }));
    return response;
});
exports.default = ArticleHelper;
//# sourceMappingURL=ArticleHelper.js.map