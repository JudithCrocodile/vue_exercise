
// 二次封装axios
import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {

    return config
  },
)

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN過期'
        break
      case 403:
        message = '無權訪問'
        break
      case 404:
        message = '請求地址錯誤'
        break
      case 500:
        message = '伺服器出現問題'
        break
      default:
        message = '網路出現問題'
        break
    }

    ElMessage({
      type: 'error',
      message
    })
    return Promise.reject(error)
  },
)

export default request
