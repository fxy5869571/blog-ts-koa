import * as KoaRouter from 'koa-router'
import controller from '../controller/'
const router = new KoaRouter()
const { ArticleController, InfoController, UserController } = controller
const { findInfo, findResume } = InfoController
const {
  articles,
  article,
  addArticle,
  deleteArticle,
  updateArticle,
} = ArticleController
router
  .get('/info', findInfo)
  .get('/resume', findResume)
  .get('/article', article)
  .get('/get-articles', articles)
  .post('/add-article', addArticle)
  .post('/delete-article', deleteArticle)
  .post('/update-article', updateArticle)
  .post('/update-user', UserController.updateUser)
  .post('/login', UserController.login)
export default router
