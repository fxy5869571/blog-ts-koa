"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KoaRouter = require("koa-router");
const controller_1 = require("../controller/");
const router = new KoaRouter();
const { ArticleController, InfoController, UserController } = controller_1.default;
const { findInfo, findResume } = InfoController;
const { articles, article, addArticle, deleteArticle, updateArticle, } = ArticleController;
router
    .get('/get-info', findInfo)
    .get('/get-resume', findResume)
    .get('/get-article', article)
    .get('/get-articles', articles)
    .post('/add-article', addArticle)
    .post('/delete-article', deleteArticle)
    .post('/update-article', updateArticle)
    .post('/update-user', UserController.updateUser)
    .post('/login', UserController.login);
exports.default = router;
//# sourceMappingURL=index.js.map