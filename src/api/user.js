import request from '@/utils/request'

/**
 *
 * @param {*} data
 * @returns
 * 登录
 */
export function login(data) {
  return request('/sys/login', 'post', data)
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
