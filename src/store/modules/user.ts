import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type {
  LoginForm,
  LoginResponseData,
} from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN()!,
      menuRoutes: constantRoute,
    }
  },

  action: {
    async userLogin(data: LoginForm) {
      let result: LoginResponseData = await reqLogin(data)
      // success=>token
      // error=>error.message
      if (result.code === 200) {
        this.token = (result.data.token as string)
        // 持久化
        SET_TOKEN(result.data as string)
        // return 'ok'
      } else {
        return Promise.reject(new Error(result.data as string))
      }
    }

  },
  getters: {

  }
})

export default useUserStore;
