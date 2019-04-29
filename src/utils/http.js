import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import { getToken,removeToken } from '@/utils/cookie-util'

// axios 配置
axios.defaults.timeout = 60000  // 请求超时时间
axios.defaults.baseURL = process.env.BASE_API  // api的base_url
axios.defaults.withCredentials = true // 允许携带cookies访问

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = store.getters.token
    config.data = JSON.stringify(config.data)
    config.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    if (token) {
      config.params = {'token': token}
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.status === 201) {
      this.$router.push({
        path: '/login',
        query: { redirect: this.$router.currentRoute.fullPath }
      })
    }
    return response
  }, error => {
    let res = error.response
    if(res.status && res.status >= 500){
      Message({
        message: "服务器错误, 请稍候",
        type: 'error',
        duration: 5 * 1000
      })
    }else if(res.status && res.status === 401){
      Message({
        message: "请先登录",
        type: 'error',
        duration: 5 * 1000
      })
      removeToken()
      localStorage.clear()
      this.$router.push('/login')
    }
    return Promise.reject(error)
    // return Promise.reject(error.response.data)
  }
)

// 封装GET方法
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
// 封装POST方法
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装PATCH方法
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装PUT方法
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 封装DELETE方法
export function del (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
