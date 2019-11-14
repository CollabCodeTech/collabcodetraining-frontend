import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true
})

api.interceptors.response.use(response => response, error => error.response)

export default api
