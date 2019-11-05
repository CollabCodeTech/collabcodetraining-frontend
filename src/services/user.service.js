import api from '../config/api'

const save = async user => {
  try {
    const res = await api.post('/users', user)

    return res.data
  } catch (error) {
    return error
  }
}

const login = async user => {
  try {
    const { status, data } = await api.post('/auth/login', user)

    return { status, data }
  } catch (error) {
    return error
  }
}

export default { save, login }
