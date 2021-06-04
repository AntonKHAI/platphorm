import axios from 'axios'
import { Notify } from 'quasar'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
})

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers['Authorization'] = `Bearer ${ token }`
  return config
}, error => error)

apiClient.interceptors.response.use(res => {
  if (res.data && !res.data.status && res.data.data === null) {
    Notify.create({
      message: 'API REQUEST ERROR'
    })
    throw new Error('API REQUEST ERROR')
  }
  return res.data
}, error => {
  if (error.response.status === 403) {
    localStorage.removeItem('token')
    window.location.assign('/')
  }
  throw error
})

export default apiClient
