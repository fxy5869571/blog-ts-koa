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
const DBHelper_1 = require("../DBHelper");
const { findArticleById, findArticles, createArticle, deleteArticleById, updateArticleById, } = DBHelper_1.default.ArticleHelper;
class ArticleController {
    static articles(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageIndex, pageSize, timeFile } = ctx.query;
            const response = yield findArticles(ctx.query);
            const { articles, total } = response;
            if (timeFile) {
                ctx.body = {
                    articles: articles.map((item) => {
                        const { _id, create_at, title } = item._doc;
                        return { _id, create_at, title };
                    }),
                    total,
                };
            }
            else {
                ctx.body = {
                    articles,
                    total,
                };
            }
        });
    }
    static article(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const Article = yield findArticleById(ctx.query.Id);
            ctx.body = Article;
        });
    }
    static addArticle(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = createArticle(ctx.request.body);
            if (response) {
                ctx.body = { message: '发表文章成功' };
            }
            else {
                ctx.body = { message: '操作失败' };
            }
        });
    }
    static deleteArticle(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield deleteArticleById(ctx.request.body.id);
            if (response.ok === 1) {
                ctx.body = { message: '文章删除成功' };
            }
            else {
                ctx.body = { message: '操作失败' };
            }
        });
    }
    static updateArticle(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield updateArticleById(ctx.request.body);
            if (response.ok === 1) {
                ctx.body = { message: '文章修改成功' };
            }
            else {
                ctx.body = { message: '操作失败' };
            }
        });
    }
}
exports.default = ArticleController;
//# sourceMappingURL=ArticleController.js.map