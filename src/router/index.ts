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
  .get('/get-info', InfoController.findInfo)
  // 文章
  .get('/get-article', article)
  .get('/get-articles', articles)
  .post('/add-article', addArticle)
  .post('/delete-article', deleteArticle)
  .post('/update-article', updateArticle)
  // 用户信息
  .post('/update-user', UserController.updateUser)
  .post('/login', UserController.login)
  // 说说
  .get('/get-say', SayController.findSay)
  .post('/add-say', SayController.addSay)
  .post('/delete-say', SayController.deleteSay)
  // 收藏
  .get('/get-collect', CollectController.findCollect)
  .post('/add-collect', CollectController.addCollect)
  .post('/delete-collect', CollectController.deleteCollect)
export default router
