import axios from 'axios'
import { ElMessage } from 'element-plus';

// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:8020',
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    if(response.headers['content-type'] === 'application/x-download' || response.headers['content-type'] === 'application/octet-stream'){
      return response
    }

    // if the custom code is not 20000, it is judged as an error.
    if (String(res.code).substr(0, 1) !== '2') {
        ElMessage.closeAll();
        ElMessage({
            showClose: true,
            message: res.msg,
            type: 'warning'
        })
      return Promise.reject(new Error(res.msg || 'Error'))

    } else {
      return res
    }
  },
  error => {
    const msg = error.response ? error.response.data.msg : error.message === 'Network Error' ? '网络报错啦' : error.message;

    ElMessage.closeAll();
    ElMessage({
        showClose: true,
        message: msg,
        type: 'warning'
    })

    return Promise.reject(error)
  }
)

export default service
