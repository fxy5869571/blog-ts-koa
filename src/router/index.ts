import * as KoaRouter from 'koa-router'
import controller from '../controller/'
const router = new KoaRouter()
const { ArticleController, InfoController } = controller
const { findInfo, findResume } = InfoController
const { articles, article, addArticle, deleteArticle } = ArticleController
router

  .get('/info', findInfo)
  .get('/resume', findResume)
  .get('/article', article)
  .get('/articles', articles)
  .post('/add-article', addArticle)
  .post('/delete-article', deleteArticle)
export default router
