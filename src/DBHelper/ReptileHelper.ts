import * as cheerio from 'cheerio'
import * as iconv from 'iconv-lite'
import * as request from 'request'

import { Reptile } from '../models'
let num = 1

const toQuery = async (body: any) => {
  const $ = cheerio.load(body, { decodeEntities: false })
  const title = $('h1').text()
  const content = $('#content')
    .text()
    .replace(/\s+/g, '')
  await Reptile.create({
    content,
    title,
  })
  num += 1
  console.log('爬取成功' + title)
  getbody()
}

const getbody = () => {
  request(
    `http://www.quanben.io/n/xiaoyuanquannenggaoshou/${num}.html`,
    (err: any, res: any, body: any) => {
      toQuery(body)
    }
  )
}
export default class ReptileHelper {
  public static async reptile() {
    getbody()
  }
}
