import axios from 'axios'

export default axios.create({
  baseURL: process.env.BASE_URL,
})

api.interceptors.response.use(response => response, error => error.response)

export default api
