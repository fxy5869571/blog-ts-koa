import * as KoaRouter from 'koa-router'
import controller from '../controller/'
const router = new KoaRouter()
const { ArticleController, InfoController } = controller
router
  .get('/articles', ArticleController.articles)
  .get('/info', InfoController.findInfo)
  .get('/article', ArticleController.article)
export default router
