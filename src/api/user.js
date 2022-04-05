import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api-token-auth/',
    method: 'post',
    data,
  })
}

export function getInfo(token, id) {
  return request({
    url: '/users/' + id + '/',
    method: 'get',
    // params: { token },
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post',
  })
}
