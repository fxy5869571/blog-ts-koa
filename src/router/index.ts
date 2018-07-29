import * as KoaRouter from 'koa-router'
import {
  ArticleController,
  CollectController,
  InfoController,
  SayController,
  UserController,
} from '../controller/'
const router = new KoaRouter()
const {
  articles,
  article,
  addArticle,
  deleteArticle,
  updateArticle,
} = ArticleController
router
  // 博客信息
  .get('/api/get-info', InfoController.findInfo)
  .get('/api/get-admin-info', InfoController.findAdminInfo)
  // 文章
  .get('/api/get-article', article)
  .get('/api/get-articles', articles)
  .post('/api/add-article', addArticle)
  .post('/api/delete-article', deleteArticle)
  .post('/api/update-article', updateArticle)
  // 用户信息
  .post('/api/update-user', UserController.updateUser)
  .post('/api/login', UserController.login)
  // 说说
  .get('/api/get-say', SayController.findSay)
  .post('/api/add-say', SayController.addSay)
  .post('/api/delete-say', SayController.deleteSay)
  // 收藏
  .get('/api/get-collect', CollectController.findCollect)
  .post('/api/add-collect', CollectController.addCollect)
  .post('/api/delete-collect', CollectController.deleteCollect)
export default router
