import Models from '../models/'
const { Article } = Models
interface IQuery {
  pageIndex: string
  pageSize: string
}
export default class ArticleHelper {
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

  public static findArticleById = async (Id: string) =>
    await Article.findById(Id)
}
