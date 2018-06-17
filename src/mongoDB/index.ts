import * as mongoose from 'mongoose'
import { DBpath } from '../config'
;(mongoose as any).Promise = global.Promise
export const DB = mongoose
export const { Schema } = DB
// 数据库
export const connect = () => {
  // 连接数据库
  DB.connect(DBpath)
  // 连接错误
  DB.connection.on('error', error => {
    // tslint:disable-next-line
    console.error('数据库连接失败!', error)
  })

  // 连接成功
  DB.connection.once('open', () => {
    // tslint:disable-next-line
    console.log('数据库连接成功!')
  })

  return DB
}
