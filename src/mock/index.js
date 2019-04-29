import Mock from 'mockjs'
import tableAPI from './table'
import loginAPI from './login'

// 登录相关
Mock.mock(/\/user\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// table相关
Mock.mock(/\/table\/list/, 'get', tableAPI.getList)

export default Mock

