import axios from 'axios'
// import { getToken } from '@/utils/auth'
import { ElLoading } from 'element-plus'

// import apiConfig from '~/config'

// const MODE = import.meta.env.MODE // 环境变量
// const base = apiConfig[MODE] // 获取环境变量相对应的属性值

let loadingRequestCount = 0 // 初始化请求loading数
let loadingInstance // loading实例
// let reqQueue = [] // 当前执行中的http请求队列，存放的是每个请求的key

/**
 * request发起时的处理：加入请求队列或取消该请求。此时的取消是指请求未发送。
 * @param {Object} config request的配置信息
 * @param {Function} cancel axios封装的该请求的cancel方法
 */
// const reqCancel = (config, cancel) => {
//   if (!cancel) return false
//   // 请求的关键字为url和method的拼接
//   // 由于baseURL的存在，req和res的url存在差异。故request中加入baseURL
//   const requestKey = `${process.env.BASE_API}${config.url}&${config.method}`

//   // 判断是否已经存在于请求队列中
//   if (reqQueue.includes(requestKey)) {
//     cancel(`接口${config.url}重复调用，已取消`) // 若该请求已在队列中存在且尚未返回，取消该请求
//   } else {
//     reqQueue.push(requestKey) // 若该请求为新的请求，将其放入请求队列中
//   }
// }
/**
 * response时的处理：从请求队列中将其移除
 * @param {Object} config response的信息
 */
// const resCancel = config => {
//   const responseKey = `${config.url}&${config.method}`
//   // 若该请求已返回且存在于队列中，则从请求队列中删除
//   if (reqQueue.includes(responseKey)) {
//     reqQueue.splice(reqQueue.indexOf(responseKey), 1)
//   }
// }
// 创建axios实例
const service = axios.create({
  // baseURL: base.apiBaseUrl, // 云上开发服务的数据
  baseURL: '/api',
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 目前只对post请求做去重拦截
    // if (config.method === 'post') {
    //   config.cancelToken = new axios.CancelToken(c => {
    //     reqCancel(config, c)
    //   })
    // }
    if (loadingRequestCount === 0) {
      // 添加全局loading
      loadingInstance = ElLoading.service({
        lock: false,
        text: '加载中，请稍候',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      })
    }
    // 调接口时禁用键盘空格键和enter,防止多次调接口
    // eslint-disable-next-line
    window.onkeydown = function(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.stopPropagation()
        return false
      }
    }
    loadingRequestCount += 1 // loading请求数加1
    // if (getToken()) {
    //   config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  },
  (error) => {
    loadingInstance.close()
    window.onkeydown = null
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response) => {
    // response时将其从请求队列中移除
    // if (response.config.method === 'post') {
    //   resCancel(response.config)
    // }
    // 请求返回时loadingCount值减1，值为0时，即请求均已返回，关闭loading
    if (loadingRequestCount > 0) {
      loadingRequestCount -= 1
    }
    if (loadingRequestCount === 0) {
      loadingInstance.close()
      window.onkeydown = null
    }
    return response.data
  },
  (error) => {
    loadingInstance.close()
    window.onkeydown = null
    // 如果是触发cancelToken取消了请求，也需要对loading计数器做减一操作
    if (error && error.message && error.message.includes('重复调用，已取消')) {
      loadingRequestCount -= 1
    }
    return Promise.reject(error)
  }
)

/**
 * GET请求，调用方法: import后直接使用，如 get('url', {id: xx, ...})
 * @param {String} url 接口URL，如'/factor/allinvoice'
 * @param {Object} params get请求传参
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params
      })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * POST请求，调用方法: import后直接使用，如 post('url', {id: xx, form: xxx, ...})
 * @param {String} url 接口URL，如'/factor/updatebillInfo'
 * @param {Object} params post请求传参
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params)
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * PUT请求，调用方法: import后直接使用，如 put('url', {id: xx, form: xxx, ...})
 * @param {String} url 接口URL
 * @param {Object} params PUT请求传参
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    service
      .put(url, params)
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * DELETE请求，调用方法: import后直接使用，如 put('url', {id: xx, form: xxx, ...})
 * @param {String} url 接口URL
 * @param {Object} params delete请求传参
 */
export function deleteInfor(url, params) {
  return new Promise((resolve, reject) => {
    service
      .delete(url, { data: JSON.parse(params) })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * GET请求，用于下载文件时使用。解决下载文件名与显示不同的问题
 * @param {String} url 接口URL
 * @param {Object} params 请求传参
 * @param {String} type responseType
 */
export function getFile(url, params, type) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params,
        responseType: type
      })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}
