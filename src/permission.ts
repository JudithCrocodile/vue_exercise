import router from '@/router'
import pinia from './store'
import useUserStore from './store/modules/user'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from './setting'

let userStore = useUserStore(pinia)

router.beforeEach(async (to:any, from:any, next:any) => {
  document.title =  + `${setting.title} - ${to.meta.title}`
  nprogress.start()
  let token = userStore.token
  let username = userStore.username
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next({ ...to })
        } catch (error) {
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

router.afterEach((route) => {
  nprogress.done()
})
