import api from '../config/api'

const save = async user => {
  try {
    const res = await api.post('/user', user)

    return res
  } catch (error) {
    return error
  }
}

const login = async user => {
  try {
    const res = await api.post('/auth/login', user)

    return res
  } catch (error) {
    return error
  }
}

const validate = async () => {
  try {
    const res = await api.post('/auth/refresh')

    return res
  } catch (error) {
    return error
  }
}

export default { save, login, validate }
