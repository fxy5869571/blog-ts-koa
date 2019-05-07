"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KoaRouter = require("koa-router");
const controller_1 = require("../controller/");
const router = new KoaRouter();
const { articles, article, addArticle, deleteArticle, updateArticle, } = controller_1.ArticleController;
router
    // 博客信息
    .get('/api/get-info', controller_1.InfoController.findInfo)
    .get('/api/get-admin-info', controller_1.InfoController.findAdminInfo)
    // 文章
    .get('/api/get-article', article)
    .get('/api/get-articles', articles)
    .post('/api/add-article', addArticle)
    .post('/api/delete-article', deleteArticle)
    .post('/api/update-article', updateArticle)
    // 用户信息
    .post('/api/update-user', controller_1.UserController.updateUser)
    .post('/api/login', controller_1.UserController.login)
    // 说说
    .get('/api/get-say', controller_1.SayController.findSay)
    .post('/api/add-say', controller_1.SayController.addSay)
    .post('/api/delete-say', controller_1.SayController.deleteSay)
    // 收藏
    .get('/api/get-collect', controller_1.CollectController.findCollect)
    .post('/api/add-collect', controller_1.CollectController.addCollect)
    .post('/api/delete-collect', controller_1.CollectController.deleteCollect);
exports.default = router;
//# sourceMappingURL=index.js.map