import * as jwt from 'jsonwebtoken'
import { admin, guest } from '../config'
import { User } from '../models/'

interface IUser {
  userName?: string
  password?: string
}
export default class InfoHelper {
  public static updateUser = async () => {
    const response = await User.create({
      password: 'guest',
      userName: 'guest',
    })
  }
  public static findUser = async (user: IUser) => {
    const response: any = await User.findOne({ userName: user.userName })

    if (!response) {
      return { message: '用户名错误', type: 'error' }
    } else if (user.password !== response.password) {
      return { message: '密码错误', type: 'error' }
    } else if (response.userName === 'admin') {
      const { userName, _id } = response
      const token = jwt.sign({ _id }, admin)
      return {
        message: '欢迎回来，亲爱的超级管理员',
        user: { userName, _id, token },
      }
    } else {
      const { userName, _id } = response
      const token = jwt.sign({ _id }, guest)
      return {
        message: '登陆成功,您现在是游客',
        user: { userName, _id, token },
      }
    }
  }
}
