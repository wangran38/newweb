import request from '@/utils/request'

export function getlist(params) {
  return request({
    url: '/admin/simcardlist',
    method: 'post',
    data: params
  })
}

export function add(params) {
  return request({
    url: '/admin/addsimcard',
    method: 'post',
    data: params
  })
}

// export function getoptions(params) {
//   return request({
//     url: '/admin/treecategory',
//     method: 'post',
//     data: params
//   })
// }

export function edit(params) {
  return request({
    url: '/admin/editsimcard',
    method: 'post',
    data: params
  })
}

export function del(params) {
  return request({
    url: '/admin/delsimcard',
    method: 'post',
    data: params
  })
}