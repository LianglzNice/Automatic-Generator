import request from '@/utils/request'

export function getFile(data:any):any {
    return request({
        url: '/export',
        method: 'post',
        data
    })
}