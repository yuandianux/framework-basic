import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.request.use((config) => {
  // request interceptors
  Object.assign(config.headers, {
  })
  return config
})
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  // response interceptors
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.log('401错误操作')
        break
    }
  }
  return Promise.reject(error)
})

export function ajax (json) {
  return new Promise((resolve, reject) => {
    axios({
      url: json.url,
      method: json.method || 'GET',
      data: json.data || {},
      params: json.params || {}
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
