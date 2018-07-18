import * as _ from 'lodash'
import { Article, Collect, Info, Say } from '../models/'

export default class InfoHelper {
  // 博客首页数据，有点乱(⊙o⊙)…，调用一次接口网站访问人数+1
  public static findInfo = async () => {
    const articles: any[] = await Article.find({}, { _id: 1, tag: 1, title: 1 })
    const tag = _.uniqBy(articles.map(item => item.tag), 'title')
    const info: any = await Info.find({})
    const ArticleNum = await Article.count({})
    if (Array.isArray(info[0].accessData)) {
      info[0].accessData.forEach((item: any) => {
        if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
          item.value += 1
        }
      })
    }
    await Info.update(
      { _id: info[0]._id },
      { access: ++info[0].access, accessData: info[0].accessData }
    )
    const lastArticle = articles
      .filter((item, index) => index < 10)
      .map(item => ({ _id: item._id, title: item.title }))
    return { ...info[0]._doc, tag, lastArticle, ArticleNum }
  }
  // 博客后端管理首页数据，有点乱(⊙o⊙)…
  public static findAdminInfo = async () => {
    const articleNumber = await Article.count({})
    const articles = await Article.find({}).sort({ create_at: -1 })
    const lastArticle = articles[0]
    const sayNumber = await Say.count({})
    const says = await Say.find({})
      .sort({ create_at: -1 })
      .limit(1)
    const lastSay = says[0]
    const collectNumber = await Collect.count({})
    const collects = await Collect.find({})
      .sort({ create_at: -1 })
      .limit(1)
    const lastCollect = collects[0]
    const info: any = await Info.find({})
      .sort({})
      .limit(1)
    return {
      access: info[0].access,
      accessData: info[0].accessData,
      articleNumber,
      collectNumber,
      data: info[0].data,
      lastArticle,
      lastCollect,
      lastSay,
      sayNumber,
    }
  }
}
