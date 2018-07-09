import * as KoaRouter from 'koa-router'
import {
  ArticleController,
  InfoController,
  SayController,
  UserController,
} from '../controller/'
const router = new KoaRouter()

const { findInfo, findResume } = InfoController
const {
  articles,
  article,
  addArticle,
  deleteArticle,
  updateArticle,
} = ArticleController
router
  .get('/get-info', findInfo)
  .get('/get-resume', findResume)
  .get('/get-article', article)
  .get('/get-articles', articles)
  .get('/get-say', SayController.findSay)
  .post('/add-article', addArticle)
  .post('/delete-article', deleteArticle)
  .post('/update-article', updateArticle)
  .post('/update-user', UserController.updateUser)
  .post('/login', UserController.login)
  .post('/add-say', SayController.addSay)
  .post('/delete-say', SayController.deleteSay)
export default router
