import fetch from '@/utils/fetch'
import { post } from "@/utils/http"

export function loginByUsername(userInfo) {
  return post('/avenue/api/v1/user/login',userInfo)
}

export function getUserInfo(token) {
  return fetch({
    url: '/api/userinfo/',
    method: 'get',
    params: { token }
  })
}

export function logout(data) {
  return fetch({
    url: '/api/userlogout/',
    method: 'post',
    data: data
  })
}
