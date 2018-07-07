import { Article } from '../models/'

interface IQuery {
  pageIndex: string
  pageSize: string
}
interface IArticle {
  _id?: string
  tag: string
  create_at: string
}
const tagColors: string[] = [
  '#87d068',
  '#108ee9',
  '#6b61f0',
  '#f8a72a',
  '#fe5500',
  '#2db7f5',
]
export default class ArticleHelper {
  // 分页查询文章
  public static findArticles = async (query: IQuery) => {
    const { pageSize, pageIndex } = query
    const Skip =
      Number.parseInt(pageIndex) * Number.parseInt(pageSize) -
      Number.parseInt(pageSize)
    const articles = await Article.find()
      .sort({ create_at: -1 })
      .limit(Number.parseInt(pageSize))
      .skip(Skip)
    const total = await Article.count({}, (err: string, count: number) => {
      if (err) {
        return false
      } else {
        return count
      }
    })
    return { total, articles }
  }
  // 查询文章详情
  public static findArticleById = async (id: string) =>
    await Article.findById(id)
  // 添加文章
  public static createArticle = async (article: IArticle) => {
    // 随机标签颜色
    const tag = {
      color: tagColors[Math.floor(Math.random() * 6)],
      title: article.tag,
    }
    const response = await Article.create(
      { ...article, tag, create_at: new Date() },
      (error: string, doc: object) => {
        if (error) {
          throw error
        } else {
          return doc
        }
      }
    )
    return response
  }
  // 删除文章
  public static deleteArticleById = async (id: string) => {
    return await Article.remove({ _id: id })
  }
  public static updateArticleById = async (article: IArticle) => {
    const tag = {
      color: tagColors[Math.floor(Math.random() * 6)],
      title: article.tag,
    }

    const response = await Article.update(
      { _id: article._id },
      { ...article, tag }
    )
    return response
  }
}
