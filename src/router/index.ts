import * as KoaRouter from 'koa-router'
import controller from '../controller/'
const router = new KoaRouter()
const { ArticleController, InfoController } = controller
const { findInfo, findResume } = InfoController
const { articles, article, addArticle } = ArticleController
router
  .get('/articles', articles)
  .get('/info', findInfo)
  .get('/resume', findResume)
  .get('/article', article)
  .post('/add-article', addArticle)
export default router
