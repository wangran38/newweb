import request from '@/utils/request'

export function getlist(params) {
  return request({
    url: '/admin/devicelist',
    method: 'post',
    data: params
  })
}

export function add(params) {
  return request({
    url: '/admin/adddevice',
    method: 'post',
    data: params
  })
}

export function getoptions(params) {
  return request({
    url: '/admin/treecategory',
    method: 'post',
    data: params
  })
}

export function edit(params) {
  return request({
    url: '/admin/editdevice',
    method: 'post',
    data: params
  })
}

export function del(params) {
  return request({
    url: '/admin/deldevice',
    method: 'post',
    data: params
  })
}