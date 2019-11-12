import { start, goto, prefetch, prefetchRoutes } from '@sapper/app'
import UserService from './services/user.service'

start({
  target: document.querySelector('#sapper'),
}).then(async function() {
  const { status } = await UserService.validate()

  console.log(status)

  // status !== 200 && goto('login')
})

prefetch('platform/profile').then(() => {
  console.log('PREFETCH')
})

prefetchRoutes().then(() => console.log('PREFETCH ROUTES'))
