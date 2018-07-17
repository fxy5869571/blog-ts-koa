import * as _ from 'lodash'
import { Article, Collect, Info, Say } from '../models/'

export default class InfoHelper {
  public static findInfo = async () => {
    const articles: any[] = await Article.find({}, { _id: 1, tag: 1, title: 1 })
    const tag = _.uniqBy(articles.map(item => item.tag), 'title')
    const info: any = await Info.find({})
    const ArticleNum = await Article.count({})
    await Info.update({ _id: info[0]._id }, { access: ++info[0].access })
    const lastArticle = articles
      .filter((item, index) => index < 10)
      .map(item => ({ _id: item._id, title: item.title }))
    return { ...info[0]._doc, tag, lastArticle, ArticleNum }
  }
  public static findAdminInfo = async () => {
    const articleNumber = await Article.count({})
    const sayNumber = await Say.count({})
    const collectNumber = await Collect.count({})
    const info: any = await Info.find({})
    return {
      access: info[0].access,
      articleNumber,
      collectNumber,
      data: info[0].data,
      sayNumber,
    }
  }
}
