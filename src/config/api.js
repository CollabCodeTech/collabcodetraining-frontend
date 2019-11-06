import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
})

api.interceptors.response.use(response => response, error => error.response)

export default api
