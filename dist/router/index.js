"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KoaRouter = require("koa-router");
const controller_1 = require("../controller/");
const router = new KoaRouter();
const { ArticleController, InfoController } = controller_1.default;
const { findInfo, findResume } = InfoController;
const { articles, article, addArticle, deleteArticle, updateArticle, } = ArticleController;
router
    .get('/info', findInfo)
    .get('/resume', findResume)
    .get('/article', article)
    .get('/articles', articles)
    .post('/add-article', addArticle)
    .post('/delete-article', deleteArticle)
    .post('/update-article', updateArticle);
exports.default = router;
//# sourceMappingURL=index.js.map