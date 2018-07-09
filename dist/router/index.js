"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KoaRouter = require("koa-router");
const controller_1 = require("../controller/");
const router = new KoaRouter();
const { findInfo, findResume } = controller_1.InfoController;
const { articles, article, addArticle, deleteArticle, updateArticle, } = controller_1.ArticleController;
router
    .get('/get-info', findInfo)
    .get('/get-resume', findResume)
    .get('/get-article', article)
    .get('/get-articles', articles)
    .get('/get-say', controller_1.SayController.findSay)
    .post('/add-article', addArticle)
    .post('/delete-article', deleteArticle)
    .post('/update-article', updateArticle)
    .post('/update-user', controller_1.UserController.updateUser)
    .post('/login', controller_1.UserController.login)
    .post('/add-say', controller_1.SayController.addSay)
    .post('/delete-say', controller_1.SayController.deleteSay);
exports.default = router;
//# sourceMappingURL=index.js.map