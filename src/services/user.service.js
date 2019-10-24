import api from '../config/api'

const save = async user => {
  const res = await api.post('/users', user)
  // const res = await api.get('/users')
  console.log('RES', res)
}

export default { save }
