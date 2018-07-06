import { Context } from 'koa'
import DBHelper from '../DBHelper'
const {
  findArticleById,
  findArticles,
  createArticle,
  deleteArticleById,
  updateArticleById,
} = DBHelper.ArticleHelper
export default class ArticleController {
  public static async articles(ctx: Context) {
    const { pageIndex, pageSize, timeFile } = ctx.query
    const response = await findArticles({ pageSize, pageIndex })
    const { articles, total } = response
    if (timeFile) {
      ctx.body = {
        articles: articles.map((item: any) => {
          const { _id, create_at, title } = item._doc
          return { _id, create_at, title }
        }),
        total,
      }
    } else {
      ctx.body = {
        articles: articles.map((item: any) => ({
          ...item._doc,
          content: item._doc.content.substr(0, 180),
        })),
        total,
      }
    }
  }
  public static async article(ctx: Context) {
    const Article = await findArticleById(ctx.query.Id)
    ctx.body = Article
  }
  public static async addArticle(ctx: Context) {
    const response = createArticle(ctx.request.body)
    if (response) {
      ctx.body = { message: '发表文章成功' }
    } else {
      ctx.body = { message: '发表文章失败' }
    }
  }
  public static async deleteArticle(ctx: Context) {
    const response = await deleteArticleById(ctx.request.body.id)
    if (response.ok === 1) {
      ctx.body = { message: '文章删除成功' }
    } else {
      ctx.body = { message: '操作失败' }
    }
  }
  public static async updateArticle(ctx: Context) {
    const response = await updateArticleById(ctx.request.body)
    if (response.ok === 1) {
      ctx.body = { message: '文章修改成功' }
    } else {
      ctx.body = { message: '操作失败' }
    }
  }
}
